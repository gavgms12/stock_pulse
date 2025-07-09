import { Investimento } from './Investimento';

export class FundoInvestimento extends Investimento {
    constructor(
        id: string,
        nome: string,
        codigo: string,
        historicoValores: number[],
        public taxaAdministracao: number,
        public patrimonioTotal: number
    ) {
        super(id, nome, codigo, 'FUNDO', historicoValores);
    }

    calcularRendimentoLiquido(): number {
        const rendimentoBruto = this.calcularVariacao(252) || 0;
        return rendimentoBruto - this.taxaAdministracao;
    }

    calcularValorCota(): number {
        return this.getValorAtual();
    }

    calcularNumeroCotas(valorInvestido: number): number {
        return valorInvestido / this.calcularValorCota();
    }

    calcularTaxaAnual(): number {
        return this.taxaAdministracao;
    }

    calcularCustoAnual(valorInvestido: number): number {
        return valorInvestido * (this.taxaAdministracao / 100);
    }

    getRecomendacao(): string {
        const rendimentoLiquido = this.calcularRendimentoLiquido();
        
        if (rendimentoLiquido > 10 && this.taxaAdministracao < 2) return 'COMPRAR';
        if (rendimentoLiquido < 5 || this.taxaAdministracao > 3) return 'VENDER';
        return 'MANTER';
    }

    getPatrimonioFormatado(): string {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(this.patrimonioTotal);
    }
}
