// Extract the static content section without running the browser application.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.join(__dirname, "..");
const source = fs
  .readFileSync(path.join(root, "app.js"), "utf8")
  .split("const $ = (selector)")[0];
const { prompts, guard } = vm.runInNewContext(
  source + "\n({ prompts, guard });",
);
const content =
  "# 问深一层 · 8 个可复用的思考提示词\n\n中文改写与延伸设计，非来源原文逐字翻译。替换方括号内容即可使用。\n\n" +
  prompts
    .map(
      (p, i) =>
        `## ${i + 1}. ${p.title}\n\n**${p.question}**\n\n适用：${p.description}\n\n\`\`\`text\n${p.text}\n\`\`\`\n\n来源：[${p.source.name}](${p.source.url})\n\n${p.source.credit}\n`,
    )
    .join("\n---\n\n") +
  `\n## 通用附加句\n\n${guard}\n\n完整来源与许可请见 [README](README.md#来源与许可)。\n`;
fs.writeFileSync(path.join(root, "prompts.md"), content);
console.log(`Exported ${prompts.length} prompts to prompts.md`);
