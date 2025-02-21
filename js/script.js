// Initialize Website
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Language System
    const languageSwitcher = {
        currentLang: 'sr-Latn',
        texts: {
            'sr-Latn': { /* Add translations */ },
            'sr-Cyrl': { /* Add translations */ },
            'sv': { /* Add translations */ }
        },
        init() {
            document.querySelectorAll('[data-lang]').forEach(el => {
                el.textContent = this.texts[this.currentLang][el.dataset.lang];
            });
        }
    };

    languageSwitcher.init();
});

// Intersection Observer Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});