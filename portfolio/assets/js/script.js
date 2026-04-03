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

function initProfileTyping() {
  const el = document.getElementById("profile-typing");
  if (!el) return;

  const titles = [
    "Software Developer",
    "System Architect",
    "Game Developer",
  ];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = titles.join(" | ");
    return;
  }

  let titleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeMs = 80;
  const deleteMs = 42;
  const pauseAfterTypeMs = 2400;
  const pauseBeforeNextMs = 450;

  function step() {
    const full = titles[titleIndex];

    if (!deleting && charIndex < full.length) {
      el.textContent = full.slice(0, charIndex + 1);
      charIndex += 1;
      window.setTimeout(step, typeMs);
      return;
    }

    if (!deleting && charIndex === full.length) {
      window.setTimeout(() => {
        deleting = true;
        step();
      }, pauseAfterTypeMs);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      el.textContent = full.slice(0, charIndex);
      window.setTimeout(step, deleteMs);
      return;
    }

    deleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    window.setTimeout(step, pauseBeforeNextMs);
  }

  step();
}

initProfileTyping();
