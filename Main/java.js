let headerCatalog = document.getElementById('headerCatalog');
let headerCatalogButton = document.getElementById('catalog');
let headerCatalogStatus = false;

let headerCatalogImg1 = document.getElementById('cartinka');
let headerCatalogImg2 = document.getElementById('cartinka2');

let headerCatalogImages = headerCatalogButton.querySelectorAll('img.list');

headerCatalogButton.addEventListener('click', () => {
   headerCatalogStatus = !headerCatalogStatus;

   if (headerCatalogStatus) {
      headerCatalog.style.display = 'flex';
      headerCatalogImg1.style.display = 'none';
      headerCatalogImg2.style.display = 'flex';
   } else {
      headerCatalog.style.display = 'none';
      headerCatalogImg2.style.display = 'none';
      headerCatalogImg1.style.display = 'flex';
   }

   headerCatalogImages.forEach((img) => {
      img.classList.toggle('active');
   });
});

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


const headerSlidersArr = [
   './assets/Frame 1.png',
   './assets/Frame 2.png',
   './assets/Frame 3.png',
   './assets/Frame 4.png',
   './assets/Frame 5.png',
   './assets/Frame 6.png',
   './assets/Frame 7.png',
   './assets/Frame 8.png',
   './assets/Frame 9.png',
   './assets/Frame 10.png'
];

const headerSlidersGap = document.querySelector('#headerSlidersGap');
const headerSliderLeft = document.querySelector('#headerSliderLeft');
const headerSliderRight = document.querySelector('#headerSliderRight');

function headerSliderCard(img) {
   return `
      <div class="header_sliders_card">
         <img class="header_sliders_img" src="${img}" alt="">

         <div class="header_sliders_text">
            <p class="header_sliders_p1">Кетчуп «Томатный<br>„Кубаночка“ 310 г.<br>дойпак 1/20</p>
            <p class="header_sliders_p2">55,90 ₽</p>

            <div class="header_sliders_price">
               <p class="header_sliders_p3">42,30 ₽</p>
               <img class="header_sliders_basket" src="./assets/main1_icons_1.svg" alt="">
            </div>
         </div>
      </div>
   `;
}

headerSlidersGap.innerHTML = headerSlidersArr.map(headerSliderCard).join('');

headerSliderRight.onclick = () => {
   headerSlidersGap.style.transition = 'transform 0.7s ease';
   headerSlidersGap.style.transform = 'translateX(-202px)';

   setTimeout(() => {
      headerSlidersGap.append(headerSlidersGap.firstElementChild);
      headerSlidersGap.style.transition = 'none';
      headerSlidersGap.style.transform = 'translateX(0)';
   }, 500);
};

headerSliderLeft.onclick = () => {
   headerSlidersGap.style.transition = 'none';
   headerSlidersGap.prepend(headerSlidersGap.lastElementChild);
   headerSlidersGap.style.transform = 'translateX(-202px)';

   setTimeout(() => {
      headerSlidersGap.style.transition = 'transform 0.7s ease';
      headerSlidersGap.style.transform = 'translateX(0)';
   }, 20);
};