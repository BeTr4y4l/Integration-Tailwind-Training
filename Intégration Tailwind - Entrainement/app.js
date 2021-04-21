const menu = document.querySelector(".menu");
const toggleMenu = document.querySelector(".menuToggle");

menu.addEventListener("click", function() {
    const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
    toggleMenu.setAttribute("aria-expanded", !open);
    toggleMenu.classList.toggle("hidden");
});