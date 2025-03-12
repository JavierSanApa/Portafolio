// Detectar scroll para añadir fondo al navbar
window.addEventListener('scroll', () => {
    const navLinks = document.querySelector('.nav-links');
    if (window.scrollY > 50) {
        navLinks.classList.add('scrolled');
    } else {
        navLinks.classList.remove('scrolled');
    }
});

// Cambiar entre modo claro y oscuro
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
});