document.addEventListener("DOMContentLoaded", function() {
    const concertContainer = document.getElementById('concert-details');
    let data = [];
    let currentPostImgUrl = null;

    // Function to fetch data and update the content
    function fetchAndUpdateContent(languageCode) {
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
            const index = {
                'en': 1,
                'az': 0,
                'ru': 2
            }[languageCode];

            if (index !== undefined && data[index]) {
                const postTranslations = data[index].postTranslations;
                updateContent(postTranslations);
            } else {
                console.warn('Data for the selected language is not available.');
                concertContainer.innerHTML = '<p>No data available for the selected language.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching the project section:', error);
            concertContainer.innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
    }

    function updateContent(postTranslations) {
        if (currentPostImgUrl) {
            const concertDetails = postTranslations.find(post => post.imageSrc === currentPostImgUrl);
            if (concertDetails) {
                concertContainer.innerHTML = `
                    <img src="${concertDetails.imageSrc}" alt="concert image" class="w-full h-full object-cover rounded-lg mb-6">
                    <h1 class="text-base md:text-4xl font-bold mb-4">${concertDetails.title}</h1>
                    <p class="text-xs md:text-lg text-textCol">${concertDetails.content}</p>
                `;
            } else {
                concertContainer.innerHTML = '<p>No concert details available.</p>';
            }
        } else {
            concertContainer.innerHTML = '<p>No concert details available.</p>';
        }
    }

    // Load initial content from local storage
    const savedPost = JSON.parse(localStorage.getItem('selectedPost'));
    if (savedPost) {
        currentPostImgUrl = savedPost.imageSrc; // Assuming `imageSrc` is part of the saved post data
    } else {
        console.warn("No post found in local storage.");
    }
    
    // Load content based on the saved language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    fetchAndUpdateContent(savedLanguage);

    // Handle language change
    function handleLanguageChange() {
        const selectedLanguage = this.value;
        localStorage.setItem('preferredLanguage', selectedLanguage);
        fetchAndUpdateContent(selectedLanguage);
    }

    const languageSelect = document.getElementById('language-select');
    const languageSelect1 = document.getElementById('language-select1');
    if (languageSelect) {
        languageSelect.addEventListener('change', handleLanguageChange);
    }
    if (languageSelect1) {
        languageSelect1.addEventListener('change', handleLanguageChange);
    }
});
