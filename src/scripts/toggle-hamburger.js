export function toggleHamburger() {
  const hamburgerToggle = document.getElementById("menu-toggle");
  const body = document.body;

  hamburgerToggle.addEventListener("click", () => {
    const headerNav = document.querySelector(".header__nav");

    headerNav.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });
}
