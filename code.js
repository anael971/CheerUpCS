// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize carousel
showSlide(currentIndex);