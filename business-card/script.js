const container = document.querySelector('.card-container');
const card = container.querySelector('.card');

container.addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  card.classList.toggle('flipped');
});

container.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    if (e.target.closest('a')) return;
    e.preventDefault();
    card.classList.toggle('flipped');
  }
});
