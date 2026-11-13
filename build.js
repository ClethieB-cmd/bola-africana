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
const CAMP = require("./conteudo/campeonatos.js");
let AUTO = { ligas: {} };
try { AUTO = JSON.parse(fs.readFileSync(path.join(__dirname, "conteudo", "ligas-auto.json"), "utf8")); } catch (e) { /* ainda sem dados automáticos */ }
/* campeonatos que a API não cobre, preenchidos à mão (conteudo/ligas-manuais.js); quando a API tiver o campeonato, ela vale mais */
AUTO.ligas = AUTO.ligas || {};
for (const [k, v] of Object.entries(require("./conteudo/ligas-manuais.js"))) if (!AUTO.ligas[k]) AUTO.ligas[k] = v;

const PREVIEW = process.argv.includes("--preview");
const OUT = path.join(__dirname, "_site");
Object.assign(D.UI, X.UI);
const { L, T, C, CATS } = D;
const LANGS = ["pt", "fr", "en", "ar"];
const LOCALE = D.LANGS;
const OG_LOCALE = { pt: "pt_BR", fr: "fr_FR", en: "en_GB", ar: "ar_AR" };
const PREFIX = { pt: "", fr: "fr/", en: "en/", ar: "ar/" };
const EXTRA_UI = {
  updated: { pt: "Atualizado em {d}", fr: "Mis à jour le {d}", en: "Updated {d}" },
  emailSoon: { pt: "O e-mail de contato será publicado em breve.", fr: "L'adresse e-mail de contact sera publiée prochainement.", en: "A contact email will be published soon.", ar: "سيُنشر البريد الإلكتروني للتواصل قريبًا." },
  homeTag: { pt: "Notícias do esporte africano", fr: "L'actualité du sport africain", en: "African sports news", ar: "أخبار الرياضة الأفريقية" },
  skip: { pt: "Pular para o conteúdo", fr: "Aller au contenu", en: "Skip to content" },
  footNav: { pt: "Institucional", fr: "Informations", en: "Information", ar: "عن الموقع" },
  footSports: { pt: "Esportes", fr: "Sports", en: "Sports", ar: "الرياضات" },
  latestNews: { pt: "Últimas notícias", fr: "Dernières actualités", en: "Latest news", ar: "آخر الأخبار" },
  moreNews: { pt: "Mais notícias", fr: "Plus d'actualités", en: "More news", ar: "مزيد من الأخبار" },
  footServ: { pt: "Jogos e tabelas", fr: "Matchs et classements", en: "Fixtures and tables", ar: "المباريات والجداول" },
  noGames: { pt: "Os próximos jogos entram aqui assim que forem marcados.", fr: "Les prochains matchs apparaîtront ici dès qu'ils seront programmés.", en: "Upcoming games will appear here as soon as they are scheduled.", ar: "ستظهر المباريات المقبلة هنا فور تحديد مواعيدها." }
};
Object.assign(D.UI, EXTRA_UI);
const CAMP_UI = {
  campTitle: { pt: "Campeonato {de}: {liga}", fr: "Championnat {de} : {liga}", en: "{de} league: {liga}" },
  campDesc: { pt: "Classificação, resultados, próximos jogos e notícias do campeonato {de} ({liga}).", fr: "Classement, résultats, prochains matchs et actualité du championnat {de} ({liga}).", en: "Table, results, fixtures and news from the {de} league ({liga})." },
  campDir: { pt: "Os 54 campeonatos nacionais", fr: "Les 54 championnats nationaux", en: "All 54 national leagues" },
  campDirNote: { pt: "Escolha o país para ver a classificação, os resultados e os próximos jogos.", fr: "Choisissez un pays pour voir le classement, les résultats et les prochains matchs.", en: "Pick a country to see the table, results and upcoming fixtures." },
  campHasData: { pt: "com tabela", fr: "avec classement", en: "with table" },
  campAll: { pt: "Todos os campeonatos", fr: "Tous les championnats", en: "All leagues" },
  campTable: { pt: "Classificação", fr: "Classement", en: "Table" },
  campResults: { pt: "Últimos resultados", fr: "Derniers résultats", en: "Latest results" },
  campNext: { pt: "Próximos jogos", fr: "Prochains matchs", en: "Upcoming fixtures" },
  campNews: { pt: "Notícias", fr: "Actualité", en: "News" },
  campSeason: { pt: "Temporada {s}", fr: "Saison {s}", en: "{s} season" },
  campFinal: { pt: "Classificação final · Temporada {s}", fr: "Classement final · Saison {s}", en: "Final table · {s} season", ar: "الترتيب النهائي · موسم {s}" },
  campResultsOld: { pt: "Últimos jogos da temporada {s}", fr: "Derniers matchs de la saison {s}", en: "Last games of the {s} season", ar: "آخر مباريات موسم {s}" },
  campOld: { pt: "Estes são os números da temporada {s}, já encerrada. A temporada atual entra aqui assim que os dados estiverem disponíveis.", fr: "Ce sont les chiffres de la saison {s}, terminée. La saison en cours apparaîtra ici dès que les données seront disponibles.", en: "These are the figures from the completed {s} season. The current season will appear here as soon as the data is available.", ar: "هذه أرقام موسم {s} المنتهي. سيظهر الموسم الحالي هنا فور توفر بياناته." },
  campUpdated: { pt: "Dados atualizados em {d}. Fonte: API-Football.", fr: "Données mises à jour le {d}. Source : API-Football.", en: "Data updated {d}. Source: API-Football." },
  campManual: { pt: "Dados conferidos em {d}. Fonte:", fr: "Données vérifiées le {d}. Source :", en: "Data checked {d}. Source:", ar: "تم التحقق من البيانات في {d}. المصدر:" },
  campNoData: { pt: "Ainda não temos a classificação nem os resultados deste campeonato.", fr: "Nous n'avons pas encore le classement ni les résultats de ce championnat.", en: "We don't have the table or results for this league yet." },
  thClub: { pt: "Clube", fr: "Club", en: "Club" },
  thP: { pt: "J|Jogos", fr: "J|Joués", en: "P|Played" },
  thW: { pt: "V|Vitórias", fr: "G|Gagnés", en: "W|Won" },
  thD: { pt: "E|Empates", fr: "N|Nuls", en: "D|Drawn" },
  thL: { pt: "D|Derrotas", fr: "P|Perdus", en: "L|Lost" },
  thGD: { pt: "SG|Saldo de gols", fr: "Diff.|Différence de buts", en: "GD|Goal difference" },
  thPts: { pt: "Pts|Pontos", fr: "Pts|Points", en: "Pts|Points" }
};
Object.assign(D.UI, CAMP_UI);
for (const c of CAMP) if (!D.COUNTRY[c.code]) D.COUNTRY[c.code] = c.nome;

