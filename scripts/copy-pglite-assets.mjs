#!/usr/bin/env node
/**
 * Nitro bundles PGLite into the Vercel function but does not emit the wasm
 * and filesystem blob that the bundle loads next to itself. Without them the
 * server throws ENOENT and every route 500s.
 */
import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const from = join(root, "node_modules/@electric-sql/pglite/dist");
const to = join(root, ".vercel/output/functions/__server.func/_libs");
const files = ["pglite.wasm", "initdb.wasm", "pglite.data"];

await mkdir(to, { recursive: true });
for (const name of files) {
  await copyFile(join(from, name), join(to, name));
}
console.log(`[pglite] copied ${files.join(", ")} into the Vercel function`);
