export function initCarousel() {
  const cards = document.querySelectorAll('.about__carousel .about__card');
  const texts = document.querySelectorAll('.about__carousel-texts .about__card-text');
  let current = 0;
  const total = cards.length;

  function updateCarousel() {
    cards.forEach((card, i) => {
      card.classList.remove('active', 'prev', 'next');
      if (i === current) {
        card.classList.add('active');
      } else if (i === (current + 1) % total) {
        card.classList.add('next');
      } else if (i === (current + total - 1) % total) {
        card.classList.add('prev');
      }
    });
    texts.forEach((text, i) => {
      text.classList.toggle('active', i === current);
    });
  }

  updateCarousel();

  setInterval(() => {
    current = (current + 1) % total;
    updateCarousel();
  }, 8000);
}  