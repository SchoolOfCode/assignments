/*
 * initialising scores for both the player and the computer
 */
let playerScore = 0;
let cpuScore = 0;

let gameOver = false;

/*
 * stores what strings should be associated with the player and computer
 */
const PLAYER = 'player';
const CPU = 'cpu';
const DRAW = 'draw';

const SCORE_LIMIT = 1;

const ROCK_EMOJI = '&#x26F0;';
const SCISSORS_EMOJI = '&#x2702;';
const PAPER_EMOJI = '&#x1F4C4;';

/*
 * play a move each time the user clicks the button
 */
function playGame(playerMove) {
    toggleInputs(true)
    const randomChoice = getRandomInt(0, 2);
    const computerMove = getComputerMove(randomChoice);

    const result = compareMoves(playerMove, computerMove);
    if(!result) {
      // ERROR
    }

    incrementScore(result);
    checkGameOver();
    updateDisplay(playerMove, computerMove);
    setTimeout(function() { toggleInputs(false) }, 2500 )
}

function toggleInputs(state) {
  const inputs = document.getElementsByClassName('inputs');
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = state;
  }
}

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  gameOver = false;
  restartGameDisplay()
  resetMoves()
  displayScore()
}


function checkGameOver(){
  if (playerScore > SCORE_LIMIT || cpuScore > SCORE_LIMIT) {
    gameOver = true;
    if (playerScore > cpuScore) {
      winner = PLAYER
    } else {
      winner = CPU
    }
  }
}

function updateDisplay(playerMove, computerMove) {
  resetMoves()
  displayMoves(playerMove, computerMove);
  setTimeout(displayScore, 1500);
  if(gameOver) {
    setTimeout(endGame, 2500)
  }
}

function resetMoves() {
  const playerPlaceholder = document.getElementById('player-move');
  playerPlaceholder.innerHTML = null;
  const cpuPlaceholder = document.getElementById('cpu-move');
  cpuPlaceholder.innerHTML = null;
}


function displayMove(move, who) {
  const placeholder = document.getElementById(who+'-move');
  placeholder.innerHTML = getEmoji(move);
}

function displayMoves(playerMove, computerMove) {
  setTimeout(function() {
    displayMove(playerMove, PLAYER);
  }, 500);
  // Animate the versus too
  setTimeout(function() {
    displayMove(computerMove, CPU);
  }, 1000);
}

function endGame() {
  const celebration = document.getElementById('celebration');
  const lost = document.getElementById('game-loss');

  if (winner === PLAYER) {
    celebration.classList.add('drop-in');
  } else {
    lost.classList.add('drop-in');
  }
}

function restartGameDisplay() {
  const celebration = document.getElementById('celebration');
  const lost = document.getElementById('game-loss');

  if (winner === PLAYER) {
    celebration.classList.remove('drop-in');
  } else {
    lost.classList.remove('drop-in');
  }
}

function reload() {
  resetGame()
}

function getEmoji(move) {
  if (move === 'rock') {
    return ROCK_EMOJI;
  } else if (move === 'scissors') {
    return SCISSORS_EMOJI;
  } else if (move === 'paper') {
    return PAPER_EMOJI;
  } else {
    console.warn('Cannot read type of move');
  }
}

/*
 * increments the score of either the computer or player
 * @param {string} playerMove
 *   specify whether the 'player' or 'computer' will gain an extra point
 */
function incrementScore(player) {
  if (player === PLAYER) {
    playerScore++;
  } else if (player === CPU) {
    cpuScore++;
  }
  //Error/edge case handle

}

function displayScore() {
  console.log(`Player's Score: ${playerScore} \nComputer's Score: ${cpuScore}`);
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('cpu-score').innerHTML = cpuScore;
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
  //Error handle/edge case
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
 function compareMoves(playerMove, computerMove){
   if (computerMove === 'rock') {
     if (playerMove === computerMove) {
       return DRAW
     } else if (playerMove === 'scissors') {
       return CPU
     } else if (playerMove === 'paper') {
       return PLAYER
     }
   } else if (computerMove === 'scissors') {
     if (playerMove === computerMove) {
       return DRAW
     } else if (playerMove === 'rock') {
       return PLAYER
     } else if (playerMove === 'paper') {
       return CPU
     }
   } else if (computerMove === 'paper') {
     if (playerMove === computerMove) {
       return DRAW
     } else if (playerMove === 'rock') {
       return CPU
     } else if (playerMove === 'scissors') {
       return PLAYER
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
    return 'rock';
  } else if (random === 1) {
    return 'scissors';
  } else if (random === 2) {
    return 'paper';
  }
}
