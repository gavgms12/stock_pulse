"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritoRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
const Favorito_1 = require("../classes/Favorito");
class FavoritoRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.entityName = 'Favorito';
    }
    matchesQuery(entity, query) {
        return (entity.usuario.nome.toLowerCase().includes(query) ||
            entity.usuario.email.toLowerCase().includes(query) ||
            entity.investimento.nome.toLowerCase().includes(query) ||
            entity.investimento.codigo.toLowerCase().includes(query) ||
            entity.id.toLowerCase().includes(query));
    }
    // Override create para gerar ID baseado no usuário e investimento
    async create(entity) {
        const id = `${entity.usuario.id}_${entity.investimento.id}`;
        const entityWithId = new Favorito_1.Favorito(entity.usuario, entity.investimento, entity.dataAdicao);
        entityWithId.id = id;
        return super.create(entityWithId);
    }
    async findByUserId(userId) {
        return this.logOperation('findByUserId', async () => {
            const results = [];
            for (const favorito of this.data.values()) {
                if (favorito.usuario.id === userId) {
                    results.push(new Favorito_1.Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao));
                }
            }
            // Ordenar por data de adição (mais recentes primeiro)
            return results.sort((a, b) => b.dataAdicao.getTime() - a.dataAdicao.getTime());
        });
    }
    async findByUserIdAndInvestmentId(userId, investmentId) {
        return this.logOperation('findByUserIdAndInvestmentId', async () => {
            const id = `${userId}_${investmentId}`;
            const favorito = this.data.get(id);
            return favorito ? new Favorito_1.Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao) : null;
        });
    }
    async deleteByUserIdAndInvestmentId(userId, investmentId) {
        return this.logOperation('deleteByUserIdAndInvestmentId', async () => {
            const id = `${userId}_${investmentId}`;
            return this.data.delete(id);
        });
    }
    async countByUserId(userId) {
        return this.logOperation('countByUserId', async () => {
            let count = 0;
            for (const favorito of this.data.values()) {
                if (favorito.usuario.id === userId) {
                    count++;
                }
            }
            return count;
        });
    }
    async findRecentByUserId(userId, days) {
        return this.logOperation('findRecentByUserId', async () => {
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - days);
            const results = [];
            for (const favorito of this.data.values()) {
                if (favorito.usuario.id === userId && favorito.dataAdicao >= cutoffDate) {
                    results.push(new Favorito_1.Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao));
                }
            }
            return results.sort((a, b) => b.dataAdicao.getTime() - a.dataAdicao.getTime());
        });
    }
    async deleteAllByUserId(userId) {
        return this.logOperation('deleteAllByUserId', async () => {
            let count = 0;
            const toDelete = [];
            for (const [id, favorito] of this.data.entries()) {
                if (favorito.usuario.id === userId) {
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
    async getMostFavorited(limit) {
        return this.logOperation('getMostFavorited', async () => {
            const investmentCounts = {};
            for (const favorito of this.data.values()) {
                const investmentId = favorito.investimento.id;
                if (!investmentCounts[investmentId]) {
                    investmentCounts[investmentId] = {
                        investimento: favorito.investimento,
                        count: 0
                    };
                }
                investmentCounts[investmentId].count++;
            }
            return Object.values(investmentCounts)
                .sort((a, b) => b.count - a.count)
                .slice(0, limit);
        });
    }
    async getFavoriteStats() {
        return this.logOperation('getFavoriteStats', async () => {
            const total = this.data.size;
            const uniqueUsers = new Set();
            const uniqueInvestments = new Set();
            for (const favorito of this.data.values()) {
                uniqueUsers.add(favorito.usuario.id);
                uniqueInvestments.add(favorito.investimento.id);
            }
            return {
                total,
                uniqueUsers: uniqueUsers.size,
                uniqueInvestments: uniqueInvestments.size,
                avgFavoritesPerUser: uniqueUsers.size > 0 ? total / uniqueUsers.size : 0
            };
        });
    }
    async findByInvestmentType(tipo) {
        return this.logOperation('findByInvestmentType', async () => {
            const results = [];
            for (const favorito of this.data.values()) {
                if (favorito.investimento.tipo === tipo) {
                    results.push(new Favorito_1.Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao));
                }
            }
            return results.sort((a, b) => b.dataAdicao.getTime() - a.dataAdicao.getTime());
        });
    }
}
exports.FavoritoRepository = FavoritoRepository;
