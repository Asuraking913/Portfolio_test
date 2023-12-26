const navUl = document.getElementById("menu-list");
const nav = document.getElementById("nav");
const menuIcon = document.getElementById("menu");
const exitBtn = document.getElementById("close-btn");

menuIcon.addEventListener("click", function () {
  nav.style.display = "block";
  menuIcon.style.display = "none";
});

exitBtn.addEventListener("click", function () {
  nav.style.display = "none";
  menuIcon.style.display = "block";
});
