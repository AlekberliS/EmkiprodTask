const ticketImage = document.querySelector('.buy__ticket-ticket img');
document.querySelector('.header__right-buy').addEventListener('mouseover',()=> {
    ticketImage.src = './assets/images/ticket-white.svg'; 
    ticketImage.style.opacity = 1; 
});

document.querySelector('.header__right-buy').addEventListener('mouseout', ()=> {
    ticketImage.src = './assets/images/ticket-black.svg'; 
    ticketImage.style.opacity = 1;
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('header__nav__elements');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});