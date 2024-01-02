//! Fonction range Calculator
// Range calculator
function rangeCalculator() {
  const fromInput = document.getElementById('From-1') as HTMLInputElement;
  const calculatorVariable = document.getElementById('calculator-variable') as HTMLInputElement;
  const calculatorVariableFront = document.getElementById('calculator-variable-front');

  if (fromInput && calculatorVariable && calculatorVariableFront) {
    fromInput.addEventListener('change', () => {
      const fromValue = Number(fromInput.value);

      let calcVarValue: number;

      switch (fromValue) {
        case 0:
          calcVarValue = 0;
          break;
        case 1:
          calcVarValue = 12;
          break;
        case 2:
          calcVarValue = 24;
          break;
        case 3:
          calcVarValue = 36;
          break;
        case 4:
          calcVarValue = 48;
          break;
        case 5:
          calcVarValue = 60;
          break;
        case 6:
          calcVarValue = 72;
          break;
        default:
          calcVarValue = 0;
      }

      calculatorVariable.value = calcVarValue.toString();

      calculatorVariableFront.textContent = calcVarValue.toString();
    });
  } else {
    console.error('One or more elements not found');
  }
}

//! Function 6 update
// update 6 to 6+
function updateRangeSliderDisplay() {
  const rangeSliderDisplay = document.getElementById('variable-rangeslider');
  if (rangeSliderDisplay && rangeSliderDisplay.textContent === '6') {
    rangeSliderDisplay.textContent = '6+';
  }
}

function observeRangeSliderChanges() {
  const rangeSliderDisplay = document.getElementById('variable-rangeslider');

  if (rangeSliderDisplay) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          updateRangeSliderDisplay();
        }
      });
    });

    const config = { childList: true, characterData: true };
    observer.observe(rangeSliderDisplay, config);
  } else {
    console.error('Element not found');
  }
}

//! Change color bg value
function updateBackgroundColor() {
  const rangeSlider = document.getElementById('variable-rangeslider');
  if (!rangeSlider) {
    console.error('Range slider not found');
    return;
  }

  const currentValue = rangeSlider.textContent;
  let inputValue = Number(currentValue);

  // Si la valeur est "6+", on la traite comme 6
  if (currentValue === '6+') {
    inputValue = 6;
  }

  for (let i = 0; i <= 6; i++) {
    const element = document.getElementById(`value-${i}`);
    if (element) {
      element.style.backgroundColor = i <= inputValue ? '#ffffff' : ''; // Réinitialise à la couleur par défaut si nécessaire
    }
  }
}

function observeColorChanges() {
  const rangeSlider = document.getElementById('variable-rangeslider');

  if (rangeSlider) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          updateBackgroundColor();
        }
      });
    });

    const config = { childList: true, characterData: true, subtree: true };
    observer.observe(rangeSlider, config);
  } else {
    console.error('Range slider not found');
  }
}

// Initialiser l'observeur pour détecter les changements
observeColorChanges();

export { observeColorChanges, observeRangeSliderChanges, rangeCalculator };
