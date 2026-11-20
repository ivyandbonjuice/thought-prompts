const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const source = ["content.js", "content-en.js", "i18n.js"]
  .map((file) => fs.readFileSync(path.join(root, file), "utf8"))
  .join("\n");
const { exportMarkdown } = vm.runInNewContext(
  source + "\n({ exportMarkdown });",
);
for (const [lang, filename] of [
  ["en", "prompts-en.md"],
  ["zh", "prompts.md"],
]) {
  fs.writeFileSync(path.join(root, filename), exportMarkdown(lang));
  console.log(`Exported ${lang} templates to ${filename}`);
}
