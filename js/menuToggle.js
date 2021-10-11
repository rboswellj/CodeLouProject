function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("header").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
let y = document.getElementById('logo-sm');
x.onclick = toggleMenu;
y.onclick = toggleMenu; 