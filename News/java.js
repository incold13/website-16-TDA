const main1Arr = [
   {
      img: './assets/img1.png',
      date: '15.12.2021',
      title: '«Самое ценное в нашем мире — овощи»'
   },
   {
      img: './assets/img2.png',
      date: '15.12.2021',
      title: 'Чувсто вкуса'
   },
   {
      img: './assets/img3.png',
      date: '15.12.2021',
      title: '“TDA” установила новый мировой рекорд Гиннесса'
   },
   {
      img: './assets/img4.png',
      date: '15.12.2021',
      title: 'Чувсто вкуса'
   },
   {
      img: './assets/img5.png',
      date: '15.12.2021',
      title: '“TDA” установила новый мировой рекорд Гиннесса'
   },
   {
      img: './assets/img6.png',
      date: '15.12.2021',
      title: '«Самое ценное в нашем мире — овощи»'
   },
   {
      img: './assets/img7.png',
      date: '15.12.2021',
      title: '“TDA” установила новый мировой рекорд Гиннесса'
   },
   {
      img: './assets/img8.png',
      date: '15.12.2021',
      title: '«Самое ценное в нашем мире — овощи»'
   },
   {
      img: './assets/img9.png',
      date: '15.12.2021',
      title: '«Самое ценное в нашем мире — овощи»'
   },
   {
      img: './assets/img10.png',
      date: '15.12.2021',
      title: '«Самое ценное в нашем мире — овощи»'
   },
   {
      img: './assets/img11.png',
      date: '15.12.2021',
      title: '«Самое ценное в нашем мире — овощи»'
   },
   {
      img: './assets/img12.png',
      date: '15.12.2021',
      title: 'Чувсто вкуса'
   }
];

const main1Cards = document.querySelector('#main1Cards');

main1Cards.innerHTML = main1Arr.map((item) => {
   return `
      <div class="main1_card">
         <a href = "../Text Page/index.html"><img class="main1_card_img" src="${item.img}" alt=""></a>

         <div class="main1_card_text">
            <p class="main1_card_p1">${item.date}</p>
            <p class="main1_card_p2">${item.title}</p>
         </div>
      </div>
   `;
}).join('');

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