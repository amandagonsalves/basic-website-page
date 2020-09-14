let menu = document.querySelector('.container__menu');
document.querySelector('.container__icon-menu').addEventListener('click', e => {
    menu.classList.add('show');
})
document.querySelector('.container__icon-close').addEventListener('click', e => {
    menu.classList.remove('show');
})
