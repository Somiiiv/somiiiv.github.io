document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;

    if (selectedLanguage === 'sr-latin') {
        document.querySelector('h1').textContent = 'Dobrodošli u Srpsko Udruženje Solna';
        document.querySelector('.hero p').textContent = 'Promovisanje srpske folklorno-tradicionalne kulture kroz ples.';
        document.querySelector('.btn').textContent = 'Saznaj više';
    } else if (selectedLanguage === 'sr-cyrillic') {
        document.querySelector('h1').textContent = 'Добродошли у Српско Удружење Солна';
        document.querySelector('.hero p').textContent = 'Промовисање српске фолклорно-традиционалне културе кроз плес.';
        document.querySelector('.btn').textContent = 'Сазнај више';
    } else if (selectedLanguage === 'sv') {
        document.querySelector('h1').textContent = 'Välkommen till Serbiska Föreningen Solna';
        document.querySelector('.hero p').textContent = 'Att främja serbisk folklör och kultur genom dans.';
        document.querySelector('.btn').textContent = 'Läs mer';
    }
});