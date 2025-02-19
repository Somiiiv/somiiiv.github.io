// Translation data for three languages
const translations = {
    latin: {
        nav: {
            home: "Početna",
            about: "O nama",
            gallery: "Galerija",
            contact: "Kontakt"
        },
        home: {
            title: "Dobrodošli u Srpsko Udruženje Solna",
            description: "Slavimo srpski folklor i kulturu."
        },
        about: {
            title: "O nama",
            content:
                "Ovde možete dodati istoriju i informacije o vašem udruženju. Navedite misiju, viziju i strast prema srpskom folkloru."
        },
        gallery: {
            title: "Galerija",
            description:
                "Pogledajte galeriju sa fotografijama naših nastupa i događaja."
        },
        contact: {
            title: "Kontakt",
            description:
                "Slobodno nas kontaktirajte za više informacija ili postavite pitanja."
        }
    },
    cyrillic: {
        nav: {
            home: "Почетна",
            about: "О нама",
            gallery: "Галерија",
            contact: "Контакт"
        },
        home: {
            title: "Добродошли у Српско Удружење Солна",
            description: "Прослављамо српски фолклор и културу."
        },
        about: {
            title: "О нама",
            content:
                "Овде можете додати историју и информације о вашем удружењу. Наведите мисију, визију и страст према српском фолклору."
        },
        gallery: {
            title: "Галерија",
            description:
                "Погледајте галерију са фотографијама наших наступа и догађаја."
        },
        contact: {
            title: "Контакт",
            description:
                "Слободно нас контактирајте за више информација или поставите питања."
        }
    },
    swedish: {
        nav: {
            home: "Hem",
            about: "Om oss",
            gallery: "Galleri",
            contact: "Kontakt"
        },
        home: {
            title: "Välkommen till Serbiska Förening Solna",
            description: "Vi firar serbisk folklordans och kultur."
        },
        about: {
            title: "Om oss",
            content:
                "Här kan du lägga till föreningens historia och information. Ange er mission, vision och passion för serbisk folklor."
        },
        gallery: {
            title: "Galleri",
            description:
                "Utforska vårt galleri med bilder från våra uppträdanden och evenemang."
        },
        contact: {
            title: "Kontakt",
            description:
                "Tveka inte att kontakta oss för mer information eller om du har några frågor."
        }
    }
};

// Run translation on DOM load
document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");
    // Get saved language or default to 'latin'
    let currentLang = localStorage.getItem("selectedLanguage") || "latin";
    languageSelect.value = currentLang;
    translatePage(currentLang);

    // Listen for language change and save preference
    languageSelect.addEventListener("change", function () {
        currentLang = this.value;
        localStorage.setItem("selectedLanguage", currentLang);
        translatePage(currentLang);
    });
});

// Function to update text content based on chosen language
function translatePage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const keys = el.getAttribute("data-i18n").split(".");
        let translation = translations[lang];
        keys.forEach((key) => {
            if (translation) translation = translation[key];
        });
        if (translation) el.innerText = translation;
    });
}
