const numberEl = document.querySelectorAll(".number");


numberEl.forEach((numberEl)=>{
    numberEl.innerText="0";
    incrementNumber()
    function incrementNumber(){
        let currentNum = numberEl.innerText;
        const dataCeil = numberEl.getAttribute("data-ceil")
        let increment = dataCeil / 15;
        currentNum= Math.ceil(currentNum+ increment);
       
        if (currentNum < dataCeil) {
            numberEl.innerText = currentNum;
            setTimeout(incrementNumber, 50);
          } else {
            numberEl.innerText = dataCeil;
          }
    }
})

