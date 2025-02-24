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

const portfolio = document.querySelectorAll(".one-portfolio");

portfolio.forEach(function (element, index) {
  element.addEventListener("click", function () {
    let videoId = `video${index + 1}`;
    let videoContainer = document.getElementById(videoId);
    let video = videoContainer.querySelector(".video");

    // Close all other active videos
    document.querySelectorAll(".video-container").forEach((vid) => {
      if (vid !== videoContainer) {
        vid.classList.remove("isactive");
        let otherVideo = vid.querySelector(".video");
        otherVideo.pause(); // Pause other videos
        otherVideo.currentTime = 0; // Reset their time
      }
    });

    // Toggle active state for the clicked video
    videoContainer.classList.toggle("isactive");

    if (videoContainer.classList.contains("isactive")) {
      video.play(); // Start playing the video
    } else {
      video.pause(); // Pause the video if the modal is closed
      video.currentTime = 0; // Reset video to the beginning
    }
  });
});

// Close video when clicking outside the video area
document.addEventListener("click", function (e) {
  // Check if clicked target is outside the video
  if (e.target.classList.contains("video-container")) {
    e.target.classList.remove("active");
  }
});
