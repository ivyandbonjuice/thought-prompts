"use strict";

const $ = (selector) => document.querySelector(selector);
const dialog = $("#prompt-dialog");
let language =
  new URL(location.href).searchParams.get("lang") === "zh" ? "zh" : "en";
let prompts = promptSets[language];
let t = ui[language];
let category = "全部";
let activePrompt = null;
let toastTimer;
let previousFocus;
const drafts = new Map();

function element(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
function announce(message) {
  const toast = $("#toast");
  (dialog.open ? dialog : document.body).append(toast);
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3000);
}
async function copyText(text) {
  try {
    if (!navigator.clipboard?.writeText)
      throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(text);
  } catch {
    const oldFocus = document.activeElement;
    const field = element("textarea");
    field.value = text;
    field.style.cssText =
      "position:fixed;left:0;top:0;opacity:0;font-size:16px";
    (dialog.open ? dialog : document.body).append(field);
    field.focus();
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    oldFocus?.focus({ preventScroll: true });
    if (!copied) throw new Error("Copy failed");
  }
}
async function copyWithFeedback(text, message) {
  try {
    await copyText(text);
    announce(message);
  } catch {
    announce(t.copyError);
  }
}
function renderCards() {
  const query = $("#search").value.trim().toLocaleLowerCase();
  const filtered = prompts.filter((p, index) => {
    const variants = [promptSets.en[index], promptSets.zh[index]];
    const searchable = variants
      .map(
        (item) =>
          `${item.title} ${item.question} ${item.description} ${item.text} ${item.source.name}`,
      )
      .join(" ")
      .toLocaleLowerCase();
    return (
      (category === "全部" || p.category === category) &&
      searchable.includes(query)
    );
  });
  const cards = $("#cards");
  cards.replaceChildren();
  filtered.forEach((p, i) => {
    const number = String(prompts.indexOf(p) + 1).padStart(2, "0");
    const card = element("article", `card${p.recommended ? " featured" : ""}`);
    card.dataset.category = p.category;
    card.style.setProperty("--i", i);
    const main = element("button", "card-main");
    main.type = "button";
    main.setAttribute("aria-label", `${t.open} ${p.title}: ${p.question}`);
    const top = element("div", "card-top");
    top.append(
      element("span", "card-number", number),
      element("span", "card-category", t.categories[p.category]),
    );
    main.append(
      top,
      element("h3", "", p.title),
      element("p", "card-question", p.question),
      element("p", "card-description", p.description),
    );
    main.addEventListener("click", () => openPrompt(p.id));
    const bottom = element("div", "card-bottom");
    const copy = element("button", "copy-card", t.copy);
    copy.setAttribute("aria-label", `${t.copyAria} ${p.title}`);
    copy.append(element("span", "", "⧉"));
    copy.addEventListener("click", () =>
      copyWithFeedback(p.text, `${t.copied} ${p.title}`),
    );
    bottom.append(element("span", "card-source", p.sourceShort), copy);
    card.append(main, bottom);
    cards.append(card);
  });
  $("#result-count").textContent =
    `${t.count(filtered.length)}${category !== "全部" ? ` · ${t.categories[category]}` : ""}`;
  $("#empty-state").hidden = filtered.length > 0;
}
function filledText() {
  if (!activePrompt) return "";
  const draft = drafts.get(activePrompt.id) || {};
  const text = activePrompt.text.replace(
    /\[([^\]]+)\]/g,
    (match, key) =>
      draft[
        activePrompt.fields.findIndex((field) => field[0] === key)
      ]?.trim() || match,
  );
  return text + ($("#add-guard").checked ? `\n\n${guards[language]}` : "");
}
function updatePreview() {
  $("#prompt-preview").textContent = filledText();
}
function openPrompt(id, updateUrl = true) {
  const p = prompts.find((item) => item.id === id);
  if (!p) return;
  if (!dialog.open) previousFocus = document.activeElement;
  activePrompt = p;
  $("#dialog-kicker").textContent =
    `${String(prompts.indexOf(p) + 1).padStart(2, "0")} / ${t.categories[p.category]}`;
  $("#dialog-title").textContent = p.title;
  $("#dialog-question").textContent = p.question;
  $("#dialog-use").textContent = p.description;
  const fields = $("#prompt-fields");
  fields.replaceChildren();
  const draft = drafts.get(id) || {};
  if (!p.fields.length) fields.append(element("p", "dialog-use", t.noFields));
  p.fields.forEach(([key, label, placeholder], i) => {
    const wrapper = element("label", "field");
    const input = element("textarea");
    input.id = `field-${i}`;
    input.placeholder = placeholder;
    input.value = draft[i] || "";
    input.rows = 2;
    input.addEventListener("input", () => {
      const values = drafts.get(id) || {};
      values[i] = input.value;
      drafts.set(id, values);
      updatePreview();
    });
    wrapper.append(element("span", "", label), input);
    fields.append(wrapper);
  });
  const source = $("#dialog-source");
  const link = element("a", "", `${p.source.name} ↗`);
  link.href = p.source.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  source.replaceChildren(
    document.createTextNode(t.source),
    link,
    document.createElement("br"),
    document.createTextNode(p.source.credit),
  );
  if (p.source.url === mollick.url || p.id === "alignment") {
    const license = element("a", "", t.license);
    license.href = "https://creativecommons.org/licenses/by/4.0/";
    license.target = "_blank";
    license.rel = "noopener noreferrer";
    source.append(license);
  }
  updatePreview();
  if (updateUrl) history.replaceState(null, "", `#prompt=${p.id}`);
  if (!dialog.open) dialog.showModal();
  document.body.style.overflow = "hidden";
  dialog.scrollTop = 0;
  $("#close-dialog").focus({ preventScroll: true });
}
function syncHash() {
  const match = location.hash.match(/^#prompt=([a-z-]+)$/);
  if (match && prompts.some((p) => p.id === match[1]))
    openPrompt(match[1], false);
  else if (dialog.open) dialog.close();
}
document.querySelectorAll(".filter").forEach((button) =>
  button.addEventListener("click", () => {
    category = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderCards();
  }),
);
$("#search").addEventListener("input", renderCards);
$("#reset-search").addEventListener("click", () => {
  $("#search").value = "";
  document.querySelector('[data-filter="全部"]').click();
  $("#search").focus();
});
document
  .querySelectorAll("[data-open]")
  .forEach((button) =>
    button.addEventListener("click", () => openPrompt(button.dataset.open)),
  );
$("#random-prompt").addEventListener("click", () =>
  openPrompt(prompts[Math.floor(Math.random() * prompts.length)].id),
);
$("#close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  const rect = dialog.getBoundingClientRect();
  if (
    event.target === dialog &&
    (event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom)
  )
    dialog.close();
});
dialog.addEventListener("close", () => {
  document.body.style.overflow = "";
  document.body.append($("#toast"));
  if (location.hash.startsWith("#prompt="))
    history.replaceState(
      null,
      "",
      `${location.pathname}${location.search}#library`,
    );
  previousFocus?.focus({ preventScroll: true });
});
$("#add-guard").addEventListener("change", updatePreview);
$("#copy-original").addEventListener("click", () =>
  copyWithFeedback(activePrompt.text, t.originalCopied),
);
$("#copy-filled").addEventListener("click", () =>
  copyWithFeedback(filledText(), t.filledCopied),
);
$("#share-prompt").addEventListener("click", () => {
  const url = new URL(location.href);
  url.search = "";
  url.searchParams.set("lang", language);
  url.hash = `prompt=${activePrompt.id}`;
  copyWithFeedback(url.href, t.shareCopied);
});
$("#download-all").addEventListener("click", () => {
  const content = exportMarkdown(language);
  const url = URL.createObjectURL(
    new Blob([content], { type: "text/markdown;charset=utf-8" }),
  );
  const link = element("a");
  link.href = url;
  link.download = t.filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  announce(t.downloaded);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey &&
    !dialog.open &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    event.preventDefault();
    $("#search").focus();
  }
});
window.addEventListener("hashchange", syncHash);
applyLanguage();
syncHash();

