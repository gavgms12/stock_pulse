import { BaseRouter, RouteRequest, RouteResponse } from './BaseRouter';
import { InvestimentoController } from '../controllers/InvestimentoController';
import { ValidationMiddleware } from '../middlewares/ValidationMiddleware';
import { RateLimitMiddleware } from '../middlewares/RateLimitMiddleware';

export class InvestimentoRoutes extends BaseRouter {
    private static investimentoController = new InvestimentoController();

    static async handleRequest(req: RouteRequest): Promise<RouteResponse> {
        const { method, path } = req;

        // POST /investimentos - Criar investimento
        if (method === 'POST' && path === '/investimentos') {
            return super.handleRequest(req, this.criarInvestimento.bind(this), {
                requireAuth: true,
                validation: ValidationMiddleware.getInvestimentoSchema(),
                rateLimit: RateLimitMiddleware.getApiConfig()
            });
        }

        // GET /investimentos - Listar investimentos
        if (method === 'GET' && path === '/investimentos') {
            return super.handleRequest(req, this.listarInvestimentos.bind(this), {
                requireAuth: true
            });
        }

        // GET /investimentos/:id - Obter investimento
        if (method === 'GET' && this.matchRoute(path, '/investimentos/:id')) {
            req.params = this.extractParams(path, '/investimentos/:id');
            return super.handleRequest(req, this.obterInvestimento.bind(this), {
                requireAuth: true
            });
        }

        // PUT /investimentos/:id/historico - Atualizar histórico
        if (method === 'PUT' && this.matchRoute(path, '/investimentos/:id/historico')) {
            req.params = this.extractParams(path, '/investimentos/:id/historico');
            return super.handleRequest(req, this.atualizarHistorico.bind(this), {
                requireAuth: true,
                validation: {
                    valor: { required: true, type: 'number', min: 0 }
                }
            });
        }

        // GET /investimentos/:id/estatisticas - Obter estatísticas
        if (method === 'GET' && this.matchRoute(path, '/investimentos/:id/estatisticas')) {
            req.params = this.extractParams(path, '/investimentos/:id/estatisticas');
            return super.handleRequest(req, this.obterEstatisticas.bind(this), {
                requireAuth: true
            });
        }

        // GET /investimentos/buscar/:codigo - Buscar por código
        if (method === 'GET' && this.matchRoute(path, '/investimentos/buscar/:codigo')) {
            req.params = this.extractParams(path, '/investimentos/buscar/:codigo');
            return super.handleRequest(req, this.buscarPorCodigo.bind(this), {
                requireAuth: true
            });
        }

        // GET /investimentos/tipo/:tipo - Listar por tipo
        if (method === 'GET' && this.matchRoute(path, '/investimentos/tipo/:tipo')) {
            req.params = this.extractParams(path, '/investimentos/tipo/:tipo');
            return super.handleRequest(req, this.listarPorTipo.bind(this), {
                requireAuth: true
            });
        }

        // DELETE /investimentos/:id - Deletar investimento
        if (method === 'DELETE' && this.matchRoute(path, '/investimentos/:id')) {
            req.params = this.extractParams(path, '/investimentos/:id');
            return super.handleRequest(req, this.deletarInvestimento.bind(this), {
                requireAuth: true
            });
        }

        return this.errorResponse(404, {
            success: false,
            error: { message: 'Rota não encontrada', code: 'NOT_FOUND', timestamp: new Date().toISOString() }
        });
    }

    private static async criarInvestimento(req: RouteRequest) {
        return this.investimentoController.criarInvestimento(req.body);
    }

    private static async listarInvestimentos(req: RouteRequest) {
        const tipo = req.query?.tipo as 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO' | undefined;
        return this.investimentoController.listarInvestimentos(tipo);
    }

    private static async obterInvestimento(req: RouteRequest) {
        const { id } = req.params!;
        return this.investimentoController.obterInvestimento(id);
    }

    private static async atualizarHistorico(req: RouteRequest) {
        const { id } = req.params!;
        const { valor } = req.body;
        return this.investimentoController.atualizarHistorico(id, valor);
    }

    private static async obterEstatisticas(req: RouteRequest) {
        const { id } = req.params!;
        return this.investimentoController.calcularEstatisticas(id);
    }

    private static async buscarPorCodigo(req: RouteRequest) {
        const { codigo } = req.params!;
        return this.investimentoController.buscarPorCodigo(codigo);
    }

    private static async listarPorTipo(req: RouteRequest) {
        const { tipo } = req.params!;
        
        if (!['AÇÃO', 'RENDA_FIXA', 'FUNDO'].includes(tipo)) {
            throw new Error('Tipo de investimento inválido');
        }
        
        return this.investimentoController.listarInvestimentos(tipo as 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO');
    }

    private static async deletarInvestimento(req: RouteRequest) {
        const { id } = req.params!;
        return this.investimentoController.deletarInvestimento(id);
    }
}
