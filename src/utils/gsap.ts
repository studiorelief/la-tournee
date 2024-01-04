import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* // Fonction pour initialiser l'animation GSAP avec ScrollTrigger
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
      markers: false,
      trigger: '.section_comment', // Déclencheur de l'animation
      start: 'top 60%', // Début de l'animation lorsque le haut du déclencheur atteint 75% du viewport
      end: 'bottom 85%', // Fin de l'animation lorsque le bas du déclencheur atteint 25% du viewport
      scrub: true, // Lisse l'animation
    },
  });
} */

function formAnim() {
  gsap.set('.a--form-1', {
    opacity: 0.5,
  });
  gsap.set('.a--form-2', {
    opacity: 1,
  });
  gsap.set('.form-cp_image.is-right', {
    rotate: 25,
  });
  gsap.set('.form-cp_image.is-left', {
    rotate: 10,
  });

  gsap.to('.a--form-1', {
    opacity: 1,
    stagger: 0,
    repeat: -1,
    duration: 0.5,
  });

  gsap.to('.a--form-2', {
    delay: 0.5,
    opacity: 0.5,
    stagger: 0,
    repeat: -1,
    duration: 0.5,
  });

  gsap.to('.form-cp_image.is-right', {
    rotate: 60,
    stagger: 0,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
  });

  gsap.to('.form-cp_image.is-left', {
    rotate: -30,
    stagger: 0,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
  });
}

export { formAnim /* , stepAnim */ };
