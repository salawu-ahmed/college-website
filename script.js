const showMenuBtn = document.getElementById("showMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const navLinks = document.getElementById("navLinks");

showMenuBtn.addEventListener("click", () => {
  navLinks.style.right = 300;
});

closeMenuBtn.addEventListener("click", () => {
  navLinks.style.right = -200;
});
