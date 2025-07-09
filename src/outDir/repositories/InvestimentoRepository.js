"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestimentoRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
class InvestimentoRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.entityName = 'Investimento';
    }
    matchesQuery(entity, query) {
        return (entity.nome.toLowerCase().includes(query) ||
            entity.codigo.toLowerCase().includes(query) ||
            entity.tipo.toLowerCase().includes(query) ||
            entity.id.toLowerCase().includes(query));
    }
    async findByCodigo(codigo) {
        return this.logOperation('findByCodigo', async () => {
            for (const investimento of this.data.values()) {
                if (investimento.codigo.toLowerCase() === codigo.toLowerCase()) {
                    return investimento;
                }
            }
            return null;
        });
    }
    async findByTipo(tipo) {
        return this.logOperation('findByTipo', async () => {
            const results = [];
            for (const investimento of this.data.values()) {
                if (investimento.tipo === tipo) {
                    results.push(investimento);
                }
            }
            return results;
        });
    }
    async findByPriceRange(min, max) {
        return this.logOperation('findByPriceRange', async () => {
            const results = [];
            for (const investimento of this.data.values()) {
                const preco = investimento.getValorAtual();
                if (preco >= min && preco <= max) {
                    results.push(investimento);
                }
            }
            return results;
        });
    }
    async findTopPerformers(limit) {
        return this.logOperation('findTopPerformers', async () => {
            const investimentos = Array.from(this.data.values());
            return investimentos
                .filter(inv => inv.historicoValores.length >= 2)
                .sort((a, b) => {
                const variacaoA = a.calcularVariacao(30);
                const variacaoB = b.calcularVariacao(30);
                return variacaoB - variacaoA;
            })
                .slice(0, limit);
        });
    }
    async findWorstPerformers(limit) {
        return this.logOperation('findWorstPerformers', async () => {
            const investimentos = Array.from(this.data.values());
            return investimentos
                .filter(inv => inv.historicoValores.length >= 2)
                .sort((a, b) => {
                const variacaoA = a.calcularVariacao(30);
                const variacaoB = b.calcularVariacao(30);
                return variacaoA - variacaoB;
            })
                .slice(0, limit);
        });
    }
    async updateHistorico(id, novoValor) {
        return this.logOperation('updateHistorico', async () => {
            const investimento = this.data.get(id);
            if (!investimento) {
                return null;
            }
            investimento.adicionarValor(novoValor);
            this.data.set(id, investimento);
            return investimento;
        });
    }
    async validateUniqueCodigo(codigo, excludeId) {
        return this.logOperation('validateUniqueCodigo', async () => {
            for (const investimento of this.data.values()) {
                if (investimento.codigo.toLowerCase() === codigo.toLowerCase() &&
                    investimento.id !== excludeId) {
                    return false;
                }
            }
            return true;
        });
    }
    async getInvestmentStats() {
        return this.logOperation('getInvestmentStats', async () => {
            const total = this.data.size;
            const byType = {};
            let totalPrice = 0;
            let countWithPrice = 0;
            for (const investimento of this.data.values()) {
                byType[investimento.tipo] = (byType[investimento.tipo] || 0) + 1;
                const price = investimento.getValorAtual();
                if (price > 0) {
                    totalPrice += price;
                    countWithPrice++;
                }
            }
            return {
                total,
                byType,
                avgPrice: countWithPrice > 0 ? totalPrice / countWithPrice : 0,
                totalVolume: this.data.size
            };
        });
    }
    async findRecentlyUpdated(hours = 24) {
        return this.logOperation('findRecentlyUpdated', async () => {
            const cutoff = new Date();
            cutoff.setHours(cutoff.getHours() - hours);
            const results = [];
            for (const investimento of this.data.values()) {
                // Simular última atualização - em implementação real, seria uma propriedade
                const hasRecentData = investimento.historicoValores.length > 0;
                if (hasRecentData) {
                    results.push(investimento);
                }
            }
            return results;
        });
    }
}
exports.InvestimentoRepository = InvestimentoRepository;
