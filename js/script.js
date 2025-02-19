document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const elements = document.querySelectorAll('[data-i18n]');

    // Load default language (sr-Latn)
    loadLanguage('sr-Latn');

    languageSelect.addEventListener('change', (e) => {
        loadLanguage(e.target.value);
    });

    async function loadLanguage(lang) {
        const response = await fetch(`lang/${lang}.json`);
        const translations = await response.json();

        elements.forEach((element) => {
            const key = element.dataset.i18n;
            element.textContent = translations[key] || element.textContent;
        });

        document.documentElement.lang = lang;
    }
});