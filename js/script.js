"use strict";
const mailLinks = document.querySelectorAll(
  "[data-part1][data-part2][data-part3]"
);
for (const link of mailLinks) {
  let e = link.dataset;
  link.setAttribute(
    "href",
    `mailto:${e.part1}@${e.part2}.${e.part3}?subject=${encodeURIComponent(
      link.textContent
    )}`
  );
}
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const previousSlide = document.querySelector(".btn-prev");
let currentSlide = 0,
  maxSlide = slides.length - 1;
slides.forEach((item, index) => {
  item.style.transform = `translateX(${100 * index}%)`;
}),
  nextSlide.addEventListener("click", function () {
    currentSlide === maxSlide ? (currentSlide = 0) : currentSlide++;

    slides.forEach((item, index) => {
      item.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
  }),
  previousSlide.addEventListener("click", function () {
    0 === currentSlide ? (currentSlide = maxSlide) : currentSlide--;

    slides.forEach((item, index) => {
      item.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
  });
const hamburger = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);
function hamburgerHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamburger.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}
hamburger.addEventListener("click", hamburgerHandler);
const links = Array.from(menu.children);
function closeOnClick() {
  popup.classList.remove("open");
  hamburger.classList.remove("active");
  body.classList.remove("noscroll");
}
links.forEach((e) => {
  e.addEventListener("click", closeOnClick);
});
