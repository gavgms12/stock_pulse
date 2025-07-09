"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacao = void 0;
class Notificacao {
    constructor(id, usuario, mensagem, dataEnvio = new Date(), lida = false) {
        this.id = id;
        this.usuario = usuario;
        this.mensagem = mensagem;
        this.dataEnvio = dataEnvio;
        this.lida = lida;
    }
    marcarComoLida() {
        this.lida = true;
    }
    marcarComoNaoLida() {
        this.lida = false;
    }
    getIdadeEmDias() {
        const hoje = new Date();
        const diferenca = hoje.getTime() - this.dataEnvio.getTime();
        return Math.floor(diferenca / (1000 * 3600 * 24));
    }
    isRecente() {
        return this.getIdadeEmDias() <= 7; // 7 dias
    }
    getDataFormatada() {
        return this.dataEnvio.toLocaleDateString('pt-BR');
    }
    toString() {
        const status = this.lida ? 'LIDA' : 'NÃO LIDA';
        return `[${status}] ${this.mensagem} - ${this.getDataFormatada()}`;
    }
}
exports.Notificacao = Notificacao;
