const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minutes");
const secondEl = document.querySelector(".seconds");


let time = new Date()

console.dir(time)

const getHour = time.getHours();
const getMinute = time.getMinutes();
const getSecond = time.getSeconds();

hourEl.innerText = getHour;
minuteEl.textContent = getMinute;
secondEl.innerText= getSecond