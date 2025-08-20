document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});
