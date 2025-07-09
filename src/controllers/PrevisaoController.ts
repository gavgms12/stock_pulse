import { BaseController } from './BaseController';
import { ModeloPrevisao } from '../classes/ModeloPrevisao';
import { Investimento } from '../classes/Investimento';

export class PrevisaoController extends BaseController {
    private modelos: ModeloPrevisao[] = [];

    criarModelo(dados: {
        nome: string;
        descricao: string;
        hiperparametros?: Record<string, any>;
    }) {
        try {
            const errors = this.validateRequired(dados, ['nome', 'descricao']);
            if (errors.length > 0) {
                return this.error(errors.join(', '));
            }

            const modelo = new ModeloPrevisao(
                Date.now().toString(),
                dados.nome,
                dados.descricao,
                dados.hiperparametros
            );

            this.modelos.push(modelo);
            return this.success(modelo, 'Modelo criado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }

    obterModelo(id: string) {
        try {
            const modelo = this.modelos.find(m => m.id === id);
            if (!modelo) {
                return this.error('Modelo não encontrado');
            }
            return this.success(modelo);
        } catch (error) {
            return this.handleError(error);
        }
    }

    listarModelos() {
        try {
            return this.success(this.modelos);
        } catch (error) {
            return this.handleError(error);
        }
    }

    treinarModelo(modeloId: string, investimento: Investimento) {
        try {
            const modelo = this.modelos.find(m => m.id === modeloId);
            if (!modelo) {
                return this.error('Modelo não encontrado');
            }

            const historico = investimento.getHistorico();
            if (historico.length < 5) {
                return this.error('Histórico insuficiente para treinamento');
            }

            modelo.treinar(historico);
            return this.success(modelo, 'Modelo treinado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }

    fazerPrevisao(modeloId: string, investimento: Investimento, periodos = 1) {
        try {
            const modelo = this.modelos.find(m => m.id === modeloId);
            if (!modelo) {
                return this.error('Modelo não encontrado');
            }

            const historico = investimento.getHistorico();
            if (historico.length === 0) {
                return this.error('Histórico vazio para previsão');
            }

            const previsoes = modelo.prever(historico, periodos);
            
            return this.success({
                investimento: {
                    id: investimento.id,
                    nome: investimento.nome,
                    codigo: investimento.codigo
                },
                previsoes,
                precisao: modelo.getPrecisao(),
                periodos
            });
        } catch (error) {
            return this.handleError(error);
        }
    }

    configurarHiperparametros(modeloId: string, parametros: Record<string, any>) {
        try {
            const modelo = this.modelos.find(m => m.id === modeloId);
            if (!modelo) {
                return this.error('Modelo não encontrado');
            }

            modelo.configurarHiperparametros(parametros);
            return this.success(modelo, 'Hiperparâmetros configurados com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }

    obterEstatisticasModelo(modeloId: string) {
        try {
            const modelo = this.modelos.find(m => m.id === modeloId);
            if (!modelo) {
                return this.error('Modelo não encontrado');
            }

            const estatisticas = {
                precisao: modelo.getPrecisao(),
                hiperparametros: modelo.getHiperparametros(),
                nome: modelo.nome,
                descricao: modelo.descricao
            };

            return this.success(estatisticas);
        } catch (error) {
            return this.handleError(error);
        }
    }

    deletarModelo(id: string) {
        try {
            const index = this.modelos.findIndex(m => m.id === id);
            if (index === -1) {
                return this.error('Modelo não encontrado');
            }

            this.modelos.splice(index, 1);
            return this.success(null, 'Modelo deletado com sucesso');
        } catch (error) {
            return this.handleError(error);
        }
    }
}
