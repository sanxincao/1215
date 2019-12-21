const $ = (selector, el = document) => el.querySelector(selector);

const leftColumn = $('.left-column');
const mainColumn = $('.main-column');

const leftSidebarTemplate = $('#left-sidebar-template');
const mainColumnTemplate = $('#main-column-template');

const productTileTemplate = $('#product-tile-template');
const newProductTile = data => {
    const el = document.importNode(productTileTemplate.content, true);
    $('.cover-image', el).setAttribute('src', data.imageUrl);
    $('.product-name', el).textContent = data.productName;
    $('.price-credits__text', el).textContent = data.price;
    if (data.isInInventory) {
        $('.price-credits', el).classList.add('hidden');
        $('.owned-label', el).classList.remove('hidden');
    } else if (data.isDisplayOnly) {
        $('.price-credits', el).classList.add('hidden');
        $('.displayonly-label', el).classList.remove('hidden');
    }
    if (data.isInInventory || data.isDisplayOnly) {
        $('.cart-button', el).classList.add('hidden');
    }
    if (data.isAP) {
        $('.ap-badge', el).classList.remove('hidden');
    }
    if (data.isVIP) {
        $('.vip-badge', el).classList.remove('hidden');
    }
    return el;
}

const productDataList = [
    {
        imageUrl: './foot.jpg',
        productName: `2018/11/03`,
        isAP: true,
        price:`2人`,
        isVIP: true,
    },
    {
        imageUrl: './bas.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
    {
        imageUrl: './bas.jpg',
        productName: `2018/11/03`,
        isVIP: true,
        isAP: true,
        price:`2人`,
    },
    {
        imageUrl: './bas.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
    {
        imageUrl: './bas.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
    {
        imageUrl: './bas.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
    {
        imageUrl: './bas.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
    {
        imageUrl: './foot.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
    {
        imageUrl: './foot.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
    {
        imageUrl: './foot.jpg',
        productName: `2018/11/03`,
        isAP: true,
        isVIP: true,
        price:`2人`,
    },
];

leftColumn.appendChild(leftSidebarTemplate.content);
mainColumn.appendChild(mainColumnTemplate.content);

// not available until main column is rendered
const shopList = $('.shop-list');

for (let productData of [...productDataList, ...productDataList]) {
    shopList.appendChild(newProductTile(productData));
}