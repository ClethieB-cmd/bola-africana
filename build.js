#!/usr/bin/env node
/* Gera o site estático na pasta _site/ (uma página de verdade para cada seção, matéria e idioma).
   Uso:  node build.js            → versão para publicar
         node build.js --preview  → mostra caixas "Publicidade" onde os anúncios vão aparecer */
"use strict";
const fs = require("fs");
const path = require("path");
const cfg = require("./config.js");
const D = require("./conteudo/dados.js");
const NEWS = require("./conteudo/noticias.js");
const X = require("./conteudo/textos-extra.js");

const PREVIEW = process.argv.includes("--preview");
const OUT = path.join(__dirname, "_site");
Object.assign(D.UI, X.UI);
const { L, T, C, CATS } = D;
const LANGS = ["pt", "fr", "en"];
const LOCALE = D.LANGS;
const OG_LOCALE = { pt: "pt_BR", fr: "fr_FR", en: "en_GB" };
const PREFIX = { pt: "", fr: "fr/", en: "en/" };
const EXTRA_UI = {
  updated: { pt: "Atualizado em {d}", fr: "Mis à jour le {d}", en: "Updated {d}" },
  homeTag: { pt: "Notícias do futebol africano", fr: "L'actualité du football africain", en: "African football news" },
  skip: { pt: "Pular para o conteúdo", fr: "Aller au contenu", en: "Skip to content" },
  footNav: { pt: "Institucional", fr: "Informations", en: "Information" }
};
Object.assign(D.UI, EXTRA_UI);

let lang = "pt";
let cur = "index.html";
const setLang = (l) => { lang = l; D.setLang(l); };

/* ---------- utilidades ---------- */
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const sorted = NEWS.slice().sort((a, b) => b.date.localeCompare(a.date));
const catName = (k) => L(CATS[k].name);
const navName = (k) => (X.NAV_SHORT[k] ? L(X.NAV_SHORT[k]) : catName(k));
const brand = () => L(X.BRAND_TITLE);

const pathOf = (id, l = lang) => PREFIX[l] + id + ".html";
const rel = (target) => "../".repeat(cur.split("/").length - 1) + target;
const u = (id, l) => rel(pathOf(id, l));
const asset = (p) => rel("assets/" + p);
const absUrl = (p) => cfg.SITE_URL.replace(/\/$/, "") + "/" + p.replace(/(^|\/)index\.html$/, "$1");

const MONTHS = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};
function dateLabel(n) {
  const [y, m, d] = n.date.slice(0, 10).split("-").map(Number);
  const mon = MONTHS[lang][m - 1];
  return n.monthOnly ? `${mon} ${y}` : `${d} ${mon} ${y}`;
}
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const fmt = (opts) => new Intl.DateTimeFormat(LOCALE[lang], { timeZone: "UTC", ...opts });
const fmtTime = (iso) => fmt({ hour: "2-digit", minute: "2-digit" }).format(new Date(iso));
const fmtDay = (iso) => cap(fmt({ weekday: "short", day: "2-digit", month: "2-digit" }).format(new Date(iso)));
const timeTag = (iso, kind, text) => `<time datetime="${iso}" data-local="${kind}">${esc(text)}</time>`;
const teamName = (f, side) => (f.club ? f[side] : C(f[side]));
const teamCode = (f, side) => (f.club ? (D.CLUB_CODES[f[side]] || f[side]) : f[side]);

const GLOBE = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#AFC0B6" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z"></path></svg>`;
const CHEV = `<svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#AFC0B6" stroke-width="2.6" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>`;
const SEARCH_ICON = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8FA398" stroke-width="2.4" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg>`;
const FAVICON = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0E1A15"/><circle cx="32" cy="32" r="14" fill="#E0A11B"/></svg>`);

