"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRoutes = void 0;
const BaseRouter_1 = require("./BaseRouter");
const UsuarioController_1 = require("../controllers/UsuarioController");
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const ValidationMiddleware_1 = require("../middlewares/ValidationMiddleware");
const RateLimitMiddleware_1 = require("../middlewares/RateLimitMiddleware");
class UsuarioRoutes extends BaseRouter_1.BaseRouter {
    static async handleRequest(req) {
        const { method, path } = req;
        // POST /usuarios - Criar usuário
        if (method === 'POST' && path === '/usuarios') {
            return super.handleRequest(req, this.criarUsuario.bind(this), {
                validation: ValidationMiddleware_1.ValidationMiddleware.getUsuarioSchema(),
                rateLimit: RateLimitMiddleware_1.RateLimitMiddleware.getStrictConfig()
            });
        }
        // POST /usuarios/login - Autenticar usuário
        if (method === 'POST' && path === '/usuarios/login') {
            return super.handleRequest(req, this.autenticar.bind(this), {
                validation: {
                    email: { required: true, type: 'email' },
                    senha: { required: true, type: 'string' }
                },
                rateLimit: RateLimitMiddleware_1.RateLimitMiddleware.getAuthConfig()
            });
        }
        // POST /usuarios/logout - Logout
        if (method === 'POST' && path === '/usuarios/logout') {
            return super.handleRequest(req, this.logout.bind(this), {
                requireAuth: true
            });
        }
        // GET /usuarios - Listar usuários
        if (method === 'GET' && path === '/usuarios') {
            return super.handleRequest(req, this.listarUsuarios.bind(this), {
                requireAuth: true
            });
        }
        // GET /usuarios/:id - Obter usuário
        if (method === 'GET' && this.matchRoute(path, '/usuarios/:id')) {
            req.params = this.extractParams(path, '/usuarios/:id');
            return super.handleRequest(req, this.obterUsuario.bind(this), {
                requireAuth: true
            });
        }
        // PUT /usuarios/:id - Atualizar usuário
        if (method === 'PUT' && this.matchRoute(path, '/usuarios/:id')) {
            req.params = this.extractParams(path, '/usuarios/:id');
            return super.handleRequest(req, this.atualizarUsuario.bind(this), {
                requireAuth: true,
                validation: {
                    nome: { type: 'string', minLength: 2, maxLength: 100 },
                    email: { type: 'email' }
                }
            });
        }
        // DELETE /usuarios/:id - Deletar usuário
        if (method === 'DELETE' && this.matchRoute(path, '/usuarios/:id')) {
            req.params = this.extractParams(path, '/usuarios/:id');
            return super.handleRequest(req, this.deletarUsuario.bind(this), {
                requireAuth: true
            });
        }
        // GET /usuarios/me - Obter dados do usuário atual
        if (method === 'GET' && path === '/usuarios/me') {
            return super.handleRequest(req, this.obterUsuarioAtual.bind(this), {
                requireAuth: true
            });
        }
        return this.errorResponse(404, {
            success: false,
            error: { message: 'Rota não encontrada', code: 'NOT_FOUND', timestamp: new Date().toISOString() }
        });
    }
    static async criarUsuario(req) {
        return this.usuarioController.criarUsuario(req.body);
    }
    static async autenticar(req) {
        const { email, senha } = req.body;
        const result = this.usuarioController.autenticar(email, senha);
        if (result.success) {
            const token = AuthMiddleware_1.AuthMiddleware.generateToken(result.data);
            return {
                success: true,
                data: {
                    user: result.data,
                    token
                },
                message: 'Login realizado com sucesso'
            };
        }
        return result;
    }
    static async logout(req) {
        const token = this.extractToken(req);
        if (token) {
            AuthMiddleware_1.AuthMiddleware.logout(token);
        }
        return {
            success: true,
            message: 'Logout realizado com sucesso'
        };
    }
    static async listarUsuarios(req) {
        return this.usuarioController.listarUsuarios();
    }
    static async obterUsuario(req) {
        const { id } = req.params;
        return this.usuarioController.obterUsuario(id);
    }
    static async atualizarUsuario(req) {
        const { id } = req.params;
        const userId = req.headers['user-id'];
        // Verificar se o usuário pode editar (apenas próprio perfil)
        if (id !== userId) {
            throw new Error('Acesso negado: você só pode editar seu próprio perfil');
        }
        return this.usuarioController.atualizarUsuario(id, req.body);
    }
    static async deletarUsuario(req) {
        const { id } = req.params;
        const userId = req.headers['user-id'];
        // Verificar se o usuário pode deletar (apenas próprio perfil)
        if (id !== userId) {
            throw new Error('Acesso negado: você só pode deletar seu próprio perfil');
        }
        return this.usuarioController.deletarUsuario(id);
    }
    static async obterUsuarioAtual(req) {
        const userId = req.headers['user-id'];
        return this.usuarioController.obterUsuario(userId);
    }
}
exports.UsuarioRoutes = UsuarioRoutes;
UsuarioRoutes.usuarioController = new UsuarioController_1.UsuarioController();
