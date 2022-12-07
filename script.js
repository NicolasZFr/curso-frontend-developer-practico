// Variables

const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

const mobileMenu = document.querySelector('.mobile-menu');
const btnMobileMenu = document.querySelector('.menu');

const productDrop = document.querySelector('.product-drop');
const btnShoppingIcon = document.querySelector('.navbar-shopping-cart');
const btnReturnShopping = document.querySelector('.title-container');

const cardsContainer = document.querySelector('.cards-container');

// Funciones y eventos

btnMobileMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
    if (!productDrop.classList.contains('inactive')){
        productDrop.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

navbarEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu() {
    if (!productDrop.classList.contains('inactive')){
        productDrop.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

btnShoppingIcon.addEventListener('click', toggleShoppingDetails)
btnReturnShopping.addEventListener('click', toggleShoppingDetails)
function toggleShoppingDetails() {
    if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
    productDrop.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: '320',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: '370',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p')
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p')
        productName.innerText = `${product.name}`;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoLogo = document.createElement('img')
        productInfoLogo.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoLogo);
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);