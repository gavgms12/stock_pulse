"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvestimentoController = void 0;
const BaseController_1 = require("./BaseController");
const InvestimentoFactory_1 = require("../classes/InvestimentoFactory");
class InvestimentoController extends BaseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.investimentos = [];
    }
    criarInvestimento(dados) {
        try {
            const errors = this.validateRequired(dados, ['tipo', 'nome', 'codigo']);
            if (errors.length > 0) {
                return this.error(errors.join(', '));
            }
            const id = Date.now().toString();
            const investimento = InvestimentoFactory_1.InvestimentoFactory.criarInvestimento(dados.tipo, id, dados.nome, dados.codigo, dados.historicoValores || [], ...Object.values(dados).slice(4) // Parâmetros específicos
            );
            this.investimentos.push(investimento);
            return this.success(investimento, 'Investimento criado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    obterInvestimento(id) {
        try {
            const investimento = this.investimentos.find(i => i.id === id);
            if (!investimento) {
                return this.error('Investimento não encontrado');
            }
            return this.success(investimento);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    listarInvestimentos(tipo) {
        try {
            const investimentos = tipo
                ? this.investimentos.filter(i => i.tipo === tipo)
                : this.investimentos;
            return this.success(investimentos);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    buscarPorCodigo(codigo) {
        try {
            const investimento = this.investimentos.find(i => i.codigo === codigo);
            if (!investimento) {
                return this.error('Investimento não encontrado');
            }
            return this.success(investimento);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    atualizarHistorico(id, novoValor) {
        try {
            const investimento = this.investimentos.find(i => i.id === id);
            if (!investimento) {
                return this.error('Investimento não encontrado');
            }
            investimento.adicionarValor(novoValor);
            return this.success(investimento, 'Histórico atualizado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    calcularEstatisticas(id) {
        try {
            const investimento = this.investimentos.find(i => i.id === id);
            if (!investimento) {
                return this.error('Investimento não encontrado');
            }
            const estatisticas = {
                valorAtual: investimento.getValorAtual(),
                variacao30d: investimento.calcularVariacao(30),
                variacao7d: investimento.calcularVariacao(7),
                media30d: investimento.calcularMedia(30),
                historico: investimento.getHistorico()
            };
            return this.success(estatisticas);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    deletarInvestimento(id) {
        try {
            const index = this.investimentos.findIndex(i => i.id === id);
            if (index === -1) {
                return this.error('Investimento não encontrado');
            }
            this.investimentos.splice(index, 1);
            return this.success(null, 'Investimento deletado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
}
exports.InvestimentoController = InvestimentoController;
