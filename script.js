// Função para scroll suave da página.

const navElemento = document.querySelectorAll("nav li");

navElemento.forEach(item => {
  item.addEventListener('click', scrollParaId)
})

function scrollParaId(event) {
  event.preventDefault()
  const element = event.target;
  const id = element.getAttribute('href')
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 60,
    behavior: "smooth"
  });

}


// Funções para efeito de passagem de slide da seção Biografia.

const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const s1 = document.querySelector(".s1");
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const textos = document.querySelector(".textos");
const biografia = document.querySelector(".biografia");
const imgBio = document.querySelector(".imgBio");

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

// Constantes para efeito de carrossel na seção de Projetos.
const controls = document.querySelectorAll('.control');
const projeto = document.querySelectorAll('.projeto');
const maxProjeto = projeto.length;
let currentItem = 0;

controls.forEach(control =>{
  control.addEventListener("click", ()=>{
    const isleft = control.classList.contains('arrow-left');
    if(isleft){
      currentItem -= 1;
      
    }else{
      currentItem += 1;
    }
    if(currentItem >= maxProjeto){
      currentItem = 0
    }
    if(currentItem < 0){
      currentItem = maxProjeto - 1
    }

  projeto.forEach(projeto =>{
    projeto.classList.remove('current-item')
  });
  
  projeto[currentItem].scrollIntoView({
    inline: "center",
    behavior:"smooth",
    block:"nearest"
  });
  projeto[currentItem].classList.add("current-item")
  })
})

// Adicionado uma descrição aos projetos ao passar o mause pelo mesmo.
const card = document.querySelectorAll("card")
const descricao = document.querySelectorAll(".descricao");

card.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.lastElementChild.style.bottom = "0";
  })
})
card.forEach(card => {
  card.addEventListener("mouseout", () => {
    card.lastElementChild.style.bottom = "-150px";
  })
})

// Criando efeito no botão fixo onde toda forma de contato pode ser acessada facilmente.

const contato = document.querySelector(".contato");
const imgContato = document.querySelectorAll(".imgContato");
let aux = 80;
const aparecerRedes = () => {
  for (let i = 0; i < imgContato.length; i++) {
    imgContato[i].style.opacity = '1';
    imgContato[i].style.bottom = `${aux}px`;
    aux += 80;
  }
  contato.setAttribute('onclick', 'desaparecerRedes()')
}
const desaparecerRedes = () => {
  for (let i = 0; i < imgContato.length; i++) {
    imgContato[i].style.opacity = "0"
    imgContato[i].style.bottom = "10px";
    aux = 80;
  }
  contato.setAttribute('onclick', 'aparecerRedes()')
}







