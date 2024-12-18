$(document).ready(function() {

  });

  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter-number");

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = target / 200; // السرعة

      const updateCounter = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  });

  AOS.init({
    duration: 1200, // Animation duration in milliseconds
    easing: 'ease-in-out', // Smooth easing for the animation
    once: true, // Animation only happens once
  });
