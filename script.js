// Variables

const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

const mobileMenu = document.querySelector('.mobile-menu');
const btnMobileMenu = document.querySelector('.menu');

const productDetail = document.querySelector('.product-detail');
const btnShoppingIcon = document.querySelector('.navbar-shopping-cart');
const btnReturnShopping = document.querySelector('.title-container');

// Funciones y eventos

btnMobileMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
    if (!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

navbarEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu() {
    if (!productDetail.classList.contains('inactive')){
        productDetail.classList.add('inactive');
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
    productDetail.classList.toggle('inactive');
}