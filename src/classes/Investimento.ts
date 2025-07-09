export abstract class Investimento {
    constructor(
        public id: string,
        public nome: string,
        public codigo: string,
        public tipo: 'AÇÃO' | 'RENDA_FIXA' | 'FUNDO',
        public historicoValores: number[] = []
    ) {}

    getValorAtual(): number {
        return this.historicoValores.length > 0 ? 
            this.historicoValores[this.historicoValores.length - 1] : 0;
    }

    adicionarValor(valor: number): void {
        this.historicoValores.push(valor);
    }

    calcularVariacao(periodos: number = 1): number {
        if (this.historicoValores.length < periodos + 1) return 0;
        
        const valorAtual = this.getValorAtual();
        const valorAnterior = this.historicoValores[this.historicoValores.length - 1 - periodos];
        
        return ((valorAtual - valorAnterior) / valorAnterior) * 100;
    }

    getHistorico(): number[] {
        return [...this.historicoValores];
    }

    calcularMedia(periodos?: number): number {
        const dados = periodos ? 
            this.historicoValores.slice(-periodos) : 
            this.historicoValores;
        
        if (dados.length === 0) return 0;
        
        const soma = dados.reduce((acc, valor) => acc + valor, 0);
        return soma / dados.length;
    }
}
