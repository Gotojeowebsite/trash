// Dark Mode Switch JavaScript

// Check for the saved dark mode preference
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// If the user has previously chosen dark mode or the system prefers it, enable dark mode
if (currentTheme === "dark" || (currentTheme === null && prefersDarkScheme.matches)) {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
});
