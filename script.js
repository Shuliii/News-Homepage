const iconMenu = document.querySelector('.icon-menu');
const iconMenuClose = document.querySelector('.icon-menu-close');

iconMenu.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body')
    modal.classList.add('active');
    body.classList.add('noscroll')
})

iconMenuClose.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body')
    modal.classList.remove('active')
    body.classList.remove('noscroll')
})