/* ---------- anúncios ---------- */
function ad(name) {
  const label = `<span class="ad-label">${esc(T("adLabel"))}</span>`;
  if (cfg.ADSENSE_CLIENT && cfg.ADSENSE_SLOTS[name]) {
    return `<div class="ad ad-${name}">${label}<ins class="adsbygoogle" style="display:block" data-ad-client="${esc(cfg.ADSENSE_CLIENT)}" data-ad-slot="${esc(cfg.ADSENSE_SLOTS[name])}" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>`;
  }
  if (PREVIEW) return `<div class="ad ad-${name} ad-ph" aria-hidden="true">${label}</div>`;
  return "";
}

/* ---------- componentes ---------- */
function cover(n) {
  return `<div class="cover cat-${n.cat}" style="--cx:${n.cover.cx || "78%"}" aria-hidden="true">
    <div class="big">${esc(L(n.cover.big))}</div><div class="small">${esc(L(n.cover.small))}</div></div>`;
}
const tag = (k) => `<span class="tag cat-${k}">${esc(catName(k))}</span>`;
const meta = (n) => `<div class="meta">${tag(n.cat)}<span>${esc(dateLabel(n))}</span></div>`;
const newsUrl = (n) => u("noticias/" + n.slug);
const leadCard = (n) => `<a class="lead-story" href="${newsUrl(n)}">${cover(n)}${meta(n)}<h1>${esc(L(n.title))}</h1><p>${esc(L(n.lead))}</p></a>`;
const rowCard = (n, attrs = "") => `<a class="row-story" href="${newsUrl(n)}"${attrs}>${cover(n)}<div>${meta(n)}<h3>${esc(L(n.title))}</h3></div></a>`;
const storyCard = (n) => `<a class="story" href="${newsUrl(n)}">${cover(n)}${meta(n)}<h3>${esc(L(n.title))}</h3><p>${esc(L(n.lead))}</p></a>`;

function sectionHead(title, link, linkText, id) {
  return `<div class="section-head"><h2${id ? ` id="${id}"` : ""}>${esc(title)}</h2>${link ? `<a href="${u(link)}">${esc(linkText)}</a>` : ""}</div>`;
}
function section(k, items, title) {
  if (!items.length) return "";
  return `<section class="section cat-${k}" aria-labelledby="sec-${k}">
    ${sectionHead(title, CATS[k].route, T("seeAll", { x: catName(k) }), "sec-" + k)}
    <div class="grid-stories">${items.map(storyCard).join("")}</div></section>`;
}

function scorebar() {
  return FIXTURES_BAR().map((f) => {
    const done = !!f.score;
    const [s1, s2] = done ? f.score.split("–") : ["", ""];
    const when = done ? esc(T("ft")) : f.timeTbd ? timeTag(f.at, "day", fmtDay(f.at)) : timeTag(f.at, "daytime", `${fmtDay(f.at)} ${fmtTime(f.at)}`);
    const aria = `${teamName(f, "home")} ${s1} ${T("vs")} ${teamName(f, "away")} ${s2}, ${L(f.comp)}`;
    return `<a class="chip-match ${done ? "done" : ""} ${f.today ? "is-today" : ""}" href="${u("agenda")}" aria-label="${esc(aria)}">
      <span class="t">${esc(teamCode(f, "home"))}</span><span class="s">${esc(s1)}</span>
      <span class="t">${esc(teamCode(f, "away"))}</span><span class="s">${esc(s2)}</span>
      <span class="m">${when}</span></a>`;
  }).join("");
}
const FIXTURES_BAR = () => D.FIXTURES.filter((f) => f.bar);

