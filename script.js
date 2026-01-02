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

    // Adjust skill box widths based on data-level
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach(box => {
        const level = box.getAttribute('data-level'); // 0-100
        const width = 80 + (level / 100) * 120; // min 80px, max 200px
        box.style.width = width + 'px';
    });
};

// Contact Form Popup
const form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
});
