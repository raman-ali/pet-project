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

// let pawCount = 10;

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



//slider


let slideImages = document.querySelectorAll('.card'); 

// Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// Access the indicators
let dots = document.querySelectorAll('.dot');
var counter = 0;
// Code for next button
next.addEventListener('click', slideNext);
function slideNext(){
slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
if (counter >= slideImages.length-1){
counter = 0;
}else{counter++

}
slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';

}