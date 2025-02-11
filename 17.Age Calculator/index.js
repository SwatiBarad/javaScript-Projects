const birthDateEl = document.querySelector(".birth-date");

const ageNumEl = document.querySelector(".num")

const buttonEl = document.querySelector(".btn");

let resultEl = document.querySelector(".result")

function calculateAge() {
    const inputValue = birthDateEl.value;

    if (inputValue === "") {
        alert("Please Enter Your Date of Birth")
    } else {
        let age = getAge(inputValue);
    };

};
function getAge(inputValue) {
    const currentDate = new Date();
    const inputDate = new Date(inputValue);
    let age = currentDate.getFullYear() - inputDate.getFullYear()
    let month = currentDate.getMonth() - inputDate.getMonth()
    
    if(month < 0 || month ===0 && inputDate.getMonth() < currentDate.getMonth
()){
    age--
}

resultEl.style.visibility = "visible";
ageNumEl.textContent = age;
}

buttonEl.addEventListener("click", calculateAge)