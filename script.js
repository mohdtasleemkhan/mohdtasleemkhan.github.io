// Welcome Popup
window.onload = function () {
  document.getElementById("welcomeModal").style.display = "flex";
};

document.getElementById("modalOkBtn").onclick = function () {
  document.getElementById("welcomeModal").style.display = "none";
};
