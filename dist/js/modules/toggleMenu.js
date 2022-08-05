export const menuBtn = document.querySelector('.navbar-toggler');
const hamburger = document.querySelector('.navbar-toggler-icon');
const navBar = document.querySelector('.navbar');
const navBarLogo = document.querySelector('.navbar-brand');


let showMenu = false;

export function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('open');
        navBar.classList.add('open');
        navBarLogo.classList.add('open');

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        navBar.classList.remove('open');
        navBarLogo.classList.remove('open');

        showMenu = false;
    }
}


