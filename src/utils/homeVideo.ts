/* export function lazyVideo(videoId: string, videoSrc: string): void {
  document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById(videoId) as HTMLVideoElement;

    // Fonction pour vérifier si l'élément est dans le viewport
    const isInViewport = (element: Element): boolean => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Écouteur d'événement pour le scroll
    const scrollHandler = (): void => {
      if (isInViewport(video)) {
        video.setAttribute('src', videoSrc);
        video.load(); // Recharge la vidéo après avoir modifié la source
        window.removeEventListener('scroll', scrollHandler); // Retire l'écouteur d'événement une fois la vidéo chargée
      }
    };

    window.addEventListener('scroll', scrollHandler);
    if (isInViewport(video)) {
      video.setAttribute('src', videoSrc);
      video.load(); // Recharge la vidéo après avoir modifié la source
      video.play(); // <--- Ajoutez cette ligne pour mettre la vidéo en lecture
      window.removeEventListener('scroll', scrollHandler); // Retire l'écouteur d'événement une fois la vidéo chargée
    }
  });
} */

// Fonction pour vérifier si l'élément est dans le viewport
const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export function pauseVideo(): void {
  // Trouver les éléments dans le DOM
  const videoWrapper = document.querySelector('.comment_video-wrapper');
  const videoButton = document.querySelector('.comment_button-video');
  const video = document.getElementById('myVideo') as HTMLVideoElement;

  if (!videoWrapper || !videoButton || !video) {
    console.error('Elements not found');
    return;
  }

  // Ajouter un écouteur d'événement au bouton
  videoButton.addEventListener('click', () => {
    // Vérifier si le conteneur vidéo est dans le viewport
    if (isInViewport(videoWrapper)) {
      // Mettre la vidéo en pause si elle est en cours de lecture
      if (!video.paused) {
        video.pause();
      }
    }
  });
}
