const container = document.querySelector(".container");

let isMouseDown = false;
container.addEventListener("mousedown", () => isMouseDown = true);
container.addEventListener("mouseup", () => isMouseDown = false);

const button = document.querySelector(".grid-size");

function createGrid(length){ 
     
        container.innerHTML = '';
         for(i=0; i<length * length; i++){
             const grid = document.createElement("div")
             grid.classList.add("grid")
             grid.style.width = `calc(100% / ${length})`;
             grid.style.length = `calc(100% / ${length})`;
             container.appendChild(grid);
         
             grid.addEventListener("mouseover", () => {
                 if(isMouseDown){
                     grid.style.backgroundColor = 'darkgray';
             }
         
         });
         
             grid.addEventListener("mousedown", () => {
                 grid.style.backgroundColor = 'darkgray'
             })
         }
     
     };

     button.addEventListener("click", () => {
        let length = prompt("What length size grid would you like? (100 Max)")
         if(isNaN(length)){
             alert("Input must be a valid number");
         }else if(length > 100 || length < 1){
             alert("Grid length must be between 0 and 101")
         } else{
            createGrid(length);
         }
        })