/* data da edição: o dia em que o site foi gerado (o robô gera todo dia) */
const HOJE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);
/* agenda: jogo com placar fica 3 dias; jogo sem placar some quando o dia dele passa (o resultado entra quando a redação atualizar) */
{
  const inicio = Date.parse(HOJE + "T00:00:00Z");
  D.FIXTURES = D.FIXTURES.filter((f) => (f.score ? Date.parse(f.at) >= inicio - 3 * 864e5 : f.at.slice(0, 10) >= HOJE))
    .map((f) => ({ ...f, today: f.at.slice(0, 10) === HOJE }));
}

/* bandeiras (imagens de domínio público servidas pela flagcdn.com, do Flagpedia) */
const ISO2 = { ALG: "dz", ANG: "ao", BEN: "bj", BOT: "bw", BFA: "bf", BDI: "bi", CMR: "cm", CPV: "cv", CTA: "cf", CHA: "td", COM: "km", CGO: "cg", COD: "cd", DJI: "dj", EGY: "eg", EQG: "gq", ERI: "er", SWZ: "sz", ETH: "et", GAB: "ga", GAM: "gm", GHA: "gh", GUI: "gn", GNB: "gw", CIV: "ci", KEN: "ke", LES: "ls", LBR: "lr", LBA: "ly", MAD: "mg", MWI: "mw", MLI: "ml", MTN: "mr", MRI: "mu", MAR: "ma", MOZ: "mz", NAM: "na", NIG: "ne", NGA: "ng", RWA: "rw", STP: "st", SEN: "sn", SEY: "sc", SLE: "sl", SOM: "so", RSA: "za", SSD: "ss", SDN: "sd", TAN: "tz", TOG: "tg", TUN: "tn", UGA: "ug", ZAM: "zm", ZIM: "zw" };
const bandeira = (code) => (ISO2[code] ? `<img class="bandeira" src="https://flagcdn.com/w40/${ISO2[code]}.png" srcset="https://flagcdn.com/w80/${ISO2[code]}.png 2x" width="20" height="14" alt="" loading="lazy" decoding="async">` : "");

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
/* o endereço do CSS e do JS leva um código da versão: quando o arquivo muda, o navegador baixa o novo na hora */
const VERSAO = {};
const versao = (p) => (VERSAO[p] = VERSAO[p] || require("crypto").createHash("sha1").update(fs.readFileSync(path.join(__dirname, "assets", p))).digest("hex").slice(0, 8));
const asset = (p) => rel("assets/" + p) + "?v=" + versao(p);
const absUrl = (p) => cfg.SITE_URL.replace(/\/$/, "") + "/" + p.replace(/(^|\/)index\.html$/, "$1");

