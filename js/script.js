$(document).ready(function() {
  function updateProgressCircle(selector, percentage) {
    const angle = (percentage / 100) * 360;
    $(selector).css(
      "background",
      `conic-gradient(
        var(--primary-color) 0deg, 
        var(--primary-color) ${angle}deg, 
        var(--background-gray) ${angle}deg, 
        var(--background-gray) 360deg
      )`
    );
    $(selector)
      .find(".progress-text")
      .text(`${percentage}%`);
  }

  // Example: Set progress to 90%
  updateProgressCircle("#progressBarCircle", 90);
  });