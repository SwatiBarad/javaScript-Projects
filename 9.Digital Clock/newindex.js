const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const ampmEl = document.querySelector(".ampm");

updateTime()
function updateTime() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if (h > 12) {
        h = h - 12;
        ampmEl.innerText = "PM"
    }

    hourEl.innerText = h;
    minuteEl.innerText = m
    secondEl.textContent = s;
    setTimeout(
        updateTime
        , 1000);
}