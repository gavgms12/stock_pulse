export interface ErrorResponse {
    success: false;
    error: {
        message: string;
        code: string;
        details?: any;
        timestamp: string;
    };
}

export interface AppError {
    message: string;
    code: string;
    statusCode: number;
    details?: any;
}

export class ErrorHandlerMiddleware {
    private static errorCodes = {
        // Erros de autenticação
        UNAUTHORIZED: { code: 'UNAUTHORIZED', statusCode: 401 },
        FORBIDDEN: { code: 'FORBIDDEN', statusCode: 403 },
        TOKEN_EXPIRED: { code: 'TOKEN_EXPIRED', statusCode: 401 },
        
        // Erros de validação
        VALIDATION_ERROR: { code: 'VALIDATION_ERROR', statusCode: 400 },
        INVALID_INPUT: { code: 'INVALID_INPUT', statusCode: 400 },
        REQUIRED_FIELD: { code: 'REQUIRED_FIELD', statusCode: 400 },
        
        // Erros de recursos
        NOT_FOUND: { code: 'NOT_FOUND', statusCode: 404 },
        ALREADY_EXISTS: { code: 'ALREADY_EXISTS', statusCode: 409 },
        RESOURCE_CONFLICT: { code: 'RESOURCE_CONFLICT', statusCode: 409 },
        
        // Erros de negócio
        INSUFFICIENT_FUNDS: { code: 'INSUFFICIENT_FUNDS', statusCode: 400 },
        INVALID_OPERATION: { code: 'INVALID_OPERATION', statusCode: 400 },
        BUSINESS_RULE_VIOLATION: { code: 'BUSINESS_RULE_VIOLATION', statusCode: 400 },
        
        // Erros de sistema
        INTERNAL_ERROR: { code: 'INTERNAL_ERROR', statusCode: 500 },
        DATABASE_ERROR: { code: 'DATABASE_ERROR', statusCode: 500 },
        EXTERNAL_SERVICE_ERROR: { code: 'EXTERNAL_SERVICE_ERROR', statusCode: 502 },
        
        // Erros de rate limiting
        RATE_LIMIT_EXCEEDED: { code: 'RATE_LIMIT_EXCEEDED', statusCode: 429 },
        
        // Erros de dados
        INVALID_DATA_FORMAT: { code: 'INVALID_DATA_FORMAT', statusCode: 400 },
        DATA_INTEGRITY_ERROR: { code: 'DATA_INTEGRITY_ERROR', statusCode: 400 }
    };

    static createError(code: keyof typeof ErrorHandlerMiddleware.errorCodes, message: string, details?: any): AppError {
        const errorInfo = this.errorCodes[code];
        return {
            message,
            code: errorInfo.code,
            statusCode: errorInfo.statusCode,
            details
        };
    }

    static handleError(error: Error | AppError, context?: string): ErrorResponse {
        // Log do erro
        console.error(`[ERROR] ${context || 'Unknown context'}:`, error);

        // Se já é um AppError, usar diretamente
        if (this.isAppError(error)) {
            return this.formatErrorResponse(error);
        }

        // Analisar tipo de erro comum
        const appError = this.classifyError(error);
        return this.formatErrorResponse(appError);
    }

    private static isAppError(error: any): error is AppError {
        return error && 
               typeof error.message === 'string' && 
               typeof error.code === 'string' && 
               typeof error.statusCode === 'number';
    }

    private static classifyError(error: Error): AppError {
        const message = error.message.toLowerCase();

        // Erros de autenticação
        if (message.includes('unauthorized') || message.includes('não autenticado')) {
            return this.createError('UNAUTHORIZED', error.message);
        }

        if (message.includes('forbidden') || message.includes('acesso negado')) {
            return this.createError('FORBIDDEN', error.message);
        }

        if (message.includes('token') && (message.includes('expired') || message.includes('expirado'))) {
            return this.createError('TOKEN_EXPIRED', error.message);
        }

        // Erros de validação
        if (message.includes('validation') || message.includes('validação') || message.includes('obrigatório')) {
            return this.createError('VALIDATION_ERROR', error.message);
        }

        // Erros de recursos
        if (message.includes('not found') || message.includes('não encontrado')) {
            return this.createError('NOT_FOUND', error.message);
        }

        if (message.includes('already exists') || message.includes('já existe')) {
            return this.createError('ALREADY_EXISTS', error.message);
        }

        // Erros de negócio
        if (message.includes('insufficient') || message.includes('insuficiente')) {
            return this.createError('INSUFFICIENT_FUNDS', error.message);
        }

        // Erro genérico
        return this.createError('INTERNAL_ERROR', 'Erro interno do servidor');
    }

    private static formatErrorResponse(error: AppError): ErrorResponse {
        return {
            success: false,
            error: {
                message: error.message,
                code: error.code,
                details: error.details,
                timestamp: new Date().toISOString()
            }
        };
    }

    static wrapAsync<T extends any[], R>(
        fn: (...args: T) => Promise<R>
    ): (...args: T) => Promise<R | ErrorResponse> {
        return async (...args: T): Promise<R | ErrorResponse> => {
            try {
                return await fn(...args);
            } catch (error) {
                return this.handleError(error instanceof Error ? error : new Error(String(error)));
            }
        };
    }

    static validateAndExecute<T>(
        operation: () => T,
        validations: Array<() => boolean | string>
    ): T | ErrorResponse {
        try {
            // Executar validações
            for (const validation of validations) {
                const result = validation();
                if (result !== true) {
                    const message = typeof result === 'string' ? result : 'Validação falhou';
                    const error = this.createError('VALIDATION_ERROR', message);
                    return this.formatErrorResponse(error);
                }
            }

            // Executar operação
            return operation();
        } catch (error) {
            return this.handleError(error instanceof Error ? error : new Error(String(error)));
        }
    }

    static createNotFoundError(resource: string, id?: string): ErrorResponse {
        const message = id ? `${resource} com ID '${id}' não encontrado` : `${resource} não encontrado`;
        const error = this.createError('NOT_FOUND', message);
        return this.formatErrorResponse(error);
    }

    static createValidationError(field: string, message: string): ErrorResponse {
        const error = this.createError('VALIDATION_ERROR', `Campo '${field}': ${message}`);
        return this.formatErrorResponse(error);
    }

    static createBusinessRuleError(message: string, details?: any): ErrorResponse {
        const error = this.createError('BUSINESS_RULE_VIOLATION', message, details);
        return this.formatErrorResponse(error);
    }

    static createRateLimitError(resetTime: Date): ErrorResponse {
        const error = this.createError('RATE_LIMIT_EXCEEDED', 'Limite de requisições excedido', {
            resetTime: resetTime.toISOString()
        });
        return this.formatErrorResponse(error);
    }

    static isErrorResponse(response: any): response is ErrorResponse {
        return response && 
               response.success === false && 
               response.error && 
               typeof response.error.message === 'string' &&
               typeof response.error.code === 'string';
    }
}
