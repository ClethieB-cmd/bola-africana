/* Bola Africana — pequenos ajustes no navegador do visitante:
   horários no fuso local, menu de idioma e busca. O site funciona mesmo sem este arquivo. */
(function () {
  var locale = document.documentElement.lang || "pt-BR";
  if (locale === "ar") locale = "ar-u-nu-latn";
  var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };

  /* Horários: as páginas saem em GMT; aqui convertemos para o fuso de quem visita. */
  try {
    var tf = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" });
    var df = new Intl.DateTimeFormat(locale, { weekday: "short", day: "2-digit", month: "2-digit" });
    var localDay = function (d) { return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); };
    var utcDay = function (d) { return d.getUTCFullYear() + "-" + (d.getUTCMonth() + 1) + "-" + d.getUTCDate(); };
    document.querySelectorAll("time[data-local]").forEach(function (el) {
      var d = new Date(el.getAttribute("datetime"));
      if (isNaN(d)) return;
      var kind = el.getAttribute("data-local");
      var text;
      if (kind === "day") text = df.format(d);
      else if (kind === "daytime" || localDay(d) !== utcDay(d)) text = df.format(d) + " " + tf.format(d);
      else text = tf.format(d);
      el.textContent = cap(text);
    });
    var tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      document.querySelectorAll("[data-tz-template]").forEach(function (el) {
        el.textContent = el.getAttribute("data-tz-template").replace("{tz}", tz.replace(/_/g, " "));
      });
    }
  } catch (e) { /* mantém os horários em GMT */ }

  /* Menu de idioma: guarda a escolha e fecha ao clicar fora. */
  document.querySelectorAll(".lang a[data-lang]").forEach(function (a) {
    a.addEventListener("click", function () {
      try { localStorage.setItem("bola-africana-lang", a.getAttribute("data-lang")); } catch (e) {}
    });
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll("details.lang[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute("open");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.querySelectorAll("details.lang[open]").forEach(function (d) { d.removeAttribute("open"); });
  });

  /* Busca: filtra a lista de matérias na página de busca. */
  var input = document.getElementById("busca-q");
  var list = document.getElementById("busca-lista");
  var msg = document.getElementById("busca-msg");
  if (input && list && msg) {
    var norm = function (s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim(); };
    var items = Array.prototype.slice.call(list.querySelectorAll("[data-q]"));
    var run = function () {
      var q = input.value;
      var nq = norm(q);
      var n = 0;
      var words = nq.split(/\s+/).filter(function (w) { return w.length > 2; });
      if (!words.length && nq) words = [nq];
      items.forEach(function (it) {
        var dq = it.getAttribute("data-q");
        var hit = !nq || words.every(function (w) { return dq.indexOf(w) !== -1; });
        it.hidden = !hit;
        if (hit) n++;
      });
      if (!nq) msg.textContent = msg.getAttribute("data-intro");
      else if (n) msg.textContent = msg.getAttribute("data-hits").replace("{n}", n).replace("{q}", q);
      else msg.textContent = msg.getAttribute("data-nohits").replace(/\{q\}/g, q);
    };
    var q0 = "";
    try { q0 = new URLSearchParams(location.search).get("q") || ""; } catch (e) {}
    input.value = q0;
    var header = document.getElementById("search-input");
    if (header) header.value = q0;
    input.addEventListener("input", run);
    run();
  }
})();

/* Cabeçalho: o botão MENU abre o menu lateral; o botão PAÍSES abre a janela de países.
   Na janela, o visitante escolhe o país, depois masculino ou feminino, depois o esporte.
   Sem JavaScript, MENU abre o menu pelo endereço #menu e PAÍSES leva à página dos países. */
