"use strict";

// HTML values below are trusted, authored UI copy. User input is always rendered as text.
const ui = {
  en: {
    title: "Think Again — Prompts for Deeper Thinking",
    description:
      "Eight reusable prompts to question assumptions, test decisions and uncover blind spots. Search, personalize and copy. Available in English and Chinese.",
    skip: "Skip to the prompt library",
    brand: "Think Again",
    brandHome: "Think Again home",
    navLabel: "Main navigation",
    explore: "Explore prompts <span>↘</span>",
    eyebrow: "GOOD QUESTIONS FOR THOUGHTFUL PEOPLE",
    hero: 'Pause the autopilot.<br>Think <span class="emphasis">a little deeper.<svg viewBox="0 0 400 16" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10 Q180 -1 395 7 M40 15 Q220 5 370 12"/></svg></span>',
    heroDescription:
      "Some questions deserve a different approach.<br>Bring these eight prompts into your AI conversations to uncover blind spots, test your judgment and turn ideas into action.",
    find: "Find my question <span>↘</span>",
    random: "A fresh perspective <span>↗</span>",
    meta: "<span>08 curated prompts</span><span>Sources included</span><span>Free · No sign-up</span>",
    noteTop: "A different question to try",
    note: "What am I treating<br>as <span>fact</span> that is really<br>an <span>assumption?</span>",
    noteLabel: "01 / THE ASSUMPTION AUDIT",
    noteOpen: "Try this prompt <span>↗</span>",
    noteAria: "Open The Assumption Audit",
    toolkit: "THE TOOLKIT",
    libraryTitle: "What’s on your mind?",
    download: "Download all prompts <span>↓</span>",
    filterLabel: "Filter by situation",
    categories: {
      全部: "All",
      看见盲点: "Blind spots",
      做出决策: "Decisions",
      学得更深: "Learning",
      复盘成长: "Reflection",
    },
    searchPlaceholder: "Search questions, situations, keywords…",
    searchLabel: "Search prompts",
    resultsHint: "Pick a card. Start a better conversation.",
    empty: "No prompts found",
    emptyHint:
      "Try “learning,” “evidence” or “plan,” or explore all eight prompts.",
    reset: "Reset filters",
    guideTitle: "Good questions.<br>Your real experience.",
    guideIntro: "Start with one question that matters to you right now.",
    guide1Title: "Add a little context",
    guide1:
      "Open a template and add your experiences, evidence and constraints. Concrete examples make the conversation more useful.",
    guide2Title: "Copy. Start talking.",
    guide2:
      "Paste into your favorite AI tool. Some prompts ask one question at a time. Give yourself space to think before replying.",
    guide3Title: "Leave with one action",
    guide3:
      "Treat the answer as a perspective to test. Check the key facts, then try one small action to put your new judgment to work.",
    footerTagline: "Keep good questions close.",
    footerNote:
      'Adapted from public methods; sources appear with each prompt.<br>“Actions vs. Priorities” is an original extension. Credits and licenses: <a href="https://github.com/ivyandbonjuice/thought-prompts#来源与许可" target="_blank" rel="noopener noreferrer">README ↗</a>.<br>Your entries stay in this page’s memory. Nothing is uploaded or saved permanently.',
    close: "Close prompt",
    fieldsTitle: "Make it yours <span>optional</span>",
    fieldsHint:
      "The template updates as you type. Leave fields blank to keep the placeholders.",
    guardLabel: "Add “ask when information is missing”",
    privacy: "Entries stay in this page’s memory and clear on reload.",
    previewTitle: "Ready to think again",
    previewHint: "Ready to copy",
    share: "Copy share link <span>↗</span>",
    copyOriginal: "Copy template",
    copyFilled: "Copy my prompt <span>↗</span>",
    copy: "Copy prompt",
    open: "Open",
    copyAria: "Copy template:",
    copied: "Copied:",
    source: "Source / ",
    license: " View CC BY 4.0 ↗",
    noFields:
      "This is a follow-up prompt. No fields to fill in: paste it into a conversation after an AI answer.",
    copyError: "Copy failed. Select the prompt text and copy it manually.",
    originalCopied: "Template copied. Paste it into your favorite AI tool.",
    filledCopied: "Prompt copied. Start a better conversation.",
    shareCopied:
      "Link copied with this language. Your entries are not included.",
    downloaded: "Download started, including all templates and source credits.",
    count: (n) => `${n} ${n === 1 ? "prompt" : "prompts"}`,
    filename: "think-again-8-prompts-en.md",
    exportIntro:
      "# Think Again · Prompts for Deeper Thinking\n\nAdaptations and an original extension; not verbatim source quotations. Replace the bracketed placeholders before use.\n\n",
    suitable: "When to use",
    exportSource: "Source",
    exportGuard: "Optional addition",
    exportLicense: "Full credits and licenses",
  },
  zh: {
    title: "问深一层 — 可复用的思考提示词",
    description:
      "8 个值得反复使用的思考型 Prompt：审计假设、检验决策、发现盲点。搜索、填空、一键复制，支持中英文切换。",
    skip: "跳到提示词库",
    brand: "问深一层",
    brandHome: "问深一层首页",
    navLabel: "主导航",
    explore: "探索提示词 <span>↘</span>",
    eyebrow: "给认真思考的人，一组好问题",
    hero: '让惯性停一下，<br>让思考<span class="emphasis">再深一层<svg viewBox="0 0 400 16" preserveAspectRatio="none" aria-hidden="true"><path d="M3 10 Q180 -1 395 7 M40 15 Q220 5 370 12"/></svg></span>。',
    heroDescription:
      "有些问题，值得换个方式问。<br>把这 8 个提示词放进你的 AI 对话，发现盲点、检验判断，把想法变成行动。",
    find: "找到我的问题 <span>↘</span>",
    random: "给我一个新视角 <span>↗</span>",
    meta: "<span>08 个精选模板</span><span>可追溯来源</span><span>免费 · 无需登录</span>",
    noteTop: "换一个问题，试试看",
    note: "我把什么<span>猜测，</span><br>当成了<span>事实？</span>",
    noteLabel: "01 / 假设审计",
    noteOpen: "打开这个提示词 <span>↗</span>",
    noteAria: "打开假设审计提示词",
    toolkit: "THE TOOLKIT / 思考工具箱",
    libraryTitle: "此刻，你想想清楚什么？",
    download: "下载全部模板 <span>↓</span>",
    filterLabel: "按场景筛选",
    categories: {
      全部: "全部",
      看见盲点: "看见盲点",
      做出决策: "做出决策",
      学得更深: "学得更深",
      复盘成长: "复盘成长",
    },
    searchPlaceholder: "搜索问题、场景或关键词…",
    searchLabel: "搜索提示词",
    resultsHint: "选择一张卡片，开始一次更好的对话",
    empty: "没有找到这个问题",
    emptyHint: "试试「学习」「证据」或「计划」，也可以重新查看全部模板。",
    reset: "重置筛选",
    guideTitle: "好问题，<br>需要真实的你。",
    guideIntro: "不必一次用完。选一个与你此刻有关的问题就好。",
    guide1Title: "给一点真实背景",
    guide1:
      "打开模板，填写你的经历、证据与限制。具体的例子比宽泛的角色设定更有用。",
    guide2Title: "复制，开启对话",
    guide2:
      "粘贴到你常用的 AI 工具。有些模板会一次问一个问题，留一点时间自己思考。",
    guide3Title: "带走一个行动",
    guide3: "把回答当作待检验的视角。核实关键事实，用一个小行动验证新的判断。",
    footerTagline: "把好问题，留在手边。",
    footerNote:
      '基于公开方法整理的中文改写，来源见各模板。<br>「行为与目标对照」为延伸设计。内容与代码许可见 <a href="https://github.com/ivyandbonjuice/thought-prompts#来源与许可" target="_blank" rel="noopener noreferrer">README ↗</a>。<br>填写内容仅保留在当前页面，不上传、不持久保存。',
    close: "关闭提示词",
    fieldsTitle: "填入你的情况 <span>选填</span>",
    fieldsHint: "填写后，模板会同步更新。留空则保留占位符。",
    guardLabel: "附加「信息不足先追问」",
    privacy: "输入仅在当前页面内存中保留；刷新即清空。",
    previewTitle: "准备好，问深一层",
    previewHint: "可直接复制",
    share: "复制分享链接 <span>↗</span>",
    copyOriginal: "复制原模板",
    copyFilled: "复制我的提示词 <span>↗</span>",
    copy: "复制模板",
    open: "打开",
    copyAria: "复制原模板：",
    copied: "已复制：",
    source: "来源 / ",
    license: " 查看 CC BY 4.0 ↗",
    noFields:
      "这是一条追问模板，无需填写。复制后，粘贴到已有 AI 回答的对话中即可。",
    copyError: "自动复制未成功，请选中模板文字手动复制。",
    originalCopied: "原模板已复制，可粘贴到任意 AI 对话。",
    filledCopied: "提示词已复制，开启一次更好的对话。",
    shareCopied: "已复制当前语言的分享链接，不包含你填写的内容。",
    downloaded: "已发起下载，包含全部模板与来源说明。",
    count: (n) => `${n} 个提示词`,
    filename: "问深一层-8个思考提示词-zh.md",
    exportIntro:
      "# 问深一层 · 可复用的思考提示词\n\n中文改写与延伸设计；非来源原文逐字翻译。填写方括号内容后使用。\n\n",
    suitable: "适用",
    exportSource: "来源",
    exportGuard: "通用附加句",
    exportLicense: "完整来源与许可",
  },
};

function exportMarkdown(lang) {
  const t = ui[lang];
  return (
    t.exportIntro +
    promptSets[lang]
      .map(
        (p, i) =>
          `## ${i + 1}. ${p.title}\n\n${p.question}\n\n${t.suitable}: ${p.description}\n\n\`\`\`text\n${p.text}\n\`\`\`\n\n${t.exportSource}: [${p.source.name}](${p.source.url})\n\n${p.source.credit}\n`,
      )
      .join("\n---\n\n") +
    `\n## ${t.exportGuard}\n\n${guards[lang]}\n\n${t.exportLicense}: https://github.com/ivyandbonjuice/thought-prompts#来源与许可\n`
  );
}
