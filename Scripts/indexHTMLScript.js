const mobileMenu = document.getElementById('mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');


mobileMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
});