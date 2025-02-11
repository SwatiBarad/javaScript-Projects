const searchEl = document.querySelector(".search");

const inputEl = document.querySelector("input");

const microEl = document.querySelector(".micro")


searchEl.addEventListener("click",()=>{
    inputEl.classList.remove("hide");
    microEl.classList.remove("hide");
   setTimeout(1000);
});

searchEl.addEventListener("dblclick",()=>{
    inputEl.classList.add("hide");
    microEl.classList.add("hide");
    setTimeout(1000);
})