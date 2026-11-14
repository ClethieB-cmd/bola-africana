/* Países: a janela "Países" do cabeçalho e a página de cada país (pais/<slug>.html).
   O caminho é o mesmo nas duas: o visitante escolhe o país, depois masculino ou feminino, depois o esporte.
   Só aparece o esporte que tem conteúdo de verdade para aquele país e gênero. Usado pelo build.js.
   Para ligar uma notícia a um país, use o campo paises: ["ANG", "MAR"] em conteudo/noticias.js ("LES/masc" liga só no masculino);
   sem esse campo, o país é achado pelo nome no título e na linha fina em português. */
"use strict";

module.exports = function (h) {
  const { D, CAMP, NEWS, sorted, ESP, TM, HI, EX, CATS, AUTO, ISO2, esc, L, T, C, u, bandeira, storyCard, agendaList, tzHint, fmt, LOCALE, getLang } = h;
  const U = HI.util;
  const H = U.H;

  Object.assign(D.UI, {
    pTitle: { pt: "{pais}: seleção, campeonato e clubes", fr: "{pais} : sélection, championnat et clubs", en: "{pais}: national team, league and clubs", ar: "{pais}: المنتخب والدوري والأندية" },
    pDesc: {
      pt: "O esporte {de}: a seleção nas eliminatórias da CAN, o campeonato nacional, os clubes e os títulos, no masculino e no feminino.",
      fr: "Le sport {de} : la sélection en éliminatoires de la CAN, le championnat national, les clubs et le palmarès, chez les hommes et chez les femmes.",
      en: "{pais} in African sport: the national team in AFCON qualifying, the national league, the clubs and the honours, men's and women's.",
      ar: "{pais} في الرياضة الأفريقية: المنتخب في تصفيات كأس الأمم الأفريقية والدوري المحلي والأندية والألقاب، للرجال والسيدات."
    },
    pRegiao: { pt: "Região {r} da CAF", fr: "Zone {r} de la CAF", en: "CAF {r} zone", ar: "منطقة {r} في الكاف" },
    pRegioes: { pt: "Regiões da CAF", fr: "Zones de la CAF", en: "CAF zones", ar: "مناطق الكاف" },
    pAbrir: { pt: "Escolher país", fr: "Choisir un pays", en: "Choose a country", ar: "اختر دولة" },
    pEscolhaPais: { pt: "Escolha o país", fr: "Choisissez le pays", en: "Pick a country", ar: "اختر الدولة" },
    pEscolhaGen: { pt: "Escolha masculino ou feminino", fr: "Choisissez masculin ou féminin", en: "Choose men's or women's", ar: "اختر الرجال أو السيدات" },
    pPagina: { pt: "Página do país", fr: "Page du pays", en: "Country page", ar: "صفحة الدولة" },
    pLigaPais: { pt: "{pais}: página do país", fr: "{pais} : page du pays", en: "{pais}: country page", ar: "{pais}: صفحة الدولة" },
    pFechar: { pt: "Fechar", fr: "Fermer", en: "Close", ar: "إغلاق" },
    pVazioF: { pt: "Ainda não temos dados do esporte feminino {de}.", fr: "Nous n'avons pas encore de données sur le sport féminin {de}.", en: "We don't have data on {pais} women's sport yet.", ar: "لا تتوفر لدينا بعد بيانات عن الرياضة النسائية في {pais}." },
    pVazioM: { pt: "Ainda não temos dados do esporte masculino {de}.", fr: "Nous n'avons pas encore de données sur le sport masculin {de}.", en: "We don't have data on {pais} men's sport yet.", ar: "لا تتوفر لدينا بعد بيانات عن الرياضة الرجالية في {pais}." },
    pVazioMais: { pt: "Assim que houver competição, resultado ou notícia, ela aparece aqui.", fr: "Dès qu'il y aura une compétition, un résultat ou un article, il apparaîtra ici.", en: "As soon as there is a competition, a result or a story, it will appear here.", ar: "ستظهر هنا أي مسابقة أو نتيجة أو خبر فور توفره." },
    pSel: { pt: "Seleção", fr: "Sélection", en: "National team", ar: "المنتخب" },
    pQual: { pt: "Eliminatórias da CAN 2027, grupo {g}", fr: "Éliminatoires de la CAN 2027, groupe {g}", en: "AFCON 2027 qualifiers, group {g}", ar: "تصفيات كأس أمم أفريقيا 2027، المجموعة {g}" },
    pTodosGrupos: { pt: "Todos os grupos", fr: "Tous les groupes", en: "All groups", ar: "كل المجموعات" },
    pJogos: { pt: "Jogos da seleção", fr: "Matchs de la sélection", en: "National team games", ar: "مباريات المنتخب" },
    pCan: { pt: "Copa Africana de Nações", fr: "Coupe d'Afrique des nations", en: "Africa Cup of Nations", ar: "كأس أمم أفريقيا" },
    pCanf: { pt: "CAN Feminina", fr: "CAN féminine", en: "Women's AFCON", ar: "كأس أمم أفريقيا للسيدات" },
    pTitulos: { pt: "Títulos", fr: "Titres", en: "Titles", ar: "الألقاب" },
    pFinais: { pt: "Finais perdidas", fr: "Finales perdues", en: "Lost finals", ar: "النهائيات الخاسرة" },
    pLiga: { pt: "Campeonato nacional", fr: "Championnat national", en: "National league", ar: "الدوري المحلي" },
    pVerLiga: { pt: "Tabela, resultados e artilharia do campeonato", fr: "Classement, résultats et buteurs du championnat", en: "League table, results and top scorers", ar: "ترتيب الدوري ونتائجه وهدافوه" },
    pClubes: { pt: "Clubes", fr: "Clubs", en: "Clubs", ar: "الأندية" },
    pClubesNota: { pt: "Clubes do campeonato na temporada {s}. Cada um tem página própria.", fr: "Clubs du championnat lors de la saison {s}. Chacun a sa propre page.", en: "Clubs in the league in the {s} season. Each has its own page.", ar: "أندية الدوري في موسم {s}، ولكل نادٍ صفحته." },
    pCaf: { pt: "Títulos dos clubes na CAF", fr: "Titres des clubs à la CAF", en: "Club titles in CAF competitions", ar: "ألقاب الأندية في مسابقات الكاف" },
    pCampAnos: { pt: "campeão em {a}", fr: "vainqueur en {a}", en: "won in {a}", ar: "البطل في {a}" },
    pViceAnos: { pt: "final perdida em {a}", fr: "finale perdue en {a}", en: "lost the final in {a}", ar: "خسر النهائي في {a}" },
    pComps: { pt: "Competições", fr: "Compétitions", en: "Competitions", ar: "المسابقات" },
    pNac: { pt: "Competição nacional", fr: "Compétition nationale", en: "National competition", ar: "مسابقة محلية" },
    pRes: { pt: "Últimos resultados", fr: "Derniers résultats", en: "Latest results", ar: "آخر النتائج" },
    pApi: { pt: "Dados: API-Sports.", fr: "Données : API-Sports.", en: "Data: API-Sports.", ar: "البيانات: API-Sports." },
    pNews: { pt: "Notícias", fr: "Actualité", en: "News", ar: "الأخبار" },
    pFutFem: { pt: "Futebol feminino", fr: "Football féminin", en: "Women's football", ar: "كرة القدم النسائية" },
    /* cabeçalho */
    mMenu: { pt: "Menu", fr: "Menu", en: "Menu", ar: "القائمة" },
    mFechar: { pt: "Fechar o menu", fr: "Fermer le menu", en: "Close menu", ar: "إغلاق القائمة" },
    mBuscar: { pt: "Buscar", fr: "Rechercher", en: "Search", ar: "بحث" },
    pBusca: { pt: "país pays country seleção sélection national team", fr: "pays country país sélection seleção national team", en: "country pays país national team sélection seleção", ar: "دولة منتخب country pays país" }
  });

  const GEN = { masculino: "gMasc", feminino: "gFem" };
  const G_API = { masculino: "masc", feminino: "fem" };
  const porCode = Object.fromEntries(CAMP.map((c) => [c.code, c]));
  const regiaoDe = Object.fromEntries(EX.REGIOES.flatMap(([id, nome, uniao, codes]) => codes.map((code) => [code, { id, nome, uniao }])));
  const pagina = (c) => "pais/" + c.slug;
  const linkPais = (c) => u(pagina(c));
  const nomeEsp = (id) => (id === "futebol" ? T("gFut") : L(ESP.ESPORTES.find((e) => e.id === id).nome));

  /* ---------- notícias de cada país ---------- */
  const plano = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ");
  const NOMES = CAMP.flatMap((c) => [c.nome.pt, c.nome.fr, c.nome.en].map((n) => [plano(n).trim(), c.code]))
    .concat([["rdc", "COD"], ["costa do marfim", "CIV"], ["cote d ivoire", "CIV"]])
    .filter(([n], i, a) => n && a.findIndex(([m]) => m === n) === i)
    .sort((a, b) => b[0].length - a[0].length);
  const cachePaises = new Map();
  function paisesDe(n) {
    if (Array.isArray(n.paises)) return n.paises;
    if (cachePaises.has(n)) return cachePaises.get(n);
    let txt = " " + plano([n.title && n.title.pt, n.lead && n.lead.pt].join(" ")) + " ";
    const achados = [];
    for (const [nome, code] of NOMES) {
      const alvo = " " + nome + " ";
      if (txt.includes(alvo)) { if (!achados.includes(code)) achados.push(code); txt = txt.split(alvo).join("  "); }
    }
    cachePaises.set(n, achados);
    return achados;
  }
  /* na página do país, a matéria é feminina só se for da seção Feminino (ou tiver genero: "fem"); uma matéria de prêmios
     com a tag fem, por exemplo, fala dos dois gêneros e fica no masculino */
  const generoDe = (n, g) => n.genero === "misto" || (n.genero || (n.cat === "fem" ? "fem" : "masc")) === g;
  /* "LES/masc" em paises liga a notícia ao país só naquele gênero (numa maratona com as duas provas, por exemplo) */
  const ligada = (n, code, g) => paisesDe(n).some((x) => { const [c, so] = x.split("/"); return c === code && (!so || so === g); }) && generoDe(n, g);
  const noticias = (code, g, esp) => sorted.filter((n) => ligada(n, code, G_API[g]) && ESP.esporteDe(n) === esp);

  /* ---------- dados de cada país (sem HTML, iguais em todos os idiomas) ---------- */
  const anos = (finais, code, pos) => finais.filter((f) => f[pos] === code).map((f) => f[0]);
  function futM(code) {
    const grupo = H.canq.grupos.find(([, linhas]) => linhas.some((r) => r[0] === code)) || null;
    const jogos = D.FIXTURES.filter((f) => !f.club && (f.home === code || f.away === code)).sort((a, b) => a.at.localeCompare(b.at));
    const can = { tit: anos(H.canFinais, code, 2), vice: anos(H.canFinais, code, 4), nota: H.canFinais.some((f) => f[3].nota && (f[2] === code || f[4] === code)) };
    const poty = H.potyM.filter((p) => p[2] === code);
    const cl = H.clClubes.filter((r) => r[1] === code), cc = H.ccClubes.filter((r) => r[1] === code);
    return { grupo, jogos, can, poty, cl, cc, news: noticias(code, "masculino", "futebol") };
  }
  function futF(code) {
    const can = { tit: anos(H.canfFinais, code, 2), vice: anos(H.canfFinais, code, 4) };
    const poty = H.potyF.filter((p) => p[2] === code);
    const clubes = [];
    for (const [ano, camp, cp, , vice, vp] of H.clfFinais) {
      for (const [nome, pais, ganhou] of [[camp, cp, true], [vice, vp, false]]) {
        if (pais !== code) continue;
        let x = clubes.find((k) => k.nome === nome);
        if (!x) clubes.push((x = { nome, tit: [], vice: [] }));
        (ganhou ? x.tit : x.vice).push(ano);
      }
    }
    const news = noticias(code, "feminino", "futebol");
    const tem = can.tit.length || can.vice.length || poty.length || clubes.length || news.length;
    return tem ? { can, poty, clubes, news } : null;
  }
  /* outros esportes: competição nacional do país ou competição africana em que a seleção do país jogou */
  function equipes(cmp) {
    const nomes = [];
    for (const g of cmp.tabela || []) for (const r of g.linhas) nomes.push(r[1]);
    for (const r of cmp.resultados || []) nomes.push(r.c, r.f);
    return new Set(nomes.map(ESP.selCode).filter(Boolean));
  }
  function outro(code, e, g) {
    const cs = ESP.comps(e).filter((cmp) => ESP.generoComp(cmp.nome) === G_API[g]);
    const nac = cs.filter((cmp) => cmp.pais === code);
    const afr = cs.filter((cmp) => cmp.pais === "AFR" && equipes(cmp).has(code));
    const res = afr.flatMap((cmp) => (cmp.resultados || []).filter((r) => ESP.selCode(r.c) === code || ESP.selCode(r.f) === code).map((r) => ({ ...r, cmp })))
      .sort((a, b) => b.d.localeCompare(a.d));
    const news = ESP.newsDe(e).filter((n) => ligada(n, code, G_API[g]));
    return nac.length || afr.length || news.length ? { nac, afr, res, news } : null;
  }
  /* quais esportes cada país tem, por gênero (futebol masculino sempre: as 54 federações têm campeonato e seleção) */
  const cacheIds = {};
  function esportesDe(code) {
    if (cacheIds[code]) return cacheIds[code];
    const r = { masculino: ["futebol"], feminino: futF(code) ? ["futebol"] : [] };
    for (const g of ["masculino", "feminino"]) for (const e of ESP.ESPORTES) if (outro(code, e, g)) r[g].push(e.id);
    return (cacheIds[code] = r);
  }

  /* ---------- blocos da página ---------- */
  const bloco = (titulo, corpo, extra = "") => (corpo ? { html: `<h3>${esc(titulo)}</h3>${corpo}`, larga: !!extra } : null);
  /* blocos lado a lado, dois por linha; o que sobrar sem par ocupa a linha inteira */
  function blocos(lista) {
    const b = lista.filter(Boolean), estreitos = b.filter((x) => !x.larga);
    if (estreitos.length % 2) estreitos[estreitos.length - 1].larga = true;
    return b.map((x) => `<section class="pb${x.larga ? " pb-larga" : ""}">${x.html}</section>`).join("");
  }
  const dl = (rows) => (rows.length ? `<dl class="pb-dl">${rows.map(([dt, dd]) => `<div><dt>${esc(dt)}</dt><dd>${dd}</dd></div>`).join("")}</dl>` : "");
  const qt = (lista) => `<b>${lista.length}</b> <span>${esc(lista.join(", "))}</span>`;
  const mais = (href, texto) => `<a class="pb-mais" href="${href}">${esc(texto)} ›</a>`;
  const listaNomes = (nomes) => nomes.join(", ");
  const dataCurta = (iso) => fmt({ day: "numeric", month: "short", year: "numeric" }).format(new Date(iso));
  const newsHtml = (lista) => (lista.length ? `<div class="grid-stories">${lista.slice(0, 6).map(storyCard).join("")}</div>` : "");

  function qualHtml(code, grupo) {
    const q = H.canq, [g, linhas] = grupo, vai = U.zona(linhas, q.sedes);
    const cab = `<th class="num">#</th>${U.th("thSelecao")}${U.thAbbr("thP")}${U.thAbbr("thW")}${U.thAbbr("thD")}${U.thAbbr("thL")}${U.thAbbr("thGD")}${U.thAbbr("thPts")}`;
    const rows = linhas.map((r, i) => {
      const cls = [vai.includes(r[0]) && "zona", r[0] === code && "eu"].filter(Boolean).join(" ");
      return `<tr${cls ? ` class="${cls}"` : ""}><td class="num">${i + 1}</td><td>${U.sel(r[0])}${q.sedes.includes(r[0]) ? ` <span class="host">${esc(T("hSede"))}</span>` : ""}</td><td class="num">${r[1]}</td><td class="num">${r[2]}</td><td class="num">${r[3]}</td><td class="num">${r[4]}</td><td class="num">${r[5] > 0 ? "+" + r[5] : r[5]}</td><td class="num"><b>${r[6]}</b></td></tr>`;
    });
    return `<h4>${esc(T("pQual", { g }))}</h4>${U.tabela(cab, rows, "compacta")}
      <p class="note">${esc(T("hQualAte", { d: U.data(q.ate) }))} ${esc(T("hQualRegra"))}</p>${mais(u(CATS.can.route) + "#eliminatorias", T("pTodosGrupos"))}`;
  }
  function tituloSel(nomeComp, can, nota) {
    const rows = [];
    if (can.tit.length) rows.push([T("pTitulos"), qt(can.tit)]);
    if (can.vice.length) rows.push([T("pFinais"), qt(can.vice)]);
    return rows.length ? `<h4>${esc(nomeComp)}</h4>${dl(rows)}${nota ? `<p class="note">${esc(L(nota))}</p>` : ""}` : "";
  }
  function potyHtml(chave, lista) {
    if (!lista.length) return "";
    const por = [];
    for (const [ano, nome] of [...lista].sort((a, b) => a[0] - b[0])) {
      let x = por.find((k) => k.nome === nome);
      if (!x) por.push((x = { nome, anos: [] }));
      x.anos.push(ano);
    }
    por.sort((a, b) => b.anos.length - a.anos.length || b.anos[b.anos.length - 1] - a.anos[a.anos.length - 1]);
    return `<h4>${esc(T(chave))}</h4><ul class="pb-tit">${por.map((k) => `<li><b>${k.anos.length}</b> <span class="n">${esc(k.nome)}</span> <span>${esc(k.anos.join(", "))}</span></li>`).join("")}</ul>`;
  }

  function secFutM(c) {
    const d = futM(c.code);
    const fontesSel = [...(d.grupo ? H.canq.fontes : []), ...(d.can.tit.length || d.can.vice.length ? H.canFontes : []), ...(d.poty.length ? [H.potyFontes[0]] : [])];
    const ladoA = d.grupo ? qualHtml(c.code, d.grupo) : "";
    const ladoB = [
      d.jogos.length ? `<h4>${esc(T("pJogos"))}</h4>${tzHint()}<div class="panel">${agendaList(0, d.jogos)}</div>` : "",
      tituloSel(T("pCan"), d.can, d.can.nota ? H.canNotas.final2025 : null),
      potyHtml("hPotyM", d.poty)
    ].join("");
    const sel = (ladoA && ladoB ? `<div class="pb-cols"><div>${ladoA}</div><div>${ladoB}</div></div>` : ladoA + ladoB) + (fontesSel.length ? U.fontes(fontesSel) : "");
    const liga = `<p class="pb-liga">${bandeira(c.code)}<b>${esc(c.liga)}</b></p>${HI.linhasLiga(c)}${mais(u("campeonatos/" + c.slug), T("pVerLiga"))}`;
    const times = TM.lista(c);
    const a = (AUTO.ligas || {})[c.code];
    const clubes = times.length ? `<ul class="pb-chips">${times.map((t) => `<li><a href="${t.href}">${esc(t.nome)}</a></li>`).join("")}</ul>${a && a.temporada ? `<p class="note">${esc(T("pClubesNota", { s: a.temporada }))}</p>` : ""}` : "";
    const caf = [[ESP.NOMES_FUT.cl, d.cl], [ESP.NOMES_FUT.cc, d.cc]].filter(([, l]) => l.length)
      .map(([nome, l]) => `<h4>${esc(L(nome))}</h4><ul class="pb-tit">${l.map(([cl, , n, as]) => `<li><b>${n}</b> <span class="n">${esc(cl)}</span> <span>${esc(as.join(", "))}</span></li>`).join("")}</ul>`).join("");
    return blocos([
      bloco(T("pSel"), sel, " pb-larga"),
      bloco(T("pLiga"), liga),
      bloco(T("pCaf"), caf ? caf + U.fontes([...(d.cl.length ? H.clFontes : []), ...(d.cc.length ? H.ccFontes : [])]) : ""),
      bloco(T("pClubes"), clubes),
      bloco(T("pNews"), newsHtml(d.news), " pb-larga")
    ]);
  }
  function secFutF(c) {
    const d = futF(c.code);
    const sel = tituloSel(T("pCanf"), d.can, d.can.tit.length && c.code === H.canfTitulos[0][0] ? H.canfNota : null) + potyHtml("hPotyF", d.poty);
    const clubes = d.clubes.length ? `<h4>${esc(L(ESP.NOMES_FUT.clf))}</h4><ul class="pb-tit">${d.clubes.map((k) => `<li><span class="n">${esc(k.nome)}</span> <span>${esc([k.tit.length && T("pCampAnos", { a: k.tit.join(", ") }), k.vice.length && T("pViceAnos", { a: k.vice.join(", ") })].filter(Boolean).join("; "))}</span></li>`).join("")}</ul>${U.fontes(H.clfFontes)}` : "";
    const fontesSel = [...(d.can.tit.length || d.can.vice.length ? H.canfFontes : []), ...(d.poty.length ? [H.potyFontes[1]] : [])];
    return blocos([
      bloco(T("pSel"), sel ? sel + U.fontes(fontesSel) : ""),
      bloco(T("pCaf"), clubes),
      bloco(T("pNews"), newsHtml(d.news), " pb-larga")
    ]) + `<p class="pb-rodape">${mais(u(CATS.fem.route) + "#historia", T("hHistFem"))}</p>`;
  }
  function secOutro(c, e, g) {
    const d = outro(c.code, e, g);
    const cartao = (cmp, tipo) => `<a class="comp-card" href="${ESP.compUrl(e, cmp)}"><span class="k">${esc(tipo)}</span><b>${esc(cmp.nome)}</b><span class="s">${esc(cmp.temporada || "")}</span></a>`;
    const comps = [...d.nac.map((cmp) => cartao(cmp, T("pNac"))), ...d.afr.map((cmp) => cartao(cmp, T("gAfr")))];
    const time = (n) => { const k = ESP.selCode(n); return `<span class="tm${k === c.code ? " eu" : ""}">${k ? `${bandeira(k)}${esc(C(k))}` : esc(n)}</span>`; };
    const res = d.res.slice(0, 8).map((r) => `<li><span class="d">${esc(dataCurta(r.d))} · ${esc(r.cmp.nome)}</span><span class="j">${time(r.c)} <b>${r.gc ?? ""}–${r.gf ?? ""}</b> ${time(r.f)}</span></li>`).join("");
    return blocos([
      bloco(T("pComps"), comps.length ? `<div class="comp-grid">${comps.join("")}</div>` : "", " pb-larga"),
      bloco(T("pRes"), res ? `<ul class="pb-res">${res}</ul><p class="note">${esc(T("pApi"))}</p>` : "", " pb-larga"),
      bloco(T("pNews"), newsHtml(d.news), " pb-larga")
    ]);
  }

  /* ---------- página do país ---------- */
  const imgGrande = (code) => (ISO2[code] ? `<img class="pais-bandeira" src="https://flagcdn.com/w160/${ISO2[code]}.png" srcset="https://flagcdn.com/w320/${ISO2[code]}.png 2x" width="96" height="64" alt="">` : "");
  function paginaPais(c) {
    const ids = esportesDe(c.code), reg = regiaoDe[c.code];
    const vars = { pais: L(c.nome), de: L(c.de) };
    const alvo = (g) => (ids[g].length ? `${g}-${ids[g][0]}` : `${g}-vazio`);
    const secoes = [];
    for (const g of ["masculino", "feminino"]) {
      if (!ids[g].length) {
        secoes.push(`<section class="pais-sec pais-vazio" id="${g}-vazio" data-g="${g}" aria-labelledby="h-${g}-vazio"><h2 id="h-${g}-vazio">${esc(T(GEN[g]))}</h2>
          <p>${esc(T(g === "feminino" ? "pVazioF" : "pVazioM", vars))} ${esc(T("pVazioMais"))}</p>${g === "feminino" ? mais(u(CATS.fem.route), T("gAllF")) : ""}</section>`);
        continue;
      }
      for (const id of ids[g]) {
        const corpo = id === "futebol" ? (g === "masculino" ? secFutM(c) : secFutF(c)) : secOutro(c, ESP.ESPORTES.find((e) => e.id === id), g);
        secoes.push(`<section class="pais-sec cor-${id}" id="${g}-${id}" data-g="${g}" aria-labelledby="h-${g}-${id}">
          <h2 id="h-${g}-${id}" class="pais-sec-h"><span class="cover esp sp-${id}" aria-hidden="true"></span>${esc(nomeEsp(id))} <small>${esc(T(GEN[g]))}</small></h2>
          <div class="pais-blocos">${corpo}</div></section>`);
      }
    }
    const abas = ["masculino", "feminino"].map((g) => `<a class="pg-g" data-g="${g}" href="#${alvo(g)}">${esc(T(GEN[g]))}</a>`).join("");
    const chips = ["masculino", "feminino"].flatMap((g) => ids[g].map((id) => `<a class="pg-e" data-g="${g}" href="#${g}-${id}"><span class="cover esp sp-${id}" aria-hidden="true"></span>${esc(nomeEsp(id))}</a>`)).join("");
    return `<div class="pais-pg" data-pais-pg>
      <a class="back" href="${u("paises")}">‹ ${esc(T("paisesTitle"))}</a>
      <div class="pais-head">${imgGrande(c.code)}<div><h1>${esc(L(c.nome))}</h1><p>${esc(T("pRegiao", { r: L(reg.nome) }))} · ${esc(reg.uniao)}</p></div></div>
      <nav class="pg-nav" aria-label="${esc(L(c.nome))}"><div class="pg-gen">${abas}</div><div class="pg-esps">${chips}</div></nav>
      ${secoes.join("")}
    </div>`;
  }

  /* ---------- janela "Países" do cabeçalho: regiões em abas, depois gênero, depois esporte ---------- */
  const cacheJanela = {};
  function janela() {
    const chave = getLang() + u("index");
    if (cacheJanela[chave]) return cacheJanela[chave];
    const ordenar = (codes) => [...codes].sort((a, b) => L(porCode[a].nome).localeCompare(L(porCode[b].nome), LOCALE[getLang()]));
    const abas = EX.REGIOES.map(([id, nome], i) => `<button type="button" role="tab" id="ppt-${id}" aria-controls="ppr-${id}" aria-selected="${i === 0}"${i ? ' tabindex="-1"' : ""}>${esc(L(nome))}</button>`).join("");
    const grades = EX.REGIOES.map(([id, , uniao, codes], i) => `<div class="pp-grid" role="tabpanel" id="ppr-${id}" aria-labelledby="ppt-${id}" data-uniao="${esc(uniao)}"${i ? " hidden" : ""}>${ordenar(codes).map((code) => {
      const c = porCode[code], ids = esportesDe(code);
      return `<a href="${linkPais(c)}" data-m="${ids.masculino.join(" ")}" data-f="${ids.feminino.join(" ")}" data-de="${esc(L(c.de))}">${bandeira(code)}<span>${esc(L(c.nome))}</span></a>`;
    }).join("")}</div>`).join("");
    const todos = ["futebol", ...ESP.ESPORTES.map((e) => e.id).filter((id) => CAMP.some((c) => { const x = esportesDe(c.code); return x.masculino.includes(id) || x.feminino.includes(id); }))];
    const esportes = todos.map((id) => `<li data-esp="${id}" hidden><a href="#" class="esp-tile cor-${id}"><span class="cover esp sp-${id}" aria-hidden="true"></span><span class="nome">${esc(nomeEsp(id))}</span></a></li>`).join("");
    return (cacheJanela[chave] = `<div class="pp" id="pop-paises" hidden data-pp data-vazio-masculino="${esc(L(D.UI.pVazioM))}" data-vazio-feminino="${esc(L(D.UI.pVazioF))}">
      <div class="wrap pp-in">
        <div class="pp-passo" data-passo="1">
          <div class="pp-top"><h2 class="pp-h" tabindex="-1">${esc(T("pEscolhaPais"))}</h2><a class="pp-todos" href="${u("paises")}">${esc(T("paisesAll"))} ›</a></div>
          <div class="pp-tabs" role="tablist" aria-label="${esc(T("pRegioes"))}">${abas}</div>${grades}
        </div>
        <div class="pp-passo" data-passo="2" hidden>
          <button type="button" class="pp-voltar" data-voltar="1">‹ ${esc(T("pEscolhaPais"))}</button>
          <h2 class="pp-h" tabindex="-1"><span data-pp-flag></span><span data-pp-nome></span></h2>
          <p class="pp-p">${esc(T("pEscolhaGen"))}</p>
          <div class="pp-gen"><button type="button" data-g="masculino">${esc(T("gMasc"))}</button><button type="button" data-g="feminino">${esc(T("gFem"))}</button></div>
          <a class="pp-pagina" href="#" data-pp-pagina>${esc(T("pPagina"))} ›</a>
        </div>
        <div class="pp-passo" data-passo="3" hidden>
          <button type="button" class="pp-voltar" data-voltar="2">‹ <span data-pp-nome></span></button>
          <h2 class="pp-h" tabindex="-1"><span data-pp-flag></span><span data-pp-nome></span> <small data-pp-gen></small></h2>
          <p class="pp-p" data-pp-pick>${esc(T("gPick"))}</p>
          <ul class="pp-esp">${esportes}</ul>
          <p class="pp-vazio" data-pp-vazio hidden></p>
          <a class="pp-pagina" href="#" data-pp-pagina>${esc(T("pPagina"))} ›</a>
        </div>
        <button type="button" class="pp-x" data-pp-fechar aria-label="${esc(T("pFechar"))}">×</button>
      </div></div>`);
  }

  function emitir(emit, pages) {
    for (const c of CAMP) {
      pages.push(emit(pagina(c), {
        title: T("pTitle", { pais: L(c.nome) }), desc: T("pDesc", { pais: L(c.nome), de: L(c.de) }),
        body: () => paginaPais(c), active: "paises"
      }));
    }
  }
  function linhasBusca(norm, tag) {
    return CAMP.map((c) => `<a class="row-story camp-row" href="${linkPais(c)}" data-q="${esc(norm([T("pBusca"), ...["pt", "fr", "en"].map((l) => c.nome[l]), L(c.nome)].join(" ")))}">
      <div class="meta">${tag}</div><h3>${esc(T("pTitle", { pais: L(c.nome) }))}</h3></a>`).join("");
  }

  return { janela, emitir, linkPais, linhasBusca, paisesDe, esportesDe };
};
