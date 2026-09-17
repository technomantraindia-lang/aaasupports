/* Carousel + scroll reveal for testimonials.html. */
(() => {
  const section = document.querySelector('.testimonials');
  if (!section) return;

  const track = section.querySelector('.testimonial-track');
  const dotBox = section.querySelector('.testimonial-dots');
  const slides = Array.from(section.querySelectorAll('.testimonial-slide'));
  const cards = Array.from(section.querySelectorAll('.testimonial-card'));
  const mobileQuery = window.matchMedia('(max-width: 640px)');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let timerId;

  const isMobile = () => mobileQuery.matches;
  const totalItems = () => (isMobile() ? cards.length : slides.length);
  const mobileStep = () => {
    const card = cards[0];
    const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const updateDots = () => {
    Array.from(dotBox.children).forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  const move = (instant = false) => {
    track.style.transition = instant || reducedMotionQuery.matches ? 'none' : '';
    track.style.transform = isMobile()
      ? `translateX(-${activeIndex * mobileStep()}px)`
      : `translateX(-${activeIndex * 100}%)`;
    updateDots();
    if (instant) requestAnimationFrame(() => { track.style.transition = ''; });
  };

  const goTo = (index, instant = false) => {
    const total = totalItems();
    activeIndex = (index + total) % total;
    move(instant);
  };

  const renderDots = () => {
    dotBox.replaceChildren();
    for (let index = 0; index < totalItems(); index += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'testimonial-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Show testimonial ${index + 1}`);
      dot.addEventListener('click', () => {
        goTo(index);
        startAutoSlide();
      });
      dotBox.appendChild(dot);
    }
    updateDots();
  };

  const startAutoSlide = () => {
    window.clearInterval(timerId);
    if (reducedMotionQuery.matches) return;
    timerId = window.setInterval(() => goTo(activeIndex + 1), 5000);
  };

  const setup = () => {
    activeIndex = Math.min(activeIndex, totalItems() - 1);
    renderDots();
    move(true);
    startAutoSlide();
  };

  setup();
  mobileQuery.addEventListener?.('change', setup);
  reducedMotionQuery.addEventListener?.('change', setup);
  window.addEventListener('resize', () => move(true));

  const revealItems = section.querySelectorAll('[data-reveal]');
  if (reducedMotionQuery.matches || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: .18 });

  revealItems.forEach((item) => observer.observe(item));
})();