const MONTHS = {
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
};
function dateLabel(n) {
  const [y, m, d] = n.date.slice(0, 10).split("-").map(Number);
  const mon = MONTHS[lang][m - 1];
  return n.monthOnly ? `${mon} ${y}` : `${d} ${mon} ${y}`;
}
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const fmt = (opts) => new Intl.DateTimeFormat(LOCALE[lang] + (lang === "ar" ? "-u-nu-latn" : ""), { timeZone: "UTC", ...opts });
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
const esporteDe = (n) => (Array.isArray(n.esporte) ? n.esporte[0] : n.esporte) || "futebol";
function cover(n) {
  return `<div class="cover cat-${n.cat} sp-${esporteDe(n)}" aria-hidden="true">
    <div class="big">${esc(L(n.cover.big))}</div><div class="small">${esc(L(n.cover.small))}</div></div>`;
}
const tag = (k) => `<span class="tag cat-${k}">${esc(catName(k))}</span>`;
const meta = (n) => `<div class="meta">${tag(n.cat)}<span>${esc(dateLabel(n))}</span></div>`;
const newsUrl = (n) => u("noticias/" + n.slug);
/* listas de notícias só com texto (chapéu, título, resumo e data); a imagem fica dentro da notícia */
const kicker = (n) => `<div class="meta">${tag(n.cat)}</div>`;
const dataNoticia = (n) => `<span class="date">${esc(dateLabel(n))}</span>`;
const leadCard = (n) => `<a class="lead-story" href="${newsUrl(n)}">${kicker(n)}<h1>${esc(L(n.title))}</h1><p>${esc(L(n.lead))}</p>${dataNoticia(n)}</a>`;
const rowCard = (n, attrs = "") => `<a class="row-story" href="${newsUrl(n)}"${attrs}>${meta(n)}<h3>${esc(L(n.title))}</h3></a>`;
const storyCard = (n) => `<a class="story" href="${newsUrl(n)}">${kicker(n)}<h3>${esc(L(n.title))}</h3><p>${esc(L(n.lead))}</p>${dataNoticia(n)}</a>`;

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
      <span class="t">${f.club ? "" : bandeira(f.home)}${esc(teamCode(f, "home"))}</span><span class="s">${esc(s1)}</span>
      <span class="t">${f.club ? "" : bandeira(f.away)}${esc(teamCode(f, "away"))}</span><span class="s">${esc(s2)}</span>
      <span class="m">${when}</span></a>`;
  }).join("");
}
const FIXTURES_BAR = () => D.FIXTURES.filter((f) => f.bar);

function agendaList(limit, todos = D.FIXTURES) {
  const list = limit ? todos.slice(0, limit) : todos;
  if (!list.length) return `<p class="note">${esc(T("noGames"))}</p>`;
  let html = "", day = "";
  list.forEach((f) => {
    const d = f.at.slice(0, 10);
    if (d !== day) { day = d; html += `<div class="day">${timeTag(f.at, "day", fmtDay(f.at))}</div>`; }
    const when = f.score ? esc(f.score) : f.timeTbd ? esc(T("tbd")) : timeTag(f.at, "time", fmtTime(f.at));
    const extra = (f.score ? " · " + esc(T("ftLower")) : "") + (f.tv ? ` · <span class="tv">TV: ${esc(f.tv)}</span>` : "");
    html += `<div class="fx ${f.score ? "done" : ""}">
      <span class="teams">${f.club ? "" : bandeira(f.home)}${esc(teamName(f, "home"))} × ${f.club ? "" : bandeira(f.away)}${esc(teamName(f, "away"))}</span>
      <span class="when">${when}</span>
      <span class="comp">${esc(L(f.comp))}${extra}</span></div>`;
  });
  return html;
}
const tzHint = () => `<p class="hint" data-tz-template="${esc(T("tz", { tz: "{tz}" }))}">${esc(T("tzStatic"))}</p>`;
const datesList = () => `<ul class="dates">${D.KEY_DATES.map(([d, t]) => `<li><span class="d">${esc(L(d))}</span><span>${esc(L(t))}</span></li>`).join("")}</ul>`;

/* coluna lateral: as últimas notícias. A agenda e o placar ficam só na página Agenda */
function sidebar(semSlug) {
  const lista = sorted.filter((n) => n.slug !== semSlug).slice(0, 6);
  return `<aside class="sidebar">
    <section class="rail" aria-labelledby="rail-h"><h2 id="rail-h">${esc(T("latestNews"))}</h2>
      <ol class="rail-list">${lista.map((n) => `<li><a href="${newsUrl(n)}">${kicker(n)}<span class="t">${esc(L(n.title))}</span></a></li>`).join("")}</ol></section>
    ${ad("lateral")}
  </aside>`;
}

function groupsHtml(groups, k) {
  if ((k === "cl" || k === "cc") && ESP.grupos(k)) return ESP.grupos(k);
  return `<div class="groups">${groups.map(([g, teams]) => `<div class="group cat-${k}"><h3>${esc(T("group"))} ${g}</h3><ol>${
    teams.map(([t, c]) => `<li><span>${esc(t ?? T("tbc"))}</span><span class="cty">${bandeira(c)}${esc(c)}</span></li>`).join("")}</ol></div>`).join("")}</div>`;
}
const leaderNames = (arr) => arr.map((x) => (typeof x === "string" && D.COUNTRY[x] ? C(x) : L(x))).join(L(D.AND));
function qualTable() {
  if (ESP.grupos("canq")) return ESP.grupos("canq");
  return `<div class="table-wrap"><table><thead><tr><th>${esc(T("qGroup"))}</th><th>${esc(T("qLeader"))}</th><th class="num">${esc(T("qPts"))}</th><th>${esc(T("qNoteH"))}</th></tr></thead><tbody>${
    D.QUAL_LEADERS.map(([g, l, p, o]) => `<tr><td class="grp">${g}</td><td>${esc(leaderNames(l))}</td><td class="num">${esc(p)}</td><td>${esc(L(o))}</td></tr>`).join("")
  }</tbody></table></div><p class="note">${esc(T("qNote"))}</p>`;
}
function leaguesHtml() {
  return `<div class="leagues">${D.LEAGUES.map((l) => `<div class="league">
    <a class="country" href="${campUrl(CAMP.find((c) => c.code === l.country))}">${esc(C(l.country))}</a><span class="name">${esc(l.name)}</span>
    <span class="champ">${esc(T("champ"))} <b>${esc(l.champ)}</b></span><span class="fact">${esc(L(l.fact))}</span>
    <a class="src" href="${l.src}">${esc(T("source"))}</a></div>`).join("")}</div>
    <div class="radar" aria-label="${esc(T("radar"))}">${D.RADAR.map(([c, n]) => `<a href="${campUrl(CAMP.find((x) => x.code === c))}">${esc(C(c))} · ${esc(n)}</a>`).join("")}</div>`;
}
function watchHtml(lista = X.WATCH) {
  return lista.map((w) => `<section class="watch cat-${w.cat}"><h2>${esc(L(w.comp))}</h2>
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
/* menu: Início, Masculino e Feminino. CAN 2027, clubes, ligas, agenda, tabelas e onde assistir ficam dentro de cada gênero */
const ROTAS_MASC = ["masculino", ...["can", "cl", "cc", "ligas", "sel"].map((k) => CATS[k].route)];
function navHtml(active) {
  const atual = ROTAS_MASC.includes(active) ? "masculino" : active;
  const cur = (id) => (id === atual ? ' aria-current="page"' : "");
  /* Masculino e Feminino abrem uma janela com tudo do gênero (build-generos.js); sem JavaScript, o clique leva à página */
  const gen = (id, label, g) => `<div class="mega" data-mega><a href="${u(id)}" class="nav-gen" aria-expanded="false" aria-controls="menu-${g}"${cur(id)}>${esc(label)}${CHEV}</a>${GEN.menu(g)}</div>`;
  /* Onde assistir fica dentro das janelas de Masculino e Feminino */
  return `<a href="${u("index")}"${cur("index")}>${esc(T("home"))}</a>${gen("masculino", T("gMasc"), "masc")}${gen(CATS.fem.route, T("gFem"), "fem")}`;
}
function logoHtml(cls = "logo") {
  const w = L(X.BRAND).split(" ");
  return `${esc(w[0])}<span class="dot" aria-hidden="true"></span>${esc(w.slice(1).join(" "))}`;
}

