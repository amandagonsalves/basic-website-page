const menu = document.querySelector('.container__menu');
const html = {
    get(element) {
        return document.querySelector(element);
    }
}
html.get('.container__icon-menu').addEventListener('click', e => {
    menu.classList.add('show');
    html.get('.backdrop-menu').classList.add('show-backdrop')
});
html.get('.container__icon-close').addEventListener('click', e => {
    menu.classList.remove('show');
});
html.get('.backdrop-menu').addEventListener('click', e => {
    html.get('.backdrop-menu').classList.remove('show-backdrop')
});
