
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Investimento
 * 
 */
export type Investimento = $Result.DefaultSelection<Prisma.$InvestimentoPayload>
/**
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model PortfolioItem
 * 
 */
export type PortfolioItem = $Result.DefaultSelection<Prisma.$PortfolioItemPayload>
/**
 * Model Favorito
 * 
 */
export type Favorito = $Result.DefaultSelection<Prisma.$FavoritoPayload>
/**
 * Model Notificacao
 * 
 */
export type Notificacao = $Result.DefaultSelection<Prisma.$NotificacaoPayload>
/**
 * Model SystemLog
 * 
 */
export type SystemLog = $Result.DefaultSelection<Prisma.$SystemLogPayload>
/**
 * Model MarketData
 * 
 */
export type MarketData = $Result.DefaultSelection<Prisma.$MarketDataPayload>
/**
 * Model Transacao
 * 
 */
export type Transacao = $Result.DefaultSelection<Prisma.$TransacaoPayload>
/**
 * Model AlertaPreco
 * 
 */
export type AlertaPreco = $Result.DefaultSelection<Prisma.$AlertaPrecoPayload>
/**
 * Model RelatorioPerformance
 * 
 */
export type RelatorioPerformance = $Result.DefaultSelection<Prisma.$RelatorioPerformancePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoInvestimento: {
  ACAO: 'ACAO',
  RENDA_FIXA: 'RENDA_FIXA',
  FUNDO_INVESTIMENTO: 'FUNDO_INVESTIMENTO'
};

export type TipoInvestimento = (typeof TipoInvestimento)[keyof typeof TipoInvestimento]

}

export type TipoInvestimento = $Enums.TipoInvestimento

