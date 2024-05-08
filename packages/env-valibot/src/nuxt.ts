/**
 * env-valibot module for Nuxt
 * @module
 */

import {
  type CreateEnv,
  type ServerClientOptions,
  type StrictOptions,
  createEnv as createEnvCore,
} from "./core.ts";
import type { AnySchema } from "./utils.ts";

const CLIENT_PREFIX = "NUXT_PUBLIC_" as const;
type ClientPrefix = typeof CLIENT_PREFIX;

type Options<
  TServer extends Record<string, AnySchema> = NonNullable<unknown>,
  TClient extends Record<
    `${ClientPrefix}${string}`,
    AnySchema
  > = NonNullable<unknown>,
  TShared extends Record<string, AnySchema> = NonNullable<unknown>,
  TExtends extends Array<Record<string, unknown>> = [],
> = Omit<
  StrictOptions<ClientPrefix, TServer, TClient, TShared, TExtends> &
    ServerClientOptions<ClientPrefix, TServer, TClient>,
  "runtimeEnvStrict" | "runtimeEnv" | "clientPrefix"
>;

export function createEnv<
  TServer extends Record<string, AnySchema> = NonNullable<unknown>,
  TClient extends Record<string, AnySchema> = NonNullable<unknown>,
  TShared extends Record<string, AnySchema> = NonNullable<unknown>,
  const TExtends extends Array<Record<string, unknown>> = [],
>(
  opts: Options<TServer, TClient, TShared, TExtends>,
): CreateEnv<TServer, TClient, TShared, TExtends> {
  const client = typeof opts.client === "object" ? opts.client : {};
  const server = typeof opts.server === "object" ? opts.server : {};
  const shared = opts.shared;

  return createEnvCore<ClientPrefix, TServer, TClient, TShared, TExtends>({
    ...opts,
    shared,
    client,
    server,
    clientPrefix: CLIENT_PREFIX,
    runtimeEnv: process.env,
  });
}