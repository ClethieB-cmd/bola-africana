/* DADOS DO SITE — textos da interface, seções, países, agenda, tabelas e ligas.
   Textos traduzíveis usam { pt, fr, en }. */
const LANGS = { pt: "pt-BR", fr: "fr-FR", en: "en-GB" };
let lang = "pt";
const setLang = (l) => { lang = l; };
const getLang = () => lang;
const L = (v) => (v && typeof v === "object" && !Array.isArray(v)) ? (v[lang] ?? v.pt) : v;

const UI = {
  langLabel: { pt: "Idioma", fr: "Langue", en: "Language" },
  home: { pt: "Início", fr: "Accueil", en: "Home" },
  logoLabel: { pt: "Bola Africana, página inicial", fr: "Bola Africana, page d'accueil", en: "Bola Africana, home page" },
  navLabel: { pt: "Seções", fr: "Rubriques", en: "Sections" },
  agenda: { pt: "Agenda", fr: "Calendrier", en: "Fixtures" },
  tables: { pt: "Tabelas", fr: "Classements", en: "Tables" },
  searchLabel: { pt: "Buscar notícias", fr: "Rechercher des articles", en: "Search news" },
  searchPh: { pt: "Buscar", fr: "Rechercher", en: "Search" },
  scoreTitle: { pt: "Placar", fr: "Scores", en: "Scores" },
  scoreSub: { pt: "rodada da semana", fr: "matchs de la semaine", en: "this week's matches" },
  scoreAria: { pt: "Placar da rodada", fr: "Scores de la journée", en: "This week's scores" },
  ft: { pt: "Encerrado", fr: "Terminé", en: "Full time" },
  ftLower: { pt: "encerrado", fr: "terminé", en: "full time" },
  tbd: { pt: "a definir", fr: "à définir", en: "TBC" },
  vs: { pt: "contra", fr: "contre", en: "against" },
  seeAll: { pt: "Ver tudo em {x}", fr: "Toute l'actu {x}", en: "More from {x}" },
  tz: { pt: "Horários no seu fuso ({tz})", fr: "Heures dans votre fuseau ({tz})", en: "Times in your time zone ({tz})" },
  fullAgenda: { pt: "Ver a agenda completa até 17/11", fr: "Voir tout le calendrier jusqu'au 17/11", en: "See all fixtures until 17 November" },
  keyDates: { pt: "Próximas datas", fr: "Dates à retenir", en: "Key dates" },
  secCan: { pt: "Eliminatórias da CAN 2027", fr: "Éliminatoires de la CAN 2027", en: "AFCON 2027 qualifiers" },
  secQual: { pt: "Quem lidera cada grupo", fr: "Qui mène chaque groupe", en: "Who leads each group" },
  allTables: { pt: "Todas as tabelas", fr: "Tous les classements", en: "All tables" },
  secFem: { pt: "Futebol feminino", fr: "Football féminin", en: "Women's football" },
  secClubs: { pt: "Clubes: Champions e Confederações", fr: "Clubs : Ligue des champions et Coupe de la Confédération", en: "Clubs: Champions League and Confederation Cup" },
  secLigas: { pt: "Ligas nacionais", fr: "Championnats nationaux", en: "Domestic leagues" },
  secSel: { pt: "Seleções e prêmios", fr: "Sélections et récompenses", en: "National teams and awards" },
  clNoteHome: { pt: "Liga dos Campeões 2026/27. A 1ª rodada vai de 27 a 29 de novembro.", fr: "Ligue des champions 2026/27. La 1re journée a lieu du 27 au 29 novembre.", en: "Champions League 2026/27. Matchday 1 runs from 27 to 29 November." },
  clNote: { pt: "Seis rodadas, de 27 de novembro de 2026 a 24 de janeiro de 2027. Os dois primeiros de cada grupo vão às quartas de final.", fr: "Six journées, du 27 novembre 2026 au 24 janvier 2027. Les deux premiers de chaque groupe vont en quarts de finale.", en: "Six matchdays, from 27 November 2026 to 24 January 2027. The top two in each group reach the quarter-finals." },
  ccNote: { pt: "No dia do sorteio, a última vaga do Grupo C ainda dependia de CR Belouizdad, AS Douanes ou Hafia.", fr: "Le jour du tirage, la dernière place du groupe C dépendait encore du CR Belouizdad, de l'AS Douanes ou de Hafia.", en: "On draw day, the last place in Group C still depended on CR Belouizdad, AS Douanes or Hafia." },
  group: { pt: "Grupo", fr: "Groupe", en: "Group" },
  tbc: { pt: "A confirmar", fr: "À confirmer", en: "TBC" },
  qGroup: { pt: "Grupo", fr: "Groupe", en: "Group" },
  qLeader: { pt: "Líder(es) após 2 rodadas", fr: "En tête après 2 journées", en: "Leader(s) after 2 matchdays" },
  qPts: { pt: "Pts", fr: "Pts", en: "Pts" },
  qNoteH: { pt: "Observação", fr: "Remarque", en: "Note" },
  qNote: { pt: "Fonte: balanço da CAF antes das rodadas 3 e 4. Onde aparece “—”, a CAF não informou a pontuação. Passam os dois primeiros de cada grupo; nos grupos D, H e L, só a melhor seleção que não é sede.", fr: "Source : bilan de la CAF avant les 3e et 4e journées. « — » signifie que la CAF n'a pas donné le nombre de points. Les deux premiers de chaque groupe se qualifient ; dans les groupes D, H et L, seule la meilleure équipe non organisatrice.", en: "Source: CAF review before matchdays 3 and 4. “—” means CAF did not give the points. The top two in each group qualify; in Groups D, H and L, only the best-placed non-host team." },
  champ: { pt: "Atual campeão:", fr: "Champion en titre :", en: "Current champion:" },
  source: { pt: "Fonte", fr: "Source", en: "Source" },
  sources: { pt: "Fontes", fr: "Sources", en: "Sources" },
  radar: { pt: "Outras ligas acompanhadas", fr: "Autres championnats suivis", en: "Other leagues we follow" },
  related: { pt: "Leia também", fr: "À lire aussi", en: "Read more" },
  notFound: { pt: "Notícia não encontrada.", fr: "Article introuvable.", en: "Story not found." },
  backHome: { pt: "Voltar para a página inicial", fr: "Retour à l'accueil", en: "Back to the home page" },
  emptyCat: { pt: "Ainda não há notícias nesta seção.", fr: "Aucun article dans cette rubrique pour l'instant.", en: "No stories in this section yet." },
  searchTitle: { pt: "Busca", fr: "Recherche", en: "Search" },
  hits: { pt: "{n} resultado(s) para “{q}”.", fr: "{n} résultat(s) pour « {q} ».", en: "{n} result(s) for “{q}”." },
  noHits: { pt: "Nenhuma notícia menciona “{q}”. Tente o nome de um clube, de uma seleção ou de uma competição.", fr: "Aucun article ne mentionne « {q} ». Essayez le nom d'un club, d'une sélection ou d'une compétition.", en: "No story mentions “{q}”. Try the name of a club, a national team or a competition." },
  agendaDesc: { pt: "Jogos de 12 a 17 de novembro nas eliminatórias da CAN 2027 e a final da Liga dos Campeões Feminina.", fr: "Matchs du 12 au 17 novembre : éliminatoires de la CAN 2027 et finale de la Ligue des champions féminine.", en: "Matches from 12 to 17 November: AFCON 2027 qualifiers and the Women's Champions League final." },
  agendaNote: { pt: "O jogo Comores × Congo, da 3ª rodada do Grupo G, teve data divulgada de forma divergente pela imprensa e não aparece na lista.", fr: "Le match Comores × Congo (3e journée, groupe G) a été annoncé à des dates différentes selon les médias et n'apparaît pas dans la liste.", en: "Comoros × Congo (matchday 3, Group G) was reported with conflicting dates and is not listed." },
  tablesDesc: { pt: "Grupos das competições de clubes da CAF e líderes das eliminatórias da CAN 2027.", fr: "Groupes des compétitions de clubs de la CAF et leaders des éliminatoires de la CAN 2027.", en: "Groups in CAF club competitions and AFCON 2027 qualifying leaders." },
  news: { pt: "Notícias", fr: "Actualités", en: "News" },
  leadersTitle: { pt: "Líderes dos grupos", fr: "Leaders des groupes", en: "Group leaders" },
  groupsTitle: { pt: "Grupos 2026/27", fr: "Groupes 2026/27", en: "Groups 2026/27" },
  champsTitle: { pt: "Campeões atuais", fr: "Champions en titre", en: "Current champions" },
  qualTitle: { pt: "Eliminatórias da CAN 2027", fr: "Éliminatoires de la CAN 2027", en: "AFCON 2027 qualifiers" },
  clTitle: { pt: "Liga dos Campeões 2026/27", fr: "Ligue des champions 2026/27", en: "Champions League 2026/27" },
  ccTitle: { pt: "Copa das Confederações 2026/27", fr: "Coupe de la Confédération 2026/27", en: "Confederation Cup 2026/27" },
  foot1: { pt: "Bola Africana é um protótipo de portal dedicado só ao futebol africano, masculino e feminino. Notícias atualizadas em 12 de novembro de 2026, escritas a partir das fontes linkadas em cada matéria.", fr: "Bola Africana est un prototype de site consacré uniquement au football africain, masculin et féminin. Articles mis à jour le 12 novembre 2026, rédigés à partir des sources indiquées dans chaque article.", en: "Bola Africana is a prototype news site devoted entirely to African football, men's and women's. Stories updated on 12 November 2026, written from the sources linked in each article." },
  foot2: { pt: "Horários exibidos no seu fuso horário.", fr: "Heures affichées dans votre fuseau horaire.", en: "Times shown in your time zone." }
};
const T = (k, vars = {}) => L(UI[k]).replace(/\{(\w+)\}/g, (_, v) => vars[v] ?? "");

