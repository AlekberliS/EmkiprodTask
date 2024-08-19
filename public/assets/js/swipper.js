document.addEventListener("DOMContentLoaded", function() {
  let data = [];

  fetch('https://emki-app-c841c0ee2e8c.herokuapp.com/page', {
      method: 'GET'
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
  })
  .then(fetchedData => {
      data = fetchedData;
      const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
      updateContent(savedLanguage);
  })
  .catch(error => console.error('Error fetching the project section:', error));

  function updateContent(languageCode) {
      const index = {
          'en': 1,
          'az': 0,
          'ru': 2
      }[languageCode];

      if (index !== undefined && data[index]) {
          const firstItem = data[index];

          if (Array.isArray(firstItem.postTranslations) && firstItem.postTranslations.length > 0) {
              const postTranslations = firstItem.postTranslations;

              const swiperWrapper = document.querySelector('.swiper-wrapper');
              if (!swiperWrapper) {
                  console.error("Element with class 'swiper-wrapper' not found.");
                  return;
              }

              swiperWrapper.innerHTML = ''; // Clear existing slides

              postTranslations.forEach((post, index) => {
                  const swiperSlide = document.createElement('div');
                  swiperSlide.classList.add('swiper-slide', 'flex', 'items-center', 'p-0', 'flex-wrap', 'gap-10', 'justify-center', 'min-w-[300px]');

                  swiperSlide.innerHTML = `
                      <div class="relative flex flex-col w-98 cursor-pointer h-auto bg-transparent rounded-lg shadow-lg group transition-colors group-hover:bg-white duration-300">
                          <div class="relative flex flex-col items-center overflow-hidden rounded-t-lg">
                              <img class="w-98 h-60 object-cover rounded-lg" src="${post.imageSrc}" alt="${post.imageTitle}">
                              <h2 class="absolute bottom-3 text-xl text-white font-semibold w-full text-center p-2">
                                  ${post.title.substring(0, 24)}
                              </h2>
                          </div>
                          <p class="py-3 px-2 text-white text-base opacity-95 bg-transparent rounded-b-lg group-hover:text-black group-hover:bg-white transition-colors duration-300">
                              ${post.content.substring(0, 70)}...
                          </p>
                          <div data-i18n="read" class="absolute w-36 h-10 rounded m-24 inset-0 flex items-center justify-center bg-pink-500 bg-opacity-100 text-white text-lg font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              Read More
                          </div>
                      </div>
                  `;
                  swiperSlide.addEventListener('click', function() {
                      localStorage.setItem('selectedPost', JSON.stringify(post));
                      window.location.href = 'detail.html';
                  });

                  swiperWrapper.appendChild(swiperSlide);
              });

              // Initialize Swiper or update it if already initialized
              if (typeof Swiper !== 'undefined') {
                  new Swiper(".mySwiper", {
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
                          400: {
                              slidesPerView: 1,
                              spaceBetween: 10,
                          }
                      },
                  });
              } else {
                  console.error('Swiper is not defined.');
              }
          } else {
              console.warn('No postTranslations data found or data format is incorrect.');
          }
      } else {
          console.warn('Data for the selected language is not available.');
      }
  }

  const languageSelect = document.getElementById('language-select');
  languageSelect.addEventListener('change', function() {
      const selectedLanguage = languageSelect.value;
      localStorage.setItem('preferredLanguage', selectedLanguage);
      updateContent(selectedLanguage);
  });

  const languageSelect1 = document.getElementById('language-select1');
  languageSelect1.addEventListener('change', function() {
      const selectedLanguage = languageSelect1.value;
      localStorage.setItem('preferredLanguage', selectedLanguage);
      updateContent(selectedLanguage);
  });
});
