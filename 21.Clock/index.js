const hourEl = document.querySelector(".hour")
const minuteEl = document.querySelector(".minute")
const secondEl = document.querySelector(".second")

function updateTime() {
    const currentTime = new Date();

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    let hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;

    let minuteDeg = (minute / 60) * 360;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    
    let secondDeg = (second / 12) * 360;
    secondEl.style.transform = `rotate(${secondDeg}deg)`;

    setTimeout(updateTime, 1000);


}
updateTime();