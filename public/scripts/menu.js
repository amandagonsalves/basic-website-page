let menu = document.querySelector('.content__menu');
document.querySelector('.content__icon-menu').addEventListener('click', e => {
    menu.classList.add('show');
})
document.querySelector('.content__icon-close').addEventListener('click', e => {
    menu.classList.remove('show');
})
