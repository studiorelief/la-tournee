import $ from 'jquery';

function swipeElement() {
  // Replace span-wrapper by span-element
  $('.span-wrapper').each(function (index) {
    const relatedEl = $('.span-element').eq(index);
    relatedEl.appendTo($(this));
  });
}

/* function cloneCP() {
  // Dupliquer l'élément
  const clonedElement = $('.form-cp_component.is-hero').clone();

  // Ajouter l'élément cloné à l'élément cible
  clonedElement.appendTo('.form-cp_duplicate');
} */

// Function to translate month numbers to French month names
function tradDate() {
  // Array containing French month names
  const frenchMonths = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  // Find all elements with the class 'is-month'
  $('.is-month').each(function () {
    // Get the month number (subtract 1 for zero-based index)
    const monthNum = parseInt($(this).text(), 10) - 1;

    // Replace the text with the corresponding French month name
    if (monthNum >= 0 && monthNum <= 11) {
      $(this).text(frenchMonths[monthNum]);
    }
  });
}

export { swipeElement, tradDate };
