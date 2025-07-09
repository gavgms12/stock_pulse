import { Investimento } from './Investimento';

export class RendaFixa extends Investimento {
    constructor(
        id: string,
        nome: string,
        codigo: string,
        historicoValores: number[],
        public taxaJuros: number,
        public dataVencimento: Date
    ) {
        super(id, nome, codigo, 'RENDA_FIXA', historicoValores);
    }

    calcularRendimentoEsperado(): number {
        return this.taxaJuros;
    }

    calcularValorFuturo(valorInvestido: number): number {
        const diasParaVencimento = this.getDiasParaVencimento();
        const taxaDiaria = this.taxaJuros / 100 / 365;
        
        return valorInvestido * Math.pow(1 + taxaDiaria, diasParaVencimento);
    }

    getDiasParaVencimento(): number {
        const hoje = new Date();
        const diferenca = this.dataVencimento.getTime() - hoje.getTime();
        return Math.ceil(diferenca / (1000 * 3600 * 24));
    }

    isVencido(): boolean {
        return new Date() > this.dataVencimento;
    }

    calcularRendimentoAteVencimento(valorInvestido: number): number {
        return this.calcularValorFuturo(valorInvestido) - valorInvestido;
    }

    getRecomendacao(): string {
        if (this.isVencido()) return 'VENCIDO';
        if (this.taxaJuros > 12) return 'COMPRAR';
        if (this.taxaJuros < 8) return 'EVITAR';
        return 'CONSIDERAR';
    }
}