function layout({ id, title, desc, body, active, type = "website", jsonld, noindex }) {
  const fullTitle = id === "index" ? `${brand()} | ${T("homeTag")}` : `${title} | ${brand()}`;
  const canonical = absUrl(pathOf(id));
  const editionLabel = T("updated", { d: fmt({ day: "numeric", month: "long", year: "numeric" }).format(new Date(HOJE + "T12:00:00Z")) });
  const adsHead = cfg.ADSENSE_CLIENT
    ? `<meta name="google-adsense-account" content="${esc(cfg.ADSENSE_CLIENT)}">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(cfg.ADSENSE_CLIENT)}" crossorigin="anonymous"></script>`
    : "";
  return `<!DOCTYPE html>
<html lang="${LOCALE[lang]}"${lang === "ar" ? ' dir="rtl"' : ""}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">\n' : ""}${cfg.GOOGLE_VERIFICACAO ? `<meta name="google-site-verification" content="${esc(cfg.GOOGLE_VERIFICACAO)}">\n` : ""}<link rel="canonical" href="${canonical}">
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
<link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Public+Sans:ital,wght@0,400;0,600;0,700;1,400${lang === "ar" ? "&family=Cairo:wght@400;600;700;800;900" : ""}&display=swap" rel="stylesheet">
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
<main id="conteudo">
  <div class="wrap">${body}</div>
</main>
<footer>
  <div class="wrap foot">
    <div class="foot-brand"><div class="logo">${logoHtml()}</div><p>${esc(T("foot1"))}</p></div>
    <nav class="foot-col" aria-labelledby="f-fut"><h2 id="f-fut">${esc(T("gFut"))}</h2>${["can", "cl", "cc", "sel", "ligas"].map((k) => `<a href="${u(CATS[k].route)}">${esc(catName(k))}</a>`).join("")}</nav>
    <nav class="foot-col" aria-labelledby="f-esp"><h2 id="f-esp">${esc(T("footSports"))}</h2><a href="${u("masculino")}">${esc(T("gMasc"))}</a><a href="${u(CATS.fem.route)}">${esc(T("gFem"))}</a><a href="${u("esportes")}">${esc(T("moreSports"))}</a></nav>
    <nav class="foot-col" aria-labelledby="f-serv"><h2 id="f-serv">${esc(T("footServ"))}</h2><a href="${u("agenda")}">${esc(T("agenda"))}</a><a href="${u("tabelas")}">${esc(T("tables"))}</a><a href="${u("onde-assistir")}">${esc(T("watch"))}</a></nav>
    <nav class="foot-col" aria-labelledby="f-inst"><h2 id="f-inst">${esc(T("footNav"))}</h2><a href="${u("sobre")}">${esc(T("about"))}</a><a href="${u("contato")}">${esc(T("contact"))}</a><a href="${u("privacidade")}">${esc(T("privacy"))}</a></nav>
    <p class="foot-meta">© ${HOJE.slice(0, 4)} ${esc(brand())}. ${esc(T("foot2"))}</p>
  </div>
</footer>
<script src="${asset("site.js")}" defer></script>
</body>
</html>
`;
}

