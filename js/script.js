// Translations for Latin, Cyrillic, and Swedish
const translations = {
    latin: {
        nav: {
            home: "Početna",
            about: "O nama",
            sections: "Sekcije",
            events: "Događaji",
            gallery: "Galerija",
            contact: "Kontakt"
        },
        home: {
            title: "Dobrodošli u Srpsko Udruženje Solna",
            subtitle: "Mesto gde negujemo tradiciju, folklor i zajedništvo.",
            learnMore: "Saznajte više",
            introTitle: "Naša misija",
            introText: "Ovde ide kratak uvod o udruženju, njegovoj misiji i ciljevima."
        },
        about: {
            title: "O nama",
            content:
                "Ovde možete pisati o istoriji i razvoju vašeg udruženja. Dodajte i druge detalje."
        },
        sections: {
            title: "Sekcije",
            content:
                "Ovde opišite različite sekcije unutar udruženja. Možete koristiti slike, kartice itd.",
            card1Title: "Folklorna sekcija",
            card1Desc: "Opis folklorne sekcije.",
            card2Title: "Muzička sekcija",
            card2Desc: "Opis muzičke sekcije."
        },
        events: {
            title: "Događaji",
            content:
                "Lista predstojećih i prošlih događaja, koncerata, proba i slično."
        },
        gallery: {
            title: "Galerija",
            content:
                "Pogledajte galeriju fotografija sa naših nastupa i događaja."
        },
        contact: {
            title: "Kontakt",
            content:
                "Za sva pitanja, predloge ili saradnju, slobodno nam pišite."
        },
        contactForm: {
            nameLabel: "Ime i prezime:",
            emailLabel: "Email:",
            messageLabel: "Poruka:",
            sendBtn: "Pošalji"
        }
    },
    cyrillic: {
        nav: {
            home: "Почетна",
            about: "О нама",
            sections: "Секције",
            events: "Догађаји",
            gallery: "Галерија",
            contact: "Контакт"
        },
        home: {
            title: "Добродошли у Српско Удружење Солна",
            subtitle: "Место где неговамо традицију, фолклор и заједништво.",
            learnMore: "Сазнајте више",
            introTitle: "Наша мисија",
            introText: "Овде иде кратак увод о удружењу, његовој мисији и циљевима."
        },
        about: {
            title: "О нама",
            content:
                "Овде можете писати о историји и развоју вашег удружења. Додајте и друге детаље."
        },
        sections: {
            title: "Секције",
            content:
                "Овде опишите различите секције унутар удружења. Можете користити слике, картице итд.",
            card1Title: "Фолклорна секција",
            card1Desc: "Опис фолклорне секције.",
            card2Title: "Музичка секција",
            card2Desc: "Опис музичке секције."
        },
        events: {
            title: "Догађаји",
            content:
                "Листа предстојећих и прошлых догађаја, концерата, проба и слично."
        },
        gallery: {
            title: "Галерија",
            content:
                "Погледајте галерију фотографија са наших наступа и догађаја."
        },
        contact: {
            title: "Контакт",
            content:
                "За сва питања, предлоге или сарадњу, слободно нам пишите."
        },
        contactForm: {
            nameLabel: "Име и презиме:",
            emailLabel: "Имејл:",
            messageLabel: "Порука:",
            sendBtn: "Пошаљи"
        }
    },
    swedish: {
        nav: {
            home: "Hem",
            about: "Om oss",
            sections: "Sektioner",
            events: "Evenemang",
            gallery: "Galleri",
            contact: "Kontakt"
        },
        home: {
            title: "Välkommen till Serbiska Förening Solna",
            subtitle: "En plats där vi bevarar tradition, folklor och gemenskap.",
            learnMore: "Läs mer",
            introTitle: "Vårt uppdrag",
            introText:
                "Här kan du skriva en kort introduktion om föreningen, dess uppdrag och mål."
        },
        about: {
            title: "Om oss",
            content:
                "Här kan du skriva om föreningens historia och utveckling. Lägg till fler detaljer."
        },
        sections: {
            title: "Sektioner",
            content:
                "Beskriv olika sektioner inom föreningen. Du kan använda bilder, kort osv.",
            card1Title: "Folklor-sektionen",
            card1Desc: "Beskrivning av folklor-sektionen.",
            card2Title: "Musiksektionen",
            card2Desc: "Beskrivning av musiksektionen."
        },
        events: {
            title: "Evenemang",
            content:
                "En lista över kommande och tidigare evenemang, konserter, repetitionstillfällen osv."
        },
        gallery: {
            title: "Galleri",
            content:
                "Titta på vårt galleri med bilder från våra uppträdanden och evenemang."
        },
        contact: {
            title: "Kontakt",
            content:
                "För alla frågor, förslag eller samarbeten, kontakta oss gärna."
        },
        contactForm: {
            nameLabel: "Namn och efternamn:",
            emailLabel: "E-post:",
            messageLabel: "Meddelande:",
            sendBtn: "Skicka"
        }
    }
};

// On DOM load, set or get language, then translate
document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    // Retrieve saved language or default to "latin"
    let currentLang = localStorage.getItem("selectedLanguage") || "latin";
    languageSelect.value = currentLang;
    translatePage(currentLang);

    // Listen for language change
    languageSelect.addEventListener("change", function () {
        currentLang = this.value;
        localStorage.setItem("selectedLanguage", currentLang);
        translatePage(currentLang);
    });
});

// Translation function
function translatePage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const keys = el.getAttribute("data-i18n").split(".");
        let translation = translations[lang];
        keys.forEach((key) => {
            if (translation && translation[key]) {
                translation = translation[key];
            }
        });
        if (typeof translation === "string") {
            el.innerText = translation;
        }
    });
}
