/* Recursos de portal: Central de jogos (faixa de placares no topo), menu e página de Países por região,
   Especiais, assinatura e compartilhamento das matérias, dados estruturados (JSON-LD) e RSS. Usado pelo build.js. */
"use strict";

module.exports = function (h) {
  const { D, CAMP, NEWS, esc, L, T, u, bandeira, teamName, teamCode, timeTag, fmtDay, fmtTime, absUrl, pathOf, brand, storyCard, sectionHead, LOCALE, PREFIX, getLang } = h;

  Object.assign(D.UI, {
    central: { pt: "Central de jogos", fr: "Centre des matchs", en: "Match centre", ar: "مركز المباريات" },
    centralAll: { pt: "Agenda completa", fr: "Programme complet", en: "Full schedule", ar: "الجدول الكامل" },
    centralAria: { pt: "Central de jogos: resultados recentes, jogos de hoje e próximos jogos", fr: "Centre des matchs : résultats récents, matchs du jour et prochains matchs", en: "Match centre: recent results, today's games and upcoming games", ar: "مركز المباريات: النتائج الأخيرة ومباريات اليوم والمباريات المقبلة" },
    today: { pt: "Hoje", fr: "Aujourd'hui", en: "Today", ar: "اليوم" },
    paises: { pt: "Países", fr: "Pays", en: "Countries", ar: "الدول" },
    paisesTitle: { pt: "As 54 federações da CAF", fr: "Les 54 fédérations de la CAF", en: "The 54 CAF member associations", ar: "الاتحادات الـ54 الأعضاء في الكاف" },
    paisesDesc: { pt: "Os países do futebol africano por região, como a CAF organiza as suas cinco uniões regionais. Escolha um país e depois masculino ou feminino para ver a seleção, o campeonato, os clubes e os outros esportes.", fr: "Les pays du football africain par région, selon les cinq unions zonales de la CAF. Choisissez un pays, puis masculin ou féminin, pour voir la sélection, le championnat, les clubs et les autres sports.", en: "African football countries by region, following CAF's five zonal unions. Pick a country, then men's or women's, to see the national team, the league, the clubs and other sports.", ar: "دول كرة القدم الأفريقية حسب المنطقة، وفق الاتحادات الإقليمية الخمسة للكاف. اختر دولة ثم الرجال أو السيدات لترى المنتخب والدوري والأندية والرياضات الأخرى." },
    paisesAll: { pt: "Ver as 54 federações", fr: "Voir les 54 fédérations", en: "See all 54 associations", ar: "عرض الاتحادات الـ54" },
    paisesNota: { pt: "Usamos as bandeiras dos países, de domínio público. Os escudos das federações são marcas registradas e não são reproduzidos aqui.", fr: "Nous utilisons les drapeaux des pays, du domaine public. Les écussons des fédérations sont des marques déposées et ne sont pas reproduits ici.", en: "We use national flags, which are in the public domain. Federation crests are registered trademarks and are not reproduced here.", ar: "نستخدم أعلام الدول لأنها ملك عام. شعارات الاتحادات علامات مسجلة ولا ننشرها هنا." },
    especiais: { pt: "Especiais", fr: "Grands formats", en: "Features", ar: "ملفات خاصة" },
    especial: { pt: "Especial", fr: "Grand format", en: "Feature", ar: "ملف خاص" },
    especiaisDesc: { pt: "Reportagens sobre a história, as rivalidades e as pessoas do esporte africano.", fr: "Reportages sur l'histoire, les rivalités et les acteurs du sport africain.", en: "In-depth stories on the history, rivalries and people of African sport.", ar: "تقارير معمقة عن تاريخ الرياضة الأفريقية ومنافساتها وأبطالها." },
    por: { pt: "Por {x}", fr: "Par {x}", en: "By {x}", ar: "بقلم {x}" },
    redacao: { pt: "Redação Bola Africana", fr: "Rédaction Ballon Africain", en: "African Ball newsroom", ar: "تحرير الكرة الأفريقية" },
    leitura: { pt: "{n} min de leitura", fr: "{n} min de lecture", en: "{n} min read", ar: "مدة القراءة: {n} د" },
    compartilhe: { pt: "Compartilhe", fr: "Partager", en: "Share", ar: "شارك" },
    copiar: { pt: "Copiar link", fr: "Copier le lien", en: "Copy link", ar: "نسخ الرابط" },
    copiado: { pt: "Link copiado", fr: "Lien copié", en: "Link copied", ar: "تم نسخ الرابط" },
    rss: { pt: "RSS", fr: "RSS", en: "RSS", ar: "RSS" },
    editorial: { pt: "Política editorial", fr: "Charte éditoriale", en: "Editorial policy", ar: "السياسة التحريرية" }
  });

  /* ---------- Central de jogos: uma linha fina no topo de todas as páginas ---------- */
  function central() {
    const jogos = [...D.FIXTURES].sort((a, b) => a.at.localeCompare(b.at));
    if (!jogos.length) return "";
    const chips = jogos.map((f) => {
      const feito = !!f.score;
      const [s1, s2] = feito ? f.score.split("–") : ["", ""];
      const quando = feito ? esc(T("ft")) : f.timeTbd ? (f.today ? "" : timeTag(f.at, "day", fmtDay(f.at)))
        : f.today ? timeTag(f.at, "time", fmtTime(f.at)) : timeTag(f.at, "daytime", `${fmtDay(f.at)} ${fmtTime(f.at)}`);
      const aria = `${teamName(f, "home")} ${s1} ${T("vs")} ${teamName(f, "away")} ${s2}, ${L(f.comp)}`;
      return `<a class="cj ${feito ? "done" : ""} ${f.today ? "is-today" : ""}" href="${u("agenda")}" aria-label="${esc(aria)}">
        <span class="t">${bandeira(f.club ? (f.paises || [])[0] : f.home)}${esc(teamCode(f, "home"))}</span><span class="s">${esc(s1)}</span>
        <span class="t">${bandeira(f.club ? (f.paises || [])[1] : f.away)}${esc(teamCode(f, "away"))}</span><span class="s">${esc(s2)}</span>
        <span class="m">${f.today && !feito ? `<b>${esc(T("today"))}</b> ` : ""}${quando}</span></a>`;
    }).join("");
    return `<section class="central" aria-label="${esc(T("centralAria"))}"><div class="wrap central-in">
      <a class="central-tit" href="${u("agenda")}">${esc(T("central"))}<span>${esc(T("centralAll"))} ›</span></a>
      <div class="central-jogos" data-central>${chips}</div></div></section>`;
  }

  /* ---------- Países: as 54 federações por união regional da CAF ---------- */
  const REGIOES = [
    ["norte", { pt: "Norte", fr: "Nord", en: "North", ar: "الشمال" }, "UNAF", ["ALG", "EGY", "LBA", "MAR", "TUN"]],
    ["oeste", { pt: "Oeste", fr: "Ouest", en: "West", ar: "الغرب" }, "WAFU-UFOA", ["BEN", "BFA", "CPV", "GAM", "GHA", "GUI", "GNB", "CIV", "LBR", "MLI", "MTN", "NIG", "NGA", "SEN", "SLE", "TOG"]],
    ["central", { pt: "Central", fr: "Centre", en: "Central", ar: "الوسط" }, "UNIFFAC", ["CMR", "CTA", "CHA", "CGO", "COD", "EQG", "GAB", "STP"]],
    ["leste", { pt: "Leste", fr: "Est", en: "East", ar: "الشرق" }, "CECAFA", ["BDI", "DJI", "ERI", "ETH", "KEN", "RWA", "SOM", "SSD", "SDN", "TAN", "UGA"]],
    ["sul", { pt: "Sul", fr: "Sud", en: "South", ar: "الجنوب" }, "COSAFA", ["ANG", "BOT", "COM", "SWZ", "LES", "MAD", "MWI", "MRI", "MOZ", "NAM", "SEY", "RSA", "ZAM", "ZIM"]]
  ];
  const conta = REGIOES.reduce((n, r) => n + r[3].length, 0);
  if (conta !== 54) throw new Error(`Países: ${conta} federações nas regiões, o esperado é 54`);
  const porCode = Object.fromEntries(CAMP.map((c) => [c.code, c]));
  const ordenar = (codes) => [...codes].sort((a, b) => L(porCode[a].nome).localeCompare(L(porCode[b].nome), LOCALE[getLang()]));
  const linkPais = (code) => `<a href="${u("pais/" + porCode[code].slug)}">${bandeira(code)}<span>${esc(L(porCode[code].nome))}</span></a>`;

  const cacheMenu = {};
  function menuPaises() {
    const chave = getLang() + u("index");
    if (cacheMenu[chave]) return cacheMenu[chave];
    const cols = REGIOES.map(([id, nome, uniao, codes]) => `<div class="mega-col reg-${id}"><h2>${esc(L(nome))} <small>${esc(uniao)}</small></h2>
      <ul>${ordenar(codes).map((c) => `<li>${linkPais(c)}</li>`).join("")}</ul></div>`).join("");
    return (cacheMenu[chave] = `<div class="mega-panel mega-paises" id="menu-paises">${cols}<a class="mega-all" href="${u("paises")}">${esc(T("paisesAll"))} ›</a></div>`);
  }
  function paginaPaises() {
    return `<div class="page-head"><h1>${esc(T("paisesTitle"))}</h1><p>${esc(T("paisesDesc"))}</p></div>
      <div class="paises-grid">${REGIOES.map(([id, nome, uniao, codes]) => `<section class="regiao" aria-labelledby="reg-${id}">
        <h2 id="reg-${id}">${esc(L(nome))} <small>${esc(uniao)} · ${codes.length}</small></h2>
        <ul>${ordenar(codes).map((c) => `<li><a href="${u("pais/" + porCode[c].slug)}">${bandeira(c)}<span><b>${esc(L(porCode[c].nome))}</b><small>${esc(porCode[c].liga)}</small></span></a></li>`).join("")}</ul></section>`).join("")}</div>
      <p class="note">${esc(T("paisesNota"))}</p>`;
  }

  /* ---------- Especiais ---------- */
  const especiais = () => NEWS.filter((n) => n.especial).sort((a, b) => b.date.localeCompare(a.date));
  const cardEspecial = (n) => `<a class="especial-card" href="${u("noticias/" + n.slug)}"><span class="esp-k">${esc(T("especial"))}</span>
    <span class="esp-n">${esc(L(n.cover.big))}</span><h3>${esc(L(n.title))}</h3><p>${esc(L(n.lead))}</p></a>`;
  function homeEspeciais() {
    const l = especiais().slice(0, 3);
    return l.length ? `<section class="section especiais" aria-labelledby="sec-esp">${sectionHead(T("especiais"), "especiais", T("seeAll", { x: T("especiais") }), "sec-esp")}
      <div class="especiais-grid">${l.map(cardEspecial).join("")}</div></section>` : "";
  }
  function paginaEspeciais() {
    return `<div class="page-head"><h1>${esc(T("especiais"))}</h1><p>${esc(T("especiaisDesc"))}</p></div>
      <div class="especiais-grid">${especiais().map(cardEspecial).join("")}</div>`;
  }

  /* ---------- assinatura, tempo de leitura e compartilhamento ---------- */
  function assinatura(n) {
    const palavras = L(n.body).join(" ").split(/\s+/).length + L(n.lead).split(/\s+/).length;
    const min = Math.max(1, Math.round(palavras / 200));
    return `<p class="byline">${esc(T("por", { x: T("redacao") }))} · ${esc(T("leitura", { n: min }))}</p>`;
  }
  function compartilhar(n) {
    const url = absUrl(pathOf("noticias/" + n.slug));
    const tit = L(n.title);
    const e = encodeURIComponent;
    const redes = [
      ["WhatsApp", `https://wa.me/?text=${e(tit + " " + url)}`],
      ["X", `https://twitter.com/intent/tweet?text=${e(tit)}&url=${e(url)}`],
      ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${e(url)}`],
      ["Telegram", `https://t.me/share/url?url=${e(url)}&text=${e(tit)}`],
      ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}`]
    ];
    return `<div class="share" aria-label="${esc(T("compartilhe"))}"><span class="share-t">${esc(T("compartilhe"))}</span>
      ${redes.map(([nome, href]) => `<a class="share-b" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${nome}</a>`).join("")}
      <button type="button" class="share-b share-copy" data-url="${esc(url)}" data-ok="${esc(T("copiado"))}" hidden>${esc(T("copiar"))}</button></div>`;
  }

  /* ---------- dados estruturados (schema.org) ---------- */
  const OG = absUrl("assets/og.png");
  const org = () => ({ "@type": "NewsMediaOrganization", "@id": absUrl("") + "#org", name: brand(), url: absUrl(""), logo: { "@type": "ImageObject", url: OG, width: 1200, height: 630 } });
  function ldHome() {
    return { "@context": "https://schema.org", "@graph": [org(),
      { "@type": "WebSite", "@id": absUrl("") + "#site", url: absUrl(pathOf("index")), name: brand(), inLanguage: LOCALE[getLang()], publisher: { "@id": absUrl("") + "#org" },
        potentialAction: { "@type": "SearchAction", target: absUrl(pathOf("busca")) + "?q={search_term_string}", "query-input": "required name=search_term_string" } }] };
  }
  function ldNoticia(n, secao, rotaSecao) {
    const url = absUrl(pathOf("noticias/" + n.slug));
    return { "@context": "https://schema.org", "@graph": [
      { "@type": "NewsArticle", headline: L(n.title), description: L(n.lead), image: [OG], datePublished: n.date + ":00Z", dateModified: (n.updated || n.date) + ":00Z",
        inLanguage: LOCALE[getLang()], articleSection: secao, mainEntityOfPage: url, url,
        author: { "@type": "Organization", name: T("redacao"), url: absUrl(pathOf("sobre")) }, publisher: org(),
        isBasedOn: n.sources.map(([, href]) => href) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: T("home"), item: absUrl(pathOf("index")) },
        { "@type": "ListItem", position: 2, name: secao, item: absUrl(pathOf(rotaSecao)) },
        { "@type": "ListItem", position: 3, name: L(n.title), item: url }] }] };
  }

  /* ---------- RSS: as 30 notícias mais recentes, um arquivo por idioma ---------- */
  function rss(lista) {
    const x = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const itens = lista.slice(0, 30).map((n) => {
      const url = absUrl(pathOf("noticias/" + n.slug));
      return `<item><title>${x(L(n.title))}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${new Date(n.date + ":00Z").toUTCString()}</pubDate><description>${x(L(n.lead))}</description></item>`;
    }).join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>${x(brand())}</title><link>${absUrl(pathOf("index"))}</link><description>${x(T("homeTag"))}</description><language>${LOCALE[getLang()]}</language>
<atom:link href="${absUrl(PREFIX[getLang()] + "feed.xml")}" rel="self" type="application/rss+xml"/>
${itens}
</channel></rss>
`;
  }

  return { central, menuPaises, paginaPaises, homeEspeciais, paginaEspeciais, assinatura, compartilhar, ldHome, ldNoticia, rss, OG, REGIOES };
};
