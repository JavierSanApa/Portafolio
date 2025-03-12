/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Figtree, sans-serif;
    color: #333;
    padding: 20px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* Sección principal */
main {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    flex-grow: 1;
}

/* Diseño responsivo */
@media (min-width: 768px) {
    main {
        grid-template-columns: repeat(2, 1fr); /* 2 columnas en pantallas medianas */
    }
}

@media (min-width: 1024px) {
    main {
        grid-template-columns: repeat(3, 1fr); /* 3 columnas en pantallas grandes */
    }
}

.navbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    transition: all 0.3s ease;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    transition: all 0.3s ease;
}

.nav-links.scrolled {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-links li a {
    color: #333;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
}

.theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.2rem;
    color: #333;
}

#moon-icon {
    display: none;
}

/* Estilos para modo oscuro */
body.dark-mode .nav-links.scrolled {
    background: rgba(23, 23, 23, 0.8);
}

body.dark-mode .nav-links li a,
body.dark-mode .theme-toggle {
    color: #fff;
}

