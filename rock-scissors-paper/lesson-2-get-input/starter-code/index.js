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

/*
 * play the game for as long as the user desires
 */
function playGame() {
  // add some code
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
  // add some code
}

/*
 * increments the score of either the computer or player
 * @param {string} player
 *   specify whether the 'player' or 'computer' will gain an extra point
 */
function incrementScore(playerChoice) {
  // add some code
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
function getInput() {
  // add some code
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
  // add some code
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
 */
function getRandomInt(min, max) {

}

module.exports = {
  getRandomInt,
  compareMoves,
  getComputerMove,
  incrementScore
}
