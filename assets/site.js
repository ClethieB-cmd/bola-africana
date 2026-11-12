/* Bola Africana — pequenos ajustes no navegador do visitante:
   horários no fuso local, menu de idioma e busca. O site funciona mesmo sem este arquivo. */
(function () {
  var locale = document.documentElement.lang || "pt-BR";
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
      items.forEach(function (it) {
        var hit = !nq || it.getAttribute("data-q").indexOf(nq) !== -1;
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
