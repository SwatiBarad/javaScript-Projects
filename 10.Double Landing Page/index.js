const containerEl = document.querySelector(".container")
const appleEl = document.querySelector(".left")
const samsungEl = document.querySelector(".right")


appleEl.addEventListener("mouseenter",()=>{
    containerEl.classList.add("active-left")
})
appleEl.addEventListener("mouseleave",()=>{
    containerEl.classList.remove("active-left")
})
samsungEl.addEventListener("mouseenter",()=>{
    containerEl.classList.add("active-right")
})
samsungEl.addEventListener("mouseleave",()=>{
    containerEl.classList.remove("active-right")
})