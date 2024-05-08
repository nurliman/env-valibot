/**
 * index file for env-valibot. Contains exports for core, nextjs, nuxt, and presets.
 * @module
 */

export * from "./core.ts";
export { createEnv as createNextjsEnv } from "./nextjs.ts";
export { createEnv as createNuxtEnv } from "./nuxt.ts";
export {
  vercel as presetVercel,
  uploadthing as presetUploadthing,
} from "./presets.ts";
