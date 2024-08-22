const jsonLink = 'https://emki-app-c841c0ee2e8c.herokuapp.com/page';

function fetchAndDisplayAnnouncements(jsonLink) {
    fetch(jsonLink)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('announcements');

            container.innerHTML = '';

            data.announcementTranslations.forEach(announcement => {
                const announcementDiv = document.createElement('div');
                announcementDiv.classList.add('swiper-slide', 'flex', 'items-center', 'p-0', 'flex-wrap', 'gap-10', 'justify-center', 'min-w-[300px]');

                announcementDiv.innerHTML = `
                    <div class="relative flex flex-col w-98 cursor-pointer h-auto bg-transparent rounded-lg shadow-lg group transition-colors group-hover:bg-white duration-300">
                        <div class="relative flex flex-col items-center overflow-hidden rounded-t-lg">
                            <img class="w-98 h-60 object-cover rounded-lg" src="${announcement.imageSrc}" alt="${announcement.artistName}">
                        </div>
                        <p class="py-3 px-2 text-white text-sm opacity-95 bg-transparent rounded-b-lg group-hover:text-black group-hover:bg-white transition-colors duration-300">
                            <span class="text-xl font-bold">${announcement.artistName}</span>
                            <br>
                            ${announcement.created} • ${announcement.place}
                        </p>
                        <div class="absolute w-36 h-10 rounded m-24 inset-0 flex items-center justify-center text-lg font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-white group-hover:text-black">
                            <a href="${announcement.ticketLink}">Read More</a>
                        </div>
                    </div>
                `;
                container.appendChild(announcementDiv); 
            });
        })
        .catch(error => console.error('Error', error));
}

fetchAndDisplayAnnouncements(jsonLink);