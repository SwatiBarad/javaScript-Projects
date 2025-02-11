const watchBtnEl = document.querySelector(".watch-btn");
const closeBtnEl = document.querySelector(".icon")
const trailerContainerEl= document.querySelector(".trailer-container")
const videoEl = document.querySelector("video")

watchBtnEl.addEventListener("click",()=>{
    trailerContainerEl.classList.remove("active")
})

closeBtnEl.addEventListener("click",()=>{
    trailerContainerEl.classList.add("active")
   videoEl.pause();
   videoEl.currentTime = 0;
})