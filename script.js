// Header scroll effect: Adds a shadow when you scroll down
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = '#000000';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.8)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Smooth Scroll console confirmation
console.log("High-Contrast Portfolio for Lakshana Loaded Successfully.");