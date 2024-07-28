function createSlideshow(containerId) {
    const container = document.getElementById(containerId);
    const slides = container.querySelectorAll('.mySlides');
    const prev = container.querySelector('.prev');
    const next = container.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('fade-in');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('fade-in');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    prev.addEventListener('click', prevSlide);
    next.addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    createSlideshow('slideshow1');
    createSlideshow('slideshow2');
    createSlideshow('slideshow3');
});