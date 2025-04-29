/**
 * main.js - Point d'entrée principal de l'application JavaScript CheerUp
 * Ce fichier coordonne l'initialisation de tous les modules
 */

// Fonction exécutée quand le DOM est complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser tous les modules
    initializeModules();
    
    // Fonction pour détecter les fonctionnalités présentes et initialiser les modules appropriés
    function initializeModules() {
        // Initialiser le carousel si disponible
        if (typeof CheerUpCarousel !== 'undefined') {
            CheerUpCarousel.init();
        }
        
        // Initialiser la lightbox si disponible
        if (typeof CheerUpLightbox !== 'undefined') {
            CheerUpLightbox.init();
        }
        
        // Vérifier si des scripts spécifiques à la page sont nécessaires
        initializePageSpecificFeatures();
    }
    
    // Fonctionnalités spécifiques à certaines pages
    function initializePageSpecificFeatures() {
        // Détecter la page actuelle
        const currentPage = getCurrentPage();
        
        // Fonctionnalités spécifiques à la page d'accueil
        if (currentPage === 'home') {
            // Rien pour l'instant, déjà géré par les modules généraux
        }
        
        // Fonctionnalités spécifiques à la page équipe
        if (currentPage === 'team') {
            // Code spécifique à la page équipe si nécessaire
        }
        
        // Fonctionnalités spécifiques à la page événements
        if (currentPage === 'events') {
            // Code spécifique à la page événements si nécessaire
        }
    }
    
    // Détecter la page actuelle en fonction de l'URL
    function getCurrentPage() {
        const path = window.location.pathname;
        
        if (path.includes('index.html') || path.endsWith('/')) {
            return 'home';
        } else if (path.includes('equipe.html')) {
            return 'team';
        } else if (path.includes('evenements.html')) {
            return 'events';
        } else if (path.includes('projets.html')) {
            return 'projects';
        }
        
        return 'unknown';
    }
});