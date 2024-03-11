import {
  optional as vOptional,
  picklist as vPicklist,
  string as vString,
} from "valibot";
import { createEnv } from "./core";

/**
 * Vercel System Environment Variables
 * @see https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables
 */
export const vercel = createEnv({
  server: {
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
  },
  runtimeEnv: process.env,
});
