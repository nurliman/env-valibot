import { createNextjsEnv, presetVercel } from "@nurliman/env-valibot";
import { picklist as vPicklist, string as vString } from "valibot";

export const env = createNextjsEnv({
  client: {
    NEXT_PUBLIC_GREETING: vString(),
  },
  server: {
    SECRET: vString(),
  },
  shared: {
    NODE_ENV: vPicklist(["development", "production"]),
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_GREETING: process.env.NEXT_PUBLIC_GREETING,
  },
  extends: [presetVercel()],
});
