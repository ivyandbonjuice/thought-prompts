# Think Again / 问深一层

**English is the default.** Switch between English and Chinese in the header or inside any prompt. All eight templates, fields, source credits, clipboard actions and Markdown downloads follow the selected language. Switching preserves your entries without uploading them.

- [English (default)](https://ivyandbonjuice.github.io/thought-prompts/)
- [中文](https://ivyandbonjuice.github.io/thought-prompts/?lang=zh)
- Read the templates: [English](prompts-en.md) / [中文](prompts.md)

让惯性停一下，让思考再深一层。一个可以搜索、填空和一键复制的中文思考提示词库。

**在线使用：https://ivyandbonjuice.github.io/thought-prompts/**

## 功能

- 默认英文，支持中英文切换；界面、全文、填空提示、复制和下载均已本地化。
- 搜索同时匹配中英文；切换语言保留当前分类和填写内容。
- 8 个完整模板：假设审计、最强反方、事前验尸、重写问题、理解检测、复盘去滤镜、行为与目标对照、反审 AI。
- 按场景筛选，搜索标题、正文和来源；按 `/` 聚焦搜索。
- 填入个人背景，实时生成可复制的提示词；也可以直接复制原模板。
- 单条分享链接，例如 `#prompt=assumptions`。
- 一键下载全部模板为 Markdown；也可直接阅读 [prompts.md](prompts.md)。
- 响应式布局，键盘可操作的原生弹窗，支持减少动态效果偏好。
- 纯 HTML / CSS / JavaScript，无构建步骤、无第三方依赖、无分析追踪。

## 本地使用

下载仓库后直接打开 `index.html`，或者运行：

```sh
python3 -m http.server 8765
```

访问 `http://localhost:8765`。剪贴板接口在 HTTPS 或 localhost 上支持最好；页面包含旧式复制回退。复制仍失败时，可手动选中正文复制。

## 修改内容

在 `content.js` 的 `promptsZh` 和 `content-en.js` 的 `promptsEn` 数组中编辑中英文模板。界面翻译在 `i18n.js` 中。两种语言的模板 ID、顺序及每条的字段顺序必须保持一致，以便切换时保留填写内容。每条包括稳定 ID、标题、分类、问题、说明、来源、输入字段和正文。`fields` 的第一项对应正文中的 `[占位符]`。站点全部资源使用相对路径，可部署在 GitHub Pages 仓库子目录。

模板更新后运行 `node scripts/export-prompts.cjs`，同步生成 `prompts.md` 和 `prompts-en.md`。

## 发布

GitHub Pages 从 `main` 分支的根目录发布。推送静态文件后 GitHub 会自动构建部署。在仓库 Settings → Pages 可查看部署状态。

## 隐私

填写内容只存在当前页面的内存中，不提交到服务器，不写入浏览器持久存储，刷新即清空。无 `lang` 参数时始终默认英文，不根据浏览器语言或旧偏好自动切换。`?lang=en` 和 `?lang=zh` 指定页面语言，刷新会保留 URL 中的选择。复制分享链接包含模板 ID 和语言，不包含填空内容。下载全部模板导出的是公开原模板，不包含个人输入。点击外部来源或把复制的内容发送给其他 AI 服务，适用对方的隐私政策。

## 来源与许可

这些模板最初根据公开网页检索整理，当前版本为中文改写，不是来源原文逐字翻译；来源机构或作者未背书本项目。提示词用于辅助思考，不保证 AI 输出正确。

| 模板              | 来源与处理方式                                                                                                                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 假设审计、反审 AI | 参考 [Coursera 的批判性思维提示词文章](https://www.coursera.org/articles/chatgpt-critical-thinking)，重新编写与组合                                                                                                  |
| 最强反方          | 改编自 Ethan Mollick、Lilach Mollick 的 Devil’s Advocate                                                                                                                                                             |
| 事前验尸          | 改编自 Ethan Mollick、Lilach Mollick 的 Team Premortem                                                                                                                                                               |
| 理解检测          | 改编自 Ethan Mollick、Lilach Mollick 的 Updated Teach the AI as Student                                                                                                                                              |
| 复盘去滤镜        | 改编自 Ethan Mollick、Lilach Mollick 的 Team After Action Review                                                                                                                                                     |
| 重写问题          | 参考 [MIT Sloan 对 Hal Gregersen 的 Question Burst Catalyst 的介绍](https://mitsloan.mit.edu/ideas-made-to-matter/ai-tool-helps-you-ask-better-questions-get-more-authentic-results)，独立编写；非该工具的原始提示词 |
| 行为与目标对照    | 本项目基于复盘方法进行的延伸设计，非上述作者原话                                                                                                                                                                     |

Mollick 模板原始地址：[Student Exercises](https://www.moreusefulthings.com/student-exercises)。原作者为 **Ethan Mollick 和 Lilach Mollick**，原模板按 **[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)** 授权。本项目对四项模板做了中文翻译、精简、问题补充和流程调整，改编文本亦按 CC BY 4.0 提供，转载应保留原作者、来源、许可链接和改编说明。「行为与目标对照」由本项目按 CC BY 4.0 提供，署名「问深一层 / ivyandbonjuice」。

其余参考来源的原始网页版权归各自权利人；本项目不对其原文重新授权。代码采用 [MIT License](LICENSE)，其中提示词文本及第三方内容不属于 MIT 代码许可范围。
