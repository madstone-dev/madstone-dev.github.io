const dialog = document.querySelector('dialog');
const preview = document.querySelector('#preview-image');
const title = document.querySelector('#preview-title');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    preview.src = button.dataset.image;
    preview.alt = button.querySelector('img').alt;
    title.textContent = button.dataset.title;
    dialog.showModal();
  });
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
