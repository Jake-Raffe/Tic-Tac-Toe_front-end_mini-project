// import classes 
// const { Player } = require("./player");

// Player constructor
const Player = function(name, icon){
    this.name = name,
    this.icon = icon
}

// const playerIcon = document.createElement("i");
// playerIcon.classList.add("fa-thin");
// playerIcon.classList.add("fa-dolphin");
// // playerIcon.classList.add("fa-elephant");
// boxTopLeft.appendChild(playerIcon)

// turn counter
let turnCounter = 0;

// has game ended?
let gameOver = false;

// create new player object
const player1 = new Player('Player 1', "X");
const player2 = new Player('Player 2', "O");


// document.getElementsByClassName('icon-display').onclick = changeColor;
// function changeColor() {
//     document.getElementsByClassName('icon-display').style.color = 'rgb(161, 131, 235)';
//     return false;
// }


// current player
let currentPlayer = player1

// alternate output depending on player
const altSymbol = (player) => {
    if (player.name === 'Player 1'){
        return 'X';
    } else if (player.name === 'Player 2'){
        return 'O';
    } else {
        console.log("Error with determining player number");
    }
}

// change player function
const changePlayer = (player) => {
    console.log(turnCounter);
    if (player === player1){
        currentPlayer = player2;
        // changeColor()
    } else if (player === player2){
        currentPlayer = player1;
    }
}

// check if game won
const checkGameWon = () => {
    if (gameWon(currentPlayer)){
        // wait for icon to be added to grid before alert message
        changePlayer(currentPlayer);
        setTimeout(function(){ alert (currentPlayer.name + ' has won!') }, 50);
        gameOver = true;
    } else if (gameDraw()) {
        // if all tiles filled and no winner, say it's a draw
        setTimeout(function(){ alert ("It's a draw!")}, 50);
    }
    
}

// functions to add X to div box when clicked

    // boxTopLeft addTopLeft
        // locate div section
        const boxTopLeft = document.querySelector("#top-left");
        // create function that adds a 'X' inner text to div
        function addTopLeft() {
            if (gameOver === false){
            if (checkBoxEmpty(boxTopLeft)){
            ++turnCounter;
            boxTopLeft.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
            }
        }
    }
        // create event listener for clicking on div -> run add x function
        boxTopLeft.addEventListener('click', addTopLeft);

    // boxTopMid addTopMid
        // locate div section
        const boxTopMid = document.querySelector("#top-mid");
        // create function that adds a 'X' inner text to div
        const addTopMid = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxTopMid)){
                turnCounter++;
            boxTopMid.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);

            }}
        }
        // create event listener for clicking on div -> run add x function
        boxTopMid.addEventListener('click', addTopMid);

    // boxTopRight addTopRight
        // locate div section
        const boxTopRight = document.querySelector("#top-right");
        // create function that adds a 'X' inner text to div
        const addTopRight = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxTopRight)){
                turnCounter++;
            boxTopRight.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
            }}
        }
        // create event listener for clicking on div -> run add x function
        boxTopRight.addEventListener('click', addTopRight);

    // boxMidLeft addMidLeft
        // locate div section
        const boxMidLeft = document.querySelector("#mid-left");
        // create function that adds a 'X' inner text to div
        const addMidLeft = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxMidLeft)){
                turnCounter++;
            boxMidLeft.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
            }}
        }
        // create event listener for clicking on div -> run add x function
        boxMidLeft.addEventListener('click', addMidLeft);

    // boxMidMid addMidMid
        // locate div section
        const boxMidMid = document.querySelector("#mid-mid");
        // create function that adds a 'X' inner text to div
        const addMidMid = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxMidMid)){
                turnCounter++;
            boxMidMid.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
        }}}
        // create event listener for clicking on div -> run add x function
        boxMidMid.addEventListener('click', addMidMid);

    // boxMidRight addMidRight
        // locate div section
        const boxMidRight = document.querySelector("#mid-right");
        // create function that adds a 'X' inner text to div
        const addMidRight = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxMidRight)){
                turnCounter++;
            boxMidRight.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
            }}
        }
        // create event listener for clicking on div -> run add x function
        boxMidRight.addEventListener('click', addMidRight);

    // boxBottomLeft addBottomLeft
        // locate div section
        const boxBottomLeft = document.querySelector("#bottom-left");
        // create function that adds a 'X' inner text to div
        const addBottomLeft = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxBottomLeft)){
                turnCounter++;
            boxBottomLeft.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
            }}
        }
        // create event listener for clicking on div -> run add x function
        boxBottomLeft.addEventListener('click', addBottomLeft);

    // boxBottomMid addBottomMid
        // locate div section
        const boxBottomMid = document.querySelector("#bottom-mid");
        // create function that adds a 'X' inner text to div
        const addBottomMid = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxBottomMid)){
                turnCounter++;
            boxBottomMid.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
            }}
        }
        // create event listener for clicking on div -> run add x function
        boxBottomMid.addEventListener('click', addBottomMid);

    // boxBottomRight addBottomRight
        // locate div section
        const boxBottomRight = document.querySelector("#bottom-right");
        // create function that adds a 'X' inner text to div
        const addBottomRight = () => {
            if (gameOver === false){
            if (checkBoxEmpty(boxBottomRight)){
                turnCounter++;
            boxBottomRight.innerText = altSymbol(currentPlayer);
            checkGameWon();
            changePlayer(currentPlayer);
            }}
        }
        // create event listener for clicking on div -> run add x function
        boxBottomRight.addEventListener('click', addBottomRight);

