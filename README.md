# Typesafe Envs made Simple

[![jsr.io/@nurliman/env-valibot](https://jsr.io/badges/@nurliman/env-valibot)](https://jsr.io/@nurliman/env-valibot)
[![jsr.io/@nurliman/env-valibot score](https://jsr.io/badges/@nurliman/env-valibot/score)](https://jsr.io/@nurliman/env-valibot)
[![npm Version](https://img.shields.io/npm/v/%40nurliman%2Fenv-valibot)](https://www.npmjs.com/package/@nurliman/env-valibot)

Deploying your app with invalid environment variables is a hassle. This package helps you to avoid that.

## Installation

> [!NOTE]
>
>This is an ESM only package that requires a tsconfig with a module resolution that can read package.json#exports (`NodeNext` if transpiling with `tsc`, `Bundler` if using a bundler).

```bash
# deno
deno add @nurliman/env-valibot @valibot/valibot

# npm (one of the below, depending on your package manager)
npx jsr add @nurliman/env-valibot @valibot/valibot
yarn dlx jsr add @nurliman/env-valibot @valibot/valibot
pnpm dlx jsr add @nurliman/env-valibot @valibot/valibot
bunx jsr add @nurliman/env-valibot @valibot/valibot
```

> Currently only supports Valibot (which you'll need to install separately). Bring your own validation library is on the roadmap.

## Usage

> For full documentation, see https://env.t3.gg

This package supports the full power of Valibot, meaning you can use `transforms` and `default` values.

### Define your schema

```ts
// src/env.mjs
import { createNextjsEnv } from "@nurliman/env-valibot";
import * as v from "@valibot/valibot";

export const env = createNextjsEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    DATABASE_URL: v.pipe(v.string(), v.url()),
    OPEN_AI_API_KEY: v.pipe(v.string(), v.minLength(1)),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: v.pipe(v.string(), v.minLength(1)),
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
});
```

### Use the schema in your app with autocompletion and type inference

```ts
// src/app/hello/route.ts
import { env } from "../env.mjs";

export const GET = (req: Request) => {
  const DATABASE_URL = env.DATABASE_URL;
  // use it...
};
```

## Roadmap

- [ ] Bring your own validation library - currently only supports Valibot.
