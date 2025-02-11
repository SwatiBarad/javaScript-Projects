const containerEl = document.querySelector(".container");



for (let index = 0; index < 30; index++) {
  
    const colorBoxEl =document.createElement("div");
    colorBoxEl.classList.add("color-box");
    containerEl.appendChild(colorBoxEl)
}

const colorContainerEls = document.querySelectorAll(".color-box")

generateColors()

function randomColor(){
   const charcters = "0123456789abcdef";
   const colorLength = 6;
   let colorCode ="";

   for (let index = 0; index < colorLength; index++) {
    const randomCOlor = Math.floor(Math.random()*charcters.length);
    colorCode += charcters.substring(randomCOlor,randomCOlor-1)
    
   }
   return colorCode;
 }

 function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor="#"+newColorCode
        colorContainerEl.innerText="#"+newColorCode;
    });
 }
