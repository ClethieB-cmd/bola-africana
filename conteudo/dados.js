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
  qLeader: { pt: "Líder em 16/11", fr: "En tête au 16/11", en: "Leader on 16 Nov", ar: "المتصدر في 16/11" },
  qPts: { pt: "Pts", fr: "Pts", en: "Pts" },
  qNoteH: { pt: "Observação", fr: "Remarque", en: "Note" },
  qNote: { pt: "Pontos conferidos no Sofascore e nos relatos das partidas, depois dos jogos de 16/11 e antes dos de 17/11. Passam os dois primeiros de cada grupo; nos grupos D, H e L, só a melhor seleção que não é sede.", fr: "Points vérifiés sur Sofascore et dans les comptes rendus des matchs, après les rencontres du 16/11 et avant celles du 17/11. Les deux premiers de chaque groupe se qualifient ; dans les groupes D, H et L, seule la meilleure équipe non organisatrice.", en: "Points checked against Sofascore and match reports after the 16 November games and before those on 17 November. The top two in each group qualify; in Groups D, H and L, only the best-placed non-host team.", ar: "النقاط مُتحقق منها عبر Sofascore وتقارير المباريات بعد مباريات 16 نوفمبر وقبل مباريات 17 نوفمبر. يتأهل الأول والثاني من كل مجموعة؛ وفي المجموعات D وH وL يتأهل أفضل منتخب غير مستضيف فقط." },
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
  agendaNote: { pt: "Todos os 48 jogos das rodadas 3 e 4 das eliminatórias. Placares conferidos no Sofascore e nos relatos das partidas.", fr: "Les 48 matchs des 3e et 4e journées des éliminatoires. Scores vérifiés sur Sofascore et dans les comptes rendus des matchs.", en: "All 48 matches from qualifying matchdays 3 and 4. Scores checked against Sofascore and match reports.", ar: "جميع المباريات الثماني والأربعين من الجولتين الثالثة والرابعة للتصفيات. النتائج مُتحقق منها عبر Sofascore وتقارير المباريات." },
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


/* Agenda: início em UTC (GMT divulgado pela imprensa); a página mostra no fuso de quem visita.
   Jogo de clubes: club: true, com paises: [país do mandante, país do visitante] para mostrar as bandeiras. */
