const textareaEl = document.querySelector("#textarea");

const totalcharacterEl = document.querySelector(".total-character");

const remainingEl = document.querySelector(".remainig");

const resetEl = document.querySelector(".reset")



textareaEl.addEventListener("keyup", () => {
    updateScore();
});

function updateScore() {
    totalcharacterEl.innerText = textareaEl.value.length;

    remainingEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length
}


resetEl.addEventListener("click", () => {
    totalcharacterEl.innerText = textareaEl.getAttribute("maxlength")

    remainingEl.innerText = textareaEl.getAttribute("maxLength") - totalcharacterEl.innerText

    textareaEl.value = ""
    
})