(function () {
  var raiz = document.documentElement;
  var drawer = document.getElementById("menu");
  var abreMenu = document.querySelector("[data-drawer]");
  var janela = document.querySelector("[data-pp]");
  var abreJanela = document.querySelector(".masthead [data-pp-abrir]");
  var voltaFoco = null;

  function fecharMenu(foco) {
    if (!drawer || !drawer.classList.contains("open")) return;
    drawer.classList.remove("open");
    raiz.classList.remove("trava");
    if (abreMenu) abreMenu.setAttribute("aria-expanded", "false");
    if (foco !== false && voltaFoco) voltaFoco.focus();
  }
  function abrirMenu() {
    fecharJanela(false);
    voltaFoco = abreMenu;
    drawer.classList.add("open");
    raiz.classList.add("trava");
    abreMenu.setAttribute("aria-expanded", "true");
    var x = drawer.querySelector(".dr-x");
    if (x) x.focus();
  }
  if (drawer && abreMenu) {
    if (location.hash === "#menu") history.replaceState(null, "", location.pathname + location.search);
    abreMenu.addEventListener("click", function (e) { e.preventDefault(); drawer.classList.contains("open") ? fecharMenu() : abrirMenu(); });
    document.querySelectorAll("[data-drawer-fechar]").forEach(function (b) {
      b.addEventListener("click", function (e) { e.preventDefault(); fecharMenu(); });
    });
  }

  /* janela Países */
  var passos = janela ? janela.querySelectorAll(".pp-passo") : [];
  var escolha = { link: null, g: null };
  function passo(n) {
    for (var i = 0; i < passos.length; i++) passos[i].hidden = passos[i].getAttribute("data-passo") !== String(n);
    var h = janela.querySelector('.pp-passo[data-passo="' + n + '"] .pp-h');
    if (h) h.focus({ preventScroll: true });
  }
  function fecharJanela(foco) {
    if (!janela || janela.hidden) return;
    janela.hidden = true;
    if (abreJanela) abreJanela.setAttribute("aria-expanded", "false");
    if (foco !== false && abreJanela) abreJanela.focus();
  }
  function abrirJanela() {
    fecharMenu(false);
    janela.hidden = false;
    abreJanela.setAttribute("aria-expanded", "true");
    passo(1);
  }
  function preencher(sel, fn) { janela.querySelectorAll(sel).forEach(fn); }
  if (janela && abreJanela) {
    document.querySelectorAll("[data-pp-abrir]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        if (janela.hidden) abrirJanela(); else fecharJanela();
      });
    });
    janela.querySelector("[data-pp-fechar]").addEventListener("click", function () { fecharJanela(); });
    /* abas das regiões, com as setas do teclado */
    var abas = janela.querySelectorAll('[role="tab"]');
    function aba(t) {
      for (var i = 0; i < abas.length; i++) {
        var sim = abas[i] === t;
        abas[i].setAttribute("aria-selected", sim ? "true" : "false");
        abas[i].tabIndex = sim ? 0 : -1;
        document.getElementById(abas[i].getAttribute("aria-controls")).hidden = !sim;
      }
    }
    Array.prototype.forEach.call(abas, function (t, i) {
      t.addEventListener("click", function () { aba(t); });
      t.addEventListener("keydown", function (e) {
        var rtl = raiz.dir === "rtl", d = 0;
        if (e.key === "ArrowRight") d = rtl ? -1 : 1;
        if (e.key === "ArrowLeft") d = rtl ? 1 : -1;
        if (!d) return;
        var n = abas[(i + d + abas.length) % abas.length];
        aba(n); n.focus(); e.preventDefault();
      });
    });
    /* passo 2: o país escolhido */
    janela.querySelectorAll(".pp-grid a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        escolha.link = a;
        var img = a.querySelector("img");
        preencher("[data-pp-flag]", function (el) { el.innerHTML = img ? img.outerHTML : ""; });
        preencher("[data-pp-nome]", function (el) { el.textContent = a.textContent; });
        preencher("[data-pp-pagina]", function (el) { el.href = a.href; });
        passo(2);
      });
    });
    /* passo 3: os esportes do país no gênero escolhido */
    janela.querySelectorAll(".pp-gen button").forEach(function (b) {
      b.addEventListener("click", function () {
        var g = b.getAttribute("data-g"), a = escolha.link;
        var ids = (a.getAttribute(g === "masculino" ? "data-m" : "data-f") || "").split(" ").filter(Boolean);
        preencher("[data-pp-gen]", function (el) { el.textContent = b.textContent; });
        janela.querySelectorAll(".pp-esp li").forEach(function (li) {
          var id = li.getAttribute("data-esp");
          li.hidden = ids.indexOf(id) === -1;
          li.querySelector("a").href = a.href.split("#")[0] + "#" + g + "-" + id;
        });
        var vazio = janela.querySelector("[data-pp-vazio]");
        vazio.hidden = ids.length > 0;
        janela.querySelector("[data-pp-pick]").hidden = !ids.length;
        if (!ids.length) vazio.textContent = janela.getAttribute("data-vazio-" + g).replace("{de}", a.getAttribute("data-de")).replace("{pais}", a.textContent);
        passo(3);
      });
    });
    janela.querySelectorAll("[data-voltar]").forEach(function (b) {
      b.addEventListener("click", function () { passo(b.getAttribute("data-voltar")); });
    });
    /* um esporte da página em que o visitante já está: só troca a aba */
    janela.querySelectorAll(".pp-esp a, [data-pp-pagina]").forEach(function (a) {
      a.addEventListener("click", function () { fecharJanela(false); });
    });
    document.addEventListener("click", function (e) {
      if (!janela.hidden && !janela.contains(e.target) && !(e.target.closest && e.target.closest("[data-pp-abrir]"))) fecharJanela(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    fecharMenu();
    fecharJanela();
  });
})();