function applyLanguage() {
  t = ui[language];
  prompts = promptSets[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.description;
  document.querySelector('meta[property="og:title"]').content = t.title;
  document.querySelector('meta[property="og:description"]').content =
    t.description;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t[el.dataset.i18n];
  });
  $(".brand").setAttribute("aria-label", t.brandHome);
  $(".brand-mark").firstChild.textContent = language === "zh" ? "问" : "?";
  $(".site-header nav").setAttribute("aria-label", t.navLabel);
  $(".filters").setAttribute("aria-label", t.filterLabel);
  $("#search").placeholder = t.searchPlaceholder;
  $("#search").setAttribute("aria-label", t.searchLabel);
  $("#close-dialog").setAttribute("aria-label", t.close);
  document
    .querySelector('[data-open="assumptions"]')
    .setAttribute("aria-label", t.noteAria);
  document.querySelectorAll(".filter").forEach((button) => {
    button.textContent = t.categories[button.dataset.filter];
    if (button.dataset.filter === "全部")
      button.append(document.createTextNode(" "), element("span", "", "08"));
  });
  document
    .querySelectorAll("[data-lang]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.lang === language),
      ),
    );
  document.querySelectorAll(".brand, .footer-brand").forEach((link) => {
    link.href = language === "zh" ? "?lang=zh" : "./";
  });
  $("#toast").classList.remove("visible");
  $("#toast").textContent = "";
  renderCards();
  if (dialog.open && activePrompt) openPrompt(activePrompt.id, false);
}

document.querySelectorAll("[data-lang]").forEach((button) =>
  button.addEventListener("click", () => {
    if (button.dataset.lang === language) return;
    language = button.dataset.lang;
    const url = new URL(location.href);
    url.searchParams.set("lang", language);
    history.replaceState(null, "", url);
    applyLanguage();
    button.focus({ preventScroll: true });
  }),
);
