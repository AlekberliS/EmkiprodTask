const ticketImage = document.querySelector('.buy__ticket-ticket img');
const buyTicketButton = document.querySelector('.header__right-buy');
const buyTicketOpen = document.querySelector('.buy__ticket-open');
const headerElements = document.querySelectorAll('.header > *:not(.buy__ticket-open)'); // header içindeki tüm öğeleri seç

// Ticket image hover 
document.querySelector('.header__right-buy').addEventListener('mouseover', () => {
    ticketImage.src = './assets/images/ticket-white.svg';
    ticketImage.style.opacity = 1;
});

document.querySelector('.header__right-buy').addEventListener('mouseout', () => {
    ticketImage.src = './assets/images/ticket-black.svg';
    ticketImage.style.opacity = 1;
});
//hamburger menu 
const hamburger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.header__nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
  

    if (nav.classList.contains('open')) {
        setOpacity(0.6);
    } else {
        setOpacity(1);
    }
});


buyTicketButton.addEventListener('click', (e) => {
    buyTicketOpen.classList.toggle('open');

    if (buyTicketOpen.classList.contains('open')) {
        buyTicketOpen.style.display = 'block';
        setOpacity(0.6);
    } else {
        buyTicketOpen.style.display = 'none';
        setOpacity(1);
    }
    e.stopPropagation();
});

// Close modal 
document.addEventListener('click', (e) => {
    if (!buyTicketOpen.contains(e.target) && !buyTicketButton.contains(e.target) && !hamburger.contains(e.target) && !nav.contains(e.target)) {
        buyTicketOpen.classList.remove('open');
        buyTicketOpen.style.display = 'none';
        nav.classList.remove('open');
        hamburger.classList.remove('open');
        setOpacity(1);
    }
});

// opacity fixing
function setOpacity(value) {
    headerElements.forEach(element => {
        element.style.opacity = value;
    });
}
