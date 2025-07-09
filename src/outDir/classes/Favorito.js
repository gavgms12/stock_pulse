"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorito = void 0;
class Favorito {
    constructor(usuario, investimento, dataAdicao = new Date()) {
        this.usuario = usuario;
        this.investimento = investimento;
        this.dataAdicao = dataAdicao;
    }
    getIdadeEmDias() {
        const hoje = new Date();
        const diferenca = hoje.getTime() - this.dataAdicao.getTime();
        return Math.floor(diferenca / (1000 * 3600 * 24));
    }
    isRecente() {
        return this.getIdadeEmDias() <= 30; // 30 dias
    }
    getDataFormatada() {
        return this.dataAdicao.toLocaleDateString('pt-BR');
    }
    getDescricao() {
        return `${this.investimento.nome} (${this.investimento.codigo})`;
    }
    toString() {
        return `${this.getDescricao()} - Adicionado em ${this.getDataFormatada()}`;
    }
}
exports.Favorito = Favorito;
