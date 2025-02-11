"use strict";

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (!header.classList.contains("expand")) {
    if (scrollTop > lastScrollTop) {
      header.classList.add("hidden");
    } else {
      header.classList.remove("hidden");
    }
  }

  lastScrollTop = scrollTop;
});

const buttons = document.querySelectorAll(".data");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const link = this.dataset.link;
    window.location.href = link;
  });
});

let divAccArray = document.querySelectorAll(".one-accordion");

divAccArray.forEach(function (item) {
  item.addEventListener("click", function () {
    divAccArray.forEach((accordion) => {
      if (accordion !== this) {
        accordion.classList.remove("active");
      }
    });

    // Toggle the clicked accordion
    this.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerBar");
  const menu = document.querySelector(".header");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  function toggleMenu() {
    const isExpanded = menu.classList.toggle("expand");
    burger.classList.toggle("isactive", isExpanded);
    overlay.style.display = isExpanded ? "block" : "none";
    document.body.classList.toggle("no-scroll", isExpanded);
  }

  burger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu); // Close menu when clicking outside
});

document.addEventListener("DOMContentLoaded", () => {
  const subMenus = document.querySelectorAll(".sub-menu");
  const buttons = document.querySelectorAll(".sidebar ul a");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      subMenus.forEach((menu) => (menu.style.height = "0px"));
      buttons.forEach((btn) => btn.classList.remove("active"));

      const subMenu = button.nextElementSibling;

      if (subMenu && subMenu.classList.contains("sub-menu")) {
        const ul = subMenu.querySelector("ul");
        subMenu.style.height = subMenu.clientHeight
          ? "0px"
          : `${ul.clientHeight}px`;
        button.classList.toggle("active");
      } else {
        button.classList.add("active");
      }

      // Rotate the arrow icon
      const arrowIcon = button.querySelector(".arrow-icon");
      if (arrowIcon) {
        arrowIcon.classList.toggle("rotated");
      }
    });
  });
});
