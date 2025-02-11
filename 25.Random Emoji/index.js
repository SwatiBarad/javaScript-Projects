const btnEl = document.querySelector(".btn");
const textEl = document.querySelector(".text");

async function getEmoji() {
    let response = await fetch(`https://emoji-api.com/emojis?access_key=0c1b8876b00a18bbad01a7da4bed8b7a130ac937`);
    let data  = await response.json();
    console.log(data);
    
}
getEmoji()

btnEl.addEventListener("click",()=>{
  getEmoji();
    
})