// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');

    if (openBtn) {
        openBtn.addEventListener('click', function() {
            sidebar.classList.add('open');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('open');
        });
    }

    // Load saved language preference or default to Serbian Latin
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'sr-latn';
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    // Define translation texts for each language.
    const translations = {
        'sr-latn': {
            home: 'Početna',
            about: 'O nama',
            contact: 'Kontakt',
            gallery: 'Galerija',
            language: 'Jezik:',
            welcome: 'Dobrodošli u Srpsko Udruženje Solna',
            homeContent: 'Ovo je sadržaj početne stranice.',
            aboutTitle: 'O nama',
            aboutContent: 'Informacije o našem udruženju.',
            contactTitle: 'Kontakt',
            contactContent: 'Kontaktirajte nas na email@example.com',
            galleryTitle: 'Galerija',
            galleryContent: 'Sadržaj galerije.'
        },
        'sr-cyrl': {
            home: 'Почетна',
            about: 'О нама',
            contact: 'Контакт',
            gallery: 'Галерија',
            language: 'Језик:',
            welcome: 'Добродошли у Српско Удружење Солна',
            homeContent: 'Ово је садржај почетне странице.',
            aboutTitle: 'О нама',
            aboutContent: 'Информације о нашем удружењу.',
            contactTitle: 'Контакт',
            contactContent: 'Контактирајте нас на email@example.com',
            galleryTitle: 'Галерија',
            galleryContent: 'Садржај галерије.'
        },
        'sv': {
            home: 'Hem',
            about: 'Om oss',
            contact: 'Kontakt',
            gallery: 'Galleri',
            language: 'Språk:',
            welcome: 'Välkommen till Srpsko Udruženje Solna',
            homeContent: 'Detta är hemsidans innehåll.',
            aboutTitle: 'Om oss',
            aboutContent: 'Information om vår förening.',
            contactTitle: 'Kontakt',
            contactContent: 'Kontakta oss på email@example.com',
            galleryTitle: 'Galleri',
            galleryContent: 'Galleriinnehåll.'
        }
    };

    // Update all elements that have a data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
