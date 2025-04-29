    document.addEventListener('DOMContentLoaded', () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        let hasAnimated = false;
    
        // Fonction pour animer les chiffres
        function animateNumbers() {
            statNumbers.forEach(stat => {
                const target = +stat.getAttribute('data-target');
                const addPlus = stat.getAttribute('data-plus') === 'true'; // Vérifie si le "+" doit être ajouté
                const increment = target / 100; // Ajustez la vitesse ici
                let current = 0;
    
                const updateNumber = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.floor(current); // Affiche le nombre actuel
                        requestAnimationFrame(updateNumber);
                    } else {
                        stat.textContent = addPlus ? `${target}+` : `${target}`; // Ajoute ou non le "+"
                    }
                };
    
                updateNumber();
            });
        }
    
        // Détecter si la section est visible
        function isSectionVisible() {
            const statsSection = document.querySelector('.mission-stats');
            const rect = statsSection.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
    
        // Ajouter un écouteur pour déclencher l'animation
        window.addEventListener('scroll', () => {
            if (isSectionVisible() && !hasAnimated) {
                animateNumbers();
                hasAnimated = true; // Empêche de rejouer l'animation
            }
        });
    });