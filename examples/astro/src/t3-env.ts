import { createEnv } from "@nurliman/env-valibot";
import { string as vString } from "@valibot/valibot";

export const env = createEnv({
  server: {
    PORT: vString(),
  },
  client: {
    PUBLIC_API_URL: vString(),
  },
  // Astro bundles all environment variables so
  // we don't need to manually destructure them
  runtimeEnv: import.meta.env,
  // process is not available in Astro, so we must set this explicitly
  skipValidation: import.meta.env.SKIP_ENV_VALIDATION === "development",
  clientPrefix: "PUBLIC_",
});
