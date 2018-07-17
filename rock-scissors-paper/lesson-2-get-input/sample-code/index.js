/*
 * initialising scores for both the player and the computer
 */
let playerScore = 0;
let cpuScore = 0;

/*
 * stores what strings should be associated with the player and computer
 */
const PLAYER = 'player';
const CPU = 'computer';
const DRAW = 'draw';

const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';

const RANDOM_MIN = 0;
const RANDOM_MAX = RANDOM_MIN + 2;
const RANDOM_MID = RANDOM_MAX - 1;

/*
 * play a move each time the user clicks the button
 */
function playGame() {
  const randomChoice = getRandomInt(RANDOM_MIN, RANDOM_MAX);
  const computerMove = getComputerMove(randomChoice);
  const playerMove = getInput();

  const result = compareMoves(playerMove, computerMove);
  if(result !== DRAW) {
    incrementScore(result);
  }

  logResult(result, playerMove, computerMove);
  console.log(getScore(playerScore, cpuScore));
}

/*
 * increments the score of either the computer or player
 * @param {string} player
 *   specify whether the 'player' or 'computer' will gain an extra point
 */
function incrementScore(player) {
  if (player === PLAYER) {
    playerScore++;
  } else if (player === CPU) {
    cpuScore++;
  } else {
    return false;
  }
  return true;
}

function getScore(playerScore, computerScore) {
  return `Player's Score: ${playerScore} \nComputer's Score: ${cpuScore}`;
}

/*
 * returns the string input via a prompt request
 */
function getInput() {
  return document.getElementById('player-move').value;
}

/*
 * returns one of three random integers to determine which 3 moves the computer has randomly chosen
 *
 * @param {number} min
 *   lowest integer that may be returned
 *
 * @param {number} max
 *   highest integer that may be returned
 *
 * @return
 *   random number between min and max
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function logResult(result, playerMove, computerMove) {
  console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
  if(result === DRAW) {
    console.log('DRAW');
  } else if (result === PLAYER) {
    console.log('You Win! Well played!');
  } else if (result === CPU) {
    console.log('Computer Wins!');
  } else {
    console.log('Please enter a valid move');
  }
}

/*
 * compares the moves of the player and computer to determine a win, loss or draw for the player
 *
 * @param {string} playerMove
 *   the move that the player has chosen
 *
 * @param {number} random
 *   random number to randomly determine which move the computer has chosen
 */
 function compareMoves(playerMove, computerMove) {
   if (computerMove === ROCK) {
     if (playerMove === computerMove) {
       return DRAW;
     } else if (playerMove === SCISSORS) {
       return CPU;
     } else if (playerMove === PAPER) {
       return PLAYER;
     }
   } else if (computerMove === SCISSORS) {
     if (playerMove === computerMove) {
       return DRAW;
     } else if (playerMove === ROCK) {
       return PLAYER;
     } else if (playerMove === PAPER) {
       return CPU;
     }
   } else if (computerMove === PAPER) {
     if (playerMove === computerMove) {
       return DRAW;
     } else if (playerMove === ROCK) {
       return CPU;
     } else if (playerMove === SCISSORS) {
       return PLAYER;
     }
   }
   console.log('Please enter a valid move!');
   return false;
 }

/*
 * returns the random move that the computer will play against the player
 *
 * @param {number} random
 *   random number that will be mapped to a valid game move
 *
 * @return
 *   the move that the computer will play
 */
function getComputerMove(random) {
  if (random === RANDOM_MIN) {
    return ROCK;
  } else if (random === RANDOM_MID) {
    return SCISSORS;
  } else if (random === RANDOM_MAX) {
    return PAPER;
  }
  return false;
}