const Q = (g, venue) => ({ pt: `Eliminatórias CAN · Grupo ${g}${venue ? " · " + venue : ""}`, fr: `Élim. CAN · Groupe ${g}${venue ? " · " + venue : ""}`, en: `AFCON qualifiers · Group ${g}${venue ? " · " + venue : ""}`, ar: `تصفيات كأس أمم أفريقيا · المجموعة ${g}${venue ? " · " + venue : ""}` });
const FIXTURES = [
  { at: "2026-11-12T15:00Z", home: "GHA", away: "SOM", score: "2–0", cat: "can", comp: Q("C"), bar: true, today: true },
  { at: "2026-11-12T16:00Z", home: "COD", away: "SLE", score: "3–1", cat: "can", comp: Q("E"), bar: true, today: true },
  { at: "2026-11-12T16:00Z", home: "MAD", away: "GNB", score: "1–1", cat: "can", comp: Q("L") },
  { at: "2026-11-12T16:00Z", home: "EQG", away: "ZIM", score: "0–0", cat: "can", comp: Q("E") },
  { at: "2026-11-12T17:00Z", home: "GUI", away: "ERI", score: "2–1", cat: "can", comp: Q("D") },
  { at: "2026-11-12T19:00Z", home: "SEN", away: "SDN", score: "4–1", cat: "can", comp: Q("J"), bar: true, today: true },
  { at: "2026-11-12T19:00Z", home: "CIV", away: "GAM", score: "2–1", cat: "can", comp: Q("C", "Bouaké"), bar: true, today: true },
  { at: "2026-11-12T19:00Z", home: "CMR", away: "NAM", score: "2–0", cat: "can", comp: Q("G"), bar: true, today: true },
  { at: "2026-11-12T19:00Z", home: "BEN", away: "CTA", score: "4–1", cat: "can", comp: Q("F") },
  { at: "2026-11-13T13:00Z", home: "COM", away: "CGO", score: "0–0", cat: "can", comp: Q("G", "Moroni") },
  { at: "2026-11-13T13:00Z", home: "ZAM", away: "BDI", score: "1–1", cat: "can", comp: Q("I") },
  { at: "2026-11-13T13:00Z", home: "MOZ", away: "ETH", score: "0–1", cat: "can", comp: Q("J"), bar: true },
  { at: "2026-11-13T16:00Z", home: "RSA", away: "KEN", score: "2–2", cat: "can", comp: Q("D", "Soweto"), bar: true },
  { at: "2026-11-13T16:00Z", home: "NGA", away: "TAN", score: "3–1", cat: "can", comp: Q("L", "Uyo"), bar: true, tv: "SuperSport" },
  { at: "2026-11-13T16:00Z", home: "TUN", away: "LBA", score: "0–2", cat: "can", comp: Q("H", "Sfax"), bar: true },
  { at: "2026-11-13T16:00Z", home: "GAB", away: "LES", score: "2–0", cat: "can", comp: Q("A") },
  { at: "2026-11-13T16:00Z", home: "BFA", away: "MTN", score: "1–0", cat: "can", comp: Q("F", "Ouagadougou") },
  { at: "2026-11-13T16:00Z", home: "CPV", away: "LBR", score: "4–2", cat: "can", comp: Q("K", "Praia") },
  { at: "2026-11-13T19:00Z", home: "MLI", away: "RWA", score: "3–2", cat: "can", comp: Q("K", "Bamako") },
  { at: "2026-11-13T19:00Z", home: "EGY", away: "MWI", score: "5–0", cat: "can", comp: Q("B", "Cairo"), bar: true },
  { at: "2026-11-13T20:00Z", home: "MAR", away: "NIG", score: "5–1", cat: "can", comp: Q("A", "Casablanca"), bar: true },
  { at: "2026-11-14T16:00Z", home: "UGA", away: "BOT", score: "1–1", cat: "can", comp: Q("H", "Hoima") },
  { at: "2026-11-14T19:00Z", home: "ALG", away: "TOG", score: "1–0", cat: "can", comp: Q("I", "Tizi Ouzou"), bar: true },
  { at: "2026-11-14T19:00Z", home: "ANG", away: "SSD", score: "2–0", cat: "can", comp: Q("B", "Luanda") },
  { at: "2026-11-15T15:00Z", home: "Sundowns", away: "AS FAR", score: "1–3", club: true, paises: ["RSA", "MAR"], cat: "fem", bar: true,
    comp: { pt: "Final · Liga dos Campeões Feminina · Ismailia", fr: "Finale · Ligue des champions féminine · Ismaïlia", en: "Final · Women's Champions League · Ismailia", ar: "النهائي · دوري أبطال أفريقيا للسيدات · الإسماعيلية" }, tv: "CAF TV (YouTube)" },
  { at: "2026-11-16T13:00Z", home: "SDN", away: "SEN", score: "2–4", cat: "can", comp: Q("J", "Juba"), bar: true },
  { at: "2026-11-16T13:00Z", home: "NAM", away: "CMR", score: "0–3", cat: "can", comp: Q("G", "Gaborone"), bar: true },
  { at: "2026-11-16T14:00Z", home: "ZIM", away: "EQG", score: "3–0", cat: "can", comp: Q("E", "Harare") },
  { at: "2026-11-16T15:00Z", home: "SOM", away: "GHA", score: "0–1", cat: "can", comp: Q("C", "Sekondi-Takoradi"), bar: true },
  { at: "2026-11-16T16:00Z", home: "CTA", away: "BEN", score: "0–1", cat: "can", comp: Q("F", "Douala") },
  { at: "2026-11-16T16:00Z", home: "ERI", away: "GUI", score: "1–3", cat: "can", comp: Q("D", "Cairo") },
  { at: "2026-11-17T13:00Z", home: "LES", away: "GAB", cat: "can", comp: Q("A") },
  { at: "2026-11-17T13:00Z", home: "SSD", away: "ANG", cat: "can", comp: Q("B") },
  { at: "2026-11-17T13:00Z", home: "BDI", away: "ZAM", cat: "can", comp: Q("I") },
  { at: "2026-11-17T13:00Z", home: "ETH", away: "MOZ", cat: "can", comp: Q("J") },
  { at: "2026-11-17T13:00Z", home: "TAN", away: "NGA", cat: "can", comp: Q("L") },
  { at: "2026-11-17T13:00Z", home: "MWI", away: "EGY", cat: "can", comp: Q("B") },
  { at: "2026-11-17T16:00Z", home: "KEN", away: "RSA", cat: "can", comp: Q("D") },
  { at: "2026-11-17T16:00Z", home: "GAM", away: "CIV", cat: "can", comp: Q("C") },
  { at: "2026-11-17T16:00Z", home: "SLE", away: "COD", cat: "can", comp: Q("E") },
  { at: "2026-11-17T16:00Z", home: "TOG", away: "ALG", cat: "can", comp: Q("I") },
  { at: "2026-11-17T16:00Z", home: "LBA", away: "TUN", cat: "can", comp: Q("H") },
  { at: "2026-11-17T16:00Z", home: "GNB", away: "MAD", cat: "can", comp: Q("L") },
  { at: "2026-11-17T19:00Z", home: "MTN", away: "BFA", cat: "can", comp: Q("F") },
  { at: "2026-11-17T19:00Z", home: "CGO", away: "COM", cat: "can", comp: Q("G", "Brazzaville") },
  { at: "2026-11-17T19:00Z", home: "BOT", away: "UGA", cat: "can", comp: Q("H") },
  { at: "2026-11-17T19:00Z", home: "LBR", away: "CPV", cat: "can", comp: Q("K") },
  { at: "2026-11-17T19:00Z", home: "RWA", away: "MLI", cat: "can", comp: Q("K", "Kigali"), bar: true },
  { at: "2026-11-17T20:00Z", home: "NIG", away: "MAR", cat: "can", comp: Q("A") }
];
const CLUB_CODES = { "Sundowns": "SUN", "AS FAR": "FAR" };

