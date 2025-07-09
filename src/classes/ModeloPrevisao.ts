export class ModeloPrevisao {
    constructor(
        public id: string,
        public nome: string,
        public descricao: string,
        public hiperparametros: Record<string, any> = {}
    ) {}

    prever(dadosHistoricos: number[], periodos: number = 1): number[] {
        // Implementação simples usando média móvel
        const previsoes: number[] = [];
        const janela = Math.min(5, dadosHistoricos.length);
        
        for (let i = 0; i < periodos; i++) {
            const dados = i === 0 ? dadosHistoricos : [...dadosHistoricos, ...previsoes];
            const ultimos = dados.slice(-janela);
            const media = ultimos.reduce((acc, val) => acc + val, 0) / ultimos.length;
            previsoes.push(media);
        }
        
        return previsoes;
    }

    treinar(dadosHistoricos: number[]): void {
        // Simulação de treinamento - ajustar hiperparâmetros
        this.hiperparametros.janela = Math.min(10, Math.floor(dadosHistoricos.length / 2));
        this.hiperparametros.precisao = this.calcularPrecisao(dadosHistoricos);
    }

    private calcularPrecisao(dados: number[]): number {
        if (dados.length < 2) return 0;
        
        const erros: number[] = [];
        for (let i = 1; i < dados.length; i++) {
            const previsao = dados[i - 1]; // Previsão simples
            const real = dados[i];
            const erro = Math.abs(real - previsao) / real;
            erros.push(erro);
        }
        
        const erroMedio = erros.reduce((acc, erro) => acc + erro, 0) / erros.length;
        return Math.max(0, 1 - erroMedio); // Precisão como 1 - erro médio
    }

    getPrecisao(): number {
        return this.hiperparametros.precisao || 0;
    }

    configurarHiperparametros(novosParametros: Record<string, any>): void {
        this.hiperparametros = { ...this.hiperparametros, ...novosParametros };
    }

    getHiperparametros(): Record<string, any> {
        return { ...this.hiperparametros };
    }
}
