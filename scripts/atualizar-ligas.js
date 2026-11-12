#!/usr/bin/env node
/* Busca classificação, últimos resultados e próximos jogos dos campeonatos nacionais na API-Football
   e grava tudo em conteudo/ligas-auto.json. O GitHub roda este arquivo sozinho uma vez por dia
   (veja .github/workflows/atualizar-ligas.yml). A chave da API fica no segredo API_FOOTBALL_KEY do repositório.
   Uso manual:  API_FOOTBALL_KEY=suachave node scripts/atualizar-ligas.js */
"use strict";
const fs = require("fs");
const path = require("path");
const CAMP = require("../conteudo/campeonatos.js");

const KEY = process.env.API_FOOTBALL_KEY;
const BASE = "https://v3.football.api-sports.io";
const OUT = path.join(__dirname, "..", "conteudo", "ligas-auto.json");
const LIMITE = Number(process.env.LIMITE_CONSULTAS || 95); // o plano grátis dá 100 consultas por dia
const PAUSA_MS = Number(process.env.PAUSA_MS || 7000);      // o plano grátis também limita as consultas por minuto
const FIM = new Set(["FT", "AET", "PEN"]);
const ABERTO = new Set(["NS", "TBD"]);

if (!KEY) {
  console.log("Sem a chave API_FOOTBALL_KEY. Nada foi atualizado.");
  process.exit(0);
}

let dados = { geradoEm: null, ligas: {}, mapa: {}, semCampeonato: [] };
try { dados = { ...dados, ...JSON.parse(fs.readFileSync(OUT, "utf8")) }; } catch (e) { /* primeira execução */ }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let usadas = 0;
class Limite extends Error {}

async function api(endpoint, params) {
  if (usadas >= LIMITE) throw new Limite();
  if (usadas > 0) await sleep(PAUSA_MS);
  usadas++;
  const r = await fetch(`${BASE}${endpoint}?${new URLSearchParams(params)}`, { headers: { "x-apisports-key": KEY } });
  if (!r.ok) throw new Error(`a API respondeu HTTP ${r.status} em ${endpoint}`);
  const j = await r.json();
  const erros = j.errors ? (Array.isArray(j.errors) ? j.errors : Object.values(j.errors)) : [];
  if (erros.length) throw new Error(erros.join(" | "));
  return j.response || [];
}

const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const plano = (s) => norm(s).replace(/[^a-z0-9]/g, "");
const NOMES_EXTRA = {
  CIV: ["ivorycoast", "cotedivoire"], COD: ["congodr", "drcongo", "democraticrepublicofthecongo"],
  CGO: ["congo", "republicofthecongo"], CPV: ["capeverde", "capeverdeislands", "caboverde"],
  SWZ: ["eswatini", "swaziland"], STP: ["saotomeandprincipe", "saotomeprincipe"], GAM: ["gambia", "thegambia"]
};
const RUIM = /women|femin|femen|\bu ?1\d|\bu ?2\d|reserve|youth|junior|cup|coupe|super ?cup|play-?off|qualif|\b2\b|ligue 2|division 2|second|d2\b/;

function escolher(c, todas) {
  const nomes = new Set([c.nome.en, ...(NOMES_EXTRA[c.code] || [])].map(plano));
  const doPais = todas.filter((l) => (l.country.code && l.country.code.toUpperCase() === c.iso) || nomes.has(plano(l.country.name)));
  if (c.apiId) return doPais.find((l) => l.league.id === c.apiId) || todas.find((l) => l.league.id === c.apiId) || null;
  const pontos = (l) => {
    const n = norm(l.league.name);
    let p = 0;
    if (c.busca.some((b) => n.includes(norm(b)))) p += 10;
    if (RUIM.test(n)) p -= 20;
    return p;
  };
  return doPais.sort((a, b) => pontos(b) - pontos(a) || a.league.id - b.league.id)[0] || null;
}

