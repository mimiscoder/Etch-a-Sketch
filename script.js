let gridContainer = document.querySelector(".container");
gridContainer.classList.add("container")

function createGridCells(cellCount, cellSize){
    for(let i = 0; i < cellCount; i++){ 
        let gridCell = document.createElement("div");
        gridCell.style.width = `${cellSize}px`;
        gridCell.style.height = `${cellSize}px`;
        gridContainer.appendChild(gridCell);
    }
}

let numberOfCells, cellSize, userPrompt;
cellSize = 31.25;
numberOfCells = 256;

createGridCells(numberOfCells, cellSize);

const resizeGridBtn = document.querySelector(".resize-grid-btn");

resizeGridBtn.addEventListener("click", () => {

})