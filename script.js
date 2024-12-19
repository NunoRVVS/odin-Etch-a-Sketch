const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);

const container = document.querySelector(".container");

const newDiv = document.createElement("div");
container.appendChild(newDiv);
const anotherDiv = document.querySelector("div");
const btn = document.createElement("button");
btn.classList.add("btn");
newDiv.appendChild(btn);
btn.textContent = "Insert the number of squares?"

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

const btnAdd = document.querySelector(".btn");

btn.addEventListener("click", addNewGrid);

function addNewGrid() {
    const container = document.querySelector(".container");
    for (i = 0; i < 1; i++) { 
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
