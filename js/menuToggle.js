function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("header").classList.toggle("open");
}
let hamburger = document.getElementById('hamburgerBtn');
let logo = document.getElementById('logoSm');
let logoText = document.getElementById('logoHeading');
hamburger.onclick = toggleMenu;
logo.onclick = toggleMenu; 
logoText.onclick = toggleMenu;


