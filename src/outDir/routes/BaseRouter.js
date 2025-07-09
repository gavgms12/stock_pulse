"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const ValidationMiddleware_1 = require("../middlewares/ValidationMiddleware");
const LoggingMiddleware_1 = require("../middlewares/LoggingMiddleware");
const RateLimitMiddleware_1 = require("../middlewares/RateLimitMiddleware");
const ErrorHandlerMiddleware_1 = require("../middlewares/ErrorHandlerMiddleware");
class BaseRouter {
    static handleRequest(req, handler, options) {
        return LoggingMiddleware_1.LoggingMiddleware.measureExecutionTime(`${req.method} ${req.path}`, req.headers['user-id'], async () => {
            try {
                // Rate limiting
                if (options?.rateLimit && req.clientId) {
                    const rateLimitInfo = RateLimitMiddleware_1.RateLimitMiddleware.checkRateLimit(req.clientId, options.rateLimit);
                    if (rateLimitInfo.limited) {
                        return this.errorResponse(429, ErrorHandlerMiddleware_1.ErrorHandlerMiddleware.createRateLimitError(rateLimitInfo.resetTime));
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
                        const user = AuthMiddleware_1.AuthMiddleware.requireAuth(token);
                        req.headers['user-id'] = user.id;
                    }
                    catch (error) {
                        return this.errorResponse(401, ErrorHandlerMiddleware_1.ErrorHandlerMiddleware.handleError(error));
                    }
                }
                // Validação
                if (options?.validation && req.body) {
                    const validation = ValidationMiddleware_1.ValidationMiddleware.validate(req.body, options.validation);
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
                LoggingMiddleware_1.LoggingMiddleware.info(`${req.method} ${req.path} - Success`, req.headers['user-id']);
                return this.successResponse(result);
            }
            catch (error) {
                // Log de erro
                LoggingMiddleware_1.LoggingMiddleware.error(`${req.method} ${req.path} - Error`, req.headers['user-id'], undefined, error instanceof Error ? error.message : String(error));
                const errorResponse = ErrorHandlerMiddleware_1.ErrorHandlerMiddleware.handleError(error instanceof Error ? error : new Error(String(error)));
                return this.errorResponse(500, errorResponse);
            }
        });
    }
    static extractToken(req) {
        const authHeader = req.headers['authorization'] || req.headers['Authorization'];
        if (!authHeader)
            return null;
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer')
            return null;
        return parts[1];
    }
    static successResponse(data, statusCode = 200) {
        return {
            statusCode,
            headers: { 'Content-Type': 'application/json' },
            body: data
        };
    }
    static errorResponse(statusCode, error) {
        return {
            statusCode,
            headers: { 'Content-Type': 'application/json' },
            body: error
        };
    }
    static extractParams(path, pattern) {
        const params = {};
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
    static matchRoute(path, pattern) {
        const pathParts = path.split('/');
        const patternParts = pattern.split('/');
        if (pathParts.length !== patternParts.length)
            return false;
        for (let i = 0; i < patternParts.length; i++) {
            const part = patternParts[i];
            if (!part.startsWith(':') && part !== pathParts[i]) {
                return false;
            }
        }
        return true;
    }
}
exports.BaseRouter = BaseRouter;
