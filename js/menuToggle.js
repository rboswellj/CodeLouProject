function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}

let hamburger = document.getElementById('hamburgerBtn');
let logo = document.getElementById('logoSm');
let logoText = document.getElementById('logoHeading');
hamburger.addEventListener("click", toggleMenu);
logo.onclick = toggleMenu; 
logoText.onclick = toggleMenu;

