console.log("js is up and running!");

/*----- constants -----*/
// X & O - players
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
}
// winning combinations
const COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


/*----- app's state (variables) -----*/
// where the players click (add an X or O) - make sure square is not taken first: 
// a data variable that stores the board positions and what they hold
let board; 

// whose turn is it, either x or o
let turn;

// when we have a winning combo or if there is a tie
let winner; // this can be 3 things: x/o, tie, null

// bonus - if the player wants to quit
// bonus - add score feature for # of games won
// bonus - make a timer for each player's turn

/*----- cached element references -----*/
// message container - h1 and whose turn etc (create in html)
const domMessage = document.querySelector('h2');
// the game squares
const domSquares = document.querySelectorAll('.square');
// reset button
const resetButton = document.querySelector('button');
// gameboard itself!!!
const gameBoard = document.querySelector('.game-board')

/*----- event listeners -----*/
// mouse click on 9 squares - delegate from parent to children (game-board to squares)
gameBoard.addEventListener("click", handleMove);
// mouse click on reset button
resetButton.addEventListener("click", init);
// optional - user initiates game start

/*----- functions -----*/
// initialize (start) game
// handle user interaction - when user clicks square update the state // handleMove()

// check for 3 in a row (winner) <-- main game logic
// render messages to the DOM
