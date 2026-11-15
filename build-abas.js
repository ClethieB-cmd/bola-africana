/* Abas Masculino e Feminino no topo das páginas de competição e de esporte (menos o CHAN, que é só masculino).
   Cada aba troca o conteúdo da página e o quadro lateral "Em números" ao mesmo tempo, sem janela.
   Sem JavaScript, as duas partes aparecem uma depois da outra e as abas viram atalhos. Usado pelo build.js
   e pelo build-esportes.js. O quadro "Em números" dos outros esportes vem de conteudo/esportes-numeros.js. */
"use strict";

module.exports = function (h) {
  const { D, esc, L, T, fmt } = h;
  const NUM = require("./conteudo/esportes-numeros.js");

  Object.assign(D.UI, {
    abasLabel: { pt: "Masculino ou feminino", fr: "Masculin ou féminin", en: "Men's or women's", ar: "الرجال أو السيدات" },
    abVazio: { pt: "Ainda não temos dados do {x} nesta página.", fr: "Nous n'avons pas encore de données sur le {x} ici.", en: "We don't have {x} data on this page yet.", ar: "لا تتوفر لدينا بعد بيانات {x} في هذه الصفحة." },
    abVazioFem: { pt: "esporte feminino", fr: "sport féminin", en: "women's sport", ar: "الرياضة النسائية" },
    abVazioMasc: { pt: "esporte masculino", fr: "sport masculin", en: "men's sport", ar: "الرياضة الرجالية" },
    abVazioMais: { pt: "Assim que houver competição, resultado ou notícia, ela aparece aqui.", fr: "Dès qu'il y aura une compétition, un résultat ou un article, il apparaîtra ici.", en: "As soon as there is a competition, a result or a story, it will appear here.", ar: "ستظهر هنا أي مسابقة أو نتيجة أو خبر فور توفره." },
    numConferido: { pt: "Números conferidos em {d}.", fr: "Chiffres vérifiés le {d}.", en: "Figures checked on {d}.", ar: "تم التحقق من الأرقام في {d}." }
  });

  const GENS = [["masculino", "gMasc"], ["feminino", "gFem"]];

  /* mensagem para o gênero sem conteúdo */
  const vazio = (g, extra = "") => `<div class="gen-vazio"><p>${esc(T("abVazio", { x: T(g === "feminino" ? "abVazioFem" : "abVazioMasc") }))} ${esc(T("abVazioMais"))}</p>${extra}</div>`;

  /* página com as duas abas: cabeca fica acima da barra; corpo e lado têm uma versão por gênero */
  function pagina({ cabeca, corpo, lado = {}, ad = "", inicial = "masculino", classe = "" }) {
    const abas = GENS.map(([g, k]) => `<a class="gb" role="tab" href="#${g}" data-gen="${g}" id="gb-${g}" aria-controls="${g}" aria-selected="${g === inicial}">${esc(T(k))}</a>`).join("");
    const paineis = GENS.map(([g, k]) => `<section class="gen-painel" data-gen="${g}" id="${g}" role="tabpanel" aria-labelledby="gb-${g}"><h2 class="gen-h">${esc(T(k))}</h2>${corpo[g] || vazio(g)}</section>`).join("");
    const laterais = GENS.map(([g]) => (lado[g] ? `<div class="gen-painel" data-gen="${g}">${lado[g]}</div>` : "")).join("");
    return `<div class="layout${classe ? " " + classe : ""}" data-gen-abas data-inicial="${inicial}"><div>
      ${cabeca}
      <nav class="gen-bar" role="tablist" aria-label="${esc(T("abasLabel"))}">${abas}</nav>
      ${paineis}
    </div><aside class="sidebar">${laterais}${ad}</aside></div>`;
  }

  /* "Em números" de um esporte que não é futebol, por gênero; vazio quando não há dados conferidos */
  const data = (iso) => fmt({ day: "numeric", month: "long", year: "numeric" }).format(new Date(iso + "T12:00:00Z"));
  function numeros(esporte, g) {
    const q = ((NUM.esportes || {})[esporte] || {})[g];
    if (!q || !q.itens.length) return "";
    const itens = q.itens.map(([n, txt]) => `<li><b class="${String(n).length > 3 ? "longo" : ""}">${esc(n)}</b><span>${esc(L(txt))}</span></li>`).join("");
    return `<section class="panel fatos fatos-esp"><h2>${esc(T("fTitulo"))}</h2><ul>${itens}</ul>
      <p class="note src">${esc(T("sources"))}: ${q.fontes.map(([t, href]) => `<a href="${href}">${esc(t)}</a>`).join(", ")}.</p>
      <p class="note">${esc(T("numConferido", { d: data(NUM.conferido) }))}</p></section>`;
  }

  return { pagina, numeros, vazio };
};
