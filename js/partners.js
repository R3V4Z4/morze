"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel5", {
    type: "loop",
    perPage: 5,
    direction: "rtl",
    pagination: false,
    arrows: false,
    gap: "20px",

    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      500: {
        perPage: 5,
      },
      415: {
        perPage: 4,
      },
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel6", {
    type: "loop",
    perPage: 5,
    direction: "ltr",
    pagination: false,
    arrows: false,
    gap: "20px",

    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      500: {
        perPage: 5,
      },
      415: {
        perPage: 4,
      },
    },
  }).mount(window.splide.Extensions);
});
