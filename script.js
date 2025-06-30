// Wait for the DOM to load before running script
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the button and message paragraph
  const button = document.getElementById("actionButton");
  const message = document.getElementById("message");

  // Set up a click event listener on the button
  button.addEventListener("click", function () {
    // Change the content of the message paragraph
    message.textContent = "You clicked the button!";
  });
});