const CATS = {
  can: { route: "can-2027",
    name: { pt: "CAN 2027", fr: "CAN 2027", en: "AFCON 2027" },
    desc: { pt: "Eliminatórias e preparação da Copa Africana de Nações PAMOJA 2027, que será disputada no Quênia, na Tanzânia e em Uganda de 19 de junho a 17 de julho de 2027.", fr: "Éliminatoires et préparation de la CAN PAMOJA 2027, qui se jouera au Kenya, en Tanzanie et en Ouganda du 19 juin au 17 juillet 2027.", en: "Qualifiers and build-up to AFCON PAMOJA 2027, to be played in Kenya, Tanzania and Uganda from 19 June to 17 July 2027." } },
  cl: { route: "liga-campeoes",
    name: { pt: "Liga dos Campeões", fr: "Ligue des champions", en: "Champions League" },
    desc: { pt: "A principal competição de clubes da CAF, temporada 2026/27. Fase de grupos de 27 de novembro a 24 de janeiro; finais em maio de 2027.", fr: "La principale compétition de clubs de la CAF, saison 2026/27. Phase de groupes du 27 novembre au 24 janvier ; finales en mai 2027.", en: "CAF's top club competition, 2026/27 season. Group stage from 27 November to 24 January; finals in May 2027." } },
  cc: { route: "confederacoes",
    name: { pt: "Copa das Confederações", fr: "Coupe de la Confédération", en: "Confederation Cup" },
    desc: { pt: "O segundo torneio de clubes da CAF, temporada 2026/27, com Al Ahly, Raja, AS FAR e clubes angolanos e moçambicanos.", fr: "La deuxième compétition de clubs de la CAF, saison 2026/27, avec Al Ahly, le Raja, l'AS FAR et des clubs angolais et mozambicains.", en: "CAF's second club competition, 2026/27 season, featuring Al Ahly, Raja, AS FAR and clubs from Angola and Mozambique." } },
  fem: { route: "feminino",
    name: { pt: "Feminino", fr: "Féminin", en: "Women" },
    desc: { pt: "Seleções e clubes do futebol feminino africano: Liga dos Campeões Feminina, CAN Feminina e prêmios.", fr: "Sélections et clubs du football féminin africain : Ligue des champions féminine, CAN féminine et récompenses.", en: "National teams and clubs in African women's football: the Women's Champions League, WAFCON and awards." } },
  ligas: { route: "ligas",
    name: { pt: "Ligas nacionais", fr: "Championnats", en: "Leagues" },
    desc: { pt: "Os campeonatos nacionais dos 54 países africanos. Destaque para os mais fortes: Egito, Marrocos, África do Sul, Argélia e Tunísia.", fr: "Les championnats nationaux des 54 pays africains. Coup de projecteur sur les plus relevés : Égypte, Maroc, Afrique du Sud, Algérie et Tunisie.", en: "The national leagues of all 54 African countries, led by the strongest: Egypt, Morocco, South Africa, Algeria and Tunisia." } },
  sel: { route: "selecoes",
    name: { pt: "Seleções", fr: "Sélections", en: "National teams" },
    desc: { pt: "Seleções africanas, prêmios da CAF e o desempenho do continente nos grandes torneios.", fr: "Les sélections africaines, les récompenses de la CAF et les performances du continent dans les grands tournois.", en: "African national teams, CAF awards and the continent's results at major tournaments." } }
};

