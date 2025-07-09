export interface CorsConfig {
    origin: string | string[] | boolean;
    methods?: string[];
    allowedHeaders?: string[];
    exposedHeaders?: string[];
    credentials?: boolean;
    maxAge?: number;
}

export interface CorsHeaders {
    'Access-Control-Allow-Origin'?: string;
    'Access-Control-Allow-Methods'?: string;
    'Access-Control-Allow-Headers'?: string;
    'Access-Control-Expose-Headers'?: string;
    'Access-Control-Allow-Credentials'?: string;
    'Access-Control-Max-Age'?: string;
}

export class CorsMiddleware {
    private static defaultConfig: CorsConfig = {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        exposedHeaders: ['X-Total-Count'],
        credentials: false,
        maxAge: 86400 // 24 hours
    };

    static generateHeaders(origin: string, config: CorsConfig = this.defaultConfig): CorsHeaders {
        const headers: CorsHeaders = {};

        // Access-Control-Allow-Origin
        if (config.origin === true || config.origin === '*') {
            headers['Access-Control-Allow-Origin'] = '*';
        } else if (typeof config.origin === 'string') {
            headers['Access-Control-Allow-Origin'] = config.origin;
        } else if (Array.isArray(config.origin)) {
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

    static isPreflightRequest(method: string, headers: Record<string, string>): boolean {
        return method === 'OPTIONS' && 
               (!!headers['access-control-request-method'] || 
                !!headers['Access-Control-Request-Method']);
    }

    static handlePreflight(origin: string, config?: CorsConfig): {
        headers: CorsHeaders;
        statusCode: number;
    } {
        const headers = this.generateHeaders(origin, config);
        return {
            headers,
            statusCode: 204
        };
    }

    static isOriginAllowed(origin: string, config: CorsConfig = this.defaultConfig): boolean {
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

    static validateRequest(origin: string, method: string, config?: CorsConfig): {
        allowed: boolean;
        error?: string;
    } {
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
    static getStrictConfig(): CorsConfig {
        return {
            origin: ['https://meudominio.com', 'https://app.meudominio.com'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            credentials: true,
            maxAge: 300 // 5 minutes
        };
    }

    static getDevelopmentConfig(): CorsConfig {
        return {
            origin: ['http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:3000'],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
            allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Debug'],
            credentials: true,
            maxAge: 86400
        };
    }

    static getApiConfig(): CorsConfig {
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
