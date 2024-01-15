// Fonction pour vérifier la visibilité et ajuster les styles en conséquence
export function adjustVisibility(): void {
  const formSuccess: HTMLElement | null = document.querySelector('.home-hero_form-success');
  const formNotSuccess: HTMLElement | null = document.querySelector('.home-hero_form-not-success');
  const intercomApp: HTMLElement | null = document.querySelector('.intercom-lightweight-app');
  const vendeoApp: HTMLElement | null = document.getElementById('vendeo-app');

  if (formSuccess && formNotSuccess && intercomApp && vendeoApp) {
    if (formSuccess.style.display !== 'none' || formNotSuccess.style.display !== 'none') {
      intercomApp.style.display = 'none';
      vendeoApp.style.display = 'none';
    } else {
      intercomApp.style.display = 'block';
      vendeoApp.style.display = 'block';
    }
  }
}
