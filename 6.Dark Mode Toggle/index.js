const bodyEl = document.querySelector("body");

const inputEl = document.querySelector(".input")


inputEl.checked=JSON.parse(localStorage.getItem("mode"))

updateBody();
function updateBody(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor="black"
    }
    else {
        bodyEl.style.backgroundColor="white"
    }
}
  
inputEl.addEventListener("input",()=>{
    updateBody();
    localStorageUpdate();
})

function localStorageUpdate(){
    localStorage.setItem("mode",
        JSON.stringify(inputEl.checked)
    );
}
