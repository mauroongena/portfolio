export function initCarousel() {
  const cards = document.querySelectorAll('.about__carousel .about__card');
  const texts = document.querySelectorAll('.about__carousel-texts .about__card-text');
  const btnPrev = document.querySelector('.btn__prev');
  const btnNext = document.querySelector('.btn__next');
  const btnPause = document.querySelector('.btn__pause');
  const btnPlay = document.querySelector('.btn__play');
  let current = 0;
  const total = cards.length;
  let intervalId = null;
  let paused = false;

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

  function nextCard() {
    current = (current + 1) % total;
    updateCarousel();
  }

  function prevCard() {
    current = (current + total - 1) % total;
    updateCarousel();
  }

  function startAuto() {
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(nextCard, 8000);
    paused = false;
  }

  function pauseAuto() {
    if (intervalId) clearInterval(intervalId);
    paused = true;
  }

  const actionButtons = document.querySelector('.action-buttons-container');
  if (btnPause) btnPause.addEventListener('click', () => {
    pauseAuto();
    actionButtons.classList.add('paused');
  });
  if (btnPlay) btnPlay.addEventListener('click', () => {
    startAuto();
    actionButtons.classList.remove('paused');
  });

  if (btnNext) btnNext.addEventListener('click', () => {
    nextCard();
    if (!paused) startAuto();
  });
  if (btnPrev) btnPrev.addEventListener('click', () => {
    prevCard();
    if (!paused) startAuto();
  });

  updateCarousel();
  startAuto();
}