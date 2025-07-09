import { Usuario } from '../classes/Usuario';

export interface AuthContext {
    user?: Usuario;
    token?: string;
}

export class AuthMiddleware {
    private static sessions: Map<string, { user: Usuario; expires: Date }> = new Map();

    static generateToken(user: Usuario): string {
        const token = Buffer.from(`${user.id}:${Date.now()}:${Math.random()}`).toString('base64');
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 horas
        
        this.sessions.set(token, { user, expires });
        return token;
    }

    static validateToken(token: string): { valid: boolean; user?: Usuario; error?: string } {
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

    static authenticate(token: string): AuthContext {
        const validation = this.validateToken(token);
        
        if (!validation.valid) {
            throw new Error(validation.error || 'Falha na autenticação');
        }

        return {
            user: validation.user,
            token
        };
    }

    static requireAuth(token: string): Usuario {
        const context = this.authenticate(token);
        if (!context.user) {
            throw new Error('Usuário não autenticado');
        }
        return context.user;
    }

    static requireOwnership(token: string, resourceUserId: string): Usuario {
        const user = this.requireAuth(token);
        
        if (user.id !== resourceUserId) {
            throw new Error('Acesso negado: você não tem permissão para acessar este recurso');
        }
        
        return user;
    }

    static logout(token: string): void {
        this.sessions.delete(token);
    }

    static cleanExpiredSessions(): void {
        const now = new Date();
        for (const [token, session] of this.sessions.entries()) {
            if (now > session.expires) {
                this.sessions.delete(token);
            }
        }
    }

    static getActiveSessionsCount(): number {
        this.cleanExpiredSessions();
        return this.sessions.size;
    }

    static getUserSessions(userId: string): string[] {
        const userTokens: string[] = [];
        
        for (const [token, session] of this.sessions.entries()) {
            if (session.user.id === userId && new Date() <= session.expires) {
                userTokens.push(token);
            }
        }
        
        return userTokens;
    }

    static revokeUserSessions(userId: string): void {
        const userTokens = this.getUserSessions(userId);
        userTokens.forEach(token => this.sessions.delete(token));
    }
}
