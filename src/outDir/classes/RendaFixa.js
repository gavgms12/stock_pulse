"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RendaFixa = void 0;
const Investimento_1 = require("./Investimento");
class RendaFixa extends Investimento_1.Investimento {
    constructor(id, nome, codigo, historicoValores, taxaJuros, dataVencimento) {
        super(id, nome, codigo, 'RENDA_FIXA', historicoValores);
        this.taxaJuros = taxaJuros;
        this.dataVencimento = dataVencimento;
    }
    calcularRendimentoEsperado() {
        return this.taxaJuros;
    }
    calcularValorFuturo(valorInvestido) {
        const diasParaVencimento = this.getDiasParaVencimento();
        const taxaDiaria = this.taxaJuros / 100 / 365;
        return valorInvestido * Math.pow(1 + taxaDiaria, diasParaVencimento);
    }
    getDiasParaVencimento() {
        const hoje = new Date();
        const diferenca = this.dataVencimento.getTime() - hoje.getTime();
        return Math.ceil(diferenca / (1000 * 3600 * 24));
    }
    isVencido() {
        return new Date() > this.dataVencimento;
    }
    calcularRendimentoAteVencimento(valorInvestido) {
        return this.calcularValorFuturo(valorInvestido) - valorInvestido;
    }
    getRecomendacao() {
        if (this.isVencido())
            return 'VENCIDO';
        if (this.taxaJuros > 12)
            return 'COMPRAR';
        if (this.taxaJuros < 8)
            return 'EVITAR';
        return 'CONSIDERAR';
    }
}
exports.RendaFixa = RendaFixa;
