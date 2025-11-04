const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showSlide(i) {
  index = i;
  if (index >= slide.length) index = 0;
  if (index < 0) index = slide.length - 1;

  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});
