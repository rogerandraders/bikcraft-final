//ativar menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const href = link.href;
  const url = location.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar items orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.querySelector(`#${parametro}`);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute("aria-control");
  const resposta = document.querySelector(`#${controls}`);

  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventoPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventoPergunta);

//galeria
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(e) {
  const img = e.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//plugin de animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
