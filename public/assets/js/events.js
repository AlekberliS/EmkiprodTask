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

            const container = document.querySelector('.events-container');
            if (!container) {
                console.error("Element with class 'events-container' not found.");
                return;
            }

            container.innerHTML = ''; 

            announcementTranslations.forEach(post => {
                const eventCard = document.createElement('a');
                eventCard.href = post.ticketLink || 'https://iticket.az/en/events/concerts'; 
                console.log(post.ticketLink)
                eventCard.target = '_blank';
                // eventCard.classList.add('block', 'rounded-lg', 'shadow-lg', 'bg-white', 'overflow-hidden', 'h-auto', 'transform', 'transition-transform', 'hover:scale-105', 'relative');

                eventCard.innerHTML = `
              
            <div class="relative flex flex-col gap-1 mb-4 w-350p md:w-375 cursor-pointer h-auto bg-transparent rounded-lg shadow-lg group transition-colors group-hover:bg-white duration-300">
                <div class="relative flex flex-col items-center overflow-hidden rounded-t-lg">
                    <img class="w-375 h-350 object-cover rounded-lg" src="${post.imageSrc}" alt="${post.imageTitle}">
                <div class="absolute  mx-auto my-36 flex items-center justify-center w-36 h-10 bg-pink-500 text-white text-lg font-bold uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read More
                    </div>
                </div>
                
                <div class="relative  p-2  rounded-lg group-hover:text-black group-hover:bg-white transition-colors duration-300">
                    <h2 class="text-xl font-semibold ">
                        ${post.artistName}
                    </h2>
                    <p class="py-3  text-base bg-transparent rounded-b-lg">
                        ${post.place}
                    </p>
                    
                </div>
            </div>
            
       

                `;

                container.appendChild(eventCard);
            });
        }
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
