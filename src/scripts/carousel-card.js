export function initCarousel() {
  const cards = document.querySelectorAll('.about__carousel .about__card');
  const texts = document.querySelectorAll('.about__carousel-texts .about__card-text');
  let current = 0;
  if (cards.length === 0 || texts.length === 0) return;
  cards[current].classList.add('active');
  texts[current].classList.add('active');

  setInterval(() => {
    cards[current].classList.remove('active');
    texts[current].classList.remove('active');
    current = (current + 1) % cards.length;
    cards[current].classList.add('active');
    texts[current].classList.add('active');
  }, 8000);
}  