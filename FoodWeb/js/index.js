const slideContainer = document.querySelector('.rmd-ul'); // 外層滑動區域
const slides = document.querySelectorAll('.rmd'); // 每一張卡片
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 2;

function showSlide(i) {
  index = i;
  if (index > 3) index = 0;
  if (index < 0) index = 3;

  slideContainer.style.transform = `translateX(-${index * 390}px)`; // 350px卡片寬 + 40px間距
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));
