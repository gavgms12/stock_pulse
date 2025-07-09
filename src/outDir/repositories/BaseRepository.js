"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const LoggingMiddleware_1 = require("../middlewares/LoggingMiddleware");
class BaseRepository {
    constructor() {
        this.data = new Map();
    }
    async create(entity) {
        return this.logOperation('create', async () => {
            if (this.data.has(entity.id)) {
                throw new Error(`${this.entityName} com ID ${entity.id} já existe`);
            }
            this.data.set(entity.id, { ...entity });
            return { ...entity };
        });
    }
    async findById(id) {
        return this.logOperation('findById', async () => {
            const entity = this.data.get(id);
            return entity ? { ...entity } : null;
        });
    }
    async findAll() {
        return this.logOperation('findAll', async () => {
            return Array.from(this.data.values()).map(entity => ({ ...entity }));
        });
    }
    async update(id, updates) {
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
    async delete(id) {
        return this.logOperation('delete', async () => {
            const existed = this.data.has(id);
            this.data.delete(id);
            return existed;
        });
    }
    async exists(id) {
        return this.logOperation('exists', async () => {
            return this.data.has(id);
        });
    }
    async count() {
        return this.logOperation('count', async () => {
            return this.data.size;
        });
    }
    async search(query) {
        return this.logOperation('search', async () => {
            const lowercaseQuery = query.toLowerCase();
            const results = [];
            for (const entity of this.data.values()) {
                if (this.matchesQuery(entity, lowercaseQuery)) {
                    results.push({ ...entity });
                }
            }
            return results;
        });
    }
    async findBy(criteria) {
        return this.logOperation('findBy', async () => {
            const results = [];
            for (const entity of this.data.values()) {
                if (this.matchesCriteria(entity, criteria)) {
                    results.push({ ...entity });
                }
            }
            return results;
        });
    }
    async findPaginated(page, limit) {
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
    matchesCriteria(entity, criteria) {
        for (const [key, value] of Object.entries(criteria)) {
            if (entity[key] !== value) {
                return false;
            }
        }
        return true;
    }
    async logOperation(operation, fn) {
        return LoggingMiddleware_1.LoggingMiddleware.measureExecutionTime(`REPOSITORY: ${this.entityName}.${operation}`, undefined, fn);
    }
    // Métodos para backup e restore
    async exportData() {
        return Array.from(this.data.values());
    }
    async importData(entities) {
        this.data.clear();
        for (const entity of entities) {
            this.data.set(entity.id, { ...entity });
        }
    }
    async clear() {
        this.data.clear();
    }
}
exports.BaseRepository = BaseRepository;
