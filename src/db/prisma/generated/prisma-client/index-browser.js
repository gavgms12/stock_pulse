
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  email: 'email',
  senha: 'senha',
  dataCriacao: 'dataCriacao',
  ultimoLogin: 'ultimoLogin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InvestimentoScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  codigo: 'codigo',
  tipo: 'tipo',
  historico: 'historico',
  volatilidade: 'volatilidade',
  dividendYield: 'dividendYield',
  taxaJuros: 'taxaJuros',
  dataVencimento: 'dataVencimento',
  taxaAdministracao: 'taxaAdministracao',
  patrimonioTotal: 'patrimonioTotal',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PortfolioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  descricao: 'descricao',
  usuarioId: 'usuarioId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PortfolioItemScalarFieldEnum = {
  id: 'id',
  portfolioId: 'portfolioId',
  investimentoId: 'investimentoId',
  quantidade: 'quantidade',
  precoCompra: 'precoCompra',
  dataCompra: 'dataCompra',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FavoritoScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  investimentoId: 'investimentoId',
  dataAdicao: 'dataAdicao',
  createdAt: 'createdAt'
};

exports.Prisma.NotificacaoScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  message: 'message',
  lida: 'lida',
  dataEnvio: 'dataEnvio',
  createdAt: 'createdAt'
};

exports.Prisma.SystemLogScalarFieldEnum = {
  id: 'id',
  type: 'type',
  message: 'message',
  source: 'source',
  operation: 'operation',
  executionTime: 'executionTime',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.MarketDataScalarFieldEnum = {
  id: 'id',
  codigo: 'codigo',
  preco: 'preco',
  variacao: 'variacao',
  volume: 'volume',
  dataHora: 'dataHora',
  createdAt: 'createdAt'
};

exports.Prisma.TransacaoScalarFieldEnum = {
  id: 'id',
  portfolioId: 'portfolioId',
  investimentoId: 'investimentoId',
  tipo: 'tipo',
  quantidade: 'quantidade',
  preco: 'preco',
  taxas: 'taxas',
  dataTransacao: 'dataTransacao',
  observacoes: 'observacoes',
  createdAt: 'createdAt'
};

exports.Prisma.AlertaPrecoScalarFieldEnum = {
  id: 'id',
  usuarioId: 'usuarioId',
  investimentoId: 'investimentoId',
  precoAlvo: 'precoAlvo',
  condicao: 'condicao',
  ativo: 'ativo',
  dataDisparo: 'dataDisparo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RelatorioPerformanceScalarFieldEnum = {
  id: 'id',
  portfolioId: 'portfolioId',
  periodo: 'periodo',
  valorInicial: 'valorInicial',
  valorFinal: 'valorFinal',
  rentabilidade: 'rentabilidade',
  benchmark: 'benchmark',
  dataInicio: 'dataInicio',
  dataFim: 'dataFim',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TipoInvestimento = exports.$Enums.TipoInvestimento = {
  ACAO: 'ACAO',
  RENDA_FIXA: 'RENDA_FIXA',
  FUNDO_INVESTIMENTO: 'FUNDO_INVESTIMENTO'
};

exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Investimento: 'Investimento',
  Portfolio: 'Portfolio',
  PortfolioItem: 'PortfolioItem',
  Favorito: 'Favorito',
  Notificacao: 'Notificacao',
  SystemLog: 'SystemLog',
  MarketData: 'MarketData',
  Transacao: 'Transacao',
  AlertaPreco: 'AlertaPreco',
  RelatorioPerformance: 'RelatorioPerformance'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
