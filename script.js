// Contact Form Popup
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});

// Typed effect for Hero
const typedText = ["DevOps Engineer", "Site Reliability Engineer"];
let i = 0, j = 0, currentText = '', isDeleting = false, typedSpeed = 150;

function type() {
  const element = document.getElementById('typed');
  if (!isDeleting && j <= typedText[i].length) {
    currentText = typedText[i].substring(0, j);
    element.textContent = currentText;
    j++;
    setTimeout(type, typedSpeed);
  } else if (isDeleting && j >= 0) {
    currentText = typedText[i].substring(0, j);
    element.textContent = currentText;
    j--;
    setTimeout(type, typedSpeed/2);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % typedText.length;
    setTimeout(type, 1000);
  }
}
type();
