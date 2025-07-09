import { BaseRepository } from './BaseRepository';
import { Investimento } from '../classes/Investimento';

export interface IInvestimentoRepository {
    findByCodigo(codigo: string): Promise<Investimento | null>;
    findByTipo(tipo: 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO'): Promise<Investimento[]>;
    findByPriceRange(min: number, max: number): Promise<Investimento[]>;
    findTopPerformers(limit: number): Promise<Investimento[]>;
    findWorstPerformers(limit: number): Promise<Investimento[]>;
    updateHistorico(id: string, novoValor: number): Promise<Investimento | null>;
}

export class InvestimentoRepository extends BaseRepository<Investimento> implements IInvestimentoRepository {
    protected entityName = 'Investimento';

    protected matchesQuery(entity: Investimento, query: string): boolean {
        return (
            entity.nome.toLowerCase().includes(query) ||
            entity.codigo.toLowerCase().includes(query) ||
            entity.tipo.toLowerCase().includes(query) ||
            entity.id.toLowerCase().includes(query)
        );
    }

    async findByCodigo(codigo: string): Promise<Investimento | null> {
        return this.logOperation('findByCodigo', async () => {
            for (const investimento of this.data.values()) {
                if (investimento.codigo.toLowerCase() === codigo.toLowerCase()) {
                    return investimento;
                }
            }
            return null;
        });
    }

    async findByTipo(tipo: 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO'): Promise<Investimento[]> {
        return this.logOperation('findByTipo', async () => {
            const results: Investimento[] = [];
            
            for (const investimento of this.data.values()) {
                if (investimento.tipo === tipo) {
                    results.push(investimento);
                }
            }

            return results;
        });
    }

    async findByPriceRange(min: number, max: number): Promise<Investimento[]> {
        return this.logOperation('findByPriceRange', async () => {
            const results: Investimento[] = [];
            
            for (const investimento of this.data.values()) {
                const preco = investimento.getValorAtual();
                if (preco >= min && preco <= max) {
                    results.push(investimento);
                }
            }

            return results;
        });
    }

    async findTopPerformers(limit: number): Promise<Investimento[]> {
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

    async findWorstPerformers(limit: number): Promise<Investimento[]> {
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

    async updateHistorico(id: string, novoValor: number): Promise<Investimento | null> {
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

    async validateUniqueCodigo(codigo: string, excludeId?: string): Promise<boolean> {
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

    async getInvestmentStats(): Promise<{
        total: number;
        byType: Record<string, number>;
        avgPrice: number;
        totalVolume: number;
    }> {
        return this.logOperation('getInvestmentStats', async () => {
            const total = this.data.size;
            const byType: Record<string, number> = {};
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

    async findRecentlyUpdated(hours: number = 24): Promise<Investimento[]> {
        return this.logOperation('findRecentlyUpdated', async () => {
            const cutoff = new Date();
            cutoff.setHours(cutoff.getHours() - hours);
            
            const results: Investimento[] = [];
            
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
