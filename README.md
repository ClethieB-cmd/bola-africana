# Bola Africana

Site de notícias só de futebol africano, masculino e feminino, em português, francês e inglês.
Cada idioma tem as suas próprias páginas (o português fica na raiz, o francês em `fr/` e o inglês em `en/`),
o que ajuda o Google a encontrar o site e é o que o AdSense espera.

## O que tem nesta pasta

| Arquivo ou pasta | Para que serve |
|---|---|
| `config.js` | Endereço do site, domínio, ID do AdSense e e-mail de contato. **É o primeiro arquivo que você vai editar.** |
| `conteudo/noticias.js` | As matérias. Para publicar uma notícia nova, você mexe aqui. |
| `conteudo/dados.js` | Agenda e placar, tabelas, ligas, nomes dos países e textos dos menus. |
| `conteudo/textos-extra.js` | Nome do site em cada idioma, guia "Onde assistir" e as páginas Sobre, Contato e Privacidade. |
| `conteudo/campeonatos.js` | Os 54 campeonatos nacionais: país, nome do campeonato e textos de apresentação. |
| `conteudo/ligas-auto.json` | Classificação, resultados e próximos jogos baixados da API. É gerado sozinho: não edite. |
| `scripts/atualizar-ligas.js` | Busca os dados dos campeonatos na API-Football. |
| `.github/workflows/atualizar-ligas.yml` | Roda a busca uma vez por dia e publica o site de novo se algo mudou. |
| `conteudo/esportes.js` | Os outros esportes (basquete, handebol, vôlei, rúgbi, atletismo, lutas...). |
| `conteudo/esportes-auto.json` | Dados automáticos dos outros esportes. É gerado sozinho: não edite. |
| `scripts/atualizar-esportes.js` | Busca os dados dos outros esportes na API-Sports. |
| `build-esportes.js` | Monta os grupos das competições africanas e as páginas de Mais esportes. |
| `build-campos.js` | Desenha as capas: o campo de futebol, a quadra ou a pista de cada esporte, vistos de cima. |
| `build-generos.js` | Monta as páginas Masculino e Feminino do menu: todas as competições de cada gênero, esporte por esporte, com agenda, tabelas, onde assistir e notícias. |
| `assets/` | Visual (`style.css`) e pequenos ajustes no navegador (`site.js`). |
| `build.js` | Gera as páginas do site na pasta `_site/`. |
| `.github/workflows/publicar.yml` | Faz o GitHub gerar e publicar o site sozinho a cada alteração. |

---

## Passo 1: colocar o site no ar pelo GitHub (sem instalar nada)

1. Entre no GitHub e clique em **New repository**. Dê o nome `bola-africana`, marque **Public** e clique em **Create repository**.
2. Na página do repositório vazio, clique em **uploading an existing file**.
3. Abra a pasta que você descompactou, selecione **tudo o que está dentro dela** (não a pasta em si) e arraste para o navegador. Clique em **Commit changes**.
4. Confira se a pasta `.github` aparece na lista de arquivos. Alguns computadores escondem pastas que começam com ponto. Se ela não subiu:
   clique em **Add file → Create new file**, escreva o nome `.github/workflows/publicar.yml`, cole o conteúdo do arquivo `publicar.yml` e clique em **Commit changes**.
5. Vá em **Settings → Pages** e, em **Build and deployment → Source**, escolha **GitHub Actions**.
6. Abra a aba **Actions**. Em 1 ou 2 minutos a tarefa "Publicar site" fica verde.
7. O site estará em `https://SEU-USUARIO.github.io/bola-africana/`.

Enquanto não tiver domínio próprio, edite o `config.js` assim (troque `SEU-USUARIO` pelo seu nome no GitHub):

```js
SITE_URL: "https://SEU-USUARIO.github.io/bola-africana",
BASE_PATH: "/bola-africana/",
```

## Passo 2: domínio próprio (obrigatório para o AdSense)

O AdSense não aprova sites em endereços `github.io`. Você precisa de um domínio seu, como `bolaafricana.com.br` ou `.com`.

