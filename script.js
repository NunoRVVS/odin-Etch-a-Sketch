const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);

const container = document.querySelector(".container");

const btn = document.createElement("button");
btn.classList.add("btn");
div.appendChild(btn);
btn.textContent = "Change Grid Size";

function createGrid(squaresPerSide) { 
    const container = document.querySelector(".container");
    // Clear the existing grid
    const grid = document.querySelector(".grid");
    if (grid) {
        grid.remove();
    }

    // Create a new grid container
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid");
    container.appendChild(gridContainer);

    // Calculate the size of each square based on the total size (X amount of px) and the number of squares
    const squareSize = 800 / squaresPerSide;

    for (i = 0; i < squaresPerSide; i++) { 
        const row = document.createElement("div");
        row.className = "row";
        gridContainer.appendChild(row);

        for (j = 0; j < squaresPerSide; j++) {
            const col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
            col.style.width = `${squareSize}px`;
            col.style.height = `${squareSize}px`;

            // Initialize a hover counter for each square
            let hoverCount = 0;

            // Function to change the color of the square on hover
            col.addEventListener("mouseover", () => {
                if (hoverCount < 10) { // Set a limit for hover count, 10 hovers to go black
                    hoverCount++;
                    const shade = Math.floor(255 - (hoverCount * 25.5)); // Calculate the shade (255 is white, 0 is black)
                    col.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`; // Change the color
                }
            });        
        }
    }
}

btn.addEventListener("click", () => {
    let squaresPerSide = parseInt(prompt("How many squares per side do you want? (max 100)"));

    // condition to limit the number os squares that user can input 
    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Create a new grid with the user-provided size
    createGrid(squaresPerSide);
});

// it restarts to a 16x16 grid
createGrid(16);