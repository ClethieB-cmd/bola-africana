/* História, títulos e recordes (dados em conteudo/historia.js).
   Monta a classificação das eliminatórias da CAN 2027, as finais e os campeões de cada competição,
   os prêmios de melhor jogador e jogadora da África e o quadro "Em números" da coluna lateral. Usado pelo build.js. */
"use strict";

module.exports = function (h) {
  const { D, esc, L, T, C, u, CATS, bandeira, sectionHead, fmt } = h;
  const H = require("./conteudo/historia.js");

  Object.assign(D.UI, {
    hQual: { pt: "Eliminatórias da CAN 2027: classificação", fr: "Éliminatoires de la CAN 2027 : classement", en: "AFCON 2027 qualifiers: standings", ar: "تصفيات كأس أمم أفريقيا 2027: الترتيب" },
    hQualAte: { pt: "Classificação até os jogos de {d}.", fr: "Classement après les matchs du {d}.", en: "Standings up to the games of {d}.", ar: "الترتيب حتى مباريات {d}." },
    hQualRegra: {
      pt: "Os dois primeiros de cada grupo vão à CAN. Nos grupos D, H e L estão Quênia, Uganda e Tanzânia, sedes já classificadas: ali vão à CAN a sede e o melhor colocado entre os outros três.",
      fr: "Les deux premiers de chaque groupe vont à la CAN. Les groupes D, H et L comptent le Kenya, l'Ouganda et la Tanzanie, pays hôtes déjà qualifiés : y vont à la CAN le pays hôte et le mieux classé des trois autres.",
      en: "The top two in each group go to the AFCON. Groups D, H and L include Kenya, Uganda and Tanzania, the co-hosts, already qualified: there the host and the best-placed of the other three go through.",
      ar: "يتأهل صاحبا المركزين الأول والثاني في كل مجموعة. وفي المجموعات D وH وL توجد كينيا وأوغندا وتنزانيا، الدول المضيفة المتأهلة مسبقاً، فيتأهل منها البلد المضيف وأفضل منتخب بين الثلاثة الآخرين."
    },
    hSede: { pt: "sede", fr: "hôte", en: "host", ar: "مستضيف" },
    hCanFinais: { pt: "Todas as finais da CAN", fr: "Toutes les finales de la CAN", en: "Every AFCON final", ar: "جميع نهائيات كأس أمم أفريقيا" },
    hCanTit: { pt: "Seleções campeãs da CAN", fr: "Palmarès de la CAN par sélection", en: "AFCON titles by team", ar: "ألقاب كأس أمم أفريقيا حسب المنتخب" },
    hRecordes: { pt: "Recordes da CAN", fr: "Records de la CAN", en: "AFCON records", ar: "أرقام قياسية في كأس أمم أفريقيا" },
    hClTit: { pt: "Campeões da Liga dos Campeões da CAF", fr: "Palmarès de la Ligue des champions de la CAF", en: "CAF Champions League winners", ar: "أبطال دوري أبطال أفريقيا" },
    hCcTit: { pt: "Campeões da Copa das Confederações", fr: "Palmarès de la Coupe de la Confédération", en: "CAF Confederation Cup winners", ar: "أبطال كأس الكونفدرالية الأفريقية" },
    hPaises: { pt: "Títulos por país", fr: "Titres par pays", en: "Titles by country", ar: "الألقاب حسب البلد" },
    hFinais: { pt: "Últimas finais", fr: "Dernières finales", en: "Recent finals", ar: "آخر النهائيات" },
    hCanf: { pt: "CAN Feminina: todas as finais", fr: "CAN féminine : toutes les finales", en: "Women's AFCON: every final", ar: "كأس أمم أفريقيا للسيدات: جميع النهائيات" },
    hCanfTit: { pt: "Seleções campeãs da CAN Feminina", fr: "Palmarès de la CAN féminine", en: "Women's AFCON titles", ar: "ألقاب كأس أمم أفريقيا للسيدات" },
    hClf: { pt: "Liga dos Campeões Feminina: campeãs", fr: "Ligue des champions féminine : palmarès", en: "CAF Women's Champions League winners", ar: "بطلات دوري أبطال أفريقيا للسيدات" },
    hPotyM: { pt: "Jogador Africano do Ano (CAF)", fr: "Joueur africain de l'année (CAF)", en: "CAF African Player of the Year", ar: "أفضل لاعب أفريقي (الكاف)" },
    hPotyF: { pt: "Jogadora Africana do Ano (CAF)", fr: "Joueuse africaine de l'année (CAF)", en: "CAF Women's Player of the Year", ar: "أفضل لاعبة أفريقية (الكاف)" },
    hHistFem: { pt: "Futebol feminino: história e títulos", fr: "Football féminin : histoire et palmarès", en: "Women's football: history and titles", ar: "كرة القدم النسائية: التاريخ والألقاب" },
    hSubFem: { pt: "CAN Feminina, Liga dos Campeões e Jogadora do Ano", fr: "CAN féminine, Ligue des champions et Joueuse de l'année", en: "Women's AFCON, Champions League and Player of the Year", ar: "كأس الأمم ودوري الأبطال وأفضل لاعبة" },
    hHist: { pt: "História e títulos", fr: "Histoire et palmarès", en: "History and titles", ar: "التاريخ والألقاب" },
    potyNotaM: { pt: "Não houve prêmio em 2020 e 2021.", fr: "Pas de trophée en 2020 et 2021.", en: "No award in 2020 and 2021.", ar: "لم تُمنح الجائزة في 2020 و2021." },
    potyNotaF: { pt: "Não houve prêmio em 2009, 2013, 2020 e 2021.", fr: "Pas de trophée en 2009, 2013, 2020 et 2021.", en: "No award in 2009, 2013, 2020 and 2021.", ar: "لم تُمنح الجائزة في 2009 و2013 و2020 و2021." },
    thAno: { pt: "Ano", fr: "Année", en: "Year", ar: "السنة" },
    thSedeT: { pt: "Sede", fr: "Pays hôte", en: "Host", ar: "البلد المضيف" },
    thCampeao: { pt: "Campeão", fr: "Vainqueur", en: "Winner", ar: "البطل" },
    thPlacar: { pt: "Placar", fr: "Score", en: "Score", ar: "النتيجة" },
    thVice: { pt: "Vice", fr: "Finaliste", en: "Runner-up", ar: "الوصيف" },
    thSelecao: { pt: "Seleção", fr: "Sélection", en: "Team", ar: "المنتخب" },
    thTitulos: { pt: "Títulos", fr: "Titres", en: "Titles", ar: "الألقاب" },
    thVices: { pt: "Vices", fr: "Finales perdues", en: "Runners-up", ar: "الوصافة" },
    thAnos: { pt: "Anos", fr: "Années", en: "Years", ar: "السنوات" },
    thPais: { pt: "País", fr: "Pays", en: "Country", ar: "البلد" },
    thTemporada: { pt: "Temporada", fr: "Saison", en: "Season", ar: "الموسم" },
    thJogador: { pt: "Jogador", fr: "Joueur", en: "Player", ar: "اللاعب" },
    thJogadora: { pt: "Jogadora", fr: "Joueuse", en: "Player", ar: "اللاعبة" },
    pProrr: { pt: "prorr.", fr: "a.p.", en: "a.e.t.", ar: "بعد التمديد" },
    pPen: { pt: "{s} nos pênaltis", fr: "{s} aux t.a.b.", en: "{s} on penalties", ar: "{s} بركلات الترجيح" },
    pExtra: { pt: "jogo extra: {s}", fr: "match d'appui : {s}", en: "replay: {s}", ar: "مباراة فاصلة: {s}" },
    pTurno: { pt: "turno final", fr: "poule finale", en: "final round-robin", ar: "دوري ختامي" },
    pInterr: { pt: "partida interrompida", fr: "match arrêté", en: "abandoned", ar: "أوقفت المباراة" },
    fTitulo: { pt: "Em números", fr: "En chiffres", en: "In numbers", ar: "بالأرقام" },
    fCan: { pt: "{x}: maior campeão da CAN", fr: "{x} : la sélection la plus titrée de la CAN", en: "{x}: most AFCON titles", ar: "{x}: الأكثر تتويجاً بكأس أمم أفريقيا" },
    fCl: { pt: "{x}: maior campeão da Liga dos Campeões", fr: "{x} : le club le plus titré de la Ligue des champions", en: "{x}: most Champions League titles", ar: "{x}: الأكثر تتويجاً بدوري الأبطال" },
    fClPais: { pt: "{x}: país com mais títulos da Liga dos Campeões", fr: "{x} : le pays le plus titré de la Ligue des champions", en: "{x}: country with most Champions League titles", ar: "{x}: البلد الأكثر تتويجاً بدوري الأبطال" },
    fCc: { pt: "{x}: maiores campeões da Copa das Confederações", fr: "{x} : les clubs les plus titrés de la Coupe de la Confédération", en: "{x}: most Confederation Cup titles", ar: "{x}: الأكثر تتويجاً بكأس الكونفدرالية" },
    fCcPais: { pt: "{x}: país com mais títulos da Copa das Confederações", fr: "{x} : le pays le plus titré de la Coupe de la Confédération", en: "{x}: country with most Confederation Cup titles", ar: "{x}: البلد الأكثر تتويجاً بكأس الكونفدرالية" },
    fCanf: { pt: "{x}: maior campeã da CAN Feminina", fr: "{x} : la plus titrée de la CAN féminine", en: "{x}: most Women's AFCON titles", ar: "{x}: الأكثر تتويجاً بكأس أمم أفريقيا للسيدات" },
    fClf: { pt: "{x}: maiores campeãs da Liga dos Campeões Feminina", fr: "{x} : les plus titrées de la Ligue des champions féminine", en: "{x}: most Women's Champions League titles", ar: "{x}: الأكثر تتويجاً بدوري أبطال أفريقيا للسيدات" },
    fPotyM: { pt: "{x}: mais vezes Jogador Africano do Ano", fr: "{x} : le plus souvent Joueur africain de l'année", en: "{x}: most African Player of the Year awards", ar: "{x}: الأكثر فوزاً بجائزة أفضل لاعب أفريقي" },
    fPotyF: { pt: "{x}: mais vezes Jogadora Africana do Ano", fr: "{x} : le plus souvent Joueuse africaine de l'année", en: "{x}: most Women's Player of the Year awards", ar: "{x}: الأكثر فوزاً بجائزة أفضل لاعبة أفريقية" },
    fArt: { pt: "{x}: gols, recorde de artilharia da CAN", fr: "{x} : buts, record de la CAN", en: "{x}: goals, the AFCON scoring record", ar: "{x}: أهداف، الرقم القياسي في كأس أمم أفريقيا" },
    fJogos: { pt: "{x}: jogos, recorde da CAN", fr: "{x} : matchs, record de la CAN", en: "{x}: games, the AFCON record", ar: "{x}: مباراة، الرقم القياسي في كأس أمم أفريقيا" },
    fTitJog: { pt: "{x}: títulos da CAN, recorde de um jogador", fr: "{x} : titres de CAN, record pour un joueur", en: "{x}: AFCON titles, a player record", ar: "{x}: ألقاب، الرقم القياسي للاعب في كأس أمم أفريقيا" },
    lCampeao: { pt: "Último campeão", fr: "Dernier champion", en: "Latest champion", ar: "آخر بطل" },
    lMaior: { pt: "Mais títulos", fr: "Le plus titré", en: "Most titles", ar: "الأكثر تتويجاً" },
    lTit: { pt: "{n} títulos", fr: "{n} titres", en: "{n} titles", ar: "{n} لقباً" },
    lTitCada: { pt: "{n} títulos cada", fr: "{n} titres chacun", en: "{n} titles each", ar: "{n} لقباً لكل منهما" },
    lCopa: { pt: "Copa nacional", fr: "Coupe nationale", en: "National cup", ar: "الكأس المحلية" },
    lVice: { pt: "final contra {x}", fr: "finale contre {x}", en: "final against {x}", ar: "النهائي أمام {x}" },
    lArt: { pt: "Artilheiro {s}", fr: "Meilleur buteur {s}", en: "Top scorer {s}", ar: "الهداف {s}" },
    lGols: { pt: "{n} gols", fr: "{n} buts", en: "{n} goals", ar: "{n} هدفاً" },
    lGolsCada: { pt: "{n} gols cada", fr: "{n} buts chacun", en: "{n} goals each", ar: "{n} هدفاً لكل منهم" },
    lMelhor: { pt: "Melhor jogador {s}", fr: "Meilleur joueur {s}", en: "Player of the season {s}", ar: "أفضل لاعب {s}" },
    lConferido: { pt: "Conferido em {d}.", fr: "Vérifié le {d}.", en: "Checked on {d}.", ar: "تم التحقق في {d}." },
    fAtual: { pt: "Atual campeão: {x}", fr: "Tenant du titre : {x}", en: "Current champion: {x}", ar: "حامل اللقب: {x}" },
    fAtualF: { pt: "Atual campeã: {x}", fr: "Tenante du titre : {x}", en: "Current champion: {x}", ar: "حاملة اللقب: {x}" }
  });

  const AND = () => L({ pt: " e ", fr: " et ", en: " and ", ar: " و" });
  const sel = (code) => `<span class="sel">${bandeira(code)}${esc(C(code))}</span>`;
  const clube = (nome, code) => `<span class="sel">${bandeira(code)}${esc(nome)}</span>`;
  const th = (k, cls = "") => `<th${cls ? ` class="${cls}"` : ""}>${esc(T(k))}</th>`;
  const thAbbr = (k, cls = "num") => { const [a, t] = T(k).split("|"); return `<th class="${cls}"><abbr title="${esc(t)}">${esc(a)}</abbr></th>`; };
  const tabela = (cab, linhas, cls = "") => `<div class="table-wrap"><table class="hist ${cls}"><thead><tr>${cab}</tr></thead><tbody>${linhas.join("")}</tbody></table></div>`;
  const fontes = (lista) => `<p class="note src">${esc(T("sources"))}: ${lista.map(([t, href]) => `<a href="${href}">${esc(t)}</a>`).join(", ")}.</p>`;
  const data = (iso) => fmt({ day: "numeric", month: "long", year: "numeric" }).format(new Date(iso + "T12:00:00Z"));
  const placar = (p) => {
    if (p.tu) return `<span class="pl-nota">${esc(T("pTurno"))}</span>`;
    const extras = [p.pr && T("pProrr"), p.pen && T("pPen", { s: p.pen }), p.extra && T("pExtra", { s: p.extra }), p.interrompida && T("pInterr")].filter(Boolean);
    return `<b>${esc(p.p)}</b>${p.nota ? "*" : ""}${extras.length ? ` <span class="pl-nota">${esc(extras.join(", "))}</span>` : ""}`;
  };
  const anosDe = (finais, code) => finais.filter((f) => f[2] === code).map((f) => f[0]);

  /* ---------- eliminatórias da CAN 2027 ---------- */
  /* quem está, hoje, na zona de classificação: os dois primeiros; num grupo com sede, a sede e o melhor dos outros */
  const zona = (linhas, sedes) => {
    const sede = linhas.find((r) => sedes.includes(r[0]));
    return sede ? [sede[0], linhas.find((r) => r !== sede)[0]] : linhas.slice(0, 2).map((r) => r[0]);
  };
  function qualHtml() {
    const q = H.canq;
    return `<section class="section cat-can" id="eliminatorias" aria-labelledby="h-qual">${sectionHead(T("hQual"), "tabelas", T("allTables"), "h-qual")}
      <p class="note">${esc(T("hQualAte", { d: data(q.ate) }))} ${esc(T("hQualRegra"))}</p>
      <div class="qual-grid">${q.grupos.map(([g, linhas]) => { const vai = zona(linhas, q.sedes); return `<div class="qual-g"><h3 class="camp-grupo">${esc(T("group"))} ${esc(g)}</h3>
        ${tabela(`<th class="num">#</th>${th("thSelecao")}${thAbbr("thP")}${thAbbr("thW")}${thAbbr("thD")}${thAbbr("thL")}${thAbbr("thGD")}${thAbbr("thPts")}`,
          linhas.map((r, i) => `<tr${vai.includes(r[0]) ? ' class="zona"' : ""}><td class="num">${i + 1}</td><td>${sel(r[0])}${q.sedes.includes(r[0]) ? ` <span class="host">${esc(T("hSede"))}</span>` : ""}</td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num">${r[5] > 0 ? "+" + r[5] : r[5]}</td><td class="num"><b>${r[6]}</b></td></tr>`), "compacta")}</div>`; }).join("")}</div>
      ${fontes(q.fontes)}</section>`;
  }
  /* versão curta, para a página Tabelas: cada grupo com os pontos */
  function qualCards() {
    const q = H.canq;
    return `<div class="groups gtab">${q.grupos.map(([g, linhas]) => `<div class="group"><h3>${esc(T("group"))} ${esc(g)}</h3><ol>${
      linhas.map((r, i) => `<li><span class="pos">${i + 1}</span><span class="tm">${bandeira(r[0])}${esc(C(r[0]))}</span><span class="pj">${r[1]} ${esc(T("jShort"))}</span><span class="pt"><b>${r[6]}</b></span></li>`).join("")}</ol></div>`).join("")}</div>
      <p class="note">${esc(T("hQualAte", { d: data(q.ate) }))} <a href="${u(CATS.can.route)}#eliminatorias">${esc(T("fullPage"))}</a></p>`;
  }

  /* ---------- CAN ---------- */
  function finaisHtml(finais, notas) {
    return tabela(`${th("thAno", "num")}${th("thSedeT")}${th("thCampeao")}${th("thPlacar")}${th("thVice")}`,
      finais.slice().reverse().map(([ano, sedes, camp, p, vice]) => `<tr><td class="num">${ano}</td><td>${sedes.map((s) => esc(C(s))).join(" / ")}</td><td>${sel(camp)}</td><td>${placar(p)}</td><td>${sel(vice)}</td></tr>`))
      + notas.map((n) => `<p class="note">${esc(L(n))}</p>`).join("");
  }
  function titulosSelHtml(lista, finais, comVices) {
    return tabela(`<th class="num">#</th>${th("thSelecao")}${th("thTitulos", "num")}${comVices ? th("thVices", "num") : ""}${th("thAnos")}`,
      lista.map(([code, n, v], i) => `<tr><td class="num">${i + 1}</td><td>${sel(code)}</td><td class="num"><b>${n}</b></td>${comVices ? `<td class="num">${v}</td>` : ""}<td class="anos">${anosDe(finais, code).join(", ")}</td></tr>`));
  }
  function recordesHtml() {
    const r = H.canRecordes;
    const nomes = (lista) => lista.map(([n, c]) => `${esc(n)} (${esc(C(c))})`).join(esc(AND()));
    return `<ul class="recordes">
      <li><b>${r.artilheiro[2]}</b><span>${T("fArt", { x: `${esc(r.artilheiro[0])} (${esc(C(r.artilheiro[1]))})` })}</span></li>
      <li><b>${r.maisJogos[2]}</b><span>${T("fJogos", { x: nomes(r.maisJogos.slice(0, 2)) })}</span></li>
      <li><b>${r.maisTitulos[2]}</b><span>${T("fTitJog", { x: nomes(r.maisTitulos.slice(0, 2)) })}</span></li></ul>`;
  }
  function canHtml() {
    return `<section class="section cat-can" id="historia" aria-labelledby="h-cantit">${sectionHead(T("hCanTit"), null, null, "h-cantit")}${titulosSelHtml(H.canTitulos, H.canFinais, true)}</section>
      <section class="section cat-can" aria-labelledby="h-canrec">${sectionHead(T("hRecordes"), null, null, "h-canrec")}${recordesHtml()}</section>
      <section class="section cat-can" aria-labelledby="h-canfin">${sectionHead(T("hCanFinais"), null, null, "h-canfin")}${finaisHtml(H.canFinais, [H.canNotas.final2025, H.canNotas.nomes])}${fontes(H.canFontes)}</section>`;
  }

  /* ---------- clubes: Liga dos Campeões e Copa das Confederações ---------- */
  function clubesHtml(titulo, clubes, paises, finais, fonteLista, id) {
    return `<section class="section" id="historia" aria-labelledby="h-${id}">${sectionHead(T(titulo), null, null, "h-" + id)}
      ${tabela(`<th class="num">#</th>${th("thClub")}${th("thTitulos", "num")}${th("thAnos")}`,
        clubes.map(([nome, code, n, anos], i) => `<tr><td class="num">${i + 1}</td><td>${clube(nome, code)}</td><td class="num"><b>${n}</b></td><td class="anos">${anos.join(", ")}</td></tr>`))}</section>
      <div class="hist-duo">
      <section class="section" aria-labelledby="h-${id}p">${sectionHead(T("hPaises"), null, null, `h-${id}p`)}
        ${tabela(`${th("thPais")}${th("thTitulos", "num")}`, paises.map(([code, n]) => `<tr><td>${sel(code)}</td><td class="num"><b>${n}</b></td></tr>`))}</section>
      <section class="section" aria-labelledby="h-${id}f">${sectionHead(T("hFinais"), null, null, `h-${id}f`)}
        ${tabela(`${th("thTemporada", "num")}${th("thCampeao")}${th("thVice")}`, finais.map(([ano, c, cp, v, vp]) => `<tr><td class="num">${ano}</td><td>${clube(c, cp)}</td><td>${clube(v, vp)}</td></tr>`))}</section>
      </div>${fontes(fonteLista)}`;
  }
  const clHtml = () => clubesHtml("hClTit", H.clClubes, H.clPaises, H.clFinais, H.clFontes, "cltit");
  const ccHtml = () => clubesHtml("hCcTit", H.ccClubes, H.ccPaises, H.ccFinais, H.ccFontes, "cctit");

  /* ---------- prêmios ---------- */
  function potyHtml(lista, fem) {
    return tabela(`${th("thAno", "num")}${th(fem ? "thJogadora" : "thJogador")}${th("thSelecao")}${fem ? "" : th("thClub")}`,
      lista.map(([ano, nome, code, cl]) => `<tr><td class="num">${ano}</td><td><b>${esc(nome)}</b></td><td>${sel(code)}</td>${fem ? "" : `<td>${esc(cl)}</td>`}</tr>`))
      + `<p class="note">${esc(T(fem ? "potyNotaF" : "potyNotaM"))}</p>`;
  }
  function selHtml() {
    return `<section class="section cat-sel" id="historia" aria-labelledby="h-seltit">${sectionHead(T("hCanTit"), CATS.can.route, L(CATS.can.name), "h-seltit")}${titulosSelHtml(H.canTitulos, H.canFinais, true)}</section>
      <section class="section cat-sel" aria-labelledby="h-selrec">${sectionHead(T("hRecordes"), null, null, "h-selrec")}${recordesHtml()}</section>
      <section class="section cat-sel" aria-labelledby="h-poty">${sectionHead(T("hPotyM"), null, null, "h-poty")}${potyHtml(H.potyM, false)}${fontes([...H.canFontes.slice(0, 2), H.potyFontes[0]])}</section>`;
  }
  function femHtml() {
    return `<section class="section" id="historia" aria-labelledby="h-histfem">${sectionHead(T("hHistFem"), null, null, "h-histfem")}
      <h3 class="camp-grupo">${esc(T("hCanfTit"))}</h3>${titulosSelHtml(H.canfTitulos, H.canfFinais, false)}<p class="note">${esc(L(H.canfNota))}</p>
      <h3 class="camp-grupo">${esc(T("hCanf"))}</h3>${finaisHtml(H.canfFinais, [])}
      <h3 class="camp-grupo">${esc(T("hClf"))}</h3>${tabela(`${th("thTemporada", "num")}${th("thCampeao")}${th("thPlacar")}${th("thVice")}`,
        H.clfFinais.map(([ano, c, cp, p, v, vp]) => `<tr><td class="num">${ano}</td><td>${clube(c, cp)}</td><td><b>${esc(p)}</b></td><td>${clube(v, vp)}</td></tr>`))}
      <h3 class="camp-grupo">${esc(T("hPotyF"))}</h3>${potyHtml(H.potyF, true)}
      ${fontes([...H.canfFontes, ...H.clfFontes, H.potyFontes[1]])}</section>`;
  }

  /* ---------- coluna lateral "Em números" ---------- */
  const item = (n, texto, href) => `<li>${href ? `<a href="${href}">` : ""}<b>${esc(n)}</b><span>${texto}</span>${href ? "</a>" : ""}</li>`;
  const ex = (s) => esc(s);
  const ITENS = {
    can: () => item(7, T("fCan", { x: ex(C("EGY")) }), u(CATS.can.route) + "#historia"),
    cl: () => item(12, T("fCl", { x: "Al Ahly" }), u(CATS.cl.route) + "#historia"),
    clPais: () => item(19, T("fClPais", { x: ex(C("EGY")) }), null),
    cc: () => item(3, T("fCc", { x: `RS Berkane${ex(AND())}CS Sfaxien` }), u(CATS.cc.route) + "#historia"),
    ccPais: () => item(8, T("fCcPais", { x: ex(C("MAR")) }), null),
    canf: () => item(10, T("fCanf", { x: ex(C("NGA")) }), u(CATS.fem.route) + "#historia"),
    clf: () => item(2, T("fClf", { x: `AS FAR${ex(AND())}Mamelodi Sundowns` }), u(CATS.fem.route) + "#historia"),
    potyM: () => item(4, T("fPotyM", { x: `Samuel Eto'o${ex(AND())}Yaya Touré` }), u(CATS.sel.route) + "#h-poty"),
    potyF: () => item(6, T("fPotyF", { x: "Asisat Oshoala" }), u(CATS.fem.route) + "#historia"),
    art: () => item(18, T("fArt", { x: "Samuel Eto'o" }), null),
    jogos: () => item(36, T("fJogos", { x: `Rigobert Song${ex(AND())}André Ayew` }), null)
  };
  const ATUAL = {
    can: () => `<p class="atual">${T("fAtual", { x: `${sel("MAR")} (2025)` })}</p>`,
    cl: () => `<p class="atual">${T("fAtual", { x: `${clube("Mamelodi Sundowns", "RSA")} (2026)` })}</p>`,
    cc: () => `<p class="atual">${T("fAtual", { x: `${clube("USM Alger", "ALG")} (2026)` })}</p>`,
    fem: () => `<p class="atual">${T("fAtualF", { x: `${sel("CMR")} (CAN 2026)` })}</p>`
  };
  const LISTAS = {
    geral: ["can", "cl", "cc", "canf", "potyM", "potyF"],
    can: ["can", "art", "jogos"],
    cl: ["cl", "clPais"],
    cc: ["cc", "ccPais"],
    sel: ["can", "potyM", "art"],
    fem: ["canf", "clf", "potyF"]
  };
  /* quadro "Em números" de cada campeonato nacional (dados em conteudo/ligas-historia.js) */
  const LHD = require("./conteudo/ligas-historia.js");
  const LH = LHD.ligas;
  const temLiga = (code) => !!LH[code];
  const linha = (dt, dd) => `<div><dt>${esc(dt)}</dt><dd>${dd}</dd></div>`;
  const lista = (nomes) => nomes.length < 2 ? nomes.join("") : nomes.slice(0, -1).join(", ") + ex(AND()) + nomes[nomes.length - 1];
  function fatosLiga(c, ad) {
    const f = LH[c.code];
    if (!f) return "";
    const rows = [];
    if (f.campeao) rows.push(linha(T("lCampeao"), `<b>${esc(f.campeao[0])}</b> <span>${esc(f.campeao[1])}</span>`));
    if (f.maior) {
      const [clubes, n] = f.maior;
      const qt = n == null ? "" : ` <span>${esc(T(clubes.length > 1 ? "lTitCada" : "lTit", { n }))}</span>`;
      rows.push(linha(T("lMaior"), `<b>${lista(clubes.map(esc))}</b>${qt}`));
    }
    if (f.copa) {
      const [nome, camp, temp, vice] = f.copa;
      rows.push(linha(nome || T("lCopa"), `<b>${esc(camp)}</b> <span>${esc(temp)}${vice ? ", " + esc(T("lVice", { x: vice })) : ""}</span>`));
    }
    if (f.art) {
      const [temp, ...js] = f.art;
      const nomes = js.map(([j, cl]) => `<b>${esc(j)}</b> (${esc(cl)})`);
      const gols = js.length > 1 ? T("lGolsCada", { n: js[0][2] }) : T("lGols", { n: js[0][2] });
      rows.push(linha(T("lArt", { s: temp }), `${lista(nomes)} <span>${esc(gols)}</span>`));
    }
    if (f.melhor) rows.push(linha(T("lMelhor", { s: f.melhor[0] }), `<b>${esc(f.melhor[1])}</b> (${esc(f.melhor[2])})`));
    return `<aside class="sidebar"><section class="panel fatos liga" aria-labelledby="fatos-h"><h2 id="fatos-h">${esc(T("fTitulo"))}</h2>
      <p class="liga-nome">${bandeira(c.code)}${esc(c.liga)}</p><dl>${rows.join("")}</dl>
      ${f.nota ? `<p class="note">${esc(L(f.nota))}</p>` : ""}${fontes(f.fontes)}<p class="note">${esc(T("lConferido", { d: data(LHD.conferido) }))}</p></section>${ad || ""}</aside>`;
  }

  function fatos(k, ad) {
    const lista = LISTAS[k] || LISTAS.geral;
    return `<aside class="sidebar"><section class="panel fatos" aria-labelledby="fatos-h"><h2 id="fatos-h">${esc(T("fTitulo"))}</h2>
      ${ATUAL[k] ? ATUAL[k]() : ""}<ul>${lista.map((x) => ITENS[x]()).join("")}</ul></section>${ad || ""}</aside>`;
  }

  return { qualHtml, qualCards, canHtml, clHtml, ccHtml, selHtml, femHtml, fatos, fatosLiga, temLiga };
};
