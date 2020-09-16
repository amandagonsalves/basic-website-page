const html = {
    get(element) {
        return document.querySelector(element);
    }
};

const menu = html.get('.container__menu');
const backdropMenu = html.get('.backdrop-menu');
const icons = document.querySelectorAll('.container__icon-menu');

icons.forEach(icon => {
    icon.addEventListener('click', e => {
        menu.classList.toggle('show');
        backdropMenu.classList.toggle('show-backdrop');
    });
});