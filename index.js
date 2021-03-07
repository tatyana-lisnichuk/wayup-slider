"use strict";
const prev = document.getElementById('btn-prev'),
  next = document.getElementById('btn-next'),
  slides = document.querySelectorAll('.slide'),
  dots = document.querySelectorAll('.dot');


let index = 0;
// console.log(slides);

const activeSlide = (n) => {
  console.log(n);
  for (let slide of slides) {
    // console.log(slide);
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
};

const activeDot = (n) => {
  console.log(n);
  for (let dot of dots) {
    // console.log(slide);
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
};

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  activeDot(ind);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    // activeSlide(index);
    prepareCurrentSlide(index);
  }
  else {
    index++;
    // activeSlide(index);
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  }
  else {
    index--;
   activeSlide(index);
  }
};

dots.forEach((item, indexDot) => { 
  // console.log(item);
  // console.log(indexDot);
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  });
});

// Автозамена слайдов
//setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени.
  
let autoplay = setInterval(() => nextSlide(), 5000);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

