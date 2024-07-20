document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const menuEntries = document.querySelectorAll("nav a"); // Assuming menu entries are anchor tags inside the nav

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

  // Close menu when clicking on a menu entry
  menuEntries.forEach(entry => {
    entry.addEventListener("click", () => {
      nav.classList.remove("nav-grow");
      nav.classList.add("nav-shrink");
      hamburgerIcon.classList.remove("open");
      hamburgerIcon.classList.add("close");
    });
  });

  // Close menu when clicking outside the menu
  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      nav.classList.remove("nav-grow");
      nav.classList.add("nav-shrink");
      hamburgerIcon.classList.remove("open");
      hamburgerIcon.classList.add("close");
    }
  });
});

