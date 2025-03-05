document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("toggle-dark-mode");
    const navbar = document.querySelector(".navbar");

    function setDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add("dark-mode");
            navbar.classList.add("navbar-dark-mode"); // Se asegura de que la barra cambie
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "☀️ Modo Claro";
        } else {
            document.body.classList.remove("dark-mode");
            navbar.classList.remove("navbar-dark-mode");
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "🌙 Modo Oscuro";
        }
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        setDarkMode(true);
    }

    darkModeToggle.addEventListener("click", () => {
        setDarkMode(!document.body.classList.contains("dark-mode"));
    });
});
