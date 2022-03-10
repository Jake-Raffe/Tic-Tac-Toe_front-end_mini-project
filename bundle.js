(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import classes 
// const { Player } = require("./player");
const Player = function(name, icon){
    this.name = name,
    this.icon = icon
}



// create new player object
const player1 = new Player('Player 1', "X");
const player2 = new Player('Player 2', "O");

// current player
let currentPlayer = player1

// alternate output depending on player
const altSymbol = (player) => {
    if (player.name === 'Player 1'){
        console.log('player 1');
        return 'X';
    } else if (player.name === 'Player 2'){
        console.log('player 2');
        return 'O';
    } else {
        console.log("Error with determining player number");
    }
}

// change player function
const changePlayer = (player) => {
    if (currentPlayer === player1){
        console.log('changing to player 2');
        currentPlayer = player2;
    } else if (currentPlayer === player2){
        console.log('changing to player 3');
        currentPlayer = player1;
    }
}

// functions to add X to div box when clicked

    // boxTopLeft addTopLeft
        // locate div section
        const boxTopLeft = document.querySelector("#top-left");
        // create function that adds a 'X' inner text to div
        const addTopLeft = (player) => {
            boxTopLeft.innerText = altSymbol(player);
            gameWon(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxTopLeft.addEventListener('click', addTopLeft(currentPlayer));

    // boxTopMid addTopMid
        // locate div section
        const boxTopMid = document.querySelector("#top-mid");
        // create function that adds a 'X' inner text to div
        const addTopMid = (player) => {
            boxTopMid.innerText = altSymbol(player);
            gameWon(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxTopMid.addEventListener('click', addTopMid(currentPlayer));

    // boxTopRight addTopRight
        // locate div section
        const boxTopRight = document.querySelector("#top-right");
        // create function that adds a 'X' inner text to div
        const addTopRight = (player) => {
            boxTopRight.innerText = altSymbol(player);
            gameWon(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxTopRight.addEventListener('click', addTopRight(currentPlayer));

    // boxMidLeft addMidLeft
        // locate div section
        const boxMidLeft = document.querySelector("#mid-left");
        // create function that adds a 'X' inner text to div
        const addMidLeft = player => {
            boxMidLeft.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxMidLeft.addEventListener('click', addMidLeft(currentPlayer));

    // boxMidMid addMidMid
        // locate div section
        const boxMidMid = document.querySelector("#mid-mid");
        // create function that adds a 'X' inner text to div
        const addMidMid = player => {
            boxMidMid.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxMidMid.addEventListener('click', addMidMid(currentPlayer));

    // boxMidRight addMidRight
        // locate div section
        const boxMidRight = document.querySelector("#mid-right");
        // create function that adds a 'X' inner text to div
        const addMidRight = (player) => {
            boxMidRight.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxMidRight.addEventListener('click', addMidRight(currentPlayer));

    // boxBottomLeft addBottomLeft
        // locate div section
        const boxBottomLeft = document.querySelector("#bottom-left");
        // create function that adds a 'X' inner text to div
        const addBottomLeft = (player) => {
            boxBottomLeft.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxBottomLeft.addEventListener('click', addBottomLeft(currentPlayer));

    // boxBottomMid addBottomMid
        // locate div section
        const boxBottomMid = document.querySelector("#bottom-mid");
        // create function that adds a 'X' inner text to div
        const addBottomMid = (player) => {
            boxBottomMid.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxBottomMid.addEventListener('click', addBottomMid(currentPlayer));

    // boxBottomRight addBottomRight
        // locate div section
        const boxBottomRight = document.querySelector("#bottom-right");
        // create function that adds a 'X' inner text to div
        const addBottomRight = (player) => {
            boxBottomRight.innerText = altSymbol(player);
            changePlayer(player);
        }
        // create event listener for clicking on div -> run add x function
        boxBottomRight.addEventListener('click', addBottomRight(currentPlayer));


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

// Check if game won
        // will take player number as argument
        const gameWon = (player) => {
            if (boxTopLeft.innerText === player.icon && boxTopMid.innerText === player.icon && boxTopRight.innerText === player.icon) {
                console.log(player.name + ' has won');
                return true;
            } else {
                return false;
            }
        }


},{}]},{},[1]);
