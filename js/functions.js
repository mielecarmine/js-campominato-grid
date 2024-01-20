function generateGrid(container) {
  container.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const cellElement = generateCell(i);
    container.append(cellElement);
  }
}

function generateCell(number) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.append(number + 1);
  clickCell(cell, number);
  return cell;
}

function clickCell(element, number) {
  element.addEventListener("click", function () {
    this.classList.toggle("active");
    console.log(number);
  });
}
