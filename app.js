const grid = document.querySelector(".grid");

function createGrid(e) {
  e.preventDefault();
  let num = document.querySelector(".input").value;
  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.style.width = `${700 / num}px`;
    grid.appendChild(row);
    for (let i = 0; i < num; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.style.width = `${700 / num}px`;
      square.style.height = `${700 / num}px`;
      row.appendChild(square);
      square.addEventListener("mousemove", () => square.classList.add("color"));
    }
  }
}

// let num = 16;
const btn = document.querySelector(".create-btn");
btn.addEventListener("click", createGrid);
