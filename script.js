// Constantes para efeito de passagem de slide na seção biografia.
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const textos = document.querySelector(".textos");
const biografia = document.querySelector(".biografia");
const imgBio = document.querySelector(".imgBio");

// Constantes para efeito de carrossel na seção de Projetos.
const controls = document.querySelectorAll('.control');
const projeto = document.querySelectorAll('.projeto');
const card = document.querySelectorAll('.card');

// Contatnte para descrições.
const descricao = document.querySelectorAll(".descricao");

// Contantes para botão de contato fixo.
const contato = document.querySelector(".contato");
const imgContato = document.querySelectorAll(".imgContato");

// Constantes para navegação suave na página.
const navElemento =  document.querySelectorAll("nav li");


// Função para scroll suave da página.
navElemento.forEach(item =>{
  item.addEventListener('click', scrollParaId)
})

function scrollParaId(event){
  event.preventDefault()
  const element = event.target;
  const id = element.getAttribute('href')
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 60,
    behavior:"smooth"
  });
 
}


// Funções para efeito de passagem de slide da seção Biografia.
const efeitoSlide1 = () => {
  s1.style.marginLeft = "0";
  s1.style.backgroundColor = "#027fe9";
  textos.style.backgroundColor = "#142246";
  biografia.style.backgroundColor = "#1c3166";
  imgBio.setAttribute("src", "./images/livro.gif");
  slide1.style.backgroundColor = "#fff";
  slide2.style.backgroundColor = "transparent";
  slide3.style.backgroundColor = "transparent";
};
const efeitoSlide2 = () => {
  s1.style.marginLeft = "-34%";
  s2.style.backgroundColor = "#800909";
  textos.style.backgroundColor = "#4d1a1a";
  biografia.style.backgroundColor = "#332222";
  imgBio.setAttribute("src", "./images/monitor.gif");
  slide1.style.backgroundColor = "transparent";
  slide2.style.backgroundColor = "#fff";
  slide3.style.backgroundColor = "transparent";
};
const efeitoSlide3 = () => {
  s1.style.marginLeft = "-68%";
  s3.style.backgroundColor = "#4f784e";
  textos.style.backgroundColor = "#2d5e4c";
  biografia.style.backgroundColor = "#13444d";
  imgBio.setAttribute("src", "./images/cara.gif");
  slide1.style.backgroundColor = "transparent";
  slide2.style.backgroundColor = "transparent";
  slide3.style.backgroundColor = "#fff";
};

// Adicionando eventos aos controles que indicam o slide atual da seção Biografia.
slide1.addEventListener("click", efeitoSlide1);
slide2.addEventListener("click", efeitoSlide2);
slide3.addEventListener("click", efeitoSlide3);

// Adicionando efeito de carrossel na seção Projetos.

// Variáveis auxiliares
let margin = 0;
let index = 1;
controls.forEach(control => {
  let isleft = control.classList.contains('arrow-left'); //Verificando se o controle clicado é o esquerdo.
  control.addEventListener("click", () => { //Adicionando evento de click aos controles.
    if (isleft) {
      if (margin >= 0) { //Adicionando animação caso o limite de projetos seja atingido.
        projeto.forEach(projeto => {
          projeto.style.animation = "limited1 0.5s";
          setTimeout(() => {
            projeto.style.animation = "none";
          }, 500)//Retirando animação para evitar bugs.
        })

      } else { //Caso o limite não tenha exedido, é adicionando margin ao primeiro elemento para criar o efeito de carrossel.
        margin += 335
        projeto[0].style.marginLeft = `${margin}px`;
      }
    } else { //Caso o botão direito tenha sido clicado é retirado margin para o efeito de retorno. 
      if (margin <= -670) {
        projeto.forEach(projeto => { //Animação caso chegue ao limite de projetos.
          projeto.style.animation = "limited2 0.5s";
          setTimeout(() => {
            projeto.style.animation = "none";
          }, 500)
        })
      } else {
        margin += -335;
        console.log(margin)
        projeto[0].style.marginLeft = `${margin}px`;

      }
    }
  })
})

// Adicionado uma descrição aos projetos ao passar o mause no mesmo.
card.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.lastElementChild.style.bottom = "0";
  })
})
card.forEach(card => {
  card.addEventListener("mouseout", () => {
    card.lastElementChild.style.bottom = "-90px";
  })
})

// Criando efeito no botão fixo onde toda forma de contato pode ser acessada facilmente.
let aux = 95;
const aparecerRedes = () => {
  for (let i = 0; i < imgContato.length; i++) {
    imgContato[i].style.opacity = '1';
    imgContato[i].style.bottom = `${aux}px`;
    aux += 95;
  }
  contato.setAttribute('onclick', 'desaparecerRedes()')
}
const desaparecerRedes = () => {
  for (let i = 0; i < imgContato.length; i++) {
    imgContato[i].style.opacity = "0"
    imgContato[i].style.bottom = "15px";
    aux = 95;
  }
  contato.setAttribute('onclick', 'aparecerRedes()')
}





