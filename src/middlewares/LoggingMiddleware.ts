export interface LogEntry {
    timestamp: Date;
    level: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';
    action: string;
    userId?: string;
    details?: any;
    duration?: number;
    error?: string;
}

export class LoggingMiddleware {
    private static logs: LogEntry[] = [];
    private static maxLogs = 1000;

    static log(level: LogEntry['level'], action: string, userId?: string, details?: any, error?: string): void {
        const entry: LogEntry = {
            timestamp: new Date(),
            level,
            action,
            userId,
            details,
            error
        };

        this.logs.push(entry);

        // Manter apenas os últimos maxLogs
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }

        // Log no console também
        this.logToConsole(entry);
    }

    private static logToConsole(entry: LogEntry): void {
        const timestamp = entry.timestamp.toISOString();
        const userId = entry.userId ? `[User: ${entry.userId}]` : '';
        const message = `[${timestamp}] ${entry.level} ${userId} ${entry.action}`;
        
        switch (entry.level) {
            case 'ERROR':
                console.error(message, entry.error || '', entry.details || '');
                break;
            case 'WARN':
                console.warn(message, entry.details || '');
                break;
            case 'DEBUG':
                console.debug(message, entry.details || '');
                break;
            default:
                console.log(message, entry.details || '');
        }
    }

    static info(action: string, userId?: string, details?: any): void {
        this.log('INFO', action, userId, details);
    }

    static warn(action: string, userId?: string, details?: any): void {
        this.log('WARN', action, userId, details);
    }

    static error(action: string, userId?: string, details?: any, error?: string): void {
        this.log('ERROR', action, userId, details, error);
    }

    static debug(action: string, userId?: string, details?: any): void {
        this.log('DEBUG', action, userId, details);
    }

    static logUserAction(action: string, userId: string, details?: any): void {
        this.info(`USER_ACTION: ${action}`, userId, details);
    }

    static logSystemAction(action: string, details?: any): void {
        this.info(`SYSTEM_ACTION: ${action}`, undefined, details);
    }

    static logError(action: string, error: Error, userId?: string, details?: any): void {
        this.error(action, userId, details, error.message);
    }

    // Métricas e relatórios
    static getRecentLogs(hours: number = 24): LogEntry[] {
        const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
        return this.logs.filter(log => log.timestamp > cutoff);
    }

    static getLogsByUser(userId: string, hours: number = 24): LogEntry[] {
        const recentLogs = this.getRecentLogs(hours);
        return recentLogs.filter(log => log.userId === userId);
    }

    static getLogsByLevel(level: LogEntry['level'], hours: number = 24): LogEntry[] {
        const recentLogs = this.getRecentLogs(hours);
        return recentLogs.filter(log => log.level === level);
    }

    static getErrorLogs(hours: number = 24): LogEntry[] {
        return this.getLogsByLevel('ERROR', hours);
    }

    static getLogStats(hours: number = 24): {
        total: number;
        byLevel: { [K in LogEntry['level']]: number };
        uniqueUsers: number;
        mostActiveUsers: { userId: string; count: number }[];
    } {
        const recentLogs = this.getRecentLogs(hours);
        
        const byLevel = {
            INFO: 0,
            WARN: 0,
            ERROR: 0,
            DEBUG: 0
        };

        const userCounts: { [userId: string]: number } = {};

        recentLogs.forEach(log => {
            byLevel[log.level]++;
            
            if (log.userId) {
                userCounts[log.userId] = (userCounts[log.userId] || 0) + 1;
            }
        });

        const mostActiveUsers = Object.entries(userCounts)
            .map(([userId, count]) => ({ userId, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

        return {
            total: recentLogs.length,
            byLevel,
            uniqueUsers: Object.keys(userCounts).length,
            mostActiveUsers
        };
    }

    static clearLogs(): void {
        this.logs = [];
    }

    static exportLogs(format: 'json' | 'csv' = 'json'): string {
        if (format === 'csv') {
            const headers = 'timestamp,level,action,userId,details,error\n';
            const rows = this.logs.map(log => {
                const timestamp = log.timestamp.toISOString();
                const details = log.details ? JSON.stringify(log.details).replace(/"/g, '""') : '';
                const error = log.error ? log.error.replace(/"/g, '""') : '';
                return `"${timestamp}","${log.level}","${log.action}","${log.userId || ''}","${details}","${error}"`;
            }).join('\n');
            return headers + rows;
        }
        
        return JSON.stringify(this.logs, null, 2);
    }

    // Middleware para medir tempo de execução
    static async measureExecutionTime<T>(
        action: string,
        userId: string | undefined,
        operation: () => Promise<T> | T
    ): Promise<T> {
        const startTime = Date.now();
        
        try {
            const result = await operation();
            const duration = Date.now() - startTime;
            
            this.info(`${action} - Concluído`, userId, { duration: `${duration}ms` });
            return result;
        } catch (error) {
            const duration = Date.now() - startTime;
            this.error(`${action} - Erro`, userId, { duration: `${duration}ms` }, error instanceof Error ? error.message : String(error));
            throw error;
        }
    }
}