function rotuloTemporada(s) {
  const a = Number((s.start || "").slice(0, 4)) || s.year;
  const b = Number((s.end || "").slice(0, 4)) || s.year;
  return a === b ? String(a) : `${a}/${String(b).slice(2)}`;
}

async function atualizar(c, liga) {
  const temp = liga.seasons.find((s) => s.current) || liga.seasons[liga.seasons.length - 1];
  const cob = (temp.coverage || {});
  const item = { apiId: liga.league.id, apiNome: liga.league.name, temporada: rotuloTemporada(temp), ano: temp.year, tabela: [], resultados: [], proximos: [] };

  if (cob.standings !== false) {
    const st = await api("/standings", { league: liga.league.id, season: temp.year });
    const grupos = (st[0] && st[0].league && st[0].league.standings) || [];
    item.tabela = grupos.map((g) => ({
      grupo: grupos.length > 1 && g[0] ? g[0].group : "",
      linhas: g.map((x) => [x.rank, x.team.name, x.all.played, x.all.win, x.all.draw, x.all.lose, x.goalsDiff, x.points])
    })).filter((g) => g.linhas.length);
  }

  const fx = await api("/fixtures", { league: liga.league.id, season: temp.year });
  const agora = Date.now();
  const jogo = (f) => ({ d: f.fixture.date, c: f.teams.home.name, f: f.teams.away.name, gc: f.goals.home, gf: f.goals.away });
  item.resultados = fx.filter((f) => FIM.has(f.fixture.status.short))
    .sort((a, b) => b.fixture.timestamp - a.fixture.timestamp).slice(0, 10).map(jogo);
  item.proximos = fx.filter((f) => ABERTO.has(f.fixture.status.short) && f.fixture.timestamp * 1000 >= agora - 3 * 3600e3)
    .sort((a, b) => a.fixture.timestamp - b.fixture.timestamp).slice(0, 10).map(jogo);
  item.atualizado = new Date().toISOString();
  return item;
}

(async () => {
  let todas;
  try {
    todas = await api("/leagues", { current: "true", type: "league" });
  } catch (e) {
    console.error("Não consegui listar os campeonatos na API: " + e.message);
    process.exit(1);
  }

  const mapa = {}, sem = [];
  for (const c of CAMP) {
    const l = escolher(c, todas);
    if (l) mapa[c.code] = { apiId: l.league.id, apiNome: l.league.name, apiPais: l.country.name };
    else sem.push(c.code);
  }
  dados.mapa = mapa;
  dados.semCampeonato = sem;
  console.log(`A API tem campeonato atual para ${Object.keys(mapa).length} dos ${CAMP.length} países. Sem campeonato: ${sem.join(", ") || "nenhum"}.`);

  // Atualiza primeiro os que estão há mais tempo sem atualização.
  const fila = CAMP.filter((c) => mapa[c.code])
    .sort((a, b) => String((dados.ligas[a.code] || {}).atualizado || "").localeCompare(String((dados.ligas[b.code] || {}).atualizado || "")));

  let feitos = 0, erros = 0;
  for (const c of fila) {
    const liga = todas.find((l) => l.league.id === mapa[c.code].apiId);
    try {
      dados.ligas[c.code] = await atualizar(c, liga);
      feitos++;
      console.log(`ok  ${c.code}  ${liga.league.name}`);
    } catch (e) {
      if (e instanceof Limite) { console.log(`Limite de ${LIMITE} consultas atingido. Os demais ficam para a próxima execução.`); break; }
      erros++;
      console.log(`erro ${c.code}  ${liga.league.name}: ${e.message}`);
      if (/plan|season/i.test(e.message)) console.log("   O plano da API não dá acesso a esta temporada. Os dados anteriores foram mantidos.");
    }
  }
  for (const code of Object.keys(dados.ligas)) if (!mapa[code]) delete dados.ligas[code];

  dados.geradoEm = new Date().toISOString();
  fs.writeFileSync(OUT, JSON.stringify(dados, null, 1) + "\n");
  console.log(`Atualizados: ${feitos}. Com erro: ${erros}. Consultas usadas: ${usadas}.`);
})();
