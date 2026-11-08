import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const sourceRoot = "D:/firdge_manager/pantrio-privacy";
const outputRoot = "src/legal-content";
const pages = [
  ["privacy", "index.html"],
  ["terms", "terms-of-use.html"],
  ["delete-account", "delete-account.html"],
  ["subprocessors", "subprocessors.html"],
  ["licenses", "licenses.html"],
];
const locales = {
  en: {
    source: "",
    routes: {
      "index.html": "/privacy/",
      "terms-of-use.html": "/terms/",
      "support.html": "/support/",
      "delete-account.html": "/support/delete-account/",
      "subprocessors.html": "/subprocessors/",
      "licenses.html": "/licenses/",
    },
    form: "https://forms.gle/bLcumMVMQak9A3H99",
  },
  zh: {
    source: "zh-Hans",
    routes: {
      "index.html": "/zh/privacy/",
      "terms-of-use.html": "/zh/terms/",
      "support.html": "/zh/support/",
      "delete-account.html": "/zh/support/delete-account/",
      "subprocessors.html": "/zh/subprocessors/",
      "licenses.html": "/zh/licenses/",
    },
    form: "https://forms.gle/8kr1TrdPfExXGjr78",
  },
};

for (const [locale, config] of Object.entries(locales)) {
  await mkdir(join(outputRoot, locale), { recursive: true });

  for (const [slug, fileName] of pages) {
    const sourcePath = join(sourceRoot, config.source, fileName);
    const html = await readFile(sourcePath, "utf8");
    const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1];

    if (!main) {
      throw new Error(`No main content found in ${sourcePath}`);
    }

    let content = main
      .replaceAll("Pantrio", "FridgeVista")
      .replaceAll("support.pantrio@gmail.com", "support.fridgevista@gmail.com")
      .replaceAll("Support Forum", "Help Center")
      .replaceAll("support forum", "help center")
      .replaceAll("支持论坛", "帮助中心")
      .replaceAll("FridgeVista support form", "FridgeVista help center request")
      .replaceAll("support form", "help center request")
      .replaceAll("中文客服表单", "中文帮助中心请求表单")
      .replaceAll("支持表单", "帮助中心请求表单")
      .replace(/https:\/\/forms\.gle\/[A-Za-z0-9]+/g, config.form);

    for (const [from, to] of Object.entries(config.routes)) {
      content = content.replaceAll(`href="${from}"`, `href="${to}"`);
    }

    await writeFile(join(outputRoot, locale, `${slug}.html`), `${content.trim()}\n`);
  }
}

console.log(`Imported ${pages.length * Object.keys(locales).length} legal content fragments.`);
