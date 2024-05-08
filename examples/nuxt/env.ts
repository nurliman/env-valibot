import { createNuxtEnv } from "@nurliman/env-valibot";
import { string as vString } from "valibot";

export const env = createNuxtEnv({
  server: {
    SECRET: vString(),
  },
  client: {
    NUXT_PUBLIC_GREETING: vString(),
  },
});
