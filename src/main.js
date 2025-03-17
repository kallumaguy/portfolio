document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 25, // Offset (in px) from the original trigger point
    delay: 0, // Delay time (in ms) before the animation starts
    duration: 500, // Duration of the animation (in ms)
    easing: "ease", // Easing function for the animation
    once: true, // Run animation once (true) or every time (false)
  });
});

