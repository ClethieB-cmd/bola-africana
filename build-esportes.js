/* Páginas geradas a partir dos dados automáticos: grupos e tabelas das competições africanas de futebol
   (CAN, Liga dos Campeões, Copa das Confederações...) e a seção "Mais esportes".
   Usado pelo build.js; não precisa ser editado para publicar notícias. */
"use strict";
const fs = require("fs");
const path = require("path");

module.exports = function (h) {
  const { D, CAMP, NEWS, cfg, esc, L, T, u, ad, sectionHead, sidebar, timeTag, fmt, fmtDay, fmtTime, tzHint, storyCard, sorted, LANGS, getLang } = h;
  const ESPORTES = require("./conteudo/esportes.js");
  const ler = (f) => { try { return JSON.parse(fs.readFileSync(path.join(__dirname, "conteudo", f), "utf8")); } catch (e) { return {}; } };
  const FUT = ler("ligas-auto.json").continentais || {};
  const AUTO = ler("esportes-auto.json");

  Object.assign(D.UI, {
    moreSports: { pt: "Mais esportes", fr: "Autres sports", en: "More sports" },
    moreSportsDesc: { pt: "Basquete, handebol, vôlei, rúgbi, atletismo, lutas e outros esportes na África.", fr: "Basket-ball, handball, volley-ball, rugby, athlétisme, sports de combat et autres sports en Afrique.", en: "Basketball, handball, volleyball, rugby, athletics, combat sports and more across Africa." },
    espCompsN: { pt: "Competições com dados: {n}", fr: "Compétitions avec données : {n}", en: "Competitions with data: {n}" },
    thTeam: { pt: "Time", fr: "Équipe", en: "Team" },
    espNews: { pt: "Notícias", fr: "Actualité", en: "News" },
    espContinental: { pt: "Competições africanas", fr: "Compétitions africaines", en: "African competitions" },
    espNational: { pt: "Campeonatos nacionais", fr: "Championnats nationaux", en: "National competitions" },
    espEmpty: { pt: "Ainda não temos resultados deste esporte. A seção é atualizada pela redação e pelos dados automáticos.", fr: "Nous n'avons pas encore de résultats pour ce sport. La rubrique est alimentée par la rédaction et par les données automatiques.", en: "We don't have results for this sport yet. This section is updated by the newsroom and by automatic data." },
    compTitleNat: { pt: "{esporte} {de}: {nome}", fr: "{esporte} : {nome} ({pays})", en: "{pays} {esporteMin}: {nome}" },
    compTitleAfr: { pt: "{africano}: {nome}", fr: "{africano} : {nome}", en: "{africano}: {nome}" },
    compDesc: { pt: "Classificação completa, grupos, resultados e próximos jogos: {nome}.", fr: "Classement complet, groupes, résultats et prochains matchs : {nome}.", en: "Full standings, groups, results and upcoming games: {nome}." },
    groupsTitle2: { pt: "Grupos e classificação", fr: "Groupes et classement", en: "Groups and standings" },
    fullPage: { pt: "Ver classificação completa", fr: "Voir le classement complet", en: "See full standings" },
    allSports: { pt: "Todos os esportes", fr: "Tous les sports", en: "All sports" },
    resultsT: { pt: "Últimos resultados", fr: "Derniers résultats", en: "Latest results" },
    nextT: { pt: "Próximos jogos", fr: "Prochains matchs", en: "Upcoming games" },
    seasonT: { pt: "Temporada {s}", fr: "Saison {s}", en: "{s} season" },
    updatedT: { pt: "Dados atualizados em {d}. Fonte: API-Sports.", fr: "Données mises à jour le {d}. Source : API-Sports.", en: "Data updated {d}. Source: API-Sports." },
    ptsShort: { pt: "pts", fr: "pts", en: "pts" },
    jShort: { pt: "J", fr: "J", en: "P", ar: "م" }
  });

  /* nomes das competições continentais de futebol */
  const NOMES_FUT = {
    canq: { pt: "Eliminatórias da CAN", fr: "Éliminatoires de la CAN", en: "AFCON qualifiers", ar: "تصفيات كأس أمم أفريقيا" },
    can: { pt: "Copa Africana de Nações (CAN)", fr: "Coupe d'Afrique des nations (CAN)", en: "Africa Cup of Nations (AFCON)", ar: "كأس أمم أفريقيا" },
    cl: { pt: "Liga dos Campeões da CAF", fr: "Ligue des champions de la CAF", en: "CAF Champions League", ar: "دوري أبطال أفريقيا" },
    cc: { pt: "Copa das Confederações da CAF", fr: "Coupe de la Confédération de la CAF", en: "CAF Confederation Cup", ar: "كأس الكونفدرالية الأفريقية" },
    clf: { pt: "Liga dos Campeões Feminina da CAF", fr: "Ligue des champions féminine de la CAF", en: "CAF Women's Champions League", ar: "دوري أبطال أفريقيا للسيدات" },
    canf: { pt: "CAN Feminina", fr: "CAN féminine", en: "Women's AFCON", ar: "كأس أمم أفريقيا للسيدات" },
    chan: { pt: "Campeonato Africano de Nações (CHAN)", fr: "Championnat d'Afrique des nations (CHAN)", en: "African Nations Championship (CHAN)", ar: "بطولة أمم أفريقيا للمحليين (الشان)" },
    mundq: { pt: "Eliminatórias africanas da Copa do Mundo", fr: "Éliminatoires africaines de la Coupe du monde", en: "World Cup qualifiers (Africa)", ar: "تصفيات أفريقيا لكأس العالم" }
  };
  const SLUG_FUT = { canq: "eliminatorias-can", can: "can", cl: "liga-dos-campeoes-caf", cc: "copa-das-confederacoes-caf", clf: "liga-dos-campeoes-feminina-caf", canf: "can-feminina", chan: "chan", mundq: "eliminatorias-copa-do-mundo-africa" };

  /* nomes de seleções em inglês (como vêm da API) para o idioma da página */
  const plano = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const SELECAO = new Map();
  for (const c of CAMP) { SELECAO.set(plano(c.nome.en), c); SELECAO.set(plano(c.nome.fr), c); }
  [["ivorycoast", "CIV"], ["congodr", "COD"], ["drcongo", "COD"], ["capeverdeislands", "CPV"], ["swaziland", "SWZ"],
   ["saotomeandprincipe", "STP"], ["thegambia", "GAM"], ["centralafricanrep", "CTA"], ["equatorialguinea", "EQG"]]
    .forEach(([n, code]) => SELECAO.set(n, CAMP.find((c) => c.code === code)));
  const time = (n) => { const c = SELECAO.get(plano(n)); return c ? L(c.nome) : n; };
  const grupoNome = (g) => { const m = String(g).match(/^group\s+(.+)$/i); return m ? `${T("group")} ${m[1]}` : g; };

  /* tabela completa, com colunas que se ajustam ao esporte */
  const COLS = [[2, "thP"], [3, "thW"], [4, "thD"], [5, "thL"], [6, "thGD"], [7, "thPts"]];
  const th = (k) => { const [a, t] = T(k).split("|"); return `<th class="num"><abbr title="${esc(t)}">${esc(a)}</abbr></th>`; };
  const fmtSg = (v) => (typeof v === "number" && v > 0 ? "+" + v : v);
  function tabelaHtml(grupos) {
    return grupos.map((g) => {
      const cols = COLS.filter(([i]) => g.linhas.some((r) => r[i] !== null && r[i] !== undefined && r[i] !== ""));
      return `${g.grupo ? `<h3 class="camp-grupo">${esc(grupoNome(g.grupo))}</h3>` : ""}<div class="table-wrap"><table>
      <thead><tr><th class="num">#</th><th>${esc(T("thTeam"))}</th>${cols.map(([, k]) => th(k)).join("")}</tr></thead>
      <tbody>${g.linhas.map((r) => `<tr><td class="num">${esc(r[0])}</td><td>${esc(time(r[1]))}</td>${cols.map(([i]) => `<td class="num">${i === 7 ? `<b>${esc(r[i])}</b>` : esc(i === 6 ? fmtSg(r[i]) : r[i])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    }).join("");
  }
  /* cartões compactos: todos os times de cada grupo, do primeiro ao último */
  function gruposCards(grupos, link) {
    return `<div class="groups gtab">${grupos.map((g) => `<div class="group"><h3>${esc(g.grupo ? grupoNome(g.grupo) : T("campTable"))}</h3><ol>${
      g.linhas.map((r) => `<li><span class="pos">${esc(r[0])}</span><span class="tm">${esc(time(r[1]))}</span><span class="pj">${r[2] !== null ? esc(r[2]) + " " + esc(T("jShort")) : ""}</span><span class="pt">${r[7] !== null ? `<b>${esc(r[7])}</b> ${esc(T("ptsShort"))}` : esc(`${r[3] ?? ""}-${r[5] ?? ""}`)}</span></li>`).join("")
    }</ol></div>`).join("")}</div>${link ? `<p class="note"><a href="${link}">${esc(T("fullPage"))}</a></p>` : ""}`;
  }
  function jogosHtml(lista, feitos) {
    return lista.map((g) => `<div class="fx ${feitos ? "done" : ""}">
      <span class="teams"><span class="flag" aria-hidden="true"></span>${esc(time(g.c))} × ${esc(time(g.f))}</span>
      <span class="when">${feitos ? esc(`${g.gc ?? ""}–${g.gf ?? ""}`) : timeTag(g.d, "time", fmtTime(g.d))}</span>
      <span class="comp">${timeTag(g.d, "day", fmtDay(g.d))}</span></div>`).join("");
  }
  const temDados = (c) => c && ((c.tabela && c.tabela.length) || (c.resultados && c.resultados.length) || (c.proximos && c.proximos.length));
  function blocoComp(c, cat, fonteKey) {
    const quando = c.atualizado ? fmt({ day: "numeric", month: "long", year: "numeric" }).format(new Date(c.atualizado)) : "";
    return `${c.tabela && c.tabela.length ? `<section class="section ${cat}">${sectionHead(T("groupsTitle2") + (c.temporada ? " · " + T("seasonT", { s: c.temporada }) : ""))}${tabelaHtml(c.tabela)}</section>` : ""}
      ${ad("meio")}
      ${c.resultados && c.resultados.length ? `<section class="section ${cat}">${sectionHead(T("resultsT"))}<div class="panel">${jogosHtml(c.resultados, true)}</div></section>` : ""}
      ${c.proximos && c.proximos.length ? `<section class="section ${cat}">${sectionHead(T("nextT"))}${tzHint()}<div class="panel">${jogosHtml(c.proximos, false)}</div></section>` : ""}
      <p class="note">${esc(T(fonteKey, { d: quando }))}</p>`;
  }

  /* ---------- futebol: competições continentais ---------- */
  const futUrl = (k) => u("competicoes/" + SLUG_FUT[k]);
  function grupos(k) {
    const c = FUT[k];
    return c && c.tabela && c.tabela.length ? gruposCards(c.tabela, futUrl(k)) : null;
  }
  function futPage(k) {
    const c = FUT[k];
    return `<div class="layout"><div class="article camp">
      <div class="page-head cat-can"><h1>${esc(L(NOMES_FUT[k]))}</h1><p>${esc(T("compDesc", { nome: L(NOMES_FUT[k]) }))}</p></div>
      ${blocoComp(c, "cat-can", "campUpdated")}
    </div>${sidebar()}</div>`;
  }

  /* ---------- mais esportes ---------- */
  const slugify = (s) => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const comps = (e) => Object.values((AUTO[e.id] || {}).competicoes || {}).filter(temDados);
  const paisDe = (code) => CAMP.find((c) => c.code === code);
  const compSlug = (c) => slugify(`${c.pais === "AFR" ? "africa" : (paisDe(c.pais) || { slug: c.pais }).slug}-${c.nome}-${c.apiId}`);
  const espUrl = (e) => u("esportes/" + e.id);
  const compUrl = (e, c) => u(`esportes/${e.id}/${compSlug(c)}`);
  function compTitle(e, c) {
    if (c.pais === "AFR") return T("compTitleAfr", { africano: L(e.africano), nome: c.nome });
    const p = paisDe(c.pais);
    return T("compTitleNat", { esporte: L(e.nome), esporteMin: L(e.nome).toLowerCase(), de: L(p.de), pays: L(p.nome), nome: c.nome });
  }
  const newsDe = (e) => sorted.filter((n) => n.esporte === e.id || (Array.isArray(n.esporte) && n.esporte.includes(e.id)));
  const espIndexavel = (e) => comps(e).length > 0 || newsDe(e).length > 0;

  function hubPage() {
    return `<div class="layout"><div>
      <div class="page-head"><h1>${esc(T("moreSports"))}</h1><p>${esc(T("moreSportsDesc"))}</p></div>
      <ul class="camp-dir esp-dir">${ESPORTES.map((e) => {
        const n = comps(e).length;
        return `<li><a href="${espUrl(e)}"><span class="pais">${esc(L(e.nome))}</span><span class="liga">${esc(n ? T("espCompsN", { n }) : L(e.desc))}</span></a></li>`;
      }).join("")}</ul>
    </div>${sidebar()}</div>`;
  }
  function espPage(e) {
    const cs = comps(e);
    const afr = cs.filter((c) => c.pais === "AFR");
    const nac = cs.filter((c) => c.pais !== "AFR").sort((a, b) => L(paisDe(a.pais).nome).localeCompare(L(paisDe(b.pais).nome), h.LOCALE[getLang()]));
    const news = newsDe(e).slice(0, 9);
    return `<div class="layout"><div class="article camp">
      <a class="back" href="${u("esportes")}">‹ ${esc(T("allSports"))}</a>
      <div class="page-head"><h1>${esc(L(e.nome))}</h1><p>${esc(L(e.desc))}</p></div>
      ${afr.map((c) => `<section class="section"><div class="section-head"><h2>${esc(c.nome)}</h2><a href="${compUrl(e, c)}">${esc(T("fullPage"))}</a></div>${c.tabela && c.tabela.length ? gruposCards(c.tabela) : `<div class="panel">${jogosHtml((c.resultados || []).slice(0, 4), true)}</div>`}</section>`).join("")}
      ${nac.length ? `<section class="section">${sectionHead(T("espNational"))}<ul class="camp-dir">${nac.map((c) => `<li><a href="${compUrl(e, c)}"><span class="pais">${esc(L(paisDe(c.pais).nome))}</span><span class="liga">${esc(c.nome)}</span></a></li>`).join("")}</ul></section>` : ""}
      ${news.length ? `<section class="section">${sectionHead(T("espNews"))}<div class="grid-stories">${news.map(storyCard).join("")}</div></section>` : ""}
      ${!cs.length && !news.length ? `<p class="note">${esc(T("espEmpty"))}</p>` : ""}
    </div>${sidebar()}</div>`;
  }
  function compPage(e, c) {
    return `<div class="layout"><div class="article camp">
      <a class="back" href="${espUrl(e)}">‹ ${esc(L(e.nome))}</a>
      <div class="page-head"><h1>${esc(compTitle(e, c))}</h1><p>${esc(T("compDesc", { nome: c.nome }))}</p></div>
      ${blocoComp(c, "", "updatedT")}
    </div>${sidebar()}</div>`;
  }

  function emitir(emit, pages) {
    for (const k of Object.keys(SLUG_FUT)) {
      if (!temDados(FUT[k])) continue;
      pages.push(emit("competicoes/" + SLUG_FUT[k], { title: L(NOMES_FUT[k]), desc: T("compDesc", { nome: L(NOMES_FUT[k]) }), body: () => futPage(k), active: "tabelas" }));
    }
    pages.push(emit("esportes", { title: T("moreSports"), desc: T("moreSportsDesc"), body: () => hubPage(), active: "esportes" }));
    for (const e of ESPORTES) {
      const idx = espIndexavel(e);
      const p = emit("esportes/" + e.id, { title: L(e.nome), desc: L(e.desc), body: () => espPage(e), active: "esportes", noindex: !idx });
      if (idx) pages.push(p);
      for (const c of comps(e)) pages.push(emit(`esportes/${e.id}/${compSlug(c)}`, { title: compTitle(e, c), desc: T("compDesc", { nome: c.nome }), body: () => compPage(e, c), active: "esportes" }));
    }
  }

  function linhasBusca(norm) {
    const linha = (href, titulo, extra, codigo) => `<a class="row-story camp-row" href="${href}" data-q="${esc(norm(titulo + " " + extra))}">
      <div class="cover" aria-hidden="true"><div class="big">${esc(codigo)}</div></div><div><h3>${esc(titulo)}</h3></div></a>`;
    let out = "";
    for (const e of ESPORTES) {
      out += linha(espUrl(e), L(e.nome), LANGS.map((l) => e.nome[l]).join(" "), L(e.nome).slice(0, 3).toUpperCase());
      for (const c of comps(e)) {
        const p = paisDe(c.pais);
        out += linha(compUrl(e, c), compTitle(e, c), [c.nome, ...LANGS.map((l) => e.nome[l] + (p ? " " + p.nome[l] + " " + p.de[l] : " africa afrique"))].join(" "), c.pais === "AFR" ? "AFR" : c.pais);
      }
    }
    for (const k of Object.keys(SLUG_FUT)) if (temDados(FUT[k])) out += linha(futUrl(k), L(NOMES_FUT[k]), LANGS.map((l) => NOMES_FUT[k][l]).join(" ") + " grupos groupes groups", "CAF");
    return out;
  }

  return { grupos, emitir, linhasBusca, futUrl, temFut: (k) => temDados(FUT[k]) };
};
