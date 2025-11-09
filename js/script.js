
const phoneNumber = document.querySelector('.main__phone');
const menuBtn = document.querySelector('.header__menu--btn');
const menuBar = document.querySelector('.header__menu--mobile');
const menuCloseBtn = document.querySelector('.close__menu-btn');

phoneNumber.addEventListener('click', () => {
    navigator.clipboard.writeText(phoneNumber.innerText);
});

menuBtn.addEventListener('click', () => {
    menuBar.classList.add('activated');
});

menuCloseBtn.addEventListener('click', () => {
    menuBar.classList.remove('activated');
});
