/* CAMPEONATOS NACIONAIS: os 54 países da CAF. Cada linha gera uma página em campeonatos/<slug>.html nos três idiomas.
   Ordem dos campos em cada linha:
   código FIFA (o mesmo de dados.js), código ISO de 2 letras (usado para achar o campeonato na API),
   endereço da página (slug), nome do país em pt, fr e en, "do país" em pt e fr, nome do campeonato,
   palavras que ajudam o robô a escolher o campeonato certo na API.
   Para corrigir a escolha do robô, acrescente o número do campeonato na API em API_ID, mais abaixo.
   Para escrever a apresentação de um campeonato, use TEXTOS, no fim do arquivo.
   Página sem texto e sem dados automáticos fica fora do Google (noindex) até ganhar conteúdo. */
const LINHAS = [
  ["ALG", "DZ", "argelia", "Argélia", "Algérie", "Algeria", "da Argélia", "d'Algérie", "Ligue 1 Mobilis", ["ligue 1", "ligue professionnelle 1"]],
  ["ANG", "AO", "angola", "Angola", "Angola", "Angola", "de Angola", "d'Angola", "Girabola", ["girabola"]],
  ["BEN", "BJ", "benin", "Benin", "Bénin", "Benin", "do Benin", "du Bénin", "Benin Premier League", ["premier league", "ligue 1", "championnat"]],
  ["BOT", "BW", "botsuana", "Botsuana", "Botswana", "Botswana", "de Botsuana", "du Botswana", "Botswana Premier League", ["premier league", "premiership"]],
  ["BFA", "BF", "burkina-faso", "Burkina Faso", "Burkina Faso", "Burkina Faso", "de Burkina Faso", "du Burkina Faso", "Burkinabé Premier League", ["premier league", "ligue 1", "faso"]],
  ["BDI", "BI", "burundi", "Burundi", "Burundi", "Burundi", "do Burundi", "du Burundi", "Ligue A", ["ligue a", "primus"]],
  ["CMR", "CM", "camaroes", "Camarões", "Cameroun", "Cameroon", "dos Camarões", "du Cameroun", "Elite One", ["elite one", "mtn elite"]],
  ["CPV", "CV", "cabo-verde", "Cabo Verde", "Cap-Vert", "Cape Verde", "de Cabo Verde", "du Cap-Vert", "Campeonato Nacional", ["campeonato nacional", "championship"]],
  ["CTA", "CF", "republica-centro-africana", "República Centro-Africana", "Centrafrique", "Central African Republic", "da República Centro-Africana", "de Centrafrique", "Central African Republic League", ["league", "championnat"]],
  ["CHA", "TD", "chade", "Chade", "Tchad", "Chad", "do Chade", "du Tchad", "Chad Premier League", ["premier league", "championnat"]],
  ["COM", "KM", "comores", "Comores", "Comores", "Comoros", "das Comores", "des Comores", "Comoros Premier League", ["premier league", "championnat"]],
  ["CGO", "CG", "congo", "Congo", "Congo", "Congo", "do Congo", "du Congo", "Ligue 1", ["ligue 1", "premier league"]],
  ["COD", "CD", "rd-congo", "RD Congo", "RD Congo", "DR Congo", "da RD Congo", "de RD Congo", "Linafoot", ["linafoot", "ligue 1"]],
  ["DJI", "DJ", "djibuti", "Djibuti", "Djibouti", "Djibouti", "de Djibuti", "de Djibouti", "Djibouti Premier League", ["premier league", "division 1"]],
  ["EGY", "EG", "egito", "Egito", "Égypte", "Egypt", "do Egito", "d'Égypte", "Premier League", ["premier league"]],
  ["EQG", "GQ", "guine-equatorial", "Guiné Equatorial", "Guinée équatoriale", "Equatorial Guinea", "da Guiné Equatorial", "de Guinée équatoriale", "Equatoguinean Premier League", ["premier league", "liga nacional", "primera"]],
  ["ERI", "ER", "eritreia", "Eritreia", "Érythrée", "Eritrea", "da Eritreia", "d'Érythrée", "Eritrean Premier League", ["premier league"]],
  ["SWZ", "SZ", "essuatini", "Essuatíni", "Eswatini", "Eswatini", "do Essuatíni", "d'Eswatini", "Premier League of Eswatini", ["premier league"]],
  ["ETH", "ET", "etiopia", "Etiópia", "Éthiopie", "Ethiopia", "da Etiópia", "d'Éthiopie", "Ethiopian Premier League", ["premier league"]],
  ["GAB", "GA", "gabao", "Gabão", "Gabon", "Gabon", "do Gabão", "du Gabon", "Championnat National D1", ["d1", "championnat", "national"]],
  ["GAM", "GM", "gambia", "Gâmbia", "Gambie", "Gambia", "da Gâmbia", "de Gambie", "GFA League", ["gfa", "first division", "league"]],
  ["GHA", "GH", "gana", "Gana", "Ghana", "Ghana", "de Gana", "du Ghana", "Ghana Premier League", ["premier league"]],
  ["GUI", "GN", "guine", "Guiné", "Guinée", "Guinea", "da Guiné", "de Guinée", "Championnat National", ["ligue 1", "championnat"]],
  ["GNB", "GW", "guine-bissau", "Guiné-Bissau", "Guinée-Bissau", "Guinea-Bissau", "da Guiné-Bissau", "de Guinée-Bissau", "Campeonato Nacional", ["campeonato", "primeira"]],
  ["CIV", "CI", "costa-do-marfim", "Costa do Marfim", "Côte d'Ivoire", "Côte d'Ivoire", "da Costa do Marfim", "de Côte d'Ivoire", "Ligue 1", ["ligue 1"]],
  ["KEN", "KE", "quenia", "Quênia", "Kenya", "Kenya", "do Quênia", "du Kenya", "Kenyan Premier League", ["premier league"]],
  ["LES", "LS", "lesoto", "Lesoto", "Lesotho", "Lesotho", "do Lesoto", "du Lesotho", "Lesotho Premier League", ["premier league"]],
  ["LBR", "LR", "liberia", "Libéria", "Liberia", "Liberia", "da Libéria", "du Liberia", "LFA First Division", ["first division", "lfa"]],
  ["LBA", "LY", "libia", "Líbia", "Libye", "Libya", "da Líbia", "de Libye", "Libyan Premier League", ["premier league"]],
  ["MAD", "MG", "madagascar", "Madagascar", "Madagascar", "Madagascar", "de Madagascar", "de Madagascar", "Pro League", ["pro league", "orange"]],
  ["MWI", "MW", "malawi", "Malawi", "Malawi", "Malawi", "do Malawi", "du Malawi", "Super League", ["super league"]],
  ["MLI", "ML", "mali", "Mali", "Mali", "Mali", "do Mali", "du Mali", "Première Division", ["premiere division", "première division", "ligue 1"]],
  ["MTN", "MR", "mauritania", "Mauritânia", "Mauritanie", "Mauritania", "da Mauritânia", "de Mauritanie", "Super D1", ["super d1", "ligue 1", "premier league"]],
  ["MRI", "MU", "mauricio", "Maurício", "Maurice", "Mauritius", "de Maurício", "de Maurice", "Mauritian Premier League", ["premier league"]],
  ["MAR", "MA", "marrocos", "Marrocos", "Maroc", "Morocco", "do Marrocos", "du Maroc", "Botola Pro", ["botola"]],
  ["MOZ", "MZ", "mocambique", "Moçambique", "Mozambique", "Mozambique", "de Moçambique", "du Mozambique", "Moçambola", ["mocambola", "moçambola"]],
  ["NAM", "NA", "namibia", "Namíbia", "Namibie", "Namibia", "da Namíbia", "de Namibie", "Namibia Premiership", ["premiership", "premier league"]],
  ["NIG", "NE", "niger", "Níger", "Niger", "Niger", "do Níger", "du Niger", "Super Ligue", ["super ligue", "ligue 1"]],
  ["NGA", "NG", "nigeria", "Nigéria", "Nigeria", "Nigeria", "da Nigéria", "du Nigeria", "NPFL", ["npfl", "professional", "premier"]],
  ["RWA", "RW", "ruanda", "Ruanda", "Rwanda", "Rwanda", "de Ruanda", "du Rwanda", "Rwanda Premier League", ["premier league"]],
  ["STP", "ST", "sao-tome-e-principe", "São Tomé e Príncipe", "Sao Tomé-et-Principe", "São Tomé and Príncipe", "de São Tomé e Príncipe", "de Sao Tomé-et-Principe", "Campeonato Nacional", ["campeonato", "championship"]],
  ["SEN", "SN", "senegal", "Senegal", "Sénégal", "Senegal", "do Senegal", "du Sénégal", "Ligue 1", ["ligue 1"]],
  ["SEY", "SC", "seicheles", "Seicheles", "Seychelles", "Seychelles", "das Seicheles", "des Seychelles", "Seychelles Premier League", ["premier league"]],
  ["SLE", "SL", "serra-leoa", "Serra Leoa", "Sierra Leone", "Sierra Leone", "de Serra Leoa", "de Sierra Leone", "National Premier League", ["premier league"]],
  ["SOM", "SO", "somalia", "Somália", "Somalie", "Somalia", "da Somália", "de Somalie", "Somali National League", ["national league", "first division", "league"]],
  ["RSA", "ZA", "africa-do-sul", "África do Sul", "Afrique du Sud", "South Africa", "da África do Sul", "d'Afrique du Sud", "Betway Premiership", ["premier soccer league", "premiership", "psl"]],
  ["SSD", "SS", "sudao-do-sul", "Sudão do Sul", "Soudan du Sud", "South Sudan", "do Sudão do Sul", "du Soudan du Sud", "South Sudan Premier League", ["premier league"]],
  ["SDN", "SD", "sudao", "Sudão", "Soudan", "Sudan", "do Sudão", "du Soudan", "Sudan Premier League", ["premier league"]],
  ["TAN", "TZ", "tanzania", "Tanzânia", "Tanzanie", "Tanzania", "da Tanzânia", "de Tanzanie", "Premier League", ["ligi kuu", "premier league"]],
  ["TOG", "TG", "togo", "Togo", "Togo", "Togo", "do Togo", "du Togo", "Championnat National", ["championnat", "ligue 1"]],
  ["TUN", "TN", "tunisia", "Tunísia", "Tunisie", "Tunisia", "da Tunísia", "de Tunisie", "Ligue 1 Pro", ["ligue 1", "ligue professionnelle 1"]],
  ["UGA", "UG", "uganda", "Uganda", "Ouganda", "Uganda", "de Uganda", "d'Ouganda", "Uganda Premier League", ["premier league"]],
  ["ZAM", "ZM", "zambia", "Zâmbia", "Zambie", "Zambia", "da Zâmbia", "de Zambie", "Super League", ["super league"]],
  ["ZIM", "ZW", "zimbabue", "Zimbábue", "Zimbabwe", "Zimbabwe", "do Zimbábue", "du Zimbabwe", "Premier Soccer League", ["premier soccer league", "psl"]]
];

/* Número do campeonato na API-Football, quando o robô escolher errado.
   Exemplo, com número fictício: { CIV: 1234 }. O número certo aparece em conteudo/ligas-auto.json, no campo "mapa". */
const API_ID = {};

/* Apresentação de cada campeonato, em parágrafos. Exemplo:
   CIV: { pt: ["Primeiro parágrafo.", "Segundo parágrafo."], fr: ["..."], en: ["..."] } */
const TEXTOS = {};

module.exports = LINHAS.map(([code, iso, slug, pt, fr, en, dePt, deFr, liga, busca]) => ({
  code, iso, slug, liga, busca,
  nome: { pt, fr, en },
  de: { pt: dePt, fr: deFr, en },
  apiId: API_ID[code] || null,
  texto: TEXTOS[code] || null
}));
