/* História, títulos e recordes do futebol africano, com as fontes de cada bloco.
   Seleções e países vão pelo código de três letras (o mesmo de conteudo/campeonatos.js): o site escreve o nome
   em cada idioma e põe a bandeira. Clubes vão pelo nome, com o código do país.
   Conferido em 13/11/2026. Ao atualizar um bloco, troque também a data em "ate" ou "conferido". */
"use strict";

const W = (pag) => [`Wikipedia (${decodeURIComponent(pag).replace(/_/g, " ")})`, "https://en.wikipedia.org/wiki/" + pag];

module.exports = {
  conferido: "2026-11-13",

  /* Eliminatórias da CAN 2027: [seleção, jogos, vitórias, empates, derrotas, saldo, pontos] */
  canq: {
    ate: "2026-11-12",
    sedes: ["KEN", "UGA", "TAN"],
    fontes: [
      ["Sport News Africa", "https://sportnewsafrica.com/en/fixtures/afcon-2027-qualifiers/table/"],
      ["Africa Soccer", "https://africasoccer.com/afcon-2027-qualifiers-check-out-full-group-standings/"],
      ["CAF", "https://www.cafonline.com/afcon2025/news/crucial-matchdays-3-and-4-to-shape-totalenergies-caf-afcon-pamoja-2027-qualification-race/"]
    ],
    grupos: [
      ["A", [["MAR", 2, 2, 0, 0, 4, 6], ["GAB", 2, 1, 0, 1, 0, 3], ["NIG", 2, 1, 0, 1, -1, 3], ["LES", 2, 0, 0, 2, -3, 0]]],
      ["B", [["EGY", 2, 1, 1, 0, 5, 4], ["ANG", 2, 1, 1, 0, 2, 4], ["MWI", 2, 1, 0, 1, -1, 3], ["SSD", 2, 0, 0, 2, -6, 0]]],
      ["C", [["CIV", 3, 3, 0, 0, 5, 9], ["GAM", 3, 2, 0, 1, 2, 6], ["GHA", 3, 1, 0, 2, -2, 3], ["SOM", 3, 0, 0, 3, -5, 0]]],
      ["D", [["RSA", 2, 2, 0, 0, 6, 6], ["GUI", 3, 2, 0, 1, 1, 6], ["KEN", 2, 0, 1, 1, -1, 1], ["ERI", 3, 0, 1, 2, -6, 1]]],
      ["E", [["COD", 3, 3, 0, 0, 5, 9], ["ZIM", 3, 1, 1, 1, 0, 4], ["EQG", 3, 1, 1, 1, -1, 4], ["SLE", 3, 0, 0, 3, -4, 0]]],
      ["F", [["BEN", 3, 2, 1, 0, 4, 7], ["BFA", 2, 1, 1, 0, 1, 4], ["MTN", 2, 1, 0, 1, 1, 3], ["CTA", 3, 0, 0, 3, -6, 0]]],
      ["G", [["CMR", 3, 2, 1, 0, 4, 7], ["COM", 2, 1, 0, 1, -1, 3], ["NAM", 3, 1, 0, 2, -2, 3], ["CGO", 2, 0, 1, 1, -1, 1]]],
      ["H", [["UGA", 2, 1, 1, 0, 1, 4], ["BOT", 2, 0, 2, 0, 0, 2], ["TUN", 2, 0, 2, 0, 0, 2], ["LBA", 2, 0, 1, 1, -1, 1]]],
      ["I", [["ALG", 2, 1, 1, 0, 2, 4], ["ZAM", 2, 1, 0, 1, 0, 3], ["TOG", 2, 1, 0, 1, -1, 3], ["BDI", 2, 0, 1, 1, -1, 1]]],
      ["J", [["SEN", 3, 2, 1, 0, 4, 7], ["MOZ", 2, 1, 1, 0, 3, 4], ["SDN", 3, 1, 0, 2, -5, 3], ["ETH", 2, 0, 0, 2, -2, 0]]],
      ["K", [["RWA", 2, 2, 0, 0, 3, 6], ["MLI", 2, 2, 0, 0, 3, 6], ["CPV", 2, 0, 0, 2, -3, 0], ["LBR", 2, 0, 0, 2, -3, 0]]],
      ["L", [["GNB", 3, 2, 1, 0, 5, 7], ["NGA", 2, 1, 0, 1, -2, 3], ["MAD", 3, 0, 2, 1, -1, 2], ["TAN", 2, 0, 1, 1, -2, 1]]]
    ]
  },

  /* CAN: todas as finais. [ano, sedes, campeão, placar, vice]; placar: { p, pr (prorrogação), pen, extra (jogo extra), tu (turno único), nota } */
  canFinais: [
    [1957, ["SDN"], "EGY", { p: "4–0" }, "ETH"],
    [1959, ["EGY"], "EGY", { tu: true }, "SDN"],
    [1962, ["ETH"], "ETH", { p: "4–2", pr: true }, "EGY"],
    [1963, ["GHA"], "GHA", { p: "3–0" }, "SDN"],
    [1965, ["TUN"], "GHA", { p: "3–2", pr: true }, "TUN"],
    [1968, ["ETH"], "COD", { p: "1–0" }, "GHA"],
    [1970, ["SDN"], "SDN", { p: "1–0" }, "GHA"],
    [1972, ["CMR"], "CGO", { p: "3–2" }, "MLI"],
    [1974, ["EGY"], "COD", { p: "2–2", pr: true, extra: "2–0" }, "ZAM"],
    [1976, ["ETH"], "MAR", { tu: true }, "GUI"],
    [1978, ["GHA"], "GHA", { p: "2–0" }, "UGA"],
    [1980, ["NGA"], "NGA", { p: "3–0" }, "ALG"],
    [1982, ["LBA"], "GHA", { p: "1–1", pen: "7–6" }, "LBA"],
    [1984, ["CIV"], "CMR", { p: "3–1" }, "NGA"],
    [1986, ["EGY"], "EGY", { p: "0–0", pen: "5–4" }, "CMR"],
    [1988, ["MAR"], "CMR", { p: "1–0" }, "NGA"],
    [1990, ["ALG"], "ALG", { p: "1–0" }, "NGA"],
    [1992, ["SEN"], "CIV", { p: "0–0", pen: "11–10" }, "GHA"],
    [1994, ["TUN"], "NGA", { p: "2–1" }, "ZAM"],
    [1996, ["RSA"], "RSA", { p: "2–0" }, "TUN"],
    [1998, ["BFA"], "EGY", { p: "2–0" }, "RSA"],
    [2000, ["GHA", "NGA"], "CMR", { p: "2–2", pen: "4–3" }, "NGA"],
    [2002, ["MLI"], "CMR", { p: "0–0", pen: "3–2" }, "SEN"],
    [2004, ["TUN"], "TUN", { p: "2–1" }, "MAR"],
    [2006, ["EGY"], "EGY", { p: "0–0", pen: "4–2" }, "CIV"],
    [2008, ["GHA"], "EGY", { p: "1–0" }, "CMR"],
    [2010, ["ANG"], "EGY", { p: "1–0" }, "GHA"],
    [2012, ["EQG", "GAB"], "ZAM", { p: "0–0", pen: "8–7" }, "CIV"],
    [2013, ["RSA"], "NGA", { p: "1–0" }, "BFA"],
    [2015, ["EQG"], "CIV", { p: "0–0", pen: "9–8" }, "GHA"],
    [2017, ["GAB"], "CMR", { p: "2–1" }, "EGY"],
    [2019, ["EGY"], "ALG", { p: "1–0" }, "SEN"],
    [2021, ["CMR"], "SEN", { p: "0–0", pen: "4–2" }, "EGY"],
    [2023, ["CIV"], "CIV", { p: "2–1" }, "NGA"],
    [2025, ["MAR"], "MAR", { p: "3–0", nota: true }, "SEN"]
  ],
  /* [seleção, títulos, vices] */
  canTitulos: [["EGY", 7, 3], ["CMR", 5, 2], ["GHA", 4, 5], ["NGA", 3, 5], ["CIV", 3, 2], ["ALG", 2, 1], ["MAR", 2, 1], ["COD", 2, 0],
    ["SEN", 1, 3], ["ZAM", 1, 2], ["TUN", 1, 2], ["SDN", 1, 2], ["RSA", 1, 1], ["ETH", 1, 1], ["CGO", 1, 0]],
  canNotas: {
    final2025: {
      pt: "Final de 2025: em campo, o Senegal venceu por 1 a 0. Em março de 2026, a Comissão de Apelação da CAF deu a vitória a Marrocos por 3 a 0, porque a seleção senegalesa deixou o campo durante a final. O Senegal recorreu à CAS.",
      fr: "Finale 2025 : sur le terrain, le Sénégal s'est imposé 1-0. En mars 2026, le Jury d'appel de la CAF a donné la victoire au Maroc sur tapis vert (3-0), car l'équipe sénégalaise avait quitté la pelouse pendant la finale. Le Sénégal a saisi le TAS.",
      en: "2025 final: Senegal won 1–0 on the pitch. In March 2026 the CAF Appeal Board awarded the match 3–0 to Morocco because the Senegal team left the pitch during the final. Senegal has appealed to CAS.",
      ar: "نهائي 2025: فاز السنغال في الملعب 1-0. وفي مارس 2026 منحت لجنة الاستئناف في الكاف الفوز للمغرب 3-0 لأن منتخب السنغال غادر الملعب خلال النهائي. واستأنف السنغال أمام محكمة التحكيم الرياضي."
    },
    nomes: {
      pt: "O Egito venceu em 1959 com o nome de República Árabe Unida. A RD Congo venceu em 1968 como Congo-Kinshasa e em 1974 como Zaire.",
      fr: "L'Égypte a gagné en 1959 sous le nom de République arabe unie. La RD Congo a gagné en 1968 sous le nom de Congo-Kinshasa et en 1974 sous celui de Zaïre.",
      en: "Egypt won in 1959 as the United Arab Republic. DR Congo won in 1968 as Congo-Kinshasa and in 1974 as Zaire.",
      ar: "فازت مصر عام 1959 باسم الجمهورية العربية المتحدة، وفازت الكونغو الديمقراطية عام 1968 باسم الكونغو كينشاسا وعام 1974 باسم زائير."
    }
  },
  canRecordes: {
    artilheiro: ["Samuel Eto'o", "CMR", 18],
    maisTitulos: [["Essam El Hadary", "EGY"], ["Ahmed Hassan", "EGY"], 4],
    maisJogos: [["Rigobert Song", "CMR"], ["André Ayew", "GHA"], 36]
  },
  canFontes: [W("Africa_Cup_of_Nations"), W("Africa_Cup_of_Nations_records_and_statistics"),
    ["beIN Sports", "https://www.beinsports.com/en-us/soccer/africa-cup-of-nations/articles/caf-appeals-board-declares-morocco-afcon-2025-champions-2026-03-17"]],

  /* Liga dos Campeões da CAF: [clube, país, títulos, anos] */
  clClubes: [
    ["Al Ahly", "EGY", 12, [1982, 1987, 2001, 2005, 2006, 2008, 2012, 2013, 2020, 2021, 2023, 2024]],
    ["Zamalek", "EGY", 5, [1984, 1986, 1993, 1996, 2002]],
    ["TP Mazembe", "COD", 5, [1967, 1968, 2009, 2010, 2015]],
    ["Espérance de Tunis", "TUN", 4, [1994, 2011, 2018, 2019]],
    ["Wydad AC", "MAR", 3, [1992, 2017, 2022]],
    ["Hafia FC", "GUI", 3, [1972, 1975, 1977]],
    ["Raja CA", "MAR", 3, [1989, 1997, 1999]],
    ["Canon Yaoundé", "CMR", 3, [1971, 1978, 1980]],
    ["Asante Kotoko", "GHA", 2, [1970, 1983]],
    ["Mamelodi Sundowns", "RSA", 2, [2016, 2026]],
    ["JS Kabylie", "ALG", 2, [1981, 1990]],
    ["ES Sétif", "ALG", 2, [1988, 2014]],
    ["Enyimba", "NGA", 2, [2003, 2004]],
    ["Vita Club", "COD", 1, [1973]],
    ["Hearts of Oak", "GHA", 1, [2000]],
    ["Étoile du Sahel", "TUN", 1, [2007]],
    ["Ismaily", "EGY", 1, [1969]],
    ["AS FAR", "MAR", 1, [1985]],
    ["Orlando Pirates", "RSA", 1, [1995]],
    ["ASEC Mimosas", "CIV", 1, [1998]],
    ["Oryx Douala", "CMR", 1, [1965]],
    ["Stade d'Abidjan", "CIV", 1, [1966]],
    ["CARA Brazzaville", "CGO", 1, [1974]],
    ["MC Alger", "ALG", 1, [1976]],
    ["Union Douala", "CMR", 1, [1979]],
    ["Club Africain", "TUN", 1, [1991]],
    ["Pyramids", "EGY", 1, [2025]]
  ],
  clPaises: [["EGY", 19], ["MAR", 7], ["TUN", 6], ["COD", 6], ["ALG", 5], ["CMR", 5], ["GHA", 3], ["RSA", 3], ["GUI", 3], ["NGA", 2], ["CIV", 2], ["CGO", 1]],
  /* [temporada, campeão, país, vice, país] */
  clFinais: [[2026, "Mamelodi Sundowns", "RSA", "AS FAR", "MAR"], [2025, "Pyramids", "EGY", "Mamelodi Sundowns", "RSA"], [2024, "Al Ahly", "EGY", "Espérance de Tunis", "TUN"],
    [2023, "Al Ahly", "EGY", "Wydad AC", "MAR"], [2022, "Wydad AC", "MAR", "Al Ahly", "EGY"]],
  clFontes: [W("CAF_Champions_League")],

  /* Copa das Confederações da CAF */
  ccClubes: [
    ["RS Berkane", "MAR", 3, [2020, 2022, 2025]],
    ["CS Sfaxien", "TUN", 3, [2007, 2008, 2013]],
    ["Étoile du Sahel", "TUN", 2, [2006, 2015]],
    ["TP Mazembe", "COD", 2, [2016, 2017]],
    ["Zamalek", "EGY", 2, [2019, 2024]],
    ["Raja CA", "MAR", 2, [2018, 2021]],
    ["USM Alger", "ALG", 2, [2023, 2026]],
    ["AS FAR", "MAR", 1, [2005]],
    ["Hearts of Oak", "GHA", 1, [2004]],
    ["Stade Malien", "MLI", 1, [2009]],
    ["FUS Rabat", "MAR", 1, [2010]],
    ["MAS Fès", "MAR", 1, [2011]],
    ["AC Léopards", "CGO", 1, [2012]],
    ["Al Ahly", "EGY", 1, [2014]]
  ],
  ccPaises: [["MAR", 8], ["TUN", 5], ["EGY", 3], ["ALG", 2], ["COD", 2], ["GHA", 1], ["MLI", 1], ["CGO", 1]],
  ccFinais: [[2026, "USM Alger", "ALG", "Zamalek", "EGY"], [2025, "RS Berkane", "MAR", "Simba", "TAN"], [2024, "Zamalek", "EGY", "RS Berkane", "MAR"],
    [2023, "USM Alger", "ALG", "Young Africans", "TAN"], [2022, "RS Berkane", "MAR", "Orlando Pirates", "RSA"]],
  ccFontes: [W("CAF_Confederation_Cup")],

  /* CAN Feminina: finais desde 1998 e títulos */
  canfFinais: [
    [1998, ["NGA"], "NGA", { p: "2–0" }, "GHA"],
    [2000, ["RSA"], "NGA", { p: "2–0", interrompida: true }, "RSA"],
    [2002, ["NGA"], "NGA", { p: "2–0" }, "GHA"],
    [2004, ["RSA"], "NGA", { p: "5–0" }, "CMR"],
    [2006, ["NGA"], "NGA", { p: "1–0" }, "GHA"],
    [2008, ["EQG"], "EQG", { p: "2–1" }, "RSA"],
    [2010, ["RSA"], "NGA", { p: "4–2" }, "EQG"],
    [2012, ["EQG"], "EQG", { p: "4–0" }, "RSA"],
    [2014, ["NAM"], "NGA", { p: "2–0" }, "CMR"],
    [2016, ["CMR"], "NGA", { p: "1–0" }, "CMR"],
    [2018, ["GHA"], "NGA", { p: "0–0", pen: "4–3" }, "RSA"],
    [2022, ["MAR"], "RSA", { p: "2–1" }, "MAR"],
    [2024, ["MAR"], "NGA", { p: "3–2" }, "MAR"],
    [2026, ["MAR"], "CMR", { p: "3–0" }, "MWI"]
  ],
  canfTitulos: [["NGA", 10], ["EQG", 2], ["RSA", 1], ["CMR", 1]],
  canfNota: {
    pt: "A conta de 10 títulos da Nigéria, usada pela CAF e pela imprensa, começa em 1998. A Nigéria também venceu as edições de 1991 e 1995, disputadas em jogos de ida e volta. A edição de 2020 foi cancelada.",
    fr: "Le total de 10 titres du Nigeria, utilisé par la CAF et la presse, commence en 1998. Le Nigeria a aussi remporté les éditions 1991 et 1995, disputées en matchs aller-retour. L'édition 2020 a été annulée.",
    en: "Nigeria's count of 10 titles, used by CAF and the press, starts in 1998. Nigeria also won the 1991 and 1995 editions, played over two legs. The 2020 edition was cancelled.",
    ar: "يبدأ احتساب ألقاب نيجيريا العشرة، المعتمد لدى الكاف والصحافة، من عام 1998. وفازت نيجيريا أيضاً بنسختي 1991 و1995 اللتين أقيمتا بنظام الذهاب والإياب. وأُلغيت نسخة 2020."
  },
  canfFontes: [W("Women%27s_Africa_Cup_of_Nations"), ["Graphic Online", "https://www.graphic.com.gh/sports/sports-news/nigeria-win-10th-wafcon-title-after-stunning-comeback-against-morocco.html"]],

  /* Liga dos Campeões Feminina: [temporada, campeão, país, placar, vice, país] */
  clfFinais: [[2025, "AS FAR", "MAR", "2–1", "ASEC Mimosas", "CIV"], [2024, "TP Mazembe", "COD", "1–0", "AS FAR", "MAR"], [2023, "Mamelodi Sundowns", "RSA", "3–0", "SC Casablanca", "MAR"],
    [2022, "AS FAR", "MAR", "4–0", "Mamelodi Sundowns", "RSA"], [2021, "Mamelodi Sundowns", "RSA", "2–0", "Hasaacas Ladies", "GHA"]],
  clfFontes: [W("CAF_Women%27s_Champions_League")],

  /* Jogador e Jogadora Africanos do Ano (CAF): [ano, nome, seleção, clube] */
  potyM: [
    [2025, "Achraf Hakimi", "MAR", "Paris Saint-Germain"], [2024, "Ademola Lookman", "NGA", "Atalanta"], [2023, "Victor Osimhen", "NGA", "Napoli"],
    [2022, "Sadio Mané", "SEN", "Bayern de Munique"], [2019, "Sadio Mané", "SEN", "Liverpool"], [2018, "Mohamed Salah", "EGY", "Liverpool"],
    [2017, "Mohamed Salah", "EGY", "Liverpool"], [2016, "Riyad Mahrez", "ALG", "Leicester City"], [2015, "Pierre-Emerick Aubameyang", "GAB", "Borussia Dortmund"],
    [2014, "Yaya Touré", "CIV", "Manchester City"], [2013, "Yaya Touré", "CIV", "Manchester City"], [2012, "Yaya Touré", "CIV", "Manchester City"],
    [2011, "Yaya Touré", "CIV", "Manchester City"], [2010, "Samuel Eto'o", "CMR", "Inter de Milão"], [2009, "Didier Drogba", "CIV", "Chelsea"],
    [2008, "Emmanuel Adebayor", "TOG", "Arsenal"], [2007, "Frédéric Kanouté", "MLI", "Sevilla"], [2006, "Didier Drogba", "CIV", "Chelsea"],
    [2005, "Samuel Eto'o", "CMR", "Barcelona"], [2004, "Samuel Eto'o", "CMR", "Barcelona"], [2003, "Samuel Eto'o", "CMR", "Mallorca"],
    [2002, "El Hadji Diouf", "SEN", "Liverpool"], [2001, "El Hadji Diouf", "SEN", "Lens"], [2000, "Patrick Mboma", "CMR", "Parma"],
    [1999, "Nwankwo Kanu", "NGA", "Arsenal"], [1998, "Mustapha Hadji", "MAR", "Deportivo La Coruña"], [1997, "Victor Ikpeba", "NGA", "Monaco"],
    [1996, "Nwankwo Kanu", "NGA", "Inter de Milão"], [1995, "George Weah", "LBR", "Milan"], [1994, "Emmanuel Amunike", "NGA", "Sporting"],
    [1993, "Rashidi Yekini", "NGA", "Vitória de Setúbal"], [1992, "Abedi Pelé", "GHA", "Olympique de Marseille"]
  ],
  potyF: [
    [2025, "Ghizlane Chebbak", "MAR"], [2024, "Barbra Banda", "ZAM"], [2023, "Asisat Oshoala", "NGA"], [2022, "Asisat Oshoala", "NGA"],
    [2019, "Asisat Oshoala", "NGA"], [2018, "Thembi Kgatlana", "RSA"], [2017, "Asisat Oshoala", "NGA"], [2016, "Asisat Oshoala", "NGA"],
    [2015, "Gaëlle Enganamouit", "CMR"], [2014, "Asisat Oshoala", "NGA"], [2012, "Genoveva Añonma", "EQG"], [2011, "Perpetua Nkwocha", "NGA"],
    [2010, "Perpetua Nkwocha", "NGA"], [2008, "Noko Matlou", "RSA"], [2007, "Cynthia Uwak", "NGA"], [2006, "Cynthia Uwak", "NGA"],
    [2005, "Perpetua Nkwocha", "NGA"], [2004, "Perpetua Nkwocha", "NGA"], [2003, "Adjoa Bayor", "GHA"], [2002, "Alberta Sackey", "GHA"], [2001, "Mercy Akide", "NGA"]
  ],
  potyFontes: [W("African_Footballer_of_the_Year"), W("African_Women%27s_Footballer_of_the_Year")]
};
