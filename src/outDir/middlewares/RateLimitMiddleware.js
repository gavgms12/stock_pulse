"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitMiddleware = void 0;
class RateLimitMiddleware {
    static checkRateLimit(clientId, config = this.defaultConfig) {
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
    static isLimited(clientId, config) {
        const info = this.checkRateLimit(clientId, config);
        return info.limited;
    }
    static getRateLimitInfo(clientId) {
        const client = this.clients.get(clientId);
        if (!client)
            return null;
        const config = this.defaultConfig;
        const windowEnd = new Date(client.windowStart.getTime() + config.windowMs);
        return {
            totalRequests: client.requests,
            remainingRequests: Math.max(0, config.maxRequests - client.requests),
            resetTime: windowEnd,
            limited: client.blocked || false
        };
    }
    static resetClient(clientId) {
        this.clients.delete(clientId);
    }
    static blockClient(clientId, durationMs) {
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
    static unblockClient(clientId) {
        const client = this.clients.get(clientId);
        if (client) {
            client.blocked = false;
            client.blockedUntil = undefined;
        }
    }
    static getClientStats() {
        const now = new Date();
        let blockedClients = 0;
        let activeClients = 0;
        for (const [, client] of this.clients) {
            if (client.blocked && client.blockedUntil && now < client.blockedUntil) {
                blockedClients++;
            }
            else {
                activeClients++;
            }
        }
        return {
            totalClients: this.clients.size,
            blockedClients,
            activeClients
        };
    }
    static cleanupExpiredClients() {
        const now = new Date();
        const expiredClients = [];
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
    static getStrictConfig() {
        return {
            windowMs: 15 * 60 * 1000, // 15 minutos
            maxRequests: 20
        };
    }
    static getApiConfig() {
        return {
            windowMs: 60 * 1000, // 1 minuto
            maxRequests: 10
        };
    }
    static getAuthConfig() {
        return {
            windowMs: 15 * 60 * 1000, // 15 minutos
            maxRequests: 5 // Tentativas de login
        };
    }
}
exports.RateLimitMiddleware = RateLimitMiddleware;
RateLimitMiddleware.clients = new Map();
RateLimitMiddleware.defaultConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutos
    maxRequests: 100
};
