function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
    document.getElementById("header").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 