let banners = document.getElementsByClassName("banner");
let nomes = document.getElementsByClassName("nome");
let valores = document.getElementsByClassName("preco");
let imagens = document.getElementsByClassName("imagem");
let comprados = document.getElementById("comprados");
let nemcompra = document.getElementById("nemcompra");
const novoproduto = document.getElementById("novoproduto");
const form = document.querySelector("form");
let lista = document.getElementById("listadeprodutos");

class Produto {
    constructor(nome, valor, imagem){
        this.nome = nome;
        this.valor = valor;
        this.imagem = imagem;
    }
}

const produto0 = new Produto(
  "Sangis A01",
  1080.00,
  `https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
);
const produto1 = new Produto(
  "Sangis A02",
  1380.00,
  "https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
const produto2 = new Produto(
  "Bolsa Martelo",
  5420.00,
  "https://images.pexels.com/photos/5661240/pexels-photo-5661240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
const produto3 = new Produto(
  "Pelucia",
  25.0,
  "https://images.pexels.com/photos/18371014/pexels-photo-18371014/free-photo-of-fofo-bonitinho-artesanal-feito-a-mao.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
const produto4 = new Produto(
  "Martelo",
  10.5,
  "https://images.pexels.com/photos/35860/forge-craft-hot-form.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

let array = [produto0, produto1, produto2, produto3, produto4];

function produtoverificar() {
  array.forEach((conteudo,posição) => {
    nomes[posição].textContent = conteudo.nome;
    valores[posição].textContent = `R$:${conteudo.valor.toFixed(2)}`;
    imagens[posição].style.background = `url(${conteudo.imagem})`;
    imagens[posição].style.backgroundSize = `cover`;
  })
}
produtoverificar();

function plus() {
  novoproduto.style.display = `grid`
}

function cancelar(){
  novoproduto.style.display = `none`
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nomeproduto = document.getElementById("iplust").value;
  let precoproduto = document.getElementById("inumt").value;

  let novobanner = document.createElement("div");
  let novoimagem = document.createElement("div");
  let novonome = document.createElement("div");
  let novopreco = document.createElement("div");

  novobanner.className = "banner";
  novoimagem.className = "imagem";
  novonome.className = "nome";
  novopreco.className = "preco";

  lista.appendChild(novobanner);
  novobanner.appendChild(novoimagem);
  novobanner.appendChild(novonome);
  novobanner.appendChild(novopreco);

  let produtoadicionado = new Produto(
  `${nomeproduto}`,
  Number(precoproduto),
  "https://images.pexels.com/photos/35860/forge-craft-hot-form.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  banners = document.getElementsByClassName("banner");
  array.push(produtoadicionado);

  novoproduto.style.display = `none`

  produtoverificar();
})