1. Compre o domínio num registrador (por exemplo, o Registro.br para `.com.br`).
2. No GitHub, vá em **Settings → Pages → Custom domain**, escreva `www.seudominio.com.br` e clique em **Save**.
3. No painel do registrador, crie estes registros de DNS:
   - `CNAME` com nome `www` apontando para `SEU-USUARIO.github.io`
   - Quatro registros `A` no domínio sem `www`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`
4. Espere o DNS propagar (pode levar algumas horas) e marque **Enforce HTTPS** na página do GitHub Pages.
5. Atualize o `config.js`:

```js
SITE_URL: "https://www.seudominio.com.br",
DOMAIN: "www.seudominio.com.br",
BASE_PATH: "/",
```

## Passo 3: antes de pedir o AdSense

- Troque `CONTACT_EMAIL` no `config.js` por um e-mail que você leia.
- Releia as páginas Sobre, Contato e Privacidade em `conteudo/textos-extra.js` e ajuste o que quiser.
- Publique matérias novas com regularidade, escritas com as suas palavras. O Google aprova sites com conteúdo original e útil.
- Nunca copie textos ou fotos de outros sites. Cite sempre a fonte no campo `sources`.

## Passo 4: ativar o Google AdSense

1. Crie a conta em [adsense.google.com](https://adsense.google.com) com o seu domínio próprio. É preciso ter pelo menos 18 anos.
2. Copie o seu ID de editor (começa com `ca-pub-`) e cole no `config.js`:

   ```js
   ADSENSE_CLIENT: "ca-pub-1234567890123456",
   ```

   Ao salvar, o site passa a carregar o código do AdSense em todas as páginas e cria o arquivo `ads.txt`.
3. No AdSense, confirme o site e peça a revisão. A análise pode levar de alguns dias a algumas semanas.
4. Depois da aprovação, ligue os **Anúncios automáticos**. Se preferir escolher os lugares, crie blocos de anúncio e cole os IDs em `ADSENSE_SLOTS` (`topo`, `meio`, `lateral` e `materia`).
5. Em **Privacidade e mensagens**, ative a mensagem de consentimento para visitantes da Europa, do Reino Unido e da Suíça. O Google exige isso para mostrar anúncios a esses visitantes.
6. Em **Pagamentos**, preencha os seus dados e escolha transferência bancária ou PayPal Hyperwallet. O Google paga quando o saldo atinge o valor mínimo.

**Regras para não perder a conta:** nunca clique nos seus próprios anúncios, não peça para as pessoas clicarem e não compre visitas.

---

## Como publicar uma notícia nova

1. No GitHub, abra `conteudo/noticias.js` e clique no lápis (**Edit**).
2. Copie um bloco inteiro, do `{` até o `},`, e cole logo depois da linha `module.exports = [`.
3. Troque os campos: `slug` (endereço, sem acento nem espaço), `cat`, `tags`, `date`, `cover`, `title`, `lead`, `body` e `sources`.
4. Clique em **Commit changes**. Em 1 ou 2 minutos a matéria aparece no site, nos três idiomas.

Se você ainda não tiver a tradução, pode escrever só o português (`pt`). O site mostra o texto em português quando falta o francês ou o inglês.

Se a tarefa ficar vermelha na aba **Actions**, normalmente falta uma vírgula, uma aspa ou um colchete. Abra a tarefa para ver a linha do erro.

Para uma notícia aparecer na página do campeonato de um país, ela precisa citar o nome do país no título ou na linha fina.
Se não citar, acrescente o campo `paises` com o código do país, por exemplo `paises: ["CIV"]`.

## Campeonatos nacionais (54 países)

Cada país tem uma página em `campeonatos/`, por exemplo `campeonatos/costa-do-marfim.html`, nos três idiomas.
A lista completa aparece na página **Ligas nacionais**, e a busca do site também encontra os campeonatos.

### Dados automáticos (classificação, resultados e próximos jogos)

1. Crie uma conta grátis em [api-football.com](https://www.api-football.com) e copie a sua chave (API key) no painel.
2. No GitHub, abra **Settings → Secrets and variables → Actions → New repository secret**.
   Em **Name** escreva `API_FOOTBALL_KEY`, em **Secret** cole a chave e clique em **Add secret**.
   Nunca coloque a chave em nenhum arquivo do repositório: ele é público.
3. Abra a aba **Actions**, escolha **Atualizar campeonatos** e clique em **Run workflow** para rodar a primeira vez.
   Depois disso ele roda sozinho todo dia às 23:47 GMT (20:47 em Brasília).

O plano grátis dá 100 consultas por dia. Cada campeonato gasta 2 por atualização, então o robô atualiza até uns 47 por dia,
começando pelos que estão há mais tempo sem atualização. O registro de cada execução, na aba Actions, mostra quais
campeonatos a API tem e quais deram erro. Se o plano não liberar a temporada atual, o registro avisa e os dados antigos ficam.

Se o robô escolher o campeonato errado de um país, veja o número certo em `conteudo/ligas-auto.json` (campo `mapa`)
ou no painel da API e coloque em `API_ID`, dentro de `conteudo/campeonatos.js`.

### Textos de apresentação

Página com só uma tabela automática vale pouco para o Google. Escreva dois ou três parágrafos sobre cada campeonato
(história, clubes principais, último campeão) em `TEXTOS`, no fim de `conteudo/campeonatos.js`.
Enquanto a página não tiver texto nem dados, ela fica fora do Google (`noindex`) e fora do mapa do site.

## Grupos das competições africanas

Com a chave da API, o robô também baixa os grupos completos (do primeiro ao último colocado, com jogos, vitórias,
empates, derrotas, saldo e pontos) das Eliminatórias da CAN, da Liga dos Campeões, da Copa das Confederações e de
outras competições da CAF que a API tiver. Eles aparecem no início, em Tabelas, nas páginas de cada competição e em
`competicoes/`. Sem dados, o site continua mostrando as tabelas escritas à mão em `conteudo/dados.js`.

## Mais esportes

A página **Mais esportes** reúne basquete, handebol, vôlei, rúgbi, atletismo, boxe, luta, judô, caratê, taekwondo,
tênis de mesa, tênis, ciclismo e críquete. A lista fica em `conteudo/esportes.js`.

- **Basquete, handebol, vôlei e rúgbi** têm dados automáticos da API-Sports, com a mesma chave da API-Football.
  O robô descobre sozinho as competições africanas que a API tiver e cria uma página para cada uma.
  Cada esporte tem a sua própria cota diária.
- **Os outros esportes** não têm API grátis. A página mostra as notícias daquele esporte: na notícia, acrescente
  o campo `esporte` com o id do esporte, por exemplo `esporte: "judo"` ou `esporte: "tenis-de-mesa"`.

## Masculino e Feminino

O menu tem só **Início**, **Masculino** e **Feminino**. Cada gênero tem uma página com todos os esportes,
cada um com a sua cor, as competições, a agenda, as tabelas, onde assistir e as notícias.

- Competição automática entra no Feminino quando o nome dela tem Women, Féminin ou Ladies (é assim que a API marca).
- Notícia entra no Feminino quando a categoria é `fem` ou quando ela tem a tag `fem`. Para uma notícia feminina
  de outro esporte, acrescente `genero: "fem"`, por exemplo `esporte: "basquete", genero: "fem"`.
- No Feminino só aparecem os esportes que já têm competição com dados ou notícia feminina. Os outros entram sozinhos
  quando ganharem conteúdo.
- As cores dos esportes ficam no fim de `assets/style.css` (classes `cor-futebol`, `cor-basquete`...).

## Árabe

O site também sai em árabe, em `ar/`, escrito da direita para a esquerda. As traduções ficam em
`conteudo/traducao-ar.js`. Notícia nova sem árabe aparece em francês nas páginas em árabe; para traduzir,
acrescente `ar` nos campos da notícia, por exemplo `title: { pt: "...", fr: "...", en: "...", ar: "..." }`.

## Google Search Console

1. Entre em [search.google.com/search-console](https://search.google.com/search-console) e adicione uma propriedade do tipo **Prefixo do URL**
   com o endereço do site (por exemplo `https://SEU-USUARIO.github.io/bola-africana/`).
2. Escolha o método **Tag HTML**, copie só o valor que fica dentro de `content="..."` e cole em `GOOGLE_VERIFICACAO`, no `config.js`.
3. Espere a tarefa ficar verde na aba Actions e clique em **Verificar** no Search Console.
4. Em **Sitemaps**, envie `sitemap.xml`.

## Como atualizar a agenda e o placar

Em `conteudo/dados.js`, na lista `FIXTURES`:

- `at`: data e hora do jogo em GMT, terminando com `Z` (ex.: `"2026-11-17T16:00Z"`). O site converte para o fuso de quem visita.
- `score`: coloque o placar (ex.: `"2–0"`) quando o jogo acabar.
- `bar: true`: mostra o jogo na faixa de placar do topo.
- `tv`: emissora do jogo (ex.: `"SuperSport"`).

O guia "Onde assistir" fica em `conteudo/textos-extra.js`, na lista `WATCH`.

## Ver o site no seu computador (opcional)

Com o [Node.js](https://nodejs.org) instalado, abra um terminal nesta pasta e rode:

```bash
node build.js            # gera o site em _site/
node build.js --preview  # mostra caixas "Publicidade" onde os anúncios vão aparecer
```

Depois abra `_site/index.html` no navegador.
