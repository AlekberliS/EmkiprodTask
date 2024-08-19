document.addEventListener("DOMContentLoaded", function() {
    let data = [];
  
    // get local or default en 
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
  
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
  
            if (Array.isArray(firstItem.abouts) && firstItem.abouts.length > 0) {
                const aboutsContent = firstItem.abouts[0].content;
                const textTitle = firstItem.abouts[0].title;
                const imageSrc = firstItem.abouts[0].imageSrc;
                const imageTitle = firstItem.abouts[0].imageTitle;
  
                const projectSectionHTML = `
                    <div class="project w-86p px-2 sm:px-8 py-12 mx-auto flex flex-col xl:flex-row gap-6">
                      <div class="project__left text-white">
                        <h1 class="text-3xl md:text-5xl font-semibold mb-6">${textTitle}</h1>
                        <p class="font-medium leading-7">${aboutsContent}</p>
                      </div>
                      <div class="project__right">
                        <img src="${imageSrc}" class="rounded-lg" alt="${imageTitle}">
                      </div>
                    </div>
                `;
  
                const projectSectionContainer = document.getElementById('projectSectionContainer');
                projectSectionContainer.innerHTML = projectSectionHTML;
            } else {
                console.warn('The "abouts" property is missing or is not an array.');
            }
        } else {
            console.warn('Selected language data is not available.');
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