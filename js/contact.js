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

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".one-accordion");
  let openAccordion = null; // Store the currently open accordion

  function handleInteraction() {
    if (window.innerWidth < 900) {
      accordions.forEach((accordion) => {
        accordion.removeEventListener("mouseenter", openOnHover);
        accordion.removeEventListener("mouseleave", closeOnHover);
        accordion.addEventListener("click", toggleSingleAccordion);
      });
    } else {
      accordions.forEach((accordion) => {
        accordion.addEventListener("mouseenter", openOnHover);
        accordion.addEventListener("mouseleave", closeOnHover);
        accordion.removeEventListener("click", toggleSingleAccordion);
      });
    }
  }

  function openOnHover(event) {
    event.currentTarget.classList.add("open");
  }

  function closeOnHover(event) {
    event.currentTarget.classList.remove("open");
  }

  function toggleSingleAccordion(event) {
    const clickedAccordion = event.currentTarget;

    // Close the previous accordion if another one is clicked
    if (openAccordion && openAccordion !== clickedAccordion) {
      openAccordion.classList.remove("open");
    }

    // Toggle the clicked accordion
    clickedAccordion.classList.toggle("open");

    // Update the open accordion reference
    openAccordion = clickedAccordion.classList.contains("open")
      ? clickedAccordion
      : null;
  }

  handleInteraction();
  window.addEventListener("resize", handleInteraction);
});
