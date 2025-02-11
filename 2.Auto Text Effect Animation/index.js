const containerEl = document.querySelector(".container");
const career = ["YouTuber", "WebDevloper", "Instructor", "freelancer"]

let careerIndex = 0;
let characterIndex = 0;

updateText();
function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
    <h1>I Am ${career[careerIndex].slice(0,1)=="I"?"An":"A"} ${career[careerIndex].slice(0, characterIndex)}</h1>`
    ;

    if (characterIndex == career[careerIndex].length) {
        characterIndex = 0;
        careerIndex++
    }

    if(careerIndex === career.length){
        careerIndex=0;
    }
    setTimeout(updateText, 400)
}
