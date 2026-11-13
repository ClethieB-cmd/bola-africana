#!/usr/bin/env node
/* Busca classificação (com todos os grupos), últimos resultados e próximos jogos das competições africanas
   de clubes e seleções e dos campeonatos nacionais na API-Football, e grava tudo em conteudo/ligas-auto.json. O GitHub roda este arquivo sozinho uma vez por dia
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

let dados = { geradoEm: null, continentais: {}, ligas: {}, mapa: {}, semCampeonato: [] };
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

const norm = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const plano = (s) => norm(s).replace(/[^a-z0-9]/g, "");
const NOMES_EXTRA = {
  CIV: ["ivorycoast", "cotedivoire"], COD: ["congodr", "drcongo", "democraticrepublicofthecongo"],
  CGO: ["congo", "republicofthecongo"], CPV: ["capeverde", "capeverdeislands", "caboverde"],
  SWZ: ["eswatini", "swaziland"], STP: ["saotomeandprincipe", "saotomeprincipe"], GAM: ["gambia", "thegambia"]
};
/* Competições continentais: chave usada no site, nome na API, nomes a evitar. */
const CONTINENTAIS = [
  ["canq", /africa cup of nations.*qualif/, /women/],
  ["can", /^africa cup of nations$/, null],
  ["cl", /caf champions league/, /women/],
  ["cc", /confederation cup/, null],
  ["clf", /women.*champions league|champions league.*women/, null],
  ["canf", /women.*africa cup of nations|africa cup of nations.*women/, /qualif/],
  ["chan", /african nations championship/, /qualif/],
  ["mundq", /world cup.*qualification.*africa/, null]
];
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

/* Temporada pedida: a atual ou, quando o plano não libera a atual, a última que ele libera (ano). */
async function atualizar(liga, ano) {
  const atual = liga.seasons.find((s) => s.current) || liga.seasons[liga.seasons.length - 1];
  const temp = ano ? { year: ano } : atual;
  const cob = (temp.coverage || {});
  const item = { apiId: liga.league.id, apiNome: liga.league.name, temporada: ano ? String(ano) : rotuloTemporada(temp), ano: temp.year, tabela: [], resultados: [], proximos: [] };
  /* temporada já encerrada: a pedida porque o plano não libera a atual, ou uma que a API ainda marca como atual mas já terminou */
  if (ano || (temp.end && Date.parse(temp.end) < Date.now() - 7 * 864e5)) item.anterior = true;

  if (cob.standings !== false) {
    const st = await api("/standings", { league: liga.league.id, season: temp.year });
    const grupos = (st[0] && st[0].league && st[0].league.standings) || [];
    item.tabela = grupos.map((g) => ({
      grupo: grupos.length > 1 && g[0] ? String(g[0].group || "").replace(/^.*:\s*/, "") : "",
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
  if (ano && fx.length) {
    /* rótulo da temporada antiga pelas datas dos jogos: 2024 ou 2024/25 */
    const anos = fx.map((f) => Number(String(f.fixture.date).slice(0, 4))).filter(Boolean);
    const a = Math.min(...anos), b = Math.max(...anos);
    item.temporada = a === b ? String(a) : `${a}/${String(b).slice(2)}`;
  }
  item.atualizado = new Date().toISOString();
  return item;
}

(async () => {
  let todas;
  try {
    todas = await api("/leagues", { current: "true" });
  } catch (e) {
    console.error("Não consegui listar os campeonatos na API: " + e.message);
    process.exit(1);
  }

  const ligasNac = todas.filter((l) => String(l.league.type).toLowerCase() === "league");
  const mapa = {}, sem = [];
  for (const c of CAMP) {
    const l = escolher(c, ligasNac);
    if (l) mapa[c.code] = { apiId: l.league.id, apiNome: l.league.name, apiPais: l.country.name };
    else sem.push(c.code);
  }
  dados.mapa = mapa;
  dados.semCampeonato = sem;
  console.log(`A API tem campeonato atual para ${Object.keys(mapa).length} dos ${CAMP.length} países. Sem campeonato: ${sem.join(", ") || "nenhum"}.`);

  // Primeiro as competições continentais (grupos da CAN, Liga dos Campeões etc.).
  const internacionais = todas.filter((l) => ["world", "africa"].includes(plano(l.country.name)));
  dados.continentais = dados.continentais || {};
  let parar = false;
  for (const [chave, sim, nao] of CONTINENTAIS) {
    const l = internacionais.find((x) => sim.test(norm(x.league.name)) && !(nao && nao.test(norm(x.league.name))));
    if (!l) continue;
    try {
      dados.continentais[chave] = { ...(await atualizar(l)), chave };
      console.log(`ok  ${chave}  ${l.league.name}`);
    } catch (e) {
      if (e instanceof Limite) { parar = true; break; }
      console.log(`erro ${chave}  ${l.league.name}: ${e.message}`);
    }
  }

  // Depois os campeonatos nacionais, começando pelos que estão há mais tempo sem atualização.
  const fila = CAMP.filter((c) => mapa[c.code])
    .sort((a, b) => String((dados.ligas[a.code] || {}).atualizado || "").localeCompare(String((dados.ligas[b.code] || {}).atualizado || "")));

  /* Plano grátis: a API só libera temporadas antigas (a mensagem diz "try from 2022 to 2024").
     Quando a temporada atual é recusada, o robô guarda o último ano liberado e passa a pedir esse ano.
     Uma vez por execução ele ainda testa a temporada atual: se o plano mudar, volta sozinho para ela. */
  const anoLiberado = (msg) => { const m = String(msg).match(/from\s+(\d{4})\s+to\s+(\d{4})/i); return m ? Number(m[2]) : null; };
  let testouAtual = false;
  async function atualizarLiga(liga) {
    const atual = (liga.seasons.find((s) => s.current) || liga.seasons[liga.seasons.length - 1] || {}).year;
    const max = dados.planoAnoMax;
    if (max && atual > max && testouAtual) return atualizar(liga, max);
    try {
      const item = await atualizar(liga);
      if (max && atual > max) { delete dados.planoAnoMax; console.log("   A API liberou a temporada atual: o robô volta a usar a temporada atual."); }
      return item;
    } catch (e) {
      const ano = anoLiberado(e.message);
      if (!ano || e instanceof Limite) throw e;
      dados.planoAnoMax = ano;
      testouAtual = true;
      console.log(`   O plano não libera a temporada atual; usando a temporada ${ano}.`);
      return atualizar(liga, ano);
    } finally {
      if (max && atual > max) testouAtual = true;
    }
  }

  let feitos = 0, erros = 0;
  for (const c of parar ? [] : fila) {
    const liga = ligasNac.find((l) => l.league.id === mapa[c.code].apiId);
    try {
      dados.ligas[c.code] = await atualizarLiga(liga);
      feitos++;
      console.log(`ok  ${c.code}  ${liga.league.name}  temporada ${dados.ligas[c.code].temporada}${dados.ligas[c.code].anterior ? " (encerrada)" : ""}`);
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
