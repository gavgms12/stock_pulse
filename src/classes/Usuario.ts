import { Observador } from './Observador';
import { Investimento } from './Investimento';

export class Usuario implements Observador {
    private favoritos: any[] = [];
    private notificacoes: any[] = [];

    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public senha: string,
        public dataCriacao: Date = new Date(),
        public isAdmin: boolean = false
    ) {}

    atualizar(investimento: Investimento, mensagem: string): void {
        console.log(`Notificação para ${this.email}: ${mensagem}`);
        // Lógica para enviar notificação real
    }

    adicionarFavorito(favorito: any): void {
        this.favoritos.push(favorito);
    }

    removerFavorito(favoritoId: string): void {
        this.favoritos = this.favoritos.filter(f => f.id !== favoritoId);
    }

    isFavorito(investimentoId: string): boolean {
        return this.favoritos.some(f => f.investimento?.id === investimentoId);
    }

    limparFavoritos(): void {
        this.favoritos = [];
    }

    getFavoritos(): any[] {
        return this.favoritos;
    }

    adicionarNotificacao(notificacao: any): void {
        this.notificacoes.push(notificacao);
    }

    getNotificacoes(): any[] {
        return this.notificacoes;
    }

    getNotificacaoesNaoLidas(): any[] {
        return this.notificacoes.filter(n => !n.lida);
    }

    marcarTodasNotificacoesComoLidas(): void {
        this.notificacoes.forEach(n => n.lida = true);
    }

    getQuantidadeFavoritos(): number {
        return this.favoritos.length;
    }

    getQuantidadeNotificacoesNaoLidas(): number {
        return this.getNotificacaoesNaoLidas().length;
    }

    toString(): string {
        return `${this.nome} (${this.email})`;
    }
}
