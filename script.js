const container = document.querySelector(".container");

let isMouseDown = false;
container.addEventListener("mousedown", () => isMouseDown = true);
container.addEventListener("mouseup", () => isMouseDown = false);
for(i=0; i<16 * 16; i++){
    const grid = document.createElement("div")
    grid.classList.add("grid")
    container.appendChild(grid);
    grid.addEventListener("mouseover", () => {
        if(isMouseDown){
            grid.style.backgroundColor = 'darkgray';
    }});
}

