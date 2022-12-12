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
const items = document.querySelectorAll('.projeto');
let currentItem = 0;
let maxItem = items.length;


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




controls.forEach(control =>{
  control.addEventListener('click', ()=>{
    
    const isleft = control.classList.contains("arrow-left");
   
    if(isleft){
      currentItem--; 
    }else{
      currentItem++;
    }
    if(currentItem >= maxItem){
      currentItem = 0
    }
    if(currentItem < 0){
      currentItem = maxItem - 1;
    }
    console.log("control", isleft, currentItem);
    
    items.forEach(item =>{
      item.classList.remove('current-projeto')
    })
    items[currentItem].scrollIntoView({
      inline: "center",
      behavior:"smooth",
      block:"nearest"
    })
    items[currentItem].classList.add("current-projeto")
  })
})