// check if box is empty before adding icon
    const checkBoxEmpty = (box) => {
        if (box.innerText === ''){
            return true;
        } else {
            return false;
        }
    }

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
            gameOver = false;
            turnCounter = 0;
        }
        // create event listener for clicking on reset-button -> run clearDivs function
        resetButton.addEventListener('click', clearDivs);

// Check if game won
        // will take player number as argument
        function gameWon (player) {
            // top row
            if (boxTopLeft.innerText === player.icon && boxTopMid.innerText === player.icon && boxTopRight.innerText === player.icon) {
                //alert(player.name + ' has won');
                return true;
                // mid row
            } else if (boxMidLeft.innerText === player.icon && boxMidMid.innerText === player.icon && boxMidRight.innerText === player.icon) {
                // alert(player.name + ' has won');
                return true;
                // bottom row
            } else if (boxBottomLeft.innerText === player.icon && boxBottomMid.innerText === player.icon && boxBottomRight.innerText === player.icon) {
                console.log(player.name + ' has won');
                return true;
                // left column
            } else if (boxTopLeft.innerText === player.icon && boxMidLeft.innerText === player.icon && boxBottomLeft.innerText === player.icon) {
                console.log(player.name + ' has won');
                return true;
                // mid column
            } else if (boxTopMid.innerText === player.icon && boxMidMid.innerText === player.icon && boxBottomMid.innerText === player.icon) {
                console.log(player.name + ' has won');
                return true;
                // right column
            } else if (boxTopRight.innerText === player.icon && boxMidRight.innerText === player.icon && boxBottomRight.innerText === player.icon) {
                console.log(player.name + ' has won');
                return true;
                // diag 1
            } else if (boxTopLeft.innerText === player.icon && boxMidMid.innerText === player.icon && boxBottomRight.innerText === player.icon) {
                console.log(player.name + ' has won');
                return true;
                // diag 2
            } else if (boxTopRight.innerText === player.icon && boxMidMid.innerText === player.icon && boxBottomLeft.innerText === player.icon) {
                console.log(player.name + ' has won');
                return true;
            } else  {
                return false;
            }
        }

// check if game over / all tiles are filled
const gameDraw = () => {
    if (turnCounter === 9){
        return true;
    } else {
        return false;
    }
}


