import { BaseController } from './BaseController';
import { Investimento } from '../classes/Investimento';
import { InvestimentoFactory } from '../classes/InvestimentoFactory';

export class InvestimentoController extends BaseController {
    private investimentos: Investimento[] = [];

    criarInvestimento(dados: {
        tipo: 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO';
        nome: string;
        codigo: string;
        historicoValores?: number[];
        // Parâmetros específicos por tipo
        [key: string]: any;
    }) {
        try {
            const errors = this.validateRequired(dados, ['tipo', 'nome', 'codigo']);
            if (errors.length > 0) {
                return this.error(errors.join(', '));
            }

            const id = Date.now().toString();
            const investimento = InvestimentoFactory.criarInvestimento(
                dados.tipo,
                id,
                dados.nome,
                dados.codigo,
                dados.historicoValores || [],
                ...Object.values(dados).slice(4) // Parâmetros específicos
            );

            this.investimentos.push(investimento);
            return this.success(investimento, 'Investimento criado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }

    obterInvestimento(id: string) {
        try {
            const investimento = this.investimentos.find(i => i.id === id);
            if (!investimento) {
                return this.error('Investimento não encontrado');
            }
            return this.success(investimento);
        } catch (error) {
            return this.handleError(error);
        }
    }

    listarInvestimentos(tipo?: 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO') {
        try {
            const investimentos = tipo 
                ? this.investimentos.filter(i => i.tipo === tipo)
                : this.investimentos;
            return this.success(investimentos);
        } catch (error) {
            return this.handleError(error);
        }
    }

    buscarPorCodigo(codigo: string) {
        try {
            const investimento = this.investimentos.find(i => i.codigo === codigo);
            if (!investimento) {
                return this.error('Investimento não encontrado');
            }
            return this.success(investimento);
        } catch (error) {
            return this.handleError(error);
        }
    }

    atualizarHistorico(id: string, novoValor: number) {
        try {
            const investimento = this.investimentos.find(i => i.id === id);
            if (!investimento) {
                return this.error('Investimento não encontrado');
            }

            investimento.adicionarValor(novoValor);
            return this.success(investimento, 'Histórico atualizado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }

    calcularEstatisticas(id: string) {
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
        } catch (error) {
            return this.handleError(error);
        }
    }

    deletarInvestimento(id: string) {
        try {
            const index = this.investimentos.findIndex(i => i.id === id);
            if (index === -1) {
                return this.error('Investimento não encontrado');
            }

            this.investimentos.splice(index, 1);
            return this.success(null, 'Investimento deletado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }
}
