const menu = document.querySelector('.container__menu');

const icons = document.querySelectorAll('.container__icon-menu');

const html = {
    get(element) {
        return document.querySelector(element);
    }
};

icons.forEach(icon => {
    icon.addEventListener('click', e => {
        menu.classList.toggle('show');
    });
});
