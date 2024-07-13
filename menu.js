document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // Toggle animation on click
  hamburgerIcon.onclick = () => {
    if (nav.classList.contains("nav-shrink") || !nav.classList.contains("nav-grow")) {
      nav.classList.remove("nav-shrink");
      nav.classList.add("nav-grow");
      hamburgerIcon.classList.remove("close");
      hamburgerIcon.classList.add("open");
    } else {
      nav.classList.remove("nav-grow");
      nav.classList.add("nav-shrink");
      hamburgerIcon.classList.remove("open");
      hamburgerIcon.classList.add("close");
    }
  };
});