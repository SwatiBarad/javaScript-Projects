const startEl = document.querySelector(".start")
const stopEl = document.querySelector(".stop")
const resetEl = document.querySelector(".reset")
const timerEl = document.querySelector(".timer")

let interval;
let timeLeft = 1500;


function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}


function startTimer() {
    interval = setInterval(() => {
        timeLeft--
        updateTimer();
        if(timeLeft===0){
            clearInterval(interval)
            alert("time's up")
            timeLeft=1500
        }
    }, 1000);
}
function stoptTimer() {
    clearInterval(interval)
}
function resetTimer() {
    clearInterval(interval)
    timeLeft = 1500;
    updateTimer()
}


startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stoptTimer)
resetEl.addEventListener("click", resetTimer)