//make the default broser zoom 100%
document.body.style.zoom = "110%";

// --------nvaigation---------
//under the active page

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

//give the donation  button animation
let buttons = document.querySelectorAll(".donation-button-nav");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    overlay.style.left = y + "px";
    overlay.style.top = y + "px";

    e.target.appendChild(overlay);

    setTimeout(() => {
      overlay.remove();
    }, 600);
    console.log(e);
  });
}

//paw imgs https://javascript.plainenglish.io/how-to-add-a-div-element-to-the-body-or-document-with-javascript-58164217992d

// let pawCount = 100;

// for (var i = 0; i < pawCount; i++) {
//   let ranomTop = Math.floor(Math.random() * 199) - 99;  //possiteve and nigative http://www.java2s.com/example/javascript/data-type/random-number-between-negative-and-positive-value.html
//   let ranomButton = Math.floor(Math.random() * 1999) - 999;
//   let ranomLeft = Math.floor(Math.random() * 299) - 99;
//   let ranomRight = Math.floor(Math.random() * 299) - 99;
//   let rotate = Math.floor(Math.random() * 199) - 99;
//   let pawImg = document.createElement("div");
//   pawImg.classList.add("paw-imgs");
//   pawImg.style.cssText = `left:${ranomLeft}rem;
//    top:${ranomTop}rem;
//     right:${ranomRight}rem; 
//     bottom:${ranomButton}rem; 
//     transform: rotate(${rotate}deg);`;
//   document.body.appendChild(pawImg);
// }



//slider:https://www.youtube.com/watch?v=PsNaoDhzQm0&list=PLpwngcHZlPae68z_mLFNfbJFIJVJ_Zcx2

const initSliser =() =>{
  const cardNum =document.querySelectorAll(".card")
  const slideButtons = document.querySelectorAll(".slider-button")
  const imageList = document.querySelector(".carrousel")
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  let counter = 0
  slideButtons.forEach(button=>{
    button.addEventListener('click',()=>{
       const direction = button.id === 'prev' ?-0.5:0.5;
       const scrollAmount = imageList.clientWidth * direction
       imageList.scrollBy({left:scrollAmount, behavior:"smooth"})
      
        if(counter<=cardNum.length-2){
          counter = button.id === 'prev' ?counter-1:counter+1;
          console.log(counter)
        }else{
          counter = button.id === 'prev' ?counter-1:counter;
          console.log(counter+"else")
        }
        
    })

  })
 
  const handleSlideButtons =() =>{
    slideButtons[1].style.display = imageList.scrollLeft<=0?"none":"block"
    slideButtons[0].style.display = imageList.scrollLeft>=maxScrollLeft?"none":"block"

  }

  let dots = document.querySelectorAll('.dot')
  const handleDotes =()=>{
    for(let i=0; i<dots.length; i++){
      dots[i].className = dots[i].className.replace(' active-p', '')
    }
    dots[counter].className+=' active-p'
  }

 imageList.addEventListener("scroll", ()=>{
  handleSlideButtons()
  handleDotes()
 })

}
window.addEventListener("load", initSliser)