const COUNTRY = {
  GHA: { pt: "Gana", fr: "Ghana", en: "Ghana" },
  SOM: { pt: "Somália", fr: "Somalie", en: "Somalia" },
  COD: { pt: "RD Congo", fr: "RD Congo", en: "DR Congo" },
  SLE: { pt: "Serra Leoa", fr: "Sierra Leone", en: "Sierra Leone" },
  SEN: { pt: "Senegal", fr: "Sénégal", en: "Senegal" },
  SDN: { pt: "Sudão", fr: "Soudan", en: "Sudan" },
  CIV: { pt: "Costa do Marfim", fr: "Côte d'Ivoire", en: "Côte d'Ivoire" },
  GAM: { pt: "Gâmbia", fr: "Gambie", en: "Gambia" },
  CMR: { pt: "Camarões", fr: "Cameroun", en: "Cameroon" },
  NAM: { pt: "Namíbia", fr: "Namibie", en: "Namibia" },
  RSA: { pt: "África do Sul", fr: "Afrique du Sud", en: "South Africa" },
  KEN: { pt: "Quênia", fr: "Kenya", en: "Kenya" },
  EGY: { pt: "Egito", fr: "Égypte", en: "Egypt" },
  MWI: { pt: "Malawi", fr: "Malawi", en: "Malawi" },
  MAR: { pt: "Marrocos", fr: "Maroc", en: "Morocco" },
  NIG: { pt: "Níger", fr: "Niger", en: "Niger" },
  NGA: { pt: "Nigéria", fr: "Nigeria", en: "Nigeria" },
  TAN: { pt: "Tanzânia", fr: "Tanzanie", en: "Tanzania" },
  ALG: { pt: "Argélia", fr: "Algérie", en: "Algeria" },
  TOG: { pt: "Togo", fr: "Togo", en: "Togo" },
  CGO: { pt: "Congo", fr: "Congo", en: "Congo" },
  COM: { pt: "Comores", fr: "Comores", en: "Comoros" },
  TUN: { pt: "Tunísia", fr: "Tunisie", en: "Tunisia" },
  ANG: { pt: "Angola", fr: "Angola", en: "Angola" },
  MOZ: { pt: "Moçambique", fr: "Mozambique", en: "Mozambique" }
};
const C = (code) => L(COUNTRY[code]) || code;


