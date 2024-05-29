const container = document.querySelector(".container");

//create the 16 by 16 grid
for(let i=0;i<16;i++){
    //create a lead row div element
    const row = document.createElement("div");

    // Set the text content of the row to "row" followed by the number i
    row.textContent = `row ${i + 1}`;
    row.classList.add("row");

    container.appendChild(row);


    for (let j=0;j<16;j++){
        //stuff the new div element into that row to make 16 columns
        const div = document.createElement("div");

        div.classList.add("column");

        div.textContent ="column";

        div.addEventListener("mouseover",()=>{div.style.backgroundColor="blue"});

        row.appendChild(div);

    }
}

