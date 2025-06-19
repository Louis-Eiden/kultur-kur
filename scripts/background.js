var bg = document.body;
const footer = document.querySelector("footer");

function updateBackgroundPosition() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const footerRect = footer.getBoundingClientRect();
  const distanceFromBottom = pageHeight - (scrollY + viewportHeight);
  const isMobile = window.matchMedia("(max-width: 1875px)").matches;

  if (scrollY < 200) {
    bg.style.backgroundPosition = "top";
    // bg.style.backgroundSize = "cover";
  } else if (distanceFromBottom <= 250) {
    bg.style.backgroundPosition = "center";
    // bg.style.backgroundSize = "cover";
  } else if (isMobile) {
    bg.style.backgroundPosition = "center";
  } else {
    bg.style.backgroundPosition = "bottom -1615px center";
    // bg.style.backgroundSize = "contain";
  }
}

// Initial call to set the correct position
updateBackgroundPosition();

// Add event listener for scroll
window.addEventListener("scroll", updateBackgroundPosition);

// Add event listener for resize to handle orientation changes
window.addEventListener("resize", updateBackgroundPosition);