function agendaList(limit) {
  const list = limit ? D.FIXTURES.slice(0, limit) : D.FIXTURES;
  let html = "", day = "";
  list.forEach((f) => {
    const d = f.at.slice(0, 10);
    if (d !== day) { day = d; html += `<div class="day">${timeTag(f.at, "day", fmtDay(f.at))}</div>`; }
    const when = f.score ? esc(f.score) : f.timeTbd ? esc(T("tbd")) : timeTag(f.at, "time", fmtTime(f.at));
    const extra = (f.score ? " · " + esc(T("ftLower")) : "") + (f.tv ? ` · <span class="tv">TV: ${esc(f.tv)}</span>` : "");
    html += `<div class="fx ${f.score ? "done" : ""} cat-${f.cat}">
      <span class="teams"><span class="flag" aria-hidden="true"></span>${esc(teamName(f, "home"))} × ${esc(teamName(f, "away"))}</span>
      <span class="when">${when}</span>
      <span class="comp">${esc(L(f.comp))}${extra}</span></div>`;
  });
  return html;
}
const tzHint = () => `<p class="hint" data-tz-template="${esc(T("tz", { tz: "{tz}" }))}">${esc(T("tzStatic"))}</p>`;
const datesList = () => `<ul class="dates">${D.KEY_DATES.map(([d, t]) => `<li><span class="d">${esc(L(d))}</span><span>${esc(L(t))}</span></li>`).join("")}</ul>`;

function sidebar() {
  return `<aside class="sidebar">
    <section class="panel"><h2>${esc(T("agenda"))}</h2>${tzHint()}${agendaList(10)}
      <p class="note" style="margin-top:10px"><a href="${u("agenda")}">${esc(T("fullAgenda"))}</a><br><a href="${u("onde-assistir")}">${esc(T("watchLink"))}</a></p></section>
    ${ad("lateral")}
    <section class="panel"><h2>${esc(T("keyDates"))}</h2>${datesList()}</section>
  </aside>`;
}

function groupsHtml(groups, k) {
  return `<div class="groups">${groups.map(([g, teams]) => `<div class="group cat-${k}"><h3>${esc(T("group"))} ${g}</h3><ol>${
    teams.map(([t, c]) => `<li><span>${esc(t ?? T("tbc"))}</span><span class="cty">${esc(c)}</span></li>`).join("")}</ol></div>`).join("")}</div>`;
}
const leaderNames = (arr) => arr.map((x) => (typeof x === "string" && D.COUNTRY[x] ? C(x) : L(x))).join(L(D.AND));
function qualTable() {
  return `<div class="table-wrap"><table><thead><tr><th>${esc(T("qGroup"))}</th><th>${esc(T("qLeader"))}</th><th class="num">${esc(T("qPts"))}</th><th>${esc(T("qNoteH"))}</th></tr></thead><tbody>${
    D.QUAL_LEADERS.map(([g, l, p, o]) => `<tr><td class="grp">${g}</td><td>${esc(leaderNames(l))}</td><td class="num">${esc(p)}</td><td>${esc(L(o))}</td></tr>`).join("")
  }</tbody></table></div><p class="note">${esc(T("qNote"))}</p>`;
}
function leaguesHtml() {
  return `<div class="leagues">${D.LEAGUES.map((l) => `<div class="league">
    <span class="country">${esc(C(l.country))}</span><span class="name">${esc(l.name)}</span>
    <span class="champ">${esc(T("champ"))} <b>${esc(l.champ)}</b></span><span class="fact">${esc(L(l.fact))}</span>
    <a class="src" href="${l.src}">${esc(T("source"))}</a></div>`).join("")}</div>
    <div class="radar" aria-label="${esc(T("radar"))}">${D.RADAR.map(([c, n]) => `<span>${esc(C(c))} · ${esc(n)}</span>`).join("")}</div>`;
}
function watchHtml() {
  return X.WATCH.map((w) => `<section class="watch cat-${w.cat}"><h2>${esc(L(w.comp))}</h2>
    <div class="table-wrap"><table><thead><tr><th>${esc(T("region"))}</th><th>${esc(T("channel"))}</th><th>${esc(T("obs"))}</th></tr></thead><tbody>${
      w.rows.map(([r, c, o]) => `<tr><td>${esc(L(r))}</td><td>${esc(L(c))}</td><td>${esc(L(o))}</td></tr>`).join("")
    }</tbody></table></div>
    <p class="src">${esc(T("sources"))}: ${w.sources.map(([t, href]) => `<a href="${href}">${esc(t)}</a>`).join(", ")}</p></section>`).join("");
}