/* ---------- campeonatos nacionais ---------- */
const campUrl = (c) => u("campeonatos/" + c.slug);
const campAuto = (c) => {
  const a = (AUTO.ligas || {})[c.code];
  return a && ((a.tabela && a.tabela.length) || (a.resultados && a.resultados.length) || (a.proximos && a.proximos.length)) ? a : null;
};
const campIndexavel = (c) => !!(campAuto(c) || c.texto);
const campTitle = (c) => T("campTitle", { de: L(c.de), liga: c.liga });
const normTxt = (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
function mencionaPais(n, c) {
  if ((n.paises || []).includes(c.code)) return true;
  const nome = normTxt(L(c.nome));
  let txt = normTxt([L(n.title), L(n.lead)].join(" "));
  for (const o of CAMP) { const on = normTxt(L(o.nome)); if (on !== nome && on.includes(nome)) txt = txt.split(on).join(" "); }
  return new RegExp("(^|[^a-z])" + nome.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z]|$)").test(txt);
}
function campDirHtml() {
  const lista = CAMP.slice().sort((a, b) => L(a.nome).localeCompare(L(b.nome), LOCALE[lang]));
  return `<section class="section cat-ligas" aria-labelledby="sec-camp">${sectionHead(T("campDir"), null, null, "sec-camp")}
    <p class="note" style="margin:0 0 14px">${esc(T("campDirNote"))}</p>
    <ul class="camp-dir">${lista.map((c) => `<li><a href="${campUrl(c)}"><span class="pais">${esc(L(c.nome))}</span><span class="liga">${esc(c.liga)}${campAuto(c) ? ` · ${esc(T("campHasData"))}` : ""}</span></a></li>`).join("")}</ul></section>`;
}
const th = (k, cls = "") => { const [a, t] = T(k).split("|"); return `<th${cls ? ` class="${cls}"` : ""}><abbr title="${esc(t)}">${esc(a)}</abbr></th>`; };
function campTabela(a, c) {
  return a.tabela.map((g) => `${g.grupo ? `<h3 class="camp-grupo">${esc(g.grupo)}</h3>` : ""}<div class="table-wrap"><table>
    <thead><tr><th class="num">#</th><th>${esc(T("thClub"))}</th>${th("thP", "num")}${th("thW", "num")}${th("thD", "num")}${th("thL", "num")}${th("thGD", "num")}${th("thPts", "num")}</tr></thead>
    <tbody>${g.linhas.map(([pos, time, j, v, e, d, sg, pts]) => `<tr><td class="num">${esc(pos)}</td><td>${TM.link(c, time)}</td><td class="num">${esc(j)}</td><td class="num">${esc(v)}</td><td class="num">${esc(e)}</td><td class="num">${esc(d)}</td><td class="num">${esc(sg > 0 ? "+" + sg : sg)}</td><td class="num"><b>${esc(pts)}</b></td></tr>`).join("")}</tbody></table></div>`).join("");
}
function campJogos(lista, feitos, c) {
  return lista.map((g) => `<div class="fx ${feitos ? "done" : ""}">
    <span class="teams">${TM.link(c, g.c)} × ${TM.link(c, g.f)}</span>
    <span class="when">${feitos ? esc(`${g.gc ?? ""}–${g.gf ?? ""}`) : timeTag(g.d, "time", fmtTime(g.d))}</span>
    <span class="comp">${timeTag(g.d, "day", fmtDay(g.d))}</span></div>`).join("");
}
function campPage(c) {
  const a = campAuto(c);
  const lg = D.LEAGUES.find((l) => l.country === c.code);
  const news = sorted.filter((n) => mencionaPais(n, c)).slice(0, 6);
  const quando = a && a.atualizado ? fmt({ day: "numeric", month: "long", year: "numeric" }).format(new Date(a.atualizado)) : "";
  return `<div class="layout"><div class="article camp">
    <a class="back" href="${u(CATS.ligas.route)}">‹ ${esc(T("campAll"))}</a>
    <div class="page-head cat-ligas"><h1>${esc(campTitle(c))}</h1><p>${esc(T("campDesc", { de: L(c.de), liga: c.liga }))}</p></div>
    <div class="cover banner cat-ligas sp-futebol" aria-hidden="true"></div>
    ${lg ? `<p class="camp-champ">${esc(T("champ"))} <b>${esc(lg.champ)}</b>. ${esc(L(lg.fact))} <a href="${lg.src}">${esc(T("source"))}</a></p>` : ""}
    ${c.texto ? `<div class="prose">${L(c.texto).map((t) => `<p>${esc(t)}</p>`).join("")}</div>` : ""}
    ${a ? `${a.anterior ? `<p class="note camp-old">${esc(T("campOld", { s: a.temporada }))}</p>` : ""}
      ${a.nota ? `<p class="note">${esc(L(a.nota.texto))} ${esc(T("source"))}: <a href="${esc(a.nota.fonte[1])}">${esc(a.nota.fonte[0])}</a>.</p>` : ""}
      ${a.tabela && a.tabela.length ? `<section class="section cat-ligas">${sectionHead(a.anterior ? T("campFinal", { s: a.temporada }) : T("campTable") + (a.temporada ? " · " + T("campSeason", { s: a.temporada }) : ""))}${campTabela(a, c)}</section>` : ""}
      ${ad("meio")}
      ${a.resultados && a.resultados.length ? `<section class="section cat-ligas">${sectionHead(a.anterior ? T("campResultsOld", { s: a.temporada }) : T("campResults"))}<div class="panel">${campJogos(a.resultados, true, c)}</div></section>` : ""}
      ${a.proximos && a.proximos.length ? `<section class="section cat-ligas">${sectionHead(T("campNext"))}${tzHint()}<div class="panel">${campJogos(a.proximos, false, c)}</div></section>` : ""}
      <p class="note">${a.manual ? `${esc(T("campManual", { d: quando }))} <a href="${esc(a.fonte[1])}">${esc(a.fonte[0])}</a>` : esc(T("campUpdated", { d: quando }))}</p>`
    : `<p class="note">${esc(T("campNoData"))}</p>`}
    ${news.length ? `<section class="section cat-ligas">${sectionHead(T("campNews"))}<div class="grid-stories">${news.map(storyCard).join("")}</div></section>` : ""}
  </div>${sidebar()}</div>`;
}

