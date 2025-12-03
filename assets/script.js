// Menu mobile (si tu veux l'ajouter plus tard)
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
