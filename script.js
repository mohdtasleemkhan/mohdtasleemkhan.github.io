// AUTO WELCOME MODAL
window.onload = function() {
    const modal = document.getElementById('welcomeModal');
    const okBtn = document.getElementById('modalOkBtn');

    modal.style.display = 'block';

    okBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
};

// Contact Form Popup
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
});
