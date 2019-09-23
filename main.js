const hamburger = document.querySelector('.hamburger-container');
const navLinks = document.querySelector('.navigator');
const links = document.querySelectorAll('.navigator li');

hamburger.addEventListener('click', () => { 
    navLinks.classList.toggle("open");
});