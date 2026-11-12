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
