// alternate output depending on player
let player = 1;
const altSymbol = (player) => {
    if (player === 1){
        console.log('player 1');
        return 'X';
    } else if (player === 2){
        console.log('player 2');
        return 'O';
    } else {
        console.log("Error with determining player number");
    }
}

// change player function
const changePlayer = (num) => {
    if (num === 1){
        console.log('changing to player 2');
        player++;
    } else if (num === 2){
        console.log('changing to player 3');
        player--;
    }
}

// functions to add X to div box when clicked

    // boxTopLeft addTopLeft
        // locate div section
        const boxTopLeft = document.querySelector("#top-left");
        // create function that adds a 'X' inner text to div
        const addTopLeft = () => {
            boxTopLeft.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxTopLeft.addEventListener('click', addTopLeft);

    // boxTopMid addTopMid
        // locate div section
        const boxTopMid = document.querySelector("#top-mid");
        // create function that adds a 'X' inner text to div
        const addTopMid = () => {
            boxTopMid.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxTopMid.addEventListener('click', addTopMid);

    // boxTopRight addTopRight
        // locate div section
        const boxTopRight = document.querySelector("#top-right");
        // create function that adds a 'X' inner text to div
        const addTopRight = () => {
            boxTopRight.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxTopRight.addEventListener('click', addTopRight);

    // boxMidLeft addMidLeft
        // locate div section
        const boxMidLeft = document.querySelector("#mid-left");
        // create function that adds a 'X' inner text to div
        const addMidLeft = () => {
            boxMidLeft.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxMidLeft.addEventListener('click', addMidLeft);

    // boxMidMid addMidMid
        // locate div section
        const boxMidMid = document.querySelector("#mid-mid");
        // create function that adds a 'X' inner text to div
        const addMidMid = () => {
            boxMidMid.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxMidMid.addEventListener('click', addMidMid);

    // boxMidRight addMidRight
        // locate div section
        const boxMidRight = document.querySelector("#mid-right");
        // create function that adds a 'X' inner text to div
        const addMidRight = () => {
            boxMidRight.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxMidRight.addEventListener('click', addMidRight);

    // boxBottomLeft addBottomLeft
        // locate div section
        const boxBottomLeft = document.querySelector("#bottom-left");
        // create function that adds a 'X' inner text to div
        const addBottomLeft = () => {
            boxBottomLeft.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxBottomLeft.addEventListener('click', addBottomLeft);

    // boxBottomMid addBottomMid
        // locate div section
        const boxBottomMid = document.querySelector("#bottom-mid");
        // create function that adds a 'X' inner text to div
        const addBottomMid = () => {
            boxBottomMid.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxBottomMid.addEventListener('click', addBottomMid);

    // boxBottomRight addBottomRight
        // locate div section
        const boxBottomRight = document.querySelector("#bottom-right");
        // create function that adds a 'X' inner text to div
        const addBottomRight = () => {
            boxBottomRight.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxBottomRight.addEventListener('click', addBottomRight);


// Clear Grid

        // locate reset button section
        const resetButton = document.querySelector("#reset-button");
        // create function that changes all inner text of divs to ' '
        const clearDivs = () => {
            boxTopLeft.innerText = '';
            boxTopMid.innerText = '';
            boxTopRight.innerText = '';
            boxMidLeft.innerText = '';
            boxMidMid.innerText = '';
            boxMidRight.innerText = '';
            boxBottomLeft.innerText = '';
            boxBottomMid.innerText = '';
            boxBottomRight.innerText = '';
        }
        // create event listener for clicking on reset-button -> run clearDivs function
        resetButton.addEventListener('click', clearDivs);