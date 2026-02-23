// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Stagger sibling reveals inside grids
document.querySelectorAll('.services-grid, .testimonials-grid, .process-steps').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });
});


// NAV SCROLL EFFECT
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 60
    ? 'rgba(13,13,13,0.97)'
    : 'rgba(13,13,13,0.85)';
});


// FORM SUBMIT
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✓ Demande envoyée !';
  btn.style.background = '#1a8f3f';
  btn.style.transform = 'none';
  setTimeout(() => {
    btn.textContent = 'Envoyer ma demande →';
    btn.style.background = '';
    e.target.reset();
  }, 3500);
}
