"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel1", {
    type: "fade",
    rewind: true,
    pauseOnHover: false,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    speed: 1000,
    pagination: false,
    arrows: false,
  }).mount();

  new Splide("#carousel2", {
    type: "loop",
    direction: "ttb",
    height: "400px",
    perPage: 3,
    pagination: false,
    arrows: false,
    gap: "20px",
    autoScroll: {
      speed: -1,
    },
    breakpoints: {
      915: {
        direction: "rtl",
        perPage: 4,
        height: "100px",
        width: "100%",
        speed: 500,
      },
      580: {
        perPage: 3,
      },
      500: {
        height: "70px",
      },
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel3", {
    type: "loop",
    direction: "ttb",
    height: "400px",
    perPage: 3,
    pagination: false,
    arrows: false,
    gap: "20px",
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      915: {
        direction: "rtl",
        perPage: 4,
        height: "100px",
        width: "100%",
        speed: 500,
      },
      580: {
        perPage: 3,
      },
      500: {
        height: "70px",
      },
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel6", {
    type: "loop",
    perPage: 3,
    pagination: false,
    focus: 0,
    omitEnd: true,
    arrows: false,
    breakpoints: {
      930: {
        perPage: 2,
        pagination: true,
      },
      500: {
        perPage: 1,
      },
    },
  }).mount();

  new Splide("#carousel7", {
    type: "loop",
    perPage: 5,
    pagination: false,
    focus: 0,
    omitEnd: true,
    arrows: false,
    breakpoints: {
      1235: {
        perPage: 4,
        perMove: 1,
        autoplay: true,
        interval: 3000,
        speed: 1000,
        pagination: true,
      },

      930: {
        perPage: 2,
      },
      500: {
        perPage: 1,
      },
    },
  }).mount();
});

const button = document.getElementById("butt");
button.addEventListener("click", () => {
  document
    .querySelectorAll(".para")
    .forEach((one) => one.classList.toggle("app"));
  button.classList.toggle("rotate");
  document.querySelector(".fade-para").classList.toggle("unfade");
});

const allItems = document.querySelectorAll(".why-morse");
allItems.forEach(function (element) {
  element.addEventListener("click", function () {
    allItems.forEach((item) => {
      const content = item.querySelector("p");

      if (content && item !== element) {
        content.classList.remove("show");
        const arrow = item.querySelector("h5 i");
        if (arrow) {
          arrow.classList.remove("rotated");
        }
      }
    });

    const arrow = element.querySelector("h5 i"); // Target the clicked item's arrow
    const content = element.querySelector("p");

    if (content) {
      content.classList.toggle("show");
      arrow.classList.toggle("rotated");
    }
  });
});

const textElement = document.getElementById("typing-text");
const text = textElement.textContent;
textElement.textContent = "";
let index = 0;
let typingSpeed = 100;

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  }
}

window.addEventListener("scroll", function () {
  if (isInViewport(textElement) && index === 0) {
    typeText();
  }
});
