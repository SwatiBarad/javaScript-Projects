const btnEl = document.querySelector(".btn");
const imageContainer = document.querySelector(".image-container");

btnEl.addEventListener("click", () => {

    addNewimage();
})

function addNewimage() {
    for (let index = 0; index < 10; index++) {

        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        imageContainer.appendChild(newImg);

    }
}