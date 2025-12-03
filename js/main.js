function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('mainNav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
        nav.classList.remove('active');
    }
});