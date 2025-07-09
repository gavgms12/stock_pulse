export interface IRepository<T> {
    create(entity: T): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(): Promise<T[]>;
    update(id: string, entity: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<boolean>;
    exists(id: string): Promise<boolean>;
    count(): Promise<number>;
}

export interface ISearchableRepository<T> extends IRepository<T> {
    search(query: string): Promise<T[]>;
    findBy(criteria: Partial<T>): Promise<T[]>;
}

export interface IPaginatedRepository<T> extends IRepository<T> {
    findPaginated(page: number, limit: number): Promise<{
        data: T[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
}
