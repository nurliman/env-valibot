import fs from "fs-extra";
import path from "node:path";
import { getPackages } from "@manypkg/get-packages";

async function sychronizeVersion(pkgPath = process.cwd()) {
  // get version from package.json
  const pkgJsonPath = path.join(pkgPath, "package.json");

  // check if package.json exists
  if (!fs.existsSync(pkgJsonPath)) return;

  const pkgJsonStr = await fs.readFile(pkgJsonPath);
  const pkgJson = JSON.parse(pkgJsonStr);
  const pkgVersion = pkgJson.version;

  if (!pkgVersion) return;

  // write version to deno.json
  const denoJsonPath = path.join(pkgPath, "deno.json");

  // check if deno.json exists
  if (!fs.existsSync(denoJsonPath)) return;

  const denoJsonStr = await fs.readFile(denoJsonPath);
  const denoJson = JSON.parse(denoJsonStr);
  denoJson.version = pkgVersion;
  await fs.writeFile(denoJsonPath, JSON.stringify(denoJson, null, 2));
}

async function main() {
  const { packages, rootPackage } = await getPackages(process.cwd());
  const allPackages = [rootPackage, ...packages];
  const syncTasks = allPackages.map((pkg) => sychronizeVersion(pkg.dir));
  await Promise.all(syncTasks);
}

main();
