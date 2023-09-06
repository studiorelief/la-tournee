import './index.css';

import { initializeCountUpAndStyle } from '$utils/countup';
import { checkPostalCode } from '$utils/hero';
import { cloneCP, swipeElement } from '$utils/jquery';
import { reviewSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Swipe span-element
  swipeElement();
  cloneCP();

  // Load script for hero
  const submitButton = document.getElementById('submit-cp');
  if (submitButton) {
    submitButton.addEventListener('click', checkPostalCode);
  }

  // Load countup
  initializeCountUpAndStyle();

  // Swiper review
  reviewSwiper();
});
