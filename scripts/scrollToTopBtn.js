
// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    mybutton.classList.remove('bottom-hide');
    mybutton.classList.add('bottom-reveal');
  } else {
    mybutton.classList.remove('bottom-reveal');
    mybutton.classList.add('bottom-hide');
  }
});

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


