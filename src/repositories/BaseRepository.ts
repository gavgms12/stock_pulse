import { IRepository, ISearchableRepository, IPaginatedRepository } from './IRepository';
import { LoggingMiddleware } from '../middlewares/LoggingMiddleware';

export abstract class BaseRepository<T extends { id: string }> 
    implements ISearchableRepository<T>, IPaginatedRepository<T> {
    
    protected data: Map<string, T> = new Map();
    protected abstract entityName: string;

    async create(entity: T): Promise<T> {
        return this.logOperation('create', async () => {
            if (this.data.has(entity.id)) {
                throw new Error(`${this.entityName} com ID ${entity.id} já existe`);
            }
            
            this.data.set(entity.id, { ...entity });
            return { ...entity };
        });
    }

    async findById(id: string): Promise<T | null> {
        return this.logOperation('findById', async () => {
            const entity = this.data.get(id);
            return entity ? { ...entity } : null;
        });
    }

    async findAll(): Promise<T[]> {
        return this.logOperation('findAll', async () => {
            return Array.from(this.data.values()).map(entity => ({ ...entity }));
        });
    }

    async update(id: string, updates: Partial<T>): Promise<T | null> {
        return this.logOperation('update', async () => {
            const existing = this.data.get(id);
            if (!existing) {
                return null;
            }

            const updated = { ...existing, ...updates, id }; // Preservar ID
            this.data.set(id, updated);
            return { ...updated };
        });
    }

    async delete(id: string): Promise<boolean> {
        return this.logOperation('delete', async () => {
            const existed = this.data.has(id);
            this.data.delete(id);
            return existed;
        });
    }

    async exists(id: string): Promise<boolean> {
        return this.logOperation('exists', async () => {
            return this.data.has(id);
        });
    }

    async count(): Promise<number> {
        return this.logOperation('count', async () => {
            return this.data.size;
        });
    }

    async search(query: string): Promise<T[]> {
        return this.logOperation('search', async () => {
            const lowercaseQuery = query.toLowerCase();
            const results: T[] = [];

            for (const entity of this.data.values()) {
                if (this.matchesQuery(entity, lowercaseQuery)) {
                    results.push({ ...entity });
                }
            }

            return results;
        });
    }

    async findBy(criteria: Partial<T>): Promise<T[]> {
        return this.logOperation('findBy', async () => {
            const results: T[] = [];

            for (const entity of this.data.values()) {
                if (this.matchesCriteria(entity, criteria)) {
                    results.push({ ...entity });
                }
            }

            return results;
        });
    }

    async findPaginated(page: number, limit: number): Promise<{
        data: T[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }> {
        return this.logOperation('findPaginated', async () => {
            const allData = Array.from(this.data.values());
            const total = allData.length;
            const totalPages = Math.ceil(total / limit);
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            
            const data = allData
                .slice(startIndex, endIndex)
                .map(entity => ({ ...entity }));

            return {
                data,
                total,
                page,
                limit,
                totalPages
            };
        });
    }

    protected abstract matchesQuery(entity: T, query: string): boolean;

    protected matchesCriteria(entity: T, criteria: Partial<T>): boolean {
        for (const [key, value] of Object.entries(criteria)) {
            if (entity[key as keyof T] !== value) {
                return false;
            }
        }
        return true;
    }

    protected async logOperation<R>(operation: string, fn: () => Promise<R>): Promise<R> {
        return LoggingMiddleware.measureExecutionTime(
            `REPOSITORY: ${this.entityName}.${operation}`,
            undefined,
            fn
        );
    }

    // Métodos para backup e restore
    async exportData(): Promise<T[]> {
        return Array.from(this.data.values());
    }

    async importData(entities: T[]): Promise<void> {
        this.data.clear();
        for (const entity of entities) {
            this.data.set(entity.id, { ...entity });
        }
    }

    async clear(): Promise<void> {
        this.data.clear();
    }
}
