// Select all portfolio items
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