/* Agenda: início em UTC (GMT divulgado pela imprensa); a página mostra no fuso de quem visita. */
const Q = (g, venue) => ({ pt: `Eliminatórias CAN · Grupo ${g}${venue ? " · " + venue : ""}`, fr: `Élim. CAN · Groupe ${g}${venue ? " · " + venue : ""}`, en: `AFCON qualifiers · Group ${g}${venue ? " · " + venue : ""}` });
const FIXTURES = [
  { at: "2026-11-12T15:00Z", home: "GHA", away: "SOM", score: "2–0", cat: "can", comp: Q("C"), bar: true, today: true },
  { at: "2026-11-12T16:00Z", home: "COD", away: "SLE", score: "3–1", cat: "can", comp: Q("E"), bar: true, today: true },
  { at: "2026-11-12T19:00Z", home: "SEN", away: "SDN", cat: "can", comp: Q("J"), bar: true, today: true },
  { at: "2026-11-12T19:00Z", home: "CIV", away: "GAM", cat: "can", comp: Q("C", "Bouaké"), bar: true, today: true },
  { at: "2026-11-12T19:00Z", home: "CMR", away: "NAM", cat: "can", comp: Q("G"), bar: true, today: true },
  { at: "2026-11-13T16:00Z", home: "RSA", away: "KEN", cat: "can", comp: Q("D"), bar: true },
  { at: "2026-11-13T19:00Z", home: "EGY", away: "MWI", cat: "can", comp: Q("B"), bar: true },
  { at: "2026-11-13T20:00Z", home: "MAR", away: "NIG", cat: "can", comp: Q("A"), bar: true },
  { at: "2026-11-14T16:00Z", home: "NGA", away: "TAN", cat: "can", comp: Q("L", "Uyo"), tv: "SuperSport" },
  { at: "2026-11-14T19:00Z", home: "ALG", away: "TOG", cat: "can", comp: Q("I") },
  { at: "2026-11-15T12:00Z", timeTbd: true, home: "Sundowns", away: "AS FAR", club: true, cat: "fem", bar: true,
    comp: { pt: "Final · Liga dos Campeões Feminina · Ismailia", fr: "Finale · Ligue des champions féminine · Ismaïlia", en: "Final · Women's Champions League · Ismailia" }, tv: "CAF TV (YouTube)" },
  { at: "2026-11-16T13:00Z", home: "SDN", away: "SEN", cat: "can", comp: Q("J") },
  { at: "2026-11-16T13:00Z", home: "NAM", away: "CMR", cat: "can", comp: Q("G") },
  { at: "2026-11-16T15:00Z", home: "SOM", away: "GHA", cat: "can", comp: Q("C") },
  { at: "2026-11-17T13:00Z", home: "TAN", away: "NGA", cat: "can", comp: Q("L") },
  { at: "2026-11-17T13:00Z", home: "MWI", away: "EGY", cat: "can", comp: Q("B") },
  { at: "2026-11-17T16:00Z", home: "KEN", away: "RSA", cat: "can", comp: Q("D") },
  { at: "2026-11-17T16:00Z", home: "GAM", away: "CIV", cat: "can", comp: Q("C") },
  { at: "2026-11-17T16:00Z", home: "SLE", away: "COD", cat: "can", comp: Q("E") },
  { at: "2026-11-17T16:00Z", home: "TOG", away: "ALG", cat: "can", comp: Q("I") },
  { at: "2026-11-17T19:00Z", home: "CGO", away: "COM", cat: "can", comp: Q("G", "Brazzaville") },
  { at: "2026-11-17T20:00Z", home: "NIG", away: "MAR", cat: "can", comp: Q("A") }
];
const CLUB_CODES = { "Sundowns": "SUN", "AS FAR": "FAR" };

