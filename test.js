//variables
const navUl = document.getElementById("menu-list");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu");
const exitBtn = document.getElementById("close-btn");

//event listeners
menuIcon.addEventListener("click", function () {
  nav.style.display = "flex";
  menuIcon.style.display = "none";
  exitBtn.style.display = "block";
});

exitBtn.addEventListener("click", function () {
  nav.style.display = "none";
  menuIcon.style.display = "block";
  exitBtn.style.display = "none";
});
