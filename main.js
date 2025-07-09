document.addEventListener('DOMContentLoaded', () => { // Un solo listener para todo
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Toggle icons
        if (document.body.classList.contains('dark-theme')) {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            localStorage.setItem('theme', 'dark');
        } else {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
            localStorage.setItem('theme', 'light');
        }
    });

    // Lógica para el botón "Ver más" en Habilidades
    const showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function() {
            const extendedGrid = document.querySelector('.extended-tech-grid');
            extendedGrid.classList.toggle('active');
            
            const btnText = this.querySelector('span');
            const btnIcon = this.querySelector('i');
            
            if (extendedGrid.classList.contains('active')) {
                btnText.textContent = 'Ver menos';
                btnIcon.classList.replace('bi-plus-circle', 'bi-dash-circle');
            } else {
                btnText.textContent = 'Ver más';
                btnIcon.classList.replace('bi-dash-circle', 'bi-plus-circle');
            }
        });
    }

    // Lógica para los botones "Leer más"
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const textContainer = button.parentElement;
            textContainer.classList.toggle('expanded');
            
            if (textContainer.classList.contains('expanded')) {
                button.textContent = 'Leer menos';
            } else {
                button.textContent = 'Leer más';
            }
        });
    });

    // Lógica para el scroll de la barra de navegación
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});