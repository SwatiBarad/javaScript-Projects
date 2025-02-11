
const imgContainerEl = document.querySelector(".top-container")





window.addEventListener("scroll",()=>{
    updateImage()
})


function updateImage(){
    imgContainerEl.style.opacity = 1 - window.scrollY / 900
    imgContainerEl.style.backgroundSize = 160 -  window.scrollY /  3 + "%"
    
}