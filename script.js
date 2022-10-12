let container = document.createElement('div');
container.classList.add('container');
container.style.display = "flex";
container.style.flexDirection = "column";

let sizeGrid = 16;

for (let i = 1; i <= sizeGrid; i++) {

    let rowContainer = document.createElement('div');
    rowContainer.style.display = "flex";
    rowContainer.style.flexDirection = "row";

    for (let j = 1; j <= sizeGrid; j++) {
        let div = document.createElement('div');
        div.classList.add("box-" + i + "-" + j);
        div.innerText = j;
        div.style.backgroundColor = "violet";
        div.style.border = "2px solid red";
        rowContainer.appendChild(div);
    }
    container.appendChild(rowContainer);
}

console.log(container);
document.body.append(container);


container.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = "grey";
})