document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
});

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

function changeLanguage(lang) {
  const currentTheme = document.body.className;
  localStorage.setItem("theme", currentTheme);

  if (lang === "pt") {
    window.location.href = "index.html";
  } else {
    window.location.href = "index-en.html";
  }
}
