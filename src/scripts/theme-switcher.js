export function themeSwitcher() {
  const switchDarkMode = document.getElementById("switch-scheme-dark");
  const switchLightMode = document.getElementById("switch-scheme-light");
  const themeToggleButton = document.getElementById("theme-switcher");

  const userPreference = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (userPreference === "dark" || (!userPreference && systemPrefersDark)) {
    document.body.classList.add("darkmode");
    switchDarkMode.classList.add("hidden");
    switchLightMode.classList.remove("hidden");
  } else {
    document.body.classList.remove("darkmode");
    switchDarkMode.classList.remove("hidden");
    switchLightMode.classList.add("hidden");
  }

  themeToggleButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("darkmode");

    switchDarkMode.classList.toggle("hidden", isDark);
    switchLightMode.classList.toggle("hidden", !isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
