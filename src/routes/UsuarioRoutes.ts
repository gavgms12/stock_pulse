import { BaseRouter, RouteRequest, RouteResponse } from './BaseRouter';
import { UsuarioController } from '../controllers/UsuarioController';
import { AuthMiddleware } from '../middlewares/AuthMiddleware';
import { ValidationMiddleware } from '../middlewares/ValidationMiddleware';
import { RateLimitMiddleware } from '../middlewares/RateLimitMiddleware';

export class UsuarioRoutes extends BaseRouter {
    private static usuarioController = new UsuarioController();

    static async handleRequest(req: RouteRequest): Promise<RouteResponse> {
        const { method, path } = req;

        // POST /usuarios - Criar usuário
        if (method === 'POST' && path === '/usuarios') {
            return super.handleRequest(req, this.criarUsuario.bind(this), {
                validation: ValidationMiddleware.getUsuarioSchema(),
                rateLimit: RateLimitMiddleware.getStrictConfig()
            });
        }

        // POST /usuarios/login - Autenticar usuário
        if (method === 'POST' && path === '/usuarios/login') {
            return super.handleRequest(req, this.autenticar.bind(this), {
                validation: {
                    email: { required: true, type: 'email' },
                    senha: { required: true, type: 'string' }
                },
                rateLimit: RateLimitMiddleware.getAuthConfig()
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

    private static async criarUsuario(req: RouteRequest) {
        return this.usuarioController.criarUsuario(req.body);
    }

    private static async autenticar(req: RouteRequest) {
        const { email, senha } = req.body;
        const result = this.usuarioController.autenticar(email, senha);
        
        if (result.success) {
            const token = AuthMiddleware.generateToken(result.data);
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

    private static async logout(req: RouteRequest) {
        const token = this.extractToken(req);
        if (token) {
            AuthMiddleware.logout(token);
        }
        return {
            success: true,
            message: 'Logout realizado com sucesso'
        };
    }

    private static async listarUsuarios(req: RouteRequest) {
        return this.usuarioController.listarUsuarios();
    }

    private static async obterUsuario(req: RouteRequest) {
        const { id } = req.params!;
        return this.usuarioController.obterUsuario(id);
    }

    private static async atualizarUsuario(req: RouteRequest) {
        const { id } = req.params!;
        const userId = req.headers['user-id'];
        
        // Verificar se o usuário pode editar (apenas próprio perfil)
        if (id !== userId) {
            throw new Error('Acesso negado: você só pode editar seu próprio perfil');
        }
        
        return this.usuarioController.atualizarUsuario(id, req.body);
    }

    private static async deletarUsuario(req: RouteRequest) {
        const { id } = req.params!;
        const userId = req.headers['user-id'];
        
        // Verificar se o usuário pode deletar (apenas próprio perfil)
        if (id !== userId) {
            throw new Error('Acesso negado: você só pode deletar seu próprio perfil');
        }
        
        return this.usuarioController.deletarUsuario(id);
    }

    private static async obterUsuarioAtual(req: RouteRequest) {
        const userId = req.headers['user-id'];
        return this.usuarioController.obterUsuario(userId);
    }
}
