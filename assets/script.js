// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('mobile-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = !menu.hasAttribute('hidden');
    if (open) {
      menu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      menu.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal on scroll
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}
