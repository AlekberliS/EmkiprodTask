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

});


buyTicketButton.addEventListener('click', (e) => {
    buyTicketOpen.classList.toggle('open');

    if (buyTicketOpen.classList.contains('open')) {
        buyTicketOpen.style.display = 'block';
      
    } else {
        buyTicketOpen.style.display = 'none';
      
    }
   
});

// Close modal 
document.addEventListener('click', (e) => {
    if (!buyTicketOpen.contains(e.target) && !buyTicketButton.contains(e.target) && !hamburger.contains(e.target) && !nav.contains(e.target)) {
        buyTicketOpen.classList.remove('open');
        buyTicketOpen.style.display = 'none';
        nav.classList.remove('open');
        hamburger.classList.remove('open');
 
    }
});

document.addEventListener("DOMContentLoaded", function() {
  fetch('./data.json')
      .then(response => response.json())
      .then(data => {
          const swiperWrapper = document.querySelector('.swiper-wrapper');

          data.concerts.forEach((concert, index) => {
              const swiperSlide = document.createElement('div');
              swiperSlide.classList.add('swiper-slide', 'flex', 'items-center', 'p-0', 'flex-wrap', 'gap-10', 'justify-center', 'min-w-[300px]');

              swiperSlide.innerHTML = `
                  <div class="relative flex flex-col w-98 cursor-pointer h-auto bg-transparent rounded-lg shadow-lg group transition-colors group-hover:bg-white duration-300">
                      <div class="relative flex flex-col items-center overflow-hidden rounded-t-lg">
                          <img class="w-98 h-60 object-cover rounded-lg" src="${concert.img}" alt="concert image">
                          <h2 class="absolute bottom-3 text-xl text-white font-semibold w-full text-center p-2 ">
                              ${concert.header.substring(0, 30)}
                          </h2>
                      </div>
                      <p class="py-3 px-2 text-white text-base opacity-95 bg-transparent rounded-b-lg group-hover:text-black group-hover:bg-white transition-colors duration-300">
                          ${concert.description.substring(0, 80)}...
                      </p>
                      <!-- Read More Button -->
                      <div class="absolute w-36 h-10 rounded m-24 inset-0 flex items-center justify-center bg-pink-500 bg-opacity-100 text-white text-lg font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Read More
                      </div>
                  </div>
              `;

              // Attach click event directly to the swiperSlide
              swiperSlide.addEventListener('click', function() {
                  window.location.href = `detail.html?concert=${encodeURIComponent(index)}`;
              });

              swiperWrapper.appendChild(swiperSlide);
          });
      })
      .catch(error => console.error('Error loading the data:', error));
});


var swiper = new Swiper(".mySwiper", {
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      400:{
        slidesPerView:1,
        spaceBetween:10,
      }
    },
  });