const catalogArr = [
   [
      {
         img: './assets/img1_1.png',
         title: 'Молочная продукция'
      },
      {
         img: './assets/img1_2.png',
         title: 'Мясная продукция'
      },
      {
         img: './assets/img1_3.png',
         title: 'Овощи'
      },
      {
         img: './assets/img1_4.png',
         title: 'Ягоды'
      }
   ],
   [
      {
         img: './assets/img1_5.png',
         title: 'Овощи'
      },
      {
         img: './assets/img1_6.png',
         title: 'Ягоды'
      },
      {
         img: './assets/img1_7.png',
         title: 'Молочная продукция'
      },
      {
         img: './assets/img1_8.png',
         title: 'Мясная продукция'
      }
   ],
   [
      {
         img: './assets/img1_9.png',
         title: 'Мясная продукция'
      },
      {
         img: './assets/img1_10.png',
         title: 'Молочная продукция'
      },
      {
         img: './assets/img1_11.png',
         title: 'Ягоды'
      },
      {
         img: './assets/img1_12.png',
         title: 'Овощи'
      }
   ]
];

const catalogJs = document.querySelector('#catalogJs');

catalogJs.innerHTML = `
   <p class="catalog_p3">Каталог</p>
   <div class="catalog_cards">
      ${catalogArr.map((row) => {
         return `
            <div class="catalog_cards_row">
               ${row.map((item) => {
                  return `
                     <div class="catalog_card">
                        <div class="catalog_card_img">
                           <img src="${item.img}" alt="">
                        </div>

                        <div class="catalog_card_text">
                           <p>${item.title}</p>
                        </div>
                     </div>
                  `;
               }).join('')}
            </div>
         `;
      }).join('')}
   </div>
`;


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