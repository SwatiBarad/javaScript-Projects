const celsiusEl = document.querySelector(".celsius");
const fahrenheitEl = document.querySelector(".fahrenheit");
const kelvinEl = document.querySelector(".kelvin");


function convertTemp(event) {
   const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentValue + 273.15).toFixed(2);
            fahrenheitEl.value = ((currentValue*9/5) + 32).toFixed(2);
            break;
        case "fahrenheit":
            kelvinEl.value = ((currentValue-32) * 5/9).toFixed(2);
            celsiusEl.value = ((currentValue-32) * 5/9 + 273.15).toFixed(2);
        case "kelvin":
            fahrenheitEl.value =  ((currentValue-273.15) * 5/9 + 32).toFixed(2);
            celsiusEl.value = (currentValue - 273.15).toFixed(2);
            default:
            break;
    }
}