import { BaseRepository } from './BaseRepository';
import { Favorito } from '../classes/Favorito';

export interface IFavoritoRepository {
    findByUserId(userId: string): Promise<Favorito[]>;
    findByUserIdAndInvestmentId(userId: string, investmentId: string): Promise<Favorito | null>;
    deleteByUserIdAndInvestmentId(userId: string, investmentId: string): Promise<boolean>;
    countByUserId(userId: string): Promise<number>;
    findRecentByUserId(userId: string, days: number): Promise<Favorito[]>;
    deleteAllByUserId(userId: string): Promise<number>;
}

export class FavoritoRepository extends BaseRepository<Favorito & { id: string }> implements IFavoritoRepository {
    protected entityName = 'Favorito';

    protected matchesQuery(entity: Favorito & { id: string }, query: string): boolean {
        return (
            entity.usuario.nome.toLowerCase().includes(query) ||
            entity.usuario.email.toLowerCase().includes(query) ||
            entity.investimento.nome.toLowerCase().includes(query) ||
            entity.investimento.codigo.toLowerCase().includes(query) ||
            entity.id.toLowerCase().includes(query)
        );
    }

    // Override create para gerar ID baseado no usuário e investimento
    async create(entity: Favorito): Promise<Favorito & { id: string }> {
        const id = `${entity.usuario.id}_${entity.investimento.id}`;
        const entityWithId = new Favorito(entity.usuario, entity.investimento, entity.dataAdicao) as Favorito & { id: string };
        (entityWithId as any).id = id;
        
        return super.create(entityWithId);
    }

    async findByUserId(userId: string): Promise<Favorito[]> {
        return this.logOperation('findByUserId', async () => {
            const results: Favorito[] = [];
            
            for (const favorito of this.data.values()) {
                if (favorito.usuario.id === userId) {
                    results.push(new Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao));
                }
            }

            // Ordenar por data de adição (mais recentes primeiro)
            return results.sort((a, b) => b.dataAdicao.getTime() - a.dataAdicao.getTime());
        });
    }

    async findByUserIdAndInvestmentId(userId: string, investmentId: string): Promise<Favorito | null> {
        return this.logOperation('findByUserIdAndInvestmentId', async () => {
            const id = `${userId}_${investmentId}`;
            const favorito = this.data.get(id);
            return favorito ? new Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao) : null;
        });
    }

    async deleteByUserIdAndInvestmentId(userId: string, investmentId: string): Promise<boolean> {
        return this.logOperation('deleteByUserIdAndInvestmentId', async () => {
            const id = `${userId}_${investmentId}`;
            return this.data.delete(id);
        });
    }

    async countByUserId(userId: string): Promise<number> {
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

    async findRecentByUserId(userId: string, days: number): Promise<Favorito[]> {
        return this.logOperation('findRecentByUserId', async () => {
            const cutoffDate = new Date();
            cutoffDate.setDate(cutoffDate.getDate() - days);
            
            const results: Favorito[] = [];
            
            for (const favorito of this.data.values()) {
                if (favorito.usuario.id === userId && favorito.dataAdicao >= cutoffDate) {
                    results.push(new Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao));
                }
            }

            return results.sort((a, b) => b.dataAdicao.getTime() - a.dataAdicao.getTime());
        });
    }

    async deleteAllByUserId(userId: string): Promise<number> {
        return this.logOperation('deleteAllByUserId', async () => {
            let count = 0;
            const toDelete: string[] = [];
            
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

    async getMostFavorited(limit: number): Promise<Array<{
        investimento: any;
        count: number;
    }>> {
        return this.logOperation('getMostFavorited', async () => {
            const investmentCounts: Record<string, { investimento: any; count: number }> = {};
            
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

    async getFavoriteStats(): Promise<{
        total: number;
        uniqueUsers: number;
        uniqueInvestments: number;
        avgFavoritesPerUser: number;
    }> {
        return this.logOperation('getFavoriteStats', async () => {
            const total = this.data.size;
            const uniqueUsers = new Set<string>();
            const uniqueInvestments = new Set<string>();

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

    async findByInvestmentType(tipo: 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO'): Promise<Favorito[]> {
        return this.logOperation('findByInvestmentType', async () => {
            const results: Favorito[] = [];
            
            for (const favorito of this.data.values()) {
                if (favorito.investimento.tipo === tipo) {
                    results.push(new Favorito(favorito.usuario, favorito.investimento, favorito.dataAdicao));
                }
            }

            return results.sort((a, b) => b.dataAdicao.getTime() - a.dataAdicao.getTime());
        });
    }
}
