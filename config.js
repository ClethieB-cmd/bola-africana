/* CONFIGURAÇÃO DO SITE — troque estes valores e salve. O GitHub publica de novo sozinho. */
module.exports = {
  // Endereço final do site, sem barra no fim. Troque quando tiver o domínio próprio.
  SITE_URL: "https://clethieb-cmd.github.io/bola-africana",

  // Seu domínio próprio, ex.: "www.bolaafricana.com.br". Gera o arquivo CNAME. Deixe "" enquanto não tiver.
  DOMAIN: "",

  // Caminho do site no servidor. Com domínio próprio, deixe "/".
  // Sem domínio (endereço usuario.github.io/bola-africana), use "/bola-africana/".
  BASE_PATH: "/bola-africana/",

  // ID de editor do Google AdSense, ex.: "ca-pub-1234567890123456". Deixe "" até criar a conta.
  // Quando preenchido, o site passa a carregar o código do AdSense e gera o arquivo ads.txt.
  ADSENSE_CLIENT: "",

  // IDs de blocos de anúncio criados no AdSense (opcional). Com "Anúncios automáticos" ligados, pode deixar vazio.
  ADSENSE_SLOTS: { topo: "", meio: "", lateral: "", materia: "" },

  // E-mail que aparece nas páginas Contato, Sobre e Privacidade.
  CONTACT_EMAIL: "contato@seudominio.com",

  // Data da última atualização das notícias (aparece no topo do site).
  EDITION_DATE: "2026-11-12"
};
