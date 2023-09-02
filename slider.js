const gap = 20;
let offset = 0;
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const sliderLine = document.querySelector(".slider__line");
const slide = document.querySelector(".slide");
const slides = document.querySelectorAll(".slide");
const sliderView = document.querySelector(".slider__view");

nextBtn.addEventListener("click", () => {
    if (offset > ((slide.offsetWidth + gap) * (slides.length - 1)) - sliderView.offsetWidth) {
        offset = 0;
    } else {
        offset += slide.offsetWidth + gap;
    }
    sliderLine.style.left = - offset + "px";
});

prevBtn.addEventListener("click", () => {
    if (offset === 0) {
        offset = (slide.offsetWidth + gap) * (slides.length) - sliderView.offsetWidth - gap;
    } else {
        offset -= slide.offsetWidth + gap;
    }
    sliderLine.style.left = - offset + "px";
});

window.addEventListener("resize", () => sliderLine.style.left = 0);