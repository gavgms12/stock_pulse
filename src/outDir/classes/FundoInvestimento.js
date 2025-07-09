"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FundoInvestimento = void 0;
const Investimento_1 = require("./Investimento");
class FundoInvestimento extends Investimento_1.Investimento {
    constructor(id, nome, codigo, historicoValores, taxaAdministracao, patrimonioTotal) {
        super(id, nome, codigo, 'FUNDO', historicoValores);
        this.taxaAdministracao = taxaAdministracao;
        this.patrimonioTotal = patrimonioTotal;
    }
    calcularRendimentoLiquido() {
        const rendimentoBruto = this.calcularVariacao(252) || 0;
        return rendimentoBruto - this.taxaAdministracao;
    }
    calcularValorCota() {
        return this.getValorAtual();
    }
    calcularNumeroCotas(valorInvestido) {
        return valorInvestido / this.calcularValorCota();
    }
    calcularTaxaAnual() {
        return this.taxaAdministracao;
    }
    calcularCustoAnual(valorInvestido) {
        return valorInvestido * (this.taxaAdministracao / 100);
    }
    getRecomendacao() {
        const rendimentoLiquido = this.calcularRendimentoLiquido();
        if (rendimentoLiquido > 10 && this.taxaAdministracao < 2)
            return 'COMPRAR';
        if (rendimentoLiquido < 5 || this.taxaAdministracao > 3)
            return 'VENDER';
        return 'MANTER';
    }
    getPatrimonioFormatado() {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(this.patrimonioTotal);
    }
}
exports.FundoInvestimento = FundoInvestimento;
