const XbtnEl = document.querySelector(".X-btn")
const YbtnEl = document.querySelector(".Y-btn")
const body = document.querySelector("body")

window.addEventListener("mousemove",(evnet)=>{
    // updatePosition();
  
    
    console.log(event.clientX , event.clientY);

    XbtnEl.innerText = event.clientX
    YbtnEl.innerText = event.clientY
});

