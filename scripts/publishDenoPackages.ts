import fs from "fs-extra";
import path from "node:path";
import { getPackages } from "@manypkg/get-packages";
import { execa } from "execa";

async function publishDenoPackage(pkgPath = process.cwd()) {
  // get version from package.json
  const pkgJsonPath = path.join(pkgPath, "package.json");

  // check if package.json exists
  if (!fs.existsSync(pkgJsonPath)) return;

  // write version to deno.json
  const denoJsonPath = path.join(pkgPath, "deno.json");

  // check if deno.json exists
  if (!fs.existsSync(denoJsonPath)) return;

  await execa("npx", ["jsr", "publish", "--allow-dirty"], {
    cwd: pkgPath,
    stdio: "inherit",
  });
}

async function main() {
  const { packages, rootPackage } = await getPackages(process.cwd());
  const allPackages = [rootPackage, ...packages];
  const publishTasks = allPackages.map((pkg) => publishDenoPackage(pkg.dir));
  await Promise.all(publishTasks);
}

main();
