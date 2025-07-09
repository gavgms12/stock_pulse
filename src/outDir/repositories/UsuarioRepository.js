"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const BaseRepository_1 = require("./BaseRepository");
class UsuarioRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.entityName = 'Usuario';
    }
    matchesQuery(entity, query) {
        return (entity.nome.toLowerCase().includes(query) ||
            entity.email.toLowerCase().includes(query) ||
            entity.id.toLowerCase().includes(query));
    }
    // Método para criar um novo usuário
    async create(usuario) {
        return this.logOperation('create', async () => {
            // Verificar se email já existe
            const existingUser = await this.findByEmail(usuario.email);
            if (existingUser) {
                throw new Error(`Usuário com email ${usuario.email} já existe`);
            }
            // Definir data de criação se não foi definida
            if (!usuario.dataCriacao) {
                usuario.dataCriacao = new Date();
            }
            this.data.set(usuario.id, usuario);
            return usuario;
        });
    }
    // Método para atualizar um usuário existente
    async update(id, dadosAtualizacao) {
        return this.logOperation('update', async () => {
            try {
                const usuario = this.data.get(id);
                if (!usuario) {
                    throw new Error(`Usuário com ID ${id} não encontrado`);
                }
                // Se o email está sendo atualizado, verificar se não existe outro usuário com o mesmo email
                if (dadosAtualizacao.email && dadosAtualizacao.email !== usuario.email) {
                    const existingUser = await this.findByEmail(dadosAtualizacao.email);
                    if (existingUser && existingUser.id !== id) {
                        throw new Error(`Email ${dadosAtualizacao.email} já está em uso`);
                    }
                }
                // Atualizar apenas os campos fornecidos
                Object.assign(usuario, dadosAtualizacao);
                this.data.set(id, usuario);
                return usuario;
            }
            catch (error) {
                console.error(`Erro ao atualizar usuário ${id}: ${error}`);
                return null;
            }
        });
    }
    // Método para deletar um usuário
    async delete(id) {
        return this.logOperation('delete', async () => {
            try {
                const usuario = this.data.get(id);
                if (!usuario) {
                    return false;
                }
                this.data.delete(id);
                return true;
            }
            catch (error) {
                console.error(`Erro ao deletar usuário ${id}: ${error}`);
                return false;
            }
        });
    }
    async findByEmail(email) {
        return this.logOperation('findByEmail', async () => {
            for (const usuario of this.data.values()) {
                if (usuario.email.toLowerCase() === email.toLowerCase()) {
                    return usuario;
                }
            }
            return null;
        });
    }
    // Corrigido para retornar Usuario | null em vez de boolean
    async findByEmailAndPassword(email, senha) {
        return this.logOperation('findByEmailAndPassword', async () => {
            for (const usuario of this.data.values()) {
                if (usuario.email.toLowerCase() === email.toLowerCase() &&
                    usuario.senha === senha) {
                    return usuario;
                }
            }
            return null;
        });
    }
    // Implementar método findActive conforme a interface
    // async findActive(): Promise<Usuario[]> {
    //     return this.logOperation('findActive', async () => {
    //         const activeUsers: Usuario[] = [];
    //         const thirtyDaysAgo = new Date();
    //         thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    //         for (const usuario of this.data.values()) {
    //             // Considerar ativo se fez login nos últimos 30 dias
    //             if (usuario.ultimoLogin && usuario.ultimoLogin >= thirtyDaysAgo) {
    //                 activeUsers.push(usuario);
    //             }
    //         }
    //         return activeUsers;
    //     });
    // }
    // async getUserStats(): Promise<{
    //     total: number;
    //     active: number;
    //     newThisMonth: number;
    // }> {
    //     return this.logOperation('getUserStats', async () => {
    //         const total = this.data.size;
    //         const activeUsers = await this.findActive();
    //         const thisMonth = new Date();
    //         thisMonth.setDate(1);
    //         thisMonth.setHours(0, 0, 0, 0);
    //         let newThisMonth = 0;
    //         for (const usuario of this.data.values()) {
    //             if (usuario.dataCriacao >= thisMonth) {
    //                 newThisMonth++;
    //             }
    //         }
    //         return {
    //             total,
    //             active: activeUsers.length,
    //             newThisMonth
    //         };
    //     });
    // }
    // Métodos auxiliares adicionais
    // Buscar usuários por nome (busca parcial)
    async findByName(nome) {
        return this.logOperation('findByName', async () => {
            const usuarios = [];
            const nomeQuery = nome.toLowerCase();
            for (const usuario of this.data.values()) {
                if (usuario.nome.toLowerCase().includes(nomeQuery)) {
                    usuarios.push(usuario);
                }
            }
            return usuarios;
        });
    }
    // Verificar se email está disponível
    async isEmailAvailable(email, excludeId) {
        const result = await this.logOperation('isEmailAvailable', async () => {
            const existingUser = await this.findByEmail(email);
            return !existingUser || (excludeId && existingUser.id === excludeId);
        });
        return typeof result === 'boolean' ? result : false;
    }
    // Contar usuários criados em um período
    async countUsersInPeriod(startDate, endDate) {
        return this.logOperation('countUsersInPeriod', async () => {
            let count = 0;
            for (const usuario of this.data.values()) {
                if (usuario.dataCriacao >= startDate && usuario.dataCriacao <= endDate) {
                    count++;
                }
            }
            return count;
        });
    }
}
exports.UsuarioRepository = UsuarioRepository;
