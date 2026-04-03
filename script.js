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
        userPrompt = prompt("Enter the number of cells for the grid(must be less than 100):");
        if(!isNaN(userPrompt) && userPrompt !== null && userPrompt !== "") {
            userPrompt = Number(userPrompt);
            if(userPrompt < 100) {
                break;
            }
        }
        alert("Enter a valid number value!")
    }

    let currentCellsCount = userPrompt * userPrompt;
    let gridContainerWidth = Number(getComputedStyle(gridContainer).width.replace("px", ""));
    let currentCellSize = gridContainerWidth / userPrompt;

    gridContainer.innerHTML = "";

    createGridCells(currentCellsCount, currentCellSize);
})

const resetGridBtn = document.querySelector(".reset-grid-btn");
resetGridBtn.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    createGridCells(numberOfCells, cellSize);
})

let childElements = gridContainer.children;

const blackPenBtn = document.querySelector(".black-pen-btn");
blackPenBtn.addEventListener("click", () => {
    for(const element of childElements) {
        element.style.backgroundColor = "white";
        element.style.opacity = 1;
    }

    for(const element of childElements){
        element.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `black`;
        });
    }
})

const rainbowBtn = document.querySelector(".rainbow-btn");
rainbowBtn.addEventListener("click", () => {
    for(const element of childElements) {
        element.style.backgroundColor = "white";
        element.style.opacity = 1;
    }

    for(const element of childElements){
        let redChannel = Math.floor(Math.random() * 256);
        let greenChannel = Math.floor(Math.random() * 256);
        let blueChannel = Math.floor(Math.random() * 256);
        element.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${redChannel}, ${greenChannel}, ${blueChannel})`;
        });
    }
})

const shadeBtn = document.querySelector(".shade-btn");
shadeBtn.addEventListener("click", () => {
    for(const element of childElements) {
        element.style.backgroundColor = "white";
        element.style.opacity = 0;
    }

    for(const element of childElements){
        let redChannel = Math.floor(Math.random() * 256);
        let greenChannel = Math.floor(Math.random() * 256);
        let blueChannel = Math.floor(Math.random() * 256);
        element.onmouseover = (e) => {
            e.target.style.backgroundColor = `rgb(${redChannel}, ${greenChannel}, ${blueChannel})`;
            let elemetntOpacity = Number(e.target.style.opacity);
            elemetntOpacity += 0.1;
            e.target.style.opacity = elemetntOpacity;
        };
    }
})