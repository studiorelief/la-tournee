import $ from 'jquery';

function swipeElement() {
  // Replace span-wrapper by span-element
  $('.span-wrapper').each(function (index) {
    const relatedEl = $('.span-element').eq(index);
    relatedEl.appendTo($(this));
  });
}

function cloneCP() {
  // Dupliquer l'élément
  const clonedElement = $('.form-cp_component').clone();

  // Ajouter l'élément cloné à l'élément cible
  clonedElement.appendTo('.form-cp_duplicate');
}

export { cloneCP, swipeElement };