/* grupos das competições africanas e seção "Mais esportes" (arquivo build-esportes.js) */
const ESP = require("./build-esportes.js")({ D, CAMP, NEWS, cfg, esc, L, T, u, ad, sectionHead, sidebar, timeTag, fmt, fmtDay, fmtTime, tzHint, storyCard, sorted, LANGS, LOCALE, bandeira, getLang: () => lang });
/* página de cada time dos campeonatos nacionais (arquivo build-times.js) */
const TM = require("./build-times.js")({ D, CAMP, AUTO, CATS, esc, L, T, u, sectionHead, sidebar, storyCard, sorted, timeTag, fmt, fmtDay, fmtTime, tzHint, bandeira, campTitle, LOCALE, getLang: () => lang });
const GEN = require("./build-generos.js")({ D, X, CATS, ESP, sorted, esc, L, T, u, storyCard, agendaList, tzHint, watchHtml, sectionHead, LOCALE, getLang: () => lang });

/* árabe: as traduções ficam em conteudo/traducao-ar.js; o que faltar aparece em francês */
const AR = require("./conteudo/traducao-ar.js");
const arChave = (s) => require("crypto").createHash("sha1").update(s).digest("hex").slice(0, 10);
D.LANGS.ar = "ar";
X.LANG_NAMES.ar = "العربية";
let semAr = 0;
function traduzAr(o) {
  const t = (s) => (typeof s === "string" && s.trim() ? AR[arChave(s)] : s);
  const r = Array.isArray(o.pt) ? o.pt.map(t) : t(o.pt);
  if (Array.isArray(r) ? r.every((x) => x !== undefined) : r !== undefined) return r;
  semAr++;
  return o.fr ?? o.en ?? o.pt;
}
(function preencher(o, vistos) {
  if (!o || typeof o !== "object" || vistos.has(o)) return;
  vistos.add(o);
  if (!Array.isArray(o) && o.pt !== undefined && (o.fr !== undefined || o.en !== undefined) && o.ar === undefined) o.ar = traduzAr(o);
  for (const k of Object.keys(o)) preencher(o[k], vistos);
})([D, X, NEWS, CAMP, require("./conteudo/esportes.js")], new Set());
if (semAr) console.log(`Árabe: ${semAr} textos sem tradução, mostrados em francês nas páginas em árabe.`);

