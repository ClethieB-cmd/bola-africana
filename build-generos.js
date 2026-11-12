/* Páginas Masculino e Feminino: todas as competições de cada gênero, esporte por esporte,
   com agenda, tabelas, onde assistir e notícias. Usado pelo build.js.
   A cor de cada esporte está no style.css (classes cor-futebol, cor-basquete...).
   No Feminino só entram os esportes que já têm competição com dados ou notícia feminina. */
"use strict";

module.exports = function (h) {
  const { D, X, CATS, ESP, sorted, esc, L, T, u, storyCard, agendaList, tzHint, watchHtml } = h;

  Object.assign(D.UI, {
    gMasc: { pt: "Masculino", fr: "Masculin", en: "Men", ar: "الرجال" },
    gFem: { pt: "Feminino", fr: "Féminin", en: "Women", ar: "السيدات" },
    gDescM: { pt: "Todas as competições masculinas do esporte africano, esporte por esporte: futebol, basquete, handebol e mais. Com agenda, tabelas e onde assistir.", fr: "Toutes les compétitions masculines du sport africain, sport par sport : football, basket-ball, handball et plus. Avec le calendrier, les classements et où regarder.", en: "Every men's competition in African sport, sport by sport: football, basketball, handball and more. With fixtures, tables and where to watch.", ar: "كل المسابقات الرجالية في الرياضة الأفريقية، رياضة تلو الأخرى: كرة القدم وكرة السلة وكرة اليد وغيرها. مع المواعيد والجداول وأين تشاهد." },
    gDescF: { pt: "O esporte feminino africano: {lista}. Notícias, agenda, tabelas e onde assistir.", fr: "Le sport féminin africain : {lista}. Actualité, calendrier, classements et où regarder.", en: "African women's sport: {lista}. News, fixtures, tables and where to watch.", ar: "الرياضة النسائية الأفريقية: {lista}. الأخبار والمواعيد والجداول وأين تشاهد." },
    gPick: { pt: "Escolha o esporte", fr: "Choisissez le sport", en: "Pick a sport", ar: "اختر الرياضة" },
    gN1: { pt: "1 competição", fr: "1 compétition", en: "1 competition", ar: "مسابقة واحدة" },
    gNn: { pt: "{n} competições", fr: "{n} compétitions", en: "{n} competitions", ar: "{n} مسابقات" },
    gN2: { pt: "2 competições", fr: "2 compétitions", en: "2 competitions", ar: "مسابقتان" },
    gNews2: { pt: "2 notícias", fr: "2 articles", en: "2 stories", ar: "خبران" },
    gNews1: { pt: "1 notícia", fr: "1 article", en: "1 story", ar: "خبر واحد" },
    gNewsN: { pt: "{n} notícias", fr: "{n} articles", en: "{n} stories", ar: "{n} أخبار" },
    gSoon: { pt: "Notícias e resultados", fr: "Actualité et résultats", en: "News and results", ar: "الأخبار والنتائج" },
    gSeeAll: { pt: "Ver tudo", fr: "Tout voir", en: "See all", ar: "عرض الكل" },
    gFut: { pt: "Futebol", fr: "Football", en: "Football", ar: "كرة القدم" },
    gAfr: { pt: "Competição africana", fr: "Compétition africaine", en: "African competition", ar: "مسابقة أفريقية" },
    gSubCan: { pt: "Eliminatórias, grupos e notícias", fr: "Éliminatoires, groupes et actualité", en: "Qualifiers, groups and news", ar: "التصفيات والمجموعات والأخبار" },
    gSubClubs: { pt: "Clubes, grupos e notícias", fr: "Clubs, groupes et actualité", en: "Clubs, groups and news", ar: "الأندية والمجموعات والأخبار" },
    gSubSel: { pt: "Notícias das seleções", fr: "L'actualité des sélections", en: "National team news", ar: "أخبار المنتخبات" },
    gSubLigas: { pt: "Os 54 campeonatos nacionais", fr: "Les 54 championnats nationaux", en: "All 54 national leagues", ar: "الدوريات الوطنية الـ54" },
    gSubTable: { pt: "Classificação e resultados", fr: "Classement et résultats", en: "Standings and results", ar: "الترتيب والنتائج" },
    gFutM: { pt: "CAN, clubes e 54 ligas", fr: "CAN, clubs et 54 championnats", en: "AFCON, clubs and 54 leagues", ar: "كأس الأمم والأندية و54 دوريًا" },
    gFemNews: { pt: "Notícias do futebol feminino", fr: "Actualité du football féminin", en: "Women's football news", ar: "أخبار كرة القدم النسائية" },
    gLatest: { pt: "Últimas notícias", fr: "Dernières actualités", en: "Latest news", ar: "آخر الأخبار" }
  });

  const generoNoticia = ESP.generoNoticia;
  const generoJogo = (f) => f.genero || (f.cat === "fem" ? "fem" : "masc");
  const contagem = (n, um, varios) => (n === 1 ? T(um) : n === 2 ? T(um.replace("1", "2")) : T(varios, { n }));

  function cartao(href, titulo, sub, tipo) {
    return `<a class="comp-card" href="${href}">${tipo ? `<span class="k">${esc(tipo)}</span>` : ""}<b>${esc(titulo)}</b>${sub ? `<span class="s">${esc(sub)}</span>` : ""}</a>`;
  }
  const tipoComp = (c) => (c.pais === "AFR" ? T("gAfr") : (ESP.paisDe(c.pais) ? L(ESP.paisDe(c.pais).nome) : c.pais));

  /* o que cada gênero tem, esporte por esporte */
  function montar(g) {
    const noticias = sorted.filter((n) => generoNoticia(n) === g);
    const lista = [];

    const futCards = [];
    const futTabelas = [];
    if (g === "masc") {
      futCards.push(cartao(u(CATS.can.route), L(CATS.can.name), T("gSubCan")));
      futCards.push(cartao(u(CATS.cl.route), L(CATS.cl.name), T("gSubClubs")));
      futCards.push(cartao(u(CATS.cc.route), L(CATS.cc.name), T("gSubClubs")));
      futCards.push(cartao(u(CATS.sel.route), L(CATS.sel.name), T("gSubSel")));
      futCards.push(cartao(u(CATS.ligas.route), L(CATS.ligas.name), T("gSubLigas")));
    }
    const futNews = noticias.filter((n) => ESP.esporteDe(n) === "futebol");
    if (g === "fem" && futNews.length) futCards.push(cartao("#noticias", T("gFemNews"), contagem(futNews.length, "gNews1", "gNewsN")));
    let nFut = 0;
    for (const k of ESP.futChaves(g)) {
      /* Eliminatórias da CAN, Liga dos Campeões e Confederações já têm cartão próprio acima; entram só em Tabelas */
      if (!["canq", "cl", "cc"].includes(k)) futCards.push(cartao(ESP.futUrl(k), L(ESP.NOMES_FUT[k]), T("gSubTable"), T("gAfr")));
      futTabelas.push([ESP.futUrl(k), L(ESP.NOMES_FUT[k])]);
      nFut++;
    }
    if (futCards.length) lista.push({ id: "futebol", nome: T("gFut"), link: null, cards: futCards, n: nFut, news: [], tabelas: futTabelas, newsN: futNews.length, rotulo: g === "masc" ? T("gFutM") : null });

    for (const e of ESP.ESPORTES) {
      const cs = ESP.comps(e).filter((c) => ESP.generoComp(c.nome) === g);
      const news = ESP.newsDe(e).filter((n) => generoNoticia(n) === g);
      if (g === "fem" && !cs.length && !news.length) continue;
      lista.push({
        id: e.id, nome: L(e.nome), desc: L(e.desc), link: ESP.espUrl(e), n: cs.length, news, newsN: news.length,
        cards: cs.map((c) => cartao(ESP.compUrl(e, c), c.nome, T("gSubTable"), tipoComp(c))),
        tabelas: cs.filter((c) => c.tabela && c.tabela.length).map((c) => [ESP.compUrl(e, c), `${L(e.nome)} · ${c.nome}`])
      });
    }
    return { noticias, lista, jogos: D.FIXTURES.filter((f) => generoJogo(f) === g), tv: X.WATCH.filter((w) => (w.cat === "fem" ? "fem" : "masc") === g) };
  }

  function rotuloTile(s) {
    if (s.rotulo) return s.rotulo;
    if (s.n && s.newsN && !s.cards.length) return contagem(s.newsN, "gNews1", "gNewsN");
    if (s.n) return contagem(s.n, "gN1", "gNn");
    if (s.newsN) return contagem(s.newsN, "gNews1", "gNewsN");
    return T("gSoon");
  }
  const temSecao = (s) => s.cards.length || s.news.length;

  function pagina(g) {
    const { noticias, lista, jogos, tv } = montar(g);
    const titulo = T(g === "masc" ? "gMasc" : "gFem");
    const tabelas = (g === "masc" ? [[u("tabelas"), T("allTables")]] : []).concat(...lista.map((s) => s.tabelas.map(([href, t]) => [href, t, s.id])));
    const atalhos = [
      jogos.length && ["#agenda", T("agenda")],
      tabelas.length && ["#tabelas", T("tables")],
      tv.length && ["#onde-assistir", T("watch")],
      noticias.length && ["#noticias", T("espNews")]
    ].filter(Boolean);

    const tiles = lista.map((s) => `<li><a class="esp-tile cor-${s.id}" href="${temSecao(s) ? "#" + s.id : s.link}">
      <div class="cover esp sp-${s.id}" aria-hidden="true"></div><span class="nome">${esc(s.nome)}</span><span class="n">${esc(rotuloTile(s))}</span></a></li>`).join("");

    const secoes = lista.filter(temSecao).map((s) => `<section class="esporte cor-${s.id}" id="${s.id}" aria-labelledby="h-${s.id}">
      <div class="esporte-head"><div class="cover esp sp-${s.id}" aria-hidden="true"></div><h2 id="h-${s.id}">${esc(s.nome)}</h2>${s.link ? `<a href="${s.link}">${esc(T("gSeeAll"))}</a>` : ""}</div>
      ${s.cards.length ? `<div class="comp-grid">${s.cards.join("")}</div>` : ""}
      ${s.news.length ? `<div class="grid-stories">${s.news.slice(0, 3).map(storyCard).join("")}</div>` : ""}
    </section>`).join("");

    return `<div class="genero gen-${g}">
      <div class="page-head"><h1>${esc(titulo)}</h1><p>${esc(descricao(g, lista))}</p></div>
      ${atalhos.length ? `<nav class="atalhos" aria-label="${esc(titulo)}">${atalhos.map(([href, t]) => `<a href="${href}">${esc(t)}</a>`).join("")}</nav>` : ""}
      <section class="section" aria-labelledby="h-escolha">${h.sectionHead(T("gPick"), null, null, "h-escolha")}<ul class="esp-tiles">${tiles}</ul></section>
      ${secoes}
      <div class="gen-duo">
      ${jogos.length ? `<section class="section" id="agenda" aria-labelledby="h-agenda">${h.sectionHead(T("agenda"), "agenda", T("gSeeAll"), "h-agenda")}${tzHint()}<div class="panel">${agendaList(10, jogos)}</div></section>` : ""}
      ${tabelas.length ? `<section class="section" id="tabelas" aria-labelledby="h-tabelas">${h.sectionHead(T("tables"), null, null, "h-tabelas")}<ul class="tab-links">${tabelas.map(([href, t, id]) => `<li><a class="cor-${id || "futebol"}" href="${href}">${esc(t)}</a></li>`).join("")}</ul></section>` : ""}
      </div>
      ${tv.length ? `<section class="section" id="onde-assistir" aria-labelledby="h-tv">${h.sectionHead(T("watch"), "onde-assistir", T("watchLink"), "h-tv")}${watchHtml(tv)}</section>` : ""}
      ${noticias.length ? `<section class="section" id="noticias" aria-labelledby="h-noticias">${h.sectionHead(T("gLatest"), null, null, "h-noticias")}<div class="grid-stories">${noticias.slice(0, g === "fem" ? 24 : 8).map(storyCard).join("")}</div></section>` : ""}
    </div>`;
  }

  function descricao(g, lista) {
    if (g === "masc") return T("gDescM");
    const nomes = lista.map((s) => s.nome.toLocaleLowerCase(h.LOCALE[h.getLang()]));
    const texto = nomes.length > 1 ? nomes.slice(0, -1).join(", ") + L(D.AND) + nomes[nomes.length - 1] : nomes[0] || "";
    return T("gDescF", { lista: texto });
  }

  function emitir(emit, pages) {
    pages.push(emit("masculino", { title: T("gMasc"), desc: T("gDescM"), body: () => pagina("masc"), active: "masculino" }));
    pages.push(emit(CATS.fem.route, { title: T("gFem"), desc: descricao("fem", montar("fem").lista), body: () => pagina("fem"), active: "feminino" }));
  }

  return { emitir };
};
