const testimonials = [{
    name: "~Asher",
    text: "sofware is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!",
    imgUrl: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
},
{
    name: "~Hannry",
    text: "We don’t need to spend as much time in meetings now that we use sofware.!",
    imgUrl: "https://unsplash.com/photos/head-and-shoulders-portrait-of-contemporary-african-american-man-smiling-at-camera-while-posing-against-blue-background-copy-space-PMghehKt3Ao"
}, {
    name: "~Robbert",
    text: "If you are a business owner, and you don't have sofware in your toolkit just yet, I highly recommend that you check it out.",
    imgUrl: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    name: "~Alex",
    text: "With sofware, we have finally accomplished things that have been waiting forever to get done.",
    imgUrl: "https://media.istockphoto.com/id/1369745788/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=FkroUpxDLmeQmF81s5Yrv6UCWC4SflOLq3sdfiT2W8E="
}];

const imgurlEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".user-name")

let idx = 0;
updateTestimonial();

function updateTestimonial() {
    const { name, text, imgUrl } =
        testimonials[idx];
    usernameEl.innerText = name;
    textEl.innerText = text;
    imgurlEl.src = imgUrl;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 10000);
}