const KEY_DATES = [
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

/* Líderes depois dos jogos de 16/11 (pontos conferidos no Sofascore e nos relatos das partidas). */
const QUAL_LEADERS = [
  ["A", ["MAR"], "9", { pt: "Gabão tem 6", fr: "Le Gabon a 6 points", en: "Gabon on 6", ar: "الغابون لديه 6 نقاط" }],
  ["B", ["EGY", "ANG"], "7", { pt: "Empatados; o Egito tem saldo melhor", fr: "À égalité ; meilleure différence de buts pour l'Égypte", en: "Level; Egypt ahead on goal difference", ar: "متساويان، ومصر أفضل في فارق الأهداف" }],
  ["C", ["CIV"], "9", { pt: "Gâmbia e Gana têm 6", fr: "La Gambie et le Ghana ont 6 points", en: "Gambia and Ghana on 6", ar: "غامبيا وغانا لكل منهما 6 نقاط" }],
  ["D", [{ pt: "Guiné", fr: "Guinée", en: "Guinea", ar: "غينيا" }], "9", { pt: "África do Sul tem 7 e um jogo a menos; grupo do anfitrião Quênia", fr: "L'Afrique du Sud a 7 points et un match de moins ; groupe du Kenya, pays hôte", en: "South Africa on 7 with a game in hand; co-hosts Kenya's group", ar: "جنوب أفريقيا لديها 7 نقاط مع مباراة أقل؛ مجموعة كينيا المضيفة" }],
  ["E", ["COD"], "9", { pt: "Zimbábue tem 7, com um jogo a mais", fr: "Le Zimbabwe a 7 points, avec un match de plus", en: "Zimbabwe on 7 having played once more", ar: "زيمبابوي لديها 7 نقاط بعد أن لعبت مباراة أكثر" }],
  ["F", [{ pt: "Benin", fr: "Bénin", en: "Benin", ar: "بنين" }], "10", { pt: "Burkina Faso tem 7 e um jogo a menos", fr: "Le Burkina Faso a 7 points et un match de moins", en: "Burkina Faso on 7 with a game in hand", ar: "بوركينا فاسو لديها 7 نقاط مع مباراة أقل" }],
  ["G", ["CMR"], "10", { pt: "Comores têm 4", fr: "Les Comores ont 4 points", en: "Comoros on 4", ar: "جزر القمر لديها 4 نقاط" }],
  ["H", [{ pt: "Uganda", fr: "Ouganda", en: "Uganda", ar: "أوغندا" }], "5", { pt: "Líbia tem 4; grupo do anfitrião Uganda", fr: "La Libye a 4 points ; groupe de l'Ouganda, pays hôte", en: "Libya on 4; co-hosts Uganda's group", ar: "ليبيا لديها 4 نقاط؛ مجموعة أوغندا المضيفة" }],
  ["I", ["ALG"], "7", { pt: "Zâmbia tem 4", fr: "La Zambie a 4 points", en: "Zambia on 4", ar: "زامبيا لديها 4 نقاط" }],
  ["J", ["SEN"], "10", { pt: "Moçambique tem 4 e um jogo a menos", fr: "Le Mozambique a 4 points et un match de moins", en: "Mozambique on 4 with a game in hand", ar: "موزمبيق لديها 4 نقاط مع مباراة أقل" }],
  ["K", [{ pt: "Mali", fr: "Mali", en: "Mali", ar: "مالي" }], "9", { pt: "Ruanda tem 6; os dois se enfrentam na terça, em Kigali", fr: "Le Rwanda a 6 points ; les deux s'affrontent mardi à Kigali", en: "Rwanda on 6; they meet on Tuesday in Kigali", ar: "رواندا لديها 6 نقاط، ويلتقي المنتخبان يوم الثلاثاء في كيغالي" }],
  ["L", [{ pt: "Guiné-Bissau", fr: "Guinée-Bissau", en: "Guinea-Bissau", ar: "غينيا بيساو" }], "7", { pt: "Nigéria tem 6; grupo da anfitriã Tanzânia", fr: "Le Nigeria a 6 points ; groupe de la Tanzanie, pays hôte", en: "Nigeria on 6; co-hosts Tanzania's group", ar: "نيجيريا لديها 6 نقاط؛ مجموعة تنزانيا المضيفة" }]
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
