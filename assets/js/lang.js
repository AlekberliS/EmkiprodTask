i18next.init({
    lng: 'en', 
    resources: {
        en: {
            translation: {
                "home": "Home",
                "events": "Events",
                "blog": "Blog",
                "sponsors": "Sponsors",
                "about_us": "About us",
                "buy_ticket": "Buy Ticket",
                "elevate_your_concert_experience": "Elevate Your Concert Experience",
                "welcome_message": "Welcome to the ultimate destination for music enthusiasts and concert-goers! At EMKI Production, we're passionate about bringing you the very best in live music experiences. Whether you're a die-hard fan or a casual listener, we've got something special in store for you.",
                "events_button": "Events"
            }
        },
        az: {
            translation: {
                "home": "Əsas",
                "events": "Tədbirlər",
                "blog": "Bloq",
                "sponsors": "Sponsorlar",
                "about_us": "Haqqımızda",
                "buy_ticket": "Bilet al",
                "elevate_your_concert_experience": "Konsert təcrübənizi yüksəldin",
                "welcome_message": "Musiqi sevənlər və konsert həvəskarları üçün son təyinat nöqtəsinə xoş gəlmisiniz. EMKI Production olaraq sizə canlı musiqi təcrübəsini ən yaxşı şəkildə təqdim etməkdə peşəkarıq. Qatı fanat və ya sadə dinləyici olmağınızdan aslı olmayaraq sizin üçün xüsusi tədbirlərimiz var.",
                "events_button": "Tədbirlər"
            }
        },
        ru: {
            translation: {
                "home": "Главная",
                "events": "Мероприятия",
                "blog": "Блог",
                "sponsors": "Спонсоры",
                "about_us": "О нас",
                "buy_ticket": "Купи билет",
                "elevate_your_concert_experience": "Повысьте ваш концертный опыт",
                "welcome_message": "Добро пожаловать в конечную точку любителей музыки и энтузиастов концертов. Будучи EMKI Production мы профессионалы в предоставлении вам опыта живой музыки. У нас для вас особые мероприятия, независимо от того, вы ярый фанат или простой слушатель.",
                "events_button": "Мероприятия"
            }
        }
    }
}, function(err, t) {
    updateContent();
});

document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    i18next.changeLanguage(selectedLanguage, (err, t) => {
        updateContent();
    });
});
document.getElementById('language-select1').addEventListener('change', function() {
    const selectedLanguage = this.value;
    i18next.changeLanguage(selectedLanguage, (err, t) => {
        updateContent();
    });
});

function updateContent() {
    document.querySelector('.header__nav__elements-element:nth-child(1) a').textContent = i18next.t('home');
    document.querySelector('.header__nav__elements-element:nth-child(2) a').textContent = i18next.t('events');
    document.querySelector('.header__nav__elements-element:nth-child(3) a').textContent = i18next.t('blog');
    document.querySelector('.header__nav__elements-element:nth-child(4) a').textContent = i18next.t('sponsors');
    document.querySelector('.header__nav__elements-element:nth-child(5) a').textContent = i18next.t('about_us');
    document.querySelector('.buy__ticket').textContent = i18next.t('buy_ticket');
    document.querySelector('.elevate_h h1').textContent = i18next.t('elevate_your_concert_experience');
    document.querySelector('.elevate_p p').textContent = i18next.t('welcome_message');
    document.querySelector('.events_button-des').textContent = i18next.t('events_button');
}
