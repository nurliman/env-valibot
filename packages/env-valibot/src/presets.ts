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

/**
 * Render System Environment Variables
 * @see https://docs.render.com/environment-variables#all-runtimes
 */
export function render(): Readonly<{
  IS_PULL_REQUEST?: string;
  RENDER_DISCOVERY_SERVICE?: string;
  RENDER_EXTERNAL_HOSTNAME?: string;
  RENDER_EXTERNAL_URL?: string;
  RENDER_GIT_BRANCH?: string;
  RENDER_GIT_COMMIT?: string;
  RENDER_GIT_REPO_SLUG?: string;
  RENDER_INSTANCE_ID?: string;
  RENDER_SERVICE_ID?: string;
  RENDER_SERVICE_NAME?: string;
  RENDER_SERVICE_TYPE?: "web" | "pserv" | "cron" | "worker" | "static";
  RENDER?: string;
}> {
  return createEnv({
    server: {
      IS_PULL_REQUEST: vOptional(vString()),
      RENDER_DISCOVERY_SERVICE: vOptional(vString()),
      RENDER_EXTERNAL_HOSTNAME: vOptional(vString()),
      RENDER_EXTERNAL_URL: vOptional(vString()),
      RENDER_GIT_BRANCH: vOptional(vString()),
      RENDER_GIT_COMMIT: vOptional(vString()),
      RENDER_GIT_REPO_SLUG: vOptional(vString()),
      RENDER_INSTANCE_ID: vOptional(vString()),
      RENDER_SERVICE_ID: vOptional(vString()),
      RENDER_SERVICE_NAME: vOptional(vString()),
      RENDER_SERVICE_TYPE: vOptional(
        vPicklist(["web", "pserv", "cron", "worker", "static"]),
      ),
      RENDER: vOptional(vString()),
    },
    runtimeEnv: process.env,
  });
}

/**
 * Railway Environment Variables
 * @see https://docs.railway.app/reference/variables#railway-provided-variables
 */
export function railway(): Readonly<{
  RAILWAY_PUBLIC_DOMAIN?: string;
  RAILWAY_PRIVATE_DOMAIN?: string;
  RAILWAY_TCP_PROXY_DOMAIN?: string;
  RAILWAY_TCP_PROXY_PORT?: string;
  RAILWAY_TCP_APPLICATION_PORT?: string;
  RAILWAY_PROJECT_NAME?: string;
  RAILWAY_PROJECT_ID?: string;
  RAILWAY_ENVIRONMENT_NAME?: string;
  RAILWAY_ENVIRONMENT_ID?: string;
  RAILWAY_SERVICE_NAME?: string;
  RAILWAY_SERVICE_ID?: string;
  RAILWAY_REPLICA_ID?: string;
  RAILWAY_DEPLOYMENT_ID?: string;
  RAILWAY_SNAPSHOT_ID?: string;
  RAILWAY_VOLUME_NAME?: string;
  RAILWAY_VOLUME_MOUNT_PATH?: string;
  RAILWAY_RUN_UID?: string;
  RAILWAY_GIT_COMMIT_SHA?: string;
  RAILWAY_GIT_AUTHOR_EMAIL?: string;
  RAILWAY_GIT_BRANCH?: string;
  RAILWAY_GIT_REPO_NAME?: string;
  RAILWAY_GIT_REPO_OWNER?: string;
  RAILWAY_GIT_COMMIT_MESSAGE?: string;
}> {
  return createEnv({
    server: {
      RAILWAY_PUBLIC_DOMAIN: vOptional(vString()),
      RAILWAY_PRIVATE_DOMAIN: vOptional(vString()),
      RAILWAY_TCP_PROXY_DOMAIN: vOptional(vString()),
      RAILWAY_TCP_PROXY_PORT: vOptional(vString()),
      RAILWAY_TCP_APPLICATION_PORT: vOptional(vString()),
      RAILWAY_PROJECT_NAME: vOptional(vString()),
      RAILWAY_PROJECT_ID: vOptional(vString()),
      RAILWAY_ENVIRONMENT_NAME: vOptional(vString()),
      RAILWAY_ENVIRONMENT_ID: vOptional(vString()),
      RAILWAY_SERVICE_NAME: vOptional(vString()),
      RAILWAY_SERVICE_ID: vOptional(vString()),
      RAILWAY_REPLICA_ID: vOptional(vString()),
      RAILWAY_DEPLOYMENT_ID: vOptional(vString()),
      RAILWAY_SNAPSHOT_ID: vOptional(vString()),
      RAILWAY_VOLUME_NAME: vOptional(vString()),
      RAILWAY_VOLUME_MOUNT_PATH: vOptional(vString()),
      RAILWAY_RUN_UID: vOptional(vString()),
      RAILWAY_GIT_COMMIT_SHA: vOptional(vString()),
      RAILWAY_GIT_AUTHOR_EMAIL: vOptional(vString()),
      RAILWAY_GIT_BRANCH: vOptional(vString()),
      RAILWAY_GIT_REPO_NAME: vOptional(vString()),
      RAILWAY_GIT_REPO_OWNER: vOptional(vString()),
      RAILWAY_GIT_COMMIT_MESSAGE: vOptional(vString()),
    },
    runtimeEnv: process.env,
  });
}

/**
 * Fly.io Environment Variables
 * @see https://fly.io/docs/machines/runtime-environment/#environment-variables
 */
export function fly(): Readonly<{
  FLY_APP_NAME?: string;
  FLY_MACHINE_ID?: string;
  FLY_ALLOC_ID?: string;
  FLY_REGION?: string;
  FLY_PUBLIC_IP?: string;
  FLY_IMAGE_REF?: string;
  FLY_MACHINE_VERSION?: string;
  FLY_PRIVATE_IP?: string;
  FLY_PROCESS_GROUP?: string;
  FLY_VM_MEMORY_MB?: string;
  PRIMARY_REGION?: string;
}> {
  return createEnv({
    server: {
      FLY_APP_NAME: vOptional(vString()),
      FLY_MACHINE_ID: vOptional(vString()),
      FLY_ALLOC_ID: vOptional(vString()),
      FLY_REGION: vOptional(vString()),
      FLY_PUBLIC_IP: vOptional(vString()),
      FLY_IMAGE_REF: vOptional(vString()),
      FLY_MACHINE_VERSION: vOptional(vString()),
      FLY_PRIVATE_IP: vOptional(vString()),
      FLY_PROCESS_GROUP: vOptional(vString()),
      FLY_VM_MEMORY_MB: vOptional(vString()),
      PRIMARY_REGION: vOptional(vString()),
    },
    runtimeEnv: process.env,
  });
}
