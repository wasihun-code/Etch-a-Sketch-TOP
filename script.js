var sizeGrid = 16;

function createGrid() {
    for (let i = 1; i <= sizeGrid; i++) {

        // Create row container for flex row style
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('rowContainer');

        for (let j = 1; j <= sizeGrid; j++) {
            // Create each box and append it to the rowcontainer
            let div = document.createElement('div');
            div.classList.add("box");
            rowContainer.appendChild(div);
        }

        // Append each row to the container to creat matrix
        container.appendChild(rowContainer);
    }
}

// Creat container for the grids and make it visible
let container = document.createElement('div');
document.body.append(container);

var gridWidth = 20;
var containerWidth = (sizeGrid * gridWidth) + "px";

// Call to the createGrid function
createGrid();

// Select all boxes in the grid
let divList = document.querySelectorAll('.box');

// Style Each box in the grid
divList.forEach(styleDivs);
function styleDivs(item) {
    item.style.backgroundColor = "#DCDCDC";
    // item.style.border = "2px solid blue";
    item.style.width = gridWidth + "px";
    item.style.height = gridWidth + "px";
}

// Select Every row of the grid
let rowContainer = document.querySelectorAll('.rowContainer');

// Style Container for each row
rowContainer.forEach(stylerowContainer);
function stylerowContainer(item) {
    item.style.width = containerWidth;
    item.style.cssText = `
        display: flex;
        flex-direction: row;
        background-color: black;
    `
}

// Style Continaer for matrix of girds
container.classList.add('container');
container.style.cssText = `
    display: flex;
    flex-direction: column;
    background-color: red;
    border: 1px solid black;
    float: right;
`
container.style.width = containerWidth;
container.style.height = window.innerHeight;

// Change background of grid when mouse is hovered on it
container.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "grey";
})


// Creat button for changing the grid
let buttonClear = document.createElement('button');
buttonClear.innerText = "Clear";
document.body.append(buttonClear);

// Style Button
buttonClear.style.cssText = `
    width: 60px;
    height: 30px;
    border-radius: 5px;
    color: white;
    background-color: #52b2bf;
`;

// Revert background to white when clear button is pressed
buttonClear.addEventListener('click', function (e) {
    divList.forEach(styleDivs);
})

// Create button to change the grid size
let buttonChangeGrid = document.createElement('button');
buttonChangeGrid.innerText = "Change Grid";
document.body.append(buttonChangeGrid);
buttonChangeGrid.style.cssText = `
    width: 120px;
    height: 30px;
    border-radius: 5px;
    color: white;
    background-color: #52b2bf;
`;

buttonChangeGrid.addEventListener('click', function () {
    sizeGrid = parseInt(prompt("Enter the number of grid desired: ", 16));
});



