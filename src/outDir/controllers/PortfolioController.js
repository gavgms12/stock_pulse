"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioController = void 0;
const BaseController_1 = require("./BaseController");
const Portfolio_1 = require("../classes/Portfolio");
class PortfolioController extends BaseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.portfolios = [];
    }
    criarPortfolio(dados) {
        try {
            const errors = this.validateRequired(dados, ['nome', 'usuario']);
            if (errors.length > 0) {
                return this.error(errors.join(', '));
            }
            const portfolio = new Portfolio_1.Portfolio(Date.now().toString(), dados.nome, dados.usuario, dados.descricao);
            this.portfolios.push(portfolio);
            return this.success(portfolio, 'Portfólio criado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    obterPortfolio(id) {
        try {
            const portfolio = this.portfolios.find(p => p.id === id);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }
            return this.success(portfolio);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    listarPortfoliosPorUsuario(usuarioId) {
        try {
            const portfolios = this.portfolios.filter(p => p.usuario.id === usuarioId);
            return this.success(portfolios);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    adicionarInvestimento(portfolioId, investimento, quantidade) {
        try {
            const portfolio = this.portfolios.find(p => p.id === portfolioId);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }
            portfolio.adicionarInvestimento(investimento, quantidade);
            return this.success(portfolio, 'Investimento adicionado ao portfólio');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    removerInvestimento(portfolioId, investimentoId) {
        try {
            const portfolio = this.portfolios.find(p => p.id === portfolioId);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }
            portfolio.removerInvestimento(investimentoId);
            return this.success(portfolio, 'Investimento removido do portfólio');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    calcularEstatisticas(portfolioId) {
        try {
            const portfolio = this.portfolios.find(p => p.id === portfolioId);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }
            const estatisticas = {
                valorTotal: portfolio.getValorTotal(),
                rentabilidade: portfolio.calcularRentabilidade(),
                distribuicao: portfolio.getDistribuicao(),
                numeroInvestimentos: portfolio.getInvestimentos().length
            };
            return this.success(estatisticas);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    obterDistribuicao(portfolioId) {
        try {
            const portfolio = this.portfolios.find(p => p.id === portfolioId);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }
            const distribuicao = portfolio.getDistribuicao();
            return this.success(distribuicao);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    deletarPortfolio(id) {
        try {
            const index = this.portfolios.findIndex(p => p.id === id);
            if (index === -1) {
                return this.error('Portfólio não encontrado');
            }
            this.portfolios.splice(index, 1);
            return this.success(null, 'Portfólio deletado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
}
exports.PortfolioController = PortfolioController;
