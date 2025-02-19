document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const elements = document.querySelectorAll('[data-i18n]');

    // Load saved language from localStorage or default to sr-Latn
    const savedLang = localStorage.getItem('language') || 'sr-Latn';
    loadLanguage(savedLang);
    languageSelect.value = savedLang;

    languageSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        loadLanguage(selectedLang);
        localStorage.setItem('language', selectedLang);
    });

    async function loadLanguage(lang) {
        const response = await fetch(`lang/${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.dataset.i18n;
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        document.documentElement.lang = lang;
    }
});