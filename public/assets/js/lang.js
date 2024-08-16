i18next.init({
    lng: 'en', // default lang in our website en,az ,ru -values in select options
    resources: {
        en: {
            translation: {
                "home": "Home",
                "events": "Events",
                "blog": "Blog",
                "sponsors": "Sponsors",
                "about": "About us",
                "buy_ticket": "Buy Ticket",
                "elevate_your_concert_experience": "Elevate Your Concert Experience",
                "welcome_message": "Welcome to the ultimate destination for music enthusiasts and concert-goers! At EMKI Production, we're passionate about bringing you the very best in live music experiences. Whether you're a die-hard fan or a casual listener, we've got something special in store for you.",
                "events_button": 'Events',
                "trust": "We always give honest feedback and practical suggestions to help you",
                "transparency": "We help you understand everything by clearly presenting information",
                "innovation": "Our events are carefully planned to meet the goals of modern businesses",
                "collaboration": "We approach every engagement with confidence in our ability to forge long-term relationships"
            }
        },
        az: {
            translation: {
                "home": "Əsas",
                "events": "Tədbirlər",
                "blog": "Bloq",
                "sponsors": "Sponsorlar",
                "about": "Haqqımızda",
                "buy_ticket": "Bilet al",
                "elevate_your_concert_experience": "Konsert təcrübənizi yüksəldin",
                "welcome_message": "Musiqi sevənlər və konsert həvəskarları üçün son təyinat nöqtəsinə xoş gəlmisiniz. EMKI Production olaraq sizə canlı musiqi təcrübəsini ən yaxşı şəkildə təqdim etməkdə peşəkarıq. Qatı fanat və ya sadə dinləyici olmağınızdan aslı olmayaraq sizin üçün xüsusi tədbirlərimiz var.",
                "events_button": "Tədbirlər",
                "trust": "Biz sizə kömək etmək üçün dürüst rəy və praktiki təkliflər veririk",
                        "transparency": "Biz bütün məlumatları aydın ifadə edərək hər şeyi başa düşməyə kömək edirik",
                        "innovation": "Tədbirlərimiz müasir biznesin məqsədlərinə cavab vermək üçün diqqətlə planlaşdırılır",
                        "collaboration": "Biz hər bir işə uzunmüddətli əlaqələr qurmaq qabiliyyətimizə inanaraq yanaşırıq"
            }
        },
        ru: {
            translation: {
                "home": "Главная",
                "events": "Мероприятия",
                "blog": "Блог",
                "sponsors": "Спонсоры",
                "about": "О нас",
                "buy_ticket": "Купи билет",
                "elevate_your_concert_experience": "Повысьте ваш концертный опыт",
                "welcome_message": "Добро пожаловать в конечную точку любителей музыки и энтузиастов концертов. Будучи EMKI Production мы профессионалы в предоставлении вам опыта живой музыки. У нас для вас особые мероприятия, независимо от того, вы ярый фанат или простой слушатель.",
                "events_button": "Мероприятия",
                "trust": "Мы всегда предоставляем вам для помощи честные отзывы и практические предложения",
                        "transparency": "Мы помогаем понять всё, точно выражая всю информацию",
                        "innovation": "Наши мероприятия внимательно планируются, отвечая современным целям бизнеса",
                        "collaboration": "Мы подходим к каждой работе доверяя нашим способностям создавать длительные отношения"
            }
        }
    }
}, function(err, t) {
    if (err) return console.error('i18next initialization error:', err);

    translateContent();
});

function translateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(element) {
        const key = element.getAttribute('data-i18n');
        element.innerText = i18next.t(key);
    });
}

document.getElementById('language-select').addEventListener('change', function(e) {
    i18next.changeLanguage(e.target.value, function(err, t) {
        if (err) return console.error('Language change error:', err);
        translateContent();
    });
    
});
document.getElementById('language-select1').addEventListener('change', function(e) {
    i18next.changeLanguage(e.target.value, function(err, t) {
        if (err) return console.error('Language change error:', err);
        translateContent();
    });
    
});
