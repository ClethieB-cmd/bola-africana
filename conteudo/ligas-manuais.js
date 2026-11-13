/* Campeonatos nacionais que a API-Football não cobre, preenchidos à mão a partir de uma fonte conferida.
   Só aparecem quando o robô não acha o campeonato do país na API; se a API passar a ter, ela vale mais.
   Mesmo formato de conteudo/ligas-auto.json:
     tabela: linhas [posição, time, jogos, vitórias, empates, derrotas, saldo, pontos]
     resultados: { d: data, c: time da casa, f: time de fora, gc: gols da casa, gf: gols de fora }
   Use o mesmo nome do time na tabela e nos resultados, senão o link para a página do time não aparece.
   "atualizado" é o dia em que a fonte foi conferida. */
"use strict";

module.exports = {
  /* Congo (Brazzaville). Classificação e resultados copiados da página da FECOFOOT (Saison sportive 2023 - 2024),
     conferidos em 13/11/2026: 14 clubes, 26 jogos cada, 182 jogos, gols pró = gols contra = 352.
     Nomes na página da federação -> nome usado aqui:
       Léopards -> AC Léopards; As Otôho -> AS Otôho; Inter / Inter club -> Inter Club; Jst -> JS Talangaï;
       Etoile / Étoile -> Étoile du Congo; DNS / Diables noirs -> Diables Noirs; CARA / Cara -> CARA;
       Cheminots -> AS Cheminots; V.club / V. club -> V. Club Mokanda; Kondzo / Real Kondzo -> Real Kondzo;
       BNG / As BNG -> AS BNG; AS JUK / As Juk -> AS JUK; As vegas -> AS Vegas; Nathalys -> Nathalys.
     DNS é o único nome da tabela que não aparece no calendário, e Diables noirs o único do calendário que não
     aparece na tabela: por isso DNS = Diables Noirs. Jst = JS Talangaï (Jeunesse Sportive de Talangaï). */
  CGO: {
    manual: true,
    apiNome: "Ligue 1",
    temporada: "2023/24",
    anterior: true,
    atualizado: "2026-11-13T12:00:00Z",
    fonte: ["FECOFOOT", "https://fecofoot.cg/championnat-national-l1/"],
    nota: {
      texto: {
        pt: "A temporada seguinte, de 2025, foi interrompida antes do fim e ficou sem campeão, segundo a RSSSF.",
        fr: "La saison suivante, en 2025, a été interrompue avant son terme et n'a pas désigné de champion, selon la RSSSF.",
        en: "The following season, in 2025, was abandoned before the end with no champion, according to RSSSF.",
        ar: "توقف الموسم التالي، موسم 2025، قبل نهايته دون تتويج بطل، بحسب RSSSF."
      },
      fonte: ["RSSSF", "https://rsssf.org/tablesk/kong2025.html"]
    },
    tabela: [{ grupo: "", linhas: [
      [1, "AC Léopards", 26, 15, 7, 4, 19, 52],
      [2, "AS Otôho", 26, 14, 7, 5, 20, 49],
      [3, "Inter Club", 26, 14, 7, 5, 14, 49],
      [4, "JS Talangaï", 26, 12, 5, 9, 1, 41],
      [5, "Étoile du Congo", 26, 10, 9, 7, 6, 39],
      [6, "Diables Noirs", 26, 9, 10, 7, 9, 37],
      [7, "CARA", 26, 9, 9, 8, 3, 36],
      [8, "AS Cheminots", 26, 9, 9, 8, 1, 36],
      [9, "V. Club Mokanda", 26, 10, 3, 13, -3, 33],
      [10, "Real Kondzo", 26, 8, 7, 11, -3, 31],
      [11, "AS BNG", 26, 7, 6, 13, -11, 27],
      [12, "AS JUK", 26, 5, 10, 11, -12, 25],
      [13, "AS Vegas", 26, 5, 7, 14, -19, 22],
      [14, "Nathalys", 26, 3, 8, 15, -25, 17]
    ] }],
    resultados: [
      { d: "2024-06-02T12:00:00Z", c: "AS Cheminots", f: "AC Léopards", gc: 1, gf: 0 },
      { d: "2024-06-02T12:00:00Z", c: "Inter Club", f: "AS Otôho", gc: 0, gf: 2 },
      { d: "2024-06-02T12:00:00Z", c: "Étoile du Congo", f: "AS Vegas", gc: 3, gf: 0 },
      { d: "2024-06-01T12:00:00Z", c: "AS JUK", f: "V. Club Mokanda", gc: 0, gf: 0 },
      { d: "2024-06-01T12:00:00Z", c: "CARA", f: "Nathalys", gc: 2, gf: 0 },
      { d: "2024-05-31T12:00:00Z", c: "Diables Noirs", f: "AS BNG", gc: 4, gf: 0 },
      { d: "2024-05-31T12:00:00Z", c: "JS Talangaï", f: "Real Kondzo", gc: 3, gf: 1 },
      { d: "2024-05-26T12:00:00Z", c: "AS Otôho", f: "JS Talangaï", gc: 3, gf: 0 },
      { d: "2024-05-26T12:00:00Z", c: "AC Léopards", f: "V. Club Mokanda", gc: 2, gf: 1 },
      { d: "2024-05-26T12:00:00Z", c: "AS BNG", f: "CARA", gc: 1, gf: 2 }
    ]
  }
};
