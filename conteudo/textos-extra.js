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
      title: { pt: "Sobre o Bola Africana", fr: "À propos de Ballon Africain", en: "About African Ball" },
      body: {
        pt: [
          "O Bola Africana é um site de notícias dedicado ao esporte africano: futebol, basquete, handebol, vôlei, atletismo, lutas e outros esportes, com seleções e clubes, masculino e feminino, em português, francês, inglês e árabe.",
          "No futebol, cobrimos as competições da CAF, como a Copa Africana de Nações, a Liga dos Campeões, a Copa das Confederações e a Liga dos Campeões Feminina, e temos uma página para o campeonato nacional de cada um dos 54 países africanos. Nos outros esportes, publicamos resultados e notícias das competições africanas.",
          "Cada matéria é escrita pela nossa equipe a partir de fontes públicas, como a CAF, as federações e a imprensa esportiva, sempre com o link da fonte no fim do texto. Não copiamos textos de outros sites.",
          "Encontrou um erro? Escreva para {email} com o link da matéria, e nós corrigimos."
        ],
        fr: [
          "Ballon Africain est un site d'actualités consacré au sport africain : football, basket-ball, handball, volley-ball, athlétisme, sports de combat et autres disciplines, sélections et clubs, masculin et féminin, en portugais, en français, en anglais et en arabe.",
          "En football, nous couvrons les compétitions de la CAF, comme la Coupe d'Afrique des nations, la Ligue des champions, la Coupe de la Confédération et la Ligue des champions féminine, et nous avons une page pour le championnat national de chacun des 54 pays africains. Dans les autres sports, nous publions les résultats et l'actualité des compétitions africaines.",
          "Chaque article est rédigé par notre équipe à partir de sources publiques, comme la CAF, les fédérations et la presse sportive, toujours avec le lien de la source à la fin du texte. Nous ne copions pas les textes d'autres sites.",
          "Vous avez repéré une erreur ? Écrivez à {email} avec le lien de l'article, et nous la corrigerons."
        ],
        en: [
          "African Ball is a news site devoted to African sport: football, basketball, handball, volleyball, athletics, combat sports and more, national teams and clubs, men's and women's, in Portuguese, French, English and Arabic.",
          "In football, we cover CAF competitions such as the Africa Cup of Nations, the Champions League, the Confederation Cup and the Women's Champions League, and we have a page for the national league of each of the 54 African countries. In other sports, we publish results and news from African competitions.",
          "Every story is written by our team from public sources such as CAF, national federations and the sports press, always with a link to the source at the end. We do not copy text from other sites.",
          "Spotted a mistake? Write to {email} with the link to the story, and we will fix it."
        ],
        ar: [
          "الكرة الأفريقية موقع إخباري مخصص للرياضة الأفريقية: كرة القدم وكرة السلة وكرة اليد والكرة الطائرة وألعاب القوى والرياضات القتالية وغيرها، منتخبات وأندية، رجالًا وسيدات، بالبرتغالية والفرنسية والإنجليزية والعربية.",
          "في كرة القدم، نغطي مسابقات الكاف، مثل كأس أمم أفريقيا ودوري الأبطال وكأس الكونفدرالية ودوري أبطال أفريقيا للسيدات، ولدينا صفحة للدوري المحلي في كل دولة من الدول الأفريقية الـ54. وفي الرياضات الأخرى، ننشر نتائج المسابقات الأفريقية وأخبارها.",
          "يكتب فريقنا كل مادة استنادًا إلى مصادر عامة، مثل الكاف والاتحادات الوطنية والصحافة الرياضية، مع رابط المصدر دائمًا في نهاية النص. نحن لا ننسخ نصوصًا من مواقع أخرى.",
          "هل وجدت خطأ؟ راسلنا على {email} مع رابط المادة، وسنصححه."
        ]
      }
    },
    contato: {
      title: { pt: "Contato", fr: "Contact", en: "Contact" },
      body: {
        pt: [
          "Fale com o Bola Africana para sugerir pautas, pedir correções ou propor parcerias.",
          "E-mail: {email}",
          "Para pedir uma correção, mande o link da matéria e o trecho que precisa mudar."
        ],
        fr: [
          "Contactez Ballon Africain pour proposer un sujet, demander une correction ou proposer un partenariat.",
          "E-mail : {email}",
          "Pour demander une correction, envoyez le lien de l'article et le passage à modifier."
        ],
        en: [
          "Contact African Ball to suggest a story, request a correction or propose a partnership.",
          "Email: {email}",
          "To request a correction, send the link to the story and the passage that needs changing."
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
