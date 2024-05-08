import fse from "fs-extra";
import path from "node:path";
import { getPackages } from "@manypkg/get-packages";
import { $ } from "bun";

async function publishDenoPackage(pkgPath = process.cwd()) {
  // get version from package.json
  const pkgJsonPath = path.join(pkgPath, "package.json");

  // check if package.json exists
  if (!fse.existsSync(pkgJsonPath)) return;

  // write version to deno.json
  const denoJsonPath = path.join(pkgPath, "deno.json");

  // check if deno.json exists
  if (!fse.existsSync(denoJsonPath)) return;

  const denoJson = await fse.readJson(denoJsonPath);

  // check if version exists
  if (!denoJson.version) return;

  await $`bunx jsr publish --allow-dirty`;
}

async function main() {
  const { packages, rootPackage } = await getPackages(process.cwd());
  const allPackages = [rootPackage, ...packages];
  const publishTasks = allPackages.map((pkg) => {
    if (pkg?.dir) publishDenoPackage(pkg.dir);
  });
  await Promise.all(publishTasks);
}

main();
