const products = [
    {
        id: '1',
        title: 'Baby Yoda',
        description: 'Adorable Baby Yoda sticker perfect for fans of The Mandalorian.',
        image: 'img/baby-yoda.svg',
        price: 10.99
    },
    {
        id: '2',
        title: 'Banana',
        description: 'Bright and fun banana sticker to add a fruity touch to your items.',
        image: 'img/banana.svg',
        price: 12.99
    },
    {
        id: '3',
        title: 'Girl',
        description: 'Cute girl sticker that brings a cheerful vibe to any surface.',
        image: 'img/girl.svg',
        price: 13.99
    },
    {
        id: '4',
        title: 'Viking',
        description: 'Fierce Viking sticker for those who love a touch of Norse mythology.',
        image: 'img/viking.svg',
        price: 14.99
    },
];

function renderProducts(products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}
            </p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
    }
    document.querySelector('.products__list').innerHTML = productsHtml;
}

renderProducts(products);