"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritoController = void 0;
const BaseController_1 = require("./BaseController");
const Favorito_1 = require("../classes/Favorito");
class FavoritoController extends BaseController_1.BaseController {
    constructor() {
        super(...arguments);
        this.favoritos = [];
    }
    adicionarFavorito(usuario, investimento) {
        try {
            // Verificar se já existe
            const jaExiste = this.favoritos.some(f => f.usuario.id === usuario.id && f.investimento.id === investimento.id);
            if (jaExiste) {
                return this.error('Investimento já está nos favoritos');
            }
            const favorito = new Favorito_1.Favorito(usuario, investimento);
            this.favoritos.push(favorito);
            return this.success(favorito, 'Favorito adicionado com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    removerFavorito(usuarioId, investimentoId) {
        try {
            const index = this.favoritos.findIndex(f => f.usuario.id === usuarioId && f.investimento.id === investimentoId);
            if (index === -1) {
                return this.error('Favorito não encontrado');
            }
            this.favoritos.splice(index, 1);
            return this.success(null, 'Favorito removido com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    listarFavoritosPorUsuario(usuarioId) {
        try {
            const favoritos = this.favoritos.filter(f => f.usuario.id === usuarioId);
            // Ordenar por data de adição (mais recentes primeiro)
            favoritos.sort((a, b) => b.dataAdicao.getTime() - a.dataAdicao.getTime());
            return this.success(favoritos);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    verificarFavorito(usuarioId, investimentoId) {
        try {
            const favorito = this.favoritos.find(f => f.usuario.id === usuarioId && f.investimento.id === investimentoId);
            return this.success({ isFavorito: !!favorito });
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    obterFavoritosRecentes(usuarioId, dias = 30) {
        try {
            const favoritos = this.favoritos.filter(f => f.usuario.id === usuarioId && f.isRecente());
            return this.success(favoritos);
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    contarFavoritos(usuarioId) {
        try {
            const count = this.favoritos.filter(f => f.usuario.id === usuarioId).length;
            return this.success({ count });
        }
        catch (error) {
            return this.handleError(error);
        }
    }
    limparFavoritos(usuarioId) {
        try {
            const countAntes = this.favoritos.length;
            this.favoritos = this.favoritos.filter(f => f.usuario.id !== usuarioId);
            const countDepois = this.favoritos.length;
            return this.success({ removidos: countAntes - countDepois }, 'Favoritos removidos com sucesso');
        }
        catch (error) {
            return this.handleError(error);
        }
    }
}
exports.FavoritoController = FavoritoController;
