"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acao = void 0;
const Investimento_1 = require("./Investimento");
class Acao extends Investimento_1.Investimento {
    constructor(id, nome, codigo, historicoValores, volatilidade, dividendYield) {
        super(id, nome, codigo, 'AÇÃO', historicoValores);
        this.volatilidade = volatilidade;
        this.dividendYield = dividendYield;
    }
    calcularRendimentoEsperado() {
        return this.dividendYield + (this.calcularVariacao(252) || 0); // 252 dias úteis no ano
    }
    calcularRisco() {
        return this.volatilidade;
    }
    calcularDividendoAnual() {
        return this.getValorAtual() * (this.dividendYield / 100);
    }
    isAltaVolatilidade() {
        return this.volatilidade > 25; // 25% como threshold
    }
    getRecomendacao() {
        const rendimento = this.calcularRendimentoEsperado();
        const risco = this.calcularRisco();
        if (rendimento > 15 && risco < 20)
            return 'COMPRAR';
        if (rendimento < 5 || risco > 30)
            return 'VENDER';
        return 'MANTER';
    }
}
exports.Acao = Acao;
