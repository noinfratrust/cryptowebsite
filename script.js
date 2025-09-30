// Navigation menu toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Smooth scroll function
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.focus({preventScroll: true});
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  }
}

// Attach smooth scroll to nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const href = anchor.getAttribute('href').substring(1);
    scrollToSection(href);
  });
});

// Feature card click to toggle hover effect on phone
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('hovered');
  });
});