export interface RateLimitConfig {
    windowMs: number; // Janela de tempo em milissegundos
    maxRequests: number; // Máximo de requisições por janela
    skipSuccessfulRequests?: boolean;
    skipFailedRequests?: boolean;
}

export interface RateLimitInfo {
    totalRequests: number;
    remainingRequests: number;
    resetTime: Date;
    limited: boolean;
}

interface ClientData {
    requests: number;
    windowStart: Date;
    blocked: boolean;
    blockedUntil?: Date;
}

export class RateLimitMiddleware {
    private static clients: Map<string, ClientData> = new Map();
    private static defaultConfig: RateLimitConfig = {
        windowMs: 15 * 60 * 1000, // 15 minutos
        maxRequests: 100
    };

    static checkRateLimit(
        clientId: string,
        config: RateLimitConfig = this.defaultConfig
    ): RateLimitInfo {
        const now = new Date();
        const client = this.clients.get(clientId);

        if (!client) {
            // Primeiro acesso do cliente
            this.clients.set(clientId, {
                requests: 1,
                windowStart: now,
                blocked: false
            });

            return {
                totalRequests: 1,
                remainingRequests: config.maxRequests - 1,
                resetTime: new Date(now.getTime() + config.windowMs),
                limited: false
            };
        }

        // Verificar se o cliente está bloqueado
        if (client.blocked && client.blockedUntil && now < client.blockedUntil) {
            return {
                totalRequests: client.requests,
                remainingRequests: 0,
                resetTime: client.blockedUntil,
                limited: true
            };
        }

        // Verificar se a janela de tempo resetou
        const windowEnd = new Date(client.windowStart.getTime() + config.windowMs);
        if (now >= windowEnd) {
            // Reset da janela
            client.requests = 1;
            client.windowStart = now;
            client.blocked = false;
            client.blockedUntil = undefined;

            return {
                totalRequests: 1,
                remainingRequests: config.maxRequests - 1,
                resetTime: new Date(now.getTime() + config.windowMs),
                limited: false
            };
        }

        // Incrementar contador de requisições
        client.requests++;

        // Verificar se excedeu o limite
        if (client.requests > config.maxRequests) {
            client.blocked = true;
            client.blockedUntil = windowEnd;

            return {
                totalRequests: client.requests,
                remainingRequests: 0,
                resetTime: windowEnd,
                limited: true
            };
        }

        return {
            totalRequests: client.requests,
            remainingRequests: config.maxRequests - client.requests,
            resetTime: windowEnd,
            limited: false
        };
    }

    static isLimited(clientId: string, config?: RateLimitConfig): boolean {
        const info = this.checkRateLimit(clientId, config);
        return info.limited;
    }

    static getRateLimitInfo(clientId: string): RateLimitInfo | null {
        const client = this.clients.get(clientId);
        if (!client) return null;

        const config = this.defaultConfig;
        const windowEnd = new Date(client.windowStart.getTime() + config.windowMs);
        
        return {
            totalRequests: client.requests,
            remainingRequests: Math.max(0, config.maxRequests - client.requests),
            resetTime: windowEnd,
            limited: client.blocked || false
        };
    }

    static resetClient(clientId: string): void {
        this.clients.delete(clientId);
    }

    static blockClient(clientId: string, durationMs: number): void {
        const now = new Date();
        const client = this.clients.get(clientId) || {
            requests: 0,
            windowStart: now,
            blocked: false
        };

        client.blocked = true;
        client.blockedUntil = new Date(now.getTime() + durationMs);
        this.clients.set(clientId, client);
    }

    static unblockClient(clientId: string): void {
        const client = this.clients.get(clientId);
        if (client) {
            client.blocked = false;
            client.blockedUntil = undefined;
        }
    }

    static getClientStats(): {
        totalClients: number;
        blockedClients: number;
        activeClients: number;
    } {
        const now = new Date();
        let blockedClients = 0;
        let activeClients = 0;

        for (const [, client] of this.clients) {
            if (client.blocked && client.blockedUntil && now < client.blockedUntil) {
                blockedClients++;
            } else {
                activeClients++;
            }
        }

        return {
            totalClients: this.clients.size,
            blockedClients,
            activeClients
        };
    }

    static cleanupExpiredClients(): void {
        const now = new Date();
        const expiredClients: string[] = [];

        for (const [clientId, client] of this.clients) {
            const windowEnd = new Date(client.windowStart.getTime() + this.defaultConfig.windowMs);
            
            // Remover clientes com janela expirada e não bloqueados
            if (now > windowEnd && !client.blocked) {
                expiredClients.push(clientId);
                continue;
            }

            // Remover clientes com bloqueio expirado
            if (client.blocked && client.blockedUntil && now > client.blockedUntil) {
                expiredClients.push(clientId);
            }
        }

        expiredClients.forEach(clientId => this.clients.delete(clientId));
    }

    // Configurações predefinidas
    static getStrictConfig(): RateLimitConfig {
        return {
            windowMs: 15 * 60 * 1000, // 15 minutos
            maxRequests: 20
        };
    }

    static getApiConfig(): RateLimitConfig {
        return {
            windowMs: 60 * 1000, // 1 minuto
            maxRequests: 10
        };
    }

    static getAuthConfig(): RateLimitConfig {
        return {
            windowMs: 15 * 60 * 1000, // 15 minutos
            maxRequests: 5 // Tentativas de login
        };
    }
}
