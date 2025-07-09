import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { ValidationMiddleware, ValidationSchema } from '../middlewares/ValidationMiddleware';
import { LoggingMiddleware } from '../middlewares/LoggingMiddleware';
import { RateLimitMiddleware, RateLimitConfig } from '../middlewares/RateLimitMiddleware';
import { ErrorHandlerMiddleware } from '../middlewares/ErrorHandlerMiddleware';

export interface RouteRequest {
    method: string;
    path: string;
    headers: Record<string, string>;
    body?: any;
    params?: Record<string, string>;
    query?: Record<string, string>;
    clientId?: string;
}

export interface RouteResponse {
    statusCode: number;
    headers: Record<string, string>;
    body: any;
}

export abstract class BaseRouter {
    protected static handleRequest(
        req: RouteRequest,
        handler: (req: RouteRequest) => Promise<any> | any,
        options?: {
            requireAuth?: boolean;
            validation?: ValidationSchema;
            rateLimit?: RateLimitConfig;
        }
    ): Promise<RouteResponse> {
        return LoggingMiddleware.measureExecutionTime(
            `${req.method} ${req.path}`,
            req.headers['user-id'],
            async () => {
                try {
                    // Rate limiting
                    if (options?.rateLimit && req.clientId) {
                        const rateLimitInfo = RateLimitMiddleware.checkRateLimit(req.clientId, options.rateLimit);
                        if (rateLimitInfo.limited) {
                            return this.errorResponse(
                                429,
                                ErrorHandlerMiddleware.createRateLimitError(rateLimitInfo.resetTime)
                            );
                        }
                    }

                    // Autenticação
                    if (options?.requireAuth) {
                        const token = this.extractToken(req);
                        if (!token) {
                            return this.errorResponse(401, {
                                success: false,
                                error: { message: 'Token de autenticação necessário', code: 'UNAUTHORIZED', timestamp: new Date().toISOString() }
                            });
                        }

                        try {
                            const user = AuthMiddleware.requireAuth(token);
                            req.headers['user-id'] = user.id;
                        } catch (error) {
                            return this.errorResponse(401, ErrorHandlerMiddleware.handleError(error as Error));
                        }
                    }

                    // Validação
                    if (options?.validation && req.body) {
                        const validation = ValidationMiddleware.validate(req.body, options.validation);
                        if (!validation.isValid) {
                            return this.errorResponse(400, {
                                success: false,
                                error: { message: validation.errors.join(', '), code: 'VALIDATION_ERROR', timestamp: new Date().toISOString() }
                            });
                        }
                        req.body = validation.data;
                    }

                    // Executar handler
                    const result = await handler(req);
                    
                    // Log de sucesso
                    LoggingMiddleware.info(`${req.method} ${req.path} - Success`, req.headers['user-id']);
                    
                    return this.successResponse(result);
                } catch (error) {
                    // Log de erro
                    LoggingMiddleware.error(`${req.method} ${req.path} - Error`, req.headers['user-id'], undefined, error instanceof Error ? error.message : String(error));
                    
                    const errorResponse = ErrorHandlerMiddleware.handleError(error instanceof Error ? error : new Error(String(error)));
                    return this.errorResponse(500, errorResponse);
                }
            }
        );
    }

    protected static extractToken(req: RouteRequest): string | null {
        const authHeader = req.headers['authorization'] || req.headers['Authorization'];
        if (!authHeader) return null;
        
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
        
        return parts[1];
    }

    protected static successResponse(data: any, statusCode: number = 200): RouteResponse {
        return {
            statusCode,
            headers: { 'Content-Type': 'application/json' },
            body: data
        };
    }

    protected static errorResponse(statusCode: number, error: any): RouteResponse {
        return {
            statusCode,
            headers: { 'Content-Type': 'application/json' },
            body: error
        };
    }

    protected static extractParams(path: string, pattern: string): Record<string, string> {
        const params: Record<string, string> = {};
        const pathParts = path.split('/');
        const patternParts = pattern.split('/');

        for (let i = 0; i < patternParts.length; i++) {
            const part = patternParts[i];
            if (part.startsWith(':')) {
                const paramName = part.substring(1);
                params[paramName] = pathParts[i] || '';
            }
        }

        return params;
    }

    protected static matchRoute(path: string, pattern: string): boolean {
        const pathParts = path.split('/');
        const patternParts = pattern.split('/');

        if (pathParts.length !== patternParts.length) return false;

        for (let i = 0; i < patternParts.length; i++) {
            const part = patternParts[i];
            if (!part.startsWith(':') && part !== pathParts[i]) {
                return false;
            }
        }

        return true;
    }
}
