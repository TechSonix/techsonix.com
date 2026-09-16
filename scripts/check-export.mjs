import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("out");
const failures = [];
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const lists = await Promise.all(
    entries.map((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    ),
  );
  return lists.flat();
}
const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const htmlByPath = new Map(
  await Promise.all(
    htmlFiles.map(async (file) => [file, await readFile(file, "utf8")]),
  ),
);
for (const [file, html] of htmlByPath) {
  const currentPath =
    "/" + path.relative(root, file).replace(/index\.html$/, "");
  if (!html.includes('<main id="main"'))
    failures.push(`${currentPath}: missing main landmark`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1)
    failures.push(`${currentPath}: expected one h1`);
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
    const href = raw.replaceAll("&amp;", "&");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, "https://techsonix.com" + currentPath);
    let target = path.join(root, decodeURIComponent(url.pathname));
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, "index.html");
      await stat(target);
    } catch {
      failures.push(`${currentPath}: broken ${href}`);
      continue;
    }
    if (url.hash && htmlByPath.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!htmlByPath.get(target).includes(`id="${id}"`))
        failures.push(`${currentPath}: missing fragment ${href}`);
    }
  }
}
for (const route of [
  "privacy",
  "terms",
  "support",
  "community",
  "delete-data",
  "epixnet",
]) {
  const html = htmlByPath.get(path.join(root, route, "index.html")) || "";
  if (!html.includes(`href="https://techsonix.com/${route}/"`))
    failures.push(`${route}: missing canonical`);
  if (!html.includes("TechSonix")) failures.push(`${route}: missing publisher`);
}
if (
  (await readFile(path.join(root, "CNAME"), "utf8")).trim() !== "techsonix.com"
)
  failures.push("Wrong custom domain");
if (!files.includes(path.join(root, ".nojekyll")))
  failures.push("Missing .nojekyll");
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  `PASS: ${htmlFiles.length} exported pages; internal links, fragments, policy URLs, landmarks, CNAME and .nojekyll verified.`,
);
