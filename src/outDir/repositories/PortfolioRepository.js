"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
class PortfolioRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.entityName = 'Portfolio';
    }
    matchesQuery(entity, query) {
        return (entity.nome.toLowerCase().includes(query) ||
            entity.usuario.nome.toLowerCase().includes(query) ||
            entity.usuario.email.toLowerCase().includes(query) ||
            (entity.descricao && entity.descricao.toLowerCase().includes(query)) ||
            entity.id.toLowerCase().includes(query));
    }
    async findByUserId(userId) {
        return this.logOperation('findByUserId', async () => {
            const results = [];
            for (const portfolio of this.data.values()) {
                if (portfolio.usuario.id === userId) {
                    results.push(portfolio);
                }
            }
            // Ordenar por data de criação (mais recentes primeiro)
            return results.sort((a, b) => b.dataCriacao.getTime() - a.dataCriacao.getTime());
        });
    }
    async findByUserIdPaginated(userId, page, limit) {
        return this.logOperation('findByUserIdPaginated', async () => {
            const userPortfolios = await this.findByUserId(userId);
            const total = userPortfolios.length;
            const totalPages = Math.ceil(total / limit);
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const data = userPortfolios.slice(startIndex, endIndex);
            return {
                data,
                total,
                page,
                limit,
                totalPages
            };
        });
    }
    async findTopPerforming(limit) {
        return this.logOperation('findTopPerforming', async () => {
            const portfolios = Array.from(this.data.values());
            return portfolios
                .filter(portfolio => portfolio.getInvestimentos().length > 0)
                .sort((a, b) => {
                const rentabilidadeA = a.calcularRentabilidade();
                const rentabilidadeB = b.calcularRentabilidade();
                return rentabilidadeB - rentabilidadeA;
            })
                .slice(0, limit)
                .map(portfolio => portfolio);
        });
    }
    async findByValueRange(min, max) {
        return this.logOperation('findByValueRange', async () => {
            const results = [];
            for (const portfolio of this.data.values()) {
                const valor = portfolio.getValorTotal();
                if (valor >= min && valor <= max) {
                    results.push(portfolio);
                }
            }
            return results;
        });
    }
    async updatePortfolioValue(id) {
        return this.logOperation('updatePortfolioValue', async () => {
            const portfolio = this.data.get(id);
            if (!portfolio) {
                return null;
            }
            // O valor é calculado dinamicamente, então apenas retornamos o portfolio
            // Em uma implementação real, poderia haver cache de valores calculados
            return portfolio;
        });
    }
    async getPortfolioStats() {
        return this.logOperation('getPortfolioStats', async () => {
            const total = this.data.size;
            let totalValue = 0;
            let totalInvestments = 0;
            const byUser = {};
            for (const portfolio of this.data.values()) {
                const valor = portfolio.getValorTotal();
                totalValue += valor;
                totalInvestments += portfolio.getInvestimentos().length;
                const userId = portfolio.usuario.id;
                byUser[userId] = (byUser[userId] || 0) + 1;
            }
            return {
                total,
                totalValue,
                avgValue: total > 0 ? totalValue / total : 0,
                avgInvestmentsPerPortfolio: total > 0 ? totalInvestments / total : 0,
                byUser
            };
        });
    }
    async findDiversified() {
        return this.logOperation('findDiversified', async () => {
            const results = [];
            for (const portfolio of this.data.values()) {
                if (portfolio.isDiversificado()) {
                    results.push(portfolio);
                }
            }
            return results;
        });
    }
    async findNeedingRebalancing() {
        return this.logOperation('findNeedingRebalancing', async () => {
            const results = [];
            for (const portfolio of this.data.values()) {
                const distribuicao = portfolio.getDistribuicao();
                const tipos = Object.keys(distribuicao);
                // Verificar se algum tipo representa mais de 70% do portfólio
                const needsRebalancing = tipos.some(tipo => distribuicao[tipo] > 70);
                if (needsRebalancing) {
                    results.push(portfolio);
                }
            }
            return results;
        });
    }
    async findByInvestmentType(tipo) {
        return this.logOperation('findByInvestmentType', async () => {
            const results = [];
            for (const portfolio of this.data.values()) {
                const investimentos = portfolio.getInvestimentos();
                const hasType = investimentos.some(inv => inv.investimento.tipo === tipo);
                if (hasType) {
                    results.push(portfolio);
                }
            }
            return results;
        });
    }
}
exports.PortfolioRepository = PortfolioRepository;
