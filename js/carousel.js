document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector("#image-carousel .carousel-slides");
  const slides = document.querySelectorAll("#image-carousel .slide");
  const prev = document.querySelector("#image-carousel .carousel-btn.left");
  const next = document.querySelector("#image-carousel .carousel-btn.right");
  let index = 0;

  function showSlide(i) {
    slidesContainer.style.transform = `translateX(-${i * 100}%)`;
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  // Afficher la première image au chargement
  showSlide(index);
});
