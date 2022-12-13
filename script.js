let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let biografia = document.querySelector(".biografia");
let sobreMim = document.querySelector(".sobreMim");
let imgBio = document.querySelector(".imgBio");

const controls = document.querySelectorAll('.control');
const projeto = document.querySelectorAll('.projeto');
let currentItem = 0;

let descricao = document.querySelectorAll(".descricao");



const efeitoSlide1 = () => {
  console.log("teste");
  s1.style.marginLeft = "0";
  s1.style.backgroundColor = "#027fe9";
  biografia.style.backgroundColor = "#142246";
  sobreMim.style.backgroundColor = "#1c3166";
  imgBio.setAttribute("src", "./images/livro.gif");
  slide1.style.backgroundColor = "#fff";
  slide2.style.backgroundColor = "transparent";
  slide3.style.backgroundColor = "transparent";
};
const efeitoSlide2 = () => {
  console.log("teste");
  s1.style.marginLeft = "-34%";
  s2.style.backgroundColor = "#800909";
  biografia.style.backgroundColor = "#4d1a1a";
  sobreMim.style.backgroundColor = "#332222";
  imgBio.setAttribute("src", "./images/monitor.gif");
  slide1.style.backgroundColor = "transparent";
  slide2.style.backgroundColor = "#fff";
  slide3.style.backgroundColor = "transparent";
};
const efeitoSlide3 = () => {
  console.log("teste");
  s1.style.marginLeft = "-68%";
  s3.style.backgroundColor = "#4f784e";
  biografia.style.backgroundColor = "#2d5e4c";
  sobreMim.style.backgroundColor = "#13444d";
  imgBio.setAttribute("src", "./images/cara.gif");
  slide1.style.backgroundColor = "transparent";
  slide2.style.backgroundColor = "transparent";
  slide3.style.backgroundColor = "#fff";
};

slide1.addEventListener("click", efeitoSlide1);
slide2.addEventListener("click", efeitoSlide2);
slide3.addEventListener("click", efeitoSlide3);

let margin = 0; 
let index = 1;
controls.forEach(control =>{
  let isleft = control.classList.contains('arrow-left');
  control.addEventListener("click", ()=>{
    if(isleft){
      if(margin >= 0){
        projeto.forEach(projeto =>{
          projeto.style.animation = "limited1 0.5s";
          setTimeout(()=>{
            projeto.style.animation = "none";
          }, 500)
        })
     
      }else{
        margin += 335
        console.log(margin)
        projeto[0].style.marginLeft = `${margin}px`;
      }
    }else{
      if(margin <= -670){
        projeto.forEach(projeto =>{
          projeto.style.animation = "limited2 0.5s";
          setTimeout(()=>{
            projeto.style.animation = "none";
          }, 500)
        })
      }else{
        margin += -335;
        console.log(margin)
        projeto[0].style.marginLeft = `${margin}px`;

      }
    }
  })
})

projeto.forEach(projeto =>{
  projeto.addEventListener("mouseover",()=>{
    projeto.lastElementChild.style.bottom = "0";
  })
})
projeto.forEach(projeto =>{
  projeto.addEventListener("mouseout",()=>{
    projeto.lastElementChild.style.bottom = "-60px";
  })
})

