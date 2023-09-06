async function checkPostalCode() {
  // Obtenir la valeur de l'input
  const inputElement = document.getElementById('input-cp') as HTMLInputElement;
  const postalCode = inputElement.value;

  // Si l'input est vide, ne fait rien
  if (postalCode === '') {
    return;
  }

  try {
    // Récupérer les données de la nouvelle API
    const response = await fetch('https://la-tournee.co/api/1.1/obj/big-zone');
    const data = await response.json();

    // Extraire tous les codes postaux dans un seul tableau
    const allZipCodes: number[] = [];
    for (const result of data.response.results) {
      allZipCodes.push(...result['Zip-codes']);
    }

    // Rechercher le code postal dans les données
    const found = allZipCodes.includes(Number(postalCode));

    // Afficher les messages appropriés
    if (found) {
      (document.querySelector('.home-hero_form-success') as HTMLElement).style.display = 'flex';
      (document.querySelector('.home-hero_form-not-success') as HTMLElement).style.display = 'none';
    } else {
      (document.querySelector('.home-hero_form-not-success') as HTMLElement).style.display = 'flex';
      (document.querySelector('.home-hero_form-success') as HTMLElement).style.display = 'none';
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
}

// Empêcher la soumission du formulaire avec la touche "Entrée"
function preventFormSubmitOnEnter(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
}

// Attacher l'écouteur d'événement à l'input
const inputElement = document.getElementById('input-cp') as HTMLInputElement;
inputElement.addEventListener('keydown', preventFormSubmitOnEnter);

export { checkPostalCode };
