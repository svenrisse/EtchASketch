/* create container for divs */
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

/* create button to reset board */
const resetButton = document.createElement("button");
resetButton.classList.add("resetButton");
resetButton.textContent = "Reset";
document.body.appendChild(resetButton);

resetButton.addEventListener("click", event => {
    let number = prompt("Please enter the size of the grid in a singular number below 100");
    if (number <= 100) {
        createGrid(number, number);
        document.querySelectorAll(".square").forEach(item => {
        item.style.background = "antiquewhite";
    })
    } else {
        alert("You entered a number above 100, please reset again");
    }
    
})

/* function to create n amout of divs */
function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows",rows);
    container.style.setProperty("--grid-cols",cols);

    for (let i =0; i<rows*cols;i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }

    document.querySelectorAll(".square").forEach(item => {
        item.addEventListener("mouseover", event => {
            item.style.background = "blue";
        })
    })

}
createGrid(16,16);

/* event on hover */ 



