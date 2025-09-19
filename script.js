document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            // This toggles the 'is-open' class on the navigation menu
            mainNav.classList.toggle('is-open');
        });
    }
});

const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

// Auto-slide (optional)
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 8000);

