document.addEventListener('DOMContentLoaded', () => {
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

    document.querySelector('.show-more-btn').addEventListener('click', function() {
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
});