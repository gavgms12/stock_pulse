"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacaoRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
const Notificacao_1 = require("../classes/Notificacao");
class NotificacaoRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.entityName = 'Notificacao';
    }
    matchesQuery(entity, query) {
        return (entity.mensagem.toLowerCase().includes(query) ||
            entity.usuario.nome.toLowerCase().includes(query) ||
            entity.usuario.email.toLowerCase().includes(query) ||
            entity.id.toLowerCase().includes(query));
    }
    async findByUserId(userId) {
        return this.logOperation('findByUserId', async () => {
            const results = [];
            for (const notificacao of this.data.values()) {
                if (notificacao.usuario.id === userId) {
                    results.push(new Notificacao_1.Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }
            // Ordenar por data (mais recentes primeiro)
            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }
    async findUnreadByUserId(userId) {
        return this.logOperation('findUnreadByUserId', async () => {
            const results = [];
            for (const notificacao of this.data.values()) {
                if (notificacao.usuario.id === userId && !notificacao.lida) {
                    results.push(new Notificacao_1.Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }
            // Ordenar por data (mais recentes primeiro)
            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }
    async countUnreadByUserId(userId) {
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
    async markAsRead(id) {
        return this.logOperation('markAsRead', async () => {
            const notificacao = this.data.get(id);
            if (!notificacao) {
                return null;
            }
            const updated = new Notificacao_1.Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida);
            updated.marcarComoLida();
            this.data.set(id, updated);
            return updated;
        });
    }
    async markAllAsReadByUserId(userId) {
        return this.logOperation('markAllAsReadByUserId', async () => {
            let count = 0;
            for (const [id, notificacao] of this.data.entries()) {
                if (notificacao.usuario.id === userId && !notificacao.lida) {
                    const updated = new Notificacao_1.Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida);
                    updated.marcarComoLida();
                    this.data.set(id, updated);
                    count++;
                }
            }
            return count;
        });
    }
    async deleteOldNotifications(days) {
        return this.logOperation('deleteOldNotifications', async () => {
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - days);
            let count = 0;
            const toDelete = [];
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
    async findRecentByUserId(userId, days) {
        return this.logOperation('findRecentByUserId', async () => {
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - days);
            const results = [];
            for (const notificacao of this.data.values()) {
                if (notificacao.usuario.id === userId && notificacao.dataEnvio >= cutoffDate) {
                    results.push(new Notificacao_1.Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }
            // Ordenar por data (mais recentes primeiro)
            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }
    async getNotificationStats() {
        return this.logOperation('getNotificationStats', async () => {
            const total = this.data.size;
            let unread = 0;
            const byUser = {};
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
    async findByDateRange(startDate, endDate) {
        return this.logOperation('findByDateRange', async () => {
            const results = [];
            for (const notificacao of this.data.values()) {
                if (notificacao.dataEnvio >= startDate && notificacao.dataEnvio <= endDate) {
                    results.push(new Notificacao_1.Notificacao(notificacao.id, notificacao.usuario, notificacao.mensagem, notificacao.dataEnvio, notificacao.lida));
                }
            }
            return results.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
        });
    }
}
exports.NotificacaoRepository = NotificacaoRepository;
