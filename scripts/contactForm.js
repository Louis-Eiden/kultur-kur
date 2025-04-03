document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.querySelector(".contact-toggle-btn");
  const contactForm = document.querySelector(".contact-form");

  if (contactBtn && contactForm) {
    // Initially hide the form
    contactForm.style.display = "none";

    contactBtn.addEventListener("click", function (e) {
      e.preventDefault();

      // Toggle form visibility
      if (contactForm.style.display === "none") {
        contactForm.style.display = "block";
        setTimeout(() => contactForm.classList.add("visible"), 10);
        contactBtn.textContent = "Hide";
      } else {
        contactForm.classList.remove("visible");
        setTimeout(() => {
          contactForm.style.display = "none";
          contactBtn.textContent = "Here";
        }, 500);
      }
    });
  }

  // Optional: Scroll to form when it becomes visible
  function scrollToForm() {
    const formRect = contactForm.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = formRect.top + scrollTop - 100; // 100px offset for better viewing

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }
});
