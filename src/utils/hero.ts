async function checkPostalCode() {
  // Obtenir la valeur de l'input
  const inputElement = document.getElementById('input-cp') as HTMLInputElement;
  const postalCode = inputElement.value;

  // Si l'input est vide, ne fait rien
  if (postalCode === '') {
    return;
  }

  try {
    // Préparer l'URL avec le code postal
    const url = `https://apis.la-tournee.co/v1_0/shop/my_warehouse?postal_code=${postalCode}`;

    // Préparer l'en-tête avec le token d'accès
    const headers = {
      Authorization: 'Bearer 8c06164fb6b7426190645b28a4e73be1',
    };

    // Faire la requête à l'API
    const response = await fetch(url, { headers });

    // Vérifier le statut de la réponse
    let found = false;
    if (response.status === 200) {
      found = true;
    } else if (response.status === 404) {
      found = false;
    }

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

export { checkPostalCode };
