import { CountUp } from 'countup.js';

export function initializeCountUpAndStyle(): void {
  // Obtain the reference to the container element
  const container = document.querySelector('#is-countup') as HTMLElement;

  // Validate if the container is present
  if (!container) {
    console.error('Container element not found.');
    return;
  }

  // Retrieve the text content and convert it to a number
  const numberText = container.textContent;
  const number = parseInt(numberText || '0', 10);

  // Validate if the number conversion is successful
  if (isNaN(number)) {
    console.error('Failed to convert container text to number.');
    return;
  }

  // Create a CountUp instance
  const countUp = new CountUp(container, number, {
    startVal: 100000, // Starts from 0
    duration: 3, // Duration of the animation in seconds
    decimalPlaces: 0, // No decimal places
    separator: '', // No separator
  });

  // Start the animation
  if (!countUp.error) {
    countUp.start();
  } else {
    console.error(countUp.error);
  }
}
