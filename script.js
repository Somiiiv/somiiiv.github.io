const translations = {
    "sr-lat": {
        "home": "Početna",
        "about": "O nama",
        "sections": "Sekcije",
        "events": "Događaji",
        "gallery": "Galerija",
        "contact": "Kontakt",
        "home-title": "Dobrodošli u Srpsko Udruženje Solna!",
        "home-text": "Naše udruženje okuplja ljubitelje srpske tradicije, folklora i zajedništva.",
        "about-title": "O nama",
        "about-text": "Srpsko Udruženje Solna promoviše kulturu, folklor i zajedništvo kroz brojne aktivnosti."
    },
    "sr-cyrl": {
        "home": "Почетна",
        "about": "О нама",
        "sections": "Секције",
        "events": "Догађаји",
        "gallery": "Галерија",
        "contact": "Контакт",
        "home-title": "Добродошли у Српско Удружење Солна!",
        "home-text": "Наше удружење окупља љубитеље српске традиције, фолклора и заједништва."
    },
    "sv": {
        "home": "Hem",
        "about": "Om oss",
        "sections": "Sektioner",
        "events": "Evenemang",
        "gallery": "Galleri",
        "contact": "Kontakt",
        "home-title": "Välkommen till Serbiska Föreningen Solna!",
        "home-text": "Vårt förening samlar serbisk kultur och tradition."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.textContent = translations[lang][el.dataset.lang];
    });
}
