const navbarEl = document.querySelector(".navbar");
const bottomContEl = document.querySelector(".bottom-container")



console.log(navbarEl.offsetHeight);
console.log(bottomContEl.offsetTop);

window.addEventListener("scroll",()=>{
    if (
        window.scrollY >
        bottomContEl.offsetTop - navbarEl.offsetHeight -50
      ) {
       navbarEl.classList.add("active");
        
      } 
      else{
        navbarEl.classList.remove("active");
      }
    
})