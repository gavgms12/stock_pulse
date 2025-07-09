"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portfolio = void 0;
class Portfolio {
    constructor(id, nome, usuario, descricao, dataCriacao = new Date()) {
        this.id = id;
        this.nome = nome;
        this.usuario = usuario;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.investimentos = [];
    }
    adicionarInvestimento(investimento, quantidade, precoCompra) {
        const precoAtual = investimento.getValorAtual();
        const preco = precoCompra || precoAtual;
        // Verificar se o investimento já existe no portfólio
        const existente = this.investimentos.find(i => i.investimento.id === investimento.id);
        if (existente) {
            // Atualizar quantidade e preço médio
            const novoValorInvestido = quantidade * preco;
            const valorTotalAnterior = existente.quantidade * existente.precoMedio;
            const valorTotalNovo = valorTotalAnterior + novoValorInvestido;
            const quantidadeTotal = existente.quantidade + quantidade;
            existente.quantidade = quantidadeTotal;
            existente.precoMedio = valorTotalNovo / quantidadeTotal;
            existente.valorInvestido = valorTotalNovo;
        }
        else {
            // Adicionar novo investimento
            this.investimentos.push({
                investimento,
                quantidade,
                precoMedio: preco,
                valorInvestido: quantidade * preco,
                dataAdicao: new Date()
            });
        }
    }
    removerInvestimento(investimentoId) {
        const index = this.investimentos.findIndex(i => i.investimento.id === investimentoId);
        if (index === -1)
            return false;
        this.investimentos.splice(index, 1);
        return true;
    }
    atualizarQuantidade(investimentoId, novaQuantidade) {
        const item = this.investimentos.find(i => i.investimento.id === investimentoId);
        if (!item)
            return false;
        if (novaQuantidade <= 0) {
            return this.removerInvestimento(investimentoId);
        }
        item.quantidade = novaQuantidade;
        item.valorInvestido = novaQuantidade * item.precoMedio;
        return true;
    }
    getInvestimentos() {
        return [...this.investimentos];
    }
    getInvestimento(investimentoId) {
        return this.investimentos.find(i => i.investimento.id === investimentoId);
    }
    getValorTotal() {
        return this.investimentos.reduce((total, item) => {
            const valorAtual = item.investimento.getValorAtual() * item.quantidade;
            return total + valorAtual;
        }, 0);
    }
    getValorInvestido() {
        return this.investimentos.reduce((total, item) => {
            return total + item.valorInvestido;
        }, 0);
    }
    calcularRentabilidade() {
        const valorInvestido = this.getValorInvestido();
        if (valorInvestido === 0)
            return 0;
        const valorAtual = this.getValorTotal();
        return ((valorAtual - valorInvestido) / valorInvestido) * 100;
    }
    calcularLucroOuPrejuizo() {
        return this.getValorTotal() - this.getValorInvestido();
    }
    getDistribuicao() {
        const valorTotal = this.getValorTotal();
        if (valorTotal === 0)
            return {};
        const distribuicao = {};
        this.investimentos.forEach(item => {
            const tipo = item.investimento.tipo;
            const valorAtual = item.investimento.getValorAtual() * item.quantidade;
            const percentual = (valorAtual / valorTotal) * 100;
            distribuicao[tipo] = (distribuicao[tipo] || 0) + percentual;
        });
        return distribuicao;
    }
    getDistribuicaoDetalhada() {
        const valorTotal = this.getValorTotal();
        return this.investimentos.map(item => {
            const valorAtual = item.investimento.getValorAtual() * item.quantidade;
            const percentual = valorTotal > 0 ? (valorAtual / valorTotal) * 100 : 0;
            const lucroOuPrejuizo = valorAtual - item.valorInvestido;
            const rentabilidade = item.valorInvestido > 0 ? (lucroOuPrejuizo / item.valorInvestido) * 100 : 0;
            return {
                investimento: item.investimento,
                quantidade: item.quantidade,
                valorAtual,
                percentual,
                lucroOuPrejuizo,
                rentabilidade
            };
        });
    }
    getMelhorInvestimento() {
        if (this.investimentos.length === 0)
            return null;
        return this.investimentos.reduce((melhor, atual) => {
            const rentabilidadeAtual = this.calcularRentabilidadeItem(atual);
            const rentabilidadeMelhor = this.calcularRentabilidadeItem(melhor);
            return rentabilidadeAtual > rentabilidadeMelhor ? atual : melhor;
        });
    }
    getPiorInvestimento() {
        if (this.investimentos.length === 0)
            return null;
        return this.investimentos.reduce((pior, atual) => {
            const rentabilidadeAtual = this.calcularRentabilidadeItem(atual);
            const rentabilidadePior = this.calcularRentabilidadeItem(pior);
            return rentabilidadeAtual < rentabilidadePior ? atual : pior;
        });
    }
    calcularRentabilidadeItem(item) {
        const valorAtual = item.investimento.getValorAtual() * item.quantidade;
        return item.valorInvestido > 0 ? ((valorAtual - item.valorInvestido) / item.valorInvestido) * 100 : 0;
    }
    getEstatisticas() {
        return {
            valorTotal: this.getValorTotal(),
            valorInvestido: this.getValorInvestido(),
            rentabilidade: this.calcularRentabilidade(),
            lucroOuPrejuizo: this.calcularLucroOuPrejuizo(),
            numeroInvestimentos: this.investimentos.length,
            distribuicao: this.getDistribuicao()
        };
    }
    isDiversificado() {
        const distribuicao = this.getDistribuicao();
        const tipos = Object.keys(distribuicao);
        // Considera diversificado se tem pelo menos 2 tipos e nenhum tipo representa mais de 70%
        return tipos.length >= 2 && !tipos.some(tipo => distribuicao[tipo] > 70);
    }
    getRecomendacoes() {
        const recomendacoes = [];
        const distribuicao = this.getDistribuicao();
        const rentabilidade = this.calcularRentabilidade();
        if (!this.isDiversificado()) {
            recomendacoes.push('Considere diversificar seu portfólio com diferentes tipos de investimentos');
        }
        if (rentabilidade < 0) {
            recomendacoes.push('Seu portfólio está com rentabilidade negativa. Revise seus investimentos');
        }
        if (this.investimentos.length < 3) {
            recomendacoes.push('Considere adicionar mais investimentos para reduzir riscos');
        }
        // Verificar se há muita concentração em renda fixa
        if (distribuicao['RENDA_FIXA'] && distribuicao['RENDA_FIXA'] > 80) {
            recomendacoes.push('Considere adicionar ações ou fundos para aumentar o potencial de rentabilidade');
        }
        return recomendacoes;
    }
    toString() {
        return `Portfolio: ${this.nome} - Valor Total: R$ ${this.getValorTotal().toFixed(2)} - Rentabilidade: ${this.calcularRentabilidade().toFixed(2)}%`;
    }
}
exports.Portfolio = Portfolio;
