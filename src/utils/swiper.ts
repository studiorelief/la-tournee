import 'swiper/css';

import $ from 'jquery';
import Swiper from 'swiper';
import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

function reviewSwiper() {
  // swiper show - programmation
  $('.review_swiper-wrapper').each(function () {
    new Swiper($(this).find('.swiper.is-review')[0], {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: '4%',
      centeredSlides: true,
      //* bug on loop à régler
      loop: true,
      grabCursor: true,
      slideToClickedSlide: true,
      /* autoHeight: true, */
      speed: 300,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        // Navigation arrows
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slideActiveClass: 'is-active',
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 'auto',
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 'auto',
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 3,
          spaceBetween: '4%',
        },
      },
    });
  });
}

function blogSwiper() {
  // swiper show - programmation
  $('.swiper-blog_swiper-wrapper').each(function () {
    new Swiper($(this).find('.swiper.is-blog')[0], {
      modules: [Navigation, Mousewheel, Keyboard],
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: '4%',
      centeredSlides: true,
      //* bug on loop à régler
      loop: true,
      grabCursor: true,
      slideToClickedSlide: true,
      autoHeight: true,
      speed: 300,
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
        thresholdDelta: 1,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        // Navigation arrows
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slideActiveClass: 'is-active',
      breakpoints: {
        // mobile landscape
        480: {
          slidesPerView: 2,
          spaceBetween: '4%',
        },
        // tablet
        768: {
          slidesPerView: 'auto',
          spaceBetween: '4%',
        },
        // desktop
        992: {
          slidesPerView: 3,
          spaceBetween: '4%',
        },
      },
    });
  });
}

export { blogSwiper, reviewSwiper };
