import { CountUp } from 'countup.js';

function startCountUpAnimation(): void {
  const container = document.querySelector('#is-countup') as HTMLElement;
  const numberText = container.textContent;
  const number = parseInt(numberText || '0', 10);

  if (isNaN(number)) {
    console.error('Failed to convert container text to number.');
    return;
  }

  const countUp = new CountUp(container, number, {
    startVal: 100000,
    duration: 3,
    decimalPlaces: 0,
    separator: '',
  });

  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
}

function checkVisibility(): void {
  const container = document.querySelector('#is-countup') as HTMLElement;
  const containerRect = container.getBoundingClientRect();

  const windowHeight = window.innerHeight || document.documentElement.clientHeight;

  // Check if the element's top position is within the visible window
  const isVisible = containerRect.top >= 0 && containerRect.top <= windowHeight;

  if (isVisible) {
    startCountUpAnimation();
  }
}

export function initializeCountUpAndStyle(): void {
  const container = document.querySelector('#is-countup') as HTMLElement;

  if (!container) {
    console.error('Container element not found.');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        checkVisibility();
        observer.disconnect();
      }
    });
  });

  observer.observe(container);
}
