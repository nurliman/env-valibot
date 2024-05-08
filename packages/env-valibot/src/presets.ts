/**
 * This contains presets for common environment variables used
 * in 3rd party services so you don't have to write them yourself.
 * Include them in your `createEnv.extends` option array.
 * @module
 */

import {
  optional as vOptional,
  picklist as vPicklist,
  string as vString,
} from "valibot";
import { createEnv, type CreateEnv } from "./core.ts";

const vercelEnv = {
  VERCEL: vOptional(vString()),
  VERCEL_ENV: vOptional(vPicklist(["development", "preview", "production"])),
  VERCEL_URL: vOptional(vString()),
  VERCEL_BRANCH_URL: vOptional(vString()),
  VERCEL_REGION: vOptional(vString()),
  VERCEL_AUTOMATION_BYPASS_SECRET: vOptional(vString()),
  VERCEL_GIT_PROVIDER: vOptional(vString()),
  VERCEL_GIT_REPO_SLUG: vOptional(vString()),
  VERCEL_GIT_REPO_OWNER: vOptional(vString()),
  VERCEL_GIT_REPO_ID: vOptional(vString()),
  VERCEL_GIT_COMMIT_REF: vOptional(vString()),
  VERCEL_GIT_COMMIT_SHA: vOptional(vString()),
  VERCEL_GIT_COMMIT_MESSAGE: vOptional(vString()),
  VERCEL_GIT_COMMIT_AUTHOR_LOGIN: vOptional(vString()),
  VERCEL_GIT_COMMIT_AUTHOR_NAME: vOptional(vString()),
  VERCEL_GIT_PREVIOUS_SHA: vOptional(vString()),
  VERCEL_GIT_PULL_REQUEST_ID: vOptional(vString()),
} as const;

type VercelEnv = CreateEnv<typeof vercelEnv, {}, {}, []>;

/**
 * Vercel System Environment Variables
 * @see https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
 */
export function vercel(): VercelEnv {
  return createEnv({
    server: vercelEnv,
    runtimeEnv: process.env,
  });
}

const uploadthingEnv = {
  UPLOADTHING_SECRET: vString(),
  UPLOADTHING_APP_ID: vOptional(vString()),
} as const;

type UploadthingEnv = CreateEnv<typeof uploadthingEnv, {}, {}, []>;

/**
 * @see https://docs.uploadthing.com/getting-started/appdir#add-env-variables
 */
export function uploadthing(): UploadthingEnv {
  return createEnv({
    server: {
      UPLOADTHING_SECRET: vString(),
      UPLOADTHING_APP_ID: vOptional(vString()),
    },
    runtimeEnv: process.env,
  });
}
