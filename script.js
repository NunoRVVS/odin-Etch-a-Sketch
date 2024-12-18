const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);

const container = document.querySelector(".container");

function createGrid() { 
    for (i = 0; i < 16; i++) { 
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        row.textContent = "";

        for (j = 0; j < 16; j++) {
            const col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
            col.textContent = "";
        }
    }
}

createGrid();


// Get the button element
const button = document.querySelector('button');

// Add a mouseover event listener
button.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.backgroundColor = 'blue';
});

// Add a mouseout event listener
button.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.backgroundColor = '';
});