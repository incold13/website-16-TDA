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