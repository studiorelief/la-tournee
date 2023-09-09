function manageInputZoom(): void {
  const viewport = document.querySelector('meta[name=viewport]');
  if (!viewport) return;

  const originalContent = viewport.getAttribute('content');
  if (!originalContent) return;

  const disableZoom = (): void => {
    viewport.setAttribute('content', `${originalContent}, user-scalable=no, maximum-scale=1.0`);
  };

  const enableZoom = (): void => {
    viewport.setAttribute('content', originalContent);
  };

  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach((input: Element) => {
    input.addEventListener('focus', disableZoom);
    input.addEventListener('blur', enableZoom);
  });
}

export { manageInputZoom };
