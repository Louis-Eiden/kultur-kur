  window.addEventListener('load', function() {
    document.getElementById('header').style.transform = 'scaleY(1)';
  });

  document.addEventListener('DOMContentLoaded', function() {
    const subscribeSection = document.querySelector('#subscribe #subscribe-content');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          subscribeSection.classList.add('reveal');
          observer.unobserve(subscribeSection);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(subscribeSection);
  });

  