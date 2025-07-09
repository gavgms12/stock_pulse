import { Usuario } from './Usuario';
import { Investimento } from './Investimento';

export class Favorito {
    constructor(
        public usuario: Usuario,
        public investimento: Investimento,
        public dataAdicao: Date = new Date()
    ) {}

    getIdadeEmDias(): number {
        const hoje = new Date();
        const diferenca = hoje.getTime() - this.dataAdicao.getTime();
        return Math.floor(diferenca / (1000 * 3600 * 24));
    }

    isRecente(): boolean {
        return this.getIdadeEmDias() <= 30; // 30 dias
    }

    getDataFormatada(): string {
        return this.dataAdicao.toLocaleDateString('pt-BR');
    }

    getDescricao(): string {
        return `${this.investimento.nome} (${this.investimento.codigo})`;
    }

    toString(): string {
        return `${this.getDescricao()} - Adicionado em ${this.getDataFormatada()}`;
    }
}
