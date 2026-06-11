/*==================== SHOW MENU (Mobile) ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navLinks = document.querySelectorAll('.nav__link');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.toggle('nav__menu--open');
        changeIcon();
    });
}

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('nav__menu--open');
    changeIcon();
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
      navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
      navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('header--scroll'); 
    else header.classList.remove('header--scroll');
}
window.addEventListener('scroll', scrollHeader);

/*==================== CURRENT YEAR ====================*/
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true 
});

// New Hero Reveal
sr.reveal('.hero-banner__content', {origin: 'right'});
sr.reveal('.hero-banner__image-box', {origin: 'left', delay: 400});

// About
sr.reveal('.about__content', {origin: 'left'});
sr.reveal('.skills__content', {interval: 200, origin: 'bottom'});

// Services
sr.reveal('.section__header');
sr.reveal('.service__card', {interval: 100, distance: '40px'});

// Testimonials
sr.reveal('.review-card', {interval: 100, origin: 'bottom', distance: '50px'});

// Contact
sr.reveal('.contact__content', {origin: 'left'});
sr.reveal('.contact__form-container', {origin: 'right'});
sr.reveal('.footer__content', {origin: 'bottom', delay: 200});