const KEY_DATES = [
  [{ pt: "15/11", fr: "15/11", en: "15 Nov" }, { pt: "Final da Liga dos Campeões Feminina, em Ismailia", fr: "Finale de la Ligue des champions féminine, à Ismaïlia", en: "Women's Champions League final, Ismailia" }],
  [{ pt: "16–17/11", fr: "16–17/11", en: "16–17 Nov" }, { pt: "4ª rodada das eliminatórias da CAN 2027", fr: "4e journée des éliminatoires de la CAN 2027", en: "AFCON 2027 qualifiers, matchday 4" }],
  [{ pt: "27–29/11", fr: "27–29/11", en: "27–29 Nov" }, { pt: "Começa a fase de grupos da Liga dos Campeões e da Copa das Confederações", fr: "Début de la phase de groupes de la Ligue des champions et de la Coupe de la Confédération", en: "Champions League and Confederation Cup group stages begin" }],
  [{ pt: "7/12", fr: "7/12", en: "7 Dec" }, { pt: "Prêmios CAF 2026, em Lagos", fr: "CAF Awards 2026, à Lagos", en: "CAF Awards 2026, Lagos" }],
  [{ pt: "22–24/1", fr: "22–24/1", en: "22–24 Jan" }, { pt: "Última rodada dos grupos da Liga dos Campeões", fr: "Dernière journée des groupes de la Ligue des champions", en: "Final Champions League group matchday" }],
  [{ pt: "9–31/5", fr: "9–31/5", en: "9–31 May" }, { pt: "Finais da Liga dos Campeões e da Copa das Confederações", fr: "Finales de la Ligue des champions et de la Coupe de la Confédération", en: "Champions League and Confederation Cup finals" }],
  [{ pt: "19/6–17/7", fr: "19/6–17/7", en: "19 Jun–17 Jul" }, { pt: "CAN PAMOJA 2027 no Quênia, Tanzânia e Uganda", fr: "CAN PAMOJA 2027 au Kenya, en Tanzanie et en Ouganda", en: "AFCON PAMOJA 2027 in Kenya, Tanzania and Uganda" }]
];

