"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacaoController = void 0;
const BaseController_1 = require("./BaseController");
const Notificacao_1 = require("../classes/Notificacao");
class NotificacaoController extends BaseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.notificacoes = [];
    }
    criarNotificacao(dados) {
        try {
            const errors = this.validateRequired(dados, ['usuario', 'mensagem']);
            if (errors.length > 0) {
                return this.error(errors.join(', '));
            }
            const notificacao = new Notificacao_1.Notificacao(Date.now().toString(), dados.usuario, dados.mensagem);
            this.notificacoes.push(notificacao);
            return this.success(notificacao, 'Notificação criada com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    obterNotificacao(id) {
        try {
            const notificacao = this.notificacoes.find(n => n.id === id);
            if (!notificacao) {
                return this.error('Notificação não encontrada');
            }
            return this.success(notificacao);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    listarNotificacoesPorUsuario(usuarioId, apenasSemLer = false) {
        try {
            let notificacoes = this.notificacoes.filter(n => n.usuario.id === usuarioId);
            if (apenasSemLer) {
                notificacoes = notificacoes.filter(n => !n.lida);
            }
            // Ordenar por data (mais recentes primeiro)
            notificacoes.sort((a, b) => b.dataEnvio.getTime() - a.dataEnvio.getTime());
            return this.success(notificacoes);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    marcarComoLida(id) {
        try {
            const notificacao = this.notificacoes.find(n => n.id === id);
            if (!notificacao) {
                return this.error('Notificação não encontrada');
            }
            notificacao.marcarComoLida();
            return this.success(notificacao, 'Notificação marcada como lida');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    marcarTodasComoLidas(usuarioId) {
        try {
            const notificacoes = this.notificacoes.filter(n => n.usuario.id === usuarioId);
            notificacoes.forEach(n => n.marcarComoLida());
            return this.success(notificacoes, 'Todas as notificações marcadas como lidas');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    contarNaoLidas(usuarioId) {
        try {
            const count = this.notificacoes.filter(n => n.usuario.id === usuarioId && !n.lida).length;
            return this.success({ count });
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    deletarNotificacao(id) {
        try {
            const index = this.notificacoes.findIndex(n => n.id === id);
            if (index === -1) {
                return this.error('Notificação não encontrada');
            }
            this.notificacoes.splice(index, 1);
            return this.success(null, 'Notificação deletada com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    limparNotificacoesAntigas(usuarioId, diasMaximo = 30) {
        try {
            const dataLimite = new Date();
            dataLimite.setDate(dataLimite.getDate() - diasMaximo);
            const countAntes = this.notificacoes.length;
            this.notificacoes = this.notificacoes.filter(n => n.usuario.id !== usuarioId || n.dataEnvio > dataLimite);
            const countDepois = this.notificacoes.length;
            return this.success({ removidas: countAntes - countDepois }, 'Notificações antigas removidas');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
}
exports.NotificacaoController = NotificacaoController;
