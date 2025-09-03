/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Hide menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const header = document.getElementById('header')
window.addEventListener('scroll', () => {
    if(window.scrollY >= 50) header.classList.add('blur-header')
    else header.classList.remove('blur-header')
})

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById('scroll-up')
window.addEventListener('scroll', () => {
    if(window.scrollY >= 350) scrollUp.classList.add('show')
    else scrollUp.classList.remove('show')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
})

/*=============== SCROLLREVEAL ANIMATION ===============*/
ScrollReveal().reveal('.section__title, .home__content, .about__container, .skills__container, .services__container, .projects__container, .contact__container', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 100
});

/*=============== PORTOFOLIO LIGHTBOX ===============*/
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.projects__img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightboxImg');
      lightboxImg.src = this.src;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  document.getElementById('lightboxClose').onclick = function() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = '';
  };

  document.getElementById('lightbox').addEventListener('click', function(e) {
    if(e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});
