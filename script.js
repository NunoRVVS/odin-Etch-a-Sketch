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

        for (j = 0; j < 15; j++) {
            const col = document.createElement("div");
            col.className = "col";
            row.appendChild(col);
            col.textContent = "";
        }
    }
}

createGrid();