"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoritoRepository = exports.notificacaoRepository = exports.portfolioRepository = exports.investimentoRepository = exports.usuarioRepository = exports.BaseRepository = void 0;
var BaseRepository_1 = require("./BaseRepository");
Object.defineProperty(exports, "BaseRepository", { enumerable: true, get: function () { return BaseRepository_1.BaseRepository; } });
const UsuarioRepository_1 = require("./UsuarioRepository");
const InvestimentoRepository_1 = require("./InvestimentoRepository");
const PortfolioRepository_1 = require("./PortfolioRepository");
const NotificacaoRepository_1 = require("./NotificacaoRepository");
const FavoritoRepository_1 = require("./FavoritoRepository");
// Instâncias singleton dos repositories
exports.usuarioRepository = new UsuarioRepository_1.UsuarioRepository();
exports.investimentoRepository = new InvestimentoRepository_1.InvestimentoRepository();
exports.portfolioRepository = new PortfolioRepository_1.PortfolioRepository();
exports.notificacaoRepository = new NotificacaoRepository_1.NotificacaoRepository();
exports.favoritoRepository = new FavoritoRepository_1.FavoritoRepository();
