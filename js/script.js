const myButton = document.getElementById("handburger-menu-btn");
const myDiv = document.getElementById("handBurgerMenu");

myButton.addEventListener("click", function() {
  myDiv.classList.toggle("open-handburger-menu");
});
