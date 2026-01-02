// Contact Form Popup
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission
  alert("Thank you! Your message has been sent."); // Popup
  form.reset(); // Reset the form
});