/* ---------- moldura da página ---------- */
function langMenu(id) {
  return `<details class="lang"><summary aria-label="${esc(T("langMenu"))}">${GLOBE}<span>${esc(X.LANG_NAMES[lang])}</span>${CHEV}</summary>
    <ul>${LANGS.map((l) => `<li><a href="${u(id, l)}" hreflang="${LOCALE[l]}" lang="${LOCALE[l]}" data-lang="${l}"${l === lang ? ' aria-current="true"' : ""}>${X.LANG_NAMES[l]}</a></li>`).join("")}</ul></details>`;
}
function navHtml(active) {
  const items = [["index", T("home"), null], ...Object.entries(CATS).map(([k, c]) => [c.route, navName(k), k]), ["agenda", T("agenda"), null], ["tabelas", T("tables"), null], ["onde-assistir", T("watch"), null]];
  return items.map(([id, label, k]) => `<a href="${u(id)}"${k ? ` style="--nav-c: var(--c-${k})"` : ""}${id === active ? ' aria-current="page"' : ""}>${esc(label)}</a>`).join("");
}
function logoHtml(cls = "logo") {
  const w = L(X.BRAND).split(" ");
  return `${esc(w[0])}<span class="dot" aria-hidden="true"></span>${esc(w.slice(1).join(" "))}`;
}

