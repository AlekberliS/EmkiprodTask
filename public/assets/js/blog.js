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

        const blogsContainer = document.querySelector('.blogs');
        if (!blogsContainer) {
            console.error("Element with class 'blogs' not found.");
            return;
        }

        blogsContainer.innerHTML = ''; 

        if (index !== undefined && data[index]) {
            const firstItem = data[index];

            if (Array.isArray(firstItem.postTranslations) && firstItem.postTranslations.length > 0) {
                const postTranslations = firstItem.postTranslations;

                postTranslations.forEach((post, index) => {
                    const blogElement = document.createElement('div');
                    blogElement.classList.add('flex', 'items-center', 'p-0', 'flex-wrap', 'gap-10', 'justify-center', 'w-350', 'lg:w-98');

                    blogElement.innerHTML = `
                        <div class="relative flex flex-col w-98 cursor-pointer h-auto bg-transparent rounded-lg shadow-lg group transition-colors group-hover:bg-white duration-300">
                            <div class="relative flex flex-col items-center overflow-hidden rounded-t-lg">
                                <img class="w-98 h-60 object-cover rounded-lg" src="${post.imageSrc}" alt="${post.imageTitle}">
                                <h2 class="absolute bottom-3 text-xl flex flex-nowrap text-white font-semibold w-full text-center p-2">
                                    ${post.title.substring(0, 24)}
                                </h2>
                            </div>
                            <p class="py-3 px-2 text-white text-base opacity-95 bg-transparent rounded-b-lg group-hover:text-black group-hover:bg-white transition-colors duration-300">
                                ${post.content.substring(0, 70)}...
                            </p>
                            <div class="absolute w-36 h-10 rounded m-24 inset-0 flex items-center justify-center bg-pink-500 bg-opacity-100 text-white text-lg font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 read-more-btn" data-index="${index}">
                                Read More
                            </div>
                        </div>
                    `;

                    blogsContainer.appendChild(blogElement);
                });

               
                document.querySelectorAll('.read-more-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        const selectedPost = postTranslations[this.dataset.index];
                        localStorage.setItem('selectedPost', JSON.stringify(selectedPost));
                        window.location.href = `detail.html?post=${encodeURIComponent(selectedPost.title)}`;
                    });
                });
            } else {
                console.warn('No postTranslations data found or data format is incorrect.');
            }
        }
    }

    
    const languageSelect = document.getElementById('language-select');
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = languageSelect.value;
        updateContent(selectedLanguage);
    });

    const languageSelect1 = document.getElementById('language-select1');
    languageSelect1.addEventListener('change', function() {
        const selectedLanguage = languageSelect1.value;
        updateContent(selectedLanguage);
    });
});