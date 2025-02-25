export function iniciarMenuHamburguer() {
    const menuIcon = document.querySelector(".menu-hamburguer");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Alterna o menu
    });
}
