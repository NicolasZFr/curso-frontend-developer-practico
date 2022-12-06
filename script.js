const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

navbarEmail.addEventListener('click', btnEmail)
function btnEmail() {
    desktopMenu.classList.toggle('inactive');
}