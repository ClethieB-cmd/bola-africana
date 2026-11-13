/* Página de cada time dos campeonatos nacionais.
   No topo, a situação atual (posição, números, próximos e últimos jogos, notícias); depois o elenco,
   os dados do clube e a história. Os dados vêm do robô (conteudo/ligas-auto.json, partes "ligas" e "times").
   A história de um clube é escrita pela redação em conteudo/times.js. Usado pelo build.js. */
"use strict";

module.exports = function (h) {
  const { D, CAMP, AUTO, CATS, esc, L, T, u, sectionHead, sidebar, storyCard, sorted, timeTag, fmt, fmtDay, fmtTime, tzHint, bandeira, campTitle, LOCALE, getLang } = h;
  let HIST = {};
  try { HIST = require("./conteudo/times.js"); } catch (e) { /* nenhuma história escrita ainda */ }
  const TIMES = AUTO.times || {};

  Object.assign(D.UI, {
    tTitle: { pt: "{nome}: elenco, jogos e classificação", fr: "{nome} : effectif, matchs et classement", en: "{nome}: squad, results and table", ar: "{nome}: التشكيلة والمباريات والترتيب" },
    tDesc: { pt: "Tudo sobre {nome} ({liga}, {pais}): posição na tabela, jogos, notícias, elenco e dados do clube.", fr: "Tout sur {nome} ({liga}, {pais}) : classement, matchs, actualité, effectif et fiche du club.", en: "All about {nome} ({liga}, {pais}): table position, results, news, squad and club facts.", ar: "كل شيء عن {nome} ({liga}، {pais}): الترتيب والمباريات والأخبار والتشكيلة ومعلومات النادي." },
    tNow: { pt: "Temporada {s}", fr: "Saison {s}", en: "{s} season", ar: "موسم {s}" },
    tNowEnd: { pt: "Como terminou a temporada {s}", fr: "Bilan de la saison {s}", en: "How the {s} season ended", ar: "حصيلة موسم {s}" },
    tPos: { pt: "Posição", fr: "Classement", en: "Position", ar: "المركز" },
    tPts: { pt: "Pontos", fr: "Points", en: "Points", ar: "النقاط" },
    tPlayed: { pt: "Jogos", fr: "Matchs", en: "Played", ar: "المباريات" },
    tWon: { pt: "Vitórias", fr: "Victoires", en: "Won", ar: "الفوز" },
    tDrawn: { pt: "Empates", fr: "Nuls", en: "Drawn", ar: "التعادل" },
    tLost: { pt: "Derrotas", fr: "Défaites", en: "Lost", ar: "الخسارة" },
    tGD: { pt: "Saldo de gols", fr: "Différence", en: "Goal diff.", ar: "فارق الأهداف" },
    tOf: { pt: "de {n}", fr: "sur {n}", en: "of {n}", ar: "من {n}" },
    tLast: { pt: "Últimos jogos", fr: "Derniers matchs", en: "Recent results", ar: "آخر المباريات" },
    tRes: { pt: "V|E|D", fr: "V|N|D", en: "W|D|L", ar: "ف|ت|خ" },
    tSquad: { pt: "Elenco", fr: "Effectif", en: "Squad", ar: "التشكيلة" },
    tSquadNote: { pt: "Elenco atual segundo a API-Football.", fr: "Effectif actuel selon API-Football.", en: "Current squad according to API-Football.", ar: "التشكيلة الحالية بحسب API-Football." },
    tSoon: { pt: "O elenco e os dados do clube estão sendo carregados e aparecem aqui nos próximos dias.", fr: "L'effectif et la fiche du club sont en cours de chargement et apparaîtront ici dans les prochains jours.", en: "The squad and club facts are being loaded and will appear here in the coming days.", ar: "يجري تحميل التشكيلة ومعلومات النادي وستظهر هنا خلال الأيام المقبلة." },
    posG: { pt: "Goleiros", fr: "Gardiens", en: "Goalkeepers", ar: "حراس المرمى" },
    posD: { pt: "Defensores", fr: "Défenseurs", en: "Defenders", ar: "المدافعون" },
    posM: { pt: "Meio-campistas", fr: "Milieux", en: "Midfielders", ar: "لاعبو الوسط" },
    posA: { pt: "Atacantes", fr: "Attaquants", en: "Forwards", ar: "المهاجمون" },
    posX: { pt: "Outros", fr: "Autres", en: "Others", ar: "آخرون" },
    thNum: { pt: "Nº", fr: "N°", en: "No.", ar: "رقم" },
    thPlayer: { pt: "Jogador", fr: "Joueur", en: "Player", ar: "اللاعب" },
    thAge: { pt: "Idade", fr: "Âge", en: "Age", ar: "العمر" },
    tClub: { pt: "O clube", fr: "Le club", en: "The club", ar: "النادي" },
    tFounded: { pt: "Fundação", fr: "Fondation", en: "Founded", ar: "التأسيس" },
    tStadium: { pt: "Estádio", fr: "Stade", en: "Stadium", ar: "الملعب" },
    tCity: { pt: "Cidade", fr: "Ville", en: "City", ar: "المدينة" },
    tCap: { pt: "Capacidade", fr: "Capacité", en: "Capacity", ar: "السعة" },
    tCapN: { pt: "{n} lugares", fr: "{n} places", en: "{n} seats", ar: "{n} مقعد" },
    tHist: { pt: "História", fr: "Histoire", en: "History", ar: "التاريخ" },
    tSrc: { pt: "Dados: API-Football, atualizados em {d}.", fr: "Données : API-Football, mises à jour le {d}.", en: "Data: API-Football, updated {d}.", ar: "البيانات: API-Football، حُدّثت في {d}." }
  });

  const plano = (s) => String(s || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  const slug = (s) => plano(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const auto = (c) => (AUTO.ligas || {})[c.code];

  /* os times de cada campeonato, tirados da classificação */
  const cache = {};
  function timesDe(c) {
    if (cache[c.code]) return cache[c.code];
    const a = auto(c), out = [];
    for (const g of (a && a.tabela) || []) for (const r of g.linhas) {
      if (!out.some((t) => t.nome === r[1])) out.push({ nome: r[1], id: r[8] || null, logo: r[9] || null, linha: r, grupo: g.grupo, total: g.linhas.length });
    }
    return (cache[c.code] = out);
  }
  const idPagina = (c, nome) => `times/${c.slug}/${slug(nome)}`;
  const temPagina = (c, nome) => timesDe(c).some((t) => t.nome === nome);
  const link = (c, nome) => (temPagina(c, nome) ? `<a class="time-link" href="${u(idPagina(c, nome))}">${esc(nome)}</a>` : esc(nome));
  const info = (c, t) => (t.id && TIMES[t.id]) || Object.values(TIMES).find((x) => x.pais === c.code && x.nome === t.nome) || {};
  const historia = (c, t, inf) => HIST[inf.id] || HIST[`${c.code}:${t.nome}`] || null;

  function jogosDe(a, nome) {
    const lista = a.jogos ? a.jogos.map(([d, c, f, gc, gf]) => ({ d, c, f, gc, gf })) : (a.resultados || []);
    return lista.filter((g) => g.c === nome || g.f === nome);
  }
  function mencionaTime(n, nome) {
    const alvo = plano(nome);
    if (alvo.length < 5) return false;
    const txt = plano([L(n.title), L(n.lead)].join(" "));
    return new RegExp("(^|[^a-z0-9])" + alvo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z0-9]|$)").test(txt);
  }
  const numero = (n) => new Intl.NumberFormat(LOCALE[getLang()] + (getLang() === "ar" ? "-u-nu-latn" : "")).format(n);

  function jogosHtml(c, lista, nome, feitos) {
    const [V, E, Dr] = T("tRes").split("|");
    return lista.map((g) => {
      let res = "";
      if (feitos && g.gc !== null && g.gf !== null) {
        const meu = g.c === nome ? g.gc : g.gf, deles = g.c === nome ? g.gf : g.gc;
        res = meu > deles ? `<b class="res v">${V}</b>` : meu < deles ? `<b class="res d">${Dr}</b>` : `<b class="res e">${E}</b>`;
      }
      return `<div class="fx ${feitos ? "done" : ""}">
        <span class="teams">${res}${link(c, g.c)} × ${link(c, g.f)}</span>
        <span class="when">${feitos ? esc(`${g.gc ?? ""}–${g.gf ?? ""}`) : timeTag(g.d, "time", fmtTime(g.d))}</span>
        <span class="comp">${timeTag(g.d, "day", fmtDay(g.d))}</span></div>`;
    }).join("");
  }

  function elencoHtml(elenco) {
    const grupos = [["Goalkeeper", "posG"], ["Defender", "posD"], ["Midfielder", "posM"], ["Attacker", "posA"]];
    const outros = elenco.filter((p) => !grupos.some(([k]) => k === p[3]));
    return [...grupos.map(([k, rot]) => [rot, elenco.filter((p) => p[3] === k)]), ["posX", outros]].filter(([, l]) => l.length).map(([rot, l]) => `
      <h3 class="camp-grupo">${esc(T(rot))}</h3><div class="table-wrap"><table class="elenco">
      <thead><tr><th class="num">${esc(T("thNum"))}</th><th>${esc(T("thPlayer"))}</th><th class="num">${esc(T("thAge"))}</th></tr></thead>
      <tbody>${l.map(([nome, idade, num]) => `<tr><td class="num">${esc(num ?? "")}</td><td>${esc(nome)}</td><td class="num">${esc(idade ?? "")}</td></tr>`).join("")}</tbody></table></div>`).join("");
  }

  function pagina(c, t) {
    const a = auto(c);
    const inf = info(c, t);
    const r = t.linha;
    const hist = historia(c, t, inf);
    const jogos = jogosDe(a, t.nome);
    const prox = (a.proximos || []).filter((g) => g.c === t.nome || g.f === t.nome);
    const news = sorted.filter((n) => mencionaTime(n, t.nome)).slice(0, 6);
    const logo = t.logo || inf.logo;
    const quando = a.atualizado ? fmt({ day: "numeric", month: "long", year: "numeric" }).format(new Date(a.atualizado)) : "";
    const caixa = (rot, val, extra) => `<div class="stat"><span class="v">${esc(val)}</span><span class="k">${esc(rot)}${extra ? ` <small>${esc(extra)}</small>` : ""}</span></div>`;
    const dados = [
      inf.fundado && [T("tFounded"), String(inf.fundado)],
      inf.estadio && [T("tStadium"), inf.estadio],
      inf.cidade && [T("tCity"), inf.cidade],
      inf.capacidade && [T("tCap"), T("tCapN", { n: numero(inf.capacidade) })]
    ].filter(Boolean);
    const elenco = inf.elenco || [];
    return `<div class="layout"><div class="article camp time">
      <a class="back" href="${u("campeonatos/" + c.slug)}">‹ ${esc(campTitle(c))}</a>
      <div class="time-head">${logo ? `<img class="escudo" src="${esc(logo)}" alt="" width="72" height="72" loading="lazy" decoding="async">` : ""}
        <div><h1>${esc(t.nome)}</h1><p>${bandeira(c.code)}${esc(a.apiNome || c.liga)} · ${esc(L(c.nome))}</p></div></div>
      ${a.anterior ? `<p class="note camp-old">${esc(T("campOld", { s: a.temporada }))}</p>` : ""}
      <section class="section">${sectionHead(a.anterior ? T("tNowEnd", { s: a.temporada }) : T("tNow", { s: a.temporada }))}
        <div class="stats">${caixa(T("tPos"), r[0], t.grupo ? t.grupo : T("tOf", { n: t.total }))}${caixa(T("tPts"), r[7])}${caixa(T("tPlayed"), r[2])}${caixa(T("tWon"), r[3])}${caixa(T("tDrawn"), r[4])}${caixa(T("tLost"), r[5])}${caixa(T("tGD"), r[6] > 0 ? "+" + r[6] : r[6])}</div>
        <p class="note"><a href="${u("campeonatos/" + c.slug)}">${esc(T("campTable"))} · ${esc(a.apiNome || c.liga)}</a></p></section>
      ${prox.length ? `<section class="section">${sectionHead(T("campNext"))}${tzHint()}<div class="panel">${jogosHtml(c, prox, t.nome, false)}</div></section>` : ""}
      ${jogos.length ? `<section class="section">${sectionHead(T("tLast"))}<div class="panel">${jogosHtml(c, jogos.slice(0, 10), t.nome, true)}</div></section>` : ""}
      ${news.length ? `<section class="section">${sectionHead(T("campNews"))}<div class="grid-stories">${news.map(storyCard).join("")}</div></section>` : ""}
      ${elenco.length ? `<section class="section">${sectionHead(T("tSquad"))}${elencoHtml(elenco)}<p class="note">${esc(T("tSquadNote"))}</p></section>` : ""}
      ${dados.length ? `<section class="section">${sectionHead(T("tClub"))}<dl class="ficha">${dados.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></section>` : ""}
      ${hist ? `<section class="section">${sectionHead(T("tHist"))}<div class="prose">${L(hist.texto).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        ${hist.fontes ? `<p class="note">${esc(T("sources"))}: ${hist.fontes.map(([nome, href]) => `<a href="${href}">${esc(nome)}</a>`).join(", ")}</p>` : ""}</section>` : ""}
      ${!inf.elencoEm && !dados.length ? `<p class="note">${esc(T("tSoon"))}</p>` : ""}
      <p class="note">${esc(T("tSrc", { d: quando }))}</p>
    </div>${sidebar()}</div>`;
  }

  /* página entra no Google quando tem mais do que a linha da tabela: elenco, dados do clube ou história */
  function indexavel(c, t) {
    const inf = info(c, t);
    return !!((inf.elenco && inf.elenco.length) || inf.estadio || historia(c, t, inf));
  }

  function emitir(emit, pages) {
    for (const c of CAMP) {
      const a = auto(c);
      for (const t of timesDe(c)) {
        const p = emit(idPagina(c, t.nome), {
          title: T("tTitle", { nome: t.nome }), desc: T("tDesc", { nome: t.nome, liga: (a && a.apiNome) || c.liga, pais: L(c.nome) }),
          body: () => pagina(c, t), active: CATS.ligas.route, noindex: !indexavel(c, t)
        });
        if (indexavel(c, t)) pages.push(p);
      }
    }
  }

  const total = () => CAMP.reduce((n, c) => n + timesDe(c).length, 0);
  return { link, emitir, total };
};
