
const showMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    
    toggle.addEventListener('click', () => {
        menu.classList.toggle('--show-menu')
    })
}

const navLinkIsActivated = (linksClass, menuId) => {
    const links = Array.from(document.querySelectorAll(linksClass));
    const menu = document.getElementById(menuId);

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('--show-menu')
        })
    })
}

showMenu('menuToggle', 'navMenu');
navLinkIsActivated('.menu-link', 'navMenu');