"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investimento = void 0;
class Investimento {
    constructor(id, nome, codigo, tipo, historicoValores = []) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.tipo = tipo;
        this.historicoValores = historicoValores;
    }
    getValorAtual() {
        return this.historicoValores.length > 0 ?
            this.historicoValores[this.historicoValores.length - 1] : 0;
    }
    adicionarValor(valor) {
        this.historicoValores.push(valor);
    }
    calcularVariacao(periodos = 1) {
        if (this.historicoValores.length < periodos + 1)
            return 0;
        const valorAtual = this.getValorAtual();
        const valorAnterior = this.historicoValores[this.historicoValores.length - 1 - periodos];
        return ((valorAtual - valorAnterior) / valorAnterior) * 100;
    }
    getHistorico() {
        return [...this.historicoValores];
    }
    calcularMedia(periodos) {
        const dados = periodos ?
            this.historicoValores.slice(-periodos) :
            this.historicoValores;
        if (dados.length === 0)
            return 0;
        const soma = dados.reduce((acc, valor) => acc + valor, 0);
        return soma / dados.length;
    }
}
exports.Investimento = Investimento;
