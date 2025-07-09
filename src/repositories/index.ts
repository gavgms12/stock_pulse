export { IRepository, ISearchableRepository, IPaginatedRepository } from './IRepository';
export { BaseRepository } from './BaseRepository';
import { UsuarioRepository, IUsuarioRepository } from './UsuarioRepository';
import { InvestimentoRepository, IInvestimentoRepository } from './InvestimentoRepository';
import { PortfolioRepository, IPortfolioRepository } from './PortfolioRepository';
import { NotificacaoRepository, INotificacaoRepository } from './NotificacaoRepository';
import { FavoritoRepository, IFavoritoRepository } from './FavoritoRepository';

export { IUsuarioRepository } from './UsuarioRepository';
export { IInvestimentoRepository } from './InvestimentoRepository';
export { IPortfolioRepository } from './PortfolioRepository';
export { INotificacaoRepository } from './NotificacaoRepository';
export { IFavoritoRepository } from './FavoritoRepository';

// Instâncias singleton dos repositories
export const usuarioRepository = new UsuarioRepository();
export const investimentoRepository = new InvestimentoRepository();
export const portfolioRepository = new PortfolioRepository();
export const notificacaoRepository = new NotificacaoRepository();
export const favoritoRepository = new FavoritoRepository();
