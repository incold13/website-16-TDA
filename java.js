let product = document.getElementById("mainProduct");
let btn1 = document.getElementById("changeProduct1");
let btn2 = document.getElementById("changeProduct2");

let images = [
    "./assets/main1_img3.png",
    "./assets/main1_img4.png",
    "./assets/main1_img5.png",
    "./assets/main1_img6.png",
    "./assets/main1_img7.png"
];

let index = 0;

btn1.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    product.src = images[index];
});
btn2.addEventListener("click", () => {
    index = (index + 1 + images.length) % images.length;
    product.src = images[index];
});



let cardsBox = document.querySelector(".main2_card_all");
let cards = document.querySelectorAll(".main2_card");

let line = document.getElementById("main2_line");
let green = document.getElementById("main2_green");

let isDown = false;

green.addEventListener("mousedown", () => {
    isDown = true;
});

document.addEventListener("mouseup", () => {
    isDown = false;
});

document.addEventListener("mousemove", (e) => {
    if (isDown) {
        let lineX = line.getBoundingClientRect().left;
        let x = e.clientX - lineX;

        let maxGreen = line.clientWidth - green.clientWidth;

        if (x < 0) {
            x = 0;
        }

        if (x > maxGreen) {
            x = maxGreen;
        }

        green.style.left = x + "px";

        let percent = x / maxGreen;
        let maxScroll = cardsBox.scrollWidth - cardsBox.clientWidth;

        cardsBox.scrollLeft = percent * maxScroll;
    }
});