/* Página do país: uma seção por vez (gênero e esporte), escolhida pelas abas ou pelo endereço (#feminino-futebol).
   Sem JavaScript, todas as seções aparecem em sequência e as abas são atalhos. */
(function () {
  var pg = document.querySelector("[data-pais-pg]");
  if (!pg) return;
  var secoes = pg.querySelectorAll(".pais-sec");
  var abas = pg.querySelectorAll(".pg-g");
  var chips = pg.querySelectorAll(".pg-e");
  pg.classList.add("js");
  function mostrar(id, rolar) {
    var alvo = document.getElementById(id);
    if (!alvo || !alvo.classList.contains("pais-sec")) alvo = secoes[0];
    var g = alvo.getAttribute("data-g");
    for (var i = 0; i < secoes.length; i++) secoes[i].hidden = secoes[i] !== alvo;
    for (i = 0; i < abas.length; i++) {
      if (abas[i].getAttribute("data-g") === g) abas[i].setAttribute("aria-current", "true"); else abas[i].removeAttribute("aria-current");
    }
    for (i = 0; i < chips.length; i++) {
      chips[i].hidden = chips[i].getAttribute("data-g") !== g;
      if (chips[i].getAttribute("href") === "#" + alvo.id) chips[i].setAttribute("aria-current", "true"); else chips[i].removeAttribute("aria-current");
    }
    if (rolar) pg.querySelector(".pg-nav").scrollIntoView({ block: "start" });
  }
  function doEndereco(rolar) { mostrar(location.hash.slice(1), rolar); }
  pg.querySelectorAll(".pg-g, .pg-e").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var id = a.getAttribute("href").slice(1);
      history.replaceState(null, "", "#" + id);
      mostrar(id, false);
    });
  });
  window.addEventListener("hashchange", function () { doEndereco(true); });
  doEndereco(false);
})();

/* Compartilhar: o botão de copiar o link aparece só quando o navegador permite copiar.
   Central de jogos: a faixa começa nos jogos de hoje ou, se não houver, no próximo jogo. */
(function () {
  document.querySelectorAll(".share-copy").forEach(function (b) {
    if (!navigator.clipboard) return;
    b.hidden = false;
    b.addEventListener("click", function () {
      var t = b.textContent;
      navigator.clipboard.writeText(b.getAttribute("data-url")).then(function () {
        b.textContent = b.getAttribute("data-ok");
        setTimeout(function () { b.textContent = t; }, 2000);
      });
    });
  });
  var faixa = document.querySelector("[data-central]");
  if (faixa) {
    var alvo = faixa.querySelector(".is-today") || faixa.querySelector(".cj:not(.done)");
    if (alvo) {
      var x = window.scrollX, y = window.scrollY;
      alvo.scrollIntoView({ block: "nearest", inline: "start" });
      window.scrollTo(x, y);
    }
  }
})();
