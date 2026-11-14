/* NOTÍCIAS — cada item é uma matéria. Para publicar uma nova, copie um item inteiro,
   cole no topo da lista e troque os textos. Campos:
   slug: endereço da matéria (só letras minúsculas, números e hífens, sem acento)
   cat: can | cl | cc | fem | ligas | sel   (seção principal)
   tags: seções onde a matéria também aparece
   date: data e hora da publicação, formato "AAAA-MM-DDTHH:MM"
   monthOnly: true mostra só o mês na data
   especial: true faz da matéria uma reportagem especial (página Especiais e seção própria no Início)
   cover.big: texto grande da capa (placar, número); cover.small: legenda da capa
   title, lead, body: título, linha fina e parágrafos em pt, fr e en
   sources: [nome do veículo, link] — sempre cite de onde veio a informação */
module.exports = [
  {
    slug: "especial-al-ahly-zamalek-classico-do-cairo", especial: true, cat: "ligas", tags: ["ligas", "cl"], date: "2026-11-14T12:00",
    cover: { big: "258", cx: "82%", small: { pt: "jogos entre Al Ahly e Zamalek desde 1917", fr: "matchs entre Al Ahly et Zamalek depuis 1917", en: "games between Al Ahly and Zamalek since 1917", ar: "مباراة بين الأهلي والزمالك منذ 1917" } },
    title: { pt: "Al Ahly x Zamalek: o clássico que divide o Cairo há mais de um século", fr: "Al Ahly-Zamalek : le derby qui divise Le Caire depuis plus d'un siècle", en: "Al Ahly v Zamalek: the derby that has split Cairo for more than a century", ar: "الأهلي والزمالك: القمة التي تقسم القاهرة منذ أكثر من قرن" },
    lead: { pt: "O primeiro jogo foi em 1917. Desde então foram 258 encontros, uma final continental e goleadas que cada torcida faz questão de lembrar.", fr: "Le premier match date de 1917. Depuis, 258 rencontres, une finale continentale et des cartons que chaque camp n'oublie pas.", en: "The first game was in 1917. Since then there have been 258 meetings, a continental final and thrashings each set of fans never forgets.", ar: "أقيمت المباراة الأولى عام 1917، ومنذ ذلك الحين التقى الفريقان 258 مرة، بينها نهائي قاري ونتائج كبيرة لا ينساها جمهور أي منهما." },
    body: {
      pt: [
        "O Al Ahly nasceu em 24 de abril de 1907, a partir da ideia de Omar Lotfy, estudante de Direito que presidia um clube de alunos do ensino médio no Cairo. O nome quer dizer \"o nacional\" em árabe egípcio. Quatro anos depois, em 5 de janeiro de 1911, surgiu o Qasr El Nil, que mudou de nome várias vezes, foi Farouk I quando ganhou o patrocínio do rei, em 1941, e virou Zamalek em 1952.",
        "Os dois se enfrentaram pela primeira vez em 9 de fevereiro de 1917, num amistoso no campo do Zamalek: 1 a 0 para o Al Ahly, gol de Abdel Hamid Moharram. Até maio de 2026 foram 258 jogos, com 113 vitórias do Al Ahly, 62 do Zamalek e 83 empates. Contando só partidas oficiais, são 234 jogos: 102 vitórias do Al Ahly, 53 do Zamalek e 79 empates.",
        "Cada lado tem a sua goleada para lembrar. O Zamalek venceu por 6 a 0 duas vezes: em 1942, pela Liga do Cairo, e em 1944, na final da Copa do Egito. A maior vitória do Al Ahly foi o 6 a 1 de 16 de maio de 2002, pelo Campeonato Egípcio.",
        "O jogo mais importante da história do clássico foi a final da Liga dos Campeões da CAF de 2020, disputada em 27 de novembro daquele ano no Estádio Internacional do Cairo, sem público por causa da pandemia. El Solia abriu o placar para o Al Ahly, Shikabala empatou, e Afsha fez o gol do título no fim. O Zamalek deu o troco na Supercopa da CAF de 2024, em Riad: 1 a 1 e vitória nos pênaltis por 4 a 3.",
        "Na sala de troféus, o Al Ahly leva vantagem: 45 títulos egípcios contra 15 do Zamalek, 39 Copas do Egito contra 29 e 12 Ligas dos Campeões da CAF contra 5. A CAF elegeu os dois como o primeiro e o segundo melhores clubes africanos do século 20.",
        "A rivalidade segue viva na temporada atual. O Zamalek foi campeão egípcio em 2025/26 e disputa a Liga dos Campeões de 2026/27. O Al Ahly terminou em terceiro e joga a Copa das Confederações."
      ],
      fr: [
        "Al Ahly est né le 24 avril 1907, d'une idée d'Omar Lotfy, étudiant en droit qui présidait un club de lycéens au Caire. Son nom signifie « le national » en arabe égyptien. Quatre ans plus tard, le 5 janvier 1911, naissait le Qasr El Nil, qui a changé plusieurs fois de nom, s'est appelé Farouk Ier sous le patronage du roi à partir de 1941, puis Zamalek en 1952.",
        "Les deux clubs se sont affrontés pour la première fois le 9 février 1917, en match amical sur le terrain du Zamalek : 1-0 pour Al Ahly, but d'Abdel Hamid Moharram. Jusqu'en mai 2026, on compte 258 rencontres : 113 victoires d'Al Ahly, 62 du Zamalek et 83 nuls. En matchs officiels seulement, 234 rencontres : 102 victoires d'Al Ahly, 53 du Zamalek et 79 nuls.",
        "Chaque camp a son carton. Le Zamalek s'est imposé deux fois 6-0 : en 1942 en Ligue du Caire et en 1944 en finale de la Coupe d'Égypte. La plus large victoire d'Al Ahly est le 6-1 du 16 mai 2002 en championnat d'Égypte.",
        "Le match le plus important de l'histoire du derby reste la finale de la Ligue des champions de la CAF 2020, jouée le 27 novembre de cette année-là au stade international du Caire, à huis clos en raison de la pandémie. El Solia a ouvert le score pour Al Ahly, Shikabala a égalisé et Afsha a marqué le but du titre en fin de match. Le Zamalek a pris sa revanche en Supercoupe de la CAF 2024 à Riyad : 1-1 puis victoire 4-3 aux tirs au but.",
        "Au palmarès, Al Ahly mène : 45 titres de champion d'Égypte contre 15 pour le Zamalek, 39 Coupes d'Égypte contre 29 et 12 Ligues des champions de la CAF contre 5. La CAF a désigné les deux clubs comme les premier et deuxième meilleurs clubs africains du XXe siècle.",
        "La rivalité reste vive cette saison. Le Zamalek a été sacré champion d'Égypte en 2025/26 et dispute la Ligue des champions 2026/27. Al Ahly a terminé troisième et joue la Coupe de la Confédération."
      ],
      en: [
        "Al Ahly was founded on 24 April 1907, from an idea by Omar Lotfy, a law student who chaired a club for secondary school students in Cairo. The name means \"the national\" in Egyptian Arabic. Four years later, on 5 January 1911, came Qasr El Nil, which changed its name several times, became Farouk I under royal patronage in 1941 and turned into Zamalek in 1952.",
        "The two first met on 9 February 1917, in a friendly at Zamalek's ground: Al Ahly won 1-0 with a goal from Abdel Hamid Moharram. Up to May 2026 they had played 258 times, with 113 Al Ahly wins, 62 for Zamalek and 83 draws. Counting official matches only, it is 234 games: 102 Al Ahly wins, 53 for Zamalek and 79 draws.",
        "Each side has its own thrashing to remember. Zamalek won 6-0 twice: in 1942 in the Cairo League and in 1944 in the Egypt Cup final. Al Ahly's biggest win was 6-1 on 16 May 2002 in the Egyptian league.",
        "The biggest game in the derby's history was the 2020 CAF Champions League final, played on 27 November that year at Cairo International Stadium behind closed doors because of the pandemic. El Solia put Al Ahly ahead, Shikabala equalised and Afsha scored the late winner. Zamalek got their revenge in the 2024 CAF Super Cup in Riyadh: 1-1 and a 4-3 win on penalties.",
        "In the trophy cabinet, Al Ahly lead: 45 Egyptian league titles to Zamalek's 15, 39 Egypt Cups to 29 and 12 CAF Champions League titles to 5. CAF named the two the first and second best African clubs of the 20th century.",
        "The rivalry is alive this season too. Zamalek were Egyptian champions in 2025/26 and play in the 2026/27 Champions League. Al Ahly finished third and play in the Confederation Cup."
      ],
      ar: [
        "تأسس النادي الأهلي في 24 أبريل 1907 بفكرة من عمر لطفي، طالب الحقوق الذي كان يرأس ناديًا لطلاب المدارس العليا في القاهرة. وتعني كلمة الأهلي «الوطني» بالعامية المصرية. وبعد أربع سنوات، في 5 يناير 1911، ظهر نادي قصر النيل الذي غيّر اسمه عدة مرات، فصار نادي فاروق الأول تحت رعاية الملك عام 1941، ثم الزمالك عام 1952.",
        "التقى الفريقان أول مرة في 9 فبراير 1917 في مباراة ودية على ملعب الزمالك، وفاز الأهلي 1-0 بهدف عبد الحميد محرم. وحتى مايو 2026 بلغ عدد المواجهات 258 مباراة، فاز الأهلي في 113 منها والزمالك في 62، وانتهت 83 بالتعادل. وفي المباريات الرسمية وحدها 234 مباراة: 102 فوز للأهلي و53 للزمالك و79 تعادلًا.",
        "لكل فريق نتيجة كبيرة يتذكرها. فاز الزمالك 6-0 مرتين: عام 1942 في دوري القاهرة، وعام 1944 في نهائي كأس مصر. وأكبر فوز للأهلي كان 6-1 في 16 مايو 2002 في الدوري المصري.",
        "أهم مباراة في تاريخ القمة كانت نهائي دوري أبطال أفريقيا 2020، الذي أقيم في 27 نوفمبر من ذلك العام على استاد القاهرة الدولي دون جمهور بسبب الجائحة. افتتح السولية التسجيل للأهلي، وعادل شيكابالا، ثم سجل أفشة هدف اللقب في الدقائق الأخيرة. ورد الزمالك في كأس السوبر الأفريقي 2024 في الرياض بالتعادل 1-1 ثم الفوز بركلات الترجيح 4-3.",
        "في خزانة الألقاب يتفوق الأهلي: 45 لقبًا للدوري المصري مقابل 15 للزمالك، و39 كأس مصر مقابل 29، و12 لقبًا في دوري أبطال أفريقيا مقابل 5. واختار الكاف الناديين أفضل وثاني أفضل نادٍ أفريقي في القرن العشرين.",
        "وتبقى المنافسة حاضرة هذا الموسم: توّج الزمالك بلقب الدوري المصري 2025/26 ويشارك في دوري الأبطال 2026/27، بينما أنهى الأهلي الموسم ثالثًا ويشارك في كأس الكونفدرالية."
      ]
    },
    sources: [
      ["Wikipedia (Cairo derby)", "https://en.wikipedia.org/wiki/Cairo_derby"],
      ["Wikipedia (Al Ahly SC)", "https://en.wikipedia.org/wiki/Al_Ahly_SC"],
      ["Wikipedia (Zamalek SC)", "https://en.wikipedia.org/wiki/Zamalek_SC"],
      ["Wikipedia (2026–27 CAF Champions League)", "https://en.wikipedia.org/wiki/2026%E2%80%9327_CAF_Champions_League"],
      ["Wikipedia (2026–27 CAF Confederation Cup)", "https://en.wikipedia.org/wiki/2026%E2%80%9327_CAF_Confederation_Cup"]
    ]
  },
  {
    slug: "especial-achraf-hakimi-trajetoria", especial: true, cat: "sel", tags: ["sel", "can"], date: "2026-11-14T11:00",
    cover: { big: "3", cx: "82%", small: { pt: "Ligas dos Campeões da Europa de Hakimi", fr: "Ligues des champions européennes de Hakimi", en: "European Champions League titles for Hakimi", ar: "ألقاب دوري أبطال أوروبا لحكيمي" } },
    title: { pt: "Achraf Hakimi: de Madri ao topo do futebol africano", fr: "Achraf Hakimi : de Madrid au sommet du football africain", en: "Achraf Hakimi: from Madrid to the top of African football", ar: "أشرف حكيمي: من مدريد إلى قمة الكرة الأفريقية" },
    lead: { pt: "Filho de marroquinos e formado no Real Madrid, o lateral foi eleito o melhor jogador africano de 2025 e foi campeão da CAN com o Marrocos, em casa.", fr: "Fils de parents marocains et formé au Real Madrid, le latéral a été élu meilleur joueur africain 2025 et a remporté la CAN avec le Maroc, à domicile.", en: "Born to Moroccan parents and raised at Real Madrid, the full-back was named African Player of the Year for 2025 and won AFCON with Morocco on home soil.", ar: "ابن لأبوين مغربيين وخريج أكاديمية ريال مدريد، اختير أفضل لاعب أفريقي لعام 2025 وتوج بكأس أمم أفريقيا مع المغرب على أرضه." },
    body: {
      pt: [
        "Achraf Hakimi nasceu em Madri em 4 de novembro de 1998, filho de pais marroquinos: o pai é de Oued Zem, e a mãe, de Ksar el-Kebir. Começou a jogar aos 8 anos no CD Colonia Ofigevi e entrou na base do Real Madrid em 2006.",
        "Estreou no time principal do Real Madrid em 2017 e, na temporada 2017/18, tornou-se o primeiro marroquino a ganhar a Liga dos Campeões da Europa. Depois foi emprestado por dois anos ao Borussia Dortmund, onde chegou a 36,48 km/h numa partida de fevereiro de 2020, recorde de velocidade da Bundesliga.",
        "Em 2020 foi para a Inter de Milão e ganhou o Campeonato Italiano de 2020/21. Em julho de 2021 assinou com o Paris Saint-Germain. Na França, ganhou cinco Campeonatos Franceses seguidos, de 2021/22 a 2025/26, e duas Copas da França. Com o PSG, venceu a Liga dos Campeões de 2024/25, com gol na final, e a de 2025/26. Com três títulos, igualou Samuel Eto'o como o africano que mais vezes ganhou a competição.",
        "Pela seleção marroquina, estreou em 11 de outubro de 2016, num 4 a 0 sobre o Canadá. Na Copa do Mundo de 2022, converteu com uma cavadinha o pênalti decisivo contra a Espanha nas oitavas de final. O Marrocos se tornou a primeira seleção africana a chegar a uma semifinal de Copa e terminou em quarto lugar.",
        "Em 2025, foi eleito o melhor jogador africano do ano pela CAF, o quinto marroquino a receber o prêmio e o primeiro desde Mustapha Hadji, em 1998. Ficou em sexto lugar na Bola de Ouro, a melhor colocação de um marroquino. Na CAN 2025, disputada no Marrocos, a seleção conquistou o segundo título continental da sua história.",
        "Na sexta-feira (13), Hakimi marcou duas vezes, uma delas de falta, na vitória por 5 a 1 sobre o Níger, em Casablanca. Com três vitórias em três jogos, o Marrocos lidera o Grupo A das eliminatórias da CAN 2027."
      ],
      fr: [
        "Achraf Hakimi est né à Madrid le 4 novembre 1998, de parents marocains : son père est originaire d'Oued Zem, sa mère de Ksar el-Kébir. Il a commencé à jouer à 8 ans au CD Colonia Ofigevi avant de rejoindre le centre de formation du Real Madrid en 2006.",
        "Il a débuté en équipe première du Real Madrid en 2017 et, en 2017/18, est devenu le premier Marocain à remporter la Ligue des champions. Prêté ensuite deux ans au Borussia Dortmund, il y a atteint 36,48 km/h lors d'un match de février 2020, record de vitesse en Bundesliga.",
        "En 2020, il a rejoint l'Inter Milan et remporté la Serie A 2020/21. En juillet 2021, il a signé au Paris Saint-Germain. En France, il a gagné cinq championnats de suite, de 2021/22 à 2025/26, et deux Coupes de France. Avec le PSG, il a remporté la Ligue des champions 2024/25, en marquant en finale, puis celle de 2025/26. Avec trois titres, il égale Samuel Eto'o, l'Africain le plus titré de la compétition.",
        "Avec le Maroc, il a fait ses débuts le 11 octobre 2016, lors d'une victoire 4-0 contre le Canada. Au Mondial 2022, il a transformé d'une panenka le tir au but décisif contre l'Espagne en huitièmes de finale. Le Maroc est devenu la première sélection africaine à atteindre une demi-finale de Coupe du monde et a terminé quatrième.",
        "En 2025, il a été élu meilleur joueur africain de l'année par la CAF, cinquième Marocain à recevoir ce prix et premier depuis Mustapha Hadji en 1998. Il a terminé sixième du Ballon d'or, meilleur classement d'un Marocain. Lors de la CAN 2025, organisée au Maroc, la sélection a remporté le deuxième titre continental de son histoire.",
        "Vendredi 13 novembre, Hakimi a marqué deux fois, dont un coup franc, lors de la victoire 5-1 contre le Niger à Casablanca. Avec trois victoires en trois matchs, le Maroc mène le groupe A des éliminatoires de la CAN 2027."
      ],
      en: [
        "Achraf Hakimi was born in Madrid on 4 November 1998 to Moroccan parents: his father is from Oued Zem and his mother from Ksar el-Kebir. He started playing at eight at CD Colonia Ofigevi and joined Real Madrid's academy in 2006.",
        "He made his first-team debut for Real Madrid in 2017 and, in 2017/18, became the first Moroccan to win the European Champions League. He then spent two years on loan at Borussia Dortmund, where he reached 36.48 km/h in a February 2020 match, a Bundesliga speed record.",
        "In 2020 he joined Inter Milan and won the 2020/21 Serie A title. In July 2021 he signed for Paris Saint-Germain. In France he has won five league titles in a row, from 2021/22 to 2025/26, and two French Cups. With PSG he won the 2024/25 Champions League, scoring in the final, and the 2025/26 edition. With three titles, he has matched Samuel Eto'o as the African with the most wins in the competition.",
        "He made his Morocco debut on 11 October 2016 in a 4-0 win over Canada. At the 2022 World Cup he chipped home the decisive penalty against Spain in the round of 16. Morocco became the first African team to reach a World Cup semi-final and finished fourth.",
        "In 2025 he was named CAF African Player of the Year, the fifth Moroccan to win the award and the first since Mustapha Hadji in 1998. He finished sixth in the Ballon d'Or, the best ranking for a Moroccan. At AFCON 2025, held in Morocco, the national team won the second continental title in its history.",
        "On Friday (13 November), Hakimi scored twice, once from a free kick, in a 5-1 win over Niger in Casablanca. With three wins from three, Morocco lead Group A of AFCON 2027 qualifying."
      ],
      ar: [
        "وُلد أشرف حكيمي في مدريد في 4 نوفمبر 1998 لأبوين مغربيين، فوالده من وادي زم ووالدته من القصر الكبير. بدأ اللعب في الثامنة من عمره في نادي كولونيا أوفيجيفي، ثم التحق بأكاديمية ريال مدريد عام 2006.",
        "ظهر لأول مرة مع الفريق الأول لريال مدريد عام 2017، وفي موسم 2017/18 أصبح أول مغربي يفوز بدوري أبطال أوروبا. ثم انتقل معارًا لعامين إلى بوروسيا دورتموند، حيث بلغت سرعته 36.48 كلم في الساعة في مباراة في فبراير 2020، وهو رقم قياسي في الدوري الألماني.",
        "انتقل عام 2020 إلى إنتر ميلان وفاز بالدوري الإيطالي 2020/21، ثم وقّع في يوليو 2021 لباريس سان جيرمان. وفي فرنسا فاز بخمسة ألقاب متتالية للدوري من 2021/22 إلى 2025/26 وبكأس فرنسا مرتين. ومع باريس سان جيرمان فاز بدوري أبطال أوروبا 2024/25 وسجل في النهائي، ثم بنسخة 2025/26. وبثلاثة ألقاب عادل رقم صامويل إيتو كأكثر الأفارقة تتويجًا بالمسابقة.",
        "خاض أول مباراة مع المنتخب المغربي في 11 أكتوبر 2016 في الفوز 4-0 على كندا. وفي كأس العالم 2022 سجل بطريقة بانينكا ركلة الترجيح الحاسمة أمام إسبانيا في ثمن النهائي، وأصبح المغرب أول منتخب أفريقي يبلغ نصف نهائي كأس العالم وأنهى البطولة رابعًا.",
        "في عام 2025 اختاره الكاف أفضل لاعب أفريقي، ليصبح خامس مغربي يفوز بالجائزة وأول مغربي منذ مصطفى حجي عام 1998. واحتل المركز السادس في الكرة الذهبية، وهو أفضل ترتيب لمغربي. وفي كأس أمم أفريقيا 2025 التي أقيمت في المغرب، أحرز المنتخب اللقب القاري الثاني في تاريخه.",
        "ويوم الجمعة 13 نوفمبر سجل حكيمي هدفين، أحدهما من ضربة حرة، في الفوز 5-1 على النيجر في الدار البيضاء. وبثلاثة انتصارات في ثلاث مباريات يتصدر المغرب المجموعة A في تصفيات كأس أمم أفريقيا 2027."
      ]
    },
    sources: [
      ["Wikipedia (Achraf Hakimi)", "https://en.wikipedia.org/wiki/Achraf_Hakimi"],
      ["Africa Top Sports", "https://africatopsports.com/football/elim-can-2027-maroc-5-1-niger-une-demonstration-des-lions-de-latlas-face-au-niger-a-casablanca/"]
    ]
  },
  {
    slug: "especial-futebol-feminino-africano-cresce", especial: true, cat: "fem", tags: ["fem"], date: "2026-11-14T10:00",
    cover: { big: "6ª", cx: "82%", small: { pt: "final da Liga dos Campeões Feminina da CAF", fr: "finale de la Ligue des champions féminine de la CAF", en: "CAF Women's Champions League final", ar: "نهائي دوري أبطال أفريقيا للسيدات" } },
    title: { pt: "Mais dinheiro, mais público e novas campeãs: o crescimento do futebol feminino africano", fr: "Plus d'argent, plus de public et de nouvelles championnes : l'essor du football féminin africain", en: "More money, bigger crowds and new champions: the rise of African women's football", ar: "أموال أكثر وجمهور أكبر وبطلات جديدات: صعود كرة القدم النسائية في أفريقيا" },
    lead: { pt: "Criada em 2020, a Liga dos Campeões Feminina da CAF chega à sexta final neste domingo, com Mamelodi Sundowns e AS FAR, as duas maiores campeãs.", fr: "Créée en 2020, la Ligue des champions féminine de la CAF vit sa sixième finale ce dimanche, entre Mamelodi Sundowns et l'AS FAR, les deux clubs les plus titrés.", en: "Created in 2020, the CAF Women's Champions League reaches its sixth final on Sunday, between Mamelodi Sundowns and AS FAR, its two most successful clubs.", ar: "يبلغ دوري أبطال أفريقيا للسيدات، الذي أنشئ عام 2020، نهائيه السادس يوم الأحد بين ماميلودي صنداونز والجيش الملكي، أكثر ناديين تتويجًا." },
    body: {
      pt: [
        "A CAF decidiu criar a Liga dos Campeões Feminina em 30 de junho de 2020, na mesma reunião em que cancelou a CAN Feminina daquele ano por causa da covid-19. A primeira final foi em 2021, no Cairo, sem público: Mamelodi Sundowns 2 x 0 Hasaacas Ladies, de Gana.",
        "O torneio reúne oito clubes na fase final, saídos de eliminatórias nas seis zonas da CAF. O prêmio da campeã subiu de 400 mil para 600 mil dólares a partir de 2024, e o da vice, de 250 mil para 400 mil. A competição também abre portas na FIFA: o AS FAR, campeão de 2025, foi o primeiro clube a representar a CAF na primeira Copa dos Campeões Feminina da FIFA.",
        "As finais mostram o equilíbrio entre o sul e o norte do continente. O Mamelodi Sundowns, da África do Sul, ganhou em 2021 e 2023; o AS FAR, do Marrocos, em 2022 e 2025; e o TP Mazembe, da RD Congo, em 2024. Neste domingo (15), em Ismailia, no Egito, Sundowns e AS FAR decidem quem será o primeiro tricampeão.",
        "Na CAN Feminina, o crescimento também aparece. O torneio passou de 8 para 12 seleções em 2022. Na edição de 2024, disputada em 2025, o prêmio total subiu 45%, para 3,475 milhões de dólares, e o da campeã dobrou, para 1 milhão. O recorde de público é de 45.562 torcedores, na semifinal entre Marrocos e Nigéria, em 18 de julho de 2022, no Estádio Príncipe Moulay Abdellah, em Rabat.",
        "A Nigéria continua a maior potência, com 10 títulos, o último na edição de 2024. Mas o mapa está mudando: a África do Sul foi campeã em 2022, e Camarões conquistou em 2026 o primeiro título, com 3 a 0 sobre o Malawi na final."
      ],
      fr: [
        "La CAF a décidé de créer la Ligue des champions féminine le 30 juin 2020, lors de la réunion où elle a annulé la CAN féminine de cette année-là en raison du Covid-19. La première finale s'est jouée en 2021 au Caire, à huis clos : Mamelodi Sundowns 2-0 Hasaacas Ladies, du Ghana.",
        "Le tournoi final réunit huit clubs, issus d'éliminatoires dans les six zones de la CAF. La prime du vainqueur est passée de 400 000 à 600 000 dollars à partir de 2024, celle du finaliste de 250 000 à 400 000. La compétition ouvre aussi les portes de la FIFA : l'AS FAR, sacrée en 2025, a été le premier club à représenter la CAF à la première Coupe des champions féminine de la FIFA.",
        "Les finales montrent l'équilibre entre le sud et le nord du continent. Mamelodi Sundowns, d'Afrique du Sud, s'est imposé en 2021 et 2023 ; l'AS FAR, du Maroc, en 2022 et 2025 ; le TP Mazembe, de RD Congo, en 2024. Ce dimanche 15 novembre, à Ismaïlia, en Égypte, Sundowns et l'AS FAR se disputent le premier triplé.",
        "La CAN féminine grandit aussi. Le tournoi est passé de 8 à 12 sélections en 2022. Pour l'édition 2024, jouée en 2025, la dotation totale a augmenté de 45 %, à 3,475 millions de dollars, et la prime de la championne a doublé, à 1 million. Le record d'affluence est de 45 562 spectateurs, pour la demi-finale Maroc-Nigeria du 18 juillet 2022, au stade Prince Moulay Abdellah de Rabat.",
        "Le Nigeria reste la première puissance, avec 10 titres, le dernier lors de l'édition 2024. Mais la carte change : l'Afrique du Sud a été sacrée en 2022, et le Cameroun a remporté en 2026 son premier titre, 3-0 contre le Malawi en finale."
      ],
      en: [
        "CAF decided to create the Women's Champions League on 30 June 2020, at the same meeting where it cancelled that year's Women's AFCON because of Covid-19. The first final was played in 2021 in Cairo, behind closed doors: Mamelodi Sundowns 2-0 Hasaacas Ladies of Ghana.",
        "The final tournament brings together eight clubs that come through qualifiers in CAF's six zones. The winners' prize rose from 400,000 to 600,000 dollars from 2024, and the runners-up's from 250,000 to 400,000. The competition also opens FIFA's doors: AS FAR, the 2025 champions, were the first club to represent CAF at the first FIFA Women's Champions Cup.",
        "The finals show a balance between the south and the north of the continent. South Africa's Mamelodi Sundowns won in 2021 and 2023, Morocco's AS FAR in 2022 and 2025, and DR Congo's TP Mazembe in 2024. On Sunday (15 November), in Ismailia, Egypt, Sundowns and AS FAR play to become the first three-time champions.",
        "The Women's AFCON is growing too. The tournament went from 8 to 12 teams in 2022. For the 2024 edition, played in 2025, total prize money rose 45% to 3.475 million dollars, and the winners' prize doubled to 1 million. The attendance record is 45,562, for the Morocco v Nigeria semi-final on 18 July 2022 at the Prince Moulay Abdellah Stadium in Rabat.",
        "Nigeria remain the leading power, with 10 titles, the latest at the 2024 edition. But the map is changing: South Africa won in 2022, and Cameroon won their first title in 2026, beating Malawi 3-0 in the final."
      ],
      ar: [
        "قرر الكاف إنشاء دوري أبطال أفريقيا للسيدات في 30 يونيو 2020، في الاجتماع نفسه الذي ألغى فيه كأس أمم أفريقيا للسيدات لذلك العام بسبب جائحة كوفيد-19. وأقيم النهائي الأول عام 2021 في القاهرة دون جمهور، وفاز فيه ماميلودي صنداونز على هاساكاس ليديز الغاني 2-0.",
        "تجمع البطولة في أدوارها النهائية ثمانية أندية تتأهل عبر تصفيات في مناطق الكاف الست. وارتفعت جائزة البطل من 400 ألف إلى 600 ألف دولار ابتداء من 2024، وجائزة الوصيف من 250 ألفًا إلى 400 ألف. كما تفتح البطولة أبواب الفيفا: فقد كان الجيش الملكي، بطل 2025، أول نادٍ يمثل الكاف في أول نسخة من كأس أبطال الفيفا للسيدات.",
        "تكشف النهائيات توازنًا بين جنوب القارة وشمالها: فاز ماميلودي صنداونز الجنوب أفريقي عامي 2021 و2023، والجيش الملكي المغربي عامي 2022 و2025، وتي بي مازيمبي الكونغولي عام 2024. ويوم الأحد 15 نوفمبر في الإسماعيلية بمصر، يتنافس صنداونز والجيش الملكي على أن يصبح أحدهما أول من يتوج باللقب ثلاث مرات.",
        "وتنمو كأس أمم أفريقيا للسيدات أيضًا، إذ ارتفع عدد المنتخبات من 8 إلى 12 عام 2022. وفي نسخة 2024 التي أقيمت عام 2025 زادت الجوائز الإجمالية 45% لتبلغ 3.475 مليون دولار، وتضاعفت جائزة البطل إلى مليون دولار. والرقم القياسي للحضور 45,562 متفرجًا في نصف النهائي بين المغرب ونيجيريا في 18 يوليو 2022 على ملعب الأمير مولاي عبد الله في الرباط.",
        "وتبقى نيجيريا القوة الأولى بعشرة ألقاب، آخرها في نسخة 2024. لكن الخريطة تتغير: فقد توجت جنوب أفريقيا عام 2022، وأحرزت الكاميرون لقبها الأول عام 2026 بالفوز على مالاوي 3-0 في النهائي."
      ]
    },
    sources: [
      ["Wikipedia (CAF Women's Champions League)", "https://en.wikipedia.org/wiki/CAF_Women%27s_Champions_League"],
      ["Wikipedia (Women's Africa Cup of Nations)", "https://en.wikipedia.org/wiki/Women%27s_Africa_Cup_of_Nations"]
    ]
  },
  {
    slug: "marrocos-egito-goleiam-mali-vira", cat: "can", tags: ["can", "sel"], date: "2026-11-13T22:30",
    cover: { big: "5–1", cx: "82%", small: { pt: "Marrocos × Níger · Grupo A", fr: "Maroc × Niger · Groupe A", en: "Morocco × Niger · Group A", ar: "المغرب × النيجر · المجموعة A" } },
    title: { pt: "Marrocos e Egito goleiam, e Mali vira sobre Ruanda nas eliminatórias", fr: "Le Maroc et l'Égypte déroulent, le Mali renverse le Rwanda", en: "Morocco and Egypt run riot as Mali come from behind to beat Rwanda", ar: "المغرب ومصر يكتسحان، ومالي تقلب الطاولة على رواندا" },
    lead: { pt: "Hakimi marcou duas vezes nos 5 a 1 sobre o Níger em Casablanca, e Salah fez dois nos 5 a 0 do Egito sobre o Malawi.", fr: "Hakimi a marqué deux fois lors du 5-1 contre le Niger à Casablanca, et Salah a signé un doublé lors du 5-0 de l'Égypte contre le Malawi.", en: "Hakimi scored twice in a 5-1 win over Niger in Casablanca, and Salah got two in Egypt's 5-0 win over Malawi.", ar: "سجل حكيمي هدفين في الفوز 5-1 على النيجر في الدار البيضاء، وسجل صلاح هدفين في فوز مصر 5-0 على مالاوي." },
    body: {
      pt: [
        "No Estádio Mohammed V, em Casablanca, o Marrocos venceu o Níger por 5 a 1 nesta sexta-feira (13). Yassir Zabiri abriu o placar aos 4 minutos, com passe de Brahim Díaz, e Achraf Hakimi marcou duas vezes, uma delas de falta antes do intervalo. Youssef En-Nesyri e Ayoub Oufkir completaram, e Mohamed Ali descontou para o Níger. Com três vitórias em três jogos, o Marrocos lidera o Grupo A com 9 pontos, três à frente do Gabão.",
        "No Estádio Internacional do Cairo, o Egito goleou o Malawi por 5 a 0. Nasser Maher, Omar Marmoush e Mohamed Hany marcaram no primeiro tempo, e Mohamed Salah fez dois no fim, o segundo de pênalti. O Egito lidera o Grupo B com 7 pontos.",
        "Em Bamako, no Estádio 26 de Março, o Mali virou sobre Ruanda e venceu por 3 a 2. Jojea Kwizera e Phanuel Kavita colocaram os ruandeses na frente duas vezes, e Kamory Doumbia e Moussa Kounfolo Yeo empataram. Mamadou Camara fez o gol da vitória aos 84 minutos. O Mali soma 9 pontos e lidera o Grupo K, três à frente de Ruanda. As duas seleções voltam a se enfrentar na terça-feira (17), em Kigali.",
        "A 3ª rodada termina no sábado (14), com Uganda x Botsuana, Argélia x Togo e Angola x Sudão do Sul."
      ],
      fr: [
        "Au stade Mohammed-V de Casablanca, le Maroc a battu le Niger 5-1 ce vendredi 13 novembre. Yassir Zabiri a ouvert le score à la 4e minute sur une passe de Brahim Díaz, et Achraf Hakimi a marqué deux fois, dont un coup franc avant la pause. Youssef En-Nesyri et Ayoub Oufkir ont complété la marque, Mohamed Ali réduisant l'écart pour le Niger. Avec trois victoires en trois matchs, le Maroc mène le groupe A avec 9 points, trois de plus que le Gabon.",
        "Au stade international du Caire, l'Égypte a battu le Malawi 5-0. Nasser Maher, Omar Marmoush et Mohamed Hany ont marqué en première période, puis Mohamed Salah a signé un doublé en fin de match, le second sur penalty. L'Égypte mène le groupe B avec 7 points.",
        "À Bamako, au stade du 26-Mars, le Mali a renversé le Rwanda 3-2. Jojea Kwizera et Phanuel Kavita ont donné deux fois l'avantage aux Rwandais, Kamory Doumbia et Moussa Kounfolo Yeo égalisant à chaque fois. Mamadou Camara a marqué le but de la victoire à la 84e minute. Le Mali compte 9 points et mène le groupe K, trois de plus que le Rwanda. Les deux équipes se retrouvent mardi 17 novembre à Kigali.",
        "La 3e journée s'achève samedi 14 novembre avec Ouganda-Botswana, Algérie-Togo et Angola-Soudan du Sud."
      ],
      en: [
        "At the Stade Mohammed V in Casablanca, Morocco beat Niger 5-1 on Friday (13 November). Yassir Zabiri opened the scoring on 4 minutes from a Brahim Díaz pass, and Achraf Hakimi scored twice, one of them a free kick before half-time. Youssef En-Nesyri and Ayoub Oufkir completed the rout, with Mohamed Ali pulling one back for Niger. With three wins from three, Morocco lead Group A on 9 points, three ahead of Gabon.",
        "At Cairo International Stadium, Egypt beat Malawi 5-0. Nasser Maher, Omar Marmoush and Mohamed Hany scored in the first half, and Mohamed Salah added two late on, the second from the penalty spot. Egypt lead Group B on 7 points.",
        "In Bamako, at the Stade du 26-Mars, Mali came from behind to beat Rwanda 3-2. Jojea Kwizera and Phanuel Kavita twice put Rwanda ahead, and Kamory Doumbia and Moussa Kounfolo Yeo equalised each time. Mamadou Camara scored the winner on 84 minutes. Mali have 9 points and lead Group K, three ahead of Rwanda. The sides meet again on Tuesday (17 November) in Kigali.",
        "Matchday 3 ends on Saturday (14 November) with Uganda v Botswana, Algeria v Togo and Angola v South Sudan."
      ],
      ar: [
        "على ملعب محمد الخامس في الدار البيضاء فاز المغرب على النيجر 5-1 يوم الجمعة 13 نوفمبر. افتتح ياسر الزبيري التسجيل في الدقيقة 4 بتمريرة من إبراهيم دياز، وسجل أشرف حكيمي هدفين أحدهما من ضربة حرة قبل الاستراحة. وأضاف يوسف النصيري وأيوب أوفقير هدفين، فيما قلّص محمد علي الفارق للنيجر. وبثلاثة انتصارات في ثلاث مباريات يتصدر المغرب المجموعة A بـ9 نقاط، بفارق ثلاث نقاط عن الغابون.",
        "وعلى استاد القاهرة الدولي اكتسحت مصر مالاوي 5-0. سجل ناصر ماهر وعمر مرموش ومحمد هاني في الشوط الأول، وأضاف محمد صلاح هدفين في نهاية المباراة، الثاني من ركلة جزاء. وتتصدر مصر المجموعة B بـ7 نقاط.",
        "وفي باماكو، على ملعب 26 مارس، قلبت مالي تأخرها أمام رواندا وفازت 3-2. تقدمت رواندا مرتين عبر جوجيا كويزيرا وفانويل كافيتا، وأدرك كاموري دومبيا وموسى كونفولو ييو التعادل في كل مرة. وسجل مامادو كامارا هدف الفوز في الدقيقة 84. وتملك مالي 9 نقاط في صدارة المجموعة K بفارق ثلاث نقاط عن رواندا. ويلتقي المنتخبان مجدداً يوم الثلاثاء 17 نوفمبر في كيغالي.",
        "وتختتم الجولة الثالثة يوم السبت 14 نوفمبر بمباريات أوغندا وبوتسوانا، والجزائر وتوغو، وأنغولا وجنوب السودان."
      ]
    },
    sources: [
      ["Africa Top Sports", "https://africatopsports.com/football/elim-can-2027-maroc-5-1-niger-une-demonstration-des-lions-de-latlas-face-au-niger-a-casablanca/"],
      ["Le360", "https://sport.le360.ma/football/can/eliminatoires-de-la-can-2027-portes-par-un-grand-hakimi-les-lions-de-latlas-surclassent-le-niger_IZWJHTV4XNEQLOEVER4UUQFD24/"],
      ["Africa Soccer", "https://africasoccer.com/afcon-2027-qualifiers-egypt-thrash-malawi-5-0-to-extend-group-b-lead/"],
      ["Sport News Africa", "https://sportnewsafrica.com/actualites/can-2027-mali-rwanda-3-2-debrief/"]
    ]
  },
  {
    slug: "libia-vence-tunisia-em-sfax", cat: "can", tags: ["can", "sel"], date: "2026-11-13T18:30",
    cover: { big: "0–2", cx: "18%", small: { pt: "Tunísia × Líbia · Grupo H", fr: "Tunisie × Libye · Groupe H", en: "Tunisia × Libya · Group H", ar: "تونس × ليبيا · المجموعة H" } },
    title: { pt: "Líbia vence a Tunísia em Sfax; Nigéria se recupera e Quênia arranca empate da África do Sul", fr: "La Libye bat la Tunisie à Sfax ; le Nigeria se relance et le Kenya arrache le nul en Afrique du Sud", en: "Libya beat Tunisia in Sfax as Nigeria bounce back and Kenya snatch a draw in South Africa", ar: "ليبيا تفوز على تونس في صفاقس، ونيجيريا تستعيد توازنها، وكينيا تنتزع التعادل من جنوب أفريقيا" },
    lead: { pt: "Na tarde desta sexta-feira (13) das eliminatórias da CAN 2027, Gabão, Burkina Faso e Cabo Verde também venceram.", fr: "Ce vendredi 13 novembre après-midi, dans les éliminatoires de la CAN 2027, le Gabon, le Burkina Faso et le Cap-Vert ont aussi gagné.", en: "On Friday afternoon (13 November) in AFCON 2027 qualifying, Gabon, Burkina Faso and Cape Verde also won.", ar: "وفي مساء الجمعة 13 نوفمبر من تصفيات كأس أمم أفريقيا 2027 فازت أيضاً الغابون وبوركينا فاسو والرأس الأخضر." },
    body: {
      pt: [
        "A Tunísia perdeu em casa para a Líbia por 2 a 0, no Estádio Taïeb Mhiri, em Sfax. Ali Youssef abriu o placar de pênalti no fim do primeiro tempo, após falta de Ali Maaloul, e Hamdou Elhouni fez o segundo aos 64 minutos, em contra-ataque. A Tunísia ainda teve um gol anulado por impedimento. No Grupo H, a Líbia soma 4 pontos, os mesmos de Uganda, que tem um jogo a menos; a Tunísia tem 2. Como Uganda já tem vaga garantida como país-sede, o grupo vale só mais uma vaga.",
        "Em Uyo, a Nigéria venceu a Tanzânia por 3 a 1 e se recuperou da derrota para a Guiné-Bissau. Alhassan Yusuf marcou logo no começo, com passe de Ademola Lookman, e Alphonce Msanga empatou ainda no primeiro tempo. Na segunda etapa, Tolu Arokodare marcou duas vezes. A Nigéria chega a 6 pontos, um a menos que a líder Guiné-Bissau. As duas seleções voltam a se enfrentar na terça-feira (17), em Zanzibar.",
        "No Orlando Stadium, em Soweto, a África do Sul de Pitso Mosimane empatou por 2 a 2 com o Quênia de Benni McCarthy. Os sul-africanos saíram na frente com gol contra de Amos Wanjala, e Michael Olunga empatou de pênalti antes do intervalo. Relebohile Mofokeng recolocou a África do Sul em vantagem no segundo tempo, mas Ryan Ogam empatou no último minuto. A África do Sul lidera o Grupo D com 7 pontos, um à frente da Guiné.",
        "O Gabão bateu o Lesoto por 2 a 0, com dois gols de Denis Bouanga no segundo tempo, e chegou a 6 pontos no Grupo A, os mesmos do Marrocos, que ainda joga nesta sexta. Em Ouagadougou, Burkina Faso venceu a Mauritânia por 1 a 0, com gol de Elohim Kaboré nos acréscimos, e alcançou o Benin no topo do Grupo F, com 7 pontos. Em Praia, Cabo Verde conquistou a primeira vitória nas eliminatórias: 4 a 2 sobre a Libéria, com gols de Ayoni dos Santos, Djé Tavares, Dailon Livramento e Derensili Fernandes."
      ],
      fr: [
        "La Tunisie s'est inclinée 2-0 à domicile face à la Libye, au stade Taïeb Mhiri de Sfax. Ali Youssef a ouvert le score sur penalty en fin de première période, après une faute d'Ali Maaloul, et Hamdou Elhouni a doublé la mise à la 64e minute en contre-attaque. La Tunisie a aussi vu un but refusé pour hors-jeu. Dans le groupe H, la Libye compte 4 points, autant que l'Ouganda, qui a un match en moins ; la Tunisie en a 2. L'Ouganda étant qualifié d'office comme pays hôte, il ne reste qu'une place dans ce groupe.",
        "À Uyo, le Nigeria a battu la Tanzanie 3-1 et s'est relancé après sa défaite contre la Guinée-Bissau. Alhassan Yusuf a marqué d'entrée sur une passe d'Ademola Lookman, et Alphonce Msanga a égalisé avant la pause. En seconde période, Tolu Arokodare a signé un doublé. Le Nigeria compte 6 points, un de moins que la Guinée-Bissau, en tête. Les deux équipes se retrouvent mardi 17 novembre à Zanzibar.",
        "À l'Orlando Stadium de Soweto, l'Afrique du Sud de Pitso Mosimane a fait match nul 2-2 avec le Kenya de Benni McCarthy. Les Sud-Africains ont ouvert le score sur un but contre son camp d'Amos Wanjala, avant que Michael Olunga n'égalise sur penalty avant la pause. Relebohile Mofokeng a redonné l'avantage à l'Afrique du Sud en seconde période, mais Ryan Ogam a égalisé dans la dernière minute. L'Afrique du Sud mène le groupe D avec 7 points, un de plus que la Guinée.",
        "Le Gabon a battu le Lesotho 2-0 grâce à un doublé de Denis Bouanga en seconde période, et compte 6 points dans le groupe A, autant que le Maroc, qui joue plus tard ce vendredi. À Ouagadougou, le Burkina Faso a battu la Mauritanie 1-0 sur un but d'Elohim Kaboré dans le temps additionnel et rejoint le Bénin en tête du groupe F, avec 7 points. À Praia, le Cap-Vert a signé sa première victoire dans ces éliminatoires : 4-2 contre le Liberia, avec des buts d'Ayoni dos Santos, Djé Tavares, Dailon Livramento et Derensili Fernandes."
      ],
      en: [
        "Tunisia lost 2-0 at home to Libya at the Stade Taïeb Mhiri in Sfax. Ali Youssef scored a penalty late in the first half after a foul by Ali Maaloul, and Hamdou Elhouni added the second on 64 minutes on the counter-attack. Tunisia also had a goal ruled out for offside. In Group H, Libya have 4 points, the same as Uganda, who have a game in hand; Tunisia have 2. With Uganda already qualified as a host nation, only one more place is available in the group.",
        "In Uyo, Nigeria beat Tanzania 3-1 to recover from their defeat by Guinea-Bissau. Alhassan Yusuf scored early from an Ademola Lookman pass, and Alphonce Msanga equalised before half-time. In the second half Tolu Arokodare scored twice. Nigeria move to 6 points, one behind leaders Guinea-Bissau. The sides meet again on Tuesday (17 November) in Zanzibar.",
        "At Orlando Stadium in Soweto, Pitso Mosimane's South Africa drew 2-2 with Benni McCarthy's Kenya. South Africa went ahead through an Amos Wanjala own goal, and Michael Olunga levelled from the penalty spot before the break. Relebohile Mofokeng put South Africa back in front in the second half, but Ryan Ogam equalised in the final minute. South Africa lead Group D on 7 points, one ahead of Guinea.",
        "Gabon beat Lesotho 2-0 with two second-half goals from Denis Bouanga and have 6 points in Group A, the same as Morocco, who play later on Friday. In Ouagadougou, Burkina Faso beat Mauritania 1-0 with an Elohim Kaboré goal in stoppage time and joined Benin at the top of Group F on 7 points. In Praia, Cape Verde won for the first time in this campaign, 4-2 against Liberia, with goals from Ayoni dos Santos, Djé Tavares, Dailon Livramento and Derensili Fernandes."
      ],
      ar: [
        "خسرت تونس على أرضها أمام ليبيا 0-2 على ملعب الطيب المهيري في صفاقس. افتتح علي يوسف التسجيل من ركلة جزاء في نهاية الشوط الأول بعد خطأ من علي معلول، وأضاف حمدو الهوني الهدف الثاني في الدقيقة 64 من هجمة مرتدة. وألغي لتونس هدف بداعي التسلل. وفي المجموعة H تملك ليبيا 4 نقاط، مثل أوغندا التي لعبت مباراة أقل، ولتونس نقطتان. وبما أن أوغندا ضمنت مكانها بصفتها دولة مضيفة، لم يبق في المجموعة سوى بطاقة واحدة.",
        "وفي أويو فازت نيجيريا على تنزانيا 3-1 واستعادت توازنها بعد الخسارة أمام غينيا بيساو. سجل الحسن يوسف في البداية بتمريرة من أديمولا لوكمان، وأدرك ألفونس مسانغا التعادل قبل الاستراحة. وفي الشوط الثاني سجل تولو أروكوداري هدفين. وترفع نيجيريا رصيدها إلى 6 نقاط بفارق نقطة عن غينيا بيساو المتصدرة. ويلتقي المنتخبان مجدداً يوم الثلاثاء 17 نوفمبر في زنجبار.",
        "وعلى ملعب أورلاندو في سويتو تعادلت جنوب أفريقيا بقيادة بيتسو موسيماني مع كينيا بقيادة بيني مكارثي 2-2. تقدمت جنوب أفريقيا بهدف عكسي من أموس وانجالا، وأدرك مايكل أولونغا التعادل من ركلة جزاء قبل الاستراحة. وأعاد ريليبوهيلي موفوكنغ التقدم لجنوب أفريقيا في الشوط الثاني، لكن رايان أوغام عادل النتيجة في الدقيقة الأخيرة. وتتصدر جنوب أفريقيا المجموعة D بـ7 نقاط بفارق نقطة عن غينيا.",
        "وفازت الغابون على ليسوتو 2-0 بهدفين لدينيس بوانغا في الشوط الثاني، ورفعت رصيدها إلى 6 نقاط في المجموعة A، مثل المغرب الذي يلعب لاحقاً يوم الجمعة. وفي واغادوغو فازت بوركينا فاسو على موريتانيا 1-0 بهدف لإلوهيم كابوري في الوقت بدل الضائع، ولحقت ببنين في صدارة المجموعة F بـ7 نقاط. وفي برايا حققت الرأس الأخضر فوزها الأول في التصفيات بنتيجة 4-2 على ليبيريا، بأهداف أيوني دوس سانتوس وجيه تافاريس ودايلون ليفرامنتو وديرينسيلي فرنانديز."
      ]
    },
    sources: [
      ["Réalités", "https://realites.com.tn/fr/qualifications-can-2027-la-tunisie-chute-a-domicile-face-a-la-libye/"],
      ["Africa Soccer", "https://africasoccer.com/arokodare-nigeria-tanzania-afcon-win/"],
      ["TVC News", "https://www.tvcnews.tv/afcon-qualifiers-arokodare-nets-brace-as-seagles-trash-tanzania-3-1/"],
      ["The Citizen", "https://www.citizen.co.za/sport/soccer/pitsos-bafana-rocked-by-bennis-kenya-in-afcon-draw/"],
      ["Afrik-Foot", "https://www.afrik-foot.com/can-2027-q-la-tunisie-sombre-bouanga-porte-le-gabon-le-burkina-faso-sarrache-le-cap-vert-gagne-enfin"],
      ["Balai", "https://www.balai.cv/noticias/cabo-verde-vence-liberia-por-4-2-e-conquista-primeira-vitoria-na-qualificacao-para-o-can-2027/"]
    ]
  },
  {
    slug: "etiopia-vence-mocambique", cat: "can", tags: ["can", "sel"], date: "2026-11-13T15:30",
    cover: { big: "0–1", cx: "18%", small: { pt: "Moçambique × Etiópia · Grupo J", fr: "Mozambique × Éthiopie · Groupe J", en: "Mozambique × Ethiopia · Group J", ar: "موزمبيق × إثيوبيا · المجموعة J" } },
    title: { pt: "Etiópia vence Moçambique fora de casa com gol aos 87 minutos", fr: "L'Éthiopie s'impose au Mozambique sur un but à la 87e minute", en: "Ethiopia win in Mozambique with an 87th-minute goal", ar: "إثيوبيا تفوز في موزمبيق بهدف في الدقيقة 87" },
    lead: { pt: "No mesmo horário, Zâmbia e Burundi empataram por 1 a 1, e Comores e Congo ficaram no 0 a 0 em Moroni.", fr: "Au même moment, la Zambie et le Burundi ont fait match nul 1-1, et les Comores et le Congo se sont neutralisés 0-0 à Moroni.", en: "At the same time, Zambia and Burundi drew 1-1, and Comoros and Congo played out a goalless draw in Moroni.", ar: "وفي التوقيت نفسه تعادلت زامبيا وبوروندي 1-1، وانتهت مباراة جزر القمر والكونغو بالتعادل السلبي في موروني." },
    body: {
      pt: [
        "A Etiópia conquistou nesta sexta-feira (13) a primeira vitória nas eliminatórias da CAN 2027: 1 a 0 sobre Moçambique, fora de casa. O gol saiu aos 87 minutos, com Canaan Markneh, depois de um jogo sem gols por quase todo o tempo.",
        "Com o resultado, a Etiópia chega a 3 pontos no Grupo J. Moçambique, que vinha invicto, fica com 4, atrás do líder Senegal, que tem 7. As duas seleções voltam a se enfrentar na terça-feira (17).",
        "Pelo Grupo I, Zâmbia e Burundi empataram por 1 a 1. Edward Chilufya abriu o placar para os zambianos aos 65 minutos, e Jean Girumugisha empatou aos 83. A Zâmbia soma 4 pontos, e o Burundi, 2. Os dois times se reencontram na terça-feira (17).",
        "Em Moroni, no Estádio de Malouzini, Comores e Congo ficaram no 0 a 0 pelo Grupo G. Os comorenses têm 4 pontos, atrás de Camarões, que tem 7; o Congo tem 2. O jogo de volta será na terça-feira (17), em Brazzaville."
      ],
      fr: [
        "L'Éthiopie a signé ce vendredi 13 novembre sa première victoire dans les éliminatoires de la CAN 2027 : 1-0 au Mozambique. Canaan Markneh a marqué à la 87e minute, au terme d'un match resté sans but presque jusqu'au bout.",
        "Avec ce succès, l'Éthiopie compte 3 points dans le groupe J. Le Mozambique, qui était invaincu, reste à 4 points, derrière le leader sénégalais (7 points). Les deux équipes se retrouvent mardi 17 novembre.",
        "Dans le groupe I, la Zambie et le Burundi ont fait match nul 1-1. Edward Chilufya a ouvert le score pour les Zambiens à la 65e minute, et Jean Girumugisha a égalisé à la 83e. La Zambie compte 4 points, le Burundi 2. Les deux équipes se retrouvent mardi 17 novembre.",
        "À Moroni, au stade de Malouzini, les Comores et le Congo se sont neutralisés 0-0 dans le groupe G. Les Comoriens ont 4 points, derrière le Cameroun (7) ; le Congo en a 2. Le match retour aura lieu mardi 17 novembre à Brazzaville."
      ],
      en: [
        "Ethiopia earned their first win of AFCON 2027 qualifying on Friday (13 November): 1-0 away to Mozambique. Canaan Markneh scored on 87 minutes after a match that stayed goalless for almost the whole game.",
        "The result takes Ethiopia to 3 points in Group J. Mozambique, unbeaten until now, stay on 4, behind leaders Senegal on 7. The sides meet again on Tuesday (17 November).",
        "In Group I, Zambia and Burundi drew 1-1. Edward Chilufya put Zambia ahead on 65 minutes and Jean Girumugisha equalised on 83. Zambia have 4 points and Burundi 2. They meet again on Tuesday (17 November).",
        "In Moroni, at the Stade de Malouzini, Comoros and Congo drew 0-0 in Group G. Comoros have 4 points, behind Cameroon on 7; Congo have 2. The return match is on Tuesday (17 November) in Brazzaville."
      ],
      ar: [
        "حققت إثيوبيا يوم الجمعة 13 نوفمبر فوزها الأول في تصفيات كأس أمم أفريقيا 2027، بنتيجة 1-0 على موزمبيق خارج أرضها. وسجل كنعان ماركنه الهدف في الدقيقة 87 بعد مباراة بقيت بلا أهداف حتى قرب النهاية.",
        "بهذه النتيجة ترفع إثيوبيا رصيدها إلى 3 نقاط في المجموعة J. ويبقى رصيد موزمبيق، التي لم تكن قد خسرت من قبل، عند 4 نقاط خلف السنغال المتصدرة بـ7 نقاط. ويلتقي المنتخبان مجدداً يوم الثلاثاء 17 نوفمبر.",
        "وفي المجموعة I تعادلت زامبيا وبوروندي 1-1. افتتح إدوارد شيلوفيا التسجيل لزامبيا في الدقيقة 65، وأدرك جان جيروموغيشا التعادل في الدقيقة 83. ولزامبيا 4 نقاط ولبوروندي نقطتان. ويلتقي المنتخبان مجدداً يوم الثلاثاء 17 نوفمبر.",
        "وفي موروني، على ملعب مالوزيني، تعادلت جزر القمر والكونغو دون أهداف في المجموعة G. ولجزر القمر 4 نقاط خلف الكاميرون صاحبة 7 نقاط، وللكونغو نقطتان. وتقام مباراة الإياب يوم الثلاثاء 17 نوفمبر في برازافيل."
      ]
    },
    sources: [
      ["CAF", "https://www.cafonline.com/afcon2025/news/totalenergies-caf-afcon-2027-qualifiers-ethiopia-stun-mozambique-as-burundi-silence-zambia-and-comoros-held-by-congo/"],
      ["Africa Soccer", "https://africasoccer.com/afcon-2027-qualifiers-ethiopia-stun-mozambique/"]
    ]
  },
  {
    slug: "senegal-costa-do-marfim-camaroes-vencem", cat: "can", tags: ["can", "sel"], date: "2026-11-13T09:00",
    cover: { big: "4–1", cx: "82%", small: { pt: "Senegal × Sudão · Grupo J", fr: "Sénégal × Soudan · Groupe J", en: "Senegal × Sudan · Group J", ar: "السنغال × السودان · المجموعة J" } },
    title: { pt: "Senegal goleia o Sudão; Costa do Marfim e Camarões vencem e lideram seus grupos", fr: "Le Sénégal corrige le Soudan ; la Côte d'Ivoire et le Cameroun gagnent et mènent leurs groupes", en: "Senegal thrash Sudan as Côte d'Ivoire and Cameroon win to lead their groups", ar: "السنغال تكتسح السودان، وكوت ديفوار والكاميرون تفوزان وتتصدران مجموعتيهما" },
    lead: { pt: "A quinta-feira (12) das eliminatórias da CAN 2027 teve ainda vitórias de Benin e Guiné e empates de Guiné Equatorial e Madagascar.", fr: "Le jeudi 12 novembre des éliminatoires de la CAN 2027 a aussi vu les victoires du Bénin et de la Guinée, et les nuls de la Guinée équatoriale et de Madagascar.", en: "Thursday's AFCON 2027 qualifiers also brought wins for Benin and Guinea and draws for Equatorial Guinea and Madagascar.", ar: "وشهد يوم الخميس 12 نوفمبر من تصفيات كأس أمم أفريقيا 2027 أيضاً فوز بنين وغينيا، وتعادل غينيا الاستوائية ومدغشقر." },
    body: {
      pt: [
        "O Senegal goleou o Sudão por 4 a 1 pelo Grupo J. Nicolas Jackson abriu o placar aos 31 minutos, e Mohamed Abuaagla empatou aos 45. No segundo tempo, Boulaye Dia, Ibrahim Mbaye e Pathé Mboup fecharam a conta. Os Leões chegaram a 7 pontos e lideram o grupo.",
        "Em Bouaké, no Estádio da Paz, a Costa do Marfim venceu a Gâmbia por 2 a 1, com gols de Malick Yalcouyé e Elye Wahi no primeiro tempo; Musa Barrow descontou aos 38 minutos. Com três vitórias em três jogos, os Elefantes lideram o Grupo C com 9 pontos, três a mais que a Gâmbia.",
        "Camarões bateu a Namíbia por 2 a 0 no Estádio Kouekong, em Bafoussam, com gols de Saidou Alioum Moubarak, aos 16 minutos, e Bil Nsongo, aos 29, e lidera o Grupo G com 7 pontos.",
        "Pelo Grupo F, o Benin venceu a República Centro-Africana por 4 a 1, com dois gols de Tosin Aiyegun, e chegou a 7 pontos. A Guiné bateu a Eritreia por 2 a 1 (Grupo D). Guiné Equatorial e Zimbábue empataram sem gols (Grupo E), e Madagascar e Guiné-Bissau ficaram no 1 a 1 (Grupo L): Warren Caddy marcou aos 59 minutos e Renato Nhaga empatou aos 84. A Guiné-Bissau segue líder do Grupo L, com 7 pontos.",
        "Os jogos de volta estão marcados para 16 e 17 de novembro."
      ],
      fr: [
        "Le Sénégal a battu le Soudan 4-1 dans le groupe J. Nicolas Jackson a ouvert le score à la 31e minute, Mohamed Abuaagla a égalisé à la 45e. En seconde période, Boulaye Dia, Ibrahim Mbaye et Pathé Mboup ont alourdi la marque. Les Lions comptent 7 points et mènent le groupe.",
        "À Bouaké, au stade de la Paix, la Côte d'Ivoire a battu la Gambie 2-1 grâce à Malick Yalcouyé et Elye Wahi en première période ; Musa Barrow a réduit l'écart à la 38e minute. Avec trois victoires en trois matchs, les Éléphants mènent le groupe C avec 9 points, trois de plus que la Gambie.",
        "Le Cameroun a battu la Namibie 2-0 au stade Kouekong de Bafoussam, sur des buts de Saidou Alioum Moubarak (16e) et Bil Nsongo (29e), et mène le groupe G avec 7 points.",
        "Dans le groupe F, le Bénin a battu la Centrafrique 4-1, avec un doublé de Tosin Aiyegun, et compte 7 points. La Guinée a battu l'Érythrée 2-1 (groupe D). La Guinée équatoriale et le Zimbabwe ont fait match nul 0-0 (groupe E), et Madagascar et la Guinée-Bissau 1-1 (groupe L) : Warren Caddy a marqué à la 59e minute, Renato Nhaga a égalisé à la 84e. La Guinée-Bissau reste en tête du groupe L avec 7 points.",
        "Les matchs retour sont prévus les 16 et 17 novembre."
      ],
      en: [
        "Senegal beat Sudan 4-1 in Group J. Nicolas Jackson opened the scoring on 31 minutes and Mohamed Abuaagla equalised on 45. In the second half Boulaye Dia, Ibrahim Mbaye and Pathé Mboup completed the win. The Lions have 7 points and lead the group.",
        "In Bouaké, at the Stade de la Paix, Côte d'Ivoire beat Gambia 2-1 with first-half goals from Malick Yalcouyé and Elye Wahi; Musa Barrow pulled one back on 38 minutes. With three wins from three, the Elephants lead Group C on 9 points, three clear of Gambia.",
        "Cameroon beat Namibia 2-0 at the Kouekong Stadium in Bafoussam, with goals from Saidou Alioum Moubarak (16) and Bil Nsongo (29), and lead Group G on 7 points.",
        "In Group F, Benin beat the Central African Republic 4-1, with two goals from Tosin Aiyegun, and moved to 7 points. Guinea beat Eritrea 2-1 (Group D). Equatorial Guinea and Zimbabwe drew 0-0 (Group E), and Madagascar and Guinea-Bissau drew 1-1 (Group L): Warren Caddy scored on 59 minutes and Renato Nhaga equalised on 84. Guinea-Bissau still lead Group L on 7 points.",
        "The return matches are on 16 and 17 November."
      ],
      ar: [
        "فازت السنغال على السودان 4-1 في المجموعة J. افتتح نيكولا جاكسون التسجيل في الدقيقة 31، وأدرك محمد أبو عاقلة التعادل في الدقيقة 45. وفي الشوط الثاني أضاف بولاي ديا وإبراهيم مباي وباتيه مبوب ثلاثة أهداف. ورفعت أسود التيرانغا رصيدها إلى 7 نقاط في صدارة المجموعة.",
        "وفي بواكي، على ملعب السلام، فازت كوت ديفوار على غامبيا 2-1 بهدفين في الشوط الأول لماليك يالكوييه وإيلي واهي، فيما قلّص موسى بارو الفارق في الدقيقة 38. وبثلاثة انتصارات في ثلاث مباريات تتصدر الأفيال المجموعة C بـ9 نقاط، بفارق ثلاث نقاط عن غامبيا.",
        "وتغلبت الكاميرون على ناميبيا 2-0 على ملعب كويكونغ في بافوسام، بهدفين لسعيدو عليوم مبارك في الدقيقة 16 وبيل نسونغو في الدقيقة 29، لتتصدر المجموعة G بـ7 نقاط.",
        "وفي المجموعة F فازت بنين على أفريقيا الوسطى 4-1، منها هدفان لتوسين أييغون، ورفعت رصيدها إلى 7 نقاط. وفازت غينيا على إريتريا 2-1 في المجموعة D. وتعادلت غينيا الاستوائية وزيمبابوي دون أهداف في المجموعة E، وتعادلت مدغشقر وغينيا بيساو 1-1 في المجموعة L: سجل وارن كادي في الدقيقة 59 وأدرك ريناتو نهاغا التعادل في الدقيقة 84. وتبقى غينيا بيساو في صدارة المجموعة L بـ7 نقاط.",
        "وتقام مباريات الإياب يومي 16 و17 نوفمبر."
      ]
    },
    sources: [
      ["AllAfrica", "https://fr.allafrica.com/stories/202611130200.html"],
      ["Africa Top Sports", "https://africatopsports.com/football/elim-can-2027-la-cote-divoire-domine-la-gambie-2-1-et-prend-seule-la-tete-du-groupe-c/"],
      ["Blueprint", "https://blueprint.ng/afcon-2027-qualifiers-ghana-end-3-year-drought-as-senegal-dr-congo-win-big-full-results/"],
      ["CAF", "https://www.cafonline.com/afcon2025/news/totalenergies-caf-afcon-2027-qualifiers-dr-congo-extend-perfect-run-as-guinea-bissau-and-zimbabwe-held-to-draws/"]
    ]
  },
  {
    slug: "gana-vence-somalia", cat: "can", tags: ["can", "sel"], date: "2026-11-12T19:00",
    cover: { big: "2–0", cx: "82%", small: { pt: "Gana × Somália · Grupo C", fr: "Ghana × Somalie · Groupe C", en: "Ghana × Somalia · Group C" } },
    title: { pt: "Gana vence a Somália e soma os primeiros pontos rumo à CAN 2027", fr: "Le Ghana bat la Somalie et marque ses premiers points vers la CAN 2027", en: "Ghana beat Somalia for their first points on the road to AFCON 2027" },
    lead: { pt: "Com Kudus dando os dois passes, os Black Stars fizeram 2 a 0 no Estádio Essipong, em Sekondi-Takoradi.", fr: "Avec deux passes décisives de Kudus, les Black Stars se sont imposés 2-0 au stade Essipong de Sekondi-Takoradi.", en: "With Kudus setting up both goals, the Black Stars won 2-0 at the Essipong Stadium in Sekondi-Takoradi." },
    body: {
      pt: [
        "Os Black Stars conquistaram nesta quinta-feira (12) a primeira vitória nas eliminatórias da CAN 2027: 2 a 0 sobre a Somália, no Estádio Essipong, em Sekondi-Takoradi.",
        "Jonas Adjetey abriu o placar de cabeça nos acréscimos do primeiro tempo, e Felix Afena-Gyan ampliou aos 62 minutos. Mohammed Kudus, de volta à seleção, deu os dois passes. O capitão Jordan Ayew ainda desperdiçou um pênalti.",
        "O resultado encerra uma série de oito partidas sem vitória de Gana em eliminatórias da CAN. Depois das derrotas para Costa do Marfim e Gâmbia nas duas primeiras rodadas, Carlos Queiroz deixou o cargo, e o sueco Kim Lars Björkegren, técnico da seleção feminina, assumiu de forma interina, com Ibrahim Tanko e Godwin Attram como auxiliares.",
        "As duas seleções voltam a se enfrentar na segunda-feira (16), com mando da Somália. No mesmo Grupo C, Costa do Marfim e Gâmbia, com seis pontos cada, se enfrentam ainda nesta quinta."
      ],
      fr: [
        "Les Black Stars ont signé ce jeudi 12 novembre leur première victoire dans les éliminatoires de la CAN 2027 : 2-0 contre la Somalie, au stade Essipong de Sekondi-Takoradi.",
        "Jonas Adjetey a ouvert le score de la tête dans le temps additionnel de la première période, puis Felix Afena-Gyan a doublé la mise à la 62e minute. Mohammed Kudus, de retour en sélection, a délivré les deux passes décisives. Le capitaine Jordan Ayew a manqué un penalty.",
        "Ce succès met fin à une série de huit matchs sans victoire du Ghana en éliminatoires de la CAN. Après les défaites contre la Côte d'Ivoire et la Gambie lors des deux premières journées, Carlos Queiroz a quitté son poste ; le Suédois Kim Lars Björkegren, sélectionneur de l'équipe féminine, assure l'intérim, assisté d'Ibrahim Tanko et de Godwin Attram.",
        "Les deux équipes se retrouvent lundi 16 novembre, cette fois avec la Somalie à domicile. Dans le même groupe C, la Côte d'Ivoire et la Gambie, six points chacune, s'affrontent également ce jeudi."
      ],
      en: [
        "The Black Stars earned their first win of AFCON 2027 qualifying on Thursday (12 November): 2-0 against Somalia at the Essipong Stadium in Sekondi-Takoradi.",
        "Jonas Adjetey headed the opener in first-half stoppage time, and Felix Afena-Gyan doubled the lead on 62 minutes. Mohammed Kudus, back in the squad, provided both assists. Captain Jordan Ayew missed a penalty.",
        "The result ends an eight-match winless run for Ghana in AFCON qualifiers. After defeats to Côte d'Ivoire and Gambia in the first two rounds, Carlos Queiroz left the job, and Swedish coach Kim Lars Björkegren, who leads the women's national team, took over on an interim basis, assisted by Ibrahim Tanko and Godwin Attram.",
        "The sides meet again on Monday (16 November), with Somalia as the home team. In the same Group C, Côte d'Ivoire and Gambia, on six points each, also play each other on Thursday."
      ]
    },
    sources: [
      ["GhanaWeb", "https://www.ghanaweb.com/GhanaHomePage/SportsArchive/Match-Report-Ghana-beat-Somalia-to-secure-first-win-in-2027-AFCON-qualifiers-2061077"],
      ["Pulse Ghana", "https://www.pulse.com.gh/story/black-stars-of-ghana-beat-somalia-to-secure-first-3-points-in-2027-afcon-qualifiers-2026111217011751969"],
      ["GHANAsoccernet", "https://ghanasoccernet.com/ghana-end-eight-match-winless-run-in-afcon-qualifiers-with-victory-over-somalia"],
      ["Graphic Online", "https://www.graphic.com.gh/sports/sports-news/gfa-appoints-kim-lars-bjoerkegren-to-lead-interim-black-stars-technical-team.html"]
    ]
  },
  {
    slug: "final-liga-feminina-sundowns-as-far", cat: "fem", tags: ["fem"], date: "2026-11-12T18:00",
    cover: { big: { pt: "15/11", fr: "15/11", en: "15 Nov" }, cx: "70%", small: { pt: "Final em Ismailia · Sundowns × AS FAR", fr: "Finale à Ismaïlia · Sundowns × AS FAR", en: "Final in Ismailia · Sundowns × AS FAR" } },
    title: { pt: "Sundowns e AS FAR decidem a Liga dos Campeões Feminina no domingo", fr: "Sundowns et l'AS FAR se disputent la Ligue des champions féminine dimanche", en: "Sundowns and AS FAR meet in Sunday's Women's Champions League final" },
    lead: { pt: "As duas bicampeãs se enfrentam no Estádio do Canal de Suez, em Ismailia, valendo o terceiro título.", fr: "Les deux doubles championnes s'affrontent au stade du Canal de Suez, à Ismaïlia, pour un troisième titre.", en: "The two two-time champions face off at the Suez Canal Stadium in Ismailia, each chasing a third title." },
    body: {
      pt: [
        "Mamelodi Sundowns e AS FAR, as duas bicampeãs da Liga dos Campeões Feminina da CAF, decidem o título no domingo (15), no Estádio do Canal de Suez, em Ismailia, no Egito.",
        "Na semifinal de quarta-feira, as sul-africanas golearam a estreante Kawempe Muslim, de Uganda, por 4 a 1. Ronnel Donnelly marcou três vezes em oito minutos, aos 29, 35 e 37, e Noxolo Cesane fez o quarto antes do intervalo. A Kawempe, primeira equipe ugandense a chegar ao mata-mata da competição, se despede com US$ 300 mil em premiação.",
        "A AS FAR, atual campeã, eliminou a Lekié FF, de Camarões, outra estreante, que tinha tirado as anfitriãs do FC Masar na fase de grupos. As marroquinas chegaram à semifinal pela sexta vez seguida, um recorde, depois de estrearem no torneio com derrota por 3 a 2 justamente para a Kawempe.",
        "A campeã leva US$ 600 mil e uma vaga na segunda fase classificatória da Liga dos Campeões Feminina da FIFA de 2027."
      ],
      fr: [
        "Mamelodi Sundowns et l'AS FAR, toutes deux doubles lauréates de la Ligue des champions féminine de la CAF, jouent la finale dimanche 15 novembre au stade du Canal de Suez, à Ismaïlia, en Égypte.",
        "En demi-finale mercredi, les Sud-Africaines ont battu 4-1 les débutantes de Kawempe Muslim (Ouganda). Ronnel Donnelly a marqué trois fois en huit minutes, aux 29e, 35e et 37e minutes, et Noxolo Cesane a inscrit le quatrième but avant la pause. Kawempe, premier club ougandais à atteindre la phase à élimination directe, repart avec 300 000 dollars de prime.",
        "L'AS FAR, tenante du titre, a éliminé Lekié FF (Cameroun), autre débutante, qui avait sorti les Égyptiennes du FC Masar, pays hôte, en phase de groupes. Les Marocaines atteignent les demi-finales pour la sixième fois de suite, un record, après avoir pourtant débuté par une défaite 3-2 face à Kawempe.",
        "La gagnante empochera 600 000 dollars et une place au deuxième tour de qualification de la Ligue des champions féminine de la FIFA 2027."
      ],
      en: [
        "Mamelodi Sundowns and AS FAR, the two clubs with two CAF Women's Champions League titles each, play the final on Sunday (15 November) at the Suez Canal Stadium in Ismailia, Egypt.",
        "In Wednesday's semi-final, the South Africans beat debutants Kawempe Muslim of Uganda 4-1. Ronnel Donnelly scored three times in eight minutes, on 29, 35 and 37, and Noxolo Cesane added the fourth before half-time. Kawempe, the first Ugandan club to reach the knockout stage, leave with US$300,000 in prize money.",
        "Holders AS FAR knocked out Cameroon's Lekié FF, another debutant, who had eliminated Egyptian hosts FC Masar in the group stage. The Moroccans reached the semi-finals for a record sixth time in a row, despite opening the tournament with a 3-2 defeat to Kawempe.",
        "The winner takes US$600,000 and a place in the second qualifying round of the 2027 FIFA Women's Champions League."
      ]
    },
    sources: [
      ["Bona Magazine", "https://www.bona.co.za/sports/mamelodi-sundowns-ladies-qualify-for-2026-caf-womens-champions-league-final/"],
      ["Pan Africa Football", "https://panafricafootball.com/article/kawempe-muslim-ladies-caf-champions-league"],
      ["Daily Monitor", "https://www.monitor.co.ug/uganda/sports/soccer/kawempe-face-sundowns-pedigree-in-historic-semis-5665574"],
      ["AfricaSoccer", "https://africasoccer.com/as-far-make-history-caf-womens-champions-league/"],
      ["CAF", "https://www.cafonline.com/caf-womens-champions-league/news/everything-you-need-to-know-about-the-2026-caf-womens-champions-league/"]
    ]
  },
  {
    slug: "rd-congo-bate-serra-leoa", cat: "can", tags: ["can", "sel"], date: "2026-11-12T17:30",
    cover: { big: "3–1", cx: "18%", small: { pt: "RD Congo × Serra Leoa · Grupo E", fr: "RD Congo × Sierra Leone · Groupe E", en: "DR Congo × Sierra Leone · Group E" } },
    title: { pt: "RD Congo bate a Serra Leoa e segue com 100% nas eliminatórias", fr: "La RD Congo bat la Sierra Leone et reste parfaite en éliminatoires", en: "DR Congo beat Sierra Leone to keep a perfect qualifying record" },
    lead: { pt: "Os Leopardos de Sébastien Desabre venceram por 3 a 1 no Estádio dos Mártires, em Kinshasa.", fr: "Les Léopards de Sébastien Desabre se sont imposés 3-1 au stade des Martyrs de Kinshasa.", en: "Sébastien Desabre's Leopards won 3-1 at the Stade des Martyrs in Kinshasa." },
    body: {
      pt: [
        "A RD Congo segue perfeita nas eliminatórias: venceu a Serra Leoa por 3 a 1 nesta quinta-feira (12), no Estádio dos Mártires, em Kinshasa, e chegou à terceira vitória em três jogos no Grupo E.",
        "Os Leopardos de Sébastien Desabre começaram pressionando e foram para o intervalo vencendo por 2 a 0, com Yoane Wissa autor do segundo gol. Edo Kayembe fechou a conta aos 58 minutos, após passe de Arthur Masuaku. Cerca de 18 mil torcedores foram ao estádio.",
        "O jogo de volta será na terça-feira (17), em Serra Leoa."
      ],
      fr: [
        "La RD Congo poursuit son sans-faute : victoire 3-1 contre la Sierra Leone ce jeudi 12 novembre au stade des Martyrs de Kinshasa, pour un troisième succès en trois matchs dans le groupe E.",
        "Les Léopards de Sébastien Desabre ont pressé d'entrée et menaient 2-0 à la pause, Yoane Wissa inscrivant le deuxième but. Edo Kayembe a scellé le score à la 58e minute sur une passe d'Arthur Masuaku. Environ 18 000 supporters étaient présents.",
        "Le match retour aura lieu mardi 17 novembre en Sierra Leone."
      ],
      en: [
        "DR Congo's perfect run continues: a 3-1 win over Sierra Leone on Thursday (12 November) at the Stade des Martyrs in Kinshasa made it three wins from three in Group E.",
        "Sébastien Desabre's Leopards started on the front foot and led 2-0 at the break, with Yoane Wissa scoring the second. Edo Kayembe sealed it on 58 minutes from an Arthur Masuaku pass. Around 18,000 fans were in the stadium.",
        "The return match is on Tuesday (17 November) in Sierra Leone."
      ]
    },
    sources: [
      ["Actualite.cd", "https://actualite.cd/2026/11/12/eliminatoires-de-la-can-2027-la-rdc-bat-la-sierra-leone-3-1-et-se-rapproche-de-la"],
      ["Africa Top Sports", "https://africatopsports.com/afrique-football/elim-can-2027-la-rdc-simpose-avec-autorite-face-a-la-sierra-leone/"],
      ["Ouest-France", "https://www.ouest-france.fr/sport/football/coupe-d-afrique-des-nations/direct/direct-rd-congo-sierra-leone-suivez-les-leopards-en-quete-dune-troisieme-victoire-en-eliminatoires-de-la-can-2027-9f353b0f-c1cd-461b-9928-98d8ec1509bf"]
    ]
  },
  {
    slug: "rodadas-3-e-4-eliminatorias", cat: "can", tags: ["can"], date: "2026-11-12T08:00",
    cover: { big: { pt: "12–17/11", fr: "12–17/11", en: "12–17 Nov" }, cx: "30%", small: { pt: "Rodadas 3 e 4 · 12 grupos", fr: "3e et 4e journées · 12 groupes", en: "Matchdays 3 and 4 · 12 groups" } },
    title: { pt: "Rodadas 3 e 4 levam as eliminatórias da CAN 2027 além da metade", fr: "Les éliminatoires de la CAN 2027 passent la mi-parcours avec les 3e et 4e journées", en: "Matchdays 3 and 4 take AFCON 2027 qualifying past halfway" },
    lead: { pt: "Até terça-feira, cada seleção joga duas vezes contra o mesmo adversário. Veja os duelos que mais pesam.", fr: "Jusqu'à mardi, chaque sélection affronte deux fois le même adversaire. Voici les duels les plus importants.", en: "Until Tuesday, every team plays the same opponent twice. Here are the ties that matter most." },
    body: {
      pt: [
        "Entre 12 e 17 de novembro, as 48 seleções da fase de grupos jogam duas vezes contra o mesmo adversário, e as eliminatórias passam da metade.",
        "Os confrontos mais importantes: Costa do Marfim x Gâmbia, líderes do Grupo C com seis pontos cada; Mali x Ruanda, ambos com 100% no Grupo K; e Nigéria x Tanzânia, no Grupo L, em que os nigerianos já caíram para o segundo lugar, atrás da Guiné-Bissau.",
        "A África do Sul, com campanha perfeita no Grupo D, encara o Quênia, um dos anfitriões. Marrocos (Grupo A) pega o Níger, e Egito e Angola, empatados com quatro pontos no Grupo B, enfrentam Malawi e Sudão do Sul.",
        "Como funciona: os dois primeiros de cada grupo se classificam. Quênia, Tanzânia e Uganda já estão garantidos como sedes; nos grupos D, H e L, onde eles estão, passa apenas a seleção mais bem colocada entre as demais."
      ],
      fr: [
        "Du 12 au 17 novembre, les 48 sélections de la phase de groupes affrontent deux fois le même adversaire, et les éliminatoires dépassent la mi-parcours.",
        "Les affiches majeures : Côte d'Ivoire – Gambie, en tête du groupe C avec six points chacune ; Mali – Rwanda, tous deux à 100 % dans le groupe K ; et Nigeria – Tanzanie, dans le groupe L, où les Nigérians sont déjà passés deuxièmes, derrière la Guinée-Bissau.",
        "L'Afrique du Sud, avec le maximum de points dans le groupe D, défie le Kenya, l'un des pays hôtes. Le Maroc (groupe A) affronte le Niger, tandis que l'Égypte et l'Angola, à égalité avec quatre points dans le groupe B, jouent respectivement le Malawi et le Soudan du Sud.",
        "Le format : les deux premiers de chaque groupe se qualifient. Le Kenya, la Tanzanie et l'Ouganda sont qualifiés d'office comme pays hôtes ; dans les groupes D, H et L, où ils figurent, seule la meilleure équipe parmi les autres se qualifie."
      ],
      en: [
        "From 12 to 17 November, the 48 teams in the group stage play the same opponent twice, and qualifying moves past halfway.",
        "The key ties: Côte d'Ivoire v Gambia, joint leaders of Group C on six points; Mali v Rwanda, both perfect in Group K; and Nigeria v Tanzania in Group L, where the Nigerians have already slipped to second behind Guinea-Bissau.",
        "South Africa, with maximum points in Group D, face co-hosts Kenya. Morocco (Group A) play Niger, while Egypt and Angola, level on four points in Group B, take on Malawi and South Sudan respectively.",
        "The format: the top two in each group qualify. Kenya, Tanzania and Uganda are already through as hosts; in Groups D, H and L, where they sit, only the best-placed of the other teams goes through."
      ]
    },
    sources: [
      ["CAF", "https://www.cafonline.com/afcon2025/news/crucial-matchdays-3-and-4-to-shape-totalenergies-caf-afcon-pamoja-2027-qualification-race/"],
      ["AfricaSoccer", "https://africasoccer.com/?p=653807"]
    ]
  },
  {
    slug: "premios-caf-2026-indicados", cat: "sel", tags: ["sel", "fem"], date: "2026-11-04T12:00",
    cover: { big: { pt: "7/12", fr: "7/12", en: "7 Dec" }, cx: "75%", small: { pt: "Prêmios CAF 2026 · Lagos", fr: "CAF Awards 2026 · Lagos", en: "CAF Awards 2026 · Lagos" } },
    title: { pt: "Prêmios CAF 2026: Hakimi defende a coroa, e Osimhen fica fora da lista", fr: "CAF Awards 2026 : Hakimi remet son titre en jeu, Osimhen absent de la liste", en: "CAF Awards 2026: Hakimi defends his crown as Osimhen misses out" },
    lead: { pt: "Marrocos e Senegal têm três indicados cada ao prêmio de Jogador Africano do Ano. A festa é em Lagos, em 7 de dezembro.", fr: "Le Maroc et le Sénégal comptent trois nommés chacun pour le titre de Joueur africain de l'année. La cérémonie aura lieu à Lagos le 7 décembre.", en: "Morocco and Senegal have three nominees each for African Player of the Year. The ceremony is in Lagos on 7 December." },
    body: {
      pt: [
        "A CAF divulgou os dez indicados ao prêmio de Jogador Africano do Ano. O marroquino Achraf Hakimi, vencedor da última edição, tenta o bicampeonato contra nomes como Sadio Mané, Antoine Semenyo, Brahim Díaz e Amad Diallo. Marrocos e Senegal têm três indicados cada.",
        "Os nigerianos Victor Osimhen e Ademola Lookman ficaram fora da lista.",
        "No feminino, Camarões, campeão da CAN Feminina, tem três candidatas entre as dez, entre elas Monique Ngock e Marie Ngah Manga. Os vencedores serão anunciados em 7 de dezembro, em Lagos, na Nigéria."
      ],
      fr: [
        "La CAF a dévoilé les dix nommés pour le titre de Joueur africain de l'année. Le Marocain Achraf Hakimi, lauréat de la dernière édition, vise un deuxième sacre face à Sadio Mané, Antoine Semenyo, Brahim Díaz ou Amad Diallo. Le Maroc et le Sénégal ont chacun trois représentants.",
        "Les Nigérians Victor Osimhen et Ademola Lookman ne figurent pas sur la liste.",
        "Chez les femmes, le Cameroun, champion de la CAN féminine, place trois joueuses parmi les dix nommées, dont Monique Ngock et Marie Ngah Manga. Les lauréats seront annoncés le 7 décembre à Lagos, au Nigeria."
      ],
      en: [
        "CAF has named the ten nominees for African Player of the Year. Morocco's Achraf Hakimi, the reigning winner, is chasing a second title against names such as Sadio Mané, Antoine Semenyo, Brahim Díaz and Amad Diallo. Morocco and Senegal have three nominees each.",
        "Nigeria's Victor Osimhen and Ademola Lookman did not make the list.",
        "In the women's award, WAFCON champions Cameroon have three of the ten nominees, including Monique Ngock and Marie Ngah Manga. The winners will be announced on 7 December in Lagos, Nigeria."
      ]
    },
    sources: [
      ["CAF", "https://www.cafonline.com/news/hakimi-mane-semenyo-and-brahim-diaz-headline-star-studded-mens-nominations-for-caf-awards-2026/"],
      ["Foot Africa", "https://foot-africa.com/en/news/caf-awards-the-10-african-player-of-the-year-nominees-revealed-official-1409417/"],
      ["Benin Web TV", "https://beninwebtv.bj/en/caf-awards-2026-three-cameroonian-women-among-ten-nominees/"],
      ["Naija Sabi", "https://naijasabi.com.ng/caf-awards-2026-nominees-full-list-osimhen-lookman-snub-lagos/"]
    ]
  },
  {
    slug: "can-continua-a-cada-dois-anos", cat: "can", tags: ["can", "sel"], date: "2026-10-30T12:00",
    cover: { big: { pt: "2 anos", fr: "2 ans", en: "2 years" }, cx: "84%", small: { pt: "CAF mantém o calendário da CAN", fr: "La CAF garde le rythme de la CAN", en: "CAF keeps the AFCON cycle" } },
    title: { pt: "CAF volta atrás, e a CAN continua a cada dois anos", fr: "La CAF fait marche arrière : la CAN restera biennale", en: "CAF reverses course: AFCON stays every two years" },
    lead: { pt: "O Comitê Executivo decidiu por unanimidade abandonar o plano de disputar o torneio de quatro em quatro anos.", fr: "Le Comité exécutif a renoncé à l'unanimité au projet d'organiser le tournoi tous les quatre ans.", en: "The Executive Committee unanimously dropped the plan to stage the tournament every four years." },
    body: {
      pt: [
        "O Comitê Executivo da CAF decidiu por unanimidade manter a Copa Africana de Nações a cada dois anos, revertendo o plano anunciado em dezembro de 2025 de passar a disputá-la de quatro em quatro anos.",
        "Depois da edição de 2027, no Quênia, na Tanzânia e em Uganda, estão previstas edições em 2028, 2031 e 2033. Não haverá CAN em 2030, porque a CAF não realiza o torneio em ano de Copa do Mundo, que terá jogos no Marrocos.",
        "A entidade segue tratando os três países do leste africano como sedes de 2027, apesar das dúvidas sobre o andamento das obras e do surto de ebola em Uganda. O presidente da CAF, Patrice Motsepe, tem reafirmado publicamente que o torneio fica na região."
      ],
      fr: [
        "Le Comité exécutif de la CAF a décidé à l'unanimité de maintenir la Coupe d'Afrique des nations tous les deux ans, revenant sur le projet annoncé en décembre 2025 de passer à un rythme quadriennal.",
        "Après l'édition 2027 au Kenya, en Tanzanie et en Ouganda, des éditions sont prévues en 2028, 2031 et 2033. Il n'y aura pas de CAN en 2030, car la CAF n'organise pas le tournoi l'année d'une Coupe du monde, dont une partie se jouera au Maroc.",
        "L'instance continue de considérer les trois pays d'Afrique de l'Est comme hôtes de 2027, malgré les doutes sur l'avancement des travaux et l'épidémie d'Ebola en Ouganda. Le président de la CAF, Patrice Motsepe, a réaffirmé publiquement que le tournoi restera dans la région."
      ],
      en: [
        "CAF's Executive Committee unanimously decided to keep the Africa Cup of Nations on a two-year cycle, reversing the plan announced in December 2025 to move to a four-year cycle.",
        "After the 2027 edition in Kenya, Tanzania and Uganda, editions are planned for 2028, 2031 and 2033. There will be no AFCON in 2030, as CAF does not stage the tournament in a World Cup year, and that World Cup will be partly played in Morocco.",
        "CAF still recognises the three East African countries as 2027 hosts, despite doubts over construction progress and the Ebola outbreak in Uganda. CAF president Patrice Motsepe has publicly repeated that the tournament will stay in the region."
      ]
    },
    sources: [
      ["Al Jazeera", "https://www.aljazeera.com/sports/2026/10/30/afcon-returns-to-2-year-cycle-after-caf-reverses-quadrennial-decision"],
      ["AfricaSoccer", "https://africasoccer.com/doubts-grow-over-2027-afcon-as-caf-faces-concerns-over-east-africa-preparations/"],
      ["Pan Africa Football", "https://www.panafricafootball.com/?p=97772"]
    ]
  },
  {
    slug: "champions-grupos-definidos", cat: "cl", tags: ["cl"], date: "2026-10-28T16:00",
    cover: { big: "4×4", cx: "22%", small: { pt: "Sorteio no Cairo · Liga dos Campeões 2026/27", fr: "Tirage au Caire · Ligue des champions 2026/27", en: "Cairo draw · Champions League 2026/27" } },
    title: { pt: "Liga dos Campeões da CAF: grupos definidos, e a bola rola em 27 de novembro", fr: "Ligue des champions CAF : les groupes sont connus, coup d'envoi le 27 novembre", en: "CAF Champions League: groups set, with kick-off on 27 November" },
    lead: { pt: "O Grupo B reúne os campeões de Egito, Argélia e Tunísia. O Orlando Pirates carrega as esperanças sul-africanas.", fr: "Le groupe B réunit les champions d'Égypte, d'Algérie et de Tunisie. Les Orlando Pirates portent les espoirs sud-africains.", en: "Group B brings together the champions of Egypt, Algeria and Tunisia. Orlando Pirates carry South Africa's hopes." },
    body: {
      pt: [
        "O sorteio realizado no Cairo em 28 de outubro definiu os quatro grupos da Liga dos Campeões da CAF 2026/27. A primeira rodada será de 27 a 29 de novembro, e a fase de grupos termina entre 22 e 24 de janeiro de 2027.",
        "O Grupo B reúne três campeões nacionais: Zamalek (Egito), MC Alger (Argélia) e Club Africain (Tunísia), além do Young Africans, da Tanzânia, que demitiu o técnico sul-africano Manqoba Mngqithi logo depois de garantir a vaga.",
        "No Grupo C, o Orlando Pirates é a principal esperança sul-africana contra o RS Berkane, hoje treinado por Bubista, que levou Cabo Verde ao mata-mata da Copa de 2026, além de Simba e Colombe. No Grupo D, o Pyramids de Rulani Mokwena enfrenta Al Hilal, Horoya e MAS Fès.",
        "As finais estão marcadas para o período de 9 a 31 de maio de 2027, e o campeão recebe US$ 6 milhões."
      ],
      fr: [
        "Le tirage effectué au Caire le 28 octobre a composé les quatre groupes de la Ligue des champions de la CAF 2026/27. La première journée se jouera du 27 au 29 novembre, et la phase de groupes s'achèvera entre le 22 et le 24 janvier 2027.",
        "Le groupe B réunit trois champions nationaux : le Zamalek (Égypte), le MC Alger (Algérie) et le Club Africain (Tunisie), ainsi que les Young Africans (Tanzanie), qui ont limogé l'entraîneur sud-africain Manqoba Mngqithi juste après la qualification.",
        "Dans le groupe C, les Orlando Pirates sont le principal espoir sud-africain face à la RS Berkane, désormais entraînée par Bubista, qui avait mené le Cap-Vert en phase à élimination directe du Mondial 2026, ainsi qu'à Simba et Colombe. Dans le groupe D, le Pyramids de Rulani Mokwena affronte Al Hilal, Horoya et le MAS Fès.",
        "Les finales sont prévues entre le 9 et le 31 mai 2027, et le vainqueur touchera 6 millions de dollars."
      ],
      en: [
        "The draw in Cairo on 28 October set the four groups of the 2026/27 CAF Champions League. Matchday 1 is from 27 to 29 November, and the group stage ends between 22 and 24 January 2027.",
        "Group B features three national champions: Zamalek (Egypt), MC Alger (Algeria) and Club Africain (Tunisia), plus Tanzania's Young Africans, who sacked South African coach Manqoba Mngqithi right after qualifying.",
        "In Group C, Orlando Pirates are South Africa's main hope against RS Berkane, now coached by Bubista, who took Cape Verde to the 2026 World Cup knockout rounds, as well as Simba and Colombe. In Group D, Rulani Mokwena's Pyramids face Al Hilal, Horoya and MAS Fès.",
        "The finals are scheduled between 9 and 31 May 2027, and the winner receives US$6 million."
      ]
    },
    sources: [
      ["Flashscore", "https://www.flashscore.com/news/soccer-caf-champions-league-2026-27-group-phase-draw/CfYhSny2/"],
      ["CAF", "https://www.cafonline.com/news/caf-announces-match-calendar-for-totalenergies-caf-champions-league-2026-27-and-totalenergies-caf-confederation-cup-2026-27-seasons/"],
      ["AfricaSoccer", "https://africasoccer.com/?p=580882"]
    ]
  },
  {
    slug: "al-ahly-copa-confederacoes", cat: "cc", tags: ["cc"], date: "2026-10-28T15:00",
    cover: { big: { pt: "Grupo A", fr: "Groupe A", en: "Group A" }, cx: "80%", small: "Al Ahly · Raja · ASKO Kara · Primeiro de Agosto" },
    title: { pt: "Al Ahly volta à Copa das Confederações em grupo com Raja e Primeiro de Agosto", fr: "Al Ahly retrouve la Coupe de la Confédération, dans un groupe avec le Raja et Primeiro de Agosto", en: "Al Ahly return to the Confederation Cup in a group with Raja and Primeiro de Agosto" },
    lead: { pt: "O maior campeão da Liga dos Campeões terminou o último Campeonato Egípcio em terceiro e disputa o segundo torneio da CAF.", fr: "Le club le plus titré de la Ligue des champions a terminé troisième du dernier championnat d'Égypte et dispute la deuxième compétition de la CAF.", en: "The Champions League's most successful club finished third in Egypt last season and now plays in CAF's second competition." },
    body: {
      pt: [
        "O Al Ahly, maior campeão da Liga dos Campeões, com 12 títulos, disputa a Copa das Confederações depois de terminar o último Campeonato Egípcio em terceiro lugar. No sorteio de 28 de outubro, caiu no Grupo A, com Raja Casablanca, ASKO Kara (Togo) e Primeiro de Agosto (Angola).",
        "O Grupo B tem AS FAR (Marrocos), Azam (Tanzânia), Al Ahly Tripoli (Líbia) e Durban City (África do Sul). O Grupo D reúne USM Alger, CS Sfaxien, Black Bulls (Moçambique) e Real Bamako. No Grupo C estão Maniema Union (RD Congo), Singida Black Stars (Tanzânia) e Red Arrows (Zâmbia); no dia do sorteio, a quarta vaga ainda dependia de CR Belouizdad, AS Douanes ou Hafia.",
        "A fase de grupos começa no fim de semana de 27 a 29 de novembro e vai até o fim de janeiro de 2027."
      ],
      fr: [
        "Al Ahly, club le plus titré de la Ligue des champions avec 12 sacres, dispute la Coupe de la Confédération après avoir terminé troisième du dernier championnat d'Égypte. Lors du tirage du 28 octobre, il a hérité du groupe A, avec le Raja Casablanca, l'ASKO Kara (Togo) et Primeiro de Agosto (Angola).",
        "Le groupe B réunit l'AS FAR (Maroc), Azam (Tanzanie), Al Ahly Tripoli (Libye) et Durban City (Afrique du Sud). Le groupe D comprend l'USM Alger, le CS Sfaxien, les Black Bulls (Mozambique) et le Real Bamako. Dans le groupe C figurent Maniema Union (RD Congo), Singida Black Stars (Tanzanie) et Red Arrows (Zambie) ; le jour du tirage, la quatrième place dépendait encore du CR Belouizdad, de l'AS Douanes ou de Hafia.",
        "La phase de groupes débute le week-end du 27 au 29 novembre et se termine fin janvier 2027."
      ],
      en: [
        "Al Ahly, the Champions League's most successful club with 12 titles, play in the Confederation Cup after finishing third in Egypt's last league season. In the 28 October draw they landed in Group A with Raja Casablanca, ASKO Kara (Togo) and Primeiro de Agosto (Angola).",
        "Group B has AS FAR (Morocco), Azam (Tanzania), Al Ahly Tripoli (Libya) and Durban City (South Africa). Group D brings together USM Alger, CS Sfaxien, Black Bulls (Mozambique) and Real Bamako. Group C has Maniema Union (DR Congo), Singida Black Stars (Tanzania) and Red Arrows (Zambia); on draw day, the fourth place still depended on CR Belouizdad, AS Douanes or Hafia.",
        "The group stage starts on the weekend of 27-29 November and runs until late January 2027."
      ]
    },
    sources: [
      ["CAF", "https://www.cafonline.com/caf-confederation-cup/news/totalenergies-caf-confederation-cup-202627-group-stage-draw-produces-exciting-encounters/"],
      ["AfricaSoccer", "https://africasoccer.com/?p=580978"]
    ]
  },
  {
    slug: "pyramids-mokwena-invicto", cat: "ligas", tags: ["ligas", "cl"], date: "2026-10-28T10:00",
    cover: { big: { pt: "11 jogos", fr: "11 matchs", en: "11 games" }, cx: "65%", small: { pt: "Pyramids invicto na temporada", fr: "Pyramids invaincu cette saison", en: "Pyramids unbeaten this season" } },
    title: { pt: "Pyramids de Rulani Mokwena segue invicto no Egito e na África", fr: "Le Pyramids de Rulani Mokwena reste invaincu en Égypte et en Afrique", en: "Rulani Mokwena's Pyramids stay unbeaten at home and in Africa" },
    lead: { pt: "O técnico sul-africano chegou ao fim de outubro sem perder: quatro vitórias nas preliminares da Champions e sete no Campeonato Egípcio.", fr: "L'entraîneur sud-africain a terminé octobre sans défaite : quatre victoires en tours préliminaires de la Ligue des champions et sept en championnat.", en: "The South African coach ended October without a loss: four wins in Champions League qualifying and seven in the Egyptian league." },
    body: {
      pt: [
        "Sob o comando do sul-africano Rulani Mokwena, o Pyramids chegou ao fim de outubro sem derrotas na temporada: quatro vitórias nas preliminares da Liga dos Campeões e sete no Campeonato Egípcio.",
        "O campeão da última temporada é o Zamalek, que garantiu o título na última rodada de uma disputa apertada com Pyramids e Al Ahly. A liga 2026/27 começou em 21 de agosto, com 20 clubes e um novo formato que vai reduzir aos poucos o número de equipes na elite.",
        "Pyramids e Zamalek também estão na fase de grupos da Liga dos Campeões, nos grupos D e B."
      ],
      fr: [
        "Sous la direction du Sud-Africain Rulani Mokwena, le Pyramids a terminé le mois d'octobre sans la moindre défaite : quatre victoires lors des tours préliminaires de la Ligue des champions et sept en championnat d'Égypte.",
        "Le champion en titre est le Zamalek, sacré lors de la dernière journée au terme d'une lutte serrée avec le Pyramids et Al Ahly. La saison 2026/27 a débuté le 21 août avec 20 clubs et un nouveau format qui réduira progressivement le nombre d'équipes en première division.",
        "Le Pyramids et le Zamalek sont aussi en phase de groupes de la Ligue des champions, dans les groupes D et B."
      ],
      en: [
        "Under South African coach Rulani Mokwena, Pyramids reached the end of October unbeaten this season: four wins in Champions League qualifying and seven in the Egyptian Premier League.",
        "The reigning champions are Zamalek, who sealed the title on the final day of a tight race with Pyramids and Al Ahly. The 2026/27 season started on 21 August with 20 clubs and a new format that will gradually reduce the number of top-flight teams.",
        "Pyramids and Zamalek are also in the Champions League group stage, in Groups D and B."
      ]
    },
    sources: [
      ["Flashscore", "https://www.flashscore.com/news/soccer-caf-champions-league-2026-27-group-phase-draw/CfYhSny2/"],
      ["AfricaSoccer", "https://africasoccer.com/?p=610725"]
    ]
  },
  {
    slug: "mas-fes-campeao-41-anos", cat: "ligas", tags: ["ligas", "cl"], date: "2026-10-28T09:00",
    cover: { big: { pt: "41 anos", fr: "41 ans", en: "41 years" }, cx: "24%", small: { pt: "MAS Fès, campeão marroquino", fr: "Le MAS Fès, champion du Maroc", en: "MAS Fès, champions of Morocco" } },
    title: { pt: "Maghreb de Fès, campeão após 41 anos, estreia na fase de grupos da Champions", fr: "Le Maghreb de Fès, champion après 41 ans, découvre la phase de groupes de la Ligue des champions", en: "Maghreb de Fès, champions after 41 years, reach the Champions League group stage" },
    lead: { pt: "O MAS fez 59 pontos na Botola Pro 2025/26, dois à frente do RS Berkane, e agora encara Pyramids e Al Hilal.", fr: "Le MAS a totalisé 59 points en Botola Pro 2025/26, deux de plus que la RS Berkane, et affronte désormais le Pyramids et Al Hilal.", en: "MAS finished the 2025/26 Botola Pro on 59 points, two ahead of RS Berkane, and now face Pyramids and Al Hilal." },
    body: {
      pt: [
        "O MAS Fès encerrou um jejum de 41 anos ao conquistar a Botola Pro 2025/26, com 59 pontos em 30 rodadas, dois à frente do RS Berkane e três do Raja Casablanca.",
        "Agora o clube encara Pyramids, Al Hilal e Horoya no Grupo D da Liga dos Campeões. A nova temporada da Botola começou em 23 de setembro, com 16 clubes."
      ],
      fr: [
        "Le MAS Fès a mis fin à 41 ans d'attente en remportant la Botola Pro 2025/26, avec 59 points en 30 journées, deux de plus que la RS Berkane et trois de plus que le Raja Casablanca.",
        "Le club affronte désormais le Pyramids, Al Hilal et Horoya dans le groupe D de la Ligue des champions. La nouvelle saison de Botola a commencé le 23 septembre, avec 16 clubs."
      ],
      en: [
        "MAS Fès ended a 41-year wait by winning the 2025/26 Botola Pro with 59 points from 30 matches, two ahead of RS Berkane and three ahead of Raja Casablanca.",
        "The club now faces Pyramids, Al Hilal and Horoya in Champions League Group D. The new Botola season began on 23 September with 16 clubs."
      ]
    },
    sources: [
      ["Flashscore", "https://www.flashscore.com/news/soccer-caf-champions-league-2026-27-group-phase-draw/CfYhSny2/"],
      ["Maxifoot", "https://www.maxifoot.fr/resultat-maroc.htm"],
      ["Foot Africa", "https://foot-africa.com/ar/leagues/morocco/botola-pro/standings/"]
    ]
  },
  {
    slug: "wiliete-elimina-sundowns", cat: "cl", tags: ["cl"], date: "2026-10-25T20:00", monthOnly: true,
    cover: { big: "1–1", cx: "76%", small: { pt: "Sundowns × Wiliete · Pretória", fr: "Sundowns × Wiliete · Pretoria", en: "Sundowns × Wiliete · Pretoria" } },
    title: { pt: "Wiliete derruba o campeão Sundowns e leva um dérbi angolano à fase de grupos", fr: "Wiliete fait tomber le tenant Sundowns et offre un derby angolais en phase de groupes", en: "Wiliete knock out holders Sundowns and set up an Angolan derby in the groups" },
    lead: { pt: "O clube angolano empatou em Pretória e avançou pelo gol fora. No Grupo A, reencontra o Petro de Luanda.", fr: "Le club angolais a fait match nul à Pretoria et s'est qualifié grâce au but à l'extérieur. Dans le groupe A, il retrouve Petro de Luanda.", en: "The Angolan club drew in Pretoria and went through on away goals. In Group A they meet Petro de Luanda." },
    body: {
      pt: [
        "A maior zebra das preliminares da Liga dos Campeões veio de Angola: o Wiliete empatou por 1 a 1 com o Mamelodi Sundowns em Pretória e se classificou pelo gol marcado fora de casa, eliminando o atual campeão africano.",
        "Os sul-africanos tinham conquistado o segundo título continental em maio, ao empatar por 1 a 1 com a AS FAR em Rabat, depois de vencer a ida por 1 a 0.",
        "No Grupo A, o Wiliete reencontra o compatriota Petro de Luanda, que reverteu a derrota por 2 a 0 na ida com um 3 a 0 sobre o Scottland, do Zimbábue. Espérance e Nouadhibou completam a chave. O capitão do Wiliete, Mabululu, é o artilheiro da competição, com quatro gols."
      ],
      fr: [
        "La plus grosse surprise des tours préliminaires est venue d'Angola : Wiliete a obtenu le nul 1-1 face à Mamelodi Sundowns à Pretoria et s'est qualifié grâce au but marqué à l'extérieur, éliminant le champion d'Afrique en titre.",
        "Les Sud-Africains avaient remporté leur deuxième titre continental en mai, en faisant match nul 1-1 contre l'AS FAR à Rabat après leur victoire 1-0 à l'aller.",
        "Dans le groupe A, Wiliete retrouve son compatriote Petro de Luanda, qui a renversé une défaite 2-0 à l'aller en battant 3-0 Scottland (Zimbabwe). L'Espérance et Nouadhibou complètent le groupe. Le capitaine de Wiliete, Mabululu, est le meilleur buteur de la compétition avec quatre buts."
      ],
      en: [
        "The biggest upset of the qualifying rounds came from Angola: Wiliete drew 1-1 with Mamelodi Sundowns in Pretoria and went through on away goals, knocking out the reigning African champions.",
        "The South Africans had won their second continental title in May, drawing 1-1 with AS FAR in Rabat after a 1-0 first-leg win.",
        "In Group A, Wiliete meet compatriots Petro de Luanda, who overturned a 2-0 first-leg defeat with a 3-0 win over Zimbabwe's Scottland. Espérance and Nouadhibou complete the group. Wiliete captain Mabululu is the competition's top scorer with four goals."
      ]
    },
    sources: [
      ["Flashscore", "https://www.flashscore.com/news/soccer-caf-champions-league-2026-27-group-phase-draw/CfYhSny2/"],
      ["AllAfrica", "https://allafrica.com/stories/202605260477.html"]
    ]
  },
  {
    slug: "gambia-guine-bissau-surpresas", cat: "can", tags: ["can", "sel"], date: "2026-09-30T12:00", monthOnly: true,
    cover: { big: "3–0", cx: "35%", small: { pt: "Guiné-Bissau × Nigéria", fr: "Guinée-Bissau × Nigeria", en: "Guinea-Bissau × Nigeria" } },
    title: { pt: "Gâmbia e Guiné-Bissau, as surpresas do início das eliminatórias", fr: "La Gambie et la Guinée-Bissau, les surprises du début des éliminatoires", en: "Gambia and Guinea-Bissau, the surprises of early qualifying" },
    lead: { pt: "A Gâmbia virou para cima de Gana e venceu por 4 a 2; a Guiné-Bissau aplicou 3 a 0 na Nigéria.", fr: "La Gambie a renversé le Ghana (4-2) et la Guinée-Bissau a infligé un 3-0 au Nigeria.", en: "Gambia came from behind to beat Ghana 4-2, and Guinea-Bissau beat Nigeria 3-0." },
    body: {
      pt: [
        "A segunda rodada, no fim de setembro, foi de susto para dois gigantes do oeste africano. A Gâmbia virou e venceu Gana por 4 a 2, e a Guiné-Bissau bateu a Nigéria por 3 a 0, mesmo diante de uma escalação nigeriana com sete titulares que atuam na Premier League.",
        "Os guineenses já tinham vencido a Tanzânia, uma das sedes, por 2 a 0 fora de casa na estreia, e lideram o Grupo L com seis pontos, três à frente da Nigéria. A Gâmbia divide a ponta do Grupo C com a Costa do Marfim."
      ],
      fr: [
        "La deuxième journée, fin septembre, a fait trembler deux géants d'Afrique de l'Ouest. La Gambie a renversé le Ghana (4-2), et la Guinée-Bissau a battu le Nigeria 3-0, face à une équipe nigériane alignant pourtant sept titulaires évoluant en Premier League.",
        "Les Bissau-Guinéens s'étaient déjà imposés 2-0 en Tanzanie, l'un des pays hôtes, lors de la première journée, et mènent le groupe L avec six points, trois de plus que le Nigeria. La Gambie partage la tête du groupe C avec la Côte d'Ivoire."
      ],
      en: [
        "Matchday 2, at the end of September, brought a scare for two West African giants. Gambia came from behind to beat Ghana 4-2, and Guinea-Bissau beat Nigeria 3-0, even against a Nigerian line-up with seven Premier League starters.",
        "Guinea-Bissau had already won 2-0 away to co-hosts Tanzania on matchday 1, and they lead Group L with six points, three ahead of Nigeria. Gambia share the Group C lead with Côte d'Ivoire."
      ]
    },
    sources: [
      ["Al Jazeera", "https://www.aljazeera.com/amp/sports/2026/9/30/nigeria-and-ghana-suffer-huge-afcon-2027-qualifying-shocks"],
      ["CAF", "https://www.cafonline.com/afcon2025/news/group-by-group-how-the-afcon-pamoja-2027-qualifying-race-stands-after-matchday-one/"]
    ]
  },
  {
    slug: "congo-segura-camaroes", cat: "can", tags: ["can", "sel"], date: "2026-09-29T21:00", monthOnly: true,
    cover: { big: "1–1", cx: "68%", small: { pt: "Congo × Camarões · Brazzaville", fr: "Congo × Cameroun · Brazzaville", en: "Congo × Cameroon · Brazzaville" } },
    title: { pt: "Congo segura Camarões em Brazzaville e mantém o Grupo G aberto", fr: "Le Congo tient le Cameroun en échec à Brazzaville et relance le groupe G", en: "Congo hold Cameroon in Brazzaville to keep Group G open" },
    lead: { pt: "Os Diables Rouges de Claude Le Roy empataram com os Leões Indomáveis. Agora enfrentam as Comores duas vezes.", fr: "Les Diables Rouges de Claude Le Roy ont accroché les Lions Indomptables. Ils affrontent maintenant deux fois les Comores.", en: "Claude Le Roy's Red Devils held the Indomitable Lions. They now play Comoros twice." },
    body: {
      pt: [
        "Na segunda rodada, os Diables Rouges empataram por 1 a 1 com os Leões Indomáveis no Estádio Alphonse Massamba-Débat, em Brazzaville, que recebeu a partida sem torcida. Camarões, que havia estreado com 3 a 1 sobre as Comores em Garoua, seguiu na liderança.",
        "O técnico francês Claude Le Roy elogiou a atuação do time: “Queríamos fazer esses camaroneses tremerem”.",
        "Nesta janela, o Congo enfrenta as Comores duas vezes. Le Roy disse que a meta fora de casa é ao menos empatar, antes da volta em Brazzaville, marcada para terça-feira (17). Camarões pega a Namíbia."
      ],
      fr: [
        "Lors de la deuxième journée, les Diables Rouges ont fait match nul 1-1 avec les Lions Indomptables au stade Alphonse-Massamba-Débat de Brazzaville, à huis clos. Le Cameroun, vainqueur 3-1 des Comores à Garoua lors de la première journée, est resté en tête.",
        "Le sélectionneur français Claude Le Roy a salué la prestation de son équipe : « On voulait faire trembler ces Camerounais »."
        ,
        "Pendant cette fenêtre, le Congo affronte deux fois les Comores. Claude Le Roy a indiqué viser au moins le nul à l'extérieur, avant le retour à Brazzaville, prévu mardi 17 novembre. Le Cameroun affronte la Namibie."
      ],
      en: [
        "On matchday 2, the Red Devils drew 1-1 with the Indomitable Lions at the Stade Alphonse Massamba-Débat in Brazzaville, played behind closed doors. Cameroon, who opened with a 3-1 win over Comoros in Garoua, stayed top.",
        "French coach Claude Le Roy praised his side's display: “We wanted to make these Cameroonians tremble”.",
        "In this window, Congo play Comoros twice. Le Roy said the aim away from home is at least a draw, before the return leg in Brazzaville on Tuesday (17 November). Cameroon face Namibia."
      ]
    },
    sources: [
      ["Cameroun24", "https://cameroun24.net/article/76254-congo-cameroun-les-lions-indomptables-stoppes-a-brazzaville-le-groupe-g-relance.html"],
      ["Africa Top Sports", "https://africatopsports.com/football/elim-can-2027-claude-leroy-on-voulait-faire-trembler-ces-camerounais/"],
      ["Africa Top Sports", "https://africatopsports.com/afrique-football/elim-can-2027-claude-le-roy-coach-congo-nous-allons-aux-comores-pour-chercher-un-resultat-nul/"]
    ]
  },
  {
    slug: "camaroes-campeao-can-feminina", cat: "fem", tags: ["fem", "sel"], date: "2026-08-16T20:00",
    cover: { big: "3–0", cx: "26%", small: { pt: "Final da CAN Feminina · Rabat", fr: "Finale de la CAN féminine · Rabat", en: "WAFCON final · Rabat" } },
    title: { pt: "Camarões conquista a primeira CAN Feminina da sua história", fr: "Le Cameroun remporte la première CAN féminine de son histoire", en: "Cameroon win their first Women's Africa Cup of Nations" },
    lead: { pt: "As Leoas Indomáveis venceram a estreante Malawi por 3 a 0 na final em Rabat.", fr: "Les Lionnes Indomptables ont battu le Malawi, novice, 3-0 en finale à Rabat.", en: "The Indomitable Lionesses beat debutants Malawi 3-0 in the final in Rabat." },
    body: {
      pt: [
        "Camarões é campeão africano feminino pela primeira vez. Na final de 16 de agosto, em Rabat, as Leoas Indomáveis venceram o Malawi por 3 a 0.",
        "Camarões se tornou o quarto país a ganhar a CAN Feminina, depois de Nigéria, Guiné Equatorial e África do Sul. A seleção tinha perdido a vaga para a Argélia nas eliminatórias e só entrou no torneio depois de ganhar uma segunda chance.",
        "Estreante e seleção de pior ranking da competição (153ª do mundo), o Malawi fez campanha histórica, puxada pelas irmãs Tabitha e Temwa Chawinga, e garantiu uma vaga inédita na Copa do Mundo Feminina de 2027. Temwa foi a artilheira, e a camaronesa Monique Ngock foi eleita a melhor jogadora."
      ],
      fr: [
        "Le Cameroun est champion d'Afrique féminin pour la première fois. En finale, le 16 août à Rabat, les Lionnes Indomptables ont battu le Malawi 3-0.",
        "Le Cameroun devient le quatrième pays à remporter la CAN féminine, après le Nigeria, la Guinée équatoriale et l'Afrique du Sud. La sélection avait perdu sa place face à l'Algérie en éliminatoires et n'a intégré le tournoi qu'après avoir obtenu une seconde chance.",
        "Novice et équipe la moins bien classée du tournoi (153e mondiale), le Malawi a réalisé un parcours historique, porté par les sœurs Tabitha et Temwa Chawinga, et s'est qualifié pour la première fois pour la Coupe du monde féminine 2027. Temwa a terminé meilleure buteuse, et la Camerounaise Monique Ngock a été élue meilleure joueuse."
      ],
      en: [
        "Cameroon are African women's champions for the first time. In the final on 16 August in Rabat, the Indomitable Lionesses beat Malawi 3-0.",
        "Cameroon became the fourth country to win WAFCON, after Nigeria, Equatorial Guinea and South Africa. The team had lost its place to Algeria in qualifying and only entered the tournament after getting a second chance.",
        "Debutants and the lowest-ranked team at the tournament (153rd in the world), Malawi made a historic run led by sisters Tabitha and Temwa Chawinga and qualified for the 2027 Women's World Cup for the first time. Temwa won the Golden Boot, and Cameroon's Monique Ngock was named player of the tournament."
      ]
    },
    sources: [
      ["Flashscore", "https://www.flashscore.dk/news/soccer-africa-cup-of-nations-women-2026-cameroon-beat-malawi-in-final/ALrYkK3F/"],
      ["Morocco World News", "https://www.moroccoworldnews.com/2026/08/334942/cameroon-beat-malawi-3-0-to-win-first-wafcon-title/"],
      ["BellaNaija", "https://www.bellanaija.com/2026/08/cameroon-win-first-ever-wafcon-title-malawi-2026/"],
      ["Capital Ethiopia", "https://capitalethiopia.com/?p=82101"]
    ]
  },
  {
    slug: "memoria-copa-2026-africa", cat: "sel", tags: ["sel"], date: "2026-07-10T12:00", monthOnly: true,
    cover: { big: { pt: "9 de 10", fr: "9 sur 10", en: "9 of 10" }, cx: "50%", small: { pt: "Africanos no mata-mata da Copa 2026", fr: "Africains en seizièmes du Mondial 2026", en: "African teams in the 2026 World Cup knockouts" } },
    title: { pt: "Memória: a Copa de 2026 foi a melhor da história para a África", fr: "Mémoire : le Mondial 2026, le meilleur de l'histoire pour l'Afrique", en: "Look back: the 2026 World Cup was Africa's best ever" },
    lead: { pt: "Nove das dez seleções africanas passaram da fase de grupos. O Marrocos parou nas quartas de final.", fr: "Neuf des dix sélections africaines ont passé la phase de groupes. Le Maroc s'est arrêté en quarts de finale.", en: "Nine of Africa's ten teams got out of the group stage. Morocco went out in the quarter-finals." },
    body: {
      pt: [
        "Pela primeira vez, dez seleções africanas disputaram uma Copa do Mundo, e nove delas avançaram à fase de 32, um recorde.",
        "O Marrocos foi mais longe: passou pela Holanda nos pênaltis, venceu o Canadá por 3 a 0 e caiu nas quartas de final diante da França, por 2 a 0. O Egito chegou ao mata-mata pela primeira vez na história, e Cabo Verde só foi eliminado pela Argentina na prorrogação, por 3 a 2."
      ],
      fr: [
        "Pour la première fois, dix sélections africaines ont disputé une Coupe du monde, et neuf d'entre elles ont atteint les seizièmes de finale, un record.",
        "Le Maroc est allé le plus loin : il a éliminé les Pays-Bas aux tirs au but, battu le Canada 3-0, puis s'est incliné en quarts de finale face à la France (2-0). L'Égypte a atteint la phase à élimination directe pour la première fois de son histoire, et le Cap-Vert n'a été éliminé par l'Argentine qu'en prolongation (3-2)."
      ],
      en: [
        "For the first time, ten African teams played at a World Cup, and nine of them reached the round of 32, a record.",
        "Morocco went furthest: they beat the Netherlands on penalties and Canada 3-0, then lost 2-0 to France in the quarter-finals. Egypt reached the knockout stage for the first time in their history, and Cape Verde were only knocked out by Argentina in extra time, 3-2."
      ]
    },
    sources: [
      ["Foot Africa", "https://foot-africa.com/en/news/world-cup-2026-africas-performance-in-the-tournament-1275391/"],
      ["Foot Africa", "https://foot-africa.com/en/news/2026-world-cup-the-highs-and-lows-of-the-round-of-32-1267972/"],
      ["Africa Interviews", "https://www.africainterviews.com/nine-over-ten-how-africa-produced-its-greatest-fifa-world-cup-performance-to-reach-the-last-32/"]
    ]
  }
];
