import { BaseRepository } from './BaseRepository';
import { Notificacao } from '../classes/Notificacao';

export interface INotificacaoRepository {
    findByUserId(userId: string): Promise<Notificacao[]>;
    findUnreadByUserId(userId: string): Promise<Notificacao[]>;
    countUnreadByUserId(userId: string): Promise<number>;
    markAsRead(id: string): Promise<Notificacao | null>;
    markAllAsReadByUserId(userId: string): Promise<number>;
    deleteOldNotifications(days: number): Promise<number>;
    findRecentByUserId(userId: string, days: number): Promise<Notificacao[]>;
}

export class NotificacaoRepository extends BaseRepository<Notificacao> implements INotificacaoRepository {
    protected entityName = 'Notificacao';

    protected matchesQuery(entity: Notificacao, query: string): boolean {
        return (
            entity.mensagem.toLowerCase().includes(query) ||
            entity.usuario.nome.toLowerCase().includes(query) ||
            entity.usuario.email.toLowerCase().includes(query) ||
            entity.id.toLowerCase().includes(query)
        );
    }

    async findByUserId(userId: string): Promise<Notificacao[]> {
        return this.logOperation('findByUserId', async () => {
            const results: Notificacao[] = [];
            
            for (const notificacao of this.data.values()) {
                if (notificacao.usuario.id === userId) {
                    results.push(new Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }

            // Ordenar por data (mais recentes primeiro)
            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }

    async findUnreadByUserId(userId: string): Promise<Notificacao[]> {
        return this.logOperation('findUnreadByUserId', async () => {
            const results: Notificacao[] = [];
            
            for (const notificacao of this.data.values()) {
                if (notificacao.usuario.id === userId && !notificacao.lida) {
                    results.push(new Notificacao(notificacao.id,notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }

            // Ordenar por data (mais recentes primeiro)
            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }

    async countUnreadByUserId(userId: string): Promise<number> {
        return this.logOperation('countUnreadByUserId', async () => {
            let count = 0;
            
            for (const notificacao of this.data.values()) {
                if (notificacao.usuario.id === userId && !notificacao.lida) {
                    count++;
                }
            }

            return count;
        });
    }

    async markAsRead(id: string): Promise<Notificacao | null> {
        return this.logOperation('markAsRead', async () => {
            const notificacao = this.data.get(id);
            if (!notificacao) {
                return null;
            }

            const updated = new Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida);
            updated.marcarComoLida();
            
            this.data.set(id, updated);
            return updated;
        });
    }

    async markAllAsReadByUserId(userId: string): Promise<number> {
        return this.logOperation('markAllAsReadByUserId', async () => {
            let count = 0;
            
            for (const [id, notificacao] of this.data.entries()) {
                if (notificacao.usuario.id === userId && !notificacao.lida) {
                    const updated = new Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida);
                    updated.marcarComoLida();
                    this.data.set(id, updated);
                    count++;
                }
            }

            return count;
        });
    }

    async deleteOldNotifications(days: number): Promise<number> {
        return this.logOperation('deleteOldNotifications', async () => {
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - days);
            
            let count = 0;
            const toDelete: string[] = [];
            
            for (const [id, notificacao] of this.data.entries()) {
                if (notificacao.dataEnvio < cutoffDate) {
                    toDelete.push(id);
                    count++;
                }
            }

            for (const id of toDelete) {
                this.data.delete(id);
            }

            return count;
        });
    }

    async findRecentByUserId(userId: string, days: number): Promise<Notificacao[]> {
        return this.logOperation('findRecentByUserId', async () => {
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - days);
            
            const results: Notificacao[] = [];
            
            for (const notificacao of this.data.values()) {
                if (notificacao.usuario.id === userId && notificacao.dataEnvio >= cutoffDate) {
                    results.push(new Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }

            // Ordenar por data (mais recentes primeiro)
            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }

    async getNotificationStats(): Promise<{
        total: number;
        unread: number;
        byUser: Record<string, { total: number; unread: number }>;
        avgAge: number;
    }> {
        return this.logOperation('getNotificationStats', async () => {
            const total = this.data.size;
            let unread = 0;
            const byUser: Record<string, { total: number; unread: number }> = {};
            let totalAge = 0;
            const now = new Date();

            for (const notificacao of this.data.values()) {
                if (!notificacao.lida) {
                    unread++;
                }

                const userId = notificacao.usuario.id;
                if (!byUser[userId]) {
                    byUser[userId] = { total: 0, unread: 0 };
                }
                byUser[userId].total++;
                if (!notificacao.lida) {
                    byUser[userId].unread++;
                }

                const age = now.getTime() - notificacao.dataEnvio.getTime();
                totalAge += age;
            }

            return {
                total,
                unread,
                byUser,
                avgAge: total > 0 ? totalAge / total / (1000 * 60 * 60 * 24) : 0 // em dias
            };
        });
    }

    async findByDateRange(startDate: Date, endDate: Date): Promise<Notificacao[]> {
        return this.logOperation('findByDateRange', async () => {
            const results: Notificacao[] = [];
            
            for (const notificacao of this.data.values()) {
                if (notificacao.dataEnvio >= startDate && notificacao.dataEnvio <= endDate) {
                    results.push(new Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }

            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }
}
