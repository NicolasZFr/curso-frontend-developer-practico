// Variables

const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const btnMobileMenu = document.querySelector('.menu');

// Funciones y eventos

btnMobileMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

navbarEmail.addEventListener('click', toogleDesktopMenu)
function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}