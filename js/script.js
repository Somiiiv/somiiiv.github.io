// Language Texts
const texts = {
    "sr-Latn": {
        welcome: "Dobrodošli u našu asocijaciju za srpske folklorske igre",
        intro: "Posvećeni smo očuvanju i promovisanju srpskih folklornih tradicija kroz igru.",
        aboutTitle: "O Nama",
        aboutText: "Naša asocijacija je osnovana [YEAR] godine sa ciljem očuvanja srpskih folklornih tradicija. Organizujemo nastupe, radionice i kulturne događaje kako bismo delili našu baštinu sa zajednicom.",
        galleryTitle: "Galerija",
        contactTitle: "Kontakt",
        contactText: "Slobodno nas kontaktirajte za pitanja ili saradnju.",
        email: "Email: example@serbiandance.com",
        phone: "Telefon: +46 123 456 789",
        address: "Adresa: 123 Dance Street, Stockholm, Sweden",
        footerText: "© 2023 Asocijacija za srpske folklorske igre. Sva prava zadržana."
    },
    "sr-Cyrl": {
        welcome: "Добродошли у нашу асоцијацију за српске фолклорне игре",
        intro: "Посвећени смо очувању и промовисању српских фолклорних традиција кроз игру.",
        aboutTitle: "О Нама",
        aboutText: "Наша асоцијација је основана [YEAR] године са циљем очувања српских фолклорних традиција. Организујемо наступе, радионице и културне догађаје како бисмо делили нашу баштину са заједницом.",
        galleryTitle: "Галерија",
        contactTitle: "Контакт",
        contactText: "Слободно нас контактирајте за питања или сарадњу.",
        email: "Емаил: example@serbiandance.com",
        phone: "Телефон: +46 123 456 789",
        address: "Адреса: 123 Dance Street, Stockholm, Sweden",
        footerText: "© 2023 Асоцијација за српске фолклорне игре. Сва права задржана."
    },
    "sv": {
        welcome: "Välkommen till vår serbiska folkloredansförening",
        intro: "Vi är dedikerade till att bevara och främja serbiska folkloretraditioner genom dans.",
        aboutTitle: "Om Oss",
        aboutText: "Vår förening grundades [YEAR] med målet att bevara serbiska folkloretraditioner. Vi organiserar uppträdanden, workshops och kulturevenemang för att dela vår kulturarv med samhället.",
        galleryTitle: "Galleri",
        contactTitle: "Kontakt",
        contactText: "Tveka inte att kontakta oss för frågor eller samarbeten.",
        email: "E-post: example@serbiandance.com",
        phone: "Telefon: +46 123 456 789",
        address: "Adress: 123 Dance Street, Stockholm, Sweden",
        footerText: "© 2023 Serbiska Folkloredansföreningen. Alla rättigheter förbehållna."
    }
};

// Language Switcher
function switchLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = texts[lang][key];
    });
}

// Default Language
switchLanguage("sr-Latn");