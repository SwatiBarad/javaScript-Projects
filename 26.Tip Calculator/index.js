const btnEl = document.querySelector(".btn")
const totalAmount = document.querySelector(".total")
const amountEl = document.querySelector(".amount")
const tipEl = document.querySelector(".tip")


function calculateAmount() {
    let amountValue = amountEl.value;
    let tipValue = tipEl.value;

    let totalValue =  (amountValue
    * tipValue) / 100

    totalAmount.innerText = +amountValue + totalValue

    }

btnEl.addEventListener("click",()=>{
    calculateAmount()
    
})
