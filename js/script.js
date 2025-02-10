const translations = {
    latin: {
        title: "Srpsko Udruženje Solna",
        welcome: "Dobrodošli u Srpsko udruženje Solna",
        home: "Početna",
        about: "O nama",
        sections: "Sekcije⌄",
        folklore: "Folklor",
        karate: "Karate",
        events: "Događaji",
        galleries: "Galerije",
        contact: "Kontakt",
        homeContent: "Dobrodošli na našu zvaničnu stranicu, mesto gde možete saznati više o našem udruženju, aktivnostima i događajima.",
        aboutContent: "text",
        folkloreContent: "Naša folklorna sekcija promoviše tradicionalnu muziku, ples i nošnje.",
        karateContent: "Trening i tehnike karatea za sve uzraste i nivoe iskustva.",
        eventsContent: "Ovde možete pronaći informacije o predstojećim događajima, festivalima i nastupima.",
        galleriesContent: "Pogledajte galeriju naših najvažnijih trenutaka i događaja.",
        contactContent: "Kontaktirajte nas putem emaila ili posetite našu lokaciju.",
        nameLabel: "Ime:",
        emailLabel: "Email:",
        messageLabel: "Poruka:",
        sendButton: "Pošalji",
        solna: "solna"
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
        sendButton: "Пошаљи",
        solna: "solna"
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
        sendButton: "Skicka",
        solna: "solna"
    }
};

// Function to set the language
function setLanguage(lang) {
    // Update the document title
    if (translations[lang].title) {
        document.title = translations[lang].title;
    }

    // Update all elements with data-key attributes
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update the language selector dropdown
    const langSelect = document.getElementById("languageSelect");
    if (langSelect) {
        langSelect.value = lang;
    }

    // Save language selection to localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Sidebar Functions
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
}

// Event Listeners for Dropdowns
document.addEventListener("DOMContentLoaded", function () {
    // Set the initial language
    const storedLang = localStorage.getItem('selectedLanguage') || 'latin';
    setLanguage(storedLang);

    // Set the language selector to the stored language
    const langSelect = document.getElementById("languageSelect");
    if (langSelect) {
        langSelect.value = storedLang;
    }

    // Add event listeners for sidebar dropdowns
    document.querySelectorAll('.sidebar-dropdown > a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function (e) {
        const sidebar = document.getElementById('sidebar');
        if (!e.target.closest('#sidebar') && !e.target.closest('.hamburger')) {
            closeSidebar();
        }
    });

    // Close sidebar when a link is clicked (for mobile)
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
        });
    });
});