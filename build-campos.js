/* Desenhos das capas: o campo, a quadra ou a pista de cada esporte, vistos de cima.
   O build.js grava um arquivo .svg por esporte em _site/assets/campos/, e o style.css usa cada um como fundo.
   Para mudar a cor de um campo, troque os valores aqui. */
"use strict";
const fs = require("fs");
const path = require("path");

const svg = (w, h, corpo) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice">${corpo}</svg>`;
const L = "fill='none' stroke='#fff' stroke-opacity='.78' stroke-linecap='round'";
const faixas = (w, h, n, a, b, vertical = true) => Array.from({ length: n }, (_, i) => vertical
  ? `<rect x='${(i * w) / n}' width='${w / n + 0.5}' height='${h}' fill='${i % 2 ? b : a}'/>`
  : `<rect y='${(i * h) / n}' width='${w}' height='${h / n + 0.5}' fill='${i % 2 ? b : a}'/>`).join("");
const espelho = (w, corpo) => `${corpo}<g transform='translate(${w} 0) scale(-1 1)'>${corpo}</g>`;

const CAMPOS = {
  futebol() {
    const meio = `<rect x='40' y='138.5' width='165' height='403' ${L} stroke-width='4'/>
      <rect x='40' y='248.5' width='55' height='183' ${L} stroke-width='4'/>
      <circle cx='150' cy='340' r='5' fill='#fff' fill-opacity='.78'/>
      <path d='M205 266.9A91.5 91.5 0 0 1 205 413.1' ${L} stroke-width='4'/>
      <rect x='22' y='303' width='18' height='74' ${L} stroke-width='3'/>
      <path d='M40 40A10 10 0 0 0 50 30M40 640A10 10 0 0 1 50 650' ${L} stroke-width='3'/>`;
    return svg(1050, 680, `${faixas(1050, 680, 12, "#33893d", "#2c7a35")}
      <rect x='40' y='30' width='970' height='620' ${L} stroke-width='4'/>
      <line x1='525' y1='30' x2='525' y2='650' ${L} stroke-width='4'/>
      <circle cx='525' cy='340' r='91.5' ${L} stroke-width='4'/>
      <circle cx='525' cy='340' r='5' fill='#fff' fill-opacity='.78'/>${espelho(1050, meio)}`);
  },
  basquete() {
    const tabuas = Array.from({ length: 30 }, (_, i) => `<rect y='${i * 30}' width='1500' height='30.5' fill='${["#c98a4f", "#c1814a", "#cf9156"][i % 3]}'/>`).join("");
    const lado = `<rect x='50' y='302.5' width='290' height='245' fill='#9c4a24' fill-opacity='.85'/>
      <rect x='50' y='302.5' width='290' height='245' ${L} stroke-width='5'/>
      <circle cx='340' cy='425' r='90' ${L} stroke-width='5'/>
      <path d='M50 95H199.5A337.5 337.5 0 0 1 199.5 755H50' ${L} stroke-width='5'/>
      <line x1='110' y1='395' x2='110' y2='455' stroke='#fff' stroke-width='6' stroke-opacity='.9'/>
      <circle cx='128.75' cy='425' r='11' fill='none' stroke='#e8571e' stroke-width='5'/>`;
    return svg(1500, 850, `${tabuas}<rect x='50' y='50' width='1400' height='750' ${L} stroke-width='5'/>
      <line x1='750' y1='50' x2='750' y2='800' ${L} stroke-width='5'/>
      <circle cx='750' cy='425' r='90' fill='#9c4a24' fill-opacity='.85' stroke='#fff' stroke-opacity='.78' stroke-width='5'/>${espelho(1500, lado)}`);
  },
  handebol() {
    const lado = `<path d='M40 115A180 180 0 0 1 220 295L220 385A180 180 0 0 1 40 565Z' fill='#e07a2e'/>
      <path d='M40 115A180 180 0 0 1 220 295L220 385A180 180 0 0 1 40 565' ${L} stroke-width='4'/>
      <path d='M128.7 40A270 270 0 0 1 310 295L310 385A270 270 0 0 1 128.7 640' ${L} stroke-width='4' stroke-dasharray='18 14'/>
      <line x1='250' y1='325' x2='250' y2='355' ${L} stroke-width='4'/>
      <rect x='18' y='295' width='22' height='90' ${L} stroke-width='3'/>`;
    return svg(1280, 680, `<rect width='1280' height='680' fill='#1f5590'/><rect x='40' y='40' width='1200' height='600' fill='#2d6aa8'/>${espelho(1280, lado)}
      <rect x='40' y='40' width='1200' height='600' ${L} stroke-width='4'/><line x1='640' y1='40' x2='640' y2='640' ${L} stroke-width='4'/>`);
  },
  volei() {
    return svg(1100, 650, `<rect width='1100' height='650' fill='#2f6db5'/><rect x='100' y='100' width='900' height='450' fill='#e0853a'/>
      <rect x='100' y='100' width='900' height='450' ${L} stroke-width='5'/>
      <line x1='400' y1='100' x2='400' y2='550' ${L} stroke-width='4'/><line x1='700' y1='100' x2='700' y2='550' ${L} stroke-width='4'/>
      <line x1='550' y1='60' x2='550' y2='590' stroke='#1b1f24' stroke-width='9'/><line x1='550' y1='60' x2='550' y2='590' stroke='#fff' stroke-opacity='.9' stroke-width='3'/>
      <circle cx='550' cy='60' r='12' fill='#1b1f24'/><circle cx='550' cy='590' r='12' fill='#1b1f24'/>`);
  },
  rugbi() {
    const lado = `<line x1='140' y1='40' x2='140' y2='740' ${L} stroke-width='4'/><line x1='360' y1='40' x2='360' y2='740' ${L} stroke-width='4'/>
      <line x1='540' y1='40' x2='540' y2='740' ${L} stroke-width='4' stroke-dasharray='20 16'/>
      <line x1='140' y1='355' x2='140' y2='425' stroke='#f2f2f2' stroke-width='10'/>
      <circle cx='140' cy='358' r='9' fill='#fff'/><circle cx='140' cy='422' r='9' fill='#fff'/>`;
    return svg(1280, 780, `${faixas(1280, 780, 12, "#33893d", "#2c7a35")}<rect x='40' y='40' width='1200' height='700' ${L} stroke-width='4'/>
      <line x1='640' y1='40' x2='640' y2='740' ${L} stroke-width='4'/>${espelho(1280, lado)}`);
  },
  atletismo() {
    const est = (r) => `M400 ${410 - r}H900A${r} ${r} 0 0 1 900 ${410 + r}H400A${r} ${r} 0 0 1 400 ${410 - r}Z`;
    const pistas = Array.from({ length: 9 }, (_, i) => `<path d='${est(220 + i * 24)}' ${L} stroke-width='3'/>`).join("");
    return svg(1300, 820, `<rect width='1300' height='820' fill='#2a7032'/><path d='${est(436)}' fill='#b8452e'/><path d='${est(220)}' fill='#2f7a37'/>${pistas}
      <line x1='650' y1='190' x2='650' y2='-26' stroke='#fff' stroke-opacity='.85' stroke-width='5'/>`);
  },
  boxe() {
    const cordas = [[0, "#d23b3b"], [22, "#f2f2f2"], [44, "#2f5fb3"]].map(([d, c]) => `<rect x='${355 + d}' y='${60 + d}' width='${540 - 2 * d}' height='${540 - 2 * d}' fill='none' stroke='${c}' stroke-width='8'/>`).join("");
    return svg(1250, 660, `<rect width='1250' height='660' fill='#141a22'/><rect x='325' y='30' width='600' height='600' fill='#1f3d6b'/><rect x='355' y='60' width='540' height='540' fill='#2a4f86'/>${cordas}
      <circle cx='355' cy='60' r='20' fill='#d23b3b'/><circle cx='895' cy='600' r='20' fill='#2f5fb3'/><circle cx='895' cy='60' r='20' fill='#f2f2f2'/><circle cx='355' cy='600' r='20' fill='#f2f2f2'/>`);
  },
  luta() {
    return svg(1250, 700, `<rect width='1250' height='700' fill='#24508f'/><circle cx='625' cy='350' r='310' fill='#c8402f'/><circle cx='625' cy='350' r='262' fill='#e7b03a'/>
      <circle cx='625' cy='350' r='262' ${L} stroke-width='4'/><circle cx='625' cy='350' r='36' ${L} stroke-width='6'/>`);
  },
  judo() {
    const tatames = Array.from({ length: 10 }, (_, i) => `<line x1='${325 + i * 60}' y1='50' x2='${325 + i * 60}' y2='650' stroke='#000' stroke-opacity='.09' stroke-width='3'/>`).join("");
    return svg(1250, 700, `<rect width='1250' height='700' fill='#e2c44a'/><rect x='325' y='50' width='600' height='600' fill='#2c5fa8'/>${tatames}
      <rect x='325' y='50' width='600' height='600' fill='none' stroke='#c8402f' stroke-width='10'/>
      <line x1='575' y1='350' x2='595' y2='350' stroke='#fff' stroke-width='8'/><line x1='655' y1='350' x2='675' y2='350' stroke='#fff' stroke-width='8'/>`);
  },
  carate() {
    return svg(1250, 700, `<rect width='1250' height='700' fill='#c8402f'/><rect x='325' y='50' width='600' height='600' fill='#2c5fa8'/>
      <rect x='325' y='50' width='600' height='600' ${L} stroke-width='4'/>
      <line x1='565' y1='320' x2='565' y2='380' stroke='#fff' stroke-width='8'/><line x1='685' y1='320' x2='685' y2='380' stroke='#fff' stroke-width='8'/>`);
  },
  taekwondo() {
    const oct = (c, r) => Array.from({ length: 8 }, (_, i) => { const a = Math.PI / 8 + (i * Math.PI) / 4; return `${(625 + r * Math.cos(a)).toFixed(1)},${(c + r * Math.sin(a)).toFixed(1)}`; }).join(" ");
    return svg(1250, 700, `<rect width='1250' height='700' fill='#5c6670'/><polygon points='${oct(350, 325)}' fill='#2c5fa8'/><polygon points='${oct(350, 325)}' ${L} stroke-width='5'/>
      <circle cx='625' cy='350' r='8' fill='#fff'/>`);
  },
  "tenis-de-mesa"() {
    return svg(1000, 620, `<rect width='1000' height='620' fill='#7a2430'/><rect x='89' y='81.5' width='822' height='457' fill='#1d3f73'/>
      <rect x='89' y='81.5' width='822' height='457' fill='none' stroke='#fff' stroke-width='8'/><line x1='89' y1='310' x2='911' y2='310' stroke='#fff' stroke-width='3'/>
      <line x1='500' y1='60' x2='500' y2='560' stroke='#11161c' stroke-width='10'/><line x1='500' y1='60' x2='500' y2='560' stroke='#fff' stroke-opacity='.8' stroke-width='3'/>`);
  },
  tenis() {
    return svg(1150, 620, `<rect width='1150' height='620' fill='#3f7f4c'/><rect x='99.5' y='90.5' width='951' height='439' fill='#2c5f9e'/>
      <rect x='99.5' y='90.5' width='951' height='439' ${L} stroke-width='5'/>
      <line x1='99.5' y1='145.3' x2='1050.5' y2='145.3' ${L} stroke-width='4'/><line x1='99.5' y1='474.7' x2='1050.5' y2='474.7' ${L} stroke-width='4'/>
      <line x1='351.5' y1='145.3' x2='351.5' y2='474.7' ${L} stroke-width='4'/><line x1='798.5' y1='145.3' x2='798.5' y2='474.7' ${L} stroke-width='4'/>
      <line x1='351.5' y1='310' x2='798.5' y2='310' ${L} stroke-width='4'/>
      <line x1='575' y1='70' x2='575' y2='550' stroke='#11161c' stroke-width='8'/><line x1='575' y1='70' x2='575' y2='550' stroke='#fff' stroke-opacity='.85' stroke-width='3'/>`);
  },
  ciclismo() {
    const d = "M-60 640C220 600 300 360 560 330S900 140 1160 60";
    return svg(1100, 700, `<rect width='1100' height='700' fill='#6f8f4a'/><path d='${d}' fill='none' stroke='#e9e4d4' stroke-width='250'/>
      <path d='${d}' fill='none' stroke='#3a3e45' stroke-width='226'/><path d='${d}' fill='none' stroke='#f2c94c' stroke-width='5' stroke-dasharray='46 30'/>`);
  },
  criquete() {
    return svg(1200, 700, `<rect width='1200' height='700' fill='#2a7032'/><ellipse cx='600' cy='350' rx='570' ry='340' fill='#2f7a37'/>
      <ellipse cx='600' cy='350' rx='570' ry='340' ${L} stroke-width='5'/><ellipse cx='600' cy='350' rx='320' ry='200' ${L} stroke-width='3' stroke-dasharray='14 12'/>
      <rect x='450' y='326' width='300' height='48' fill='#cdb37a'/>
      <line x1='478' y1='318' x2='478' y2='382' stroke='#fff' stroke-width='4'/><line x1='722' y1='318' x2='722' y2='382' stroke='#fff' stroke-width='4'/>
      <line x1='462' y1='336' x2='462' y2='364' stroke='#fff' stroke-width='4'/><line x1='738' y1='336' x2='738' y2='364' stroke='#fff' stroke-width='4'/>`);
  }
};

module.exports = function gravarCampos(pasta) {
  fs.mkdirSync(pasta, { recursive: true });
  for (const [id, f] of Object.entries(CAMPOS)) fs.writeFileSync(path.join(pasta, id + ".svg"), f().replace(/\s*\n\s*/g, ""));
  return Object.keys(CAMPOS);
};
