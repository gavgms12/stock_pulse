"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
class AuthMiddleware {
    static generateToken(user) {
        const token = Buffer.from(`${user.id}:${Date.now()}:${Math.random()}`).toString('base64');
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas
        this.sessions.set(token, { user, expires });
        return token;
    }
    static validateToken(token) {
        if (!token) {
            return { valid: false, error: 'Token não fornecido' };
        }
        const session = this.sessions.get(token);
        if (!session) {
            return { valid: false, error: 'Token inválido' };
        }
        if (new Date() > session.expires) {
            this.sessions.delete(token);
            return { valid: false, error: 'Token expirado' };
        }
        return { valid: true, user: session.user };
    }
    static authenticate(token) {
        const validation = this.validateToken(token);
        if (!validation.valid) {
            throw new Error(validation.error || 'Falha na autenticação');
        }
        return {
            user: validation.user,
            token
        };
    }
    static requireAuth(token) {
        const context = this.authenticate(token);
        if (!context.user) {
            throw new Error('Usuário não autenticado');
        }
        return context.user;
    }
    static requireOwnership(token, resourceUserId) {
        const user = this.requireAuth(token);
        if (user.id !== resourceUserId) {
            throw new Error('Acesso negado: você não tem permissão para acessar este recurso');
        }
        return user;
    }
    static logout(token) {
        this.sessions.delete(token);
    }
    static cleanExpiredSessions() {
        const now = new Date();
        for (const [token, session] of this.sessions.entries()) {
            if (now > session.expires) {
                this.sessions.delete(token);
            }
        }
    }
    static getActiveSessionsCount() {
        this.cleanExpiredSessions();
        return this.sessions.size;
    }
    static getUserSessions(userId) {
        const userTokens = [];
        for (const [token, session] of this.sessions.entries()) {
            if (session.user.id === userId && new Date() <= session.expires) {
                userTokens.push(token);
            }
        }
        return userTokens;
    }
    static revokeUserSessions(userId) {
        const userTokens = this.getUserSessions(userId);
        userTokens.forEach(token => this.sessions.delete(token));
    }
}
exports.AuthMiddleware = AuthMiddleware;
AuthMiddleware.sessions = new Map();
