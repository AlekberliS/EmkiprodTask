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
  
            if (Array.isArray(firstItem.announcementTranslations) && firstItem.announcementTranslations.length > 0) {
                const announcementTranslations = firstItem.announcementTranslations;
  
                const swiperWrapper2 = document.querySelector('.mySwiperEvents .swiper-wrapper');
                if (!swiperWrapper2) {
                    console.error("Element with class 'swiper-wrapper' not found.");
                    return;
                }
  
                swiperWrapper2.innerHTML = ''; // Clear existing slides
  
                announcementTranslations.forEach(post => {
                    const swiperSlide = document.createElement('div');
                    swiperSlide.classList.add('swiper-slide', 'flex', 'p-0', 'flex-wrap', 'gap-10', 'justify-center');
  
                    const eventCard = document.createElement('a');
                    eventCard.href = post.ticketLink || 'https://iticket.az/en/events/concerts';
                    eventCard.target = '_blank';
                    
                    eventCard.innerHTML = `
                        <div class="relative flex flex-col gap-1 mb-4 w-330 xl:w-375 cursor-pointer h-auto bg-transparent rounded-lg shadow-lg group transition-colors group-hover:bg-white duration-300">
                            <div class="relative flex flex-col items-center overflow-hidden rounded-t-lg">
                                <img class=" w-330 lg:w-350p h-350 object-cover rounded-lg" src="${post.imageSrc}" alt="${post.artistName}">
                                <div class="absolute mx-auto my-36 flex items-center justify-center w-36 h-10 bg-pink-500 text-white text-lg font-bold uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Read More
                                </div>
                            </div>
                            <div class="relative p-2 rounded-lg group-hover:text-black group-hover:bg-white transition-colors duration-300">
                                <h2 class="text-xl font-semibold">
                                    ${post.artistName}
                                </h2>
                                <p class="py-3 text-base bg-transparent rounded-b-lg">
                                    ${post.place}
                                </p>
                            </div>
                        </div>
                    `;
                    
                    swiperSlide.appendChild(eventCard);
                    swiperWrapper2.appendChild(swiperSlide);
                });
  
                // Initialize or update Swiper
                if (typeof Swiper !== 'undefined') {
                    new Swiper(".mySwiperEvents", {
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
                console.warn('No announcementTranslations data found or data format is incorrect.');
            }
        } else {
            console.warn('Data for the selected language is not available.');
        }
    }
  
    // Add event listener for language selection
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            const selectedLanguage = languageSelect.value;
            localStorage.setItem('preferredLanguage', selectedLanguage);
            updateContent(selectedLanguage);
        });
    }

    const languageSelect1 = document.getElementById('language-select1');
    if (languageSelect1) {
        languageSelect1.addEventListener('change', function() {
            const selectedLanguage = languageSelect1.value;
            localStorage.setItem('preferredLanguage', selectedLanguage);
            updateContent(selectedLanguage);
        });
    }
});
