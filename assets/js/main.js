'use strict';
const phone = 5511948307817;
const linkedin = 'https://www.linkedin.com/in/daniel-andrade-da-silva/';
const whatsapp = 'https://web.whatsapp.com/send?phone=';
const github = 'https://github.com/danielandradedasilva';

function initAll() {

    whatssapMethod();

    /**Links contatos */
    document.querySelector('.linkedin').addEventListener('click', () => {
        window.open(linkedin);
    });

    document.querySelector('.github').addEventListener('click', () => {
        window.open(github);
    });
}

function whatssapMethod() {
    if (window.screen.width > 1000) {
        document.querySelector('.whatsapp').addEventListener('click', (phone) => {
            window.open(`${whatsapp}${phone}`);
        });
    } else if (window.screen.width <= 1000) {
        console.log('erro')
    }

}

/**Scroll Top */
window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 950);


})

setTimeout()

const scroolTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
document.querySelector('.scrollTop').addEventListener('click', scroolTop);

initAll();