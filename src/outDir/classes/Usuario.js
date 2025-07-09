"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id, nome, email, senha, dataCriacao = new Date(), isAdmin = false) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataCriacao = dataCriacao;
        this.isAdmin = isAdmin;
        this.favoritos = [];
        this.notificacoes = [];
    }
    atualizar(investimento, mensagem) {
        console.log(`Notificação para ${this.email}: ${mensagem}`);
        // Lógica para enviar notificação real
    }
    adicionarFavorito(favorito) {
        this.favoritos.push(favorito);
    }
    removerFavorito(favoritoId) {
        this.favoritos = this.favoritos.filter(f => f.id !== favoritoId);
    }
    isFavorito(investimentoId) {
        return this.favoritos.some(f => f.investimento?.id === investimentoId);
    }
    limparFavoritos() {
        this.favoritos = [];
    }
    getFavoritos() {
        return this.favoritos;
    }
    adicionarNotificacao(notificacao) {
        this.notificacoes.push(notificacao);
    }
    getNotificacoes() {
        return this.notificacoes;
    }
    getNotificacaoesNaoLidas() {
        return this.notificacoes.filter(n => !n.lida);
    }
    marcarTodasNotificacoesComoLidas() {
        this.notificacoes.forEach(n => n.lida = true);
    }
    getQuantidadeFavoritos() {
        return this.favoritos.length;
    }
    getQuantidadeNotificacoesNaoLidas() {
        return this.getNotificacaoesNaoLidas().length;
    }
    toString() {
        return `${this.nome} (${this.email})`;
    }
}
exports.Usuario = Usuario;
