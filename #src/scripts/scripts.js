const menuBtn = document.getElementsByClassName('header-menu-btn')[0];
const menuList = document.getElementsByClassName('header-menu')[0];
const bodyTag = document.getElementsByTagName('body')[0];

if( menuBtn && menuList ){
    menuBtn.addEventListener('click', () => {
        bodyTag.style.overflow = (bodyTag.style.overflow === 'hidden' ? '' : 'hidden');
        menuBtn.classList.toggle('menu-opened');
        menuList.classList.toggle('menu-opened');
    })
}

const mainBanner = document.getElementsByClassName('main-banner-container')[0];

if( mainBanner ){

    const swiper = new Swiper('.main-banner-container', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        speed: 2000,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },

        // If we need pagination
        pagination: {
            el: '.banner-pagination',
        },

        autoplay: {
            delay: 7000,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        },
    });
}