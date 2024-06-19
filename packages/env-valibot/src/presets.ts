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
} from "@valibot/valibot";
import { createEnv } from "./core.ts";

/**
 * Vercel System Environment Variables
 * @see https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
 */
export function vercel(): Readonly<{
  VERCEL?: string;
  VERCEL_ENV?: "development" | "preview" | "production";
  VERCEL_URL?: string;
  VERCEL_PROJECT_PRODUCTION_URL?: string;
  VERCEL_BRANCH_URL?: string;
  VERCEL_REGION?: string;
  VERCEL_AUTOMATION_BYPASS_SECRET?: string;
  VERCEL_GIT_PROVIDER?: string;
  VERCEL_GIT_REPO_SLUG?: string;
  VERCEL_GIT_REPO_OWNER?: string;
  VERCEL_GIT_REPO_ID?: string;
  VERCEL_GIT_COMMIT_REF?: string;
  VERCEL_GIT_COMMIT_SHA?: string;
  VERCEL_GIT_COMMIT_MESSAGE?: string;
  VERCEL_GIT_COMMIT_AUTHOR_LOGIN?: string;
  VERCEL_GIT_COMMIT_AUTHOR_NAME?: string;
  VERCEL_GIT_PREVIOUS_SHA?: string;
  VERCEL_GIT_PULL_REQUEST_ID?: string;
}> {
  return createEnv({
    server: {
      VERCEL: vOptional(vString()),
      VERCEL_ENV: vOptional(
        vPicklist(["development", "preview", "production"]),
      ),
      VERCEL_URL: vOptional(vString()),
      VERCEL_PROJECT_PRODUCTION_URL: vOptional(vString()),
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
    },
    runtimeEnv: process.env,
  });
}

/**
 * @see https://docs.uploadthing.com/getting-started/appdir#add-env-variables
 */
export function uploadthing(): Readonly<{
  UPLOADTHING_SECRET: string;
  UPLOADTHING_APP_ID?: string;
}> {
  return createEnv({
    server: {
      UPLOADTHING_SECRET: vString(),
      UPLOADTHING_APP_ID: vOptional(vString()),
    },
    runtimeEnv: process.env,
  });
}
