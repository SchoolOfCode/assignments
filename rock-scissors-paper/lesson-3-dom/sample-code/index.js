/*
 * initial scores for the player and computer
 */
let playerTally = 0
let computerTally = 0;

/*
 * initialising utf-8 codes that represent emojis
 */
const rockEmoji = '&#x26F0;';
const scissorEmoji = '&#x2702;';
const paperEmoji = '&#x1F4C4;';

/*
 * playGame will run each time the user chooses a playerMove
 *
 * @param {string} playerMove
 *   data representing the player's move: 'rock', 'scissors' or 'paper'
*/
function playGame(playerMove) {
  compareMoves(playerMove, getRandomInt(0, 2));
}

/*
 * increments the tallied score of either the player or the computer
 *
 * @param {string} tally
 *   the tally which should be updated: 'player' or 'computer'
*/
function incrementTally(tally){
  if(tally === 'player'){
    playerTally++;
  }else if (tally === 'computer') {
    computerTally++;
  }
}

/*
 * updates DOM with an image of the computer's choice
 *
 * @param {string} computerMove
 *   data representing an emoji to represent either a rock, scissors or paper
*/
function updateCpuChoice(computerMove) {
  let btn = document.getElementById('cpu-move');
  btn.innerHTML = computerMove;
}

/*
 * displays the recorded tally in the document
*/
function displayTally() {
  console.log(`Player Score: ${playerTally} \nComputer Score: ${computerTally}`);
  document.getElementById('playerTally').innerHTML = `${playerTally}`;
  document.getElementById('computerTally').innerHTML = `${computerTally}`;
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
  if(computerMove === 'rock'){
    updateCpuChoice(rockEmoji);
    if(playerMove === computerMove){
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('DRAW');
    }else if(playerMove === 'scissors'){
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('Computer Wins');
      incrementTally('computer');
    }else if(playerMove === 'paper'){
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('You Win! Well played!');
      incrementTally('player');
    }else{
      console.log('Please enter a valid move!');
    }
  } if(computerMove === 'scissors'){
    updateCpuChoice(scissorEmoji);
      if(playerMove === computerMove){
        console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
        console.log('DRAW');
      }else if(playerMove === 'rock'){
        console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
        console.log('You Win! Well played!');
        incrementTally('player');
      }else if(playerMove === 'paper'){
        console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
        console.log('Computer Wins!');
        incrementTally('computer');
      }else{
        console.log('Please enter a valid move!');
      }
} if(computerMove === 'paper'){
    updateCpuChoice(paperEmoji);
    if(playerMove === computerMove){
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('DRAW');
    }else if(playerMove === 'rock'){
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('Computer Wins!');
      incrementTally('computer');
    }else if(playerMove === 'scissors'){
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('You Win! Well played!');
      incrementTally('player');
    }else{
      console.log('Please enter a valid move!');
    }
  }
  displayTally();
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
function initialiseComputerMove(random){
  if(random === 0) {
    return 'rock';
  }else if(random === 1) {
    return 'scissors';
  }else if(random === 2){
    return 'paper';
  }
}
