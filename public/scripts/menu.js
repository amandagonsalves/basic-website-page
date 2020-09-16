const menu = document.querySelector('.container__menu');

const icons = document.querySelectorAll('.container__icon-menu');

icons.forEach(icon => {
    icon.addEventListener('click', e => {
        menu.classList.toggle('show');
    });
});
