const monthEl = document.querySelector(".month")
const dayEl = document.querySelector(".day")
const datehEl = document.querySelector(".date")
const yearEl = document.querySelector(".year")

let time = new Date();

let year = time.getFullYear();

monthEl.innerText = time.toLocaleDateString("en-US",{month:'long'})

// monthEl.textContent= time.toLocaleDateString("en-US",{month:'long'})

dayEl.textContent= time.toLocaleDateString("en-US",{weekday:'long'})

datehEl.innerText = new Date().getDate();
yearEl.innerText = year;
