
document.addEventListener('DOMContentLoaded', function() {
    // Éléments du carrousel
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    
    let currentSlide = 0;
    let slideInterval;
    
    // Initialiser le défilement automatique
    startSlideShow();
    
    // Fonction pour changer de slide
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
    
    // Fonction pour aller à la slide suivante
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Fonction pour aller à la slide précédente
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Démarrer le défilement automatique
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 10000); // Change slide every 5 seconds
    }
    
    // Arrêter le défilement automatique
    function stopSlideShow() {
        clearInterval(slideInterval);
    }
    
    // Ajouter des écouteurs d'événements aux flèches
    prevArrow.addEventListener('click', function() {
        prevSlide();
        stopSlideShow();
        startSlideShow(); // Redémarrer avec le nouveau timing
    });
    
    nextArrow.addEventListener('click', function() {
        nextSlide();
        stopSlideShow();
        startSlideShow(); // Redémarrer avec le nouveau timing
    });
    
    // Ajouter des écouteurs d'événements aux points indicateurs
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            goToSlide(index);
            stopSlideShow();
            startSlideShow(); // Redémarrer avec le nouveau timing
        });
    });
    
    // Pause du défilement automatique au survol du carrousel
    const carousel = document.querySelector('#image-carousel');
    carousel.addEventListener('mouseenter', stopSlideShow);
    carousel.addEventListener('mouseleave', startSlideShow);
});