const CL_GROUPS = [
  ["A", [["Espérance", "TUN"], ["Petro de Luanda", "ANG"], ["Nouadhibou", "MTN"], ["Wiliete", "ANG"]]],
  ["B", [["Zamalek", "EGY"], ["Young Africans", "TAN"], ["MC Alger", "ALG"], ["Club Africain", "TUN"]]],
  ["C", [["RS Berkane", "MAR"], ["Simba", "TAN"], ["Orlando Pirates", "RSA"], ["Colombe", "CMR"]]],
  ["D", [["Pyramids", "EGY"], ["Al Hilal", "SDN"], ["Horoya", "GUI"], ["MAS Fès", "MAR"]]]
];
const CC_GROUPS = [
  ["A", [["Al Ahly", "EGY"], ["Raja Casablanca", "MAR"], ["ASKO Kara", "TOG"], ["Primeiro de Agosto", "ANG"]]],
  ["B", [["AS FAR", "MAR"], ["Azam", "TAN"], ["Al Ahly Tripoli", "LBA"], ["Durban City", "RSA"]]],
  ["C", [["Maniema Union", "COD"], ["Singida Black Stars", "TAN"], ["Red Arrows", "ZAM"], [null, "—"]]],
  ["D", [["USM Alger", "ALG"], ["CS Sfaxien", "TUN"], ["Black Bulls", "MOZ"], ["Real Bamako", "MLI"]]]
];

/* Líderes após a 2ª rodada (pontos quando informados pela CAF). */
const QUAL_LEADERS = [
  ["A", ["MAR"], "6", { pt: "100% de aproveitamento", fr: "Sans-faute", en: "Perfect record" }],
  ["B", ["EGY", "ANG"], "4", { pt: "Malawi tem 3", fr: "Le Malawi a 3 points", en: "Malawi on 3" }],
  ["C", ["CIV", "GAM"], "6", { pt: "Gana venceu a Somália na 3ª rodada", fr: "Le Ghana a battu la Somalie lors de la 3e journée", en: "Ghana beat Somalia on matchday 3" }],
  ["D", ["RSA"], "6", { pt: "Grupo do anfitrião Quênia", fr: "Groupe du Kenya, pays hôte", en: "Co-hosts Kenya's group" }],
  ["E", ["COD"], "6", { pt: "Venceu também a 3ª rodada (9 pontos)", fr: "Victorieuse aussi lors de la 3e journée (9 points)", en: "Also won on matchday 3 (9 points)" }],
  ["F", [{ pt: "Benin", fr: "Bénin", en: "Benin" }, "Burkina Faso"], "—", ""],
  ["G", ["CMR"], "—", { pt: "Congo e Comores na perseguição", fr: "Le Congo et les Comores en embuscade", en: "Congo and Comoros chasing" }],
  ["H", [{ pt: "Uganda", fr: "Ouganda", en: "Uganda" }], "—", { pt: "Grupo do anfitrião Uganda", fr: "Groupe de l'Ouganda, pays hôte", en: "Co-hosts Uganda's group" }],
  ["I", ["ALG"], "—", ""],
  ["J", ["SEN", "MOZ"], "4", { pt: "Sudão tem 3", fr: "Le Soudan a 3 points", en: "Sudan on 3" }],
  ["K", ["Mali", { pt: "Ruanda", fr: "Rwanda", en: "Rwanda" }], "6", { pt: "Os dois se enfrentam nesta janela", fr: "Les deux s'affrontent pendant cette fenêtre", en: "They meet in this window" }],
  ["L", [{ pt: "Guiné-Bissau", fr: "Guinée-Bissau", en: "Guinea-Bissau" }], "6", { pt: "Nigéria tem 3; grupo da anfitriã Tanzânia", fr: "Le Nigeria a 3 points ; groupe de la Tanzanie, pays hôte", en: "Nigeria on 3; co-hosts Tanzania's group" }]
];
const AND = { pt: " e ", fr: " et ", en: " and " };

