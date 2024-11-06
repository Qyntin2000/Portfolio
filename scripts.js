// Smooth scroll functionality for the welcome section arrow
document.querySelector('.scroll-icon').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});