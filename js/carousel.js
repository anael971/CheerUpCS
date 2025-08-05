/**
 * carousel.js - Module de gestion du carrousel d'images
 * Ce module gère toutes les fonctionnalités liées au carrousel de la page d'accueil
 */

// Namespace pour éviter les conflits
const CheerUpCarousel = (() => {
    // Variables privées
    let slides;
    let dots;
    let prevArrow;
    let nextArrow;
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 10000; // Durée d'affichage de chaque slide en ms

    // Fonction d'initialisation
    function init() {
        // Sélection des éléments DOM
        slides = document.querySelectorAll('.slide');
        dots = document.querySelectorAll('.dot');
        prevArrow = document.querySelector('.prev-arrow');
        nextArrow = document.querySelector('.next-arrow');

        // Si les éléments n'existent pas sur cette page, ne rien faire
        if (!slides.length || !dots.length) return;

        // Initialiser le défilement automatique
        startSlideShow();

        // Événements
        setupEventListeners();
    }

    // Configuration des écouteurs d'événements
    function setupEventListeners() {
        // Flèches de navigation
        if (prevArrow) {
            prevArrow.addEventListener('click', function() {
                prevSlide();
                restartSlideshow();
            });
        }

        if (nextArrow) {
            nextArrow.addEventListener('click', function() {
                nextSlide();
                restartSlideshow();
            });
        }

        // Points indicateurs
        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                goToSlide(index);
                restartSlideshow();
            });
        });

        // Pause du défilement au survol
        const carousel = document.querySelector('#image-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', stopSlideShow);
            carousel.addEventListener('mouseleave', startSlideShow);
        }
    }

    // Aller à une slide spécifique
    function goToSlide(index) {
        // Masquer la slide active
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Mettre à jour l'index de la slide active
        currentSlide = index;

        // Si l'index est hors des limites, ajuster
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        // Afficher la nouvelle slide active
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Slide suivante
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // Slide précédente
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Démarrer le défilement automatique
    function startSlideShow() {
        // Arrêter tout intervalle existant pour éviter les doublons
        stopSlideShow();
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    // Arrêter le défilement automatique
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Redémarrer le défilement automatique (après une interaction)
    function restartSlideshow() {
        stopSlideShow();
        startSlideShow();
    }

    // API publique
    return {
        init,
        goToSlide,
        nextSlide,
        prevSlide,
        stopSlideShow,
        startSlideShow
    };
})();

// Exporter le module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CheerUpCarousel;
}

document.addEventListener("DOMContentLoaded", function(){
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.slide');
        const prevBtn = carousel.querySelector('.prev-arrow');
        const nextBtn = carousel.querySelector('.next-arrow');
        let index = 0;
        
        function showSlide(i) {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === i);
            });
        }
        
        prevBtn.addEventListener('click', function(){
            index = (index - 1 + slides.length) % slides.length;
            showSlide(index);
        });
        
        nextBtn.addEventListener('click', function(){
            index = (index + 1) % slides.length;
            showSlide(index);
        });
        
        // Gestion des dots si présents
        const dots = carousel.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.addEventListener('click', function(){
                index = idx;
                showSlide(index);
                dots.forEach((d, i) => d.classList.toggle('active', i === index));
            });
        });
    });
});