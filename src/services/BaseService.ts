import { LoggingMiddleware } from '../middlewares/LoggingMiddleware';

export interface ServiceResult<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export abstract class BaseService {
    protected static async executeWithRetry<T>(
        operation: () => Promise<T>,
        maxRetries: number = 3,
        delayMs: number = 1000
    ): Promise<T> {
        let lastError: Error | null = null;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await operation();
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                
                if (attempt === maxRetries) {
                    throw lastError;
                }
                
                LoggingMiddleware.warn(`Tentativa ${attempt} falhou, tentando novamente em ${delayMs}ms`, undefined, { error: lastError.message });
                await this.delay(delayMs);
                delayMs *= 2; // Backoff exponencial
            }
        }
        
        throw lastError;
    }

    protected static async delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    protected static success<T>(data: T, message?: string): ServiceResult<T> {
        return {
            success: true,
            data,
            message
        };
    }

    protected static error<T>(error: string): ServiceResult<T> {
        return {
            success: false,
            error
        };
    }

    protected static async logOperation<T>(
        operationName: string,
        operation: () => Promise<T>,
        userId?: string
    ): Promise<T> {
        return LoggingMiddleware.measureExecutionTime(
            `SERVICE: ${operationName}`,
            userId,
            operation
        );
    }

    protected static validateRequired(data: any, fields: string[]): string[] {
        const errors: string[] = [];
        
        for (const field of fields) {
            if (!data[field]) {
                errors.push(`Campo '${field}' é obrigatório`);
            }
        }
        
        return errors;
    }

    protected static isValidUrl(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    protected static formatCurrency(value: number): string {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    protected static formatPercentage(value: number): string {
        return new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2
        }).format(value / 100);
    }
}
