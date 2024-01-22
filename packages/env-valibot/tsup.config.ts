import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts", "src/core.ts", "src/nuxt.ts", "src/nextjs.ts"],
    format: ["esm", "cjs"],
    clean: true,
    dts: true,
    sourcemap: !options.watch,
  };
});
