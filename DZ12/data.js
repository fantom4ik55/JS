
const dataFeatured = `[
    {
    "img_card": "./img/cards1.jpg",
    "title_card": "ELLERY X M'O CAPSULE",
     "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "52"
     
    },
    {
    "img_card": "./img/cards2.jpg",
    "title_card": "ELLERY X M'O CAPSULE",
     "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "52"
     
    },
    {
    "img_card": "./img/cards3.jpg",
    "title_card": "ELLERY X M'O CAPSULE",
     "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "52"
     
    },
    {
    "img_card": "./img/cards4.jpg",
    "title_card": "ELLERY X M'O CAPSULE",
     "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "52"
     
    },
    {
    "img_card": "./img/cards5.jpg",
    "title_card": "ELLERY X M'O CAPSULE",
     "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "52"
     
    },
    {
    "img_card": "./img/cards6.jpg",
    "title_card": "ELLERY X M'O CAPSULE",
     "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "52"
     
    }
]`

const product = JSON.parse(dataFeatured);

const cardsProduct = document.querySelector('.cards__product');
 
product.forEach(element => {

   

    const catalogProduct = document.createElement('div');
    cardsProduct.appendChild(catalogProduct);
    catalogProduct.classList.add('catalog__cards');

    const imgEl = document.createElement('img');
    catalogProduct.appendChild(imgEl);
    imgEl.classList.add('img__product');
    imgEl.src = element.img_card;

    const infoCard = document.createElement('div');
    catalogProduct.appendChild(infoCard);
    infoCard.classList.add('info__cards');

    const titleCard = document.createElement('h4');
    infoCard.appendChild(titleCard);
    titleCard.classList.add('title__cards');
    titleCard.textContent = element.title_card ;

    const textCard = document.createElement('p');
    infoCard.appendChild(textCard);
    textCard.classList.add('text__carsd');
    textCard.textContent = element.text_card;

    const priceCard = document.createElement('a');
    priceCard.classList.add('cash__cards');
    priceCard.textContent = `$ ${element.price_card}`;
    infoCard.appendChild(priceCard);
    priceCard.style.cursor = 'pointer';

    const addCard = document.createElement('a');
    addCard.classList.add('add__card');
    catalogProduct.appendChild(addCard);
    addCard.textContent = 'Add to Cart';
    addCard.style.cursor = 'pointer';
});





