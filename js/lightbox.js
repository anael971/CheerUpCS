/**
 * lightbox.js - Module de gestion de la lightbox pour afficher les images agrandies
 * Ce module gère l'affichage des images en plein écran au clic (galerie photos)
 */

// Namespace pour éviter les conflits
const CheerUpLightbox = (() => {
    // Variables privées
    let lightbox;
    let lightboxImg;
    let closeBtn;
    let galleryImages;

    // Fonction d'initialisation
    function init() {
        // Sélection des éléments DOM
        lightbox = document.getElementById('lightbox');
        lightboxImg = document.getElementById('lightbox-img');
        closeBtn = document.querySelector('.lightbox .close');
        galleryImages = document.querySelectorAll('.photo-grid img');

        // Si les éléments n'existent pas sur cette page, ne rien faire
        if (!lightbox || !galleryImages.length) return;

        // Événements
        setupEventListeners();
    }

    // Configuration des écouteurs d'événements
    function setupEventListeners() {
        // Ouvrir la lightbox au clic sur une image
        galleryImages.forEach(image => {
            image.addEventListener('click', () => {
                openLightbox(image.src);
            });
        });

        // Fermer la lightbox au clic sur le bouton de fermeture
        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Fermer la lightbox au clic en dehors de l'image
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target !== lightboxImg) {
                    closeLightbox();
                }
            });
        }

        // Fermer la lightbox avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox && lightbox.style.display === 'flex') {
                closeLightbox();
            }
        });
    }

    // Ouvrir la lightbox avec une image spécifique
    function openLightbox(imageSrc) {
        if (!lightbox || !lightboxImg) return;
        
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex';
        
        // Animation d'apparition
        setTimeout(() => {
            lightbox.classList.add('show');
        }, 10);
        
        // Désactiver le défilement de la page
        document.body.style.overflow = 'hidden';
    }

    // Fermer la lightbox
    function closeLightbox() {
        if (!lightbox) return;
        
        lightbox.classList.remove('show');
        
        // Attendre la fin de l'animation avant de cacher
        setTimeout(() => {
            lightbox.style.display = 'none';
            
            // Réactiver le défilement de la page
            document.body.style.overflow = '';
        }, 300);
    }

    // API publique
    return {
        init,
        openLightbox,
        closeLightbox
    };
})();

// Exporter le module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CheerUpLightbox;
}