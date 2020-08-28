let menu = document.querySelector('.menu-content');
document.querySelector('.icon-menu').addEventListener('click', e => {
    menu.classList.add('show')
})
document.querySelector('.icon-close').addEventListener('click', e => {
    menu.classList.remove('show')
})
