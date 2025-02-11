const heightEl = document.querySelector(".height")
const weightEl = document.querySelector(".weight")
const resultEl = document.querySelector(".result")
const btnEl = document.querySelector(".btn")
const dataTextEl = document.querySelector(".data-text")

const textEl = document.querySelector(".text")



function calculateFun(event) {
    switch (event.target.name) {
        case "height":
            heightValue = event.target.value;

            break;
        case "weight":
            weightValue = event.target.value;
            break;

    }

    btnEl.addEventListener("click", () => {
        const BMI = (weightValue / heightValue / heightValue) * 10000;

        resultEl.innerText = BMI.toFixed(4);



        if (BMI <= 16) {
            dataTextEl.textContent = "Severe Thinness"
        }
        else if (BMI > 16 || BMI <= 17) {
            dataTextEl.textContent = "Moderate Thinness"
        }
        else if (BMI > 17 || BMI <= 18.5) {
            dataTextEl.textContent = "Mild Thinness"
        }
        else if (BMI > 18.5 || BMI <= 25) {
            dataTextEl.textContent = "Noral Weight"
        }
        else if (BMI > 25 || BMI <= 30) {
            dataTextEl.textContent = "Over Weight"
        }
        else if (BMI > 30 || BMI <= 35) {
            dataTextEl.textContent = "Obesity(Stage-1)"
        }
        else if (BMI > 35 || BMI <= 40) {
            dataTextEl.textContent = "Obesity(Stage-2)"
        }
        else if (BMI > 40) {
            dataTextEl.textContent = "Obesity(Stage-3)"
        }
        textEl.style.visibility = "visible"
    });




}