/* TEXTOS DAS PÁGINAS FIXAS, NOME DO SITE E GUIA "ONDE ASSISTIR".
   Textos traduzíveis usam { pt, fr, en }. */
module.exports = {
  BRAND: { pt: "bola africana", fr: "ballon africain", en: "african ball" },
  BRAND_TITLE: { pt: "Bola Africana", fr: "Ballon Africain", en: "African Ball" },
  LANG_NAMES: { pt: "Português", fr: "Français", en: "English" },
  NAV_SHORT: { cc: { pt: "Confederações", fr: "Coupe de la Conf.", en: "Confed Cup" } },

  UI: {
    watch: { pt: "Onde assistir", fr: "Où regarder", en: "Where to watch" },
    about: { pt: "Sobre", fr: "À propos", en: "About" },
    contact: { pt: "Contato", fr: "Contact", en: "Contact" },
    privacy: { pt: "Política de privacidade", fr: "Politique de confidentialité", en: "Privacy policy" },
    adLabel: { pt: "Publicidade", fr: "Publicité", en: "Advertisement" },
    tzStatic: { pt: "Horários em GMT", fr: "Heures en GMT", en: "Times in GMT" },
    watchLink: { pt: "Onde assistir aos jogos", fr: "Où regarder les matchs", en: "Where to watch the matches" },
    region: { pt: "Região", fr: "Région", en: "Region" },
    channel: { pt: "Emissora", fr: "Diffuseur", en: "Broadcaster" },
    obs: { pt: "Observação", fr: "Remarque", en: "Note" },
    watchDesc: {
      pt: "Onde assistir às competições africanas, por região. Os direitos de transmissão mudam de país para país e de temporada para temporada; confira a programação da emissora antes do jogo.",
      fr: "Où regarder les compétitions africaines, par région. Les droits de diffusion varient selon les pays et les saisons ; vérifiez le programme du diffuseur avant le match.",
      en: "Where to watch African competitions, by region. Broadcast rights vary by country and by season, so check the broadcaster's schedule before kick-off."
    },
    searchIntro: { pt: "Digite o nome de um clube, de uma seleção ou de uma competição.", fr: "Tapez le nom d'un club, d'une sélection ou d'une compétition.", en: "Type the name of a club, a national team or a competition." },
    foot1: {
      pt: "Bola Africana é um site dedicado ao esporte africano, masculino e feminino. As matérias são escritas a partir das fontes linkadas no fim de cada texto.",
      fr: "Ballon Africain est un site consacré au sport africain, masculin et féminin. Les articles sont rédigés à partir des sources indiquées à la fin de chaque texte.",
      en: "African Ball is a site devoted to African sport, men's and women's. Stories are written from the sources linked at the end of each article.",
      ar: "الكرة الأفريقية موقع مخصص للرياضة الأفريقية، للرجال والسيدات. تُكتب المواد استنادًا إلى المصادر المذكورة في نهاية كل نص."
    },
    foot2: { pt: "Horários exibidos no seu fuso horário.", fr: "Heures affichées dans votre fuseau horaire.", en: "Times shown in your time zone." },
    langMenu: { pt: "Escolher idioma", fr: "Choisir la langue", en: "Choose language" },
    notFoundPage: { pt: "Página não encontrada", fr: "Page introuvable", en: "Page not found" }
  },

  /* Guia de transmissões. Atualize quando as emissoras mudarem. */
  WATCH: [
    {
      cat: "can",
      comp: { pt: "Eliminatórias da CAN 2027", fr: "Éliminatoires de la CAN 2027", en: "AFCON 2027 qualifiers" },
      rows: [
        [{ pt: "África Subsaariana", fr: "Afrique subsaharienne", en: "Sub-Saharan Africa" }, "SuperSport",
          { pt: "A CANAL+ comprou os direitos das eliminatórias e da fase final.", fr: "CANAL+ a acquis les droits des éliminatoires et de la phase finale.", en: "CANAL+ holds the rights to the qualifiers and the finals." }],
        [{ pt: "África francófona (mais de 30 países)", fr: "Afrique francophone (plus de 30 pays)", en: "French-speaking Africa (30+ countries)" }, "CANAL+",
          { pt: "Transmissão em francês.", fr: "Diffusion en français.", en: "Broadcast in French." }],
        [{ pt: "Norte da África e Oriente Médio, França, Suíça e EUA", fr: "Afrique du Nord et Moyen-Orient, France, Suisse et États-Unis", en: "North Africa and Middle East, France, Switzerland and the US" }, "beIN Sports",
          { pt: "Parceiro de longo prazo da CAF. Jogos selecionados com narração em árabe no beIN SPORTS CONNECT.", fr: "Partenaire de longue date de la CAF. Matchs choisis commentés en arabe sur beIN SPORTS CONNECT.", en: "CAF's long-term partner. Selected matches with Arabic commentary on beIN SPORTS CONNECT." }],
        [{ pt: "TV aberta nos países", fr: "Chaînes nationales gratuites", en: "National free-to-air TV" },
          { pt: "RTI (Costa do Marfim), RTNC (RD Congo), CRTV (Camarões), SABC (África do Sul), Azam (Tanzânia), SNRT (Marrocos), OnTime Sport (Egito), RBS (Ruanda), Botswana TV", fr: "RTI (Côte d'Ivoire), RTNC (RD Congo), CRTV (Cameroun), SABC (Afrique du Sud), Azam (Tanzanie), SNRT (Maroc), OnTime Sport (Égypte), RBS (Rwanda), Botswana TV", en: "RTI (Côte d'Ivoire), RTNC (DR Congo), CRTV (Cameroon), SABC (South Africa), Azam (Tanzania), SNRT (Morocco), OnTime Sport (Egypt), RBS (Rwanda), Botswana TV" },
          { pt: "Lista divulgada pela CAF para a 1ª rodada; cada emissora mostra jogos da sua seleção.", fr: "Liste publiée par la CAF pour la 1re journée ; chaque chaîne diffuse les matchs de sa sélection.", en: "List published by CAF for matchday 1; each channel shows its own national team." }],
        [{ pt: "Europa", fr: "Europe", en: "Europe" },
          { pt: "Sport TV (Portugal), Movistar (Espanha), Ziggo (Holanda), DAZN (Alemanha)", fr: "Sport TV (Portugal), Movistar (Espagne), Ziggo (Pays-Bas), DAZN (Allemagne)", en: "Sport TV (Portugal), Movistar (Spain), Ziggo (Netherlands), DAZN (Germany)" },
          { pt: "Jogos selecionados.", fr: "Matchs sélectionnés.", en: "Selected matches." }],
        [{ pt: "Brasil", fr: "Brésil", en: "Brazil" }, "—",
          { pt: "Não encontramos transmissão confirmada das eliminatórias no Brasil.", fr: "Aucune diffusion confirmée des éliminatoires au Brésil.", en: "No confirmed broadcaster for the qualifiers in Brazil." }]
      ],
      sources: [
        ["CAF", "https://www.cafonline.com/afcon2025/news/totalenergies-caf-africa-cup-of-nations-pamoja-2027-where-to-watch-matchday-1-of-the-qualifiers/"],
        ["ThisDay", "https://www.thisdaylive.com/2026/09/29/canal-secures-afcon-2027-qualifiers-finals-broadcast-rights/"],
        ["beIN SPORTS", "https://www.beinsports.com/en-us/soccer/africa-cup-of-nations-qualification/articles/how-and-where-to-watch-afcon-2027-qualifiers-in-arabic-on-bein-sports-2026-09-23?w=1280"]
      ]
    },
    {
      cat: "cl",
      comp: { pt: "Liga dos Campeões e Copa das Confederações da CAF", fr: "Ligue des champions et Coupe de la Confédération de la CAF", en: "CAF Champions League and Confederation Cup" },
      rows: [
        [{ pt: "África e mundo", fr: "Afrique et monde", en: "Africa and worldwide" }, "beIN Sports, CANAL+, SuperSport",
          { pt: "Estiveram entre as principais emissoras da final de 2025/26.", fr: "Parmi les principaux diffuseurs de la finale 2025/26.", en: "Among the main broadcasters of the 2025/26 final." }],
        [{ pt: "Reino Unido", fr: "Royaume-Uni", en: "United Kingdom" }, "Channel 4",
          { pt: "Exibiu a final de 2025/26.", fr: "A diffusé la finale 2025/26.", en: "Showed the 2025/26 final." }],
        [{ pt: "Alemanha, Áustria e Suíça", fr: "Allemagne, Autriche et Suisse", en: "Germany, Austria and Switzerland" }, "DAZN",
          { pt: "Segundo a imprensa alemã, tem a Champions 2026/27 e a CAN 2027.", fr: "Selon la presse allemande, détient la Ligue des champions 2026/27 et la CAN 2027.", en: "Has the 2026/27 Champions League and AFCON 2027, according to German media." }],
        [{ pt: "Brasil", fr: "Brésil", en: "Brazil" }, "Band",
          { pt: "Comprou os direitos da Liga dos Campeões da África durante a temporada 2025/26. Transmissão de 2026/27 a confirmar.", fr: "A acquis les droits de la Ligue des champions africaine pendant la saison 2025/26. Diffusion 2026/27 à confirmer.", en: "Bought the African Champions League rights during the 2025/26 season. 2026/27 coverage to be confirmed." }]
      ],
      sources: [
        ["CAF", "https://www.cafonline.com/total-caf-champions-league/2022/"],
        ["Sportcal", "https://www.sportcal.com/news/report-dazn-wins-afcon-2027-caf-champions-league-rights-in-dach-region/"],
        ["Diário do Pará / Folhapress", "https://diariodopara.com.br/bola/band-compra-liga-dos-campeoes-da-africa-apos-sucesso-de-copa-das-nacoes-africanas/"]
      ]
    },
    {
      cat: "fem",
      comp: { pt: "Liga dos Campeões Feminina da CAF 2026", fr: "Ligue des champions féminine de la CAF 2026", en: "CAF Women's Champions League 2026" },
      rows: [
        [{ pt: "Mundo", fr: "Monde", en: "Worldwide" }, "CAF TV (YouTube)",
          { pt: "Jogos ao vivo no canal oficial da CAF.", fr: "Matchs en direct sur la chaîne officielle de la CAF.", en: "Live matches on CAF's official channel." }],
        [{ pt: "Parceiros de TV", fr: "Partenaires TV", en: "TV partners" }, "beIN Sports, CANAL+, AzamTV, SABC Sport, ONSport, OnTime, SNRT",
          { pt: "Entre outros, segundo a CAF.", fr: "Entre autres, selon la CAF.", en: "Among others, according to CAF." }]
      ],
      sources: [
        ["CAF", "https://www.cafonline.com/caf-womens-champions-league/news/where-to-watch-caf-women-s-champions-league-egypt-2026-kicks-off-on-sunday/"]
      ]
    }
  ],

  /* Páginas fixas. {email} é trocado pelo e-mail de contato do config.js. */
  PAGES: {
    sobre: {
      title: { pt: "Sobre o Bola Africana", fr: "À propos de Ballon Africain", en: "About African Ball", ar: "عن الكرة الأفريقية" },
      body: {
        pt: [
          "O Bola Africana é um site de notícias dedicado ao esporte africano: futebol, basquete, handebol, vôlei, rúgbi, atletismo e outros esportes, seleções e clubes, masculino e feminino, em português, francês, inglês e árabe.",
          "Nossa missão é dar ao esporte dos 54 países africanos uma cobertura conferida e acessível em quatro línguas, para quem acompanha o esporte africano dentro e fora do continente.",
          "No futebol, cobrimos as competições da CAF, como a Copa Africana de Nações, a Liga dos Campeões, a Copa das Confederações e a Liga dos Campeões Feminina. Cada um dos 54 países tem uma página com a seleção, o campeonato nacional, os clubes e os outros esportes, no masculino e no feminino. Nos outros esportes, publicamos resultados e notícias das competições africanas e dos atletas africanos.",
          "Cada matéria é escrita pela redação a partir de fontes públicas, como a CAF, as federações e a imprensa esportiva, sempre com o link da fonte no fim do texto. Não copiamos textos de outros sites. A Política editorial explica como conferimos as informações e como corrigimos erros.",
          "## Expediente",
          "Redação: Redação Bola Africana.",
          "Idiomas: português, francês, inglês e árabe.",
          "Contato da redação: {email}",
          "Federações, ligas, clubes e assessorias de imprensa podem enviar notas oficiais, calendários e resultados ao mesmo endereço. A página Contato explica como.",
          "Encontrou um erro? Escreva para {email} com o link da matéria, e nós corrigimos."
        ],
        fr: [
          "Ballon Africain est un site d'actualités consacré au sport africain : football, basket-ball, handball, volley-ball, rugby, athlétisme et autres disciplines, sélections et clubs, masculin et féminin, en portugais, en français, en anglais et en arabe.",
          "Notre mission est d'offrir au sport des 54 pays africains une couverture vérifiée et accessible en quatre langues, pour celles et ceux qui suivent le sport africain sur le continent et ailleurs.",
          "En football, nous couvrons les compétitions de la CAF, comme la Coupe d'Afrique des nations, la Ligue des champions, la Coupe de la Confédération et la Ligue des champions féminine. Chacun des 54 pays a une page avec sa sélection, son championnat, ses clubs et ses autres sports, chez les hommes et chez les femmes. Dans les autres sports, nous publions les résultats et l'actualité des compétitions africaines et des athlètes africains.",
          "Chaque article est rédigé par la rédaction à partir de sources publiques, comme la CAF, les fédérations et la presse sportive, toujours avec le lien de la source à la fin du texte. Nous ne copions pas les textes d'autres sites. La charte éditoriale explique comment nous vérifions les informations et corrigeons nos erreurs.",
          "## Ours",
          "Rédaction : Rédaction Ballon Africain.",
          "Langues : portugais, français, anglais et arabe.",
          "Contact de la rédaction : {email}",
          "Les fédérations, ligues, clubs et services de presse peuvent envoyer communiqués officiels, calendriers et résultats à la même adresse. La page Contact explique comment.",
          "Vous avez repéré une erreur ? Écrivez à {email} avec le lien de l'article, et nous la corrigerons."
        ],
        en: [
          "African Ball is a news site devoted to African sport: football, basketball, handball, volleyball, rugby, athletics and more, national teams and clubs, men's and women's, in Portuguese, French, English and Arabic.",
          "Our mission is to give the sport of all 54 African countries checked, accessible coverage in four languages, for everyone who follows African sport, on the continent and beyond.",
          "In football, we cover CAF competitions such as the Africa Cup of Nations, the Champions League, the Confederation Cup and the Women's Champions League. Each of the 54 countries has a page with its national team, its league, its clubs and its other sports, men's and women's. In other sports, we publish results and news from African competitions and African athletes.",
          "Every story is written by the newsroom from public sources such as CAF, national federations and the sports press, always with a link to the source at the end. We do not copy text from other sites. Our editorial policy explains how we check information and correct mistakes.",
          "## Masthead",
          "Newsroom: African Ball newsroom.",
          "Languages: Portuguese, French, English and Arabic.",
          "Newsroom contact: {email}",
          "Federations, leagues, clubs and press officers can send official statements, fixtures and results to the same address. The Contact page explains how.",
          "Spotted a mistake? Write to {email} with the link to the story, and we will fix it."
        ],
        ar: [
          "الكرة الأفريقية موقع إخباري مخصص للرياضة الأفريقية: كرة القدم وكرة السلة وكرة اليد والكرة الطائرة والرغبي وألعاب القوى وغيرها، منتخبات وأندية، رجالًا وسيدات، بالبرتغالية والفرنسية والإنجليزية والعربية.",
          "مهمتنا أن نقدم للرياضة في الدول الأفريقية الـ54 تغطية موثقة وسهلة الوصول بأربع لغات، لكل من يتابع الرياضة الأفريقية داخل القارة وخارجها.",
          "في كرة القدم، نغطي مسابقات الكاف، مثل كأس أمم أفريقيا ودوري الأبطال وكأس الكونفدرالية ودوري أبطال أفريقيا للسيدات. ولكل دولة من الدول الـ54 صفحة تضم المنتخب والدوري المحلي والأندية والرياضات الأخرى، للرجال والسيدات. وفي الرياضات الأخرى، ننشر نتائج المسابقات الأفريقية وأخبار الرياضيين الأفارقة.",
          "تكتب هيئة التحرير كل مادة استنادًا إلى مصادر عامة، مثل الكاف والاتحادات الوطنية والصحافة الرياضية، مع رابط المصدر دائمًا في نهاية النص. نحن لا ننسخ نصوصًا من مواقع أخرى. وتشرح السياسة التحريرية كيف نتحقق من المعلومات وكيف نصحح الأخطاء.",
          "## هيئة التحرير",
          "التحرير: هيئة تحرير الكرة الأفريقية.",
          "اللغات: البرتغالية والفرنسية والإنجليزية والعربية.",
          "البريد الإلكتروني للتحرير: {email}",
          "يمكن للاتحادات والرابطات والأندية والمكاتب الإعلامية إرسال البيانات الرسمية والجداول والنتائج إلى العنوان نفسه. وتشرح صفحة الاتصال الطريقة.",
          "هل وجدت خطأ؟ راسلنا على {email} مع رابط المادة، وسنصححه."
        ]
      }
    },
    contato: {
      title: { pt: "Contato", fr: "Contact", en: "Contact", ar: "اتصل بنا" },
      body: {
        pt: [
          "Fale com o Bola Africana para sugerir pautas, pedir correções ou propor parcerias.",
          "E-mail: {email}",
          "Para pedir uma correção, mande o link da matéria e o trecho que precisa mudar.",
          "## Federações, ligas, clubes e assessorias de imprensa",
          "Mande notas oficiais, convocações, calendários, tabelas e resultados para {email}. No assunto, escreva o nome da entidade e o tema, por exemplo: \"Federação Angolana de Futebol: convocação\".",
          "Pode escrever em português, francês, inglês ou árabe. A matéria publicada sai nos quatro idiomas e cita a entidade como fonte.",
          "A redação confere as informações antes de publicar e escreve a própria matéria; a nota não é publicada como foi recebida.",
          "Fotos: mande só imagens que a entidade tenha direito de ceder, com o nome do autor para o crédito. Sem autorização e crédito, a foto não é publicada."
        ],
        fr: [
          "Contactez Ballon Africain pour proposer un sujet, demander une correction ou proposer un partenariat.",
          "E-mail : {email}",
          "Pour demander une correction, envoyez le lien de l'article et le passage à modifier.",
          "## Fédérations, ligues, clubs et services de presse",
          "Envoyez communiqués officiels, listes de joueurs, calendriers, classements et résultats à {email}. En objet, indiquez le nom de l'organisation et le sujet, par exemple : « Fédération sénégalaise de football : liste des convoqués ».",
          "Vous pouvez écrire en portugais, en français, en anglais ou en arabe. L'article publié paraît dans les quatre langues et cite l'organisation comme source.",
          "La rédaction vérifie les informations avant publication et rédige son propre article ; le communiqué n'est pas publié tel quel.",
          "Photos : n'envoyez que des images que l'organisation a le droit de céder, avec le nom de l'auteur pour le crédit. Sans autorisation ni crédit, la photo n'est pas publiée."
        ],
        en: [
          "Contact African Ball to suggest a story, request a correction or propose a partnership.",
          "Email: {email}",
          "To request a correction, send the link to the story and the passage that needs changing.",
          "## Federations, leagues, clubs and press officers",
          "Send official statements, squad lists, fixtures, tables and results to {email}. In the subject line, write the name of the organisation and the topic, for example: \"Football Kenya Federation: squad announcement\".",
          "You can write in Portuguese, French, English or Arabic. The published story appears in all four languages and credits the organisation as the source.",
          "The newsroom checks the information before publishing and writes its own story; statements are not published as received.",
          "Photos: only send images the organisation has the right to share, with the photographer's name for the credit. Without permission and credit, a photo is not published."
        ],
        ar: [
          "تواصل مع الكرة الأفريقية لاقتراح موضوع أو طلب تصحيح أو عرض شراكة.",
          "البريد الإلكتروني: {email}",
          "لطلب تصحيح، أرسل رابط المادة والجزء الذي يحتاج إلى تعديل.",
          "## الاتحادات والرابطات والأندية والمكاتب الإعلامية",
          "أرسلوا البيانات الرسمية وقوائم اللاعبين والجداول والترتيب والنتائج إلى {email}. واكتبوا في عنوان الرسالة اسم الجهة والموضوع، مثلًا: «الاتحاد المصري لكرة القدم: قائمة المنتخب».",
          "يمكن الكتابة بالبرتغالية أو الفرنسية أو الإنجليزية أو العربية. وتُنشر المادة باللغات الأربع مع ذكر الجهة مصدرًا.",
          "تتحقق هيئة التحرير من المعلومات قبل النشر وتكتب مادتها الخاصة، ولا يُنشر البيان كما ورد.",
          "الصور: أرسلوا فقط الصور التي يحق للجهة التنازل عنها، مع اسم المصور لذكره. ولا تُنشر أي صورة دون إذن وذكر للمصدر."
        ]
      }
    },
    editorial: {
      title: { pt: "Política editorial", fr: "Charte éditoriale", en: "Editorial policy", ar: "السياسة التحريرية" },
      body: {
        pt: [
          "O Bola Africana cobre o esporte africano com informação conferida. Esta página explica como trabalhamos. Última atualização: 14 de novembro de 2026.",
          "Fontes: toda matéria se apoia em fontes públicas identificáveis, como a CAF, as federações nacionais, os clubes e a imprensa esportiva, e traz no fim os links para essas fontes. Sempre que possível, resultados, datas e números são conferidos em mais de uma fonte.",
          "Quando as fontes divergem, dizemos isso no texto e indicamos qual número usamos e por quê. O que não conseguimos confirmar fica de fora.",
          "Fato e análise ficam separados: o que é dedução nossa aparece como tal. Não publicamos boatos de transferência nem conteúdo pago apresentado como notícia.",
          "Ferramentas de inteligência artificial ajudam na pesquisa, na redação e na tradução para francês, inglês e árabe. Toda informação publicada vem de uma fonte citada na matéria.",
          "Correções: se encontrar um erro, escreva para {email} com o link da matéria e o trecho que precisa mudar. Corrigimos o texto o quanto antes.",
          "Imagens: as capas das matérias são ilustrações do próprio site. Fotos só entram com autorização de quem tem os direitos e com o crédito do autor. As bandeiras são de domínio público; os escudos dos clubes vêm dos dados da API-Sports e pertencem aos clubes; os escudos das federações não são reproduzidos.",
          "Publicidade: os anúncios, quando houver, aparecem identificados e não interferem na escolha nem no conteúdo das matérias."
        ],
        fr: [
          "Ballon Africain couvre le sport africain avec des informations vérifiées. Cette page explique notre façon de travailler. Dernière mise à jour : 14 novembre 2026.",
          "Sources : chaque article s'appuie sur des sources publiques identifiables, comme la CAF, les fédérations nationales, les clubs et la presse sportive, et renvoie à ces sources à la fin du texte. Dans la mesure du possible, résultats, dates et chiffres sont vérifiés dans plus d'une source.",
          "Lorsque les sources divergent, nous le disons dans le texte et précisons quel chiffre nous retenons et pourquoi. Ce que nous ne pouvons pas confirmer n'est pas publié.",
          "Les faits et l'analyse sont séparés : ce qui relève de notre déduction est présenté comme tel. Nous ne publions ni rumeurs de transfert ni contenu payé présenté comme une information.",
          "Des outils d'intelligence artificielle aident à la recherche, à la rédaction et à la traduction en français, en anglais et en arabe. Toute information publiée provient d'une source citée dans l'article.",
          "Corrections : si vous repérez une erreur, écrivez à {email} avec le lien de l'article et le passage à modifier. Nous corrigeons le texte au plus vite.",
          "Images : les visuels des articles sont des illustrations créées par le site. Une photo n'est publiée qu'avec l'autorisation du détenteur des droits et le crédit de son auteur. Les drapeaux sont du domaine public ; les logos des clubs proviennent des données d'API-Sports et appartiennent aux clubs ; les écussons des fédérations ne sont pas reproduits.",
          "Publicité : les annonces, lorsqu'il y en a, sont identifiées et n'influencent ni le choix ni le contenu des articles."
        ],
        en: [
          "African Ball covers African sport with checked information. This page explains how we work. Last updated: 14 November 2026.",
          "Sources: every story relies on identifiable public sources, such as CAF, national federations, clubs and the sports press, and links to them at the end. Whenever possible, results, dates and figures are checked against more than one source.",
          "When sources disagree, we say so in the story and explain which figure we use and why. What we cannot confirm is left out.",
          "Facts and analysis are kept apart: anything that is our own inference is presented as such. We do not publish transfer rumours or paid content presented as news.",
          "Artificial intelligence tools help with research, writing and translation into French, English and Arabic. Every piece of information we publish comes from a source cited in the story.",
          "Corrections: if you spot a mistake, write to {email} with the link to the story and the passage that needs changing. We fix the text as soon as possible.",
          "Images: story covers are illustrations made by the site. Photos are published only with permission from the rights holder and with the photographer's credit. Flags are in the public domain; club crests come from API-Sports data and belong to the clubs; federation crests are not reproduced.",
          "Advertising: ads, when there are any, are labelled and have no influence on which stories we cover or what they say."
        ],
        ar: [
          "يغطي موقع الكرة الأفريقية الرياضة الأفريقية بمعلومات موثقة. توضح هذه الصفحة طريقة عملنا. آخر تحديث: 14 نوفمبر 2026.",
          "المصادر: تستند كل مادة إلى مصادر عامة معروفة، مثل الكاف والاتحادات الوطنية والأندية والصحافة الرياضية، وتتضمن في نهايتها روابط هذه المصادر. ونتحقق من النتائج والتواريخ والأرقام في أكثر من مصدر كلما أمكن.",
          "عندما تختلف المصادر نذكر ذلك في النص ونوضح الرقم الذي اعتمدناه وسبب اختياره. وما لا نستطيع التأكد منه لا ننشره.",
          "نفصل بين الخبر والتحليل: ما هو استنتاج منا نقدمه على أنه كذلك. ولا ننشر شائعات الانتقالات ولا المحتوى المدفوع على أنه خبر.",
          "تساعدنا أدوات الذكاء الاصطناعي في البحث والكتابة والترجمة إلى الفرنسية والإنجليزية والعربية. وكل معلومة ننشرها مصدرها مذكور في المادة.",
          "التصحيحات: إذا وجدت خطأ فراسلنا على {email} مع رابط المادة والجزء الذي يحتاج إلى تعديل. ونصحح النص في أقرب وقت.",
          "الصور: أغلفة المواد رسوم من إنتاج الموقع. ولا تُنشر صورة إلا بإذن صاحب الحقوق مع ذكر اسم المصور. والأعلام ملك عام؛ وشعارات الأندية مصدرها بيانات API-Sports وهي ملك للأندية؛ ولا ننشر شعارات الاتحادات.",
          "الإعلانات: تظهر الإعلانات، عند وجودها، بشكل واضح ولا تؤثر في اختيار المواد ولا في مضمونها."
        ]
      }
    },
    privacidade: {
      title: { pt: "Política de privacidade", fr: "Politique de confidentialité", en: "Privacy policy" },
      body: {
        pt: [
          "Esta política explica quais dados o site usa quando você o visita. Última atualização: 12 de novembro de 2026.",
          "Dados pessoais: o site não pede cadastro e não coleta diretamente nome, e-mail ou outros dados pessoais. Se você escrever para {email}, usamos a sua mensagem apenas para responder.",
          "Preferência de idioma: quando você escolhe um idioma, o seu navegador pode guardar essa escolha no próprio aparelho. Essa informação não é enviada para nós.",
          "Hospedagem: o site é hospedado no GitHub Pages, que pode registrar dados técnicos de acesso, como o endereço IP, para segurança e funcionamento do serviço.",
          "Publicidade: o site pode exibir anúncios do Google AdSense. O Google e os seus parceiros usam cookies para mostrar anúncios com base nas suas visitas a este e a outros sites. Você pode desativar os anúncios personalizados nas configurações de anúncios do Google (adssettings.google.com) e saber mais em policies.google.com/technologies/ads.",
          "Quando a lei exige, como para visitantes da União Europeia, do Reino Unido e da Suíça, pedimos o seu consentimento antes de usar cookies de publicidade.",
          "Seus direitos: pela LGPD, no Brasil, e por leis semelhantes em outros países, você pode pedir informações sobre os seus dados ou a exclusão deles escrevendo para {email}.",
          "Links externos: as matérias levam a outros sites, que têm as suas próprias políticas de privacidade."
        ],
        fr: [
          "Cette politique explique quelles données le site utilise lorsque vous le visitez. Dernière mise à jour : 12 novembre 2026.",
          "Données personnelles : le site ne demande pas d'inscription et ne collecte pas directement de nom, d'e-mail ou d'autres données personnelles. Si vous écrivez à {email}, nous utilisons votre message uniquement pour vous répondre.",
          "Préférence de langue : lorsque vous choisissez une langue, votre navigateur peut garder ce choix sur votre appareil. Cette information ne nous est pas transmise.",
          "Hébergement : le site est hébergé sur GitHub Pages, qui peut enregistrer des données techniques d'accès, comme l'adresse IP, pour la sécurité et le fonctionnement du service.",
          "Publicité : le site peut afficher des annonces Google AdSense. Google et ses partenaires utilisent des cookies pour diffuser des annonces en fonction de vos visites sur ce site et sur d'autres sites. Vous pouvez désactiver la publicité personnalisée dans les paramètres des annonces Google (adssettings.google.com) et en savoir plus sur policies.google.com/technologies/ads.",
          "Lorsque la loi l'exige, par exemple pour les visiteurs de l'Union européenne, du Royaume-Uni et de la Suisse, nous demandons votre consentement avant d'utiliser des cookies publicitaires.",
          "Vos droits : selon la LGPD au Brésil, le RGPD en Europe et des lois similaires ailleurs, vous pouvez demander des informations sur vos données ou leur suppression en écrivant à {email}.",
          "Liens externes : les articles renvoient vers d'autres sites, qui ont leurs propres politiques de confidentialité."
        ],
        en: [
          "This policy explains what data the site uses when you visit. Last updated: 12 November 2026.",
          "Personal data: the site does not ask you to sign up and does not directly collect your name, email or other personal data. If you write to {email}, we use your message only to reply.",
          "Language preference: when you choose a language, your browser may keep that choice on your device. It is not sent to us.",
          "Hosting: the site is hosted on GitHub Pages, which may log technical access data, such as IP addresses, for security and to run the service.",
          "Advertising: the site may show Google AdSense ads. Google and its partners use cookies to serve ads based on your visits to this and other websites. You can turn off personalised ads in Google's ad settings (adssettings.google.com) and learn more at policies.google.com/technologies/ads.",
          "Where the law requires it, for example for visitors from the European Union, the United Kingdom and Switzerland, we ask for your consent before using advertising cookies.",
          "Your rights: under Brazil's LGPD, the EU's GDPR and similar laws, you can ask about your data or request its deletion by writing to {email}.",
          "External links: stories link to other sites, which have their own privacy policies."
        ]
      }
    }
  }
};
