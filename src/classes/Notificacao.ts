import { Usuario } from './Usuario';

export class Notificacao {
    constructor(
        public id: string,
        public usuario: Usuario,
        public mensagem: string,
        public dataEnvio: Date = new Date(),
        public lida: boolean = false
    ) {}

    marcarComoLida(): void {
        this.lida = true;
    }

    marcarComoNaoLida(): void {
        this.lida = false;
    }

    getIdadeEmDias(): number {
        const hoje = new Date();
        const diferenca = hoje.getTime() - this.dataEnvio.getTime();
        return Math.floor(diferenca / (1000 * 3600 * 24));
    }

    isRecente(): boolean {
        return this.getIdadeEmDias() <= 7; // 7 dias
    }

    getDataFormatada(): string {
        return this.dataEnvio.toLocaleDateString('pt-BR');
    }

    toString(): string {
        const status = this.lida ? 'LIDA' : 'NÃO LIDA';
        return `[${status}] ${this.mensagem} - ${this.getDataFormatada()}`;
    }
}
