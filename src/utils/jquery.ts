import $ from 'jquery';

function swipeElement() {
  // Replace span-wrapper by span-element
  $('.span-wrapper').each(function (index) {
    const relatedEl = $('.span-element').eq(index);
    relatedEl.appendTo($(this));
  });
}

function closeNav() {
  $('.navbar_menu-bg').on('click', function () {
    $('.navbar_menu').trigger('click');
  });
}
/* 
function cloneCP() {
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

// Input sync for home CP
function inputSync(
  inputDuplicateSelector: string,
  inputSelector: string,
  submitDuplicateSelector: string,
  submitSelector: string
) {
  // Écouter l'événement 'input' sur le champ d'entrée "duplicate"
  $(inputDuplicateSelector).on('input', function () {
    // Récupérer la valeur du champ "duplicate"
    const value = $(this).val();

    // Vérifier si la valeur est définie
    if (value !== undefined) {
      // Mettre à jour la valeur du champ original
      $(inputSelector).val(value);
      // Dupliquer la valeur dans l'input #cp-popup
      $('#cp-popup').val(value);
    }
  });

  // Écouter l'événement 'input' sur le champ d'entrée original pour mettre à jour #cp-popup
  $(inputSelector).on('input', function () {
    const value = $(this).val();
    if (value !== undefined) {
      $('#cp-popup').val(value);
    }
  });

  // Écouter l'événement 'click' sur le bouton "duplicate"
  $(submitDuplicateSelector).on('click', function () {
    // Simuler un clic sur le bouton original
    $(submitSelector).click();
  });
}

function updateNavbarBasedOnScroll() {
  const scroll = $(window).scrollTop() || 0;

  if (scroll < 50) {
    $('.navbar_logo-circle').css('display', 'block');
    $('.navbar_logo-scroll').css('display', 'none');
    $('.navbar_menu-w').css({
      color: '#fef4ec',
      transition: 'color 0.25s',
    });
    $('.navbar_background').css({
      transform: 'translateY(-8rem)',
      transition: 'transform 0.3s',
    });
    $('.navbar_brand-w').css({
      height: '3.25rem',
      transition: 'height 0.5s',
    });
  } else {
    $('.navbar_logo-circle').css('display', 'none');
    $('.navbar_logo-scroll').css('display', 'block');
    $('.navbar_menu-w').css('color', '');
    $('.navbar_background').css('transform', '');
    $('.navbar_brand-w').css('height', '');
  }
}

function scrollNav() {
  $(window).scroll(updateNavbarBasedOnScroll);
}

// Condition pour appliquer les styles initiaux uniquement sur la page d'accueil
if (window.location.pathname === '/') {
  $('.navbar_logo-circle').css('display', 'block');
  $('.navbar_logo-scroll').css('display', 'none');
  $('.navbar_menu-w').css({
    color: '#fef4ec',
    transition: 'color 0.25s',
  });
  $('.navbar_background').css({
    transform: 'translateY(-8rem)',
    transition: 'transform 0.3s',
  });
  $('.navbar_brand-w').css({
    height: '3.25rem',
    transition: 'height 0.5s',
  });
}

// Copy clipboard URL
function copyBlog() {
  // Sélectionnez le bouton avec la classe "social_link-url"
  const button = document.querySelector('.social_link-url');

  // Vérifiez si le bouton existe
  if (button) {
    // Ajoutez un écouteur d'événements pour le clic
    button.addEventListener('click', function () {
      // Créez un élément textarea temporaire
      const textarea = document.createElement('textarea');
      // Définissez le contenu de l'élément textarea sur l'URL courante
      textarea.value = window.location.href;
      // Ajoutez l'élément textarea au document
      document.body.appendChild(textarea);
      // Sélectionnez le contenu de l'élément textarea
      textarea.select();
      // Copiez le contenu sélectionné dans le presse-papiers
      document.execCommand('copy');
      // Supprimez l'élément textarea du document
      document.body.removeChild(textarea);

      // Optionnel : affichez un message indiquant que l'URL a été copiée
      alert('URL copiée dans le presse-papiers !');
    });
  } else {
  }
}

export { closeNav, copyBlog, inputSync, scrollNav, swipeElement, tradDate };