/* ---------- páginas ---------- */
function homePage() {
  /* início: só notícias, da mais nova para a mais antiga. Tabelas, grupos e agenda ficam nas próprias páginas */
  const [lead, ...resto] = sorted;
  const destaques = resto.slice(0, 3);
  const demais = resto.slice(3);
  return `<div class="home">
    <div class="home-top">${leadCard(lead)}<div class="side-stories">${destaques.map(storyCard).join("")}</div></div>
    ${ad("topo")}
    ${demais.length ? `<section class="section" aria-labelledby="sec-ultimas">${sectionHead(T("latestNews"), null, null, "sec-ultimas")}
      <div class="grid-stories">${demais.map(storyCard).join("")}</div></section>` : ""}
  </div>`;
}

function categoryPage(k) {
  const items = sorted.filter((n) => n.tags.includes(k));
  let extra = "";
  if (k === "can") extra = `<section class="section cat-can">${sectionHead(T("leadersTitle"))}${qualTable()}</section>`;
  if (k === "cl") extra = `<section class="section cat-cl">${sectionHead(T("groupsTitle"))}${groupsHtml(D.CL_GROUPS, "cl")}<p class="note">${esc(T("clNote"))}</p></section>`;
  if (k === "cc") extra = `<section class="section cat-cc">${sectionHead(T("groupsTitle"))}${groupsHtml(D.CC_GROUPS, "cc")}<p class="note">${esc(T("ccNote"))}</p></section>`;
  if (k === "ligas") extra = `<section class="section cat-ligas">${sectionHead(T("champsTitle"))}${leaguesHtml()}</section>`;
  return `${ad("topo")}<div class="layout"><div>
    ${ROTAS_MASC.includes(CATS[k].route) ? `<a class="back" href="${u("masculino")}">‹ ${esc(T("gMasc"))}</a>` : ""}
    <div class="page-head cat-${k}"><h1>${esc(catName(k))}</h1><p>${esc(L(CATS[k].desc))}</p></div>
    ${k === "ligas" ? campDirHtml() : ""}
    <div class="grid-stories">${items.map(storyCard).join("") || `<div class="empty">${esc(T("emptyCat"))}</div>`}</div>
    ${extra}</div>${sidebar()}</div>`;
}

function agendaPage() {
  return `<div class="layout"><div>
    <div class="page-head"><h1>${esc(T("agenda"))}</h1><p>${esc(T("agendaDesc"))}</p>${tzHint()}</div>
    ${FIXTURES_BAR().length ? `<section class="placar" aria-label="${esc(T("scoreAria"))}"><h2>${esc(T("scoreTitle"))} <span>${esc(T("scoreSub"))}</span></h2><div class="scorebar-inner">${scorebar()}</div></section>` : ""}
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
  const corpo = L(p.body).filter((t) => cfg.CONTACT_EMAIL || !t.includes("{email}"));
  if (!cfg.CONTACT_EMAIL && key === "contato") corpo.push(T("emailSoon"));
  const paras = corpo.map((t) => `<p>${esc(t).replace("{email}", email)}</p>`).join("");
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
  </article>${sidebar(n.slug)}</div>`;
}

