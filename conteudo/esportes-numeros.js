/* "EM NÚMEROS" DOS OUTROS ESPORTES: o quadro lateral da página de cada esporte e de cada competição,
   separado por gênero (masculino e feminino). Nas páginas de outros esportes nunca aparece número de futebol.
   Cada item é [número, texto em pt, fr, en e ar]. Cada quadro lista as fontes conferidas.
   Esporte sem quadro aqui não mostra "Em números" até ganhar dados conferidos.
   Fontes de referência: CAA e World Athletics (atletismo), FIBA África e BAL (basquete), CAHB (handebol),
   CAVB (vôlei), Rugby Africa (rúgbi), AJU e IJF (judô), União Africana de Taekwondo, ICC (críquete). */
const W = (pag, rot) => [rot || `Wikipedia (${decodeURIComponent(pag).replace(/_/g, " ")})`, "https://en.wikipedia.org/wiki/" + pag];
const t = (pt, fr, en, ar) => ({ pt, fr, en, ar });

module.exports = {
  conferido: "2026-11-14",
  esportes: {
    atletismo: {
      masculino: {
        itens: [
          ["1:59:30", t(
            "Sabastian Sawe, do Quênia: recorde mundial da maratona, em Londres, em 26 de abril de 2026, a primeira abaixo de duas horas numa prova oficial",
            "Sabastian Sawe (Kenya) : record du monde du marathon, à Londres, le 26 avril 2026, le premier sous les deux heures en course officielle",
            "Kenya's Sabastian Sawe: marathon world record, London, 26 April 2026, the first under two hours in an official race",
            "الكيني سباستيان ساوي: الرقم القياسي العالمي للماراثون في لندن يوم 26 أبريل 2026، وأول زمن دون الساعتين في سباق رسمي")],
          [2, t(
            "ouros olímpicos de Eliud Kipchoge, do Quênia, na maratona (2016 e 2020)",
            "titres olympiques d'Eliud Kipchoge (Kenya) au marathon (2016 et 2020)",
            "Olympic marathon titles for Kenya's Eliud Kipchoge (2016 and 2020)",
            "ذهبيتان أولمبيتان للكيني إليود كيبتشوغي في الماراثون (2016 و2020)")]
        ],
        fontes: [W("2026_London_Marathon"), W("Eliud_Kipchoge")]
      },
      feminino: {
        itens: [
          [3, t(
            "ouros olímpicos de Faith Kipyegon, do Quênia, nos 1.500 m (2016, 2020 e 2024), a única tricampeã olímpica da prova",
            "titres olympiques de Faith Kipyegon (Kenya) sur 1 500 m (2016, 2020 et 2024), seule triple championne olympique de l'épreuve",
            "Olympic 1500m titles for Kenya's Faith Kipyegon (2016, 2020 and 2024), the only three-time Olympic champion in the event",
            "ثلاث ذهبيات أولمبية للكينية فيث كيبييغون في سباق 1500 م (2016 و2020 و2024)، وهي البطلة الأولمبية الوحيدة ثلاث مرات في هذا السباق")],
          ["3:48.68", t(
            "recorde mundial de Kipyegon nos 1.500 m, em Eugene, em 5 de julho de 2025",
            "record du monde de Kipyegon sur 1 500 m, à Eugene, le 5 juillet 2025",
            "Kipyegon's 1500m world record, Eugene, 5 July 2025",
            "الرقم القياسي العالمي لكيبييغون في 1500 م، في يوجين يوم 5 يوليو 2025")],
          ["2:15:41", t(
            "Tigst Assefa, da Etiópia: recorde mundial da maratona em prova só de mulheres, em Londres, em 2026",
            "Tigst Assefa (Éthiopie) : record du monde du marathon dans une course exclusivement féminine, à Londres, en 2026",
            "Ethiopia's Tigst Assefa: women-only marathon world record, London, 2026",
            "الإثيوبية تيغست أسيفا: الرقم القياسي العالمي للماراثون في سباق للسيدات فقط، في لندن عام 2026")]
        ],
        fontes: [W("Faith_Kipyegon"), W("2026_London_Marathon")]
      }
    },
    basquete: {
      masculino: {
        itens: [
          [12, t(
            "títulos de Angola na AfroBasket, a maior campeã; o último em 2025, em casa, com 70 a 43 sobre o Mali na final",
            "titres de l'Angola à l'AfroBasket, un record ; le dernier en 2025, à domicile, 70-43 contre le Mali en finale",
            "AfroBasket titles for Angola, a record; the latest in 2025 at home, 70-43 over Mali in the final",
            "لقبًا لأنغولا في بطولة أفريقيا لكرة السلة، وهو رقم قياسي؛ آخرها عام 2025 على أرضها بالفوز على مالي 70-43 في النهائي")],
          [6, t(
            "campeões diferentes nas seis temporadas da BAL; em 2026, o RSSB Tigers, de Ruanda, ganhou em Kigali na sua primeira participação",
            "champions différents en six saisons de BAL ; en 2026, les RSSB Tigers (Rwanda) ont gagné à Kigali pour leur première participation",
            "different champions in six BAL seasons; in 2026 Rwanda's RSSB Tigers won in Kigali in their first season",
            "أبطال مختلفون في المواسم الستة لدوري كرة السلة الأفريقي؛ وفي 2026 فاز نادي RSSB تايغرز الرواندي باللقب في كيغالي في أول مشاركة له")],
          [4, t(
            "finais da BAL do Petro de Luanda (2022, 2024, 2025 e 2026), com o título de 2024",
            "finales de BAL pour Petro de Luanda (2022, 2024, 2025 et 2026), avec le titre en 2024",
            "BAL finals for Petro de Luanda (2022, 2024, 2025 and 2026), winning in 2024",
            "نهائيات لبترو دي لواندا في دوري كرة السلة الأفريقي (2022 و2024 و2025 و2026)، وتوج باللقب في 2024")]
        ],
        fontes: [W("AfroBasket"), W("Basketball_Africa_League"), ["FIBA", "https://about.fiba.basketball/en/news/rssb-tigers-are-the-2026-bal-champions"], ["NBA (BAL)", "https://pr.nba.com/2026-bal-champions/"]]
      },
      feminino: {
        itens: [
          [11, t(
            "títulos do Senegal na AfroBasket Feminina, a maior campeã",
            "titres du Sénégal à l'AfroBasket féminin, un record",
            "Women's AfroBasket titles for Senegal, a record",
            "لقبًا للسنغال في بطولة أفريقيا لكرة السلة للسيدات، وهو رقم قياسي")],
          [5, t(
            "títulos seguidos da Nigéria na AfroBasket Feminina (2017, 2019, 2021, 2023 e 2025), um feito inédito",
            "titres consécutifs du Nigeria à l'AfroBasket féminin (2017, 2019, 2021, 2023 et 2025), une première",
            "consecutive Women's AfroBasket titles for Nigeria (2017, 2019, 2021, 2023 and 2025), a first",
            "ألقاب متتالية لنيجيريا في بطولة أفريقيا لكرة السلة للسيدات (2017 و2019 و2021 و2023 و2025)، وهو إنجاز غير مسبوق")]
        ],
        fontes: [W("Women%27s_AfroBasket"), ["Africabasket", "https://www.africabasket.net/articles/nigeria-makes-history-dtigress-clinch-fifth-straight-afrobasket-title"], ["TheCable", "https://www.thecable.ng/breaking-nigeria-becomes-the-first-country-to-win-five-consecutive-womens-afrobasket-title"]]
      }
    },
    handebol: {
      masculino: {
        itens: [
          [10, t(
            "títulos africanos do Egito, empatado com a Tunísia; o décimo em 2026, em Ruanda, com 37 a 24 sobre os tunisianos na final",
            "titres africains de l'Égypte, à égalité avec la Tunisie ; le dixième en 2026, au Rwanda, 37-24 contre les Tunisiens en finale",
            "African titles for Egypt, level with Tunisia; the tenth in 2026 in Rwanda, 37-24 over the Tunisians in the final",
            "ألقاب أفريقية لمصر، بالتساوي مع تونس؛ وجاء العاشر عام 2026 في رواندا بالفوز على تونس 37-24 في النهائي")],
          [9, t(
            "títulos do Al Ahly no Campeonato Africano de Clubes Campeões; o de 2026, em Luanda, foi o quarto seguido",
            "titres d'Al Ahly au championnat d'Afrique des clubs champions ; celui de 2026, à Luanda, était le quatrième d'affilée",
            "African Club Championship titles for Al Ahly; the 2026 win in Luanda was their fourth in a row",
            "ألقاب للأهلي في بطولة أفريقيا للأندية البطلة؛ ولقب 2026 في لواندا هو الرابع على التوالي")]
        ],
        fontes: [W("African_Men%27s_Handball_Championship"), ["IHF", "https://www.ihf.info/media-center/news/al-ahly-make-historic-double-cahb-african-club-championship"], ["Al Ahly", "https://www.alahlyegypt.com/en/news/article/warm-welcome-for-al-ahly-mens-and-womens-handball-teams-at-cairo-airport"]]
      },
      feminino: {
        itens: [
          [16, t(
            "títulos de Angola no Campeonato Africano feminino, a maior campeã; o último em 2024, na RD Congo, com 27 a 18 sobre o Senegal",
            "titres de l'Angola au championnat d'Afrique féminin, un record ; le dernier en 2024, en RD Congo, 27-18 contre le Sénégal",
            "African women's titles for Angola, a record; the latest in 2024 in DR Congo, 27-18 over Senegal",
            "لقبًا لأنغولا في بطولة أفريقيا للسيدات، وهو رقم قياسي؛ آخرها عام 2024 في الكونغو الديمقراطية بالفوز على السنغال 27-18")],
          [2, t(
            "títulos africanos de clubes do Al Ahly no feminino; o segundo em 2026, em Luanda, com 21 a 20 sobre o Primeiro de Agosto",
            "titres africains des clubs pour Al Ahly chez les femmes ; le deuxième en 2026, à Luanda, 21-20 contre Primeiro de Agosto",
            "African club titles for Al Ahly's women; the second in 2026 in Luanda, 21-20 over Primeiro de Agosto",
            "لقبان أفريقيان لسيدات الأهلي على مستوى الأندية؛ الثاني عام 2026 في لواندا بالفوز على بريميرو دي أغوستو 21-20")]
        ],
        fontes: [W("African_Women%27s_Handball_Championship"), ["IHF", "https://www.ihf.info/media-center/news/al-ahly-make-historic-double-cahb-african-club-championship"], ["Al Ahly", "https://www.alahlyegypt.com/en/news/article/warm-welcome-for-al-ahly-mens-and-womens-handball-teams-at-cairo-airport"]]
      }
    },
    volei: {
      masculino: {
        itens: [
          [12, t(
            "títulos da Tunísia no Campeonato Africano masculino, a maior campeã; o 12º em setembro de 2026, em Túnis, com 3 a 0 sobre Camarões na final",
            "titres de la Tunisie au championnat d'Afrique masculin, un record ; le 12e en septembre 2026, à Tunis, 3-0 contre le Cameroun en finale",
            "African men's titles for Tunisia, a record; the 12th in September 2026 in Tunis, 3-0 over Cameroon in the final",
            "لقبًا لتونس في بطولة أفريقيا للرجال، وهو رقم قياسي؛ الثاني عشر في سبتمبر 2026 في تونس بالفوز على الكاميرون 3-0 في النهائي")],
          [9, t(
            "títulos do Egito; o nono em 2023, no Cairo, com 3 a 1 sobre a Argélia na final",
            "titres de l'Égypte ; le neuvième en 2023, au Caire, 3-1 contre l'Algérie en finale",
            "titles for Egypt; the ninth in 2023 in Cairo, 3-1 over Algeria in the final",
            "ألقاب لمصر؛ التاسع عام 2023 في القاهرة بالفوز على الجزائر 3-1 في النهائي")]
        ],
        fontes: [W("Men%27s_African_Volleyball_Championship"), ["FIVB", "https://www.fivb.com/tunisia-crowned-african-champions-and-secure-la28-olympic-berth/"]]
      },
      feminino: {
        itens: [
          [10, t(
            "títulos do Quênia no Campeonato Africano feminino, a maior campeã; o décimo em 2023, em Iaundé",
            "titres du Kenya au championnat d'Afrique féminin, un record ; le dixième en 2023, à Yaoundé",
            "African women's titles for Kenya, a record; the tenth in 2023 in Yaoundé",
            "ألقاب لكينيا في بطولة أفريقيا للسيدات، وهو رقم قياسي؛ العاشر عام 2023 في ياوندي")],
          [4, t(
            "títulos do Egito; o quarto em setembro de 2026, em Nairóbi, com 3 a 0 sobre o Quênia na final",
            "titres de l'Égypte ; le quatrième en septembre 2026, à Nairobi, 3-0 contre le Kenya en finale",
            "titles for Egypt; the fourth in September 2026 in Nairobi, 3-0 over Kenya in the final",
            "ألقاب لمصر؛ الرابع في سبتمبر 2026 في نيروبي بالفوز على كينيا 3-0 في النهائي")]
        ],
        fontes: [W("Women%27s_African_Volleyball_Championship"), ["Citizen Digital", "https://citizen.digital/article/heartbreak-for-malkia-strikers-as-egypt-ends-continental-reign-at-kasarani-n389623"]]
      }
    },
    rugbi: {
      masculino: {
        itens: [
          [4, t(
            "títulos mundiais da África do Sul (1995, 2007, 2019 e 2023), recorde da Copa do Mundo",
            "titres mondiaux de l'Afrique du Sud (1995, 2007, 2019 et 2023), record de la Coupe du monde",
            "World Cup titles for South Africa (1995, 2007, 2019 and 2023), a record",
            "ألقاب عالمية لجنوب أفريقيا (1995 و2007 و2019 و2023)، وهو رقم قياسي في كأس العالم")],
          [9, t(
            "títulos da Namíbia na Copa da África de rúgbi, a maior campeã",
            "titres de la Namibie à la Rugby Africa Cup, un record",
            "Rugby Africa Cup titles for Namibia, a record",
            "ألقاب لناميبيا في كأس أفريقيا للرغبي، وهو رقم قياسي")],
          [3, t(
            "títulos do Zimbábue na Copa da África; o de 2025, 30 a 28 sobre a Namíbia em Kampala, levou o país à Copa do Mundo pela primeira vez desde 1991",
            "titres du Zimbabwe à la Rugby Africa Cup ; celui de 2025, 30-28 contre la Namibie à Kampala, l'envoie en Coupe du monde pour la première fois depuis 1991",
            "Rugby Africa Cup titles for Zimbabwe; the 2025 win, 30-28 over Namibia in Kampala, sent them to the World Cup for the first time since 1991",
            "ألقاب لزيمبابوي في كأس أفريقيا؛ ولقب 2025 بالفوز على ناميبيا 30-28 في كمبالا أعادها إلى كأس العالم لأول مرة منذ 1991")]
        ],
        fontes: [W("Rugby_World_Cup"), W("Rugby_Africa_Cup"), ["Rugby Africa", "https://www.rugbyafrique.com/zimbabwe-qualify-for-mens-rugby-world-cup-2027-with-win-over-namibia/"]]
      },
      feminino: {
        itens: [
          [8, t(
            "a África do Sul ficou entre as oito melhores da Copa do Mundo feminina pela primeira vez, em 2025",
            "l'Afrique du Sud a atteint pour la première fois les quarts de finale de la Coupe du monde féminine, en 2025",
            "South Africa reached the last eight of the Women's World Cup for the first time in 2025",
            "بلغت جنوب أفريقيا ربع نهائي كأس العالم للسيدات لأول مرة عام 2025")]
        ],
        fontes: [["Fox Sports", "https://www.foxsports.com/articles/soccer/south-africa-stuns-italy-and-reaches-first-womens-rugby-world-cup-quarterfinals"], ["SA Rugby Magazine", "https://www.sarugbymag.co.za/bok-women-make-world-cup-history/"]]
      }
    },
    judo: {
      masculino: {
        itens: [
          [3, t(
            "medalhas olímpicas do judô masculino africano: Mohamed Rashwan (Egito, prata em 1984), Amar Benikhlef (Argélia, prata em 2008) e Hesham Mesbah (Egito, bronze em 2008)",
            "médailles olympiques du judo masculin africain : Mohamed Rashwan (Égypte, argent en 1984), Amar Benikhlef (Algérie, argent en 2008) et Hesham Mesbah (Égypte, bronze en 2008)",
            "Olympic medals in African men's judo: Mohamed Rashwan (Egypt, silver 1984), Amar Benikhlef (Algeria, silver 2008) and Hesham Mesbah (Egypt, bronze 2008)",
            "ميداليات أولمبية للجودو الأفريقي للرجال: محمد رشوان (مصر، فضية 1984)، وعمار بن يخلف (الجزائر، فضية 2008)، وهشام مصباح (مصر، برونزية 2008)")],
          [0, t(
            "medalhas africanas no judô dos Jogos de Paris 2024",
            "médaille africaine en judo aux Jeux de Paris 2024",
            "African judo medals at the Paris 2024 Games",
            "ميدالية أفريقية في الجودو في ألعاب باريس 2024")]
        ],
        fontes: [W("List_of_Olympic_medalists_in_judo"), W("Judo_at_the_2024_Summer_Olympics")]
      },
      feminino: {
        itens: [
          [1, t(
            "medalha olímpica do judô feminino africano: o bronze de Soraya Haddad, da Argélia, em Pequim 2008",
            "médaille olympique du judo féminin africain : le bronze de Soraya Haddad (Algérie), à Pékin en 2008",
            "Olympic medal in African women's judo: Algeria's Soraya Haddad, bronze in Beijing 2008",
            "ميدالية أولمبية وحيدة للجودو الأفريقي للسيدات: برونزية الجزائرية صورية حداد في بكين 2008")],
          [0, t(
            "medalhas africanas no judô dos Jogos de Paris 2024",
            "médaille africaine en judo aux Jeux de Paris 2024",
            "African judo medals at the Paris 2024 Games",
            "ميدالية أفريقية في الجودو في ألعاب باريس 2024")]
        ],
        fontes: [W("List_of_Olympic_medalists_in_judo"), W("Judo_at_the_2024_Summer_Olympics")]
      }
    },
    taekwondo: {
      masculino: {
        itens: [
          [3, t(
            "medalhas africanas no taekwondo masculino de Paris 2024: ouro de Firas Katoussi (Tunísia, 80 kg) e bronzes de Mohamed Khalil Jendoubi (Tunísia, 58 kg) e Cheick Sallah Cissé (Costa do Marfim, +80 kg)",
            "médailles africaines en taekwondo masculin à Paris 2024 : l'or de Firas Katoussi (Tunisie, 80 kg) et le bronze de Mohamed Khalil Jendoubi (Tunisie, 58 kg) et de Cheick Sallah Cissé (Côte d'Ivoire, +80 kg)",
            "African medals in men's taekwondo at Paris 2024: gold for Firas Katoussi (Tunisia, 80kg), bronze for Mohamed Khalil Jendoubi (Tunisia, 58kg) and Cheick Sallah Cissé (Côte d'Ivoire, +80kg)",
            "ميداليات أفريقية في تايكوندو الرجال في باريس 2024: ذهبية فراس القطوسي (تونس، 80 كغ) وبرونزيتا محمد خليل الجندوبي (تونس، 58 كغ) وشيخ صلاح سيسي (كوت ديفوار، فوق 80 كغ)")],
          [2, t(
            "medalhas olímpicas de Cheick Sallah Cissé, da Costa do Marfim: ouro em 2016 e bronze em 2024; campeão mundial em 2023",
            "médailles olympiques de Cheick Sallah Cissé (Côte d'Ivoire) : l'or en 2016 et le bronze en 2024 ; champion du monde en 2023",
            "Olympic medals for Côte d'Ivoire's Cheick Sallah Cissé: gold in 2016 and bronze in 2024; world champion in 2023",
            "ميداليتان أولمبيتان للإيفواري شيخ صلاح سيسي: ذهبية 2016 وبرونزية 2024، وبطل العالم عام 2023")]
        ],
        fontes: [W("Taekwondo_at_the_2024_Summer_Olympics"), W("Cheick_Sallah_Ciss%C3%A9")]
      },
      feminino: {
        itens: [
          [2, t(
            "bronzes olímpicos de Ruth Gbagbi, da Costa do Marfim (2016 e 2020), campeã mundial em 2017",
            "médailles de bronze olympiques de Ruth Gbagbi (Côte d'Ivoire) en 2016 et 2020 ; championne du monde en 2017",
            "Olympic bronze medals for Côte d'Ivoire's Ruth Gbagbi (2016 and 2020); world champion in 2017",
            "برونزيتان أولمبيتان للإيفوارية روث غباغبي (2016 و2020)، وبطلة العالم عام 2017")]
        ],
        fontes: [W("Ruth_Gbagbi")]
      }
    },
    criquete: {
      masculino: {
        itens: [
          [27, t(
            "anos de espera: em 2025 a África do Sul ganhou o Campeonato Mundial de Testes, contra a Austrália, em Lord's, seu primeiro título da ICC desde 1998",
            "ans d'attente : en 2025, l'Afrique du Sud a remporté le championnat du monde de test-cricket face à l'Australie, à Lord's, son premier titre ICC depuis 1998",
            "years of waiting: in 2025 South Africa won the World Test Championship against Australia at Lord's, their first ICC title since 1998",
            "عامًا من الانتظار: في 2025 فازت جنوب أفريقيا ببطولة العالم للاختبارات على أستراليا في ملعب لوردز، وهو أول لقب لها من المجلس الدولي للكريكيت منذ 1998")]
        ],
        fontes: [W("2025_ICC_World_Test_Championship_final")]
      },
      feminino: {
        itens: [
          [3, t(
            "finais seguidas de Copa do Mundo da África do Sul: T20 em 2023 e 2024 e a de 50 overs em 2025, perdida para a Índia",
            "finales de Coupe du monde consécutives pour l'Afrique du Sud : T20 en 2023 et 2024, puis 50 overs en 2025, perdue face à l'Inde",
            "consecutive World Cup finals for South Africa: the T20 in 2023 and 2024 and the 50-over final in 2025, lost to India",
            "نهائيات متتالية لكأس العالم لجنوب أفريقيا: تي 20 في 2023 و2024، ثم نهائي الخمسين أوفر في 2025 الذي خسرته أمام الهند")]
        ],
        fontes: [["ICC", "https://www.icc-cricket.com/tournaments/womens-cricket-worldcup-2025/news/proteas-look-ahead-after-falling-short-in-world-cup-decider"], ["SportsCafe", "https://sportscafe.in/cricket/articles/2025/oct/30/south-africa-women-continue-their-dream-run-enter-third-straight-final"]]
      }
    }
  }
};
