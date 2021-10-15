export function hambuger() {
    const navHamburger = document.getElementById('nav__hamburger');
    const navList = document.getElementById('nav__list');

    navHamburger.addEventListener('click', () => {
            if (navHamburger.classList.contains("nav__hamburger-open")) {
                navHamburger.classList.remove("nav__hamburger-open");
                navList.classList.remove("nav__list-open");
            } else {
                navHamburger.classList.add("nav__hamburger-open");
                navList.classList.add("nav__list-open");
            }
        })
    };

export function hi() {
    console.log('hi')
}