function searchPage() {
  const norm = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const rows = sorted.map((n) => rowCard(n, ` data-q="${esc(norm([L(n.title), L(n.lead), L(n.body).join(" ")].join(" ")))}"`)).join("")
    + CAMP.map((c) => `<a class="row-story camp-row" href="${campUrl(c)}" data-q="${esc(norm(["campeonato championnat league liga", c.liga, ...LANGS.map((l) => c.nome[l] + " " + c.de[l])].join(" ")))}">
      <div class="meta">${tag("ligas")}</div><h3>${esc(campTitle(c))}</h3></a>`).join("")
    + ESP.linhasBusca(norm);
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
    if (k === "fem") continue; /* a página Feminino é feita pelo build-generos.js */
    pages.push(emit(c.route, { title: catName(k), desc: L(c.desc), body: () => categoryPage(k), active: c.route }));
  }
  pages.push(emit("agenda", { title: T("agenda"), desc: T("agendaDesc"), body: () => agendaPage(), active: "agenda" }));
  pages.push(emit("tabelas", { title: T("tables"), desc: T("tablesDesc"), body: () => tablesPage(), active: "tabelas" }));
  pages.push(emit("onde-assistir", { title: T("watch"), desc: T("watchDesc"), body: () => watchPage(), active: "onde-assistir" }));
  for (const key of Object.keys(X.PAGES)) {
    pages.push(emit(key, { title: L(X.PAGES[key].title), desc: L(X.PAGES[key].body)[0].replace("{email}", cfg.CONTACT_EMAIL), body: () => staticPage(key), active: "" }));
  }
  emit("busca", { title: T("searchTitle"), desc: T("searchIntro"), body: () => searchPage(), active: "", noindex: true });
  for (const c of CAMP) {
    const indexavel = campIndexavel(c);
    const p = emit("campeonatos/" + c.slug, { title: campTitle(c), desc: T("campDesc", { de: L(c.de), liga: c.liga }), body: () => campPage(c), active: CATS.ligas.route, noindex: !indexavel });
    if (indexavel) pages.push(p);
  }
  TM.emitir(emit, pages);
  ESP.emitir(emit, pages);
  GEN.emitir(emit, pages);
  for (const n of NEWS) {
    pages.push(emit("noticias/" + n.slug, {
      title: L(n.title), desc: L(n.lead), body: () => articlePage(n), active: CATS[n.cat].route, type: "article",
      jsonld: { "@context": "https://schema.org", "@type": "NewsArticle", headline: L(n.title), description: L(n.lead), datePublished: n.date + ":00Z", inLanguage: LOCALE[l], publisher: { "@type": "Organization", name: brand() }, mainEntityOfPage: absUrl(pathOf("noticias/" + n.slug)) }
    }));
  }
}

/* arquivos de apoio */
fs.cpSync(path.join(__dirname, "assets"), path.join(OUT, "assets"), { recursive: true });
require("./build-campos.js")(path.join(OUT, "assets", "campos"));
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${absUrl("sitemap.xml")}\n`);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${absUrl(p)}</loc></url>`).join("\n")}\n</urlset>\n`);
if (cfg.ADSENSE_CLIENT) write("ads.txt", `google.com, ${cfg.ADSENSE_CLIENT.replace(/^ca-/, "")}, DIRECT, f08c47fec0942fa0\n`);
if (cfg.DOMAIN) write("CNAME", cfg.DOMAIN + "\n");
write(".nojekyll", "");
setLang("pt");
const base = cfg.BASE_PATH || "/";
write("404.html", `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(X.UI.notFoundPage.pt)} | Bola Africana</title><link rel="stylesheet" href="${base}assets/style.css"></head>
<body><main><div class="wrap"><div class="page-head"><h1>${esc(X.UI.notFoundPage.pt)}</h1><p>${LANGS.map((l) => `<a href="${base}${PREFIX[l]}index.html">${esc(X.BRAND_TITLE[l])} · ${X.LANG_NAMES[l]}</a>`).join(" &nbsp; ")}</p></div></div></main></body></html>\n`);

const nCamp = CAMP.filter(campIndexavel).length;
console.log(`Campeonatos: ${CAMP.length} páginas por idioma, ${nCamp} com dados ou texto (as demais ficam fora do Google até ganhar conteúdo).`);
console.log(`Times: ${TM.total()} páginas por idioma.`);
console.log(`Pronto: ${pages.length + 3} páginas no mapa do site em ${path.relative(process.cwd(), OUT) || OUT}${PREVIEW ? " (prévia com espaços de anúncio)" : ""}.`);
