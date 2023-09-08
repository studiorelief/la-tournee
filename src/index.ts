import './index.css';

import { initializeCountUpAndStyle } from '$utils/countup';
import { checkPostalCode } from '$utils/hero';
import { inputSync, swipeElement, tradDate } from '$utils/jquery';
import { loadScript } from '$utils/loadscript';
import { blogSwiper, reviewSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Load Finsweet Attributes scripts
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmstabs@1/cmstabs.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
  ]);

  // Swipe span-element form CP
  swipeElement();
  tradDate();

  // Swiper review
  blogSwiper();
  reviewSwiper();

  // Load on Home only
  if (window.location.pathname === '/') {
    // Load script for hero
    const submitButton = document.getElementById('submit-cp');
    if (submitButton) {
      submitButton.addEventListener('click', checkPostalCode);
    }

    // Load countup
    initializeCountUpAndStyle();

    // Empêcher la soumission du formulaire avec la touche "Entrée"
    function preventFormSubmitOnEnter(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }

    // Attacher l'écouteur d'événement à l'input
    const inputElement = document.getElementById('input-cp') as HTMLInputElement;
    inputElement.addEventListener('keydown', preventFormSubmitOnEnter);

    // input sync on home
    inputSync('#input-cp-duplicate', '#input-cp', '#submit-cp-duplicate', '#submit-cp');
  }
});
