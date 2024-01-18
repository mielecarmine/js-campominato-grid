function generateGrid(container) {
  for (let i = 0; i < 100; i++) {
    const cellElement = generateCell();
    container.append(cellElement);
  }
}

function generateCell() {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  return cell;
}
