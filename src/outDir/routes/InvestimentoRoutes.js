"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestimentoRoutes = void 0;
const BaseRouter_1 = require("./BaseRouter");
const InvestimentoController_1 = require("../controllers/InvestimentoController");
const ValidationMiddleware_1 = require("../middlewares/ValidationMiddleware");
const RateLimitMiddleware_1 = require("../middlewares/RateLimitMiddleware");
class InvestimentoRoutes extends BaseRouter_1.BaseRouter {
    static async handleRequest(req) {
        const { method, path } = req;
        // POST /investimentos - Criar investimento
        if (method === 'POST' && path === '/investimentos') {
            return super.handleRequest(req, this.criarInvestimento.bind(this), {
                requireAuth: true,
                validation: ValidationMiddleware_1.ValidationMiddleware.getInvestimentoSchema(),
                rateLimit: RateLimitMiddleware_1.RateLimitMiddleware.getApiConfig()
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
    static async criarInvestimento(req) {
        return this.investimentoController.criarInvestimento(req.body);
    }
    static async listarInvestimentos(req) {
        const tipo = req.query?.tipo;
        return this.investimentoController.listarInvestimentos(tipo);
    }
    static async obterInvestimento(req) {
        const { id } = req.params;
        return this.investimentoController.obterInvestimento(id);
    }
    static async atualizarHistorico(req) {
        const { id } = req.params;
        const { valor } = req.body;
        return this.investimentoController.atualizarHistorico(id, valor);
    }
    static async obterEstatisticas(req) {
        const { id } = req.params;
        return this.investimentoController.calcularEstatisticas(id);
    }
    static async buscarPorCodigo(req) {
        const { codigo } = req.params;
        return this.investimentoController.buscarPorCodigo(codigo);
    }
    static async listarPorTipo(req) {
        const { tipo } = req.params;
        if (!['AÇÃO', 'RENDA_FIXA', 'FUNDO'].includes(tipo)) {
            throw new Error('Tipo de investimento inválido');
        }
        return this.investimentoController.listarInvestimentos(tipo);
    }
    static async deletarInvestimento(req) {
        const { id } = req.params;
        return this.investimentoController.deletarInvestimento(id);
    }
}
exports.InvestimentoRoutes = InvestimentoRoutes;
InvestimentoRoutes.investimentoController = new InvestimentoController_1.InvestimentoController();
