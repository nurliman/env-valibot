import { createNuxtEnv } from "@nurliman/env-valibot";
import { z } from "zod";

export const env = createNuxtEnv({
  server: {
    SECRET: z.string(),
  },
  client: {
    NUXT_PUBLIC_GREETING: z.string(),
  },
});
