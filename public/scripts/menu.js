const menu = document.querySelector('.container__menu');
const html = {
    get(element) {
        return document.querySelector(element);
    }
}
html.get('.container__icon-menu').addEventListener('click', e => {
    menu.classList.add('show');
})
html.get('.container__icon-close').addEventListener('click', e => {
    menu.classList.remove('show');
})
