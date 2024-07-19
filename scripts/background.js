var bg = document.body;
const footer = document.querySelector('footer');
const footerRect = footer.getBoundingClientRect();
const viewportHeight = window.innerHeight;
const distanceFromBottom = footerRect.top - viewportHeight;

window.addEventListener('scroll', function() {
  console.log('distanceFromBottom', distanceFromBottom);

  if (window.scrollY < 200) {
    document.body.style.backgroundPosition = 'top center';
  } else if (window.scrollY > 200) {
    document.body.style.backgroundPosition = 'center';
  } else if (distanceFromBottom <= 250) {
    document.body.style.backgroundPosition = 'bottom center';
  }
});

