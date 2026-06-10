const newsArr = [
   {
      links: ['Главная', 'Новости', '«Самое ценное в нашем мире — овощи»'],
      title: '«Самое ценное в нашем мире — овощи»',
      tag: '#Новости',
      date: '17.01.22',
      price: '1 560 ₽',
      img: './assets/main1_img1.png',
      text1: 'Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации новых предложений.',
      text2: 'Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации новых предложений.',
      text3: 'Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения новых предложений. С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации новых предложений.',
      icons: [
         './assets/main1_icons_1.svg',
         './assets/main1_icons_2.svg',
         './assets/main1_icons_3.svg'
      ],
      buttons: ['Предыдущая новость', 'Следующая новость']
   }
];

const main1 = document.querySelector('#main1');

main1.innerHTML = newsArr.map((item) => {
   return `
      <div class="main1_all">
         <div class="main1_text">
            <div class="main1_links">
               ${item.links.map((link, index) => {
                  return `
                     <p class="${index === 2 ? 'main1_link3' : 'main1_link'}">${link}</p>
                     ${index !== 2 ? '<p class="main1_link_line">|</p>' : ''}
                  `;
               }).join('')}
            </div>
            <p class="main1_p1">${item.title}</p>
            <div class="main1_info">
               <p class="main1_p2">${item.tag}</p>
               <p class="main1_p3">${item.date}</p>
            </div>
            <p class="main1_p4">${item.text1}</p>
         </div>
         <div class="main1_img">
            <img class="main1_img1" src="${item.img}" alt="">
         </div>
         <div class="main1_img_block">
            <img class="main1_img2" src="${item.img}" alt="">
         </div>
         <p class="main1_p5">${item.text2}</p>
         <p class="main1_p6">${item.text3}</p>
         <div class="main1_button">
            <button class="main1_button1">${item.buttons[0]}</button>
            <button class="main1_button2">${item.buttons[1]}</button>
         </div>
         <p class="ostup"></p>
         <div class="main1_icons">
            <div class="main1_icons_all">
               <div class="main1_icons_1">
                  <p>${item.price}</p>
                  <div class="main1_icons_1_block">
                     <img src="${item.icons[0]}" alt="">
                  </div>
               </div>
               <div class="main1_icons_2">
                  <img class="main1_icons_2_2" src="${item.icons[1]}" alt="">
                  <img class="main1_icons_2_3" src="${item.icons[2]}" alt="">
               </div>
            </div>
         </div>
      </div>
   `;
}).join('');