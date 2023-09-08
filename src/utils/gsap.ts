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
    stagger: 0.5, // Effet de "stagger"
    scrollTrigger: {
      markers: true,
      trigger: '.section_comment', // Déclencheur de l'animation
      start: 'top 60%', // Début de l'animation lorsque le haut du déclencheur atteint 75% du viewport
      end: 'bottom 85%', // Fin de l'animation lorsque le bas du déclencheur atteint 25% du viewport
      scrub: true, // Lisse l'animation
    },
  });
}

export { stepAnim };
