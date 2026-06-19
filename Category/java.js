const main1ProductsArr = [
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png',
   './assets/Markovka.png'
];

const main1Products = document.querySelector('#main1Products');

main1Products.innerHTML = main1ProductsArr.map((img, index) => {
   return `
      <a href = "../Product Card/index.html"><div class="main1_card">
         <div class="main1_card_top">
            <div class="main1_sale"><p>-40%</p></div>
            <div class="main1_new_label"><p>Новинка</p></div>
            <div class="main1_hit"><p>Хит</p></div>
            <img class="main1_card_img" src="${img}" alt="">
         </div></a>

         <div class="main1_card_text">
            <p class="main1_card_p1">Морковь мытая 0.7-1.0 кг</p>
            <p class="main1_card_p2">99,90 ₽/кг</p>
            <p class="main1_card_p3">59,90 ₽/кг</p>

            <div class="main1_buy">
               <div class="main1_count">
                  <button>-</button>
                  <p>${index === 0 ? '2' : '1'}</p>
                  <button class="${index === 0 ? 'main1_count_active' : ''}">+</button>
               </div>

               <button class="main1_basket ${index === 0 ? 'main1_basket_active' : ''}">В корзину</button>
            </div>
         </div>
      </div>
   `;
}).join('');