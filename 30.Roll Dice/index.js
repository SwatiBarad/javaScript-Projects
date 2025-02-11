const rollBtn = document.querySelector(".roll");
const diceEl = document.querySelector(".dice");
const spanEl = document.querySelector("span");
const rollHistoryEl = document.querySelector(".roll-history")


let array = ["&#9856;", " &#9857;", " &#9858;", " &#9859;", " &#9860;", " &#9861;"]

let historyList = [];
rollBtn.addEventListener("click", () => {

    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation")
    }, 1000);


    const randomElement = array[Math.floor(Math.random() * array.length)];

    diceEl.innerHTML = `<div>${randomElement}</div>`;

    spanEl.innerHTML = `${randomElement}`


    historyList.push(randomElement);
    updateHistroy();


})

function updateHistroy() {
    rollHistoryEl.innerText ="";

    for (let i = 0; i < historyList.length; i++) {
        const element = historyList[i];
        
        const listItem = document.createElement("li");

            listItem.innerHTML = ` Roll: ${i + 1} <span>${element}</span>`

        rollHistoryEl.appendChild(listItem);
        
        
    }


}