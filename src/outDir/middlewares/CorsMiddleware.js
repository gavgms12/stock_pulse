"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorsMiddleware = void 0;
class CorsMiddleware {
    static generateHeaders(origin, config = this.defaultConfig) {
        const headers = {};
        // Access-Control-Allow-Origin
        if (config.origin === true || config.origin === '*') {
            headers['Access-Control-Allow-Origin'] = '*';
        }
        else if (typeof config.origin === 'string') {
            headers['Access-Control-Allow-Origin'] = config.origin;
        }
        else if (Array.isArray(config.origin)) {
            if (config.origin.includes(origin)) {
                headers['Access-Control-Allow-Origin'] = origin;
            }
        }
        // Access-Control-Allow-Methods
        if (config.methods && config.methods.length > 0) {
            headers['Access-Control-Allow-Methods'] = config.methods.join(', ');
        }
        // Access-Control-Allow-Headers
        if (config.allowedHeaders && config.allowedHeaders.length > 0) {
            headers['Access-Control-Allow-Headers'] = config.allowedHeaders.join(', ');
        }
        // Access-Control-Expose-Headers
        if (config.exposedHeaders && config.exposedHeaders.length > 0) {
            headers['Access-Control-Expose-Headers'] = config.exposedHeaders.join(', ');
        }
        // Access-Control-Allow-Credentials
        if (config.credentials) {
            headers['Access-Control-Allow-Credentials'] = 'true';
        }
        // Access-Control-Max-Age
        if (config.maxAge !== undefined) {
            headers['Access-Control-Max-Age'] = config.maxAge.toString();
        }
        return headers;
    }
    static isPreflightRequest(method, headers) {
        return method === 'OPTIONS' &&
            (!!headers['access-control-request-method'] ||
                !!headers['Access-Control-Request-Method']);
    }
    static handlePreflight(origin, config) {
        const headers = this.generateHeaders(origin, config);
        return {
            headers,
            statusCode: 204
        };
    }
    static isOriginAllowed(origin, config = this.defaultConfig) {
        if (config.origin === true || config.origin === '*') {
            return true;
        }
        if (typeof config.origin === 'string') {
            return config.origin === origin;
        }
        if (Array.isArray(config.origin)) {
            return config.origin.includes(origin);
        }
        return false;
    }
    static validateRequest(origin, method, config) {
        const finalConfig = { ...this.defaultConfig, ...config };
        // Verificar origin
        if (!this.isOriginAllowed(origin, finalConfig)) {
            return {
                allowed: false,
                error: `Origin '${origin}' não permitido`
            };
        }
        // Verificar método
        if (finalConfig.methods && !finalConfig.methods.includes(method)) {
            return {
                allowed: false,
                error: `Método '${method}' não permitido`
            };
        }
        return { allowed: true };
    }
    // Configurações predefinidas
    static getStrictConfig() {
        return {
            origin: ['https://meudominio.com', 'https://app.meudominio.com'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
            maxAge: 300 // 5 minutes
        };
    }
    static getDevelopmentConfig() {
        return {
            origin: ['http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:3000'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
            allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Debug'],
            credentials: true,
            maxAge: 86400
        };
    }
    static getApiConfig() {
        return {
            origin: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'X-API-Key'],
            exposedHeaders: ['X-Total-Count', 'X-Rate-Limit-Remaining'],
            credentials: false,
            maxAge: 3600 // 1 hour
        };
    }
}
exports.CorsMiddleware = CorsMiddleware;
CorsMiddleware.defaultConfig = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    exposedHeaders: ['X-Total-Count'],
    credentials: false,
    maxAge: 86400 // 24 hours
};
