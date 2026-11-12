#!/usr/bin/env node
/* Busca classificação (com todos os grupos), últimos resultados e próximos jogos das competições africanas
   de basquete, handebol, vôlei e rúgbi na API-Sports, e grava em conteudo/esportes-auto.json.
   Usa a mesma chave da API-Football (segredo API_FOOTBALL_KEY). Cada esporte tem a sua cota diária.
   Uso manual:  API_FOOTBALL_KEY=suachave node scripts/atualizar-esportes.js */
"use strict";
const fs = require("fs");
const path = require("path");
const ESPORTES = require("../conteudo/esportes.js");
const CAMP = require("../conteudo/campeonatos.js");

const KEY = process.env.API_FOOTBALL_KEY;
const OUT = path.join(__dirname, "..", "conteudo", "esportes-auto.json");
const LIMITE = Number(process.env.LIMITE_CONSULTAS || 95); // por esporte: o plano grátis dá 100 consultas por dia
const PAUSA_MS = Number(process.env.PAUSA_MS || 7000);
const HOST = {
  basketball: "https://v1.basketball.api-sports.io",
  handball: "https://v1.handball.api-sports.io",
  volleyball: "https://v1.volleyball.api-sports.io",
  rugby: "https://v1.rugby.api-sports.io"
};
const FIM = new Set(["FT", "AOT", "AET", "AP", "PEN"]);
const ABERTO = new Set(["NS", "TBD"]);

if (!KEY) {
  console.log("Sem a chave API_FOOTBALL_KEY. Nada foi atualizado.");
  process.exit(0);
}

