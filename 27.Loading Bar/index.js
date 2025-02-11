const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");




let i = 0;
function updateBar() {

    counterEl.innerText = i + "%";
    barEl.style.width = i + "%";

    i++;



    if (i < 101) {
        setTimeout(updateBar, 20);
    }

}
updateBar();