const LEAGUES = [
  { country: "EGY", name: "Premier League", champ: "Zamalek", src: "https://africasoccer.com/?p=610725",
    fact: { pt: "20 clubes em 2026/27. O Pyramids chegou ao fim de outubro invicto.", fr: "20 clubs en 2026/27. Le Pyramids a terminé octobre invaincu.", en: "20 clubs in 2026/27. Pyramids ended October unbeaten." } },
  { country: "MAR", name: "Botola Pro", champ: "MAS Fès", src: "https://www.maxifoot.fr/resultat-maroc.htm",
    fact: { pt: "Primeiro título em 41 anos, com 59 pontos. Nova temporada desde 23/9.", fr: "Premier titre en 41 ans, avec 59 points. Nouvelle saison depuis le 23/9.", en: "First title in 41 years, with 59 points. New season under way since 23 September." } },
  { country: "RSA", name: "Betway Premiership", champ: "Orlando Pirates", src: "https://supersport.com/football/news/69751433-7837-4f90-9361-9f9b09291942/pirates-chiefs-usuthu-in-three-way-tie-after-the-weekend-s-action",
    fact: { pt: "O Sundowns, campeão africano, caiu nas preliminares da Champions.", fr: "Le Sundowns, champion d'Afrique, a été éliminé en tours préliminaires de la Ligue des champions.", en: "African champions Sundowns went out in Champions League qualifying." } },
  { country: "ALG", name: "Ligue 1 Mobilis", champ: "MC Alger", src: "https://dailysports.net/fr/news/le-mc-alger-sacre-champion-dalgerie-pour-la-troisieme-saison-consecutive/",
    fact: { pt: "Tricampeão seguido e 10º título, igualando o CR Belouizdad.", fr: "Troisième titre de suite et 10e au total, à égalité avec le CR Belouizdad.", en: "Third title in a row and 10th overall, level with CR Belouizdad." } },
  { country: "TUN", name: "Ligue 1 Pro", champ: "Club Africain", src: "https://foot-africa.com/ligues/tunisia/ligue-i/statistiques/",
    fact: { pt: "Está no Grupo B da Liga dos Campeões, com Zamalek e MC Alger.", fr: "Dans le groupe B de la Ligue des champions, avec le Zamalek et le MC Alger.", en: "In Champions League Group B with Zamalek and MC Alger." } }
];
const RADAR = [["ANG", "Girabola"], ["NGA", "NPFL"], ["COD", "Linafoot"], ["TAN", "Premier League"], ["GHA", "Premier League"], ["SEN", "Ligue 1"], ["CGO", "Ligue 1"], ["MOZ", "Moçambola"], ["CIV", "Ligue 1"]];


module.exports = { LANGS, L, UI, T, CATS, COUNTRY, C, Q, FIXTURES, CLUB_CODES, KEY_DATES, CL_GROUPS, CC_GROUPS, QUAL_LEADERS, AND, LEAGUES, RADAR, setLang, getLang };
