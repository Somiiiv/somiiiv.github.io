const texts = {
    "sr-Latn": {
        home: "Početna",
        about: "O Nama",
        gallery: "Galerija",
        contact: "Kontakt",
        welcome: "Dobrodošli u Srpsku Folklornu Asocijaciju",
        intro: "Čuvamo tradiciju kroz ples i kulturu",
        aboutTitle: "Naša Priča",
        aboutText: "Osnovani smo 2005. godine sa ciljem očuvanja autentičnih folklornih tradicija...",
        galleryTitle: "Naši Treninzi i Nastupi",
        contactTitle: "Kontaktirajte Nas",
        contactText: "Radujemo se vašim porukama i saradnjama!",
        email: "Email: kontakt@srpskifolklore.rs",
        phone: "Telefon: +381 11 123 456",
        address: "Adresa: Knez Mihailova 15, Beograd"
    },
    // Add full translations for sr-Cyrl and sv
};

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'sr-Latn';
    switchLanguage(savedLang);

    // Add active class to current page
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

function switchLanguage(lang) {
    localStorage.setItem('selectedLang', lang);

    // Update all translatable elements
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (texts[lang][key]) {
            element.textContent = texts[lang][key];
        }
    });

    // Update page title
    const pageTitles = {
        'index.html': texts[lang].home,
        'about.html': texts[lang].about,
        'gallery.html': texts[lang].gallery,
        'contact.html': texts[lang].contact
    };
    const currentPage = window.location.pathname.split('/').pop();
    document.title = `${pageTitles[currentPage]} | ${texts[lang].welcome}`;
}