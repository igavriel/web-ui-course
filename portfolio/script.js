function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function getCurrentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  syncThemeToggles();
}

function syncThemeToggles() {
  const isDark = getCurrentTheme() === "dark";
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  });
}

function initTheme() {
  syncThemeToggles();
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = getCurrentTheme() === "dark" ? "light" : "dark";
      setTheme(next);
    });
  });
}

initTheme();
