const video = document.getElementById("home-video");
const overlay = document.getElementById("playOverlay");

overlay.addEventListener("click", () => {
  video.play();
  overlay.classList.add("hidden");

  // Remember user preference
  localStorage.setItem("videoAutoplay", "true");
});

// Try to autoplay if user previously interacted
if (localStorage.getItem("videoAutoplay") === "true") {
  video
    .play()
    .then(() => {
      overlay.classList.add("hidden");
    })
    .catch(() => {
      // Autoplay failed, show overlay
      overlay.classList.remove("hidden");
    });
}