let dados = {};
try { dados = JSON.parse(fs.readFileSync(OUT, "utf8")); } catch (e) { /* primeira execução */ }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
class Limite extends Error {}
const norm = (s) => String(s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const plano = (s) => norm(s).replace(/[^a-z0-9]/g, "");
const num = (x) => (x === undefined || x === null ? null : typeof x === "object" ? (x.total ?? null) : x);

const PAIS_ISO = new Map(CAMP.map((c) => [c.iso, c.code]));
const PAIS_NOME = new Map(CAMP.map((c) => [plano(c.nome.en), c.code]));
[["ivorycoast", "CIV"], ["cotedivoire", "CIV"], ["congodr", "COD"], ["drcongo", "COD"], ["capeverdeislands", "CPV"],
 ["swaziland", "SWZ"], ["saotomeandprincipe", "STP"], ["thegambia", "GAM"], ["centralafricanrep", "CTA"]]
  .forEach(([n, c]) => PAIS_NOME.set(n, c));
const JUVENIL = /\bu ?1\d|\bu ?2\d|youth|junior|reserve|\b2nd\b|second division|division 2|\bd2\b|\bb\b/;

function paisDe(l) {
  const c = l.country || {};
  if (c.code && PAIS_ISO.has(String(c.code).toUpperCase())) return PAIS_ISO.get(String(c.code).toUpperCase());
  if (PAIS_NOME.has(plano(c.name))) return PAIS_NOME.get(plano(c.name));
  const n = norm(l.name);
  if (["africa", "world", "international"].includes(plano(c.name)) && /afri|afro|\bbal\b/.test(n)) return "AFR";
  if (plano(c.name) === "africa") return "AFR";
  return null;
}

function temporadaAtual(l) {
  const s = (l.seasons || []).slice().sort((a, b) => String(a.start || a.season).localeCompare(String(b.start || b.season)));
  return s.find((x) => x.current) || s[s.length - 1] || null;
}

function rotulo(s) {
  if (typeof s.season === "string") return s.season.replace(/^(\d{4})-(\d{2})(\d{2})$/, "$1/$3");
  const a = Number(String(s.start || "").slice(0, 4)) || s.season;
  const b = Number(String(s.end || "").slice(0, 4)) || s.season;
  return a === b ? String(a) : `${a}/${String(b).slice(2)}`;
}

function linha(x) {
  const g = x.games || {};
  let pts = typeof x.points === "number" ? x.points : null;
  const pf = x.goals ? x.goals.for : (x.points && typeof x.points === "object" ? x.points.for : null);
  const pc = x.goals ? x.goals.against : (x.points && typeof x.points === "object" ? x.points.against : null);
  const sg = typeof pf === "number" && typeof pc === "number" ? pf - pc : null;
  return [x.position ?? x.rank ?? null, (x.team && x.team.name) || "", num(g.played), num(g.win), num(g.draw), num(g.lose), sg, pts];
}

function tabela(resp) {
  const grupos = new Map();
  for (const x of resp.flat(Infinity).filter((y) => y && typeof y === "object" && y.team)) {
    const nome = String((x.group && (x.group.name || x.group)) || x.stage || "").replace(/^.*:\s*/, "");
    if (!grupos.has(nome)) grupos.set(nome, []);
    grupos.get(nome).push(linha(x));
  }
  const out = [...grupos.entries()].map(([grupo, linhas]) => ({ grupo, linhas: linhas.sort((a, b) => (a[0] ?? 99) - (b[0] ?? 99)) }));
  if (out.length === 1) out[0].grupo = "";
  return out.filter((g) => g.linhas.length);
}

async function atualizarEsporte(e) {
  let usadas = 0;
  const api = async (endpoint, params = {}) => {
    if (usadas >= LIMITE) throw new Limite();
    if (usadas > 0) await sleep(PAUSA_MS);
    usadas++;
    const r = await fetch(`${HOST[e.api]}${endpoint}?${new URLSearchParams(params)}`, { headers: { "x-apisports-key": KEY } });
    if (!r.ok) throw new Error(`a API respondeu HTTP ${r.status} em ${endpoint}`);
    const j = await r.json();
    const erros = j.errors ? (Array.isArray(j.errors) ? j.errors : Object.values(j.errors)) : [];
    if (erros.length) throw new Error(erros.join(" | "));
    return j.response || [];
  };

  const atual = dados[e.id] || { competicoes: {} };
  let todas;
  try {
    todas = await api("/leagues");
  } catch (err) {
    console.log(`[${e.id}] não consegui listar as competições: ${err.message}`);
    return;
  }
  const africanas = todas
    .map((l) => ({ l, pais: paisDe(l), temp: temporadaAtual(l) }))
    .filter((x) => x.pais && x.temp && !JUVENIL.test(norm(x.l.name)));
  console.log(`[${e.id}] a API tem ${africanas.length} competições africanas.`);

  const chaves = new Set(africanas.map((x) => String(x.l.id)));
  for (const k of Object.keys(atual.competicoes)) if (!chaves.has(k)) delete atual.competicoes[k];

  // Continentais primeiro; depois as que estão há mais tempo sem atualização.
  const fila = africanas.sort((a, b) => (a.pais === "AFR" ? 0 : 1) - (b.pais === "AFR" ? 0 : 1)
    || String((atual.competicoes[a.l.id] || {}).atualizado || "").localeCompare(String((atual.competicoes[b.l.id] || {}).atualizado || "")));

  let feitos = 0;
  for (const { l, pais, temp } of fila) {
    try {
      const st = await api("/standings", { league: l.id, season: temp.season });
      const jogos = await api("/games", { league: l.id, season: temp.season });
      const agora = Date.now();
      const jogo = (g) => ({ d: g.date, c: g.teams.home.name, f: g.teams.away.name, gc: num(g.scores && g.scores.home), gf: num(g.scores && g.scores.away) });
      const ts = (g) => g.timestamp || Date.parse(g.date) / 1000;
      atual.competicoes[l.id] = {
        apiId: l.id, nome: l.name, tipo: l.type || "", pais, temporada: rotulo(temp),
        tabela: tabela(st),
        resultados: jogos.filter((g) => FIM.has(g.status && g.status.short)).sort((a, b) => ts(b) - ts(a)).slice(0, 10).map(jogo),
        proximos: jogos.filter((g) => ABERTO.has(g.status && g.status.short) && ts(g) * 1000 >= agora - 3 * 3600e3).sort((a, b) => ts(a) - ts(b)).slice(0, 10).map(jogo),
        atualizado: new Date().toISOString()
      };
      feitos++;
      console.log(`[${e.id}] ok  ${pais}  ${l.name}`);
    } catch (err) {
      if (err instanceof Limite) { console.log(`[${e.id}] limite de ${LIMITE} consultas atingido; o resto fica para amanhã.`); break; }
      console.log(`[${e.id}] erro ${pais}  ${l.name}: ${err.message}`);
    }
  }
  atual.geradoEm = new Date().toISOString();
  dados[e.id] = atual;
  console.log(`[${e.id}] atualizadas: ${feitos}. Consultas usadas: ${usadas}.`);
}

(async () => {
  for (const e of ESPORTES.filter((x) => x.api && HOST[x.api])) await atualizarEsporte(e);
  fs.writeFileSync(OUT, JSON.stringify(dados, null, 1) + "\n");
})();