function layout({ id, title, desc, body, active, type = "website", jsonld, noindex }) {
  const fullTitle = id === "index" ? `${brand()} | ${T("homeTag")}` : `${title} | ${brand()}`;
  const canonical = absUrl(pathOf(id));
  const editionLabel = T("updated", { d: fmt({ day: "numeric", month: "long", year: "numeric" }).format(new Date(cfg.EDITION_DATE + "T12:00:00Z")) });
  const adsHead = cfg.ADSENSE_CLIENT
    ? `<meta name="google-adsense-account" content="${esc(cfg.ADSENSE_CLIENT)}">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(cfg.ADSENSE_CLIENT)}" crossorigin="anonymous"></script>`
    : "";
  return `<!DOCTYPE html>
<html lang="${LOCALE[lang]}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ""}<link rel="canonical" href="${canonical}">
${LANGS.map((l) => `<link rel="alternate" hreflang="${LOCALE[l]}" href="${absUrl(pathOf(id, l))}">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="${absUrl(pathOf(id, "pt"))}">
<meta property="og:type" content="${type}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${esc(brand())}">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<link rel="icon" href="${FAVICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Public+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${asset("style.css")}">
${adsHead}${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>` : ""}
</head>
<body>
<a class="skip" href="#conteudo">${esc(T("skip"))}</a>
<header class="masthead">
  <div class="wrap">
    <div class="masthead-top">
      <a class="logo" href="${u("index")}" aria-label="${esc(brand())}">${logoHtml()}</a>
      ${langMenu(id)}
      <span class="today">${esc(editionLabel)}</span>
      <form class="search" role="search" action="${u("busca")}" method="get">
        <label for="search-input" class="sr-only">${esc(T("searchLabel"))}</label>
        ${SEARCH_ICON}
        <input id="search-input" name="q" type="search" placeholder="${esc(T("searchPh"))}" autocomplete="off">
      </form>
    </div>
    <nav class="nav" aria-label="${esc(T("navLabel"))}">${navHtml(active)}</nav>
  </div>
</header>
<div class="scorebar" aria-label="${esc(T("scoreAria"))}">
  <div class="wrap scorebar-inner"><div class="scorebar-label"><strong>${esc(T("scoreTitle"))}</strong>${esc(T("scoreSub"))}</div>${scorebar()}</div>
</div>
<main id="conteudo">
  <div class="wrap">${body}</div>
</main>
<footer>
  <div class="wrap foot">
    <div class="foot-brand"><div class="logo">${logoHtml()}</div><p>${esc(T("foot1"))}</p></div>
    <nav aria-label="${esc(T("footNav"))}">
      <a href="${u("sobre")}">${esc(T("about"))}</a>
      <a href="${u("contato")}">${esc(T("contact"))}</a>
      <a href="${u("privacidade")}">${esc(T("privacy"))}</a>
      <a href="${u("onde-assistir")}">${esc(T("watch"))}</a>
    </nav>
    <p class="foot-meta">© ${cfg.EDITION_DATE.slice(0, 4)} ${esc(brand())}. ${esc(T("foot2"))}</p>
  </div>
</footer>
<script src="${asset("site.js")}" defer></script>
</body>
</html>
`;
}

/* ---------- páginas ---------- */
function homePage() {
  const lead = sorted[0];
  const side = [sorted[1], sorted[2], sorted.find((n) => n.slug === "wiliete-elimina-sundowns")].filter(Boolean);
  const used = new Set([lead, ...side].map((n) => n.slug));
  const take = (fn, max = 4) => { const out = sorted.filter((n) => fn(n) && !used.has(n.slug)).slice(0, max); out.forEach((n) => used.add(n.slug)); return out; };
  const canItems = take((n) => n.cat === "can");
  const femItems = take((n) => n.tags.includes("fem"));
  const clubs = take((n) => n.cat === "cl" || n.cat === "cc");
  const ligaItems = take((n) => n.cat === "ligas");
  const selItems = take((n) => n.cat === "sel");
  return `${ad("topo")}<div class="layout"><div>
    <div class="hero">${leadCard(lead)}<div class="side-stories">${side.map((n) => rowCard(n)).join("")}</div></div>
    ${section("can", canItems, T("secCan"))}
    ${ad("meio")}
    <section class="section cat-can" aria-labelledby="sec-qual">${sectionHead(T("secQual"), "tabelas", T("allTables"), "sec-qual")}${qualTable()}</section>
    ${section("fem", femItems, T("secFem"))}
    <section class="section cat-cl" aria-labelledby="sec-clubs">${sectionHead(T("secClubs"), CATS.cl.route, T("seeAll", { x: catName("cl") }), "sec-clubs")}
      <div class="grid-stories">${clubs.map(storyCard).join("")}</div>
      <div style="margin-top:22px">${groupsHtml(D.CL_GROUPS, "cl")}</div>
      <p class="note">${esc(T("clNoteHome"))}</p></section>
    <section class="section cat-ligas" aria-labelledby="sec-ligas">${sectionHead(T("secLigas"), CATS.ligas.route, T("seeAll", { x: catName("ligas") }), "sec-ligas")}
      ${leaguesHtml()}<div class="grid-stories" style="margin-top:22px">${ligaItems.map(storyCard).join("")}</div></section>
    ${section("sel", selItems, T("secSel"))}
  </div>${sidebar()}</div>`;
}

function categoryPage(k) {
  const items = sorted.filter((n) => n.tags.includes(k));
  let extra = "";
  if (k === "can") extra = `<section class="section cat-can">${sectionHead(T("leadersTitle"))}${qualTable()}</section>`;
  if (k === "cl") extra = `<section class="section cat-cl">${sectionHead(T("groupsTitle"))}${groupsHtml(D.CL_GROUPS, "cl")}<p class="note">${esc(T("clNote"))}</p></section>`;
  if (k === "cc") extra = `<section class="section cat-cc">${sectionHead(T("groupsTitle"))}${groupsHtml(D.CC_GROUPS, "cc")}<p class="note">${esc(T("ccNote"))}</p></section>`;
  if (k === "ligas") extra = `<section class="section cat-ligas">${sectionHead(T("champsTitle"))}${leaguesHtml()}</section>`;
  return `${ad("topo")}<div class="layout"><div>
    <div class="page-head cat-${k}"><h1>${esc(catName(k))}</h1><p>${esc(L(CATS[k].desc))}</p></div>
    <div class="grid-stories">${items.map(storyCard).join("") || `<div class="empty">${esc(T("emptyCat"))}</div>`}</div>
    ${extra}</div>${sidebar()}</div>`;
}

function agendaPage() {
  return `<div class="layout"><div>
    <div class="page-head"><h1>${esc(T("agenda"))}</h1><p>${esc(T("agendaDesc"))}</p>${tzHint()}</div>
    <div class="panel">${agendaList()}</div>
    <p class="note">${esc(T("agendaNote"))} <a href="${u("onde-assistir")}">${esc(T("watchLink"))}</a></p>
  </div><aside class="sidebar">${ad("lateral")}<section class="panel"><h2>${esc(T("keyDates"))}</h2>${datesList()}</section></aside></div>`;
}

function tablesPage() {
  return `<div class="page-head"><h1>${esc(T("tables"))}</h1><p>${esc(T("tablesDesc"))}</p></div>
    <section class="section cat-can">${sectionHead(T("qualTitle"), CATS.can.route, T("news"))}${qualTable()}</section>
    ${ad("meio")}
    <section class="section cat-cl">${sectionHead(T("clTitle"), CATS.cl.route, T("news"))}${groupsHtml(D.CL_GROUPS, "cl")}</section>
    <section class="section cat-cc">${sectionHead(T("ccTitle"), CATS.cc.route, T("news"))}${groupsHtml(D.CC_GROUPS, "cc")}</section>
    <section class="section cat-ligas">${sectionHead(T("secLigas"), CATS.ligas.route, T("news"))}${leaguesHtml()}</section>`;
}

function watchPage() {
  return `<div class="layout"><div>
    <div class="page-head"><h1>${esc(T("watch"))}</h1><p>${esc(T("watchDesc"))}</p></div>
    ${watchHtml()}
  </div>${sidebar()}</div>`;
}

function staticPage(key) {
  const p = X.PAGES[key];
  const email = `<a href="mailto:${esc(cfg.CONTACT_EMAIL)}">${esc(cfg.CONTACT_EMAIL)}</a>`;
  const paras = L(p.body).map((t) => `<p>${esc(t).replace("{email}", email)}</p>`).join("");
  return `<div class="layout"><div class="article">
    <div class="page-head"><h1>${esc(L(p.title))}</h1></div>
    <div class="prose">${paras}</div>
  </div>${sidebar()}</div>`;
}

function articlePage(n) {
  const c = CATS[n.cat];
  const related = sorted.filter((x) => x.slug !== n.slug && x.tags.some((t) => n.tags.includes(t))).slice(0, 3);
  return `<div class="layout"><article class="article">
    <a class="back" href="${u(c.route)}">‹ ${esc(catName(n.cat))}</a>
    ${meta(n)}
    <h1>${esc(L(n.title))}</h1><p class="lead">${esc(L(n.lead))}</p>
    ${cover(n)}
    <div class="body">${L(n.body).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
    ${ad("materia")}
    <div class="sources"><h2>${esc(T("sources"))}</h2><ul>${n.sources.map(([t, href]) => `<li><a href="${href}">${esc(t)}</a></li>`).join("")}</ul></div>
    ${related.length ? `<section class="section cat-${n.cat}">${sectionHead(T("related"))}<div class="grid-stories">${related.map(storyCard).join("")}</div></section>` : ""}
  </article>${sidebar()}</div>`;
}

function searchPage() {
  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const rows = sorted.map((n) => rowCard(n, ` data-q="${esc(norm([L(n.title), L(n.lead), L(n.body).join(" ")].join(" ")))}"`)).join("");
  return `<div class="search-page">
    <div class="page-head"><h1>${esc(T("searchTitle"))}</h1><p id="busca-msg" data-hits="${esc(L(D.UI.hits))}" data-nohits="${esc(L(D.UI.noHits))}" data-intro="${esc(T("searchIntro"))}">${esc(T("searchIntro"))}</p></div>
    <label for="busca-q" class="sr-only">${esc(T("searchLabel"))}</label>
    <input id="busca-q" type="search" placeholder="${esc(T("searchPh"))}" autocomplete="off">
    <div class="search-list" id="busca-lista">${rows}</div>
  </div>`;
}

/* ---------- geração ---------- */
function write(file, content) {
  const full = path.join(OUT, file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}
function emit(id, opts) {
  cur = pathOf(id);
  const body = typeof opts.body === "function" ? opts.body() : opts.body;
  write(cur, layout({ id, ...opts, body }));
  return cur;
}

fs.rmSync(OUT, { recursive: true, force: true });
const pages = [];
for (const l of LANGS) {
  setLang(l);
  pages.push(emit("index", { title: brand(), desc: T("foot1"), body: () => homePage(), active: "index" }));
  for (const [k, c] of Object.entries(CATS)) {
    pages.push(emit(c.route, { title: catName(k), desc: L(c.desc), body: () => categoryPage(k), active: c.route }));
  }
  pages.push(emit("agenda", { title: T("agenda"), desc: T("agendaDesc"), body: () => agendaPage(), active: "agenda" }));
  pages.push(emit("tabelas", { title: T("tables"), desc: T("tablesDesc"), body: () => tablesPage(), active: "tabelas" }));
  pages.push(emit("onde-assistir", { title: T("watch"), desc: T("watchDesc"), body: () => watchPage(), active: "onde-assistir" }));
  for (const key of Object.keys(X.PAGES)) {
    pages.push(emit(key, { title: L(X.PAGES[key].title), desc: L(X.PAGES[key].body)[0].replace("{email}", cfg.CONTACT_EMAIL), body: () => staticPage(key), active: "" }));
  }
  emit("busca", { title: T("searchTitle"), desc: T("searchIntro"), body: () => searchPage(), active: "", noindex: true });
  for (const n of NEWS) {
    pages.push(emit("noticias/" + n.slug, {
      title: L(n.title), desc: L(n.lead), body: () => articlePage(n), active: CATS[n.cat].route, type: "article",
      jsonld: { "@context": "https://schema.org", "@type": "NewsArticle", headline: L(n.title), description: L(n.lead), datePublished: n.date + ":00Z", inLanguage: LOCALE[l], publisher: { "@type": "Organization", name: brand() }, mainEntityOfPage: absUrl(pathOf("noticias/" + n.slug)) }
    }));
  }
}

/* arquivos de apoio */
fs.cpSync(path.join(__dirname, "assets"), path.join(OUT, "assets"), { recursive: true });
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${absUrl("sitemap.xml")}\n`);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${absUrl(p)}</loc></url>`).join("\n")}\n</urlset>\n`);
if (cfg.ADSENSE_CLIENT) write("ads.txt", `google.com, ${cfg.ADSENSE_CLIENT.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`);
if (cfg.DOMAIN) write("CNAME", cfg.DOMAIN + "\n");
write(".nojekyll", "");
setLang("pt");
const base = cfg.BASE_PATH || "/";
write("404.html", `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(X.UI.notFoundPage.pt)} | Bola Africana</title><link rel="stylesheet" href="${base}assets/style.css"></head>
<body><main><div class="wrap"><div class="page-head"><h1>${esc(X.UI.notFoundPage.pt)}</h1><p>${LANGS.map((l) => `<a href="${base}${PREFIX[l]}index.html">${esc(X.BRAND_TITLE[l])} · ${X.LANG_NAMES[l]}</a>`).join(" &nbsp; ")}</p></div></div></main></body></html>\n`);

console.log(`Pronto: ${pages.length + 3} páginas em ${path.relative(process.cwd(), OUT) || OUT}${PREVIEW ? " (prévia com espaços de anúncio)" : ""}.`);
