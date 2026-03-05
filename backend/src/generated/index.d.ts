
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Gravidas
 * 
 */
export type Gravidas = $Result.DefaultSelection<Prisma.$GravidasPayload>
/**
 * Model Funcionarios
 * 
 */
export type Funcionarios = $Result.DefaultSelection<Prisma.$FuncionariosPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Gravidas
 * const gravidas = await prisma.gravidas.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Gravidas
   * const gravidas = await prisma.gravidas.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gravidas`: Exposes CRUD operations for the **Gravidas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gravidas
    * const gravidas = await prisma.gravidas.findMany()
    * ```
    */
  get gravidas(): Prisma.GravidasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionarios`: Exposes CRUD operations for the **Funcionarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionarios.findMany()
    * ```
    */
  get funcionarios(): Prisma.FuncionariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Gravidas: 'Gravidas',
    Funcionarios: 'Funcionarios',
    Doctor: 'Doctor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gravidas" | "funcionarios" | "doctor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Gravidas: {
        payload: Prisma.$GravidasPayload<ExtArgs>
        fields: Prisma.GravidasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GravidasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GravidasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload>
          }
          findFirst: {
            args: Prisma.GravidasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GravidasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload>
          }
          findMany: {
            args: Prisma.GravidasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload>[]
          }
          create: {
            args: Prisma.GravidasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload>
          }
          createMany: {
            args: Prisma.GravidasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GravidasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload>
          }
          update: {
            args: Prisma.GravidasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload>
          }
          deleteMany: {
            args: Prisma.GravidasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GravidasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GravidasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GravidasPayload>
          }
          aggregate: {
            args: Prisma.GravidasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGravidas>
          }
          groupBy: {
            args: Prisma.GravidasGroupByArgs<ExtArgs>
            result: $Utils.Optional<GravidasGroupByOutputType>[]
          }
          count: {
            args: Prisma.GravidasCountArgs<ExtArgs>
            result: $Utils.Optional<GravidasCountAggregateOutputType> | number
          }
        }
      }
      Funcionarios: {
        payload: Prisma.$FuncionariosPayload<ExtArgs>
        fields: Prisma.FuncionariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          findFirst: {
            args: Prisma.FuncionariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          findMany: {
            args: Prisma.FuncionariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>[]
          }
          create: {
            args: Prisma.FuncionariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          createMany: {
            args: Prisma.FuncionariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuncionariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          update: {
            args: Prisma.FuncionariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          deleteMany: {
            args: Prisma.FuncionariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuncionariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionariosPayload>
          }
          aggregate: {
            args: Prisma.FuncionariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionarios>
          }
          groupBy: {
            args: Prisma.FuncionariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionariosCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionariosCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    gravidas?: GravidasOmit
    funcionarios?: FuncionariosOmit
    doctor?: DoctorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type FuncionariosCountOutputType
   */

  export type FuncionariosCountOutputType = {
    gravidas: number
  }

  export type FuncionariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gravidas?: boolean | FuncionariosCountOutputTypeCountGravidasArgs
  }

  // Custom InputTypes
  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionariosCountOutputType
     */
    select?: FuncionariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionariosCountOutputType without action
   */
  export type FuncionariosCountOutputTypeCountGravidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GravidasWhereInput
  }


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    gravidas: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gravidas?: boolean | DoctorCountOutputTypeCountGravidasArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountGravidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GravidasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Gravidas
   */

  export type AggregateGravidas = {
    _count: GravidasCountAggregateOutputType | null
    _avg: GravidasAvgAggregateOutputType | null
    _sum: GravidasSumAggregateOutputType | null
    _min: GravidasMinAggregateOutputType | null
    _max: GravidasMaxAggregateOutputType | null
  }

  export type GravidasAvgAggregateOutputType = {
    id: number | null
    num_gravidez: number | null
    func_Id: number | null
    doctor_Id: number | null
  }

  export type GravidasSumAggregateOutputType = {
    id: number | null
    num_gravidez: number | null
    func_Id: number | null
    doctor_Id: number | null
  }

  export type GravidasMinAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    endereco: string | null
    estado_civil: string | null
    num_tel: string | null
    num_proximo: string | null
    ultima_mestr: Date | null
    num_gravidez: number | null
    tipos_partos: string | null
    data_provavel_parto: Date | null
    doencas_ant: string | null
    doencas_pre: string | null
    data_cadastro: Date | null
    func_Id: number | null
    doctor_Id: number | null
  }

  export type GravidasMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    nascimento: Date | null
    endereco: string | null
    estado_civil: string | null
    num_tel: string | null
    num_proximo: string | null
    ultima_mestr: Date | null
    num_gravidez: number | null
    tipos_partos: string | null
    data_provavel_parto: Date | null
    doencas_ant: string | null
    doencas_pre: string | null
    data_cadastro: Date | null
    func_Id: number | null
    doctor_Id: number | null
  }

  export type GravidasCountAggregateOutputType = {
    id: number
    nome: number
    nascimento: number
    endereco: number
    estado_civil: number
    num_tel: number
    num_proximo: number
    ultima_mestr: number
    num_gravidez: number
    tipos_partos: number
    data_provavel_parto: number
    doencas_ant: number
    doencas_pre: number
    data_cadastro: number
    func_Id: number
    doctor_Id: number
    _all: number
  }


  export type GravidasAvgAggregateInputType = {
    id?: true
    num_gravidez?: true
    func_Id?: true
    doctor_Id?: true
  }

  export type GravidasSumAggregateInputType = {
    id?: true
    num_gravidez?: true
    func_Id?: true
    doctor_Id?: true
  }

  export type GravidasMinAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    endereco?: true
    estado_civil?: true
    num_tel?: true
    num_proximo?: true
    ultima_mestr?: true
    num_gravidez?: true
    tipos_partos?: true
    data_provavel_parto?: true
    doencas_ant?: true
    doencas_pre?: true
    data_cadastro?: true
    func_Id?: true
    doctor_Id?: true
  }

  export type GravidasMaxAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    endereco?: true
    estado_civil?: true
    num_tel?: true
    num_proximo?: true
    ultima_mestr?: true
    num_gravidez?: true
    tipos_partos?: true
    data_provavel_parto?: true
    doencas_ant?: true
    doencas_pre?: true
    data_cadastro?: true
    func_Id?: true
    doctor_Id?: true
  }

  export type GravidasCountAggregateInputType = {
    id?: true
    nome?: true
    nascimento?: true
    endereco?: true
    estado_civil?: true
    num_tel?: true
    num_proximo?: true
    ultima_mestr?: true
    num_gravidez?: true
    tipos_partos?: true
    data_provavel_parto?: true
    doencas_ant?: true
    doencas_pre?: true
    data_cadastro?: true
    func_Id?: true
    doctor_Id?: true
    _all?: true
  }

  export type GravidasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gravidas to aggregate.
     */
    where?: GravidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gravidas to fetch.
     */
    orderBy?: GravidasOrderByWithRelationInput | GravidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GravidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gravidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gravidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gravidas
    **/
    _count?: true | GravidasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GravidasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GravidasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GravidasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GravidasMaxAggregateInputType
  }

  export type GetGravidasAggregateType<T extends GravidasAggregateArgs> = {
        [P in keyof T & keyof AggregateGravidas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGravidas[P]>
      : GetScalarType<T[P], AggregateGravidas[P]>
  }




  export type GravidasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GravidasWhereInput
    orderBy?: GravidasOrderByWithAggregationInput | GravidasOrderByWithAggregationInput[]
    by: GravidasScalarFieldEnum[] | GravidasScalarFieldEnum
    having?: GravidasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GravidasCountAggregateInputType | true
    _avg?: GravidasAvgAggregateInputType
    _sum?: GravidasSumAggregateInputType
    _min?: GravidasMinAggregateInputType
    _max?: GravidasMaxAggregateInputType
  }

  export type GravidasGroupByOutputType = {
    id: number
    nome: string
    nascimento: Date
    endereco: string | null
    estado_civil: string | null
    num_tel: string
    num_proximo: string | null
    ultima_mestr: Date
    num_gravidez: number | null
    tipos_partos: string
    data_provavel_parto: Date
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date
    func_Id: number
    doctor_Id: number
    _count: GravidasCountAggregateOutputType | null
    _avg: GravidasAvgAggregateOutputType | null
    _sum: GravidasSumAggregateOutputType | null
    _min: GravidasMinAggregateOutputType | null
    _max: GravidasMaxAggregateOutputType | null
  }

  type GetGravidasGroupByPayload<T extends GravidasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GravidasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GravidasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GravidasGroupByOutputType[P]>
            : GetScalarType<T[P], GravidasGroupByOutputType[P]>
        }
      >
    >


  export type GravidasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    endereco?: boolean
    estado_civil?: boolean
    num_tel?: boolean
    num_proximo?: boolean
    ultima_mestr?: boolean
    num_gravidez?: boolean
    tipos_partos?: boolean
    data_provavel_parto?: boolean
    doencas_ant?: boolean
    doencas_pre?: boolean
    data_cadastro?: boolean
    func_Id?: boolean
    doctor_Id?: boolean
    func?: boolean | FuncionariosDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gravidas"]>



  export type GravidasSelectScalar = {
    id?: boolean
    nome?: boolean
    nascimento?: boolean
    endereco?: boolean
    estado_civil?: boolean
    num_tel?: boolean
    num_proximo?: boolean
    ultima_mestr?: boolean
    num_gravidez?: boolean
    tipos_partos?: boolean
    data_provavel_parto?: boolean
    doencas_ant?: boolean
    doencas_pre?: boolean
    data_cadastro?: boolean
    func_Id?: boolean
    doctor_Id?: boolean
  }

  export type GravidasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "nascimento" | "endereco" | "estado_civil" | "num_tel" | "num_proximo" | "ultima_mestr" | "num_gravidez" | "tipos_partos" | "data_provavel_parto" | "doencas_ant" | "doencas_pre" | "data_cadastro" | "func_Id" | "doctor_Id", ExtArgs["result"]["gravidas"]>
  export type GravidasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    func?: boolean | FuncionariosDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $GravidasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gravidas"
    objects: {
      func: Prisma.$FuncionariosPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      nascimento: Date
      endereco: string | null
      estado_civil: string | null
      num_tel: string
      num_proximo: string | null
      ultima_mestr: Date
      num_gravidez: number | null
      tipos_partos: string
      data_provavel_parto: Date
      doencas_ant: string
      doencas_pre: string
      data_cadastro: Date
      func_Id: number
      doctor_Id: number
    }, ExtArgs["result"]["gravidas"]>
    composites: {}
  }

  type GravidasGetPayload<S extends boolean | null | undefined | GravidasDefaultArgs> = $Result.GetResult<Prisma.$GravidasPayload, S>

  type GravidasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GravidasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GravidasCountAggregateInputType | true
    }

  export interface GravidasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gravidas'], meta: { name: 'Gravidas' } }
    /**
     * Find zero or one Gravidas that matches the filter.
     * @param {GravidasFindUniqueArgs} args - Arguments to find a Gravidas
     * @example
     * // Get one Gravidas
     * const gravidas = await prisma.gravidas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GravidasFindUniqueArgs>(args: SelectSubset<T, GravidasFindUniqueArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gravidas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GravidasFindUniqueOrThrowArgs} args - Arguments to find a Gravidas
     * @example
     * // Get one Gravidas
     * const gravidas = await prisma.gravidas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GravidasFindUniqueOrThrowArgs>(args: SelectSubset<T, GravidasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gravidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GravidasFindFirstArgs} args - Arguments to find a Gravidas
     * @example
     * // Get one Gravidas
     * const gravidas = await prisma.gravidas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GravidasFindFirstArgs>(args?: SelectSubset<T, GravidasFindFirstArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gravidas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GravidasFindFirstOrThrowArgs} args - Arguments to find a Gravidas
     * @example
     * // Get one Gravidas
     * const gravidas = await prisma.gravidas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GravidasFindFirstOrThrowArgs>(args?: SelectSubset<T, GravidasFindFirstOrThrowArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gravidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GravidasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gravidas
     * const gravidas = await prisma.gravidas.findMany()
     * 
     * // Get first 10 Gravidas
     * const gravidas = await prisma.gravidas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gravidasWithIdOnly = await prisma.gravidas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GravidasFindManyArgs>(args?: SelectSubset<T, GravidasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gravidas.
     * @param {GravidasCreateArgs} args - Arguments to create a Gravidas.
     * @example
     * // Create one Gravidas
     * const Gravidas = await prisma.gravidas.create({
     *   data: {
     *     // ... data to create a Gravidas
     *   }
     * })
     * 
     */
    create<T extends GravidasCreateArgs>(args: SelectSubset<T, GravidasCreateArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gravidas.
     * @param {GravidasCreateManyArgs} args - Arguments to create many Gravidas.
     * @example
     * // Create many Gravidas
     * const gravidas = await prisma.gravidas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GravidasCreateManyArgs>(args?: SelectSubset<T, GravidasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gravidas.
     * @param {GravidasDeleteArgs} args - Arguments to delete one Gravidas.
     * @example
     * // Delete one Gravidas
     * const Gravidas = await prisma.gravidas.delete({
     *   where: {
     *     // ... filter to delete one Gravidas
     *   }
     * })
     * 
     */
    delete<T extends GravidasDeleteArgs>(args: SelectSubset<T, GravidasDeleteArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gravidas.
     * @param {GravidasUpdateArgs} args - Arguments to update one Gravidas.
     * @example
     * // Update one Gravidas
     * const gravidas = await prisma.gravidas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GravidasUpdateArgs>(args: SelectSubset<T, GravidasUpdateArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gravidas.
     * @param {GravidasDeleteManyArgs} args - Arguments to filter Gravidas to delete.
     * @example
     * // Delete a few Gravidas
     * const { count } = await prisma.gravidas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GravidasDeleteManyArgs>(args?: SelectSubset<T, GravidasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gravidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GravidasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gravidas
     * const gravidas = await prisma.gravidas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GravidasUpdateManyArgs>(args: SelectSubset<T, GravidasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gravidas.
     * @param {GravidasUpsertArgs} args - Arguments to update or create a Gravidas.
     * @example
     * // Update or create a Gravidas
     * const gravidas = await prisma.gravidas.upsert({
     *   create: {
     *     // ... data to create a Gravidas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gravidas we want to update
     *   }
     * })
     */
    upsert<T extends GravidasUpsertArgs>(args: SelectSubset<T, GravidasUpsertArgs<ExtArgs>>): Prisma__GravidasClient<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gravidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GravidasCountArgs} args - Arguments to filter Gravidas to count.
     * @example
     * // Count the number of Gravidas
     * const count = await prisma.gravidas.count({
     *   where: {
     *     // ... the filter for the Gravidas we want to count
     *   }
     * })
    **/
    count<T extends GravidasCountArgs>(
      args?: Subset<T, GravidasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GravidasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gravidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GravidasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GravidasAggregateArgs>(args: Subset<T, GravidasAggregateArgs>): Prisma.PrismaPromise<GetGravidasAggregateType<T>>

    /**
     * Group by Gravidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GravidasGroupByArgs} args - Group by arguments.
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
      T extends GravidasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GravidasGroupByArgs['orderBy'] }
        : { orderBy?: GravidasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GravidasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGravidasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gravidas model
   */
  readonly fields: GravidasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gravidas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GravidasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    func<T extends FuncionariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionariosDefaultArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Gravidas model
   */
  interface GravidasFieldRefs {
    readonly id: FieldRef<"Gravidas", 'Int'>
    readonly nome: FieldRef<"Gravidas", 'String'>
    readonly nascimento: FieldRef<"Gravidas", 'DateTime'>
    readonly endereco: FieldRef<"Gravidas", 'String'>
    readonly estado_civil: FieldRef<"Gravidas", 'String'>
    readonly num_tel: FieldRef<"Gravidas", 'String'>
    readonly num_proximo: FieldRef<"Gravidas", 'String'>
    readonly ultima_mestr: FieldRef<"Gravidas", 'DateTime'>
    readonly num_gravidez: FieldRef<"Gravidas", 'Int'>
    readonly tipos_partos: FieldRef<"Gravidas", 'String'>
    readonly data_provavel_parto: FieldRef<"Gravidas", 'DateTime'>
    readonly doencas_ant: FieldRef<"Gravidas", 'String'>
    readonly doencas_pre: FieldRef<"Gravidas", 'String'>
    readonly data_cadastro: FieldRef<"Gravidas", 'DateTime'>
    readonly func_Id: FieldRef<"Gravidas", 'Int'>
    readonly doctor_Id: FieldRef<"Gravidas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Gravidas findUnique
   */
  export type GravidasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * Filter, which Gravidas to fetch.
     */
    where: GravidasWhereUniqueInput
  }

  /**
   * Gravidas findUniqueOrThrow
   */
  export type GravidasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * Filter, which Gravidas to fetch.
     */
    where: GravidasWhereUniqueInput
  }

  /**
   * Gravidas findFirst
   */
  export type GravidasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * Filter, which Gravidas to fetch.
     */
    where?: GravidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gravidas to fetch.
     */
    orderBy?: GravidasOrderByWithRelationInput | GravidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gravidas.
     */
    cursor?: GravidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gravidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gravidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gravidas.
     */
    distinct?: GravidasScalarFieldEnum | GravidasScalarFieldEnum[]
  }

  /**
   * Gravidas findFirstOrThrow
   */
  export type GravidasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * Filter, which Gravidas to fetch.
     */
    where?: GravidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gravidas to fetch.
     */
    orderBy?: GravidasOrderByWithRelationInput | GravidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gravidas.
     */
    cursor?: GravidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gravidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gravidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gravidas.
     */
    distinct?: GravidasScalarFieldEnum | GravidasScalarFieldEnum[]
  }

  /**
   * Gravidas findMany
   */
  export type GravidasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * Filter, which Gravidas to fetch.
     */
    where?: GravidasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gravidas to fetch.
     */
    orderBy?: GravidasOrderByWithRelationInput | GravidasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gravidas.
     */
    cursor?: GravidasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gravidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gravidas.
     */
    skip?: number
    distinct?: GravidasScalarFieldEnum | GravidasScalarFieldEnum[]
  }

  /**
   * Gravidas create
   */
  export type GravidasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * The data needed to create a Gravidas.
     */
    data: XOR<GravidasCreateInput, GravidasUncheckedCreateInput>
  }

  /**
   * Gravidas createMany
   */
  export type GravidasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gravidas.
     */
    data: GravidasCreateManyInput | GravidasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gravidas update
   */
  export type GravidasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * The data needed to update a Gravidas.
     */
    data: XOR<GravidasUpdateInput, GravidasUncheckedUpdateInput>
    /**
     * Choose, which Gravidas to update.
     */
    where: GravidasWhereUniqueInput
  }

  /**
   * Gravidas updateMany
   */
  export type GravidasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gravidas.
     */
    data: XOR<GravidasUpdateManyMutationInput, GravidasUncheckedUpdateManyInput>
    /**
     * Filter which Gravidas to update
     */
    where?: GravidasWhereInput
    /**
     * Limit how many Gravidas to update.
     */
    limit?: number
  }

  /**
   * Gravidas upsert
   */
  export type GravidasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * The filter to search for the Gravidas to update in case it exists.
     */
    where: GravidasWhereUniqueInput
    /**
     * In case the Gravidas found by the `where` argument doesn't exist, create a new Gravidas with this data.
     */
    create: XOR<GravidasCreateInput, GravidasUncheckedCreateInput>
    /**
     * In case the Gravidas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GravidasUpdateInput, GravidasUncheckedUpdateInput>
  }

  /**
   * Gravidas delete
   */
  export type GravidasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    /**
     * Filter which Gravidas to delete.
     */
    where: GravidasWhereUniqueInput
  }

  /**
   * Gravidas deleteMany
   */
  export type GravidasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gravidas to delete
     */
    where?: GravidasWhereInput
    /**
     * Limit how many Gravidas to delete.
     */
    limit?: number
  }

  /**
   * Gravidas without action
   */
  export type GravidasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
  }


  /**
   * Model Funcionarios
   */

  export type AggregateFuncionarios = {
    _count: FuncionariosCountAggregateOutputType | null
    _avg: FuncionariosAvgAggregateOutputType | null
    _sum: FuncionariosSumAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  export type FuncionariosAvgAggregateOutputType = {
    id: number | null
  }

  export type FuncionariosSumAggregateOutputType = {
    id: number | null
  }

  export type FuncionariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    ender: string | null
    tel: string | null
    cargo: string | null
    profissao: string | null
    tipo_func: string | null
    cod_acesso: string | null
  }

  export type FuncionariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    ender: string | null
    tel: string | null
    cargo: string | null
    profissao: string | null
    tipo_func: string | null
    cod_acesso: string | null
  }

  export type FuncionariosCountAggregateOutputType = {
    id: number
    nome: number
    ender: number
    tel: number
    cargo: number
    profissao: number
    tipo_func: number
    cod_acesso: number
    _all: number
  }


  export type FuncionariosAvgAggregateInputType = {
    id?: true
  }

  export type FuncionariosSumAggregateInputType = {
    id?: true
  }

  export type FuncionariosMinAggregateInputType = {
    id?: true
    nome?: true
    ender?: true
    tel?: true
    cargo?: true
    profissao?: true
    tipo_func?: true
    cod_acesso?: true
  }

  export type FuncionariosMaxAggregateInputType = {
    id?: true
    nome?: true
    ender?: true
    tel?: true
    cargo?: true
    profissao?: true
    tipo_func?: true
    cod_acesso?: true
  }

  export type FuncionariosCountAggregateInputType = {
    id?: true
    nome?: true
    ender?: true
    tel?: true
    cargo?: true
    profissao?: true
    tipo_func?: true
    cod_acesso?: true
    _all?: true
  }

  export type FuncionariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to aggregate.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionariosMaxAggregateInputType
  }

  export type GetFuncionariosAggregateType<T extends FuncionariosAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionarios[P]>
      : GetScalarType<T[P], AggregateFuncionarios[P]>
  }




  export type FuncionariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionariosWhereInput
    orderBy?: FuncionariosOrderByWithAggregationInput | FuncionariosOrderByWithAggregationInput[]
    by: FuncionariosScalarFieldEnum[] | FuncionariosScalarFieldEnum
    having?: FuncionariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionariosCountAggregateInputType | true
    _avg?: FuncionariosAvgAggregateInputType
    _sum?: FuncionariosSumAggregateInputType
    _min?: FuncionariosMinAggregateInputType
    _max?: FuncionariosMaxAggregateInputType
  }

  export type FuncionariosGroupByOutputType = {
    id: number
    nome: string
    ender: string
    tel: string
    cargo: string
    profissao: string | null
    tipo_func: string
    cod_acesso: string
    _count: FuncionariosCountAggregateOutputType | null
    _avg: FuncionariosAvgAggregateOutputType | null
    _sum: FuncionariosSumAggregateOutputType | null
    _min: FuncionariosMinAggregateOutputType | null
    _max: FuncionariosMaxAggregateOutputType | null
  }

  type GetFuncionariosGroupByPayload<T extends FuncionariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionariosGroupByOutputType[P]>
        }
      >
    >


  export type FuncionariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ender?: boolean
    tel?: boolean
    cargo?: boolean
    profissao?: boolean
    tipo_func?: boolean
    cod_acesso?: boolean
    gravidas?: boolean | Funcionarios$gravidasArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionarios"]>



  export type FuncionariosSelectScalar = {
    id?: boolean
    nome?: boolean
    ender?: boolean
    tel?: boolean
    cargo?: boolean
    profissao?: boolean
    tipo_func?: boolean
    cod_acesso?: boolean
  }

  export type FuncionariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ender" | "tel" | "cargo" | "profissao" | "tipo_func" | "cod_acesso", ExtArgs["result"]["funcionarios"]>
  export type FuncionariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gravidas?: boolean | Funcionarios$gravidasArgs<ExtArgs>
    _count?: boolean | FuncionariosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FuncionariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionarios"
    objects: {
      gravidas: Prisma.$GravidasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      ender: string
      tel: string
      cargo: string
      profissao: string | null
      tipo_func: string
      cod_acesso: string
    }, ExtArgs["result"]["funcionarios"]>
    composites: {}
  }

  type FuncionariosGetPayload<S extends boolean | null | undefined | FuncionariosDefaultArgs> = $Result.GetResult<Prisma.$FuncionariosPayload, S>

  type FuncionariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionariosCountAggregateInputType | true
    }

  export interface FuncionariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionarios'], meta: { name: 'Funcionarios' } }
    /**
     * Find zero or one Funcionarios that matches the filter.
     * @param {FuncionariosFindUniqueArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionariosFindUniqueArgs>(args: SelectSubset<T, FuncionariosFindUniqueArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionariosFindUniqueOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionariosFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindFirstArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionariosFindFirstArgs>(args?: SelectSubset<T, FuncionariosFindFirstArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindFirstOrThrowArgs} args - Arguments to find a Funcionarios
     * @example
     * // Get one Funcionarios
     * const funcionarios = await prisma.funcionarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionariosFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionariosWithIdOnly = await prisma.funcionarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionariosFindManyArgs>(args?: SelectSubset<T, FuncionariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionarios.
     * @param {FuncionariosCreateArgs} args - Arguments to create a Funcionarios.
     * @example
     * // Create one Funcionarios
     * const Funcionarios = await prisma.funcionarios.create({
     *   data: {
     *     // ... data to create a Funcionarios
     *   }
     * })
     * 
     */
    create<T extends FuncionariosCreateArgs>(args: SelectSubset<T, FuncionariosCreateArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionariosCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionarios = await prisma.funcionarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionariosCreateManyArgs>(args?: SelectSubset<T, FuncionariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Funcionarios.
     * @param {FuncionariosDeleteArgs} args - Arguments to delete one Funcionarios.
     * @example
     * // Delete one Funcionarios
     * const Funcionarios = await prisma.funcionarios.delete({
     *   where: {
     *     // ... filter to delete one Funcionarios
     *   }
     * })
     * 
     */
    delete<T extends FuncionariosDeleteArgs>(args: SelectSubset<T, FuncionariosDeleteArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionarios.
     * @param {FuncionariosUpdateArgs} args - Arguments to update one Funcionarios.
     * @example
     * // Update one Funcionarios
     * const funcionarios = await prisma.funcionarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionariosUpdateArgs>(args: SelectSubset<T, FuncionariosUpdateArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionariosDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionariosDeleteManyArgs>(args?: SelectSubset<T, FuncionariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionarios = await prisma.funcionarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionariosUpdateManyArgs>(args: SelectSubset<T, FuncionariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Funcionarios.
     * @param {FuncionariosUpsertArgs} args - Arguments to update or create a Funcionarios.
     * @example
     * // Update or create a Funcionarios
     * const funcionarios = await prisma.funcionarios.upsert({
     *   create: {
     *     // ... data to create a Funcionarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionarios we want to update
     *   }
     * })
     */
    upsert<T extends FuncionariosUpsertArgs>(args: SelectSubset<T, FuncionariosUpsertArgs<ExtArgs>>): Prisma__FuncionariosClient<$Result.GetResult<Prisma.$FuncionariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionarios.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionariosCountArgs>(
      args?: Subset<T, FuncionariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionariosAggregateArgs>(args: Subset<T, FuncionariosAggregateArgs>): Prisma.PrismaPromise<GetFuncionariosAggregateType<T>>

    /**
     * Group by Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionariosGroupByArgs} args - Group by arguments.
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
      T extends FuncionariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionariosGroupByArgs['orderBy'] }
        : { orderBy?: FuncionariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionarios model
   */
  readonly fields: FuncionariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gravidas<T extends Funcionarios$gravidasArgs<ExtArgs> = {}>(args?: Subset<T, Funcionarios$gravidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Funcionarios model
   */
  interface FuncionariosFieldRefs {
    readonly id: FieldRef<"Funcionarios", 'Int'>
    readonly nome: FieldRef<"Funcionarios", 'String'>
    readonly ender: FieldRef<"Funcionarios", 'String'>
    readonly tel: FieldRef<"Funcionarios", 'String'>
    readonly cargo: FieldRef<"Funcionarios", 'String'>
    readonly profissao: FieldRef<"Funcionarios", 'String'>
    readonly tipo_func: FieldRef<"Funcionarios", 'String'>
    readonly cod_acesso: FieldRef<"Funcionarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Funcionarios findUnique
   */
  export type FuncionariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios findUniqueOrThrow
   */
  export type FuncionariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios findFirst
   */
  export type FuncionariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios findFirstOrThrow
   */
  export type FuncionariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios findMany
   */
  export type FuncionariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionariosOrderByWithRelationInput | FuncionariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionariosScalarFieldEnum | FuncionariosScalarFieldEnum[]
  }

  /**
   * Funcionarios create
   */
  export type FuncionariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionarios.
     */
    data: XOR<FuncionariosCreateInput, FuncionariosUncheckedCreateInput>
  }

  /**
   * Funcionarios createMany
   */
  export type FuncionariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionariosCreateManyInput | FuncionariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionarios update
   */
  export type FuncionariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionarios.
     */
    data: XOR<FuncionariosUpdateInput, FuncionariosUncheckedUpdateInput>
    /**
     * Choose, which Funcionarios to update.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios updateMany
   */
  export type FuncionariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionariosUpdateManyMutationInput, FuncionariosUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionarios upsert
   */
  export type FuncionariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionarios to update in case it exists.
     */
    where: FuncionariosWhereUniqueInput
    /**
     * In case the Funcionarios found by the `where` argument doesn't exist, create a new Funcionarios with this data.
     */
    create: XOR<FuncionariosCreateInput, FuncionariosUncheckedCreateInput>
    /**
     * In case the Funcionarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionariosUpdateInput, FuncionariosUncheckedUpdateInput>
  }

  /**
   * Funcionarios delete
   */
  export type FuncionariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
    /**
     * Filter which Funcionarios to delete.
     */
    where: FuncionariosWhereUniqueInput
  }

  /**
   * Funcionarios deleteMany
   */
  export type FuncionariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionariosWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionarios.gravidas
   */
  export type Funcionarios$gravidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    where?: GravidasWhereInput
    orderBy?: GravidasOrderByWithRelationInput | GravidasOrderByWithRelationInput[]
    cursor?: GravidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GravidasScalarFieldEnum | GravidasScalarFieldEnum[]
  }

  /**
   * Funcionarios without action
   */
  export type FuncionariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionarios
     */
    select?: FuncionariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionarios
     */
    omit?: FuncionariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionariosInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    id: number | null
  }

  export type DoctorSumAggregateOutputType = {
    id: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    ender: string | null
    especialidade: string | null
    cod_acesso: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    ender: string | null
    especialidade: string | null
    cod_acesso: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    nome: number
    ender: number
    especialidade: number
    cod_acesso: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    id?: true
  }

  export type DoctorSumAggregateInputType = {
    id?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    nome?: true
    ender?: true
    especialidade?: true
    cod_acesso?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    nome?: true
    ender?: true
    especialidade?: true
    cod_acesso?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    nome?: true
    ender?: true
    especialidade?: true
    cod_acesso?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: number
    nome: string
    ender: string
    especialidade: string | null
    cod_acesso: string
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    ender?: boolean
    especialidade?: boolean
    cod_acesso?: boolean
    gravidas?: boolean | Doctor$gravidasArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>



  export type DoctorSelectScalar = {
    id?: boolean
    nome?: boolean
    ender?: boolean
    especialidade?: boolean
    cod_acesso?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "ender" | "especialidade" | "cod_acesso", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gravidas?: boolean | Doctor$gravidasArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      gravidas: Prisma.$GravidasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      ender: string
      especialidade: string | null
      cod_acesso: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gravidas<T extends Doctor$gravidasArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$gravidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GravidasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'Int'>
    readonly nome: FieldRef<"Doctor", 'String'>
    readonly ender: FieldRef<"Doctor", 'String'>
    readonly especialidade: FieldRef<"Doctor", 'String'>
    readonly cod_acesso: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.gravidas
   */
  export type Doctor$gravidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gravidas
     */
    select?: GravidasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gravidas
     */
    omit?: GravidasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GravidasInclude<ExtArgs> | null
    where?: GravidasWhereInput
    orderBy?: GravidasOrderByWithRelationInput | GravidasOrderByWithRelationInput[]
    cursor?: GravidasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GravidasScalarFieldEnum | GravidasScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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


  export const GravidasScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    nascimento: 'nascimento',
    endereco: 'endereco',
    estado_civil: 'estado_civil',
    num_tel: 'num_tel',
    num_proximo: 'num_proximo',
    ultima_mestr: 'ultima_mestr',
    num_gravidez: 'num_gravidez',
    tipos_partos: 'tipos_partos',
    data_provavel_parto: 'data_provavel_parto',
    doencas_ant: 'doencas_ant',
    doencas_pre: 'doencas_pre',
    data_cadastro: 'data_cadastro',
    func_Id: 'func_Id',
    doctor_Id: 'doctor_Id'
  };

  export type GravidasScalarFieldEnum = (typeof GravidasScalarFieldEnum)[keyof typeof GravidasScalarFieldEnum]


  export const FuncionariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ender: 'ender',
    tel: 'tel',
    cargo: 'cargo',
    profissao: 'profissao',
    tipo_func: 'tipo_func',
    cod_acesso: 'cod_acesso'
  };

  export type FuncionariosScalarFieldEnum = (typeof FuncionariosScalarFieldEnum)[keyof typeof FuncionariosScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    ender: 'ender',
    especialidade: 'especialidade',
    cod_acesso: 'cod_acesso'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const GravidasOrderByRelevanceFieldEnum: {
    nome: 'nome',
    endereco: 'endereco',
    estado_civil: 'estado_civil',
    num_tel: 'num_tel',
    num_proximo: 'num_proximo',
    tipos_partos: 'tipos_partos',
    doencas_ant: 'doencas_ant',
    doencas_pre: 'doencas_pre'
  };

  export type GravidasOrderByRelevanceFieldEnum = (typeof GravidasOrderByRelevanceFieldEnum)[keyof typeof GravidasOrderByRelevanceFieldEnum]


  export const FuncionariosOrderByRelevanceFieldEnum: {
    nome: 'nome',
    ender: 'ender',
    tel: 'tel',
    cargo: 'cargo',
    profissao: 'profissao',
    tipo_func: 'tipo_func',
    cod_acesso: 'cod_acesso'
  };

  export type FuncionariosOrderByRelevanceFieldEnum = (typeof FuncionariosOrderByRelevanceFieldEnum)[keyof typeof FuncionariosOrderByRelevanceFieldEnum]


  export const DoctorOrderByRelevanceFieldEnum: {
    nome: 'nome',
    ender: 'ender',
    especialidade: 'especialidade',
    cod_acesso: 'cod_acesso'
  };

  export type DoctorOrderByRelevanceFieldEnum = (typeof DoctorOrderByRelevanceFieldEnum)[keyof typeof DoctorOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type GravidasWhereInput = {
    AND?: GravidasWhereInput | GravidasWhereInput[]
    OR?: GravidasWhereInput[]
    NOT?: GravidasWhereInput | GravidasWhereInput[]
    id?: IntFilter<"Gravidas"> | number
    nome?: StringFilter<"Gravidas"> | string
    nascimento?: DateTimeFilter<"Gravidas"> | Date | string
    endereco?: StringNullableFilter<"Gravidas"> | string | null
    estado_civil?: StringNullableFilter<"Gravidas"> | string | null
    num_tel?: StringFilter<"Gravidas"> | string
    num_proximo?: StringNullableFilter<"Gravidas"> | string | null
    ultima_mestr?: DateTimeFilter<"Gravidas"> | Date | string
    num_gravidez?: IntNullableFilter<"Gravidas"> | number | null
    tipos_partos?: StringFilter<"Gravidas"> | string
    data_provavel_parto?: DateTimeFilter<"Gravidas"> | Date | string
    doencas_ant?: StringFilter<"Gravidas"> | string
    doencas_pre?: StringFilter<"Gravidas"> | string
    data_cadastro?: DateTimeFilter<"Gravidas"> | Date | string
    func_Id?: IntFilter<"Gravidas"> | number
    doctor_Id?: IntFilter<"Gravidas"> | number
    func?: XOR<FuncionariosScalarRelationFilter, FuncionariosWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type GravidasOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    endereco?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    num_tel?: SortOrder
    num_proximo?: SortOrderInput | SortOrder
    ultima_mestr?: SortOrder
    num_gravidez?: SortOrderInput | SortOrder
    tipos_partos?: SortOrder
    data_provavel_parto?: SortOrder
    doencas_ant?: SortOrder
    doencas_pre?: SortOrder
    data_cadastro?: SortOrder
    func_Id?: SortOrder
    doctor_Id?: SortOrder
    func?: FuncionariosOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    _relevance?: GravidasOrderByRelevanceInput
  }

  export type GravidasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GravidasWhereInput | GravidasWhereInput[]
    OR?: GravidasWhereInput[]
    NOT?: GravidasWhereInput | GravidasWhereInput[]
    nome?: StringFilter<"Gravidas"> | string
    nascimento?: DateTimeFilter<"Gravidas"> | Date | string
    endereco?: StringNullableFilter<"Gravidas"> | string | null
    estado_civil?: StringNullableFilter<"Gravidas"> | string | null
    num_tel?: StringFilter<"Gravidas"> | string
    num_proximo?: StringNullableFilter<"Gravidas"> | string | null
    ultima_mestr?: DateTimeFilter<"Gravidas"> | Date | string
    num_gravidez?: IntNullableFilter<"Gravidas"> | number | null
    tipos_partos?: StringFilter<"Gravidas"> | string
    data_provavel_parto?: DateTimeFilter<"Gravidas"> | Date | string
    doencas_ant?: StringFilter<"Gravidas"> | string
    doencas_pre?: StringFilter<"Gravidas"> | string
    data_cadastro?: DateTimeFilter<"Gravidas"> | Date | string
    func_Id?: IntFilter<"Gravidas"> | number
    doctor_Id?: IntFilter<"Gravidas"> | number
    func?: XOR<FuncionariosScalarRelationFilter, FuncionariosWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type GravidasOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    endereco?: SortOrderInput | SortOrder
    estado_civil?: SortOrderInput | SortOrder
    num_tel?: SortOrder
    num_proximo?: SortOrderInput | SortOrder
    ultima_mestr?: SortOrder
    num_gravidez?: SortOrderInput | SortOrder
    tipos_partos?: SortOrder
    data_provavel_parto?: SortOrder
    doencas_ant?: SortOrder
    doencas_pre?: SortOrder
    data_cadastro?: SortOrder
    func_Id?: SortOrder
    doctor_Id?: SortOrder
    _count?: GravidasCountOrderByAggregateInput
    _avg?: GravidasAvgOrderByAggregateInput
    _max?: GravidasMaxOrderByAggregateInput
    _min?: GravidasMinOrderByAggregateInput
    _sum?: GravidasSumOrderByAggregateInput
  }

  export type GravidasScalarWhereWithAggregatesInput = {
    AND?: GravidasScalarWhereWithAggregatesInput | GravidasScalarWhereWithAggregatesInput[]
    OR?: GravidasScalarWhereWithAggregatesInput[]
    NOT?: GravidasScalarWhereWithAggregatesInput | GravidasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gravidas"> | number
    nome?: StringWithAggregatesFilter<"Gravidas"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Gravidas"> | Date | string
    endereco?: StringNullableWithAggregatesFilter<"Gravidas"> | string | null
    estado_civil?: StringNullableWithAggregatesFilter<"Gravidas"> | string | null
    num_tel?: StringWithAggregatesFilter<"Gravidas"> | string
    num_proximo?: StringNullableWithAggregatesFilter<"Gravidas"> | string | null
    ultima_mestr?: DateTimeWithAggregatesFilter<"Gravidas"> | Date | string
    num_gravidez?: IntNullableWithAggregatesFilter<"Gravidas"> | number | null
    tipos_partos?: StringWithAggregatesFilter<"Gravidas"> | string
    data_provavel_parto?: DateTimeWithAggregatesFilter<"Gravidas"> | Date | string
    doencas_ant?: StringWithAggregatesFilter<"Gravidas"> | string
    doencas_pre?: StringWithAggregatesFilter<"Gravidas"> | string
    data_cadastro?: DateTimeWithAggregatesFilter<"Gravidas"> | Date | string
    func_Id?: IntWithAggregatesFilter<"Gravidas"> | number
    doctor_Id?: IntWithAggregatesFilter<"Gravidas"> | number
  }

  export type FuncionariosWhereInput = {
    AND?: FuncionariosWhereInput | FuncionariosWhereInput[]
    OR?: FuncionariosWhereInput[]
    NOT?: FuncionariosWhereInput | FuncionariosWhereInput[]
    id?: IntFilter<"Funcionarios"> | number
    nome?: StringFilter<"Funcionarios"> | string
    ender?: StringFilter<"Funcionarios"> | string
    tel?: StringFilter<"Funcionarios"> | string
    cargo?: StringFilter<"Funcionarios"> | string
    profissao?: StringNullableFilter<"Funcionarios"> | string | null
    tipo_func?: StringFilter<"Funcionarios"> | string
    cod_acesso?: StringFilter<"Funcionarios"> | string
    gravidas?: GravidasListRelationFilter
  }

  export type FuncionariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    tel?: SortOrder
    cargo?: SortOrder
    profissao?: SortOrderInput | SortOrder
    tipo_func?: SortOrder
    cod_acesso?: SortOrder
    gravidas?: GravidasOrderByRelationAggregateInput
    _relevance?: FuncionariosOrderByRelevanceInput
  }

  export type FuncionariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FuncionariosWhereInput | FuncionariosWhereInput[]
    OR?: FuncionariosWhereInput[]
    NOT?: FuncionariosWhereInput | FuncionariosWhereInput[]
    nome?: StringFilter<"Funcionarios"> | string
    ender?: StringFilter<"Funcionarios"> | string
    tel?: StringFilter<"Funcionarios"> | string
    cargo?: StringFilter<"Funcionarios"> | string
    profissao?: StringNullableFilter<"Funcionarios"> | string | null
    tipo_func?: StringFilter<"Funcionarios"> | string
    cod_acesso?: StringFilter<"Funcionarios"> | string
    gravidas?: GravidasListRelationFilter
  }, "id">

  export type FuncionariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    tel?: SortOrder
    cargo?: SortOrder
    profissao?: SortOrderInput | SortOrder
    tipo_func?: SortOrder
    cod_acesso?: SortOrder
    _count?: FuncionariosCountOrderByAggregateInput
    _avg?: FuncionariosAvgOrderByAggregateInput
    _max?: FuncionariosMaxOrderByAggregateInput
    _min?: FuncionariosMinOrderByAggregateInput
    _sum?: FuncionariosSumOrderByAggregateInput
  }

  export type FuncionariosScalarWhereWithAggregatesInput = {
    AND?: FuncionariosScalarWhereWithAggregatesInput | FuncionariosScalarWhereWithAggregatesInput[]
    OR?: FuncionariosScalarWhereWithAggregatesInput[]
    NOT?: FuncionariosScalarWhereWithAggregatesInput | FuncionariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionarios"> | number
    nome?: StringWithAggregatesFilter<"Funcionarios"> | string
    ender?: StringWithAggregatesFilter<"Funcionarios"> | string
    tel?: StringWithAggregatesFilter<"Funcionarios"> | string
    cargo?: StringWithAggregatesFilter<"Funcionarios"> | string
    profissao?: StringNullableWithAggregatesFilter<"Funcionarios"> | string | null
    tipo_func?: StringWithAggregatesFilter<"Funcionarios"> | string
    cod_acesso?: StringWithAggregatesFilter<"Funcionarios"> | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: IntFilter<"Doctor"> | number
    nome?: StringFilter<"Doctor"> | string
    ender?: StringFilter<"Doctor"> | string
    especialidade?: StringNullableFilter<"Doctor"> | string | null
    cod_acesso?: StringFilter<"Doctor"> | string
    gravidas?: GravidasListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    especialidade?: SortOrderInput | SortOrder
    cod_acesso?: SortOrder
    gravidas?: GravidasOrderByRelationAggregateInput
    _relevance?: DoctorOrderByRelevanceInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    nome?: StringFilter<"Doctor"> | string
    ender?: StringFilter<"Doctor"> | string
    especialidade?: StringNullableFilter<"Doctor"> | string | null
    cod_acesso?: StringFilter<"Doctor"> | string
    gravidas?: GravidasListRelationFilter
  }, "id">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    especialidade?: SortOrderInput | SortOrder
    cod_acesso?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Doctor"> | number
    nome?: StringWithAggregatesFilter<"Doctor"> | string
    ender?: StringWithAggregatesFilter<"Doctor"> | string
    especialidade?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    cod_acesso?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type GravidasCreateInput = {
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    func: FuncionariosCreateNestedOneWithoutGravidasInput
    doctor: DoctorCreateNestedOneWithoutGravidasInput
  }

  export type GravidasUncheckedCreateInput = {
    id?: number
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    func_Id: number
    doctor_Id: number
  }

  export type GravidasUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    func?: FuncionariosUpdateOneRequiredWithoutGravidasNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutGravidasNestedInput
  }

  export type GravidasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    func_Id?: IntFieldUpdateOperationsInput | number
    doctor_Id?: IntFieldUpdateOperationsInput | number
  }

  export type GravidasCreateManyInput = {
    id?: number
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    func_Id: number
    doctor_Id: number
  }

  export type GravidasUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GravidasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    func_Id?: IntFieldUpdateOperationsInput | number
    doctor_Id?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionariosCreateInput = {
    nome: string
    ender: string
    tel: string
    cargo: string
    profissao?: string | null
    tipo_func: string
    cod_acesso: string
    gravidas?: GravidasCreateNestedManyWithoutFuncInput
  }

  export type FuncionariosUncheckedCreateInput = {
    id?: number
    nome: string
    ender: string
    tel: string
    cargo: string
    profissao?: string | null
    tipo_func: string
    cod_acesso: string
    gravidas?: GravidasUncheckedCreateNestedManyWithoutFuncInput
  }

  export type FuncionariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_func?: StringFieldUpdateOperationsInput | string
    cod_acesso?: StringFieldUpdateOperationsInput | string
    gravidas?: GravidasUpdateManyWithoutFuncNestedInput
  }

  export type FuncionariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_func?: StringFieldUpdateOperationsInput | string
    cod_acesso?: StringFieldUpdateOperationsInput | string
    gravidas?: GravidasUncheckedUpdateManyWithoutFuncNestedInput
  }

  export type FuncionariosCreateManyInput = {
    id?: number
    nome: string
    ender: string
    tel: string
    cargo: string
    profissao?: string | null
    tipo_func: string
    cod_acesso: string
  }

  export type FuncionariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_func?: StringFieldUpdateOperationsInput | string
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_func?: StringFieldUpdateOperationsInput | string
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateInput = {
    nome: string
    ender: string
    especialidade?: string | null
    cod_acesso: string
    gravidas?: GravidasCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: number
    nome: string
    ender: string
    especialidade?: string | null
    cod_acesso: string
    gravidas?: GravidasUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    cod_acesso?: StringFieldUpdateOperationsInput | string
    gravidas?: GravidasUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    cod_acesso?: StringFieldUpdateOperationsInput | string
    gravidas?: GravidasUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: number
    nome: string
    ender: string
    especialidade?: string | null
    cod_acesso: string
  }

  export type DoctorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FuncionariosScalarRelationFilter = {
    is?: FuncionariosWhereInput
    isNot?: FuncionariosWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GravidasOrderByRelevanceInput = {
    fields: GravidasOrderByRelevanceFieldEnum | GravidasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GravidasCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    endereco?: SortOrder
    estado_civil?: SortOrder
    num_tel?: SortOrder
    num_proximo?: SortOrder
    ultima_mestr?: SortOrder
    num_gravidez?: SortOrder
    tipos_partos?: SortOrder
    data_provavel_parto?: SortOrder
    doencas_ant?: SortOrder
    doencas_pre?: SortOrder
    data_cadastro?: SortOrder
    func_Id?: SortOrder
    doctor_Id?: SortOrder
  }

  export type GravidasAvgOrderByAggregateInput = {
    id?: SortOrder
    num_gravidez?: SortOrder
    func_Id?: SortOrder
    doctor_Id?: SortOrder
  }

  export type GravidasMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    endereco?: SortOrder
    estado_civil?: SortOrder
    num_tel?: SortOrder
    num_proximo?: SortOrder
    ultima_mestr?: SortOrder
    num_gravidez?: SortOrder
    tipos_partos?: SortOrder
    data_provavel_parto?: SortOrder
    doencas_ant?: SortOrder
    doencas_pre?: SortOrder
    data_cadastro?: SortOrder
    func_Id?: SortOrder
    doctor_Id?: SortOrder
  }

  export type GravidasMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    nascimento?: SortOrder
    endereco?: SortOrder
    estado_civil?: SortOrder
    num_tel?: SortOrder
    num_proximo?: SortOrder
    ultima_mestr?: SortOrder
    num_gravidez?: SortOrder
    tipos_partos?: SortOrder
    data_provavel_parto?: SortOrder
    doencas_ant?: SortOrder
    doencas_pre?: SortOrder
    data_cadastro?: SortOrder
    func_Id?: SortOrder
    doctor_Id?: SortOrder
  }

  export type GravidasSumOrderByAggregateInput = {
    id?: SortOrder
    num_gravidez?: SortOrder
    func_Id?: SortOrder
    doctor_Id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GravidasListRelationFilter = {
    every?: GravidasWhereInput
    some?: GravidasWhereInput
    none?: GravidasWhereInput
  }

  export type GravidasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionariosOrderByRelevanceInput = {
    fields: FuncionariosOrderByRelevanceFieldEnum | FuncionariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FuncionariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    tel?: SortOrder
    cargo?: SortOrder
    profissao?: SortOrder
    tipo_func?: SortOrder
    cod_acesso?: SortOrder
  }

  export type FuncionariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    tel?: SortOrder
    cargo?: SortOrder
    profissao?: SortOrder
    tipo_func?: SortOrder
    cod_acesso?: SortOrder
  }

  export type FuncionariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    tel?: SortOrder
    cargo?: SortOrder
    profissao?: SortOrder
    tipo_func?: SortOrder
    cod_acesso?: SortOrder
  }

  export type FuncionariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoctorOrderByRelevanceInput = {
    fields: DoctorOrderByRelevanceFieldEnum | DoctorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    especialidade?: SortOrder
    cod_acesso?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    especialidade?: SortOrder
    cod_acesso?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    ender?: SortOrder
    especialidade?: SortOrder
    cod_acesso?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionariosCreateNestedOneWithoutGravidasInput = {
    create?: XOR<FuncionariosCreateWithoutGravidasInput, FuncionariosUncheckedCreateWithoutGravidasInput>
    connectOrCreate?: FuncionariosCreateOrConnectWithoutGravidasInput
    connect?: FuncionariosWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutGravidasInput = {
    create?: XOR<DoctorCreateWithoutGravidasInput, DoctorUncheckedCreateWithoutGravidasInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutGravidasInput
    connect?: DoctorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FuncionariosUpdateOneRequiredWithoutGravidasNestedInput = {
    create?: XOR<FuncionariosCreateWithoutGravidasInput, FuncionariosUncheckedCreateWithoutGravidasInput>
    connectOrCreate?: FuncionariosCreateOrConnectWithoutGravidasInput
    upsert?: FuncionariosUpsertWithoutGravidasInput
    connect?: FuncionariosWhereUniqueInput
    update?: XOR<XOR<FuncionariosUpdateToOneWithWhereWithoutGravidasInput, FuncionariosUpdateWithoutGravidasInput>, FuncionariosUncheckedUpdateWithoutGravidasInput>
  }

  export type DoctorUpdateOneRequiredWithoutGravidasNestedInput = {
    create?: XOR<DoctorCreateWithoutGravidasInput, DoctorUncheckedCreateWithoutGravidasInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutGravidasInput
    upsert?: DoctorUpsertWithoutGravidasInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutGravidasInput, DoctorUpdateWithoutGravidasInput>, DoctorUncheckedUpdateWithoutGravidasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GravidasCreateNestedManyWithoutFuncInput = {
    create?: XOR<GravidasCreateWithoutFuncInput, GravidasUncheckedCreateWithoutFuncInput> | GravidasCreateWithoutFuncInput[] | GravidasUncheckedCreateWithoutFuncInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutFuncInput | GravidasCreateOrConnectWithoutFuncInput[]
    createMany?: GravidasCreateManyFuncInputEnvelope
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
  }

  export type GravidasUncheckedCreateNestedManyWithoutFuncInput = {
    create?: XOR<GravidasCreateWithoutFuncInput, GravidasUncheckedCreateWithoutFuncInput> | GravidasCreateWithoutFuncInput[] | GravidasUncheckedCreateWithoutFuncInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutFuncInput | GravidasCreateOrConnectWithoutFuncInput[]
    createMany?: GravidasCreateManyFuncInputEnvelope
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
  }

  export type GravidasUpdateManyWithoutFuncNestedInput = {
    create?: XOR<GravidasCreateWithoutFuncInput, GravidasUncheckedCreateWithoutFuncInput> | GravidasCreateWithoutFuncInput[] | GravidasUncheckedCreateWithoutFuncInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutFuncInput | GravidasCreateOrConnectWithoutFuncInput[]
    upsert?: GravidasUpsertWithWhereUniqueWithoutFuncInput | GravidasUpsertWithWhereUniqueWithoutFuncInput[]
    createMany?: GravidasCreateManyFuncInputEnvelope
    set?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    disconnect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    delete?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    update?: GravidasUpdateWithWhereUniqueWithoutFuncInput | GravidasUpdateWithWhereUniqueWithoutFuncInput[]
    updateMany?: GravidasUpdateManyWithWhereWithoutFuncInput | GravidasUpdateManyWithWhereWithoutFuncInput[]
    deleteMany?: GravidasScalarWhereInput | GravidasScalarWhereInput[]
  }

  export type GravidasUncheckedUpdateManyWithoutFuncNestedInput = {
    create?: XOR<GravidasCreateWithoutFuncInput, GravidasUncheckedCreateWithoutFuncInput> | GravidasCreateWithoutFuncInput[] | GravidasUncheckedCreateWithoutFuncInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutFuncInput | GravidasCreateOrConnectWithoutFuncInput[]
    upsert?: GravidasUpsertWithWhereUniqueWithoutFuncInput | GravidasUpsertWithWhereUniqueWithoutFuncInput[]
    createMany?: GravidasCreateManyFuncInputEnvelope
    set?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    disconnect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    delete?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    update?: GravidasUpdateWithWhereUniqueWithoutFuncInput | GravidasUpdateWithWhereUniqueWithoutFuncInput[]
    updateMany?: GravidasUpdateManyWithWhereWithoutFuncInput | GravidasUpdateManyWithWhereWithoutFuncInput[]
    deleteMany?: GravidasScalarWhereInput | GravidasScalarWhereInput[]
  }

  export type GravidasCreateNestedManyWithoutDoctorInput = {
    create?: XOR<GravidasCreateWithoutDoctorInput, GravidasUncheckedCreateWithoutDoctorInput> | GravidasCreateWithoutDoctorInput[] | GravidasUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutDoctorInput | GravidasCreateOrConnectWithoutDoctorInput[]
    createMany?: GravidasCreateManyDoctorInputEnvelope
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
  }

  export type GravidasUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<GravidasCreateWithoutDoctorInput, GravidasUncheckedCreateWithoutDoctorInput> | GravidasCreateWithoutDoctorInput[] | GravidasUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutDoctorInput | GravidasCreateOrConnectWithoutDoctorInput[]
    createMany?: GravidasCreateManyDoctorInputEnvelope
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
  }

  export type GravidasUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<GravidasCreateWithoutDoctorInput, GravidasUncheckedCreateWithoutDoctorInput> | GravidasCreateWithoutDoctorInput[] | GravidasUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutDoctorInput | GravidasCreateOrConnectWithoutDoctorInput[]
    upsert?: GravidasUpsertWithWhereUniqueWithoutDoctorInput | GravidasUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: GravidasCreateManyDoctorInputEnvelope
    set?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    disconnect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    delete?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    update?: GravidasUpdateWithWhereUniqueWithoutDoctorInput | GravidasUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: GravidasUpdateManyWithWhereWithoutDoctorInput | GravidasUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: GravidasScalarWhereInput | GravidasScalarWhereInput[]
  }

  export type GravidasUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<GravidasCreateWithoutDoctorInput, GravidasUncheckedCreateWithoutDoctorInput> | GravidasCreateWithoutDoctorInput[] | GravidasUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: GravidasCreateOrConnectWithoutDoctorInput | GravidasCreateOrConnectWithoutDoctorInput[]
    upsert?: GravidasUpsertWithWhereUniqueWithoutDoctorInput | GravidasUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: GravidasCreateManyDoctorInputEnvelope
    set?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    disconnect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    delete?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    connect?: GravidasWhereUniqueInput | GravidasWhereUniqueInput[]
    update?: GravidasUpdateWithWhereUniqueWithoutDoctorInput | GravidasUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: GravidasUpdateManyWithWhereWithoutDoctorInput | GravidasUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: GravidasScalarWhereInput | GravidasScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FuncionariosCreateWithoutGravidasInput = {
    nome: string
    ender: string
    tel: string
    cargo: string
    profissao?: string | null
    tipo_func: string
    cod_acesso: string
  }

  export type FuncionariosUncheckedCreateWithoutGravidasInput = {
    id?: number
    nome: string
    ender: string
    tel: string
    cargo: string
    profissao?: string | null
    tipo_func: string
    cod_acesso: string
  }

  export type FuncionariosCreateOrConnectWithoutGravidasInput = {
    where: FuncionariosWhereUniqueInput
    create: XOR<FuncionariosCreateWithoutGravidasInput, FuncionariosUncheckedCreateWithoutGravidasInput>
  }

  export type DoctorCreateWithoutGravidasInput = {
    nome: string
    ender: string
    especialidade?: string | null
    cod_acesso: string
  }

  export type DoctorUncheckedCreateWithoutGravidasInput = {
    id?: number
    nome: string
    ender: string
    especialidade?: string | null
    cod_acesso: string
  }

  export type DoctorCreateOrConnectWithoutGravidasInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutGravidasInput, DoctorUncheckedCreateWithoutGravidasInput>
  }

  export type FuncionariosUpsertWithoutGravidasInput = {
    update: XOR<FuncionariosUpdateWithoutGravidasInput, FuncionariosUncheckedUpdateWithoutGravidasInput>
    create: XOR<FuncionariosCreateWithoutGravidasInput, FuncionariosUncheckedCreateWithoutGravidasInput>
    where?: FuncionariosWhereInput
  }

  export type FuncionariosUpdateToOneWithWhereWithoutGravidasInput = {
    where?: FuncionariosWhereInput
    data: XOR<FuncionariosUpdateWithoutGravidasInput, FuncionariosUncheckedUpdateWithoutGravidasInput>
  }

  export type FuncionariosUpdateWithoutGravidasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_func?: StringFieldUpdateOperationsInput | string
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type FuncionariosUncheckedUpdateWithoutGravidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    cargo?: StringFieldUpdateOperationsInput | string
    profissao?: NullableStringFieldUpdateOperationsInput | string | null
    tipo_func?: StringFieldUpdateOperationsInput | string
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUpsertWithoutGravidasInput = {
    update: XOR<DoctorUpdateWithoutGravidasInput, DoctorUncheckedUpdateWithoutGravidasInput>
    create: XOR<DoctorCreateWithoutGravidasInput, DoctorUncheckedCreateWithoutGravidasInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutGravidasInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutGravidasInput, DoctorUncheckedUpdateWithoutGravidasInput>
  }

  export type DoctorUpdateWithoutGravidasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateWithoutGravidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    ender?: StringFieldUpdateOperationsInput | string
    especialidade?: NullableStringFieldUpdateOperationsInput | string | null
    cod_acesso?: StringFieldUpdateOperationsInput | string
  }

  export type GravidasCreateWithoutFuncInput = {
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    doctor: DoctorCreateNestedOneWithoutGravidasInput
  }

  export type GravidasUncheckedCreateWithoutFuncInput = {
    id?: number
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    doctor_Id: number
  }

  export type GravidasCreateOrConnectWithoutFuncInput = {
    where: GravidasWhereUniqueInput
    create: XOR<GravidasCreateWithoutFuncInput, GravidasUncheckedCreateWithoutFuncInput>
  }

  export type GravidasCreateManyFuncInputEnvelope = {
    data: GravidasCreateManyFuncInput | GravidasCreateManyFuncInput[]
    skipDuplicates?: boolean
  }

  export type GravidasUpsertWithWhereUniqueWithoutFuncInput = {
    where: GravidasWhereUniqueInput
    update: XOR<GravidasUpdateWithoutFuncInput, GravidasUncheckedUpdateWithoutFuncInput>
    create: XOR<GravidasCreateWithoutFuncInput, GravidasUncheckedCreateWithoutFuncInput>
  }

  export type GravidasUpdateWithWhereUniqueWithoutFuncInput = {
    where: GravidasWhereUniqueInput
    data: XOR<GravidasUpdateWithoutFuncInput, GravidasUncheckedUpdateWithoutFuncInput>
  }

  export type GravidasUpdateManyWithWhereWithoutFuncInput = {
    where: GravidasScalarWhereInput
    data: XOR<GravidasUpdateManyMutationInput, GravidasUncheckedUpdateManyWithoutFuncInput>
  }

  export type GravidasScalarWhereInput = {
    AND?: GravidasScalarWhereInput | GravidasScalarWhereInput[]
    OR?: GravidasScalarWhereInput[]
    NOT?: GravidasScalarWhereInput | GravidasScalarWhereInput[]
    id?: IntFilter<"Gravidas"> | number
    nome?: StringFilter<"Gravidas"> | string
    nascimento?: DateTimeFilter<"Gravidas"> | Date | string
    endereco?: StringNullableFilter<"Gravidas"> | string | null
    estado_civil?: StringNullableFilter<"Gravidas"> | string | null
    num_tel?: StringFilter<"Gravidas"> | string
    num_proximo?: StringNullableFilter<"Gravidas"> | string | null
    ultima_mestr?: DateTimeFilter<"Gravidas"> | Date | string
    num_gravidez?: IntNullableFilter<"Gravidas"> | number | null
    tipos_partos?: StringFilter<"Gravidas"> | string
    data_provavel_parto?: DateTimeFilter<"Gravidas"> | Date | string
    doencas_ant?: StringFilter<"Gravidas"> | string
    doencas_pre?: StringFilter<"Gravidas"> | string
    data_cadastro?: DateTimeFilter<"Gravidas"> | Date | string
    func_Id?: IntFilter<"Gravidas"> | number
    doctor_Id?: IntFilter<"Gravidas"> | number
  }

  export type GravidasCreateWithoutDoctorInput = {
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    func: FuncionariosCreateNestedOneWithoutGravidasInput
  }

  export type GravidasUncheckedCreateWithoutDoctorInput = {
    id?: number
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    func_Id: number
  }

  export type GravidasCreateOrConnectWithoutDoctorInput = {
    where: GravidasWhereUniqueInput
    create: XOR<GravidasCreateWithoutDoctorInput, GravidasUncheckedCreateWithoutDoctorInput>
  }

  export type GravidasCreateManyDoctorInputEnvelope = {
    data: GravidasCreateManyDoctorInput | GravidasCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type GravidasUpsertWithWhereUniqueWithoutDoctorInput = {
    where: GravidasWhereUniqueInput
    update: XOR<GravidasUpdateWithoutDoctorInput, GravidasUncheckedUpdateWithoutDoctorInput>
    create: XOR<GravidasCreateWithoutDoctorInput, GravidasUncheckedCreateWithoutDoctorInput>
  }

  export type GravidasUpdateWithWhereUniqueWithoutDoctorInput = {
    where: GravidasWhereUniqueInput
    data: XOR<GravidasUpdateWithoutDoctorInput, GravidasUncheckedUpdateWithoutDoctorInput>
  }

  export type GravidasUpdateManyWithWhereWithoutDoctorInput = {
    where: GravidasScalarWhereInput
    data: XOR<GravidasUpdateManyMutationInput, GravidasUncheckedUpdateManyWithoutDoctorInput>
  }

  export type GravidasCreateManyFuncInput = {
    id?: number
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    doctor_Id: number
  }

  export type GravidasUpdateWithoutFuncInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutGravidasNestedInput
  }

  export type GravidasUncheckedUpdateWithoutFuncInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor_Id?: IntFieldUpdateOperationsInput | number
  }

  export type GravidasUncheckedUpdateManyWithoutFuncInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor_Id?: IntFieldUpdateOperationsInput | number
  }

  export type GravidasCreateManyDoctorInput = {
    id?: number
    nome: string
    nascimento: Date | string
    endereco?: string | null
    estado_civil?: string | null
    num_tel: string
    num_proximo?: string | null
    ultima_mestr: Date | string
    num_gravidez?: number | null
    tipos_partos: string
    data_provavel_parto: Date | string
    doencas_ant: string
    doencas_pre: string
    data_cadastro: Date | string
    func_Id: number
  }

  export type GravidasUpdateWithoutDoctorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    func?: FuncionariosUpdateOneRequiredWithoutGravidasNestedInput
  }

  export type GravidasUncheckedUpdateWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    func_Id?: IntFieldUpdateOperationsInput | number
  }

  export type GravidasUncheckedUpdateManyWithoutDoctorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    estado_civil?: NullableStringFieldUpdateOperationsInput | string | null
    num_tel?: StringFieldUpdateOperationsInput | string
    num_proximo?: NullableStringFieldUpdateOperationsInput | string | null
    ultima_mestr?: DateTimeFieldUpdateOperationsInput | Date | string
    num_gravidez?: NullableIntFieldUpdateOperationsInput | number | null
    tipos_partos?: StringFieldUpdateOperationsInput | string
    data_provavel_parto?: DateTimeFieldUpdateOperationsInput | Date | string
    doencas_ant?: StringFieldUpdateOperationsInput | string
    doencas_pre?: StringFieldUpdateOperationsInput | string
    data_cadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    func_Id?: IntFieldUpdateOperationsInput | number
  }



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