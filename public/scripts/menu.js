const html = {
    get(element) {
        return document.querySelector(element);
    },
    clickEvent(element) {
        return element.addEventListener('click', e => {
            menu.classList.toggle('show');
            backdropMenu.classList.toggle('show-backdrop');
        });
    }
};

const menu = html.get('.container__menu');
const backdropMenu = html.get('.backdrop-menu');
const icons = document.querySelectorAll('.container__icon-menu');

icons.forEach(icon => {
    html.clickEvent(icon);
});

html.clickEvent(backdropMenu);