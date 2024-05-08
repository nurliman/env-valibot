import fse from "fs-extra";
import path from "node:path";
import { getPackages } from "@manypkg/get-packages";

async function sychronizeVersion(pkgPath = process.cwd()) {
  // get version from package.json
  const pkgJsonPath = path.join(pkgPath, "package.json");

  // check if package.json exists
  if (!fse.existsSync(pkgJsonPath)) return;

  const pkgJson = await fse.readJSON(pkgJsonPath);
  const pkgVersion = pkgJson.version;

  if (!pkgVersion) return;

  // write version to deno.json
  const denoJsonPath = path.join(pkgPath, "deno.json");

  // check if deno.json exists
  if (!fse.existsSync(denoJsonPath)) return;

  const denoJson = await fse.readJSON(denoJsonPath);
  denoJson.version = pkgVersion;
  await fse.writeJSON(denoJsonPath, denoJson, { spaces: 2 });
}

async function main() {
  const { packages, rootPackage } = await getPackages(process.cwd());
  const allPackages = [rootPackage, ...packages];
  const syncTasks = allPackages.map((pkg) => sychronizeVersion(pkg.dir));
  await Promise.all(syncTasks);
}

main();
