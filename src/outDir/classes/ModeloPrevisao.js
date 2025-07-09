"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeloPrevisao = void 0;
class ModeloPrevisao {
    constructor(id, nome, descricao, hiperparametros = {}) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.hiperparametros = hiperparametros;
    }
    prever(dadosHistoricos, periodos = 1) {
        // Implementação simples usando média móvel
        const previsoes = [];
        const janela = Math.min(5, dadosHistoricos.length);
        for (let i = 0; i < periodos; i++) {
            const dados = i === 0 ? dadosHistoricos : [...dadosHistoricos, ...previsoes];
            const ultimos = dados.slice(-janela);
            const media = ultimos.reduce((acc, val) => acc + val, 0) / ultimos.length;
            previsoes.push(media);
        }
        return previsoes;
    }
    treinar(dadosHistoricos) {
        // Simulação de treinamento - ajustar hiperparâmetros
        this.hiperparametros.janela = Math.min(10, Math.floor(dadosHistoricos.length / 2));
        this.hiperparametros.precisao = this.calcularPrecisao(dadosHistoricos);
    }
    calcularPrecisao(dados) {
        if (dados.length < 2)
            return 0;
        const erros = [];
        for (let i = 1; i < dados.length; i++) {
            const previsao = dados[i - 1]; // Previsão simples
            const real = dados[i];
            const erro = Math.abs(real - previsao) / real;
            erros.push(erro);
        }
        const erroMedio = erros.reduce((acc, erro) => acc + erro, 0) / erros.length;
        return Math.max(0, 1 - erroMedio); // Precisão como 1 - erro médio
    }
    getPrecisao() {
        return this.hiperparametros.precisao || 0;
    }
    configurarHiperparametros(novosParametros) {
        this.hiperparametros = { ...this.hiperparametros, ...novosParametros };
    }
    getHiperparametros() {
        return { ...this.hiperparametros };
    }
}
exports.ModeloPrevisao = ModeloPrevisao;
