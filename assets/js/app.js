document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener('load', () => {
    const heroSection = document.getElementById('hero');
    heroSection.classList.add('loaded');
  });