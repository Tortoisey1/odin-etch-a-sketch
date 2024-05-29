const container = document.querySelector(".container");


function generateGrid(size){
 // Clear existing grid, if any
 container.innerHTML = "";

//ensure constant size
const cellSize = 1000/size;


//create the square grid
for(let i=0;i<size;i++){
    //create a lead row div element
    const row = document.createElement("div");
    

    // Set the text content of the row to "row" followed by the number i
    row.textContent = `row ${i + 1}`;
    row.classList.add("row");

      // Set the height of the row
      row.style.height = `${cellSize}px`;

    container.appendChild(row);


    for (let j=0;j<size;j++){
        //stuff the new div element into that row to make size columns
        const div = document.createElement("div");

        div.classList.add("column");

           // Set the width and height of the grid cell
           div.style.width = `${cellSize}px`;
           div.style.height = `${cellSize}px`;

        div.textContent ="column";

        div.addEventListener("mouseover",()=>{div.style.backgroundColor="blue"});

        row.appendChild(div);

    }
}
}

generateGrid(16);

const button = document.querySelector("button");

button.addEventListener("click",function(){
    const userInput = prompt("How many squares per side?");
    if(userInput != null){
        const squaresPerSide = parseInt(userInput); // Parse the user input as an integer
    if (!isNaN(squaresPerSide) && squaresPerSide > 0) {
        generateGrid(squaresPerSide);
    } else {
        alert("Please enter a valid number greater than 0.");
    }}

});