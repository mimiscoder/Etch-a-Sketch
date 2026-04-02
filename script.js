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
    while(true){
        userPrompt = prompt("Enter the grid:");
        if(!isNaN(userPrompt) && userPrompt !== null && userPrompt !== "") {
            userPrompt = Number(userPrompt);
            if(userPrompt < 100) {
                break;
            }
        }
        alert("Enter a valid number value!")
    }

    numberOfCells = userPrompt * userPrompt;
    let gridContainerWidth = Number(gridContainer.style.width.replace("px", ""));
    cellSize = gridContainerWidth / userPrompt;

    gridContainer.innerHTML = "";

    createGridCells(numberOfCells, cellSize);
})

const resetGridBtn = document.querySelector(".reset-grid-btn");
resizeGridBtn.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    createGridCells(numberOfCells, cellSize);
})

const blackPenBtn = document.querySelector(".black-pen-btn");
