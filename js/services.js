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
  const cards = document.querySelectorAll(".container .card");
  const profile = document.querySelector(".profile-card");
  let openCard = null; // Store the currently open card

  function addProfileHover() {
    profile.classList.add("up");
  }

  function removeProfileHover() {
    profile.classList.remove("up");
  }

  function toggleProfileClick() {
    profile.classList.toggle("up");
  }

  function handleInteraction() {
    if (window.innerWidth < 900) {
      profile.removeEventListener("mouseenter", addProfileHover);
      profile.removeEventListener("mouseleave", removeProfileHover);
      profile.addEventListener("click", toggleProfileClick);

      cards.forEach((card) => {
        card.removeEventListener("mouseenter", addHoverClass);
        card.removeEventListener("mouseleave", removeHoverClass);
        card.addEventListener("click", toggleSingleOpenClass);
      });
    } else {
      profile.addEventListener("mouseenter", addProfileHover);
      profile.addEventListener("mouseleave", removeProfileHover);
      profile.removeEventListener("click", toggleProfileClick);

      cards.forEach((card) => {
        card.addEventListener("mouseenter", addHoverClass);
        card.addEventListener("mouseleave", removeHoverClass);
        card.removeEventListener("click", toggleSingleOpenClass);
      });
    }
  }

  function addHoverClass(event) {
    event.currentTarget.classList.add("isopen");
  }

  function removeHoverClass(event) {
    event.currentTarget.classList.remove("isopen");
  }

  function toggleSingleOpenClass(event) {
    const clickedCard = event.currentTarget;

    if (openCard && openCard !== clickedCard) {
      openCard.classList.remove("isopen");
    }

    clickedCard.classList.toggle("isopen");

    openCard = clickedCard.classList.contains("isopen") ? clickedCard : null;
  }

  handleInteraction();
  window.addEventListener("resize", handleInteraction);
});
