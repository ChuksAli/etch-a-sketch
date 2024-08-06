const container = document.querySelector(".container");
for(i=0; i<16 * 16; i++){
    const grid = document.createElement("div")
    grid.classList.add("grid")
    container.appendChild(grid);
    grid.addEventListener("mouseover", () => {
        grid.style.backgroundColor = 'darkgray';
    });
}

