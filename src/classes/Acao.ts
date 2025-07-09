import { Investimento } from './Investimento';

export class Acao extends Investimento {
    constructor(
        id: string,
        nome: string,
        codigo: string,
        historicoValores: number[],
        public volatilidade: number,
        public dividendYield: number
    ) {
        super(id, nome, codigo, 'AÇÃO', historicoValores);
    }

    calcularRendimentoEsperado(): number {
        return this.dividendYield + (this.calcularVariacao(252) || 0); // 252 dias úteis no ano
    }

    calcularRisco(): number {
        return this.volatilidade;
    }

    calcularDividendoAnual(): number {
        return this.getValorAtual() * (this.dividendYield / 100);
    }

    isAltaVolatilidade(): boolean {
        return this.volatilidade > 25; // 25% como threshold
    }

    getRecomendacao(): string {
        const rendimento = this.calcularRendimentoEsperado();
        const risco = this.calcularRisco();
        
        if (rendimento > 15 && risco < 20) return 'COMPRAR';
        if (rendimento < 5 || risco > 30) return 'VENDER';
        return 'MANTER';
    }
}
