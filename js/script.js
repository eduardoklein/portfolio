const THEME_KEY = "theme";

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "");
}

function changeLanguage(lang) {
  const target = lang === "pt" ? "index.html" : "index-en.html";
  window.location.href = target;
}
