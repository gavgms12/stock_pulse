import { BaseController } from './BaseController';
import { Portfolio } from '../classes/Portfolio';
import { Usuario } from '../classes/Usuario';
import { Investimento } from '../classes/Investimento';

export class PortfolioController extends BaseController {
    private portfolios: Portfolio[] = [];

    criarPortfolio(dados: {
        nome: string;
        usuario: Usuario;
        descricao?: string;
    }) {
        try {
            const errors = this.validateRequired(dados, ['nome', 'usuario']);
            if (errors.length > 0) {
                return this.error(errors.join(', '));
            }

            const portfolio = new Portfolio(
                Date.now().toString(),
                dados.nome,
                dados.usuario,
                dados.descricao
            );

            this.portfolios.push(portfolio);
            return this.success(portfolio, 'Portfólio criado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }

    obterPortfolio(id: string) {
        try {
            const portfolio = this.portfolios.find(p => p.id === id);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }
            return this.success(portfolio);
        } catch (error) {
            return this.handleError(error);
        }
    }

    listarPortfoliosPorUsuario(usuarioId: string) {
        try {
            const portfolios = this.portfolios.filter(p => p.usuario.id === usuarioId);
            return this.success(portfolios);
        } catch (error) {
            return this.handleError(error);
        }
    }

    adicionarInvestimento(portfolioId: string, investimento: Investimento, quantidade: number) {
        try {
            const portfolio = this.portfolios.find(p => p.id === portfolioId);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }

            portfolio.adicionarInvestimento(investimento, quantidade);
            return this.success(portfolio, 'Investimento adicionado ao portfólio');
        } catch (error) {
            return this.handleError(error);
        }
    }

    removerInvestimento(portfolioId: string, investimentoId: string) {
        try {
            const portfolio = this.portfolios.find(p => p.id === portfolioId);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }

            portfolio.removerInvestimento(investimentoId);
            return this.success(portfolio, 'Investimento removido do portfólio');
        } catch (error) {
            return this.handleError(error);
        }
    }

    calcularEstatisticas(portfolioId: string) {
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
        } catch (error) {
            return this.handleError(error);
        }
    }

    obterDistribuicao(portfolioId: string) {
        try {
            const portfolio = this.portfolios.find(p => p.id === portfolioId);
            if (!portfolio) {
                return this.error('Portfólio não encontrado');
            }

            const distribuicao = portfolio.getDistribuicao();
            return this.success(distribuicao);
        } catch (error) {
            return this.handleError(error);
        }
    }

    deletarPortfolio(id: string) {
        try {
            const index = this.portfolios.findIndex(p => p.id === id);
            if (index === -1) {
                return this.error('Portfólio não encontrado');
            }

            this.portfolios.splice(index, 1);
            return this.success(null, 'Portfólio deletado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }
}
