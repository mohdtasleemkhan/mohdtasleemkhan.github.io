// Welcome popup
const modal = document.getElementById("welcomeModal");
const okBtn = document.getElementById("modalOkBtn");

window.onload = () => {
  modal.style.display = "flex";
};

okBtn.onclick = () => {
  modal.style.display = "none";
};

// Static role switch (NO typing / NO delete)
const roles = ["DevOps Engineer", "Site Reliability Engineer"];
let index = 0;
const typed = document.getElementById("typed");

setInterval(() => {
  typed.textContent = roles[index];
  index = (index + 1) % roles.length;
}, 2500);
