
const PLAYER = 'player';
const CPU = 'computer';
const DRAW = 'draw';

const ROCK = 'rock';
const SCISSORS = 'scissors';
const PAPER = 'paper';

/*
 * play the game for as long as the user desires
 */
 function playGame() {
  let continueGame = true;
  while (continueGame) {
    const playerMove = getInput();
    const randomNum = getRandomInt(0, 2);
    const computerMove = getComputerMove(randomNum);
    const result = compareMoves(playerMove, computerMove);
    logResult(result, playerMove, computerMove);
    if (!confirm('Do you want to continue playing?')) {
      continueGame = false;
    }
  }
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
 * returns the string input via a prompt request
*/
function getInput() {
  return prompt("Please enter your name", "Enter \"Rock\", \"Scissors\" or \"Paper\"...");
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
  if (random === 0) {
    return ROCK;
  } else if (random === 1) {
    return SCISSORS;
  } else if (random === 2) {
    return PAPER;
  }
  return false;
}

module.exports = {
  getRandomInt,
  compareMoves,
  getComputerMove
}