export const TipoInvestimento: typeof $Enums.TipoInvestimento

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.investimento`: Exposes CRUD operations for the **Investimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investimentos
    * const investimentos = await prisma.investimento.findMany()
    * ```
    */
  get investimento(): Prisma.InvestimentoDelegate<ExtArgs>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs>;

  /**
   * `prisma.portfolioItem`: Exposes CRUD operations for the **PortfolioItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioItems
    * const portfolioItems = await prisma.portfolioItem.findMany()
    * ```
    */
  get portfolioItem(): Prisma.PortfolioItemDelegate<ExtArgs>;

  /**
   * `prisma.favorito`: Exposes CRUD operations for the **Favorito** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favoritos
    * const favoritos = await prisma.favorito.findMany()
    * ```
    */
  get favorito(): Prisma.FavoritoDelegate<ExtArgs>;

  /**
   * `prisma.notificacao`: Exposes CRUD operations for the **Notificacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificacaos
    * const notificacaos = await prisma.notificacao.findMany()
    * ```
    */
  get notificacao(): Prisma.NotificacaoDelegate<ExtArgs>;

  /**
   * `prisma.systemLog`: Exposes CRUD operations for the **SystemLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemLogs
    * const systemLogs = await prisma.systemLog.findMany()
    * ```
    */
  get systemLog(): Prisma.SystemLogDelegate<ExtArgs>;

  /**
   * `prisma.marketData`: Exposes CRUD operations for the **MarketData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketData
    * const marketData = await prisma.marketData.findMany()
    * ```
    */
  get marketData(): Prisma.MarketDataDelegate<ExtArgs>;

  /**
   * `prisma.transacao`: Exposes CRUD operations for the **Transacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transacaos
    * const transacaos = await prisma.transacao.findMany()
    * ```
    */
  get transacao(): Prisma.TransacaoDelegate<ExtArgs>;

  /**
   * `prisma.alertaPreco`: Exposes CRUD operations for the **AlertaPreco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlertaPrecos
    * const alertaPrecos = await prisma.alertaPreco.findMany()
    * ```
    */
  get alertaPreco(): Prisma.AlertaPrecoDelegate<ExtArgs>;

  /**
   * `prisma.relatorioPerformance`: Exposes CRUD operations for the **RelatorioPerformance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RelatorioPerformances
    * const relatorioPerformances = await prisma.relatorioPerformance.findMany()
    * ```
    */
  get relatorioPerformance(): Prisma.RelatorioPerformanceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "investimento" | "portfolio" | "portfolioItem" | "favorito" | "notificacao" | "systemLog" | "marketData" | "transacao" | "alertaPreco" | "relatorioPerformance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Investimento: {
        payload: Prisma.$InvestimentoPayload<ExtArgs>
        fields: Prisma.InvestimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestimentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestimentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          findFirst: {
            args: Prisma.InvestimentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestimentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          findMany: {
            args: Prisma.InvestimentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>[]
          }
          create: {
            args: Prisma.InvestimentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          createMany: {
            args: Prisma.InvestimentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestimentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>[]
          }
          delete: {
            args: Prisma.InvestimentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          update: {
            args: Prisma.InvestimentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          deleteMany: {
            args: Prisma.InvestimentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestimentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvestimentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestimentoPayload>
          }
          aggregate: {
            args: Prisma.InvestimentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestimento>
          }
          groupBy: {
            args: Prisma.InvestimentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestimentoCountArgs<ExtArgs>
            result: $Utils.Optional<InvestimentoCountAggregateOutputType> | number
          }
        }
      }
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      PortfolioItem: {
        payload: Prisma.$PortfolioItemPayload<ExtArgs>
        fields: Prisma.PortfolioItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findFirst: {
            args: Prisma.PortfolioItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findMany: {
            args: Prisma.PortfolioItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          create: {
            args: Prisma.PortfolioItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          createMany: {
            args: Prisma.PortfolioItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          delete: {
            args: Prisma.PortfolioItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          update: {
            args: Prisma.PortfolioItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PortfolioItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          aggregate: {
            args: Prisma.PortfolioItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioItem>
          }
          groupBy: {
            args: Prisma.PortfolioItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioItemCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemCountAggregateOutputType> | number
          }
        }
      }
      Favorito: {
        payload: Prisma.$FavoritoPayload<ExtArgs>
        fields: Prisma.FavoritoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoritoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoritoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findFirst: {
            args: Prisma.FavoritoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoritoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          findMany: {
            args: Prisma.FavoritoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          create: {
            args: Prisma.FavoritoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          createMany: {
            args: Prisma.FavoritoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoritoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>[]
          }
          delete: {
            args: Prisma.FavoritoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          update: {
            args: Prisma.FavoritoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          deleteMany: {
            args: Prisma.FavoritoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoritoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavoritoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritoPayload>
          }
          aggregate: {
            args: Prisma.FavoritoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorito>
          }
          groupBy: {
            args: Prisma.FavoritoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoritoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoritoCountArgs<ExtArgs>
            result: $Utils.Optional<FavoritoCountAggregateOutputType> | number
          }
        }
      }
      Notificacao: {
        payload: Prisma.$NotificacaoPayload<ExtArgs>
        fields: Prisma.NotificacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findFirst: {
            args: Prisma.NotificacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          findMany: {
            args: Prisma.NotificacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          create: {
            args: Prisma.NotificacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          createMany: {
            args: Prisma.NotificacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>[]
          }
          delete: {
            args: Prisma.NotificacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          update: {
            args: Prisma.NotificacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          deleteMany: {
            args: Prisma.NotificacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificacaoPayload>
          }
          aggregate: {
            args: Prisma.NotificacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificacao>
          }
          groupBy: {
            args: Prisma.NotificacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificacaoCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacaoCountAggregateOutputType> | number
          }
        }
      }
      SystemLog: {
        payload: Prisma.$SystemLogPayload<ExtArgs>
        fields: Prisma.SystemLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findFirst: {
            args: Prisma.SystemLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findMany: {
            args: Prisma.SystemLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          create: {
            args: Prisma.SystemLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          createMany: {
            args: Prisma.SystemLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          delete: {
            args: Prisma.SystemLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          update: {
            args: Prisma.SystemLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          deleteMany: {
            args: Prisma.SystemLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          aggregate: {
            args: Prisma.SystemLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemLog>
          }
          groupBy: {
            args: Prisma.SystemLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemLogCountArgs<ExtArgs>
            result: $Utils.Optional<SystemLogCountAggregateOutputType> | number
          }
        }
      }
      MarketData: {
        payload: Prisma.$MarketDataPayload<ExtArgs>
        fields: Prisma.MarketDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findFirst: {
            args: Prisma.MarketDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          findMany: {
            args: Prisma.MarketDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          create: {
            args: Prisma.MarketDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          createMany: {
            args: Prisma.MarketDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>[]
          }
          delete: {
            args: Prisma.MarketDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          update: {
            args: Prisma.MarketDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          deleteMany: {
            args: Prisma.MarketDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarketDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketDataPayload>
          }
          aggregate: {
            args: Prisma.MarketDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketData>
          }
          groupBy: {
            args: Prisma.MarketDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketDataCountArgs<ExtArgs>
            result: $Utils.Optional<MarketDataCountAggregateOutputType> | number
          }
        }
      }
      Transacao: {
        payload: Prisma.$TransacaoPayload<ExtArgs>
        fields: Prisma.TransacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findFirst: {
            args: Prisma.TransacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          findMany: {
            args: Prisma.TransacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          create: {
            args: Prisma.TransacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          createMany: {
            args: Prisma.TransacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>[]
          }
          delete: {
            args: Prisma.TransacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          update: {
            args: Prisma.TransacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          deleteMany: {
            args: Prisma.TransacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransacaoPayload>
          }
          aggregate: {
            args: Prisma.TransacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransacao>
          }
          groupBy: {
            args: Prisma.TransacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransacaoCountArgs<ExtArgs>
            result: $Utils.Optional<TransacaoCountAggregateOutputType> | number
          }
        }
      }
      AlertaPreco: {
        payload: Prisma.$AlertaPrecoPayload<ExtArgs>
        fields: Prisma.AlertaPrecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertaPrecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertaPrecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>
          }
          findFirst: {
            args: Prisma.AlertaPrecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertaPrecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>
          }
          findMany: {
            args: Prisma.AlertaPrecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>[]
          }
          create: {
            args: Prisma.AlertaPrecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>
          }
          createMany: {
            args: Prisma.AlertaPrecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertaPrecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>[]
          }
          delete: {
            args: Prisma.AlertaPrecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>
          }
          update: {
            args: Prisma.AlertaPrecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>
          }
          deleteMany: {
            args: Prisma.AlertaPrecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertaPrecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertaPrecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertaPrecoPayload>
          }
          aggregate: {
            args: Prisma.AlertaPrecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlertaPreco>
          }
          groupBy: {
            args: Prisma.AlertaPrecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertaPrecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertaPrecoCountArgs<ExtArgs>
            result: $Utils.Optional<AlertaPrecoCountAggregateOutputType> | number
          }
        }
      }
      RelatorioPerformance: {
        payload: Prisma.$RelatorioPerformancePayload<ExtArgs>
        fields: Prisma.RelatorioPerformanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelatorioPerformanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelatorioPerformanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>
          }
          findFirst: {
            args: Prisma.RelatorioPerformanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelatorioPerformanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>
          }
          findMany: {
            args: Prisma.RelatorioPerformanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>[]
          }
          create: {
            args: Prisma.RelatorioPerformanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>
          }
          createMany: {
            args: Prisma.RelatorioPerformanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelatorioPerformanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>[]
          }
          delete: {
            args: Prisma.RelatorioPerformanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>
          }
          update: {
            args: Prisma.RelatorioPerformanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>
          }
          deleteMany: {
            args: Prisma.RelatorioPerformanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelatorioPerformanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RelatorioPerformanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelatorioPerformancePayload>
          }
          aggregate: {
            args: Prisma.RelatorioPerformanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelatorioPerformance>
          }
          groupBy: {
            args: Prisma.RelatorioPerformanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelatorioPerformanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelatorioPerformanceCountArgs<ExtArgs>
            result: $Utils.Optional<RelatorioPerformanceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    portfolios: number
    favoritos: number
    notificacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolios?: boolean | UsuarioCountOutputTypeCountPortfoliosArgs
    favoritos?: boolean | UsuarioCountOutputTypeCountFavoritosArgs
    notificacoes?: boolean | UsuarioCountOutputTypeCountNotificacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPortfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNotificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
  }


  /**
   * Count Type InvestimentoCountOutputType
   */

  export type InvestimentoCountOutputType = {
    portfolioItems: number
    favoritos: number
  }

  export type InvestimentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioItems?: boolean | InvestimentoCountOutputTypeCountPortfolioItemsArgs
    favoritos?: boolean | InvestimentoCountOutputTypeCountFavoritosArgs
  }

  // Custom InputTypes
  /**
   * InvestimentoCountOutputType without action
   */
  export type InvestimentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestimentoCountOutputType
     */
    select?: InvestimentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestimentoCountOutputType without action
   */
  export type InvestimentoCountOutputTypeCountPortfolioItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
  }

  /**
   * InvestimentoCountOutputType without action
   */
  export type InvestimentoCountOutputTypeCountFavoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
  }


  /**
   * Count Type PortfolioCountOutputType
   */

  export type PortfolioCountOutputType = {
    itens: number
  }

  export type PortfolioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itens?: boolean | PortfolioCountOutputTypeCountItensArgs
  }

  // Custom InputTypes
  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioCountOutputType
     */
    select?: PortfolioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PortfolioCountOutputType without action
   */
  export type PortfolioCountOutputTypeCountItensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    dataCriacao: Date | null
    ultimoLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    email: string | null
    senha: string | null
    dataCriacao: Date | null
    ultimoLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    dataCriacao: number
    ultimoLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataCriacao?: true
    ultimoLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataCriacao?: true
    ultimoLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataCriacao?: true
    ultimoLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    nome: string
    email: string
    senha: string
    dataCriacao: Date
    ultimoLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataCriacao?: boolean
    ultimoLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolios?: boolean | Usuario$portfoliosArgs<ExtArgs>
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataCriacao?: boolean
    ultimoLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataCriacao?: boolean
    ultimoLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolios?: boolean | Usuario$portfoliosArgs<ExtArgs>
    favoritos?: boolean | Usuario$favoritosArgs<ExtArgs>
    notificacoes?: boolean | Usuario$notificacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      portfolios: Prisma.$PortfolioPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
      notificacoes: Prisma.$NotificacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      email: string
      senha: string
      dataCriacao: Date
      ultimoLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolios<T extends Usuario$portfoliosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$portfoliosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany"> | Null>
    favoritos<T extends Usuario$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany"> | Null>
    notificacoes<T extends Usuario$notificacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$notificacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly dataCriacao: FieldRef<"Usuario", 'DateTime'>
    readonly ultimoLogin: FieldRef<"Usuario", 'DateTime'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario.portfolios
   */
  export type Usuario$portfoliosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    cursor?: PortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Usuario.favoritos
   */
  export type Usuario$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Usuario.notificacoes
   */
  export type Usuario$notificacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    cursor?: NotificacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Investimento
   */

  export type AggregateInvestimento = {
    _count: InvestimentoCountAggregateOutputType | null
    _avg: InvestimentoAvgAggregateOutputType | null
    _sum: InvestimentoSumAggregateOutputType | null
    _min: InvestimentoMinAggregateOutputType | null
    _max: InvestimentoMaxAggregateOutputType | null
  }

  export type InvestimentoAvgAggregateOutputType = {
    historico: number | null
    volatilidade: number | null
    dividendYield: number | null
    taxaJuros: number | null
    taxaAdministracao: number | null
    patrimonioTotal: number | null
  }

  export type InvestimentoSumAggregateOutputType = {
    historico: number[]
    volatilidade: number | null
    dividendYield: number | null
    taxaJuros: number | null
    taxaAdministracao: number | null
    patrimonioTotal: number | null
  }

  export type InvestimentoMinAggregateOutputType = {
    id: string | null
    nome: string | null
    codigo: string | null
    tipo: $Enums.TipoInvestimento | null
    volatilidade: number | null
    dividendYield: number | null
    taxaJuros: number | null
    dataVencimento: Date | null
    taxaAdministracao: number | null
    patrimonioTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestimentoMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    codigo: string | null
    tipo: $Enums.TipoInvestimento | null
    volatilidade: number | null
    dividendYield: number | null
    taxaJuros: number | null
    dataVencimento: Date | null
    taxaAdministracao: number | null
    patrimonioTotal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvestimentoCountAggregateOutputType = {
    id: number
    nome: number
    codigo: number
    tipo: number
    historico: number
    volatilidade: number
    dividendYield: number
    taxaJuros: number
    dataVencimento: number
    taxaAdministracao: number
    patrimonioTotal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvestimentoAvgAggregateInputType = {
    historico?: true
    volatilidade?: true
    dividendYield?: true
    taxaJuros?: true
    taxaAdministracao?: true
    patrimonioTotal?: true
  }

  export type InvestimentoSumAggregateInputType = {
    historico?: true
    volatilidade?: true
    dividendYield?: true
    taxaJuros?: true
    taxaAdministracao?: true
    patrimonioTotal?: true
  }

  export type InvestimentoMinAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    tipo?: true
    volatilidade?: true
    dividendYield?: true
    taxaJuros?: true
    dataVencimento?: true
    taxaAdministracao?: true
    patrimonioTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestimentoMaxAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    tipo?: true
    volatilidade?: true
    dividendYield?: true
    taxaJuros?: true
    dataVencimento?: true
    taxaAdministracao?: true
    patrimonioTotal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvestimentoCountAggregateInputType = {
    id?: true
    nome?: true
    codigo?: true
    tipo?: true
    historico?: true
    volatilidade?: true
    dividendYield?: true
    taxaJuros?: true
    dataVencimento?: true
    taxaAdministracao?: true
    patrimonioTotal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvestimentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investimento to aggregate.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investimentos
    **/
    _count?: true | InvestimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestimentoMaxAggregateInputType
  }

  export type GetInvestimentoAggregateType<T extends InvestimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestimento[P]>
      : GetScalarType<T[P], AggregateInvestimento[P]>
  }




  export type InvestimentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestimentoWhereInput
    orderBy?: InvestimentoOrderByWithAggregationInput | InvestimentoOrderByWithAggregationInput[]
    by: InvestimentoScalarFieldEnum[] | InvestimentoScalarFieldEnum
    having?: InvestimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestimentoCountAggregateInputType | true
    _avg?: InvestimentoAvgAggregateInputType
    _sum?: InvestimentoSumAggregateInputType
    _min?: InvestimentoMinAggregateInputType
    _max?: InvestimentoMaxAggregateInputType
  }

  export type InvestimentoGroupByOutputType = {
    id: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico: number[]
    volatilidade: number | null
    dividendYield: number | null
    taxaJuros: number | null
    dataVencimento: Date | null
    taxaAdministracao: number | null
    patrimonioTotal: number | null
    createdAt: Date
    updatedAt: Date
    _count: InvestimentoCountAggregateOutputType | null
    _avg: InvestimentoAvgAggregateOutputType | null
    _sum: InvestimentoSumAggregateOutputType | null
    _min: InvestimentoMinAggregateOutputType | null
    _max: InvestimentoMaxAggregateOutputType | null
  }

  type GetInvestimentoGroupByPayload<T extends InvestimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestimentoGroupByOutputType[P]>
            : GetScalarType<T[P], InvestimentoGroupByOutputType[P]>
        }
      >
    >


  export type InvestimentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    tipo?: boolean
    historico?: boolean
    volatilidade?: boolean
    dividendYield?: boolean
    taxaJuros?: boolean
    dataVencimento?: boolean
    taxaAdministracao?: boolean
    patrimonioTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolioItems?: boolean | Investimento$portfolioItemsArgs<ExtArgs>
    favoritos?: boolean | Investimento$favoritosArgs<ExtArgs>
    _count?: boolean | InvestimentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investimento"]>

  export type InvestimentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo?: boolean
    tipo?: boolean
    historico?: boolean
    volatilidade?: boolean
    dividendYield?: boolean
    taxaJuros?: boolean
    dataVencimento?: boolean
    taxaAdministracao?: boolean
    patrimonioTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["investimento"]>

  export type InvestimentoSelectScalar = {
    id?: boolean
    nome?: boolean
    codigo?: boolean
    tipo?: boolean
    historico?: boolean
    volatilidade?: boolean
    dividendYield?: boolean
    taxaJuros?: boolean
    dataVencimento?: boolean
    taxaAdministracao?: boolean
    patrimonioTotal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvestimentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolioItems?: boolean | Investimento$portfolioItemsArgs<ExtArgs>
    favoritos?: boolean | Investimento$favoritosArgs<ExtArgs>
    _count?: boolean | InvestimentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestimentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvestimentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investimento"
    objects: {
      portfolioItems: Prisma.$PortfolioItemPayload<ExtArgs>[]
      favoritos: Prisma.$FavoritoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      codigo: string
      tipo: $Enums.TipoInvestimento
      historico: number[]
      volatilidade: number | null
      dividendYield: number | null
      taxaJuros: number | null
      dataVencimento: Date | null
      taxaAdministracao: number | null
      patrimonioTotal: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["investimento"]>
    composites: {}
  }

  type InvestimentoGetPayload<S extends boolean | null | undefined | InvestimentoDefaultArgs> = $Result.GetResult<Prisma.$InvestimentoPayload, S>

  type InvestimentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvestimentoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvestimentoCountAggregateInputType | true
    }

  export interface InvestimentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investimento'], meta: { name: 'Investimento' } }
    /**
     * Find zero or one Investimento that matches the filter.
     * @param {InvestimentoFindUniqueArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestimentoFindUniqueArgs>(args: SelectSubset<T, InvestimentoFindUniqueArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Investimento that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvestimentoFindUniqueOrThrowArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestimentoFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestimentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Investimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoFindFirstArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestimentoFindFirstArgs>(args?: SelectSubset<T, InvestimentoFindFirstArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Investimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoFindFirstOrThrowArgs} args - Arguments to find a Investimento
     * @example
     * // Get one Investimento
     * const investimento = await prisma.investimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestimentoFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestimentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Investimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investimentos
     * const investimentos = await prisma.investimento.findMany()
     * 
     * // Get first 10 Investimentos
     * const investimentos = await prisma.investimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investimentoWithIdOnly = await prisma.investimento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestimentoFindManyArgs>(args?: SelectSubset<T, InvestimentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Investimento.
     * @param {InvestimentoCreateArgs} args - Arguments to create a Investimento.
     * @example
     * // Create one Investimento
     * const Investimento = await prisma.investimento.create({
     *   data: {
     *     // ... data to create a Investimento
     *   }
     * })
     * 
     */
    create<T extends InvestimentoCreateArgs>(args: SelectSubset<T, InvestimentoCreateArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Investimentos.
     * @param {InvestimentoCreateManyArgs} args - Arguments to create many Investimentos.
     * @example
     * // Create many Investimentos
     * const investimento = await prisma.investimento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestimentoCreateManyArgs>(args?: SelectSubset<T, InvestimentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investimentos and returns the data saved in the database.
     * @param {InvestimentoCreateManyAndReturnArgs} args - Arguments to create many Investimentos.
     * @example
     * // Create many Investimentos
     * const investimento = await prisma.investimento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investimentos and only return the `id`
     * const investimentoWithIdOnly = await prisma.investimento.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestimentoCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestimentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Investimento.
     * @param {InvestimentoDeleteArgs} args - Arguments to delete one Investimento.
     * @example
     * // Delete one Investimento
     * const Investimento = await prisma.investimento.delete({
     *   where: {
     *     // ... filter to delete one Investimento
     *   }
     * })
     * 
     */
    delete<T extends InvestimentoDeleteArgs>(args: SelectSubset<T, InvestimentoDeleteArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Investimento.
     * @param {InvestimentoUpdateArgs} args - Arguments to update one Investimento.
     * @example
     * // Update one Investimento
     * const investimento = await prisma.investimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestimentoUpdateArgs>(args: SelectSubset<T, InvestimentoUpdateArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Investimentos.
     * @param {InvestimentoDeleteManyArgs} args - Arguments to filter Investimentos to delete.
     * @example
     * // Delete a few Investimentos
     * const { count } = await prisma.investimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestimentoDeleteManyArgs>(args?: SelectSubset<T, InvestimentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investimentos
     * const investimento = await prisma.investimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestimentoUpdateManyArgs>(args: SelectSubset<T, InvestimentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Investimento.
     * @param {InvestimentoUpsertArgs} args - Arguments to update or create a Investimento.
     * @example
     * // Update or create a Investimento
     * const investimento = await prisma.investimento.upsert({
     *   create: {
     *     // ... data to create a Investimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investimento we want to update
     *   }
     * })
     */
    upsert<T extends InvestimentoUpsertArgs>(args: SelectSubset<T, InvestimentoUpsertArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Investimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoCountArgs} args - Arguments to filter Investimentos to count.
     * @example
     * // Count the number of Investimentos
     * const count = await prisma.investimento.count({
     *   where: {
     *     // ... the filter for the Investimentos we want to count
     *   }
     * })
    **/
    count<T extends InvestimentoCountArgs>(
      args?: Subset<T, InvestimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestimentoAggregateArgs>(args: Subset<T, InvestimentoAggregateArgs>): Prisma.PrismaPromise<GetInvestimentoAggregateType<T>>

    /**
     * Group by Investimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestimentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestimentoGroupByArgs['orderBy'] }
        : { orderBy?: InvestimentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investimento model
   */
  readonly fields: InvestimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestimentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolioItems<T extends Investimento$portfolioItemsArgs<ExtArgs> = {}>(args?: Subset<T, Investimento$portfolioItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany"> | Null>
    favoritos<T extends Investimento$favoritosArgs<ExtArgs> = {}>(args?: Subset<T, Investimento$favoritosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investimento model
   */ 
  interface InvestimentoFieldRefs {
    readonly id: FieldRef<"Investimento", 'String'>
    readonly nome: FieldRef<"Investimento", 'String'>
    readonly codigo: FieldRef<"Investimento", 'String'>
    readonly tipo: FieldRef<"Investimento", 'TipoInvestimento'>
    readonly historico: FieldRef<"Investimento", 'Float[]'>
    readonly volatilidade: FieldRef<"Investimento", 'Float'>
    readonly dividendYield: FieldRef<"Investimento", 'Float'>
    readonly taxaJuros: FieldRef<"Investimento", 'Float'>
    readonly dataVencimento: FieldRef<"Investimento", 'DateTime'>
    readonly taxaAdministracao: FieldRef<"Investimento", 'Float'>
    readonly patrimonioTotal: FieldRef<"Investimento", 'Float'>
    readonly createdAt: FieldRef<"Investimento", 'DateTime'>
    readonly updatedAt: FieldRef<"Investimento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Investimento findUnique
   */
  export type InvestimentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento findUniqueOrThrow
   */
  export type InvestimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento findFirst
   */
  export type InvestimentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investimentos.
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investimentos.
     */
    distinct?: InvestimentoScalarFieldEnum | InvestimentoScalarFieldEnum[]
  }

  /**
   * Investimento findFirstOrThrow
   */
  export type InvestimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * Filter, which Investimento to fetch.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investimentos.
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investimentos.
     */
    distinct?: InvestimentoScalarFieldEnum | InvestimentoScalarFieldEnum[]
  }

  /**
   * Investimento findMany
   */
  export type InvestimentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * Filter, which Investimentos to fetch.
     */
    where?: InvestimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investimentos to fetch.
     */
    orderBy?: InvestimentoOrderByWithRelationInput | InvestimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investimentos.
     */
    cursor?: InvestimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investimentos.
     */
    skip?: number
    distinct?: InvestimentoScalarFieldEnum | InvestimentoScalarFieldEnum[]
  }

  /**
   * Investimento create
   */
  export type InvestimentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Investimento.
     */
    data: XOR<InvestimentoCreateInput, InvestimentoUncheckedCreateInput>
  }

  /**
   * Investimento createMany
   */
  export type InvestimentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investimentos.
     */
    data: InvestimentoCreateManyInput | InvestimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investimento createManyAndReturn
   */
  export type InvestimentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Investimentos.
     */
    data: InvestimentoCreateManyInput | InvestimentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investimento update
   */
  export type InvestimentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Investimento.
     */
    data: XOR<InvestimentoUpdateInput, InvestimentoUncheckedUpdateInput>
    /**
     * Choose, which Investimento to update.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento updateMany
   */
  export type InvestimentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investimentos.
     */
    data: XOR<InvestimentoUpdateManyMutationInput, InvestimentoUncheckedUpdateManyInput>
    /**
     * Filter which Investimentos to update
     */
    where?: InvestimentoWhereInput
  }

  /**
   * Investimento upsert
   */
  export type InvestimentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Investimento to update in case it exists.
     */
    where: InvestimentoWhereUniqueInput
    /**
     * In case the Investimento found by the `where` argument doesn't exist, create a new Investimento with this data.
     */
    create: XOR<InvestimentoCreateInput, InvestimentoUncheckedCreateInput>
    /**
     * In case the Investimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestimentoUpdateInput, InvestimentoUncheckedUpdateInput>
  }

  /**
   * Investimento delete
   */
  export type InvestimentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
    /**
     * Filter which Investimento to delete.
     */
    where: InvestimentoWhereUniqueInput
  }

  /**
   * Investimento deleteMany
   */
  export type InvestimentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investimentos to delete
     */
    where?: InvestimentoWhereInput
  }

  /**
   * Investimento.portfolioItems
   */
  export type Investimento$portfolioItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    cursor?: PortfolioItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * Investimento.favoritos
   */
  export type Investimento$favoritosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    cursor?: FavoritoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Investimento without action
   */
  export type InvestimentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investimento
     */
    select?: InvestimentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestimentoInclude<ExtArgs> | null
  }


  /**
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    usuarioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descricao: string | null
    usuarioId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    usuarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    usuarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: string
    nome: string
    descricao: string | null
    usuarioId: string
    createdAt: Date
    updatedAt: Date
    _count: PortfolioCountAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Portfolio$itensArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    usuarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    itens?: boolean | Portfolio$itensArgs<ExtArgs>
    _count?: boolean | PortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      itens: Prisma.$PortfolioItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descricao: string | null
      usuarioId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {PortfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    itens<T extends Portfolio$itensArgs<ExtArgs> = {}>(args?: Subset<T, Portfolio$itensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Portfolio model
   */ 
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'String'>
    readonly nome: FieldRef<"Portfolio", 'String'>
    readonly descricao: FieldRef<"Portfolio", 'String'>
    readonly usuarioId: FieldRef<"Portfolio", 'String'>
    readonly createdAt: FieldRef<"Portfolio", 'DateTime'>
    readonly updatedAt: FieldRef<"Portfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio createManyAndReturn
   */
  export type PortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
  }

  /**
   * Portfolio.itens
   */
  export type Portfolio$itensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    cursor?: PortfolioItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioItem
   */

  export type AggregatePortfolioItem = {
    _count: PortfolioItemCountAggregateOutputType | null
    _avg: PortfolioItemAvgAggregateOutputType | null
    _sum: PortfolioItemSumAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  export type PortfolioItemAvgAggregateOutputType = {
    quantidade: number | null
    precoCompra: number | null
  }

  export type PortfolioItemSumAggregateOutputType = {
    quantidade: number | null
    precoCompra: number | null
  }

  export type PortfolioItemMinAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    investimentoId: string | null
    quantidade: number | null
    precoCompra: number | null
    dataCompra: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioItemMaxAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    investimentoId: string | null
    quantidade: number | null
    precoCompra: number | null
    dataCompra: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioItemCountAggregateOutputType = {
    id: number
    portfolioId: number
    investimentoId: number
    quantidade: number
    precoCompra: number
    dataCompra: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioItemAvgAggregateInputType = {
    quantidade?: true
    precoCompra?: true
  }

  export type PortfolioItemSumAggregateInputType = {
    quantidade?: true
    precoCompra?: true
  }

  export type PortfolioItemMinAggregateInputType = {
    id?: true
    portfolioId?: true
    investimentoId?: true
    quantidade?: true
    precoCompra?: true
    dataCompra?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioItemMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    investimentoId?: true
    quantidade?: true
    precoCompra?: true
    dataCompra?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioItemCountAggregateInputType = {
    id?: true
    portfolioId?: true
    investimentoId?: true
    quantidade?: true
    precoCompra?: true
    dataCompra?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItem to aggregate.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioItems
    **/
    _count?: true | PortfolioItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type GetPortfolioItemAggregateType<T extends PortfolioItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioItem[P]>
      : GetScalarType<T[P], AggregatePortfolioItem[P]>
  }




  export type PortfolioItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithAggregationInput | PortfolioItemOrderByWithAggregationInput[]
    by: PortfolioItemScalarFieldEnum[] | PortfolioItemScalarFieldEnum
    having?: PortfolioItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioItemCountAggregateInputType | true
    _avg?: PortfolioItemAvgAggregateInputType
    _sum?: PortfolioItemSumAggregateInputType
    _min?: PortfolioItemMinAggregateInputType
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type PortfolioItemGroupByOutputType = {
    id: string
    portfolioId: string
    investimentoId: string
    quantidade: number
    precoCompra: number
    dataCompra: Date
    createdAt: Date
    updatedAt: Date
    _count: PortfolioItemCountAggregateOutputType | null
    _avg: PortfolioItemAvgAggregateOutputType | null
    _sum: PortfolioItemSumAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  type GetPortfolioItemGroupByPayload<T extends PortfolioItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    investimentoId?: boolean
    quantidade?: boolean
    precoCompra?: boolean
    dataCompra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    investimentoId?: boolean
    quantidade?: boolean
    precoCompra?: boolean
    dataCompra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    investimentoId?: boolean
    quantidade?: boolean
    precoCompra?: boolean
    dataCompra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }
  export type PortfolioItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    portfolio?: boolean | PortfolioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }

  export type $PortfolioItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioItem"
    objects: {
      portfolio: Prisma.$PortfolioPayload<ExtArgs>
      investimento: Prisma.$InvestimentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      portfolioId: string
      investimentoId: string
      quantidade: number
      precoCompra: number
      dataCompra: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolioItem"]>
    composites: {}
  }

  type PortfolioItemGetPayload<S extends boolean | null | undefined | PortfolioItemDefaultArgs> = $Result.GetResult<Prisma.$PortfolioItemPayload, S>

  type PortfolioItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PortfolioItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PortfolioItemCountAggregateInputType | true
    }

  export interface PortfolioItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioItem'], meta: { name: 'PortfolioItem' } }
    /**
     * Find zero or one PortfolioItem that matches the filter.
     * @param {PortfolioItemFindUniqueArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioItemFindUniqueArgs>(args: SelectSubset<T, PortfolioItemFindUniqueArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PortfolioItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PortfolioItemFindUniqueOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PortfolioItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioItemFindFirstArgs>(args?: SelectSubset<T, PortfolioItemFindFirstArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PortfolioItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PortfolioItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany()
     * 
     * // Get first 10 PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioItemFindManyArgs>(args?: SelectSubset<T, PortfolioItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PortfolioItem.
     * @param {PortfolioItemCreateArgs} args - Arguments to create a PortfolioItem.
     * @example
     * // Create one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.create({
     *   data: {
     *     // ... data to create a PortfolioItem
     *   }
     * })
     * 
     */
    create<T extends PortfolioItemCreateArgs>(args: SelectSubset<T, PortfolioItemCreateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PortfolioItems.
     * @param {PortfolioItemCreateManyArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioItemCreateManyArgs>(args?: SelectSubset<T, PortfolioItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioItems and returns the data saved in the database.
     * @param {PortfolioItemCreateManyAndReturnArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioItems and only return the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PortfolioItem.
     * @param {PortfolioItemDeleteArgs} args - Arguments to delete one PortfolioItem.
     * @example
     * // Delete one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.delete({
     *   where: {
     *     // ... filter to delete one PortfolioItem
     *   }
     * })
     * 
     */
    delete<T extends PortfolioItemDeleteArgs>(args: SelectSubset<T, PortfolioItemDeleteArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PortfolioItem.
     * @param {PortfolioItemUpdateArgs} args - Arguments to update one PortfolioItem.
     * @example
     * // Update one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioItemUpdateArgs>(args: SelectSubset<T, PortfolioItemUpdateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PortfolioItems.
     * @param {PortfolioItemDeleteManyArgs} args - Arguments to filter PortfolioItems to delete.
     * @example
     * // Delete a few PortfolioItems
     * const { count } = await prisma.portfolioItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioItemDeleteManyArgs>(args?: SelectSubset<T, PortfolioItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioItemUpdateManyArgs>(args: SelectSubset<T, PortfolioItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PortfolioItem.
     * @param {PortfolioItemUpsertArgs} args - Arguments to update or create a PortfolioItem.
     * @example
     * // Update or create a PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.upsert({
     *   create: {
     *     // ... data to create a PortfolioItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioItem we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioItemUpsertArgs>(args: SelectSubset<T, PortfolioItemUpsertArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemCountArgs} args - Arguments to filter PortfolioItems to count.
     * @example
     * // Count the number of PortfolioItems
     * const count = await prisma.portfolioItem.count({
     *   where: {
     *     // ... the filter for the PortfolioItems we want to count
     *   }
     * })
    **/
    count<T extends PortfolioItemCountArgs>(
      args?: Subset<T, PortfolioItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioItemAggregateArgs>(args: Subset<T, PortfolioItemAggregateArgs>): Prisma.PrismaPromise<GetPortfolioItemAggregateType<T>>

    /**
     * Group by PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioItemGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioItem model
   */
  readonly fields: PortfolioItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    portfolio<T extends PortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PortfolioDefaultArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    investimento<T extends InvestimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestimentoDefaultArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioItem model
   */ 
  interface PortfolioItemFieldRefs {
    readonly id: FieldRef<"PortfolioItem", 'String'>
    readonly portfolioId: FieldRef<"PortfolioItem", 'String'>
    readonly investimentoId: FieldRef<"PortfolioItem", 'String'>
    readonly quantidade: FieldRef<"PortfolioItem", 'Int'>
    readonly precoCompra: FieldRef<"PortfolioItem", 'Float'>
    readonly dataCompra: FieldRef<"PortfolioItem", 'DateTime'>
    readonly createdAt: FieldRef<"PortfolioItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PortfolioItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioItem findUnique
   */
  export type PortfolioItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findUniqueOrThrow
   */
  export type PortfolioItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findFirst
   */
  export type PortfolioItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findFirstOrThrow
   */
  export type PortfolioItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findMany
   */
  export type PortfolioItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItems to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem create
   */
  export type PortfolioItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioItem.
     */
    data: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
  }

  /**
   * PortfolioItem createMany
   */
  export type PortfolioItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PortfolioItem createManyAndReturn
   */
  export type PortfolioItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioItem update
   */
  export type PortfolioItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioItem.
     */
    data: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
    /**
     * Choose, which PortfolioItem to update.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem updateMany
   */
  export type PortfolioItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioItems.
     */
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioItems to update
     */
    where?: PortfolioItemWhereInput
  }

  /**
   * PortfolioItem upsert
   */
  export type PortfolioItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioItem to update in case it exists.
     */
    where: PortfolioItemWhereUniqueInput
    /**
     * In case the PortfolioItem found by the `where` argument doesn't exist, create a new PortfolioItem with this data.
     */
    create: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
    /**
     * In case the PortfolioItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
  }

  /**
   * PortfolioItem delete
   */
  export type PortfolioItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter which PortfolioItem to delete.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem deleteMany
   */
  export type PortfolioItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItems to delete
     */
    where?: PortfolioItemWhereInput
  }

  /**
   * PortfolioItem without action
   */
  export type PortfolioItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
  }


  /**
   * Model Favorito
   */

  export type AggregateFavorito = {
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  export type FavoritoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    investimentoId: string | null
    dataAdicao: Date | null
    createdAt: Date | null
  }

  export type FavoritoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    investimentoId: string | null
    dataAdicao: Date | null
    createdAt: Date | null
  }

  export type FavoritoCountAggregateOutputType = {
    id: number
    usuarioId: number
    investimentoId: number
    dataAdicao: number
    createdAt: number
    _all: number
  }


  export type FavoritoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    investimentoId?: true
    dataAdicao?: true
    createdAt?: true
  }

  export type FavoritoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    investimentoId?: true
    dataAdicao?: true
    createdAt?: true
  }

  export type FavoritoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    investimentoId?: true
    dataAdicao?: true
    createdAt?: true
    _all?: true
  }

  export type FavoritoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorito to aggregate.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favoritos
    **/
    _count?: true | FavoritoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritoMaxAggregateInputType
  }

  export type GetFavoritoAggregateType<T extends FavoritoAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorito]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorito[P]>
      : GetScalarType<T[P], AggregateFavorito[P]>
  }




  export type FavoritoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoritoWhereInput
    orderBy?: FavoritoOrderByWithAggregationInput | FavoritoOrderByWithAggregationInput[]
    by: FavoritoScalarFieldEnum[] | FavoritoScalarFieldEnum
    having?: FavoritoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritoCountAggregateInputType | true
    _min?: FavoritoMinAggregateInputType
    _max?: FavoritoMaxAggregateInputType
  }

  export type FavoritoGroupByOutputType = {
    id: string
    usuarioId: string
    investimentoId: string
    dataAdicao: Date
    createdAt: Date
    _count: FavoritoCountAggregateOutputType | null
    _min: FavoritoMinAggregateOutputType | null
    _max: FavoritoMaxAggregateOutputType | null
  }

  type GetFavoritoGroupByPayload<T extends FavoritoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritoGroupByOutputType[P]>
        }
      >
    >


  export type FavoritoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    investimentoId?: boolean
    dataAdicao?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    investimentoId?: boolean
    dataAdicao?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorito"]>

  export type FavoritoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    investimentoId?: boolean
    dataAdicao?: boolean
    createdAt?: boolean
  }

  export type FavoritoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }
  export type FavoritoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    investimento?: boolean | InvestimentoDefaultArgs<ExtArgs>
  }

  export type $FavoritoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorito"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      investimento: Prisma.$InvestimentoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      investimentoId: string
      dataAdicao: Date
      createdAt: Date
    }, ExtArgs["result"]["favorito"]>
    composites: {}
  }

  type FavoritoGetPayload<S extends boolean | null | undefined | FavoritoDefaultArgs> = $Result.GetResult<Prisma.$FavoritoPayload, S>

  type FavoritoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavoritoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavoritoCountAggregateInputType | true
    }

  export interface FavoritoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorito'], meta: { name: 'Favorito' } }
    /**
     * Find zero or one Favorito that matches the filter.
     * @param {FavoritoFindUniqueArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoritoFindUniqueArgs>(args: SelectSubset<T, FavoritoFindUniqueArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Favorito that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FavoritoFindUniqueOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoritoFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Favorito that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoritoFindFirstArgs>(args?: SelectSubset<T, FavoritoFindFirstArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Favorito that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindFirstOrThrowArgs} args - Arguments to find a Favorito
     * @example
     * // Get one Favorito
     * const favorito = await prisma.favorito.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoritoFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoritoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Favoritos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favoritos
     * const favoritos = await prisma.favorito.findMany()
     * 
     * // Get first 10 Favoritos
     * const favoritos = await prisma.favorito.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoritoWithIdOnly = await prisma.favorito.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoritoFindManyArgs>(args?: SelectSubset<T, FavoritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Favorito.
     * @param {FavoritoCreateArgs} args - Arguments to create a Favorito.
     * @example
     * // Create one Favorito
     * const Favorito = await prisma.favorito.create({
     *   data: {
     *     // ... data to create a Favorito
     *   }
     * })
     * 
     */
    create<T extends FavoritoCreateArgs>(args: SelectSubset<T, FavoritoCreateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Favoritos.
     * @param {FavoritoCreateManyArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoritoCreateManyArgs>(args?: SelectSubset<T, FavoritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favoritos and returns the data saved in the database.
     * @param {FavoritoCreateManyAndReturnArgs} args - Arguments to create many Favoritos.
     * @example
     * // Create many Favoritos
     * const favorito = await prisma.favorito.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favoritos and only return the `id`
     * const favoritoWithIdOnly = await prisma.favorito.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoritoCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Favorito.
     * @param {FavoritoDeleteArgs} args - Arguments to delete one Favorito.
     * @example
     * // Delete one Favorito
     * const Favorito = await prisma.favorito.delete({
     *   where: {
     *     // ... filter to delete one Favorito
     *   }
     * })
     * 
     */
    delete<T extends FavoritoDeleteArgs>(args: SelectSubset<T, FavoritoDeleteArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Favorito.
     * @param {FavoritoUpdateArgs} args - Arguments to update one Favorito.
     * @example
     * // Update one Favorito
     * const favorito = await prisma.favorito.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoritoUpdateArgs>(args: SelectSubset<T, FavoritoUpdateArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Favoritos.
     * @param {FavoritoDeleteManyArgs} args - Arguments to filter Favoritos to delete.
     * @example
     * // Delete a few Favoritos
     * const { count } = await prisma.favorito.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoritoDeleteManyArgs>(args?: SelectSubset<T, FavoritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favoritos
     * const favorito = await prisma.favorito.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoritoUpdateManyArgs>(args: SelectSubset<T, FavoritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorito.
     * @param {FavoritoUpsertArgs} args - Arguments to update or create a Favorito.
     * @example
     * // Update or create a Favorito
     * const favorito = await prisma.favorito.upsert({
     *   create: {
     *     // ... data to create a Favorito
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorito we want to update
     *   }
     * })
     */
    upsert<T extends FavoritoUpsertArgs>(args: SelectSubset<T, FavoritoUpsertArgs<ExtArgs>>): Prisma__FavoritoClient<$Result.GetResult<Prisma.$FavoritoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Favoritos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoCountArgs} args - Arguments to filter Favoritos to count.
     * @example
     * // Count the number of Favoritos
     * const count = await prisma.favorito.count({
     *   where: {
     *     // ... the filter for the Favoritos we want to count
     *   }
     * })
    **/
    count<T extends FavoritoCountArgs>(
      args?: Subset<T, FavoritoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoritoAggregateArgs>(args: Subset<T, FavoritoAggregateArgs>): Prisma.PrismaPromise<GetFavoritoAggregateType<T>>

    /**
     * Group by Favorito.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavoritoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoritoGroupByArgs['orderBy'] }
        : { orderBy?: FavoritoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavoritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorito model
   */
  readonly fields: FavoritoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorito.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoritoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    investimento<T extends InvestimentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestimentoDefaultArgs<ExtArgs>>): Prisma__InvestimentoClient<$Result.GetResult<Prisma.$InvestimentoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorito model
   */ 
  interface FavoritoFieldRefs {
    readonly id: FieldRef<"Favorito", 'String'>
    readonly usuarioId: FieldRef<"Favorito", 'String'>
    readonly investimentoId: FieldRef<"Favorito", 'String'>
    readonly dataAdicao: FieldRef<"Favorito", 'DateTime'>
    readonly createdAt: FieldRef<"Favorito", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorito findUnique
   */
  export type FavoritoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findUniqueOrThrow
   */
  export type FavoritoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito findFirst
   */
  export type FavoritoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findFirstOrThrow
   */
  export type FavoritoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favorito to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favoritos.
     */
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito findMany
   */
  export type FavoritoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter, which Favoritos to fetch.
     */
    where?: FavoritoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favoritos to fetch.
     */
    orderBy?: FavoritoOrderByWithRelationInput | FavoritoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favoritos.
     */
    cursor?: FavoritoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favoritos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favoritos.
     */
    skip?: number
    distinct?: FavoritoScalarFieldEnum | FavoritoScalarFieldEnum[]
  }

  /**
   * Favorito create
   */
  export type FavoritoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorito.
     */
    data: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
  }

  /**
   * Favorito createMany
   */
  export type FavoritoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorito createManyAndReturn
   */
  export type FavoritoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Favoritos.
     */
    data: FavoritoCreateManyInput | FavoritoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorito update
   */
  export type FavoritoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorito.
     */
    data: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
    /**
     * Choose, which Favorito to update.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito updateMany
   */
  export type FavoritoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favoritos.
     */
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyInput>
    /**
     * Filter which Favoritos to update
     */
    where?: FavoritoWhereInput
  }

  /**
   * Favorito upsert
   */
  export type FavoritoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorito to update in case it exists.
     */
    where: FavoritoWhereUniqueInput
    /**
     * In case the Favorito found by the `where` argument doesn't exist, create a new Favorito with this data.
     */
    create: XOR<FavoritoCreateInput, FavoritoUncheckedCreateInput>
    /**
     * In case the Favorito was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoritoUpdateInput, FavoritoUncheckedUpdateInput>
  }

  /**
   * Favorito delete
   */
  export type FavoritoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
    /**
     * Filter which Favorito to delete.
     */
    where: FavoritoWhereUniqueInput
  }

  /**
   * Favorito deleteMany
   */
  export type FavoritoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favoritos to delete
     */
    where?: FavoritoWhereInput
  }

  /**
   * Favorito without action
   */
  export type FavoritoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorito
     */
    select?: FavoritoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoritoInclude<ExtArgs> | null
  }


  /**
   * Model Notificacao
   */

  export type AggregateNotificacao = {
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  export type NotificacaoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    message: string | null
    lida: boolean | null
    dataEnvio: Date | null
    createdAt: Date | null
  }

  export type NotificacaoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    message: string | null
    lida: boolean | null
    dataEnvio: Date | null
    createdAt: Date | null
  }

  export type NotificacaoCountAggregateOutputType = {
    id: number
    usuarioId: number
    message: number
    lida: number
    dataEnvio: number
    createdAt: number
    _all: number
  }


  export type NotificacaoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    message?: true
    lida?: true
    dataEnvio?: true
    createdAt?: true
  }

  export type NotificacaoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    message?: true
    lida?: true
    dataEnvio?: true
    createdAt?: true
  }

  export type NotificacaoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    message?: true
    lida?: true
    dataEnvio?: true
    createdAt?: true
    _all?: true
  }

  export type NotificacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacao to aggregate.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notificacaos
    **/
    _count?: true | NotificacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacaoMaxAggregateInputType
  }

  export type GetNotificacaoAggregateType<T extends NotificacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificacao[P]>
      : GetScalarType<T[P], AggregateNotificacao[P]>
  }




  export type NotificacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificacaoWhereInput
    orderBy?: NotificacaoOrderByWithAggregationInput | NotificacaoOrderByWithAggregationInput[]
    by: NotificacaoScalarFieldEnum[] | NotificacaoScalarFieldEnum
    having?: NotificacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacaoCountAggregateInputType | true
    _min?: NotificacaoMinAggregateInputType
    _max?: NotificacaoMaxAggregateInputType
  }

  export type NotificacaoGroupByOutputType = {
    id: string
    usuarioId: string
    message: string
    lida: boolean
    dataEnvio: Date
    createdAt: Date
    _count: NotificacaoCountAggregateOutputType | null
    _min: NotificacaoMinAggregateOutputType | null
    _max: NotificacaoMaxAggregateOutputType | null
  }

  type GetNotificacaoGroupByPayload<T extends NotificacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacaoGroupByOutputType[P]>
        }
      >
    >


  export type NotificacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    message?: boolean
    lida?: boolean
    dataEnvio?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    message?: boolean
    lida?: boolean
    dataEnvio?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificacao"]>

  export type NotificacaoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    message?: boolean
    lida?: boolean
    dataEnvio?: boolean
    createdAt?: boolean
  }

  export type NotificacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NotificacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NotificacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notificacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      message: string
      lida: boolean
      dataEnvio: Date
      createdAt: Date
    }, ExtArgs["result"]["notificacao"]>
    composites: {}
  }

  type NotificacaoGetPayload<S extends boolean | null | undefined | NotificacaoDefaultArgs> = $Result.GetResult<Prisma.$NotificacaoPayload, S>

  type NotificacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificacaoCountAggregateInputType | true
    }

  export interface NotificacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notificacao'], meta: { name: 'Notificacao' } }
    /**
     * Find zero or one Notificacao that matches the filter.
     * @param {NotificacaoFindUniqueArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificacaoFindUniqueArgs>(args: SelectSubset<T, NotificacaoFindUniqueArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notificacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificacaoFindUniqueOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notificacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificacaoFindFirstArgs>(args?: SelectSubset<T, NotificacaoFindFirstArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notificacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindFirstOrThrowArgs} args - Arguments to find a Notificacao
     * @example
     * // Get one Notificacao
     * const notificacao = await prisma.notificacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notificacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificacaos
     * const notificacaos = await prisma.notificacao.findMany()
     * 
     * // Get first 10 Notificacaos
     * const notificacaos = await prisma.notificacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificacaoFindManyArgs>(args?: SelectSubset<T, NotificacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notificacao.
     * @param {NotificacaoCreateArgs} args - Arguments to create a Notificacao.
     * @example
     * // Create one Notificacao
     * const Notificacao = await prisma.notificacao.create({
     *   data: {
     *     // ... data to create a Notificacao
     *   }
     * })
     * 
     */
    create<T extends NotificacaoCreateArgs>(args: SelectSubset<T, NotificacaoCreateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notificacaos.
     * @param {NotificacaoCreateManyArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificacaoCreateManyArgs>(args?: SelectSubset<T, NotificacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificacaos and returns the data saved in the database.
     * @param {NotificacaoCreateManyAndReturnArgs} args - Arguments to create many Notificacaos.
     * @example
     * // Create many Notificacaos
     * const notificacao = await prisma.notificacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificacaos and only return the `id`
     * const notificacaoWithIdOnly = await prisma.notificacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notificacao.
     * @param {NotificacaoDeleteArgs} args - Arguments to delete one Notificacao.
     * @example
     * // Delete one Notificacao
     * const Notificacao = await prisma.notificacao.delete({
     *   where: {
     *     // ... filter to delete one Notificacao
     *   }
     * })
     * 
     */
    delete<T extends NotificacaoDeleteArgs>(args: SelectSubset<T, NotificacaoDeleteArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notificacao.
     * @param {NotificacaoUpdateArgs} args - Arguments to update one Notificacao.
     * @example
     * // Update one Notificacao
     * const notificacao = await prisma.notificacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificacaoUpdateArgs>(args: SelectSubset<T, NotificacaoUpdateArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notificacaos.
     * @param {NotificacaoDeleteManyArgs} args - Arguments to filter Notificacaos to delete.
     * @example
     * // Delete a few Notificacaos
     * const { count } = await prisma.notificacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificacaoDeleteManyArgs>(args?: SelectSubset<T, NotificacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificacaos
     * const notificacao = await prisma.notificacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificacaoUpdateManyArgs>(args: SelectSubset<T, NotificacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notificacao.
     * @param {NotificacaoUpsertArgs} args - Arguments to update or create a Notificacao.
     * @example
     * // Update or create a Notificacao
     * const notificacao = await prisma.notificacao.upsert({
     *   create: {
     *     // ... data to create a Notificacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificacao we want to update
     *   }
     * })
     */
    upsert<T extends NotificacaoUpsertArgs>(args: SelectSubset<T, NotificacaoUpsertArgs<ExtArgs>>): Prisma__NotificacaoClient<$Result.GetResult<Prisma.$NotificacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notificacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoCountArgs} args - Arguments to filter Notificacaos to count.
     * @example
     * // Count the number of Notificacaos
     * const count = await prisma.notificacao.count({
     *   where: {
     *     // ... the filter for the Notificacaos we want to count
     *   }
     * })
    **/
    count<T extends NotificacaoCountArgs>(
      args?: Subset<T, NotificacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificacaoAggregateArgs>(args: Subset<T, NotificacaoAggregateArgs>): Prisma.PrismaPromise<GetNotificacaoAggregateType<T>>

    /**
     * Group by Notificacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificacaoGroupByArgs['orderBy'] }
        : { orderBy?: NotificacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notificacao model
   */
  readonly fields: NotificacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notificacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notificacao model
   */ 
  interface NotificacaoFieldRefs {
    readonly id: FieldRef<"Notificacao", 'String'>
    readonly usuarioId: FieldRef<"Notificacao", 'String'>
    readonly message: FieldRef<"Notificacao", 'String'>
    readonly lida: FieldRef<"Notificacao", 'Boolean'>
    readonly dataEnvio: FieldRef<"Notificacao", 'DateTime'>
    readonly createdAt: FieldRef<"Notificacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notificacao findUnique
   */
  export type NotificacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findUniqueOrThrow
   */
  export type NotificacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao findFirst
   */
  export type NotificacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findFirstOrThrow
   */
  export type NotificacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacao to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notificacaos.
     */
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao findMany
   */
  export type NotificacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter, which Notificacaos to fetch.
     */
    where?: NotificacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notificacaos to fetch.
     */
    orderBy?: NotificacaoOrderByWithRelationInput | NotificacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notificacaos.
     */
    cursor?: NotificacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notificacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notificacaos.
     */
    skip?: number
    distinct?: NotificacaoScalarFieldEnum | NotificacaoScalarFieldEnum[]
  }

  /**
   * Notificacao create
   */
  export type NotificacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Notificacao.
     */
    data: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
  }

  /**
   * Notificacao createMany
   */
  export type NotificacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notificacao createManyAndReturn
   */
  export type NotificacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notificacaos.
     */
    data: NotificacaoCreateManyInput | NotificacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notificacao update
   */
  export type NotificacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Notificacao.
     */
    data: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
    /**
     * Choose, which Notificacao to update.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao updateMany
   */
  export type NotificacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notificacaos.
     */
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyInput>
    /**
     * Filter which Notificacaos to update
     */
    where?: NotificacaoWhereInput
  }

  /**
   * Notificacao upsert
   */
  export type NotificacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Notificacao to update in case it exists.
     */
    where: NotificacaoWhereUniqueInput
    /**
     * In case the Notificacao found by the `where` argument doesn't exist, create a new Notificacao with this data.
     */
    create: XOR<NotificacaoCreateInput, NotificacaoUncheckedCreateInput>
    /**
     * In case the Notificacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificacaoUpdateInput, NotificacaoUncheckedUpdateInput>
  }

  /**
   * Notificacao delete
   */
  export type NotificacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
    /**
     * Filter which Notificacao to delete.
     */
    where: NotificacaoWhereUniqueInput
  }

  /**
   * Notificacao deleteMany
   */
  export type NotificacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notificacaos to delete
     */
    where?: NotificacaoWhereInput
  }

  /**
   * Notificacao without action
   */
  export type NotificacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notificacao
     */
    select?: NotificacaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificacaoInclude<ExtArgs> | null
  }


  /**
   * Model SystemLog
   */

  export type AggregateSystemLog = {
    _count: SystemLogCountAggregateOutputType | null
    _avg: SystemLogAvgAggregateOutputType | null
    _sum: SystemLogSumAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  export type SystemLogAvgAggregateOutputType = {
    executionTime: number | null
  }

  export type SystemLogSumAggregateOutputType = {
    executionTime: number | null
  }

  export type SystemLogMinAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    source: string | null
    operation: string | null
    executionTime: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type SystemLogMaxAggregateOutputType = {
    id: string | null
    type: string | null
    message: string | null
    source: string | null
    operation: string | null
    executionTime: number | null
    userId: string | null
    createdAt: Date | null
  }

  export type SystemLogCountAggregateOutputType = {
    id: number
    type: number
    message: number
    source: number
    operation: number
    executionTime: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SystemLogAvgAggregateInputType = {
    executionTime?: true
  }

  export type SystemLogSumAggregateInputType = {
    executionTime?: true
  }

  export type SystemLogMinAggregateInputType = {
    id?: true
    type?: true
    message?: true
    source?: true
    operation?: true
    executionTime?: true
    userId?: true
    createdAt?: true
  }

  export type SystemLogMaxAggregateInputType = {
    id?: true
    type?: true
    message?: true
    source?: true
    operation?: true
    executionTime?: true
    userId?: true
    createdAt?: true
  }

  export type SystemLogCountAggregateInputType = {
    id?: true
    type?: true
    message?: true
    source?: true
    operation?: true
    executionTime?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SystemLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLog to aggregate.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemLogs
    **/
    _count?: true | SystemLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemLogMaxAggregateInputType
  }

  export type GetSystemLogAggregateType<T extends SystemLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemLog[P]>
      : GetScalarType<T[P], AggregateSystemLog[P]>
  }




  export type SystemLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithAggregationInput | SystemLogOrderByWithAggregationInput[]
    by: SystemLogScalarFieldEnum[] | SystemLogScalarFieldEnum
    having?: SystemLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemLogCountAggregateInputType | true
    _avg?: SystemLogAvgAggregateInputType
    _sum?: SystemLogSumAggregateInputType
    _min?: SystemLogMinAggregateInputType
    _max?: SystemLogMaxAggregateInputType
  }

  export type SystemLogGroupByOutputType = {
    id: string
    type: string
    message: string
    source: string
    operation: string | null
    executionTime: number | null
    userId: string | null
    createdAt: Date
    _count: SystemLogCountAggregateOutputType | null
    _avg: SystemLogAvgAggregateOutputType | null
    _sum: SystemLogSumAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  type GetSystemLogGroupByPayload<T extends SystemLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
            : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
        }
      >
    >


  export type SystemLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    source?: boolean
    operation?: boolean
    executionTime?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    message?: boolean
    source?: boolean
    operation?: boolean
    executionTime?: boolean
    userId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectScalar = {
    id?: boolean
    type?: boolean
    message?: boolean
    source?: boolean
    operation?: boolean
    executionTime?: boolean
    userId?: boolean
    createdAt?: boolean
  }


  export type $SystemLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      message: string
      source: string
      operation: string | null
      executionTime: number | null
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["systemLog"]>
    composites: {}
  }

  type SystemLogGetPayload<S extends boolean | null | undefined | SystemLogDefaultArgs> = $Result.GetResult<Prisma.$SystemLogPayload, S>

  type SystemLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemLogCountAggregateInputType | true
    }

  export interface SystemLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemLog'], meta: { name: 'SystemLog' } }
    /**
     * Find zero or one SystemLog that matches the filter.
     * @param {SystemLogFindUniqueArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemLogFindUniqueArgs>(args: SelectSubset<T, SystemLogFindUniqueArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemLogFindUniqueOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemLogFindFirstArgs>(args?: SelectSubset<T, SystemLogFindFirstArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemLogs
     * const systemLogs = await prisma.systemLog.findMany()
     * 
     * // Get first 10 SystemLogs
     * const systemLogs = await prisma.systemLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemLogFindManyArgs>(args?: SelectSubset<T, SystemLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemLog.
     * @param {SystemLogCreateArgs} args - Arguments to create a SystemLog.
     * @example
     * // Create one SystemLog
     * const SystemLog = await prisma.systemLog.create({
     *   data: {
     *     // ... data to create a SystemLog
     *   }
     * })
     * 
     */
    create<T extends SystemLogCreateArgs>(args: SelectSubset<T, SystemLogCreateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemLogs.
     * @param {SystemLogCreateManyArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemLogCreateManyArgs>(args?: SelectSubset<T, SystemLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemLogs and returns the data saved in the database.
     * @param {SystemLogCreateManyAndReturnArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemLogs and only return the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SystemLog.
     * @param {SystemLogDeleteArgs} args - Arguments to delete one SystemLog.
     * @example
     * // Delete one SystemLog
     * const SystemLog = await prisma.systemLog.delete({
     *   where: {
     *     // ... filter to delete one SystemLog
     *   }
     * })
     * 
     */
    delete<T extends SystemLogDeleteArgs>(args: SelectSubset<T, SystemLogDeleteArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemLog.
     * @param {SystemLogUpdateArgs} args - Arguments to update one SystemLog.
     * @example
     * // Update one SystemLog
     * const systemLog = await prisma.systemLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemLogUpdateArgs>(args: SelectSubset<T, SystemLogUpdateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemLogs.
     * @param {SystemLogDeleteManyArgs} args - Arguments to filter SystemLogs to delete.
     * @example
     * // Delete a few SystemLogs
     * const { count } = await prisma.systemLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemLogDeleteManyArgs>(args?: SelectSubset<T, SystemLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemLogUpdateManyArgs>(args: SelectSubset<T, SystemLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemLog.
     * @param {SystemLogUpsertArgs} args - Arguments to update or create a SystemLog.
     * @example
     * // Update or create a SystemLog
     * const systemLog = await prisma.systemLog.upsert({
     *   create: {
     *     // ... data to create a SystemLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemLog we want to update
     *   }
     * })
     */
    upsert<T extends SystemLogUpsertArgs>(args: SelectSubset<T, SystemLogUpsertArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogCountArgs} args - Arguments to filter SystemLogs to count.
     * @example
     * // Count the number of SystemLogs
     * const count = await prisma.systemLog.count({
     *   where: {
     *     // ... the filter for the SystemLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemLogCountArgs>(
      args?: Subset<T, SystemLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemLogAggregateArgs>(args: Subset<T, SystemLogAggregateArgs>): Prisma.PrismaPromise<GetSystemLogAggregateType<T>>

    /**
     * Group by SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemLogGroupByArgs['orderBy'] }
        : { orderBy?: SystemLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemLog model
   */
  readonly fields: SystemLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemLog model
   */ 
  interface SystemLogFieldRefs {
    readonly id: FieldRef<"SystemLog", 'String'>
    readonly type: FieldRef<"SystemLog", 'String'>
    readonly message: FieldRef<"SystemLog", 'String'>
    readonly source: FieldRef<"SystemLog", 'String'>
    readonly operation: FieldRef<"SystemLog", 'String'>
    readonly executionTime: FieldRef<"SystemLog", 'Float'>
    readonly userId: FieldRef<"SystemLog", 'String'>
    readonly createdAt: FieldRef<"SystemLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemLog findUnique
   */
  export type SystemLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findUniqueOrThrow
   */
  export type SystemLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findFirst
   */
  export type SystemLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findFirstOrThrow
   */
  export type SystemLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findMany
   */
  export type SystemLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog create
   */
  export type SystemLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemLog.
     */
    data: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
  }

  /**
   * SystemLog createMany
   */
  export type SystemLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLog createManyAndReturn
   */
  export type SystemLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemLog update
   */
  export type SystemLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemLog.
     */
    data: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
    /**
     * Choose, which SystemLog to update.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog updateMany
   */
  export type SystemLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
  }

  /**
   * SystemLog upsert
   */
  export type SystemLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemLog to update in case it exists.
     */
    where: SystemLogWhereUniqueInput
    /**
     * In case the SystemLog found by the `where` argument doesn't exist, create a new SystemLog with this data.
     */
    create: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
    /**
     * In case the SystemLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
  }

  /**
   * SystemLog delete
   */
  export type SystemLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Filter which SystemLog to delete.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog deleteMany
   */
  export type SystemLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to delete
     */
    where?: SystemLogWhereInput
  }

  /**
   * SystemLog without action
   */
  export type SystemLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
  }


  /**
   * Model MarketData
   */

  export type AggregateMarketData = {
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  export type MarketDataAvgAggregateOutputType = {
    preco: number | null
    variacao: number | null
    volume: number | null
  }

  export type MarketDataSumAggregateOutputType = {
    preco: number | null
    variacao: number | null
    volume: bigint | null
  }

  export type MarketDataMinAggregateOutputType = {
    id: string | null
    codigo: string | null
    preco: number | null
    variacao: number | null
    volume: bigint | null
    dataHora: Date | null
    createdAt: Date | null
  }

  export type MarketDataMaxAggregateOutputType = {
    id: string | null
    codigo: string | null
    preco: number | null
    variacao: number | null
    volume: bigint | null
    dataHora: Date | null
    createdAt: Date | null
  }

  export type MarketDataCountAggregateOutputType = {
    id: number
    codigo: number
    preco: number
    variacao: number
    volume: number
    dataHora: number
    createdAt: number
    _all: number
  }


  export type MarketDataAvgAggregateInputType = {
    preco?: true
    variacao?: true
    volume?: true
  }

  export type MarketDataSumAggregateInputType = {
    preco?: true
    variacao?: true
    volume?: true
  }

  export type MarketDataMinAggregateInputType = {
    id?: true
    codigo?: true
    preco?: true
    variacao?: true
    volume?: true
    dataHora?: true
    createdAt?: true
  }

  export type MarketDataMaxAggregateInputType = {
    id?: true
    codigo?: true
    preco?: true
    variacao?: true
    volume?: true
    dataHora?: true
    createdAt?: true
  }

  export type MarketDataCountAggregateInputType = {
    id?: true
    codigo?: true
    preco?: true
    variacao?: true
    volume?: true
    dataHora?: true
    createdAt?: true
    _all?: true
  }

  export type MarketDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to aggregate.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketData
    **/
    _count?: true | MarketDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketDataMaxAggregateInputType
  }

  export type GetMarketDataAggregateType<T extends MarketDataAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketData[P]>
      : GetScalarType<T[P], AggregateMarketData[P]>
  }




  export type MarketDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketDataWhereInput
    orderBy?: MarketDataOrderByWithAggregationInput | MarketDataOrderByWithAggregationInput[]
    by: MarketDataScalarFieldEnum[] | MarketDataScalarFieldEnum
    having?: MarketDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketDataCountAggregateInputType | true
    _avg?: MarketDataAvgAggregateInputType
    _sum?: MarketDataSumAggregateInputType
    _min?: MarketDataMinAggregateInputType
    _max?: MarketDataMaxAggregateInputType
  }

  export type MarketDataGroupByOutputType = {
    id: string
    codigo: string
    preco: number
    variacao: number
    volume: bigint
    dataHora: Date
    createdAt: Date
    _count: MarketDataCountAggregateOutputType | null
    _avg: MarketDataAvgAggregateOutputType | null
    _sum: MarketDataSumAggregateOutputType | null
    _min: MarketDataMinAggregateOutputType | null
    _max: MarketDataMaxAggregateOutputType | null
  }

  type GetMarketDataGroupByPayload<T extends MarketDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
            : GetScalarType<T[P], MarketDataGroupByOutputType[P]>
        }
      >
    >


  export type MarketDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    preco?: boolean
    variacao?: boolean
    volume?: boolean
    dataHora?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    preco?: boolean
    variacao?: boolean
    volume?: boolean
    dataHora?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["marketData"]>

  export type MarketDataSelectScalar = {
    id?: boolean
    codigo?: boolean
    preco?: boolean
    variacao?: boolean
    volume?: boolean
    dataHora?: boolean
    createdAt?: boolean
  }


  export type $MarketDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      codigo: string
      preco: number
      variacao: number
      volume: bigint
      dataHora: Date
      createdAt: Date
    }, ExtArgs["result"]["marketData"]>
    composites: {}
  }

  type MarketDataGetPayload<S extends boolean | null | undefined | MarketDataDefaultArgs> = $Result.GetResult<Prisma.$MarketDataPayload, S>

  type MarketDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MarketDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MarketDataCountAggregateInputType | true
    }

  export interface MarketDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketData'], meta: { name: 'MarketData' } }
    /**
     * Find zero or one MarketData that matches the filter.
     * @param {MarketDataFindUniqueArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketDataFindUniqueArgs>(args: SelectSubset<T, MarketDataFindUniqueArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MarketData that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MarketDataFindUniqueOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketDataFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketDataFindFirstArgs>(args?: SelectSubset<T, MarketDataFindFirstArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MarketData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindFirstOrThrowArgs} args - Arguments to find a MarketData
     * @example
     * // Get one MarketData
     * const marketData = await prisma.marketData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketDataFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MarketData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketData
     * const marketData = await prisma.marketData.findMany()
     * 
     * // Get first 10 MarketData
     * const marketData = await prisma.marketData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketDataWithIdOnly = await prisma.marketData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketDataFindManyArgs>(args?: SelectSubset<T, MarketDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MarketData.
     * @param {MarketDataCreateArgs} args - Arguments to create a MarketData.
     * @example
     * // Create one MarketData
     * const MarketData = await prisma.marketData.create({
     *   data: {
     *     // ... data to create a MarketData
     *   }
     * })
     * 
     */
    create<T extends MarketDataCreateArgs>(args: SelectSubset<T, MarketDataCreateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MarketData.
     * @param {MarketDataCreateManyArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketDataCreateManyArgs>(args?: SelectSubset<T, MarketDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketData and returns the data saved in the database.
     * @param {MarketDataCreateManyAndReturnArgs} args - Arguments to create many MarketData.
     * @example
     * // Create many MarketData
     * const marketData = await prisma.marketData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketData and only return the `id`
     * const marketDataWithIdOnly = await prisma.marketData.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketDataCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MarketData.
     * @param {MarketDataDeleteArgs} args - Arguments to delete one MarketData.
     * @example
     * // Delete one MarketData
     * const MarketData = await prisma.marketData.delete({
     *   where: {
     *     // ... filter to delete one MarketData
     *   }
     * })
     * 
     */
    delete<T extends MarketDataDeleteArgs>(args: SelectSubset<T, MarketDataDeleteArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MarketData.
     * @param {MarketDataUpdateArgs} args - Arguments to update one MarketData.
     * @example
     * // Update one MarketData
     * const marketData = await prisma.marketData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketDataUpdateArgs>(args: SelectSubset<T, MarketDataUpdateArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MarketData.
     * @param {MarketDataDeleteManyArgs} args - Arguments to filter MarketData to delete.
     * @example
     * // Delete a few MarketData
     * const { count } = await prisma.marketData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketDataDeleteManyArgs>(args?: SelectSubset<T, MarketDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketData
     * const marketData = await prisma.marketData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketDataUpdateManyArgs>(args: SelectSubset<T, MarketDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarketData.
     * @param {MarketDataUpsertArgs} args - Arguments to update or create a MarketData.
     * @example
     * // Update or create a MarketData
     * const marketData = await prisma.marketData.upsert({
     *   create: {
     *     // ... data to create a MarketData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketData we want to update
     *   }
     * })
     */
    upsert<T extends MarketDataUpsertArgs>(args: SelectSubset<T, MarketDataUpsertArgs<ExtArgs>>): Prisma__MarketDataClient<$Result.GetResult<Prisma.$MarketDataPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataCountArgs} args - Arguments to filter MarketData to count.
     * @example
     * // Count the number of MarketData
     * const count = await prisma.marketData.count({
     *   where: {
     *     // ... the filter for the MarketData we want to count
     *   }
     * })
    **/
    count<T extends MarketDataCountArgs>(
      args?: Subset<T, MarketDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketDataAggregateArgs>(args: Subset<T, MarketDataAggregateArgs>): Prisma.PrismaPromise<GetMarketDataAggregateType<T>>

    /**
     * Group by MarketData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketDataGroupByArgs['orderBy'] }
        : { orderBy?: MarketDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketData model
   */
  readonly fields: MarketDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketData model
   */ 
  interface MarketDataFieldRefs {
    readonly id: FieldRef<"MarketData", 'String'>
    readonly codigo: FieldRef<"MarketData", 'String'>
    readonly preco: FieldRef<"MarketData", 'Float'>
    readonly variacao: FieldRef<"MarketData", 'Float'>
    readonly volume: FieldRef<"MarketData", 'BigInt'>
    readonly dataHora: FieldRef<"MarketData", 'DateTime'>
    readonly createdAt: FieldRef<"MarketData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MarketData findUnique
   */
  export type MarketDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findUniqueOrThrow
   */
  export type MarketDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData findFirst
   */
  export type MarketDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findFirstOrThrow
   */
  export type MarketDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketData.
     */
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData findMany
   */
  export type MarketDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Filter, which MarketData to fetch.
     */
    where?: MarketDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketData to fetch.
     */
    orderBy?: MarketDataOrderByWithRelationInput | MarketDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketData.
     */
    cursor?: MarketDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketData.
     */
    skip?: number
    distinct?: MarketDataScalarFieldEnum | MarketDataScalarFieldEnum[]
  }

  /**
   * MarketData create
   */
  export type MarketDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * The data needed to create a MarketData.
     */
    data: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
  }

  /**
   * MarketData createMany
   */
  export type MarketDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData createManyAndReturn
   */
  export type MarketDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MarketData.
     */
    data: MarketDataCreateManyInput | MarketDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketData update
   */
  export type MarketDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * The data needed to update a MarketData.
     */
    data: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
    /**
     * Choose, which MarketData to update.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData updateMany
   */
  export type MarketDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketData.
     */
    data: XOR<MarketDataUpdateManyMutationInput, MarketDataUncheckedUpdateManyInput>
    /**
     * Filter which MarketData to update
     */
    where?: MarketDataWhereInput
  }

  /**
   * MarketData upsert
   */
  export type MarketDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * The filter to search for the MarketData to update in case it exists.
     */
    where: MarketDataWhereUniqueInput
    /**
     * In case the MarketData found by the `where` argument doesn't exist, create a new MarketData with this data.
     */
    create: XOR<MarketDataCreateInput, MarketDataUncheckedCreateInput>
    /**
     * In case the MarketData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketDataUpdateInput, MarketDataUncheckedUpdateInput>
  }

  /**
   * MarketData delete
   */
  export type MarketDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
    /**
     * Filter which MarketData to delete.
     */
    where: MarketDataWhereUniqueInput
  }

  /**
   * MarketData deleteMany
   */
  export type MarketDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketData to delete
     */
    where?: MarketDataWhereInput
  }

  /**
   * MarketData without action
   */
  export type MarketDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketData
     */
    select?: MarketDataSelect<ExtArgs> | null
  }


  /**
   * Model Transacao
   */

  export type AggregateTransacao = {
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  export type TransacaoAvgAggregateOutputType = {
    quantidade: number | null
    preco: number | null
    taxas: number | null
  }

  export type TransacaoSumAggregateOutputType = {
    quantidade: number | null
    preco: number | null
    taxas: number | null
  }

  export type TransacaoMinAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    investimentoId: string | null
    tipo: string | null
    quantidade: number | null
    preco: number | null
    taxas: number | null
    dataTransacao: Date | null
    observacoes: string | null
    createdAt: Date | null
  }

  export type TransacaoMaxAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    investimentoId: string | null
    tipo: string | null
    quantidade: number | null
    preco: number | null
    taxas: number | null
    dataTransacao: Date | null
    observacoes: string | null
    createdAt: Date | null
  }

  export type TransacaoCountAggregateOutputType = {
    id: number
    portfolioId: number
    investimentoId: number
    tipo: number
    quantidade: number
    preco: number
    taxas: number
    dataTransacao: number
    observacoes: number
    createdAt: number
    _all: number
  }


  export type TransacaoAvgAggregateInputType = {
    quantidade?: true
    preco?: true
    taxas?: true
  }

  export type TransacaoSumAggregateInputType = {
    quantidade?: true
    preco?: true
    taxas?: true
  }

  export type TransacaoMinAggregateInputType = {
    id?: true
    portfolioId?: true
    investimentoId?: true
    tipo?: true
    quantidade?: true
    preco?: true
    taxas?: true
    dataTransacao?: true
    observacoes?: true
    createdAt?: true
  }

  export type TransacaoMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    investimentoId?: true
    tipo?: true
    quantidade?: true
    preco?: true
    taxas?: true
    dataTransacao?: true
    observacoes?: true
    createdAt?: true
  }

  export type TransacaoCountAggregateInputType = {
    id?: true
    portfolioId?: true
    investimentoId?: true
    tipo?: true
    quantidade?: true
    preco?: true
    taxas?: true
    dataTransacao?: true
    observacoes?: true
    createdAt?: true
    _all?: true
  }

  export type TransacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacao to aggregate.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transacaos
    **/
    _count?: true | TransacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransacaoMaxAggregateInputType
  }

  export type GetTransacaoAggregateType<T extends TransacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateTransacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransacao[P]>
      : GetScalarType<T[P], AggregateTransacao[P]>
  }




  export type TransacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransacaoWhereInput
    orderBy?: TransacaoOrderByWithAggregationInput | TransacaoOrderByWithAggregationInput[]
    by: TransacaoScalarFieldEnum[] | TransacaoScalarFieldEnum
    having?: TransacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransacaoCountAggregateInputType | true
    _avg?: TransacaoAvgAggregateInputType
    _sum?: TransacaoSumAggregateInputType
    _min?: TransacaoMinAggregateInputType
    _max?: TransacaoMaxAggregateInputType
  }

  export type TransacaoGroupByOutputType = {
    id: string
    portfolioId: string
    investimentoId: string
    tipo: string
    quantidade: number
    preco: number
    taxas: number | null
    dataTransacao: Date
    observacoes: string | null
    createdAt: Date
    _count: TransacaoCountAggregateOutputType | null
    _avg: TransacaoAvgAggregateOutputType | null
    _sum: TransacaoSumAggregateOutputType | null
    _min: TransacaoMinAggregateOutputType | null
    _max: TransacaoMaxAggregateOutputType | null
  }

  type GetTransacaoGroupByPayload<T extends TransacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
            : GetScalarType<T[P], TransacaoGroupByOutputType[P]>
        }
      >
    >


  export type TransacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    investimentoId?: boolean
    tipo?: boolean
    quantidade?: boolean
    preco?: boolean
    taxas?: boolean
    dataTransacao?: boolean
    observacoes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    investimentoId?: boolean
    tipo?: boolean
    quantidade?: boolean
    preco?: boolean
    taxas?: boolean
    dataTransacao?: boolean
    observacoes?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transacao"]>

  export type TransacaoSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    investimentoId?: boolean
    tipo?: boolean
    quantidade?: boolean
    preco?: boolean
    taxas?: boolean
    dataTransacao?: boolean
    observacoes?: boolean
    createdAt?: boolean
  }


  export type $TransacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transacao"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      portfolioId: string
      investimentoId: string
      tipo: string
      quantidade: number
      preco: number
      taxas: number | null
      dataTransacao: Date
      observacoes: string | null
      createdAt: Date
    }, ExtArgs["result"]["transacao"]>
    composites: {}
  }

  type TransacaoGetPayload<S extends boolean | null | undefined | TransacaoDefaultArgs> = $Result.GetResult<Prisma.$TransacaoPayload, S>

  type TransacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransacaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransacaoCountAggregateInputType | true
    }

  export interface TransacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transacao'], meta: { name: 'Transacao' } }
    /**
     * Find zero or one Transacao that matches the filter.
     * @param {TransacaoFindUniqueArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransacaoFindUniqueArgs>(args: SelectSubset<T, TransacaoFindUniqueArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transacao that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransacaoFindUniqueOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, TransacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransacaoFindFirstArgs>(args?: SelectSubset<T, TransacaoFindFirstArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindFirstOrThrowArgs} args - Arguments to find a Transacao
     * @example
     * // Get one Transacao
     * const transacao = await prisma.transacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, TransacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transacaos
     * const transacaos = await prisma.transacao.findMany()
     * 
     * // Get first 10 Transacaos
     * const transacaos = await prisma.transacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transacaoWithIdOnly = await prisma.transacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransacaoFindManyArgs>(args?: SelectSubset<T, TransacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transacao.
     * @param {TransacaoCreateArgs} args - Arguments to create a Transacao.
     * @example
     * // Create one Transacao
     * const Transacao = await prisma.transacao.create({
     *   data: {
     *     // ... data to create a Transacao
     *   }
     * })
     * 
     */
    create<T extends TransacaoCreateArgs>(args: SelectSubset<T, TransacaoCreateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transacaos.
     * @param {TransacaoCreateManyArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransacaoCreateManyArgs>(args?: SelectSubset<T, TransacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transacaos and returns the data saved in the database.
     * @param {TransacaoCreateManyAndReturnArgs} args - Arguments to create many Transacaos.
     * @example
     * // Create many Transacaos
     * const transacao = await prisma.transacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transacaos and only return the `id`
     * const transacaoWithIdOnly = await prisma.transacao.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, TransacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transacao.
     * @param {TransacaoDeleteArgs} args - Arguments to delete one Transacao.
     * @example
     * // Delete one Transacao
     * const Transacao = await prisma.transacao.delete({
     *   where: {
     *     // ... filter to delete one Transacao
     *   }
     * })
     * 
     */
    delete<T extends TransacaoDeleteArgs>(args: SelectSubset<T, TransacaoDeleteArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transacao.
     * @param {TransacaoUpdateArgs} args - Arguments to update one Transacao.
     * @example
     * // Update one Transacao
     * const transacao = await prisma.transacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransacaoUpdateArgs>(args: SelectSubset<T, TransacaoUpdateArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transacaos.
     * @param {TransacaoDeleteManyArgs} args - Arguments to filter Transacaos to delete.
     * @example
     * // Delete a few Transacaos
     * const { count } = await prisma.transacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransacaoDeleteManyArgs>(args?: SelectSubset<T, TransacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transacaos
     * const transacao = await prisma.transacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransacaoUpdateManyArgs>(args: SelectSubset<T, TransacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transacao.
     * @param {TransacaoUpsertArgs} args - Arguments to update or create a Transacao.
     * @example
     * // Update or create a Transacao
     * const transacao = await prisma.transacao.upsert({
     *   create: {
     *     // ... data to create a Transacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transacao we want to update
     *   }
     * })
     */
    upsert<T extends TransacaoUpsertArgs>(args: SelectSubset<T, TransacaoUpsertArgs<ExtArgs>>): Prisma__TransacaoClient<$Result.GetResult<Prisma.$TransacaoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoCountArgs} args - Arguments to filter Transacaos to count.
     * @example
     * // Count the number of Transacaos
     * const count = await prisma.transacao.count({
     *   where: {
     *     // ... the filter for the Transacaos we want to count
     *   }
     * })
    **/
    count<T extends TransacaoCountArgs>(
      args?: Subset<T, TransacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransacaoAggregateArgs>(args: Subset<T, TransacaoAggregateArgs>): Prisma.PrismaPromise<GetTransacaoAggregateType<T>>

    /**
     * Group by Transacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransacaoGroupByArgs['orderBy'] }
        : { orderBy?: TransacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transacao model
   */
  readonly fields: TransacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transacao model
   */ 
  interface TransacaoFieldRefs {
    readonly id: FieldRef<"Transacao", 'String'>
    readonly portfolioId: FieldRef<"Transacao", 'String'>
    readonly investimentoId: FieldRef<"Transacao", 'String'>
    readonly tipo: FieldRef<"Transacao", 'String'>
    readonly quantidade: FieldRef<"Transacao", 'Int'>
    readonly preco: FieldRef<"Transacao", 'Float'>
    readonly taxas: FieldRef<"Transacao", 'Float'>
    readonly dataTransacao: FieldRef<"Transacao", 'DateTime'>
    readonly observacoes: FieldRef<"Transacao", 'String'>
    readonly createdAt: FieldRef<"Transacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transacao findUnique
   */
  export type TransacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findUniqueOrThrow
   */
  export type TransacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao findFirst
   */
  export type TransacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findFirstOrThrow
   */
  export type TransacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Filter, which Transacao to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transacaos.
     */
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao findMany
   */
  export type TransacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Filter, which Transacaos to fetch.
     */
    where?: TransacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transacaos to fetch.
     */
    orderBy?: TransacaoOrderByWithRelationInput | TransacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transacaos.
     */
    cursor?: TransacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transacaos.
     */
    skip?: number
    distinct?: TransacaoScalarFieldEnum | TransacaoScalarFieldEnum[]
  }

  /**
   * Transacao create
   */
  export type TransacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * The data needed to create a Transacao.
     */
    data: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
  }

  /**
   * Transacao createMany
   */
  export type TransacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao createManyAndReturn
   */
  export type TransacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transacaos.
     */
    data: TransacaoCreateManyInput | TransacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transacao update
   */
  export type TransacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * The data needed to update a Transacao.
     */
    data: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
    /**
     * Choose, which Transacao to update.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao updateMany
   */
  export type TransacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transacaos.
     */
    data: XOR<TransacaoUpdateManyMutationInput, TransacaoUncheckedUpdateManyInput>
    /**
     * Filter which Transacaos to update
     */
    where?: TransacaoWhereInput
  }

  /**
   * Transacao upsert
   */
  export type TransacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * The filter to search for the Transacao to update in case it exists.
     */
    where: TransacaoWhereUniqueInput
    /**
     * In case the Transacao found by the `where` argument doesn't exist, create a new Transacao with this data.
     */
    create: XOR<TransacaoCreateInput, TransacaoUncheckedCreateInput>
    /**
     * In case the Transacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransacaoUpdateInput, TransacaoUncheckedUpdateInput>
  }

  /**
   * Transacao delete
   */
  export type TransacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
    /**
     * Filter which Transacao to delete.
     */
    where: TransacaoWhereUniqueInput
  }

  /**
   * Transacao deleteMany
   */
  export type TransacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transacaos to delete
     */
    where?: TransacaoWhereInput
  }

  /**
   * Transacao without action
   */
  export type TransacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transacao
     */
    select?: TransacaoSelect<ExtArgs> | null
  }


  /**
   * Model AlertaPreco
   */

  export type AggregateAlertaPreco = {
    _count: AlertaPrecoCountAggregateOutputType | null
    _avg: AlertaPrecoAvgAggregateOutputType | null
    _sum: AlertaPrecoSumAggregateOutputType | null
    _min: AlertaPrecoMinAggregateOutputType | null
    _max: AlertaPrecoMaxAggregateOutputType | null
  }

  export type AlertaPrecoAvgAggregateOutputType = {
    precoAlvo: number | null
  }

  export type AlertaPrecoSumAggregateOutputType = {
    precoAlvo: number | null
  }

  export type AlertaPrecoMinAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    investimentoId: string | null
    precoAlvo: number | null
    condicao: string | null
    ativo: boolean | null
    dataDisparo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertaPrecoMaxAggregateOutputType = {
    id: string | null
    usuarioId: string | null
    investimentoId: string | null
    precoAlvo: number | null
    condicao: string | null
    ativo: boolean | null
    dataDisparo: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertaPrecoCountAggregateOutputType = {
    id: number
    usuarioId: number
    investimentoId: number
    precoAlvo: number
    condicao: number
    ativo: number
    dataDisparo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertaPrecoAvgAggregateInputType = {
    precoAlvo?: true
  }

  export type AlertaPrecoSumAggregateInputType = {
    precoAlvo?: true
  }

  export type AlertaPrecoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    investimentoId?: true
    precoAlvo?: true
    condicao?: true
    ativo?: true
    dataDisparo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertaPrecoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    investimentoId?: true
    precoAlvo?: true
    condicao?: true
    ativo?: true
    dataDisparo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertaPrecoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    investimentoId?: true
    precoAlvo?: true
    condicao?: true
    ativo?: true
    dataDisparo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertaPrecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertaPreco to aggregate.
     */
    where?: AlertaPrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaPrecos to fetch.
     */
    orderBy?: AlertaPrecoOrderByWithRelationInput | AlertaPrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertaPrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaPrecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaPrecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlertaPrecos
    **/
    _count?: true | AlertaPrecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertaPrecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertaPrecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertaPrecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertaPrecoMaxAggregateInputType
  }

  export type GetAlertaPrecoAggregateType<T extends AlertaPrecoAggregateArgs> = {
        [P in keyof T & keyof AggregateAlertaPreco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlertaPreco[P]>
      : GetScalarType<T[P], AggregateAlertaPreco[P]>
  }




  export type AlertaPrecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertaPrecoWhereInput
    orderBy?: AlertaPrecoOrderByWithAggregationInput | AlertaPrecoOrderByWithAggregationInput[]
    by: AlertaPrecoScalarFieldEnum[] | AlertaPrecoScalarFieldEnum
    having?: AlertaPrecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertaPrecoCountAggregateInputType | true
    _avg?: AlertaPrecoAvgAggregateInputType
    _sum?: AlertaPrecoSumAggregateInputType
    _min?: AlertaPrecoMinAggregateInputType
    _max?: AlertaPrecoMaxAggregateInputType
  }

  export type AlertaPrecoGroupByOutputType = {
    id: string
    usuarioId: string
    investimentoId: string
    precoAlvo: number
    condicao: string
    ativo: boolean
    dataDisparo: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AlertaPrecoCountAggregateOutputType | null
    _avg: AlertaPrecoAvgAggregateOutputType | null
    _sum: AlertaPrecoSumAggregateOutputType | null
    _min: AlertaPrecoMinAggregateOutputType | null
    _max: AlertaPrecoMaxAggregateOutputType | null
  }

  type GetAlertaPrecoGroupByPayload<T extends AlertaPrecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertaPrecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertaPrecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertaPrecoGroupByOutputType[P]>
            : GetScalarType<T[P], AlertaPrecoGroupByOutputType[P]>
        }
      >
    >


  export type AlertaPrecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    investimentoId?: boolean
    precoAlvo?: boolean
    condicao?: boolean
    ativo?: boolean
    dataDisparo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alertaPreco"]>

  export type AlertaPrecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    investimentoId?: boolean
    precoAlvo?: boolean
    condicao?: boolean
    ativo?: boolean
    dataDisparo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alertaPreco"]>

  export type AlertaPrecoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    investimentoId?: boolean
    precoAlvo?: boolean
    condicao?: boolean
    ativo?: boolean
    dataDisparo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AlertaPrecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AlertaPreco"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      usuarioId: string
      investimentoId: string
      precoAlvo: number
      condicao: string
      ativo: boolean
      dataDisparo: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alertaPreco"]>
    composites: {}
  }

  type AlertaPrecoGetPayload<S extends boolean | null | undefined | AlertaPrecoDefaultArgs> = $Result.GetResult<Prisma.$AlertaPrecoPayload, S>

  type AlertaPrecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertaPrecoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertaPrecoCountAggregateInputType | true
    }

  export interface AlertaPrecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AlertaPreco'], meta: { name: 'AlertaPreco' } }
    /**
     * Find zero or one AlertaPreco that matches the filter.
     * @param {AlertaPrecoFindUniqueArgs} args - Arguments to find a AlertaPreco
     * @example
     * // Get one AlertaPreco
     * const alertaPreco = await prisma.alertaPreco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertaPrecoFindUniqueArgs>(args: SelectSubset<T, AlertaPrecoFindUniqueArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AlertaPreco that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertaPrecoFindUniqueOrThrowArgs} args - Arguments to find a AlertaPreco
     * @example
     * // Get one AlertaPreco
     * const alertaPreco = await prisma.alertaPreco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertaPrecoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertaPrecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AlertaPreco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaPrecoFindFirstArgs} args - Arguments to find a AlertaPreco
     * @example
     * // Get one AlertaPreco
     * const alertaPreco = await prisma.alertaPreco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertaPrecoFindFirstArgs>(args?: SelectSubset<T, AlertaPrecoFindFirstArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AlertaPreco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaPrecoFindFirstOrThrowArgs} args - Arguments to find a AlertaPreco
     * @example
     * // Get one AlertaPreco
     * const alertaPreco = await prisma.alertaPreco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertaPrecoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertaPrecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AlertaPrecos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaPrecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlertaPrecos
     * const alertaPrecos = await prisma.alertaPreco.findMany()
     * 
     * // Get first 10 AlertaPrecos
     * const alertaPrecos = await prisma.alertaPreco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertaPrecoWithIdOnly = await prisma.alertaPreco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertaPrecoFindManyArgs>(args?: SelectSubset<T, AlertaPrecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AlertaPreco.
     * @param {AlertaPrecoCreateArgs} args - Arguments to create a AlertaPreco.
     * @example
     * // Create one AlertaPreco
     * const AlertaPreco = await prisma.alertaPreco.create({
     *   data: {
     *     // ... data to create a AlertaPreco
     *   }
     * })
     * 
     */
    create<T extends AlertaPrecoCreateArgs>(args: SelectSubset<T, AlertaPrecoCreateArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AlertaPrecos.
     * @param {AlertaPrecoCreateManyArgs} args - Arguments to create many AlertaPrecos.
     * @example
     * // Create many AlertaPrecos
     * const alertaPreco = await prisma.alertaPreco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertaPrecoCreateManyArgs>(args?: SelectSubset<T, AlertaPrecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AlertaPrecos and returns the data saved in the database.
     * @param {AlertaPrecoCreateManyAndReturnArgs} args - Arguments to create many AlertaPrecos.
     * @example
     * // Create many AlertaPrecos
     * const alertaPreco = await prisma.alertaPreco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AlertaPrecos and only return the `id`
     * const alertaPrecoWithIdOnly = await prisma.alertaPreco.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertaPrecoCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertaPrecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AlertaPreco.
     * @param {AlertaPrecoDeleteArgs} args - Arguments to delete one AlertaPreco.
     * @example
     * // Delete one AlertaPreco
     * const AlertaPreco = await prisma.alertaPreco.delete({
     *   where: {
     *     // ... filter to delete one AlertaPreco
     *   }
     * })
     * 
     */
    delete<T extends AlertaPrecoDeleteArgs>(args: SelectSubset<T, AlertaPrecoDeleteArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AlertaPreco.
     * @param {AlertaPrecoUpdateArgs} args - Arguments to update one AlertaPreco.
     * @example
     * // Update one AlertaPreco
     * const alertaPreco = await prisma.alertaPreco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertaPrecoUpdateArgs>(args: SelectSubset<T, AlertaPrecoUpdateArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AlertaPrecos.
     * @param {AlertaPrecoDeleteManyArgs} args - Arguments to filter AlertaPrecos to delete.
     * @example
     * // Delete a few AlertaPrecos
     * const { count } = await prisma.alertaPreco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertaPrecoDeleteManyArgs>(args?: SelectSubset<T, AlertaPrecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlertaPrecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaPrecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlertaPrecos
     * const alertaPreco = await prisma.alertaPreco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertaPrecoUpdateManyArgs>(args: SelectSubset<T, AlertaPrecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlertaPreco.
     * @param {AlertaPrecoUpsertArgs} args - Arguments to update or create a AlertaPreco.
     * @example
     * // Update or create a AlertaPreco
     * const alertaPreco = await prisma.alertaPreco.upsert({
     *   create: {
     *     // ... data to create a AlertaPreco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlertaPreco we want to update
     *   }
     * })
     */
    upsert<T extends AlertaPrecoUpsertArgs>(args: SelectSubset<T, AlertaPrecoUpsertArgs<ExtArgs>>): Prisma__AlertaPrecoClient<$Result.GetResult<Prisma.$AlertaPrecoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AlertaPrecos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaPrecoCountArgs} args - Arguments to filter AlertaPrecos to count.
     * @example
     * // Count the number of AlertaPrecos
     * const count = await prisma.alertaPreco.count({
     *   where: {
     *     // ... the filter for the AlertaPrecos we want to count
     *   }
     * })
    **/
    count<T extends AlertaPrecoCountArgs>(
      args?: Subset<T, AlertaPrecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertaPrecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlertaPreco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaPrecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertaPrecoAggregateArgs>(args: Subset<T, AlertaPrecoAggregateArgs>): Prisma.PrismaPromise<GetAlertaPrecoAggregateType<T>>

    /**
     * Group by AlertaPreco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertaPrecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertaPrecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertaPrecoGroupByArgs['orderBy'] }
        : { orderBy?: AlertaPrecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertaPrecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertaPrecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AlertaPreco model
   */
  readonly fields: AlertaPrecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AlertaPreco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertaPrecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AlertaPreco model
   */ 
  interface AlertaPrecoFieldRefs {
    readonly id: FieldRef<"AlertaPreco", 'String'>
    readonly usuarioId: FieldRef<"AlertaPreco", 'String'>
    readonly investimentoId: FieldRef<"AlertaPreco", 'String'>
    readonly precoAlvo: FieldRef<"AlertaPreco", 'Float'>
    readonly condicao: FieldRef<"AlertaPreco", 'String'>
    readonly ativo: FieldRef<"AlertaPreco", 'Boolean'>
    readonly dataDisparo: FieldRef<"AlertaPreco", 'DateTime'>
    readonly createdAt: FieldRef<"AlertaPreco", 'DateTime'>
    readonly updatedAt: FieldRef<"AlertaPreco", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AlertaPreco findUnique
   */
  export type AlertaPrecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * Filter, which AlertaPreco to fetch.
     */
    where: AlertaPrecoWhereUniqueInput
  }

  /**
   * AlertaPreco findUniqueOrThrow
   */
  export type AlertaPrecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * Filter, which AlertaPreco to fetch.
     */
    where: AlertaPrecoWhereUniqueInput
  }

  /**
   * AlertaPreco findFirst
   */
  export type AlertaPrecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * Filter, which AlertaPreco to fetch.
     */
    where?: AlertaPrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaPrecos to fetch.
     */
    orderBy?: AlertaPrecoOrderByWithRelationInput | AlertaPrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertaPrecos.
     */
    cursor?: AlertaPrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaPrecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaPrecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertaPrecos.
     */
    distinct?: AlertaPrecoScalarFieldEnum | AlertaPrecoScalarFieldEnum[]
  }

  /**
   * AlertaPreco findFirstOrThrow
   */
  export type AlertaPrecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * Filter, which AlertaPreco to fetch.
     */
    where?: AlertaPrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaPrecos to fetch.
     */
    orderBy?: AlertaPrecoOrderByWithRelationInput | AlertaPrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlertaPrecos.
     */
    cursor?: AlertaPrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaPrecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaPrecos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlertaPrecos.
     */
    distinct?: AlertaPrecoScalarFieldEnum | AlertaPrecoScalarFieldEnum[]
  }

  /**
   * AlertaPreco findMany
   */
  export type AlertaPrecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * Filter, which AlertaPrecos to fetch.
     */
    where?: AlertaPrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlertaPrecos to fetch.
     */
    orderBy?: AlertaPrecoOrderByWithRelationInput | AlertaPrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlertaPrecos.
     */
    cursor?: AlertaPrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlertaPrecos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlertaPrecos.
     */
    skip?: number
    distinct?: AlertaPrecoScalarFieldEnum | AlertaPrecoScalarFieldEnum[]
  }

  /**
   * AlertaPreco create
   */
  export type AlertaPrecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * The data needed to create a AlertaPreco.
     */
    data: XOR<AlertaPrecoCreateInput, AlertaPrecoUncheckedCreateInput>
  }

  /**
   * AlertaPreco createMany
   */
  export type AlertaPrecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AlertaPrecos.
     */
    data: AlertaPrecoCreateManyInput | AlertaPrecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertaPreco createManyAndReturn
   */
  export type AlertaPrecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AlertaPrecos.
     */
    data: AlertaPrecoCreateManyInput | AlertaPrecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AlertaPreco update
   */
  export type AlertaPrecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * The data needed to update a AlertaPreco.
     */
    data: XOR<AlertaPrecoUpdateInput, AlertaPrecoUncheckedUpdateInput>
    /**
     * Choose, which AlertaPreco to update.
     */
    where: AlertaPrecoWhereUniqueInput
  }

  /**
   * AlertaPreco updateMany
   */
  export type AlertaPrecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AlertaPrecos.
     */
    data: XOR<AlertaPrecoUpdateManyMutationInput, AlertaPrecoUncheckedUpdateManyInput>
    /**
     * Filter which AlertaPrecos to update
     */
    where?: AlertaPrecoWhereInput
  }

  /**
   * AlertaPreco upsert
   */
  export type AlertaPrecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * The filter to search for the AlertaPreco to update in case it exists.
     */
    where: AlertaPrecoWhereUniqueInput
    /**
     * In case the AlertaPreco found by the `where` argument doesn't exist, create a new AlertaPreco with this data.
     */
    create: XOR<AlertaPrecoCreateInput, AlertaPrecoUncheckedCreateInput>
    /**
     * In case the AlertaPreco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertaPrecoUpdateInput, AlertaPrecoUncheckedUpdateInput>
  }

  /**
   * AlertaPreco delete
   */
  export type AlertaPrecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
    /**
     * Filter which AlertaPreco to delete.
     */
    where: AlertaPrecoWhereUniqueInput
  }

  /**
   * AlertaPreco deleteMany
   */
  export type AlertaPrecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AlertaPrecos to delete
     */
    where?: AlertaPrecoWhereInput
  }

  /**
   * AlertaPreco without action
   */
  export type AlertaPrecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlertaPreco
     */
    select?: AlertaPrecoSelect<ExtArgs> | null
  }


  /**
   * Model RelatorioPerformance
   */

  export type AggregateRelatorioPerformance = {
    _count: RelatorioPerformanceCountAggregateOutputType | null
    _avg: RelatorioPerformanceAvgAggregateOutputType | null
    _sum: RelatorioPerformanceSumAggregateOutputType | null
    _min: RelatorioPerformanceMinAggregateOutputType | null
    _max: RelatorioPerformanceMaxAggregateOutputType | null
  }

  export type RelatorioPerformanceAvgAggregateOutputType = {
    valorInicial: number | null
    valorFinal: number | null
    rentabilidade: number | null
    benchmark: number | null
  }

  export type RelatorioPerformanceSumAggregateOutputType = {
    valorInicial: number | null
    valorFinal: number | null
    rentabilidade: number | null
    benchmark: number | null
  }

  export type RelatorioPerformanceMinAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    periodo: string | null
    valorInicial: number | null
    valorFinal: number | null
    rentabilidade: number | null
    benchmark: number | null
    dataInicio: Date | null
    dataFim: Date | null
    createdAt: Date | null
  }

  export type RelatorioPerformanceMaxAggregateOutputType = {
    id: string | null
    portfolioId: string | null
    periodo: string | null
    valorInicial: number | null
    valorFinal: number | null
    rentabilidade: number | null
    benchmark: number | null
    dataInicio: Date | null
    dataFim: Date | null
    createdAt: Date | null
  }

  export type RelatorioPerformanceCountAggregateOutputType = {
    id: number
    portfolioId: number
    periodo: number
    valorInicial: number
    valorFinal: number
    rentabilidade: number
    benchmark: number
    dataInicio: number
    dataFim: number
    createdAt: number
    _all: number
  }


  export type RelatorioPerformanceAvgAggregateInputType = {
    valorInicial?: true
    valorFinal?: true
    rentabilidade?: true
    benchmark?: true
  }

  export type RelatorioPerformanceSumAggregateInputType = {
    valorInicial?: true
    valorFinal?: true
    rentabilidade?: true
    benchmark?: true
  }

  export type RelatorioPerformanceMinAggregateInputType = {
    id?: true
    portfolioId?: true
    periodo?: true
    valorInicial?: true
    valorFinal?: true
    rentabilidade?: true
    benchmark?: true
    dataInicio?: true
    dataFim?: true
    createdAt?: true
  }

  export type RelatorioPerformanceMaxAggregateInputType = {
    id?: true
    portfolioId?: true
    periodo?: true
    valorInicial?: true
    valorFinal?: true
    rentabilidade?: true
    benchmark?: true
    dataInicio?: true
    dataFim?: true
    createdAt?: true
  }

  export type RelatorioPerformanceCountAggregateInputType = {
    id?: true
    portfolioId?: true
    periodo?: true
    valorInicial?: true
    valorFinal?: true
    rentabilidade?: true
    benchmark?: true
    dataInicio?: true
    dataFim?: true
    createdAt?: true
    _all?: true
  }

  export type RelatorioPerformanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioPerformance to aggregate.
     */
    where?: RelatorioPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioPerformances to fetch.
     */
    orderBy?: RelatorioPerformanceOrderByWithRelationInput | RelatorioPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelatorioPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RelatorioPerformances
    **/
    _count?: true | RelatorioPerformanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelatorioPerformanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelatorioPerformanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelatorioPerformanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelatorioPerformanceMaxAggregateInputType
  }

  export type GetRelatorioPerformanceAggregateType<T extends RelatorioPerformanceAggregateArgs> = {
        [P in keyof T & keyof AggregateRelatorioPerformance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelatorioPerformance[P]>
      : GetScalarType<T[P], AggregateRelatorioPerformance[P]>
  }




  export type RelatorioPerformanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelatorioPerformanceWhereInput
    orderBy?: RelatorioPerformanceOrderByWithAggregationInput | RelatorioPerformanceOrderByWithAggregationInput[]
    by: RelatorioPerformanceScalarFieldEnum[] | RelatorioPerformanceScalarFieldEnum
    having?: RelatorioPerformanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelatorioPerformanceCountAggregateInputType | true
    _avg?: RelatorioPerformanceAvgAggregateInputType
    _sum?: RelatorioPerformanceSumAggregateInputType
    _min?: RelatorioPerformanceMinAggregateInputType
    _max?: RelatorioPerformanceMaxAggregateInputType
  }

  export type RelatorioPerformanceGroupByOutputType = {
    id: string
    portfolioId: string
    periodo: string
    valorInicial: number
    valorFinal: number
    rentabilidade: number
    benchmark: number | null
    dataInicio: Date
    dataFim: Date
    createdAt: Date
    _count: RelatorioPerformanceCountAggregateOutputType | null
    _avg: RelatorioPerformanceAvgAggregateOutputType | null
    _sum: RelatorioPerformanceSumAggregateOutputType | null
    _min: RelatorioPerformanceMinAggregateOutputType | null
    _max: RelatorioPerformanceMaxAggregateOutputType | null
  }

  type GetRelatorioPerformanceGroupByPayload<T extends RelatorioPerformanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelatorioPerformanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelatorioPerformanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelatorioPerformanceGroupByOutputType[P]>
            : GetScalarType<T[P], RelatorioPerformanceGroupByOutputType[P]>
        }
      >
    >


  export type RelatorioPerformanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    periodo?: boolean
    valorInicial?: boolean
    valorFinal?: boolean
    rentabilidade?: boolean
    benchmark?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["relatorioPerformance"]>

  export type RelatorioPerformanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    portfolioId?: boolean
    periodo?: boolean
    valorInicial?: boolean
    valorFinal?: boolean
    rentabilidade?: boolean
    benchmark?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["relatorioPerformance"]>

  export type RelatorioPerformanceSelectScalar = {
    id?: boolean
    portfolioId?: boolean
    periodo?: boolean
    valorInicial?: boolean
    valorFinal?: boolean
    rentabilidade?: boolean
    benchmark?: boolean
    dataInicio?: boolean
    dataFim?: boolean
    createdAt?: boolean
  }


  export type $RelatorioPerformancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RelatorioPerformance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      portfolioId: string
      periodo: string
      valorInicial: number
      valorFinal: number
      rentabilidade: number
      benchmark: number | null
      dataInicio: Date
      dataFim: Date
      createdAt: Date
    }, ExtArgs["result"]["relatorioPerformance"]>
    composites: {}
  }

  type RelatorioPerformanceGetPayload<S extends boolean | null | undefined | RelatorioPerformanceDefaultArgs> = $Result.GetResult<Prisma.$RelatorioPerformancePayload, S>

  type RelatorioPerformanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RelatorioPerformanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RelatorioPerformanceCountAggregateInputType | true
    }

  export interface RelatorioPerformanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RelatorioPerformance'], meta: { name: 'RelatorioPerformance' } }
    /**
     * Find zero or one RelatorioPerformance that matches the filter.
     * @param {RelatorioPerformanceFindUniqueArgs} args - Arguments to find a RelatorioPerformance
     * @example
     * // Get one RelatorioPerformance
     * const relatorioPerformance = await prisma.relatorioPerformance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelatorioPerformanceFindUniqueArgs>(args: SelectSubset<T, RelatorioPerformanceFindUniqueArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RelatorioPerformance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RelatorioPerformanceFindUniqueOrThrowArgs} args - Arguments to find a RelatorioPerformance
     * @example
     * // Get one RelatorioPerformance
     * const relatorioPerformance = await prisma.relatorioPerformance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelatorioPerformanceFindUniqueOrThrowArgs>(args: SelectSubset<T, RelatorioPerformanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RelatorioPerformance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioPerformanceFindFirstArgs} args - Arguments to find a RelatorioPerformance
     * @example
     * // Get one RelatorioPerformance
     * const relatorioPerformance = await prisma.relatorioPerformance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelatorioPerformanceFindFirstArgs>(args?: SelectSubset<T, RelatorioPerformanceFindFirstArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RelatorioPerformance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioPerformanceFindFirstOrThrowArgs} args - Arguments to find a RelatorioPerformance
     * @example
     * // Get one RelatorioPerformance
     * const relatorioPerformance = await prisma.relatorioPerformance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelatorioPerformanceFindFirstOrThrowArgs>(args?: SelectSubset<T, RelatorioPerformanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RelatorioPerformances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioPerformanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RelatorioPerformances
     * const relatorioPerformances = await prisma.relatorioPerformance.findMany()
     * 
     * // Get first 10 RelatorioPerformances
     * const relatorioPerformances = await prisma.relatorioPerformance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relatorioPerformanceWithIdOnly = await prisma.relatorioPerformance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelatorioPerformanceFindManyArgs>(args?: SelectSubset<T, RelatorioPerformanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RelatorioPerformance.
     * @param {RelatorioPerformanceCreateArgs} args - Arguments to create a RelatorioPerformance.
     * @example
     * // Create one RelatorioPerformance
     * const RelatorioPerformance = await prisma.relatorioPerformance.create({
     *   data: {
     *     // ... data to create a RelatorioPerformance
     *   }
     * })
     * 
     */
    create<T extends RelatorioPerformanceCreateArgs>(args: SelectSubset<T, RelatorioPerformanceCreateArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RelatorioPerformances.
     * @param {RelatorioPerformanceCreateManyArgs} args - Arguments to create many RelatorioPerformances.
     * @example
     * // Create many RelatorioPerformances
     * const relatorioPerformance = await prisma.relatorioPerformance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelatorioPerformanceCreateManyArgs>(args?: SelectSubset<T, RelatorioPerformanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RelatorioPerformances and returns the data saved in the database.
     * @param {RelatorioPerformanceCreateManyAndReturnArgs} args - Arguments to create many RelatorioPerformances.
     * @example
     * // Create many RelatorioPerformances
     * const relatorioPerformance = await prisma.relatorioPerformance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RelatorioPerformances and only return the `id`
     * const relatorioPerformanceWithIdOnly = await prisma.relatorioPerformance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelatorioPerformanceCreateManyAndReturnArgs>(args?: SelectSubset<T, RelatorioPerformanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RelatorioPerformance.
     * @param {RelatorioPerformanceDeleteArgs} args - Arguments to delete one RelatorioPerformance.
     * @example
     * // Delete one RelatorioPerformance
     * const RelatorioPerformance = await prisma.relatorioPerformance.delete({
     *   where: {
     *     // ... filter to delete one RelatorioPerformance
     *   }
     * })
     * 
     */
    delete<T extends RelatorioPerformanceDeleteArgs>(args: SelectSubset<T, RelatorioPerformanceDeleteArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RelatorioPerformance.
     * @param {RelatorioPerformanceUpdateArgs} args - Arguments to update one RelatorioPerformance.
     * @example
     * // Update one RelatorioPerformance
     * const relatorioPerformance = await prisma.relatorioPerformance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelatorioPerformanceUpdateArgs>(args: SelectSubset<T, RelatorioPerformanceUpdateArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RelatorioPerformances.
     * @param {RelatorioPerformanceDeleteManyArgs} args - Arguments to filter RelatorioPerformances to delete.
     * @example
     * // Delete a few RelatorioPerformances
     * const { count } = await prisma.relatorioPerformance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelatorioPerformanceDeleteManyArgs>(args?: SelectSubset<T, RelatorioPerformanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RelatorioPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioPerformanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RelatorioPerformances
     * const relatorioPerformance = await prisma.relatorioPerformance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelatorioPerformanceUpdateManyArgs>(args: SelectSubset<T, RelatorioPerformanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RelatorioPerformance.
     * @param {RelatorioPerformanceUpsertArgs} args - Arguments to update or create a RelatorioPerformance.
     * @example
     * // Update or create a RelatorioPerformance
     * const relatorioPerformance = await prisma.relatorioPerformance.upsert({
     *   create: {
     *     // ... data to create a RelatorioPerformance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RelatorioPerformance we want to update
     *   }
     * })
     */
    upsert<T extends RelatorioPerformanceUpsertArgs>(args: SelectSubset<T, RelatorioPerformanceUpsertArgs<ExtArgs>>): Prisma__RelatorioPerformanceClient<$Result.GetResult<Prisma.$RelatorioPerformancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RelatorioPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioPerformanceCountArgs} args - Arguments to filter RelatorioPerformances to count.
     * @example
     * // Count the number of RelatorioPerformances
     * const count = await prisma.relatorioPerformance.count({
     *   where: {
     *     // ... the filter for the RelatorioPerformances we want to count
     *   }
     * })
    **/
    count<T extends RelatorioPerformanceCountArgs>(
      args?: Subset<T, RelatorioPerformanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelatorioPerformanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RelatorioPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioPerformanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelatorioPerformanceAggregateArgs>(args: Subset<T, RelatorioPerformanceAggregateArgs>): Prisma.PrismaPromise<GetRelatorioPerformanceAggregateType<T>>

    /**
     * Group by RelatorioPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelatorioPerformanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelatorioPerformanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelatorioPerformanceGroupByArgs['orderBy'] }
        : { orderBy?: RelatorioPerformanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelatorioPerformanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelatorioPerformanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RelatorioPerformance model
   */
  readonly fields: RelatorioPerformanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RelatorioPerformance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelatorioPerformanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RelatorioPerformance model
   */ 
  interface RelatorioPerformanceFieldRefs {
    readonly id: FieldRef<"RelatorioPerformance", 'String'>
    readonly portfolioId: FieldRef<"RelatorioPerformance", 'String'>
    readonly periodo: FieldRef<"RelatorioPerformance", 'String'>
    readonly valorInicial: FieldRef<"RelatorioPerformance", 'Float'>
    readonly valorFinal: FieldRef<"RelatorioPerformance", 'Float'>
    readonly rentabilidade: FieldRef<"RelatorioPerformance", 'Float'>
    readonly benchmark: FieldRef<"RelatorioPerformance", 'Float'>
    readonly dataInicio: FieldRef<"RelatorioPerformance", 'DateTime'>
    readonly dataFim: FieldRef<"RelatorioPerformance", 'DateTime'>
    readonly createdAt: FieldRef<"RelatorioPerformance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RelatorioPerformance findUnique
   */
  export type RelatorioPerformanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RelatorioPerformance to fetch.
     */
    where: RelatorioPerformanceWhereUniqueInput
  }

  /**
   * RelatorioPerformance findUniqueOrThrow
   */
  export type RelatorioPerformanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RelatorioPerformance to fetch.
     */
    where: RelatorioPerformanceWhereUniqueInput
  }

  /**
   * RelatorioPerformance findFirst
   */
  export type RelatorioPerformanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RelatorioPerformance to fetch.
     */
    where?: RelatorioPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioPerformances to fetch.
     */
    orderBy?: RelatorioPerformanceOrderByWithRelationInput | RelatorioPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioPerformances.
     */
    cursor?: RelatorioPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioPerformances.
     */
    distinct?: RelatorioPerformanceScalarFieldEnum | RelatorioPerformanceScalarFieldEnum[]
  }

  /**
   * RelatorioPerformance findFirstOrThrow
   */
  export type RelatorioPerformanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RelatorioPerformance to fetch.
     */
    where?: RelatorioPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioPerformances to fetch.
     */
    orderBy?: RelatorioPerformanceOrderByWithRelationInput | RelatorioPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RelatorioPerformances.
     */
    cursor?: RelatorioPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RelatorioPerformances.
     */
    distinct?: RelatorioPerformanceScalarFieldEnum | RelatorioPerformanceScalarFieldEnum[]
  }

  /**
   * RelatorioPerformance findMany
   */
  export type RelatorioPerformanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * Filter, which RelatorioPerformances to fetch.
     */
    where?: RelatorioPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RelatorioPerformances to fetch.
     */
    orderBy?: RelatorioPerformanceOrderByWithRelationInput | RelatorioPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RelatorioPerformances.
     */
    cursor?: RelatorioPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RelatorioPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RelatorioPerformances.
     */
    skip?: number
    distinct?: RelatorioPerformanceScalarFieldEnum | RelatorioPerformanceScalarFieldEnum[]
  }

  /**
   * RelatorioPerformance create
   */
  export type RelatorioPerformanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * The data needed to create a RelatorioPerformance.
     */
    data: XOR<RelatorioPerformanceCreateInput, RelatorioPerformanceUncheckedCreateInput>
  }

  /**
   * RelatorioPerformance createMany
   */
  export type RelatorioPerformanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RelatorioPerformances.
     */
    data: RelatorioPerformanceCreateManyInput | RelatorioPerformanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatorioPerformance createManyAndReturn
   */
  export type RelatorioPerformanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RelatorioPerformances.
     */
    data: RelatorioPerformanceCreateManyInput | RelatorioPerformanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RelatorioPerformance update
   */
  export type RelatorioPerformanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * The data needed to update a RelatorioPerformance.
     */
    data: XOR<RelatorioPerformanceUpdateInput, RelatorioPerformanceUncheckedUpdateInput>
    /**
     * Choose, which RelatorioPerformance to update.
     */
    where: RelatorioPerformanceWhereUniqueInput
  }

  /**
   * RelatorioPerformance updateMany
   */
  export type RelatorioPerformanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RelatorioPerformances.
     */
    data: XOR<RelatorioPerformanceUpdateManyMutationInput, RelatorioPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which RelatorioPerformances to update
     */
    where?: RelatorioPerformanceWhereInput
  }

  /**
   * RelatorioPerformance upsert
   */
  export type RelatorioPerformanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * The filter to search for the RelatorioPerformance to update in case it exists.
     */
    where: RelatorioPerformanceWhereUniqueInput
    /**
     * In case the RelatorioPerformance found by the `where` argument doesn't exist, create a new RelatorioPerformance with this data.
     */
    create: XOR<RelatorioPerformanceCreateInput, RelatorioPerformanceUncheckedCreateInput>
    /**
     * In case the RelatorioPerformance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelatorioPerformanceUpdateInput, RelatorioPerformanceUncheckedUpdateInput>
  }

  /**
   * RelatorioPerformance delete
   */
  export type RelatorioPerformanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
    /**
     * Filter which RelatorioPerformance to delete.
     */
    where: RelatorioPerformanceWhereUniqueInput
  }

  /**
   * RelatorioPerformance deleteMany
   */
  export type RelatorioPerformanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RelatorioPerformances to delete
     */
    where?: RelatorioPerformanceWhereInput
  }

  /**
   * RelatorioPerformance without action
   */
  export type RelatorioPerformanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RelatorioPerformance
     */
    select?: RelatorioPerformanceSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    dataCriacao: 'dataCriacao',
    ultimoLogin: 'ultimoLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const InvestimentoScalarFieldEnum: {
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

  export type InvestimentoScalarFieldEnum = (typeof InvestimentoScalarFieldEnum)[keyof typeof InvestimentoScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    usuarioId: 'usuarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const PortfolioItemScalarFieldEnum: {
    id: 'id',
    portfolioId: 'portfolioId',
    investimentoId: 'investimentoId',
    quantidade: 'quantidade',
    precoCompra: 'precoCompra',
    dataCompra: 'dataCompra',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioItemScalarFieldEnum = (typeof PortfolioItemScalarFieldEnum)[keyof typeof PortfolioItemScalarFieldEnum]


  export const FavoritoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    investimentoId: 'investimentoId',
    dataAdicao: 'dataAdicao',
    createdAt: 'createdAt'
  };

  export type FavoritoScalarFieldEnum = (typeof FavoritoScalarFieldEnum)[keyof typeof FavoritoScalarFieldEnum]


  export const NotificacaoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    message: 'message',
    lida: 'lida',
    dataEnvio: 'dataEnvio',
    createdAt: 'createdAt'
  };

  export type NotificacaoScalarFieldEnum = (typeof NotificacaoScalarFieldEnum)[keyof typeof NotificacaoScalarFieldEnum]


  export const SystemLogScalarFieldEnum: {
    id: 'id',
    type: 'type',
    message: 'message',
    source: 'source',
    operation: 'operation',
    executionTime: 'executionTime',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SystemLogScalarFieldEnum = (typeof SystemLogScalarFieldEnum)[keyof typeof SystemLogScalarFieldEnum]


  export const MarketDataScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    preco: 'preco',
    variacao: 'variacao',
    volume: 'volume',
    dataHora: 'dataHora',
    createdAt: 'createdAt'
  };

  export type MarketDataScalarFieldEnum = (typeof MarketDataScalarFieldEnum)[keyof typeof MarketDataScalarFieldEnum]


  export const TransacaoScalarFieldEnum: {
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

  export type TransacaoScalarFieldEnum = (typeof TransacaoScalarFieldEnum)[keyof typeof TransacaoScalarFieldEnum]


  export const AlertaPrecoScalarFieldEnum: {
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

  export type AlertaPrecoScalarFieldEnum = (typeof AlertaPrecoScalarFieldEnum)[keyof typeof AlertaPrecoScalarFieldEnum]


  export const RelatorioPerformanceScalarFieldEnum: {
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

  export type RelatorioPerformanceScalarFieldEnum = (typeof RelatorioPerformanceScalarFieldEnum)[keyof typeof RelatorioPerformanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoInvestimento'
   */
  export type EnumTipoInvestimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoInvestimento'>
    


  /**
   * Reference to a field of type 'TipoInvestimento[]'
   */
  export type ListEnumTipoInvestimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoInvestimento[]'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    portfolios?: PortfolioListRelationFilter
    favoritos?: FavoritoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolios?: PortfolioOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
    notificacoes?: NotificacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    ultimoLogin?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    portfolios?: PortfolioListRelationFilter
    favoritos?: FavoritoListRelationFilter
    notificacoes?: NotificacaoListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    ultimoLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    ultimoLogin?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type InvestimentoWhereInput = {
    AND?: InvestimentoWhereInput | InvestimentoWhereInput[]
    OR?: InvestimentoWhereInput[]
    NOT?: InvestimentoWhereInput | InvestimentoWhereInput[]
    id?: StringFilter<"Investimento"> | string
    nome?: StringFilter<"Investimento"> | string
    codigo?: StringFilter<"Investimento"> | string
    tipo?: EnumTipoInvestimentoFilter<"Investimento"> | $Enums.TipoInvestimento
    historico?: FloatNullableListFilter<"Investimento">
    volatilidade?: FloatNullableFilter<"Investimento"> | number | null
    dividendYield?: FloatNullableFilter<"Investimento"> | number | null
    taxaJuros?: FloatNullableFilter<"Investimento"> | number | null
    dataVencimento?: DateTimeNullableFilter<"Investimento"> | Date | string | null
    taxaAdministracao?: FloatNullableFilter<"Investimento"> | number | null
    patrimonioTotal?: FloatNullableFilter<"Investimento"> | number | null
    createdAt?: DateTimeFilter<"Investimento"> | Date | string
    updatedAt?: DateTimeFilter<"Investimento"> | Date | string
    portfolioItems?: PortfolioItemListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }

  export type InvestimentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    historico?: SortOrder
    volatilidade?: SortOrderInput | SortOrder
    dividendYield?: SortOrderInput | SortOrder
    taxaJuros?: SortOrderInput | SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    taxaAdministracao?: SortOrderInput | SortOrder
    patrimonioTotal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolioItems?: PortfolioItemOrderByRelationAggregateInput
    favoritos?: FavoritoOrderByRelationAggregateInput
  }

  export type InvestimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: InvestimentoWhereInput | InvestimentoWhereInput[]
    OR?: InvestimentoWhereInput[]
    NOT?: InvestimentoWhereInput | InvestimentoWhereInput[]
    nome?: StringFilter<"Investimento"> | string
    tipo?: EnumTipoInvestimentoFilter<"Investimento"> | $Enums.TipoInvestimento
    historico?: FloatNullableListFilter<"Investimento">
    volatilidade?: FloatNullableFilter<"Investimento"> | number | null
    dividendYield?: FloatNullableFilter<"Investimento"> | number | null
    taxaJuros?: FloatNullableFilter<"Investimento"> | number | null
    dataVencimento?: DateTimeNullableFilter<"Investimento"> | Date | string | null
    taxaAdministracao?: FloatNullableFilter<"Investimento"> | number | null
    patrimonioTotal?: FloatNullableFilter<"Investimento"> | number | null
    createdAt?: DateTimeFilter<"Investimento"> | Date | string
    updatedAt?: DateTimeFilter<"Investimento"> | Date | string
    portfolioItems?: PortfolioItemListRelationFilter
    favoritos?: FavoritoListRelationFilter
  }, "id" | "codigo">

  export type InvestimentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    historico?: SortOrder
    volatilidade?: SortOrderInput | SortOrder
    dividendYield?: SortOrderInput | SortOrder
    taxaJuros?: SortOrderInput | SortOrder
    dataVencimento?: SortOrderInput | SortOrder
    taxaAdministracao?: SortOrderInput | SortOrder
    patrimonioTotal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvestimentoCountOrderByAggregateInput
    _avg?: InvestimentoAvgOrderByAggregateInput
    _max?: InvestimentoMaxOrderByAggregateInput
    _min?: InvestimentoMinOrderByAggregateInput
    _sum?: InvestimentoSumOrderByAggregateInput
  }

  export type InvestimentoScalarWhereWithAggregatesInput = {
    AND?: InvestimentoScalarWhereWithAggregatesInput | InvestimentoScalarWhereWithAggregatesInput[]
    OR?: InvestimentoScalarWhereWithAggregatesInput[]
    NOT?: InvestimentoScalarWhereWithAggregatesInput | InvestimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investimento"> | string
    nome?: StringWithAggregatesFilter<"Investimento"> | string
    codigo?: StringWithAggregatesFilter<"Investimento"> | string
    tipo?: EnumTipoInvestimentoWithAggregatesFilter<"Investimento"> | $Enums.TipoInvestimento
    historico?: FloatNullableListFilter<"Investimento">
    volatilidade?: FloatNullableWithAggregatesFilter<"Investimento"> | number | null
    dividendYield?: FloatNullableWithAggregatesFilter<"Investimento"> | number | null
    taxaJuros?: FloatNullableWithAggregatesFilter<"Investimento"> | number | null
    dataVencimento?: DateTimeNullableWithAggregatesFilter<"Investimento"> | Date | string | null
    taxaAdministracao?: FloatNullableWithAggregatesFilter<"Investimento"> | number | null
    patrimonioTotal?: FloatNullableWithAggregatesFilter<"Investimento"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Investimento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Investimento"> | Date | string
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: StringFilter<"Portfolio"> | string
    nome?: StringFilter<"Portfolio"> | string
    descricao?: StringNullableFilter<"Portfolio"> | string | null
    usuarioId?: StringFilter<"Portfolio"> | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    itens?: PortfolioItemListRelationFilter
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    itens?: PortfolioItemOrderByRelationAggregateInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    nome?: StringFilter<"Portfolio"> | string
    descricao?: StringNullableFilter<"Portfolio"> | string | null
    usuarioId?: StringFilter<"Portfolio"> | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    itens?: PortfolioItemListRelationFilter
  }, "id">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Portfolio"> | string
    nome?: StringWithAggregatesFilter<"Portfolio"> | string
    descricao?: StringNullableWithAggregatesFilter<"Portfolio"> | string | null
    usuarioId?: StringWithAggregatesFilter<"Portfolio"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
  }

  export type PortfolioItemWhereInput = {
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    id?: StringFilter<"PortfolioItem"> | string
    portfolioId?: StringFilter<"PortfolioItem"> | string
    investimentoId?: StringFilter<"PortfolioItem"> | string
    quantidade?: IntFilter<"PortfolioItem"> | number
    precoCompra?: FloatFilter<"PortfolioItem"> | number
    dataCompra?: DateTimeFilter<"PortfolioItem"> | Date | string
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    portfolio?: XOR<PortfolioRelationFilter, PortfolioWhereInput>
    investimento?: XOR<InvestimentoRelationFilter, InvestimentoWhereInput>
  }

  export type PortfolioItemOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    quantidade?: SortOrder
    precoCompra?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    portfolio?: PortfolioOrderByWithRelationInput
    investimento?: InvestimentoOrderByWithRelationInput
  }

  export type PortfolioItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    portfolioId_investimentoId?: PortfolioItemPortfolioIdInvestimentoIdCompoundUniqueInput
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    portfolioId?: StringFilter<"PortfolioItem"> | string
    investimentoId?: StringFilter<"PortfolioItem"> | string
    quantidade?: IntFilter<"PortfolioItem"> | number
    precoCompra?: FloatFilter<"PortfolioItem"> | number
    dataCompra?: DateTimeFilter<"PortfolioItem"> | Date | string
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    portfolio?: XOR<PortfolioRelationFilter, PortfolioWhereInput>
    investimento?: XOR<InvestimentoRelationFilter, InvestimentoWhereInput>
  }, "id" | "portfolioId_investimentoId">

  export type PortfolioItemOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    quantidade?: SortOrder
    precoCompra?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioItemCountOrderByAggregateInput
    _avg?: PortfolioItemAvgOrderByAggregateInput
    _max?: PortfolioItemMaxOrderByAggregateInput
    _min?: PortfolioItemMinOrderByAggregateInput
    _sum?: PortfolioItemSumOrderByAggregateInput
  }

  export type PortfolioItemScalarWhereWithAggregatesInput = {
    AND?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    OR?: PortfolioItemScalarWhereWithAggregatesInput[]
    NOT?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortfolioItem"> | string
    portfolioId?: StringWithAggregatesFilter<"PortfolioItem"> | string
    investimentoId?: StringWithAggregatesFilter<"PortfolioItem"> | string
    quantidade?: IntWithAggregatesFilter<"PortfolioItem"> | number
    precoCompra?: FloatWithAggregatesFilter<"PortfolioItem"> | number
    dataCompra?: DateTimeWithAggregatesFilter<"PortfolioItem"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PortfolioItem"> | Date | string
  }

  export type FavoritoWhereInput = {
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    id?: StringFilter<"Favorito"> | string
    usuarioId?: StringFilter<"Favorito"> | string
    investimentoId?: StringFilter<"Favorito"> | string
    dataAdicao?: DateTimeFilter<"Favorito"> | Date | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    investimento?: XOR<InvestimentoRelationFilter, InvestimentoWhereInput>
  }

  export type FavoritoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    dataAdicao?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    investimento?: InvestimentoOrderByWithRelationInput
  }

  export type FavoritoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    usuarioId_investimentoId?: FavoritoUsuarioIdInvestimentoIdCompoundUniqueInput
    AND?: FavoritoWhereInput | FavoritoWhereInput[]
    OR?: FavoritoWhereInput[]
    NOT?: FavoritoWhereInput | FavoritoWhereInput[]
    usuarioId?: StringFilter<"Favorito"> | string
    investimentoId?: StringFilter<"Favorito"> | string
    dataAdicao?: DateTimeFilter<"Favorito"> | Date | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
    investimento?: XOR<InvestimentoRelationFilter, InvestimentoWhereInput>
  }, "id" | "usuarioId_investimentoId">

  export type FavoritoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    dataAdicao?: SortOrder
    createdAt?: SortOrder
    _count?: FavoritoCountOrderByAggregateInput
    _max?: FavoritoMaxOrderByAggregateInput
    _min?: FavoritoMinOrderByAggregateInput
  }

  export type FavoritoScalarWhereWithAggregatesInput = {
    AND?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    OR?: FavoritoScalarWhereWithAggregatesInput[]
    NOT?: FavoritoScalarWhereWithAggregatesInput | FavoritoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favorito"> | string
    usuarioId?: StringWithAggregatesFilter<"Favorito"> | string
    investimentoId?: StringWithAggregatesFilter<"Favorito"> | string
    dataAdicao?: DateTimeWithAggregatesFilter<"Favorito"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorito"> | Date | string
  }

  export type NotificacaoWhereInput = {
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    usuarioId?: StringFilter<"Notificacao"> | string
    message?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }

  export type NotificacaoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    message?: SortOrder
    lida?: SortOrder
    dataEnvio?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type NotificacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificacaoWhereInput | NotificacaoWhereInput[]
    OR?: NotificacaoWhereInput[]
    NOT?: NotificacaoWhereInput | NotificacaoWhereInput[]
    usuarioId?: StringFilter<"Notificacao"> | string
    message?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
    usuario?: XOR<UsuarioRelationFilter, UsuarioWhereInput>
  }, "id">

  export type NotificacaoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    message?: SortOrder
    lida?: SortOrder
    dataEnvio?: SortOrder
    createdAt?: SortOrder
    _count?: NotificacaoCountOrderByAggregateInput
    _max?: NotificacaoMaxOrderByAggregateInput
    _min?: NotificacaoMinOrderByAggregateInput
  }

  export type NotificacaoScalarWhereWithAggregatesInput = {
    AND?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    OR?: NotificacaoScalarWhereWithAggregatesInput[]
    NOT?: NotificacaoScalarWhereWithAggregatesInput | NotificacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notificacao"> | string
    usuarioId?: StringWithAggregatesFilter<"Notificacao"> | string
    message?: StringWithAggregatesFilter<"Notificacao"> | string
    lida?: BoolWithAggregatesFilter<"Notificacao"> | boolean
    dataEnvio?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Notificacao"> | Date | string
  }

  export type SystemLogWhereInput = {
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    id?: StringFilter<"SystemLog"> | string
    type?: StringFilter<"SystemLog"> | string
    message?: StringFilter<"SystemLog"> | string
    source?: StringFilter<"SystemLog"> | string
    operation?: StringNullableFilter<"SystemLog"> | string | null
    executionTime?: FloatNullableFilter<"SystemLog"> | number | null
    userId?: StringNullableFilter<"SystemLog"> | string | null
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
  }

  export type SystemLogOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    source?: SortOrder
    operation?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    type?: StringFilter<"SystemLog"> | string
    message?: StringFilter<"SystemLog"> | string
    source?: StringFilter<"SystemLog"> | string
    operation?: StringNullableFilter<"SystemLog"> | string | null
    executionTime?: FloatNullableFilter<"SystemLog"> | number | null
    userId?: StringNullableFilter<"SystemLog"> | string | null
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
  }, "id">

  export type SystemLogOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    source?: SortOrder
    operation?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SystemLogCountOrderByAggregateInput
    _avg?: SystemLogAvgOrderByAggregateInput
    _max?: SystemLogMaxOrderByAggregateInput
    _min?: SystemLogMinOrderByAggregateInput
    _sum?: SystemLogSumOrderByAggregateInput
  }

  export type SystemLogScalarWhereWithAggregatesInput = {
    AND?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    OR?: SystemLogScalarWhereWithAggregatesInput[]
    NOT?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemLog"> | string
    type?: StringWithAggregatesFilter<"SystemLog"> | string
    message?: StringWithAggregatesFilter<"SystemLog"> | string
    source?: StringWithAggregatesFilter<"SystemLog"> | string
    operation?: StringNullableWithAggregatesFilter<"SystemLog"> | string | null
    executionTime?: FloatNullableWithAggregatesFilter<"SystemLog"> | number | null
    userId?: StringNullableWithAggregatesFilter<"SystemLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SystemLog"> | Date | string
  }

  export type MarketDataWhereInput = {
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    id?: StringFilter<"MarketData"> | string
    codigo?: StringFilter<"MarketData"> | string
    preco?: FloatFilter<"MarketData"> | number
    variacao?: FloatFilter<"MarketData"> | number
    volume?: BigIntFilter<"MarketData"> | bigint | number
    dataHora?: DateTimeFilter<"MarketData"> | Date | string
    createdAt?: DateTimeFilter<"MarketData"> | Date | string
  }

  export type MarketDataOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    variacao?: SortOrder
    volume?: SortOrder
    dataHora?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codigo?: string
    AND?: MarketDataWhereInput | MarketDataWhereInput[]
    OR?: MarketDataWhereInput[]
    NOT?: MarketDataWhereInput | MarketDataWhereInput[]
    preco?: FloatFilter<"MarketData"> | number
    variacao?: FloatFilter<"MarketData"> | number
    volume?: BigIntFilter<"MarketData"> | bigint | number
    dataHora?: DateTimeFilter<"MarketData"> | Date | string
    createdAt?: DateTimeFilter<"MarketData"> | Date | string
  }, "id" | "codigo">

  export type MarketDataOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    variacao?: SortOrder
    volume?: SortOrder
    dataHora?: SortOrder
    createdAt?: SortOrder
    _count?: MarketDataCountOrderByAggregateInput
    _avg?: MarketDataAvgOrderByAggregateInput
    _max?: MarketDataMaxOrderByAggregateInput
    _min?: MarketDataMinOrderByAggregateInput
    _sum?: MarketDataSumOrderByAggregateInput
  }

  export type MarketDataScalarWhereWithAggregatesInput = {
    AND?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    OR?: MarketDataScalarWhereWithAggregatesInput[]
    NOT?: MarketDataScalarWhereWithAggregatesInput | MarketDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketData"> | string
    codigo?: StringWithAggregatesFilter<"MarketData"> | string
    preco?: FloatWithAggregatesFilter<"MarketData"> | number
    variacao?: FloatWithAggregatesFilter<"MarketData"> | number
    volume?: BigIntWithAggregatesFilter<"MarketData"> | bigint | number
    dataHora?: DateTimeWithAggregatesFilter<"MarketData"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MarketData"> | Date | string
  }

  export type TransacaoWhereInput = {
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    id?: StringFilter<"Transacao"> | string
    portfolioId?: StringFilter<"Transacao"> | string
    investimentoId?: StringFilter<"Transacao"> | string
    tipo?: StringFilter<"Transacao"> | string
    quantidade?: IntFilter<"Transacao"> | number
    preco?: FloatFilter<"Transacao"> | number
    taxas?: FloatNullableFilter<"Transacao"> | number | null
    dataTransacao?: DateTimeFilter<"Transacao"> | Date | string
    observacoes?: StringNullableFilter<"Transacao"> | string | null
    createdAt?: DateTimeFilter<"Transacao"> | Date | string
  }

  export type TransacaoOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    taxas?: SortOrderInput | SortOrder
    dataTransacao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type TransacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransacaoWhereInput | TransacaoWhereInput[]
    OR?: TransacaoWhereInput[]
    NOT?: TransacaoWhereInput | TransacaoWhereInput[]
    portfolioId?: StringFilter<"Transacao"> | string
    investimentoId?: StringFilter<"Transacao"> | string
    tipo?: StringFilter<"Transacao"> | string
    quantidade?: IntFilter<"Transacao"> | number
    preco?: FloatFilter<"Transacao"> | number
    taxas?: FloatNullableFilter<"Transacao"> | number | null
    dataTransacao?: DateTimeFilter<"Transacao"> | Date | string
    observacoes?: StringNullableFilter<"Transacao"> | string | null
    createdAt?: DateTimeFilter<"Transacao"> | Date | string
  }, "id">

  export type TransacaoOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    taxas?: SortOrderInput | SortOrder
    dataTransacao?: SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransacaoCountOrderByAggregateInput
    _avg?: TransacaoAvgOrderByAggregateInput
    _max?: TransacaoMaxOrderByAggregateInput
    _min?: TransacaoMinOrderByAggregateInput
    _sum?: TransacaoSumOrderByAggregateInput
  }

  export type TransacaoScalarWhereWithAggregatesInput = {
    AND?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    OR?: TransacaoScalarWhereWithAggregatesInput[]
    NOT?: TransacaoScalarWhereWithAggregatesInput | TransacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transacao"> | string
    portfolioId?: StringWithAggregatesFilter<"Transacao"> | string
    investimentoId?: StringWithAggregatesFilter<"Transacao"> | string
    tipo?: StringWithAggregatesFilter<"Transacao"> | string
    quantidade?: IntWithAggregatesFilter<"Transacao"> | number
    preco?: FloatWithAggregatesFilter<"Transacao"> | number
    taxas?: FloatNullableWithAggregatesFilter<"Transacao"> | number | null
    dataTransacao?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
    observacoes?: StringNullableWithAggregatesFilter<"Transacao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transacao"> | Date | string
  }

  export type AlertaPrecoWhereInput = {
    AND?: AlertaPrecoWhereInput | AlertaPrecoWhereInput[]
    OR?: AlertaPrecoWhereInput[]
    NOT?: AlertaPrecoWhereInput | AlertaPrecoWhereInput[]
    id?: StringFilter<"AlertaPreco"> | string
    usuarioId?: StringFilter<"AlertaPreco"> | string
    investimentoId?: StringFilter<"AlertaPreco"> | string
    precoAlvo?: FloatFilter<"AlertaPreco"> | number
    condicao?: StringFilter<"AlertaPreco"> | string
    ativo?: BoolFilter<"AlertaPreco"> | boolean
    dataDisparo?: DateTimeNullableFilter<"AlertaPreco"> | Date | string | null
    createdAt?: DateTimeFilter<"AlertaPreco"> | Date | string
    updatedAt?: DateTimeFilter<"AlertaPreco"> | Date | string
  }

  export type AlertaPrecoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    precoAlvo?: SortOrder
    condicao?: SortOrder
    ativo?: SortOrder
    dataDisparo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertaPrecoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertaPrecoWhereInput | AlertaPrecoWhereInput[]
    OR?: AlertaPrecoWhereInput[]
    NOT?: AlertaPrecoWhereInput | AlertaPrecoWhereInput[]
    usuarioId?: StringFilter<"AlertaPreco"> | string
    investimentoId?: StringFilter<"AlertaPreco"> | string
    precoAlvo?: FloatFilter<"AlertaPreco"> | number
    condicao?: StringFilter<"AlertaPreco"> | string
    ativo?: BoolFilter<"AlertaPreco"> | boolean
    dataDisparo?: DateTimeNullableFilter<"AlertaPreco"> | Date | string | null
    createdAt?: DateTimeFilter<"AlertaPreco"> | Date | string
    updatedAt?: DateTimeFilter<"AlertaPreco"> | Date | string
  }, "id">

  export type AlertaPrecoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    precoAlvo?: SortOrder
    condicao?: SortOrder
    ativo?: SortOrder
    dataDisparo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertaPrecoCountOrderByAggregateInput
    _avg?: AlertaPrecoAvgOrderByAggregateInput
    _max?: AlertaPrecoMaxOrderByAggregateInput
    _min?: AlertaPrecoMinOrderByAggregateInput
    _sum?: AlertaPrecoSumOrderByAggregateInput
  }

  export type AlertaPrecoScalarWhereWithAggregatesInput = {
    AND?: AlertaPrecoScalarWhereWithAggregatesInput | AlertaPrecoScalarWhereWithAggregatesInput[]
    OR?: AlertaPrecoScalarWhereWithAggregatesInput[]
    NOT?: AlertaPrecoScalarWhereWithAggregatesInput | AlertaPrecoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AlertaPreco"> | string
    usuarioId?: StringWithAggregatesFilter<"AlertaPreco"> | string
    investimentoId?: StringWithAggregatesFilter<"AlertaPreco"> | string
    precoAlvo?: FloatWithAggregatesFilter<"AlertaPreco"> | number
    condicao?: StringWithAggregatesFilter<"AlertaPreco"> | string
    ativo?: BoolWithAggregatesFilter<"AlertaPreco"> | boolean
    dataDisparo?: DateTimeNullableWithAggregatesFilter<"AlertaPreco"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AlertaPreco"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AlertaPreco"> | Date | string
  }

  export type RelatorioPerformanceWhereInput = {
    AND?: RelatorioPerformanceWhereInput | RelatorioPerformanceWhereInput[]
    OR?: RelatorioPerformanceWhereInput[]
    NOT?: RelatorioPerformanceWhereInput | RelatorioPerformanceWhereInput[]
    id?: StringFilter<"RelatorioPerformance"> | string
    portfolioId?: StringFilter<"RelatorioPerformance"> | string
    periodo?: StringFilter<"RelatorioPerformance"> | string
    valorInicial?: FloatFilter<"RelatorioPerformance"> | number
    valorFinal?: FloatFilter<"RelatorioPerformance"> | number
    rentabilidade?: FloatFilter<"RelatorioPerformance"> | number
    benchmark?: FloatNullableFilter<"RelatorioPerformance"> | number | null
    dataInicio?: DateTimeFilter<"RelatorioPerformance"> | Date | string
    dataFim?: DateTimeFilter<"RelatorioPerformance"> | Date | string
    createdAt?: DateTimeFilter<"RelatorioPerformance"> | Date | string
  }

  export type RelatorioPerformanceOrderByWithRelationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    periodo?: SortOrder
    valorInicial?: SortOrder
    valorFinal?: SortOrder
    rentabilidade?: SortOrder
    benchmark?: SortOrderInput | SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    createdAt?: SortOrder
  }

  export type RelatorioPerformanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RelatorioPerformanceWhereInput | RelatorioPerformanceWhereInput[]
    OR?: RelatorioPerformanceWhereInput[]
    NOT?: RelatorioPerformanceWhereInput | RelatorioPerformanceWhereInput[]
    portfolioId?: StringFilter<"RelatorioPerformance"> | string
    periodo?: StringFilter<"RelatorioPerformance"> | string
    valorInicial?: FloatFilter<"RelatorioPerformance"> | number
    valorFinal?: FloatFilter<"RelatorioPerformance"> | number
    rentabilidade?: FloatFilter<"RelatorioPerformance"> | number
    benchmark?: FloatNullableFilter<"RelatorioPerformance"> | number | null
    dataInicio?: DateTimeFilter<"RelatorioPerformance"> | Date | string
    dataFim?: DateTimeFilter<"RelatorioPerformance"> | Date | string
    createdAt?: DateTimeFilter<"RelatorioPerformance"> | Date | string
  }, "id">

  export type RelatorioPerformanceOrderByWithAggregationInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    periodo?: SortOrder
    valorInicial?: SortOrder
    valorFinal?: SortOrder
    rentabilidade?: SortOrder
    benchmark?: SortOrderInput | SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    createdAt?: SortOrder
    _count?: RelatorioPerformanceCountOrderByAggregateInput
    _avg?: RelatorioPerformanceAvgOrderByAggregateInput
    _max?: RelatorioPerformanceMaxOrderByAggregateInput
    _min?: RelatorioPerformanceMinOrderByAggregateInput
    _sum?: RelatorioPerformanceSumOrderByAggregateInput
  }

  export type RelatorioPerformanceScalarWhereWithAggregatesInput = {
    AND?: RelatorioPerformanceScalarWhereWithAggregatesInput | RelatorioPerformanceScalarWhereWithAggregatesInput[]
    OR?: RelatorioPerformanceScalarWhereWithAggregatesInput[]
    NOT?: RelatorioPerformanceScalarWhereWithAggregatesInput | RelatorioPerformanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RelatorioPerformance"> | string
    portfolioId?: StringWithAggregatesFilter<"RelatorioPerformance"> | string
    periodo?: StringWithAggregatesFilter<"RelatorioPerformance"> | string
    valorInicial?: FloatWithAggregatesFilter<"RelatorioPerformance"> | number
    valorFinal?: FloatWithAggregatesFilter<"RelatorioPerformance"> | number
    rentabilidade?: FloatWithAggregatesFilter<"RelatorioPerformance"> | number
    benchmark?: FloatNullableWithAggregatesFilter<"RelatorioPerformance"> | number | null
    dataInicio?: DateTimeWithAggregatesFilter<"RelatorioPerformance"> | Date | string
    dataFim?: DateTimeWithAggregatesFilter<"RelatorioPerformance"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RelatorioPerformance"> | Date | string
  }

  export type UsuarioCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestimentoCreateInput = {
    id?: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico?: InvestimentoCreatehistoricoInput | number[]
    volatilidade?: number | null
    dividendYield?: number | null
    taxaJuros?: number | null
    dataVencimento?: Date | string | null
    taxaAdministracao?: number | null
    patrimonioTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioItems?: PortfolioItemCreateNestedManyWithoutInvestimentoInput
    favoritos?: FavoritoCreateNestedManyWithoutInvestimentoInput
  }

  export type InvestimentoUncheckedCreateInput = {
    id?: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico?: InvestimentoCreatehistoricoInput | number[]
    volatilidade?: number | null
    dividendYield?: number | null
    taxaJuros?: number | null
    dataVencimento?: Date | string | null
    taxaAdministracao?: number | null
    patrimonioTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioItems?: PortfolioItemUncheckedCreateNestedManyWithoutInvestimentoInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutInvestimentoInput
  }

  export type InvestimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioItems?: PortfolioItemUpdateManyWithoutInvestimentoNestedInput
    favoritos?: FavoritoUpdateManyWithoutInvestimentoNestedInput
  }

  export type InvestimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioItems?: PortfolioItemUncheckedUpdateManyWithoutInvestimentoNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutInvestimentoNestedInput
  }

  export type InvestimentoCreateManyInput = {
    id?: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico?: InvestimentoCreatehistoricoInput | number[]
    volatilidade?: number | null
    dividendYield?: number | null
    taxaJuros?: number | null
    dataVencimento?: Date | string | null
    taxaAdministracao?: number | null
    patrimonioTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvestimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPortfoliosInput
    itens?: PortfolioItemCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: string
    nome: string
    descricao?: string | null
    usuarioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: PortfolioItemUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPortfoliosNestedInput
    itens?: PortfolioItemUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: PortfolioItemUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioCreateManyInput = {
    id?: string
    nome: string
    descricao?: string | null
    usuarioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateInput = {
    id?: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutItensInput
    investimento: InvestimentoCreateNestedOneWithoutPortfolioItemsInput
  }

  export type PortfolioItemUncheckedCreateInput = {
    id?: string
    portfolioId: string
    investimentoId: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutItensNestedInput
    investimento?: InvestimentoUpdateOneRequiredWithoutPortfolioItemsNestedInput
  }

  export type PortfolioItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateManyInput = {
    id?: string
    portfolioId: string
    investimentoId: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateInput = {
    id?: string
    dataAdicao?: Date | string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
    investimento: InvestimentoCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    investimentoId: string
    dataAdicao?: Date | string
    createdAt?: Date | string
  }

  export type FavoritoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
    investimento?: InvestimentoUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoCreateManyInput = {
    id?: string
    usuarioId: string
    investimentoId: string
    dataAdicao?: Date | string
    createdAt?: Date | string
  }

  export type FavoritoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateInput = {
    id?: string
    message: string
    lida?: boolean
    dataEnvio?: Date | string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutNotificacoesInput
  }

  export type NotificacaoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    message: string
    lida?: boolean
    dataEnvio?: Date | string
    createdAt?: Date | string
  }

  export type NotificacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput
  }

  export type NotificacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoCreateManyInput = {
    id?: string
    usuarioId: string
    message: string
    lida?: boolean
    dataEnvio?: Date | string
    createdAt?: Date | string
  }

  export type NotificacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogCreateInput = {
    id?: string
    type: string
    message: string
    source: string
    operation?: string | null
    executionTime?: number | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type SystemLogUncheckedCreateInput = {
    id?: string
    type: string
    message: string
    source: string
    operation?: string | null
    executionTime?: number | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type SystemLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    operation?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    operation?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogCreateManyInput = {
    id?: string
    type: string
    message: string
    source: string
    operation?: string | null
    executionTime?: number | null
    userId?: string | null
    createdAt?: Date | string
  }

  export type SystemLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    operation?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    operation?: NullableStringFieldUpdateOperationsInput | string | null
    executionTime?: NullableFloatFieldUpdateOperationsInput | number | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataCreateInput = {
    id?: string
    codigo: string
    preco: number
    variacao: number
    volume: bigint | number
    dataHora?: Date | string
    createdAt?: Date | string
  }

  export type MarketDataUncheckedCreateInput = {
    id?: string
    codigo: string
    preco: number
    variacao: number
    volume: bigint | number
    dataHora?: Date | string
    createdAt?: Date | string
  }

  export type MarketDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    variacao?: FloatFieldUpdateOperationsInput | number
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    variacao?: FloatFieldUpdateOperationsInput | number
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataCreateManyInput = {
    id?: string
    codigo: string
    preco: number
    variacao: number
    volume: bigint | number
    dataHora?: Date | string
    createdAt?: Date | string
  }

  export type MarketDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    variacao?: FloatFieldUpdateOperationsInput | number
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    preco?: FloatFieldUpdateOperationsInput | number
    variacao?: FloatFieldUpdateOperationsInput | number
    volume?: BigIntFieldUpdateOperationsInput | bigint | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoCreateInput = {
    id?: string
    portfolioId: string
    investimentoId: string
    tipo: string
    quantidade: number
    preco: number
    taxas?: number | null
    dataTransacao?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
  }

  export type TransacaoUncheckedCreateInput = {
    id?: string
    portfolioId: string
    investimentoId: string
    tipo: string
    quantidade: number
    preco: number
    taxas?: number | null
    dataTransacao?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
  }

  export type TransacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    taxas?: NullableFloatFieldUpdateOperationsInput | number | null
    dataTransacao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    taxas?: NullableFloatFieldUpdateOperationsInput | number | null
    dataTransacao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoCreateManyInput = {
    id?: string
    portfolioId: string
    investimentoId: string
    tipo: string
    quantidade: number
    preco: number
    taxas?: number | null
    dataTransacao?: Date | string
    observacoes?: string | null
    createdAt?: Date | string
  }

  export type TransacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    taxas?: NullableFloatFieldUpdateOperationsInput | number | null
    dataTransacao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    taxas?: NullableFloatFieldUpdateOperationsInput | number | null
    dataTransacao?: DateTimeFieldUpdateOperationsInput | Date | string
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaPrecoCreateInput = {
    id?: string
    usuarioId: string
    investimentoId: string
    precoAlvo: number
    condicao: string
    ativo?: boolean
    dataDisparo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertaPrecoUncheckedCreateInput = {
    id?: string
    usuarioId: string
    investimentoId: string
    precoAlvo: number
    condicao: string
    ativo?: boolean
    dataDisparo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertaPrecoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    precoAlvo?: FloatFieldUpdateOperationsInput | number
    condicao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataDisparo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaPrecoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    precoAlvo?: FloatFieldUpdateOperationsInput | number
    condicao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataDisparo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaPrecoCreateManyInput = {
    id?: string
    usuarioId: string
    investimentoId: string
    precoAlvo: number
    condicao: string
    ativo?: boolean
    dataDisparo?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertaPrecoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    precoAlvo?: FloatFieldUpdateOperationsInput | number
    condicao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataDisparo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertaPrecoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    precoAlvo?: FloatFieldUpdateOperationsInput | number
    condicao?: StringFieldUpdateOperationsInput | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    dataDisparo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioPerformanceCreateInput = {
    id?: string
    portfolioId: string
    periodo: string
    valorInicial: number
    valorFinal: number
    rentabilidade: number
    benchmark?: number | null
    dataInicio: Date | string
    dataFim: Date | string
    createdAt?: Date | string
  }

  export type RelatorioPerformanceUncheckedCreateInput = {
    id?: string
    portfolioId: string
    periodo: string
    valorInicial: number
    valorFinal: number
    rentabilidade: number
    benchmark?: number | null
    dataInicio: Date | string
    dataFim: Date | string
    createdAt?: Date | string
  }

  export type RelatorioPerformanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    valorInicial?: FloatFieldUpdateOperationsInput | number
    valorFinal?: FloatFieldUpdateOperationsInput | number
    rentabilidade?: FloatFieldUpdateOperationsInput | number
    benchmark?: NullableFloatFieldUpdateOperationsInput | number | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioPerformanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    valorInicial?: FloatFieldUpdateOperationsInput | number
    valorFinal?: FloatFieldUpdateOperationsInput | number
    rentabilidade?: FloatFieldUpdateOperationsInput | number
    benchmark?: NullableFloatFieldUpdateOperationsInput | number | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioPerformanceCreateManyInput = {
    id?: string
    portfolioId: string
    periodo: string
    valorInicial: number
    valorFinal: number
    rentabilidade: number
    benchmark?: number | null
    dataInicio: Date | string
    dataFim: Date | string
    createdAt?: Date | string
  }

  export type RelatorioPerformanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    valorInicial?: FloatFieldUpdateOperationsInput | number
    valorFinal?: FloatFieldUpdateOperationsInput | number
    rentabilidade?: FloatFieldUpdateOperationsInput | number
    benchmark?: NullableFloatFieldUpdateOperationsInput | number | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelatorioPerformanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    periodo?: StringFieldUpdateOperationsInput | string
    valorInicial?: FloatFieldUpdateOperationsInput | number
    valorFinal?: FloatFieldUpdateOperationsInput | number
    rentabilidade?: FloatFieldUpdateOperationsInput | number
    benchmark?: NullableFloatFieldUpdateOperationsInput | number | null
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataFim?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PortfolioListRelationFilter = {
    every?: PortfolioWhereInput
    some?: PortfolioWhereInput
    none?: PortfolioWhereInput
  }

  export type FavoritoListRelationFilter = {
    every?: FavoritoWhereInput
    some?: FavoritoWhereInput
    none?: FavoritoWhereInput
  }

  export type NotificacaoListRelationFilter = {
    every?: NotificacaoWhereInput
    some?: NotificacaoWhereInput
    none?: NotificacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoritoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    ultimoLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    ultimoLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCriacao?: SortOrder
    ultimoLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTipoInvestimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInvestimento | EnumTipoInvestimentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInvestimentoFilter<$PrismaModel> | $Enums.TipoInvestimento
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PortfolioItemListRelationFilter = {
    every?: PortfolioItemWhereInput
    some?: PortfolioItemWhereInput
    none?: PortfolioItemWhereInput
  }

  export type PortfolioItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestimentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    historico?: SortOrder
    volatilidade?: SortOrder
    dividendYield?: SortOrder
    taxaJuros?: SortOrder
    dataVencimento?: SortOrder
    taxaAdministracao?: SortOrder
    patrimonioTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestimentoAvgOrderByAggregateInput = {
    historico?: SortOrder
    volatilidade?: SortOrder
    dividendYield?: SortOrder
    taxaJuros?: SortOrder
    taxaAdministracao?: SortOrder
    patrimonioTotal?: SortOrder
  }

  export type InvestimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    volatilidade?: SortOrder
    dividendYield?: SortOrder
    taxaJuros?: SortOrder
    dataVencimento?: SortOrder
    taxaAdministracao?: SortOrder
    patrimonioTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestimentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo?: SortOrder
    tipo?: SortOrder
    volatilidade?: SortOrder
    dividendYield?: SortOrder
    taxaJuros?: SortOrder
    dataVencimento?: SortOrder
    taxaAdministracao?: SortOrder
    patrimonioTotal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvestimentoSumOrderByAggregateInput = {
    historico?: SortOrder
    volatilidade?: SortOrder
    dividendYield?: SortOrder
    taxaJuros?: SortOrder
    taxaAdministracao?: SortOrder
    patrimonioTotal?: SortOrder
  }

  export type EnumTipoInvestimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInvestimento | EnumTipoInvestimentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInvestimentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoInvestimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoInvestimentoFilter<$PrismaModel>
    _max?: NestedEnumTipoInvestimentoFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsuarioRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    usuarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PortfolioRelationFilter = {
    is?: PortfolioWhereInput
    isNot?: PortfolioWhereInput
  }

  export type InvestimentoRelationFilter = {
    is?: InvestimentoWhereInput
    isNot?: InvestimentoWhereInput
  }

  export type PortfolioItemPortfolioIdInvestimentoIdCompoundUniqueInput = {
    portfolioId: string
    investimentoId: string
  }

  export type PortfolioItemCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    quantidade?: SortOrder
    precoCompra?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioItemAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    precoCompra?: SortOrder
  }

  export type PortfolioItemMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    quantidade?: SortOrder
    precoCompra?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioItemMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    quantidade?: SortOrder
    precoCompra?: SortOrder
    dataCompra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioItemSumOrderByAggregateInput = {
    quantidade?: SortOrder
    precoCompra?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FavoritoUsuarioIdInvestimentoIdCompoundUniqueInput = {
    usuarioId: string
    investimentoId: string
  }

  export type FavoritoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    dataAdicao?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    dataAdicao?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoritoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    dataAdicao?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificacaoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    message?: SortOrder
    lida?: SortOrder
    dataEnvio?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    message?: SortOrder
    lida?: SortOrder
    dataEnvio?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificacaoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    message?: SortOrder
    lida?: SortOrder
    dataEnvio?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SystemLogCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    source?: SortOrder
    operation?: SortOrder
    executionTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogAvgOrderByAggregateInput = {
    executionTime?: SortOrder
  }

  export type SystemLogMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    source?: SortOrder
    operation?: SortOrder
    executionTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    source?: SortOrder
    operation?: SortOrder
    executionTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogSumOrderByAggregateInput = {
    executionTime?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type MarketDataCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    variacao?: SortOrder
    volume?: SortOrder
    dataHora?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketDataAvgOrderByAggregateInput = {
    preco?: SortOrder
    variacao?: SortOrder
    volume?: SortOrder
  }

  export type MarketDataMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    variacao?: SortOrder
    volume?: SortOrder
    dataHora?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketDataMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    preco?: SortOrder
    variacao?: SortOrder
    volume?: SortOrder
    dataHora?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketDataSumOrderByAggregateInput = {
    preco?: SortOrder
    variacao?: SortOrder
    volume?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type TransacaoCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    taxas?: SortOrder
    dataTransacao?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
  }

  export type TransacaoAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    preco?: SortOrder
    taxas?: SortOrder
  }

  export type TransacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    taxas?: SortOrder
    dataTransacao?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
  }

  export type TransacaoMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    investimentoId?: SortOrder
    tipo?: SortOrder
    quantidade?: SortOrder
    preco?: SortOrder
    taxas?: SortOrder
    dataTransacao?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
  }

  export type TransacaoSumOrderByAggregateInput = {
    quantidade?: SortOrder
    preco?: SortOrder
    taxas?: SortOrder
  }

  export type AlertaPrecoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    precoAlvo?: SortOrder
    condicao?: SortOrder
    ativo?: SortOrder
    dataDisparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertaPrecoAvgOrderByAggregateInput = {
    precoAlvo?: SortOrder
  }

  export type AlertaPrecoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    precoAlvo?: SortOrder
    condicao?: SortOrder
    ativo?: SortOrder
    dataDisparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertaPrecoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    investimentoId?: SortOrder
    precoAlvo?: SortOrder
    condicao?: SortOrder
    ativo?: SortOrder
    dataDisparo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertaPrecoSumOrderByAggregateInput = {
    precoAlvo?: SortOrder
  }

  export type RelatorioPerformanceCountOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    periodo?: SortOrder
    valorInicial?: SortOrder
    valorFinal?: SortOrder
    rentabilidade?: SortOrder
    benchmark?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    createdAt?: SortOrder
  }

  export type RelatorioPerformanceAvgOrderByAggregateInput = {
    valorInicial?: SortOrder
    valorFinal?: SortOrder
    rentabilidade?: SortOrder
    benchmark?: SortOrder
  }

  export type RelatorioPerformanceMaxOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    periodo?: SortOrder
    valorInicial?: SortOrder
    valorFinal?: SortOrder
    rentabilidade?: SortOrder
    benchmark?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    createdAt?: SortOrder
  }

  export type RelatorioPerformanceMinOrderByAggregateInput = {
    id?: SortOrder
    portfolioId?: SortOrder
    periodo?: SortOrder
    valorInicial?: SortOrder
    valorFinal?: SortOrder
    rentabilidade?: SortOrder
    benchmark?: SortOrder
    dataInicio?: SortOrder
    dataFim?: SortOrder
    createdAt?: SortOrder
  }

  export type RelatorioPerformanceSumOrderByAggregateInput = {
    valorInicial?: SortOrder
    valorFinal?: SortOrder
    rentabilidade?: SortOrder
    benchmark?: SortOrder
  }

  export type PortfolioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type NotificacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type PortfolioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PortfolioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUsuarioInput | PortfolioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUsuarioInput | PortfolioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUsuarioInput | PortfolioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type NotificacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUsuarioInput | PortfolioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUsuarioInput | PortfolioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUsuarioInput | PortfolioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput> | FavoritoCreateWithoutUsuarioInput[] | FavoritoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutUsuarioInput | FavoritoCreateOrConnectWithoutUsuarioInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutUsuarioInput | FavoritoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: FavoritoCreateManyUsuarioInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutUsuarioInput | FavoritoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutUsuarioInput | FavoritoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput> | NotificacaoCreateWithoutUsuarioInput[] | NotificacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NotificacaoCreateOrConnectWithoutUsuarioInput | NotificacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput | NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NotificacaoCreateManyUsuarioInputEnvelope
    set?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    disconnect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    delete?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    connect?: NotificacaoWhereUniqueInput | NotificacaoWhereUniqueInput[]
    update?: NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput | NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NotificacaoUpdateManyWithWhereWithoutUsuarioInput | NotificacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
  }

  export type InvestimentoCreatehistoricoInput = {
    set: number[]
  }

  export type PortfolioItemCreateNestedManyWithoutInvestimentoInput = {
    create?: XOR<PortfolioItemCreateWithoutInvestimentoInput, PortfolioItemUncheckedCreateWithoutInvestimentoInput> | PortfolioItemCreateWithoutInvestimentoInput[] | PortfolioItemUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutInvestimentoInput | PortfolioItemCreateOrConnectWithoutInvestimentoInput[]
    createMany?: PortfolioItemCreateManyInvestimentoInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type FavoritoCreateNestedManyWithoutInvestimentoInput = {
    create?: XOR<FavoritoCreateWithoutInvestimentoInput, FavoritoUncheckedCreateWithoutInvestimentoInput> | FavoritoCreateWithoutInvestimentoInput[] | FavoritoUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInvestimentoInput | FavoritoCreateOrConnectWithoutInvestimentoInput[]
    createMany?: FavoritoCreateManyInvestimentoInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type PortfolioItemUncheckedCreateNestedManyWithoutInvestimentoInput = {
    create?: XOR<PortfolioItemCreateWithoutInvestimentoInput, PortfolioItemUncheckedCreateWithoutInvestimentoInput> | PortfolioItemCreateWithoutInvestimentoInput[] | PortfolioItemUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutInvestimentoInput | PortfolioItemCreateOrConnectWithoutInvestimentoInput[]
    createMany?: PortfolioItemCreateManyInvestimentoInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type FavoritoUncheckedCreateNestedManyWithoutInvestimentoInput = {
    create?: XOR<FavoritoCreateWithoutInvestimentoInput, FavoritoUncheckedCreateWithoutInvestimentoInput> | FavoritoCreateWithoutInvestimentoInput[] | FavoritoUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInvestimentoInput | FavoritoCreateOrConnectWithoutInvestimentoInput[]
    createMany?: FavoritoCreateManyInvestimentoInputEnvelope
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
  }

  export type EnumTipoInvestimentoFieldUpdateOperationsInput = {
    set?: $Enums.TipoInvestimento
  }

  export type InvestimentoUpdatehistoricoInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PortfolioItemUpdateManyWithoutInvestimentoNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutInvestimentoInput, PortfolioItemUncheckedCreateWithoutInvestimentoInput> | PortfolioItemCreateWithoutInvestimentoInput[] | PortfolioItemUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutInvestimentoInput | PortfolioItemCreateOrConnectWithoutInvestimentoInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutInvestimentoInput | PortfolioItemUpsertWithWhereUniqueWithoutInvestimentoInput[]
    createMany?: PortfolioItemCreateManyInvestimentoInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutInvestimentoInput | PortfolioItemUpdateWithWhereUniqueWithoutInvestimentoInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutInvestimentoInput | PortfolioItemUpdateManyWithWhereWithoutInvestimentoInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type FavoritoUpdateManyWithoutInvestimentoNestedInput = {
    create?: XOR<FavoritoCreateWithoutInvestimentoInput, FavoritoUncheckedCreateWithoutInvestimentoInput> | FavoritoCreateWithoutInvestimentoInput[] | FavoritoUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInvestimentoInput | FavoritoCreateOrConnectWithoutInvestimentoInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutInvestimentoInput | FavoritoUpsertWithWhereUniqueWithoutInvestimentoInput[]
    createMany?: FavoritoCreateManyInvestimentoInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutInvestimentoInput | FavoritoUpdateWithWhereUniqueWithoutInvestimentoInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutInvestimentoInput | FavoritoUpdateManyWithWhereWithoutInvestimentoInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type PortfolioItemUncheckedUpdateManyWithoutInvestimentoNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutInvestimentoInput, PortfolioItemUncheckedCreateWithoutInvestimentoInput> | PortfolioItemCreateWithoutInvestimentoInput[] | PortfolioItemUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutInvestimentoInput | PortfolioItemCreateOrConnectWithoutInvestimentoInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutInvestimentoInput | PortfolioItemUpsertWithWhereUniqueWithoutInvestimentoInput[]
    createMany?: PortfolioItemCreateManyInvestimentoInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutInvestimentoInput | PortfolioItemUpdateWithWhereUniqueWithoutInvestimentoInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutInvestimentoInput | PortfolioItemUpdateManyWithWhereWithoutInvestimentoInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type FavoritoUncheckedUpdateManyWithoutInvestimentoNestedInput = {
    create?: XOR<FavoritoCreateWithoutInvestimentoInput, FavoritoUncheckedCreateWithoutInvestimentoInput> | FavoritoCreateWithoutInvestimentoInput[] | FavoritoUncheckedCreateWithoutInvestimentoInput[]
    connectOrCreate?: FavoritoCreateOrConnectWithoutInvestimentoInput | FavoritoCreateOrConnectWithoutInvestimentoInput[]
    upsert?: FavoritoUpsertWithWhereUniqueWithoutInvestimentoInput | FavoritoUpsertWithWhereUniqueWithoutInvestimentoInput[]
    createMany?: FavoritoCreateManyInvestimentoInputEnvelope
    set?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    disconnect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    delete?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    connect?: FavoritoWhereUniqueInput | FavoritoWhereUniqueInput[]
    update?: FavoritoUpdateWithWhereUniqueWithoutInvestimentoInput | FavoritoUpdateWithWhereUniqueWithoutInvestimentoInput[]
    updateMany?: FavoritoUpdateManyWithWhereWithoutInvestimentoInput | FavoritoUpdateManyWithWhereWithoutInvestimentoInput[]
    deleteMany?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPortfoliosInput = {
    create?: XOR<UsuarioCreateWithoutPortfoliosInput, UsuarioUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPortfoliosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PortfolioItemCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioItemCreateWithoutPortfolioInput, PortfolioItemUncheckedCreateWithoutPortfolioInput> | PortfolioItemCreateWithoutPortfolioInput[] | PortfolioItemUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutPortfolioInput | PortfolioItemCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioItemCreateManyPortfolioInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type PortfolioItemUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<PortfolioItemCreateWithoutPortfolioInput, PortfolioItemUncheckedCreateWithoutPortfolioInput> | PortfolioItemCreateWithoutPortfolioInput[] | PortfolioItemUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutPortfolioInput | PortfolioItemCreateOrConnectWithoutPortfolioInput[]
    createMany?: PortfolioItemCreateManyPortfolioInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneRequiredWithoutPortfoliosNestedInput = {
    create?: XOR<UsuarioCreateWithoutPortfoliosInput, UsuarioUncheckedCreateWithoutPortfoliosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPortfoliosInput
    upsert?: UsuarioUpsertWithoutPortfoliosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPortfoliosInput, UsuarioUpdateWithoutPortfoliosInput>, UsuarioUncheckedUpdateWithoutPortfoliosInput>
  }

  export type PortfolioItemUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutPortfolioInput, PortfolioItemUncheckedCreateWithoutPortfolioInput> | PortfolioItemCreateWithoutPortfolioInput[] | PortfolioItemUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutPortfolioInput | PortfolioItemCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioItemUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioItemCreateManyPortfolioInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioItemUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutPortfolioInput | PortfolioItemUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type PortfolioItemUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutPortfolioInput, PortfolioItemUncheckedCreateWithoutPortfolioInput> | PortfolioItemCreateWithoutPortfolioInput[] | PortfolioItemUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutPortfolioInput | PortfolioItemCreateOrConnectWithoutPortfolioInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutPortfolioInput | PortfolioItemUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: PortfolioItemCreateManyPortfolioInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutPortfolioInput | PortfolioItemUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutPortfolioInput | PortfolioItemUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type PortfolioCreateNestedOneWithoutItensInput = {
    create?: XOR<PortfolioCreateWithoutItensInput, PortfolioUncheckedCreateWithoutItensInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutItensInput
    connect?: PortfolioWhereUniqueInput
  }

  export type InvestimentoCreateNestedOneWithoutPortfolioItemsInput = {
    create?: XOR<InvestimentoCreateWithoutPortfolioItemsInput, InvestimentoUncheckedCreateWithoutPortfolioItemsInput>
    connectOrCreate?: InvestimentoCreateOrConnectWithoutPortfolioItemsInput
    connect?: InvestimentoWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PortfolioUpdateOneRequiredWithoutItensNestedInput = {
    create?: XOR<PortfolioCreateWithoutItensInput, PortfolioUncheckedCreateWithoutItensInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutItensInput
    upsert?: PortfolioUpsertWithoutItensInput
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutItensInput, PortfolioUpdateWithoutItensInput>, PortfolioUncheckedUpdateWithoutItensInput>
  }

  export type InvestimentoUpdateOneRequiredWithoutPortfolioItemsNestedInput = {
    create?: XOR<InvestimentoCreateWithoutPortfolioItemsInput, InvestimentoUncheckedCreateWithoutPortfolioItemsInput>
    connectOrCreate?: InvestimentoCreateOrConnectWithoutPortfolioItemsInput
    upsert?: InvestimentoUpsertWithoutPortfolioItemsInput
    connect?: InvestimentoWhereUniqueInput
    update?: XOR<XOR<InvestimentoUpdateToOneWithWhereWithoutPortfolioItemsInput, InvestimentoUpdateWithoutPortfolioItemsInput>, InvestimentoUncheckedUpdateWithoutPortfolioItemsInput>
  }

  export type UsuarioCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type InvestimentoCreateNestedOneWithoutFavoritosInput = {
    create?: XOR<InvestimentoCreateWithoutFavoritosInput, InvestimentoUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: InvestimentoCreateOrConnectWithoutFavoritosInput
    connect?: InvestimentoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutFavoritosInput
    upsert?: UsuarioUpsertWithoutFavoritosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutFavoritosInput, UsuarioUpdateWithoutFavoritosInput>, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type InvestimentoUpdateOneRequiredWithoutFavoritosNestedInput = {
    create?: XOR<InvestimentoCreateWithoutFavoritosInput, InvestimentoUncheckedCreateWithoutFavoritosInput>
    connectOrCreate?: InvestimentoCreateOrConnectWithoutFavoritosInput
    upsert?: InvestimentoUpsertWithoutFavoritosInput
    connect?: InvestimentoWhereUniqueInput
    update?: XOR<XOR<InvestimentoUpdateToOneWithWhereWithoutFavoritosInput, InvestimentoUpdateWithoutFavoritosInput>, InvestimentoUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioCreateNestedOneWithoutNotificacoesInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UsuarioUpdateOneRequiredWithoutNotificacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNotificacoesInput
    upsert?: UsuarioUpsertWithoutNotificacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNotificacoesInput, UsuarioUpdateWithoutNotificacoesInput>, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoInvestimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInvestimento | EnumTipoInvestimentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInvestimentoFilter<$PrismaModel> | $Enums.TipoInvestimento
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoInvestimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoInvestimento | EnumTipoInvestimentoFieldRefInput<$PrismaModel>
    in?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoInvestimento[] | ListEnumTipoInvestimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoInvestimentoWithAggregatesFilter<$PrismaModel> | $Enums.TipoInvestimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoInvestimentoFilter<$PrismaModel>
    _max?: NestedEnumTipoInvestimentoFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type PortfolioCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: PortfolioItemCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutUsuarioInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    itens?: PortfolioItemUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type PortfolioCreateOrConnectWithoutUsuarioInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput>
  }

  export type PortfolioCreateManyUsuarioInputEnvelope = {
    data: PortfolioCreateManyUsuarioInput | PortfolioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutUsuarioInput = {
    id?: string
    dataAdicao?: Date | string
    createdAt?: Date | string
    investimento: InvestimentoCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    investimentoId: string
    dataAdicao?: Date | string
    createdAt?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoCreateManyUsuarioInputEnvelope = {
    data: FavoritoCreateManyUsuarioInput | FavoritoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type NotificacaoCreateWithoutUsuarioInput = {
    id?: string
    message: string
    lida?: boolean
    dataEnvio?: Date | string
    createdAt?: Date | string
  }

  export type NotificacaoUncheckedCreateWithoutUsuarioInput = {
    id?: string
    message: string
    lida?: boolean
    dataEnvio?: Date | string
    createdAt?: Date | string
  }

  export type NotificacaoCreateOrConnectWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoCreateManyUsuarioInputEnvelope = {
    data: NotificacaoCreateManyUsuarioInput | NotificacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PortfolioWhereUniqueInput
    update: XOR<PortfolioUpdateWithoutUsuarioInput, PortfolioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput>
  }

  export type PortfolioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PortfolioWhereUniqueInput
    data: XOR<PortfolioUpdateWithoutUsuarioInput, PortfolioUncheckedUpdateWithoutUsuarioInput>
  }

  export type PortfolioUpdateManyWithWhereWithoutUsuarioInput = {
    where: PortfolioScalarWhereInput
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PortfolioScalarWhereInput = {
    AND?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    OR?: PortfolioScalarWhereInput[]
    NOT?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    id?: StringFilter<"Portfolio"> | string
    nome?: StringFilter<"Portfolio"> | string
    descricao?: StringNullableFilter<"Portfolio"> | string | null
    usuarioId?: StringFilter<"Portfolio"> | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<FavoritoCreateWithoutUsuarioInput, FavoritoUncheckedCreateWithoutUsuarioInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutUsuarioInput, FavoritoUncheckedUpdateWithoutUsuarioInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutUsuarioInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type FavoritoScalarWhereInput = {
    AND?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    OR?: FavoritoScalarWhereInput[]
    NOT?: FavoritoScalarWhereInput | FavoritoScalarWhereInput[]
    id?: StringFilter<"Favorito"> | string
    usuarioId?: StringFilter<"Favorito"> | string
    investimentoId?: StringFilter<"Favorito"> | string
    dataAdicao?: DateTimeFilter<"Favorito"> | Date | string
    createdAt?: DateTimeFilter<"Favorito"> | Date | string
  }

  export type NotificacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    update: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NotificacaoCreateWithoutUsuarioInput, NotificacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NotificacaoWhereUniqueInput
    data: XOR<NotificacaoUpdateWithoutUsuarioInput, NotificacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type NotificacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: NotificacaoScalarWhereInput
    data: XOR<NotificacaoUpdateManyMutationInput, NotificacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NotificacaoScalarWhereInput = {
    AND?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    OR?: NotificacaoScalarWhereInput[]
    NOT?: NotificacaoScalarWhereInput | NotificacaoScalarWhereInput[]
    id?: StringFilter<"Notificacao"> | string
    usuarioId?: StringFilter<"Notificacao"> | string
    message?: StringFilter<"Notificacao"> | string
    lida?: BoolFilter<"Notificacao"> | boolean
    dataEnvio?: DateTimeFilter<"Notificacao"> | Date | string
    createdAt?: DateTimeFilter<"Notificacao"> | Date | string
  }

  export type PortfolioItemCreateWithoutInvestimentoInput = {
    id?: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio: PortfolioCreateNestedOneWithoutItensInput
  }

  export type PortfolioItemUncheckedCreateWithoutInvestimentoInput = {
    id?: string
    portfolioId: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemCreateOrConnectWithoutInvestimentoInput = {
    where: PortfolioItemWhereUniqueInput
    create: XOR<PortfolioItemCreateWithoutInvestimentoInput, PortfolioItemUncheckedCreateWithoutInvestimentoInput>
  }

  export type PortfolioItemCreateManyInvestimentoInputEnvelope = {
    data: PortfolioItemCreateManyInvestimentoInput | PortfolioItemCreateManyInvestimentoInput[]
    skipDuplicates?: boolean
  }

  export type FavoritoCreateWithoutInvestimentoInput = {
    id?: string
    dataAdicao?: Date | string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutFavoritosInput
  }

  export type FavoritoUncheckedCreateWithoutInvestimentoInput = {
    id?: string
    usuarioId: string
    dataAdicao?: Date | string
    createdAt?: Date | string
  }

  export type FavoritoCreateOrConnectWithoutInvestimentoInput = {
    where: FavoritoWhereUniqueInput
    create: XOR<FavoritoCreateWithoutInvestimentoInput, FavoritoUncheckedCreateWithoutInvestimentoInput>
  }

  export type FavoritoCreateManyInvestimentoInputEnvelope = {
    data: FavoritoCreateManyInvestimentoInput | FavoritoCreateManyInvestimentoInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioItemUpsertWithWhereUniqueWithoutInvestimentoInput = {
    where: PortfolioItemWhereUniqueInput
    update: XOR<PortfolioItemUpdateWithoutInvestimentoInput, PortfolioItemUncheckedUpdateWithoutInvestimentoInput>
    create: XOR<PortfolioItemCreateWithoutInvestimentoInput, PortfolioItemUncheckedCreateWithoutInvestimentoInput>
  }

  export type PortfolioItemUpdateWithWhereUniqueWithoutInvestimentoInput = {
    where: PortfolioItemWhereUniqueInput
    data: XOR<PortfolioItemUpdateWithoutInvestimentoInput, PortfolioItemUncheckedUpdateWithoutInvestimentoInput>
  }

  export type PortfolioItemUpdateManyWithWhereWithoutInvestimentoInput = {
    where: PortfolioItemScalarWhereInput
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyWithoutInvestimentoInput>
  }

  export type PortfolioItemScalarWhereInput = {
    AND?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
    OR?: PortfolioItemScalarWhereInput[]
    NOT?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
    id?: StringFilter<"PortfolioItem"> | string
    portfolioId?: StringFilter<"PortfolioItem"> | string
    investimentoId?: StringFilter<"PortfolioItem"> | string
    quantidade?: IntFilter<"PortfolioItem"> | number
    precoCompra?: FloatFilter<"PortfolioItem"> | number
    dataCompra?: DateTimeFilter<"PortfolioItem"> | Date | string
    createdAt?: DateTimeFilter<"PortfolioItem"> | Date | string
    updatedAt?: DateTimeFilter<"PortfolioItem"> | Date | string
  }

  export type FavoritoUpsertWithWhereUniqueWithoutInvestimentoInput = {
    where: FavoritoWhereUniqueInput
    update: XOR<FavoritoUpdateWithoutInvestimentoInput, FavoritoUncheckedUpdateWithoutInvestimentoInput>
    create: XOR<FavoritoCreateWithoutInvestimentoInput, FavoritoUncheckedCreateWithoutInvestimentoInput>
  }

  export type FavoritoUpdateWithWhereUniqueWithoutInvestimentoInput = {
    where: FavoritoWhereUniqueInput
    data: XOR<FavoritoUpdateWithoutInvestimentoInput, FavoritoUncheckedUpdateWithoutInvestimentoInput>
  }

  export type FavoritoUpdateManyWithWhereWithoutInvestimentoInput = {
    where: FavoritoScalarWhereInput
    data: XOR<FavoritoUpdateManyMutationInput, FavoritoUncheckedUpdateManyWithoutInvestimentoInput>
  }

  export type UsuarioCreateWithoutPortfoliosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPortfoliosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPortfoliosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPortfoliosInput, UsuarioUncheckedCreateWithoutPortfoliosInput>
  }

  export type PortfolioItemCreateWithoutPortfolioInput = {
    id?: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    investimento: InvestimentoCreateNestedOneWithoutPortfolioItemsInput
  }

  export type PortfolioItemUncheckedCreateWithoutPortfolioInput = {
    id?: string
    investimentoId: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemCreateOrConnectWithoutPortfolioInput = {
    where: PortfolioItemWhereUniqueInput
    create: XOR<PortfolioItemCreateWithoutPortfolioInput, PortfolioItemUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioItemCreateManyPortfolioInputEnvelope = {
    data: PortfolioItemCreateManyPortfolioInput | PortfolioItemCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPortfoliosInput = {
    update: XOR<UsuarioUpdateWithoutPortfoliosInput, UsuarioUncheckedUpdateWithoutPortfoliosInput>
    create: XOR<UsuarioCreateWithoutPortfoliosInput, UsuarioUncheckedCreateWithoutPortfoliosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPortfoliosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPortfoliosInput, UsuarioUncheckedUpdateWithoutPortfoliosInput>
  }

  export type UsuarioUpdateWithoutPortfoliosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPortfoliosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PortfolioItemUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioItemWhereUniqueInput
    update: XOR<PortfolioItemUpdateWithoutPortfolioInput, PortfolioItemUncheckedUpdateWithoutPortfolioInput>
    create: XOR<PortfolioItemCreateWithoutPortfolioInput, PortfolioItemUncheckedCreateWithoutPortfolioInput>
  }

  export type PortfolioItemUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: PortfolioItemWhereUniqueInput
    data: XOR<PortfolioItemUpdateWithoutPortfolioInput, PortfolioItemUncheckedUpdateWithoutPortfolioInput>
  }

  export type PortfolioItemUpdateManyWithWhereWithoutPortfolioInput = {
    where: PortfolioItemScalarWhereInput
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type PortfolioCreateWithoutItensInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPortfoliosInput
  }

  export type PortfolioUncheckedCreateWithoutItensInput = {
    id?: string
    nome: string
    descricao?: string | null
    usuarioId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCreateOrConnectWithoutItensInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutItensInput, PortfolioUncheckedCreateWithoutItensInput>
  }

  export type InvestimentoCreateWithoutPortfolioItemsInput = {
    id?: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico?: InvestimentoCreatehistoricoInput | number[]
    volatilidade?: number | null
    dividendYield?: number | null
    taxaJuros?: number | null
    dataVencimento?: Date | string | null
    taxaAdministracao?: number | null
    patrimonioTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritos?: FavoritoCreateNestedManyWithoutInvestimentoInput
  }

  export type InvestimentoUncheckedCreateWithoutPortfolioItemsInput = {
    id?: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico?: InvestimentoCreatehistoricoInput | number[]
    volatilidade?: number | null
    dividendYield?: number | null
    taxaJuros?: number | null
    dataVencimento?: Date | string | null
    taxaAdministracao?: number | null
    patrimonioTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutInvestimentoInput
  }

  export type InvestimentoCreateOrConnectWithoutPortfolioItemsInput = {
    where: InvestimentoWhereUniqueInput
    create: XOR<InvestimentoCreateWithoutPortfolioItemsInput, InvestimentoUncheckedCreateWithoutPortfolioItemsInput>
  }

  export type PortfolioUpsertWithoutItensInput = {
    update: XOR<PortfolioUpdateWithoutItensInput, PortfolioUncheckedUpdateWithoutItensInput>
    create: XOR<PortfolioCreateWithoutItensInput, PortfolioUncheckedCreateWithoutItensInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutItensInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutItensInput, PortfolioUncheckedUpdateWithoutItensInput>
  }

  export type PortfolioUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPortfoliosNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutItensInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestimentoUpsertWithoutPortfolioItemsInput = {
    update: XOR<InvestimentoUpdateWithoutPortfolioItemsInput, InvestimentoUncheckedUpdateWithoutPortfolioItemsInput>
    create: XOR<InvestimentoCreateWithoutPortfolioItemsInput, InvestimentoUncheckedCreateWithoutPortfolioItemsInput>
    where?: InvestimentoWhereInput
  }

  export type InvestimentoUpdateToOneWithWhereWithoutPortfolioItemsInput = {
    where?: InvestimentoWhereInput
    data: XOR<InvestimentoUpdateWithoutPortfolioItemsInput, InvestimentoUncheckedUpdateWithoutPortfolioItemsInput>
  }

  export type InvestimentoUpdateWithoutPortfolioItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUpdateManyWithoutInvestimentoNestedInput
  }

  export type InvestimentoUncheckedUpdateWithoutPortfolioItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favoritos?: FavoritoUncheckedUpdateManyWithoutInvestimentoNestedInput
  }

  export type UsuarioCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
    notificacoes?: NotificacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFavoritosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
  }

  export type InvestimentoCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico?: InvestimentoCreatehistoricoInput | number[]
    volatilidade?: number | null
    dividendYield?: number | null
    taxaJuros?: number | null
    dataVencimento?: Date | string | null
    taxaAdministracao?: number | null
    patrimonioTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioItems?: PortfolioItemCreateNestedManyWithoutInvestimentoInput
  }

  export type InvestimentoUncheckedCreateWithoutFavoritosInput = {
    id?: string
    nome: string
    codigo: string
    tipo: $Enums.TipoInvestimento
    historico?: InvestimentoCreatehistoricoInput | number[]
    volatilidade?: number | null
    dividendYield?: number | null
    taxaJuros?: number | null
    dataVencimento?: Date | string | null
    taxaAdministracao?: number | null
    patrimonioTotal?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolioItems?: PortfolioItemUncheckedCreateNestedManyWithoutInvestimentoInput
  }

  export type InvestimentoCreateOrConnectWithoutFavoritosInput = {
    where: InvestimentoWhereUniqueInput
    create: XOR<InvestimentoCreateWithoutFavoritosInput, InvestimentoUncheckedCreateWithoutFavoritosInput>
  }

  export type UsuarioUpsertWithoutFavoritosInput = {
    update: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
    create: XOR<UsuarioCreateWithoutFavoritosInput, UsuarioUncheckedCreateWithoutFavoritosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutFavoritosInput, UsuarioUncheckedUpdateWithoutFavoritosInput>
  }

  export type UsuarioUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
    notificacoes?: NotificacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type InvestimentoUpsertWithoutFavoritosInput = {
    update: XOR<InvestimentoUpdateWithoutFavoritosInput, InvestimentoUncheckedUpdateWithoutFavoritosInput>
    create: XOR<InvestimentoCreateWithoutFavoritosInput, InvestimentoUncheckedCreateWithoutFavoritosInput>
    where?: InvestimentoWhereInput
  }

  export type InvestimentoUpdateToOneWithWhereWithoutFavoritosInput = {
    where?: InvestimentoWhereInput
    data: XOR<InvestimentoUpdateWithoutFavoritosInput, InvestimentoUncheckedUpdateWithoutFavoritosInput>
  }

  export type InvestimentoUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioItems?: PortfolioItemUpdateManyWithoutInvestimentoNestedInput
  }

  export type InvestimentoUncheckedUpdateWithoutFavoritosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoInvestimentoFieldUpdateOperationsInput | $Enums.TipoInvestimento
    historico?: InvestimentoUpdatehistoricoInput | number[]
    volatilidade?: NullableFloatFieldUpdateOperationsInput | number | null
    dividendYield?: NullableFloatFieldUpdateOperationsInput | number | null
    taxaJuros?: NullableFloatFieldUpdateOperationsInput | number | null
    dataVencimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    taxaAdministracao?: NullableFloatFieldUpdateOperationsInput | number | null
    patrimonioTotal?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioItems?: PortfolioItemUncheckedUpdateManyWithoutInvestimentoNestedInput
  }

  export type UsuarioCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutNotificacoesInput = {
    id?: string
    nome: string
    email: string
    senha: string
    dataCriacao?: Date | string
    ultimoLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolios?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
    favoritos?: FavoritoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutNotificacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
  }

  export type UsuarioUpsertWithoutNotificacoesInput = {
    update: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
    create: XOR<UsuarioCreateWithoutNotificacoesInput, UsuarioUncheckedCreateWithoutNotificacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNotificacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNotificacoesInput, UsuarioUncheckedUpdateWithoutNotificacoesInput>
  }

  export type UsuarioUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNotificacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    ultimoLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolios?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
    favoritos?: FavoritoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PortfolioCreateManyUsuarioInput = {
    id?: string
    nome: string
    descricao?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoritoCreateManyUsuarioInput = {
    id?: string
    investimentoId: string
    dataAdicao?: Date | string
    createdAt?: Date | string
  }

  export type NotificacaoCreateManyUsuarioInput = {
    id?: string
    message: string
    lida?: boolean
    dataEnvio?: Date | string
    createdAt?: Date | string
  }

  export type PortfolioUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: PortfolioItemUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    itens?: PortfolioItemUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investimento?: InvestimentoUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    lida?: BoolFieldUpdateOperationsInput | boolean
    dataEnvio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateManyInvestimentoInput = {
    id?: string
    portfolioId: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FavoritoCreateManyInvestimentoInput = {
    id?: string
    usuarioId: string
    dataAdicao?: Date | string
    createdAt?: Date | string
  }

  export type PortfolioItemUpdateWithoutInvestimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioUpdateOneRequiredWithoutItensNestedInput
  }

  export type PortfolioItemUncheckedUpdateWithoutInvestimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemUncheckedUpdateManyWithoutInvestimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUpdateWithoutInvestimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutFavoritosNestedInput
  }

  export type FavoritoUncheckedUpdateWithoutInvestimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoritoUncheckedUpdateManyWithoutInvestimentoInput = {
    id?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    dataAdicao?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemCreateManyPortfolioInput = {
    id?: string
    investimentoId: string
    quantidade: number
    precoCompra: number
    dataCompra?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioItemUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    investimento?: InvestimentoUpdateOneRequiredWithoutPortfolioItemsNestedInput
  }

  export type PortfolioItemUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioItemUncheckedUpdateManyWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    investimentoId?: StringFieldUpdateOperationsInput | string
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCompra?: FloatFieldUpdateOperationsInput | number
    dataCompra?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvestimentoCountOutputTypeDefaultArgs instead
     */
    export type InvestimentoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvestimentoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortfolioCountOutputTypeDefaultArgs instead
     */
    export type PortfolioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortfolioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvestimentoDefaultArgs instead
     */
    export type InvestimentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvestimentoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortfolioDefaultArgs instead
     */
    export type PortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortfolioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortfolioItemDefaultArgs instead
     */
    export type PortfolioItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortfolioItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavoritoDefaultArgs instead
     */
    export type FavoritoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavoritoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotificacaoDefaultArgs instead
     */
    export type NotificacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotificacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemLogDefaultArgs instead
     */
    export type SystemLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MarketDataDefaultArgs instead
     */
    export type MarketDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MarketDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransacaoDefaultArgs instead
     */
    export type TransacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransacaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertaPrecoDefaultArgs instead
     */
    export type AlertaPrecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertaPrecoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RelatorioPerformanceDefaultArgs instead
     */
    export type RelatorioPerformanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RelatorioPerformanceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}