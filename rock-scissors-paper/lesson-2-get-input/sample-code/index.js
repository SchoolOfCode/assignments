/*
 * initialising scores for both the player and the computer
 */
let playerScore = 0;
let cpuScore = 0;

/*
 * stores what strings should be associated with the player and computer
 */
const player = 'player';
const cpu = 'computer';

/*
 * play a move each time the user clicks the button
 */
function playGame() {
  compareMoves(getInput(), getRandomInt(0, 2));
}

/*
 * increments the score of either the computer or player
 * @param {string} playerMove
 *   specify whether the 'player' or 'computer' will gain an extra point
 */
function incrementScore(player) {
  if (player === 'player') {
    playerScore++;
  } else if (player === 'computer') {
    cpuScore++;
  }
}

function displayScore() {
  console.log(`Player's Score: ${playerScore} \nComputer's Score: ${cpuScore}`);
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

/*
 * compares the moves of the player and computer to determine a win, loss or draw for the player
 *
 * @param {string} playerMove
 *   the move that the player has chosen
 *
 * @param {number} random
 *   random number to randomly determine which move the computer has chosen
 */
function compareMoves(playerMove, random) {
  const computerMove = initialiseComputerMove(random);
  if (computerMove === 'rock') {
    if (playerMove === computerMove) {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('DRAW');
    } else if (playerMove === 'scissors') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('Computer Wins');
      incrementScore(cpu);
    } else if (playerMove === 'paper') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('You Win! Well played!');
      incrementScore(player);
    } else {
      console.log('Please enter a valid move!');
    }
  }
  if (computerMove === 'scissors') {
    if (playerMove === computerMove) {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('DRAW');
    } else if (playerMove === 'rock') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('You Win! Well played!');
      incrementScore(player);
    } else if (playerMove === 'paper') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('Computer Wins!');
      incrementScore(cpu);
    } else {
      console.log('Please enter a valid move!');
    }
  }
  if (computerMove === 'paper') {
    if (playerMove === computerMove) {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('DRAW');
    } else if (playerMove === 'rock') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('Computer Wins!');
      incrementScore(cpu);
    } else if (playerMove === 'scissors') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('You Win! Well played!');
      incrementScore(player);
    } else {
      console.log('Please enter a valid move!');
    }
  }
  displayScore();
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
function initialiseComputerMove(random) {
  if (random === 0) {
    return 'rock';
  } else if (random === 1) {
    return 'scissors';
  } else if (random === 2) {
    return 'paper';
  }
}
