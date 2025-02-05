/* js/script.js */

const translations = {
    latin: {
        title: "Srpsko Udruženje Solna",
        welcome: "Dobrodošli u Srpsko udruženje Solna",
        home: "Početna",
        about: "O nama",
        sections: "Sekcije",
        folklore: "Folklor",
        karate: "Karate",
        events: "Događaji",
        galleries: "Galerije",
        contact: "Kontakt",
        homeContent: "Dobrodošli na našu zvaničnu stranicu, mesto gde možete saznati više o našem udruženju, aktivnostima i događajima.",
        aboutContent: "Srpsko udruženje Solna je posvećeno očuvanju tradicije i promociji srpskog folklora i borilačkih veština.",
        folkloreContent: "Naša folklorna sekcija promoviše tradicionalnu muziku, ples i nošnje.",
        karateContent: "Trening i tehnike karatea za sve uzraste i nivoe iskustva.",
        eventsContent: "Ovde možete pronaći informacije o predstojećim događajima, festivalima i nastupima.",
        galleriesContent: "Pogledajte galeriju naših najvažnijih trenutaka i događaja.",
        contactContent: "Kontaktirajte nas putem emaila ili posetite našu lokaciju.",
        nameLabel: "Ime:",
        emailLabel: "Email:",
        messageLabel: "Poruka:",
        sendButton: "Pošalji"
    },
    cyrillic: {
        title: "Српско Удружење Солна",
        welcome: "Добродошли у Српско удружење Солна",
        home: "Почетна",
        about: "О нама",
        sections: "Секције",
        folklore: "Фолклор",
        karate: "Карате",
        events: "Догађаји",
        galleries: "Галерије",
        contact: "Контакт",
        homeContent: "Добродошли на нашу званичну страницу, место где можете сазнати више о нашем удружењу, активностима и догађајима.",
        aboutContent: "Српско удружење Солна је посвећено очувању традиције и промоцији српског фолклора и борилачких вештина.",
        folkloreContent: "Наша фолклорна секција промовише традиционалну музику, плес и носње.",
        karateContent: "Тренинг и технике каратеа за све узрасте и нивое искуства.",
        eventsContent: "Овде можете пронаћи информације о предстојећим догађајима, фестивалима и наступима.",
        galleriesContent: "Погледајте галерију наших најважнијих тренутака и догађаја.",
        contactContent: "Контактирајте нас путем емаила или посетите нашу локацију.",
        nameLabel: "Име:",
        emailLabel: "Емаил:",
        messageLabel: "Порука:",
        sendButton: "Пошаљи"
    },
    swedish: {
        title: "Srpsko Udruženje Solna",
        welcome: "Välkommen till Srpsko Udruženje Solna",
        home: "Hem",
        about: "Om oss",
        sections: "Sektioner",
        folklore: "Folklor",
        karate: "Karate",
        events: "Evenemang",
        galleries: "Gallerier",
        contact: "Kontakt",
        homeContent: "Välkommen till vår officiella webbplats, där du kan lära dig mer om vår förening, aktiviteter och evenemang.",
        aboutContent: "Srpsko Udruženje Solna är dedikerat till att bevara traditionen och främja serbisk folklore samt kampsporter.",
        folkloreContent: "Vår folkloristiska sektion främjar traditionell musik, dans och folkdräkter.",
        karateContent: "Träning och tekniker inom karate för alla åldrar och erfarenhetsnivåer.",
        eventsContent: "Här hittar du information om kommande evenemang, festivaler och uppträdanden.",
        galleriesContent: "Ta en titt på galleriet med våra mest minnesvärda ögonblick och evenemang.",
        contactContent: "Kontakta oss via e-post eller besök vår plats.",
        nameLabel: "Namn:",
        emailLabel: "E-post:",
        messageLabel: "Meddelande:",
        sendButton: "Skicka"
    }
};

function setLanguage(lang) {
    // Update the document title
    if (translations[lang].title) {
        document.title = translations[lang].title;
    }

    // Find all elements with a data-key attribute and update their text
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Save language selection in localStorage
    localStorage.setItem('selectedLanguage', lang);
}

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    // Check localStorage for a saved language; default to 'latin' if none.
    const storedLang = localStorage.getItem('selectedLanguage') || 'latin';
    setLanguage(storedLang);

    // Set the language selector drop-down to the stored language
    const langSelect = document.getElementById("languageSelect");
    if (langSelect) {
        langSelect.value = storedLang;
    }

    // Add event listener for sidebar dropdown toggling (for mobile)
    document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent) {
                dropdownContent.classList.toggle('show');
            }
        });
    });

    // Optionally, close any open dropdown if clicking outside.
    window.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
});
