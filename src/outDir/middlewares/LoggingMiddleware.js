"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingMiddleware = void 0;
class LoggingMiddleware {
    static log(level, action, userId, details, error) {
        const entry = {
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
    static logToConsole(entry) {
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
    static info(action, userId, details) {
        this.log('INFO', action, userId, details);
    }
    static warn(action, userId, details) {
        this.log('WARN', action, userId, details);
    }
    static error(action, userId, details, error) {
        this.log('ERROR', action, userId, details, error);
    }
    static debug(action, userId, details) {
        this.log('DEBUG', action, userId, details);
    }
    static logUserAction(action, userId, details) {
        this.info(`USER_ACTION: ${action}`, userId, details);
    }
    static logSystemAction(action, details) {
        this.info(`SYSTEM_ACTION: ${action}`, undefined, details);
    }
    static logError(action, error, userId, details) {
        this.error(action, userId, details, error.message);
    }
    // Métricas e relatórios
    static getRecentLogs(hours = 24) {
        const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
        return this.logs.filter(log => log.timestamp > cutoff);
    }
    static getLogsByUser(userId, hours = 24) {
        const recentLogs = this.getRecentLogs(hours);
        return recentLogs.filter(log => log.userId === userId);
    }
    static getLogsByLevel(level, hours = 24) {
        const recentLogs = this.getRecentLogs(hours);
        return recentLogs.filter(log => log.level === level);
    }
    static getErrorLogs(hours = 24) {
        return this.getLogsByLevel('ERROR', hours);
    }
    static getLogStats(hours = 24) {
        const recentLogs = this.getRecentLogs(hours);
        const byLevel = {
            INFO: 0,
            WARN: 0,
            ERROR: 0,
            DEBUG: 0
        };
        const userCounts = {};
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
    static clearLogs() {
        this.logs = [];
    }
    static exportLogs(format = 'json') {
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
    static async measureExecutionTime(action, userId, operation) {
        const startTime = Date.now();
        try {
            const result = await operation();
            const duration = Date.now() - startTime;
            this.info(`${action} - Concluído`, userId, { duration: `${duration}ms` });
            return result;
        }
        catch (error) {
            const duration = Date.now() - startTime;
            this.error(`${action} - Erro`, userId, { duration: `${duration}ms` }, error instanceof Error ? error.message : String(error));
            throw error;
        }
    }
}
exports.LoggingMiddleware = LoggingMiddleware;
LoggingMiddleware.logs = [];
LoggingMiddleware.maxLogs = 1000;
