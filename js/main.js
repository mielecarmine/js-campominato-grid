const gridElement = document.getElementById("playground");
const buttonElement = document.getElementById("playbutton");
buttonElement.addEventListener("click", function () {
  gridElement.classList.add("bordered");
  generateGrid(gridElement);
});
