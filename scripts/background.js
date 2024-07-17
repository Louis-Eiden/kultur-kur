var bg = document.body;
window.addEventListener('scroll', function() {
  if (window.scrollY > 200) {
    document.body.style.backgroundPosition = 'center';
  } else if (window.scrollY < 200) {
    document.body.style.backgroundPosition = 'top center';
  }
});