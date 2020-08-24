let menu = document.querySelector('.menu-content');
document.querySelector('.icon-menu').addEventListener('click', e => {
    menu.classList.add('show')
})
document.querySelector('.icon-close').addEventListener('click', e => {
    menu.classList.remove('show')
})
document.querySelector('#title-menu').addEventListener('click', e => {
    document.querySelector('.menu-solutions').classList.toggle('show-menu')
})