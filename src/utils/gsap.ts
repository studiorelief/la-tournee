import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fonction pour initialiser l'animation GSAP avec ScrollTrigger
function stepAnim() {
  // Set initial opacity
  gsap.set('.comment_number-w', {
    opacity: 0,
    y: -32,
  });

  // Créer l'animation
  gsap.to('.comment_number-w', {
    opacity: 1,
    y: 0,
    stagger: 0.2, // Effet de "stagger"
    scrollTrigger: {
      markers: false,
      trigger: '.comment_component', // Déclencheur de l'animation
      start: 'top 55%', // Début de l'animation lorsque le haut du déclencheur atteint 75% du viewport
      end: 'bottom 80%', // Fin de l'animation lorsque le bas du déclencheur atteint 25% du viewport
      scrub: true, // Lisse l'animation
    },
  });
}

export { stepAnim };
