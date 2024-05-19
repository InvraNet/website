document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function() {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true" || false;
        menuToggle.setAttribute("aria-expanded", !expanded);
        mobileMenu.classList.toggle("hidden");
    });
});