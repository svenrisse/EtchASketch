const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);


function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows",rows);
    container.style.setProperty("--grid-cols",cols);

    for (let i =0; i<rows*cols;i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}
createGrid(16,16);

document.querySelectorAll(".square").forEach(item => {
    item.addEventListener("click", event => {
        item.style.background = "blue";
    })
})


