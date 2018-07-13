let timer;

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

const rockEmoji = '&#x26F0;';
const scissorsEmoji = '&#x2702;';
const paperEmoji = '&#x1F4C4;';

/*
 * play a move each time the user clicks the button
 */
function playGame(playerMove) {
  compareMoves(playerMove, getRandomInt(0, 2));

}

function gameWon(playerHasWon) {
  const celebration = document.getElementById('celebration');
  const lost = document.getElementById('game-loss');
  const gameContent = document.getElementById('game-content');
  const confetti = document.getElementById('canvas');

  gameContent.style.display = 'none';

  if(playerHasWon) {
    celebration.classList.add('drop-in');
    confetti.style.zIndex = '0';
  } else {
    lost.classList.add('drop-in');
  }
}

function reload() {
  location.reload(true);
}

function getEmoji(move) {
  if(move === 'rock') {
    return rockEmoji;
  } else if(move === 'scissors') {
    return scissorsEmoji;
  } else if(move === 'paper') {
    return paperEmoji;
  } else {
    console.warn('Cannot read type of move');
  }
}

function displayMoves(playerMove, cpuMove) {
  countdown(3);
  const playerPlaceholder = document.querySelector('#player-move > span.rsp-choice');
  const cpuPlaceholder = document.querySelector('#cpu-move > span.rsp-choice');
  toggleAnimation();
  playerPlaceholder.innerHTML = playerMove;
  cpuPlaceholder.innerHTML = cpuMove;
  timer = 0;
}

function toggleAnimation() {
  const rspChoices = document.querySelectorAll('.rsp-choice');
  for(let i = 0; i < rspChoices.length; i++) {
    rspChoices[i].classList.toggle('make-move');
  }
}

/*
 * counts down from max to zero
 *
 * @param {number}
 *   specifies the the number to count down from
 */
function countdown(max) {
  let time = max;
  const versus = document.getElementById('timer');

  return setInterval(function() {
    versus.innerHTML = null;
    versus.innerHTML = time;
    if(time < 1)
      clearInterval();
    else
      time--;
  }, 1000);
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

function displayScore(player) {
  console.log(`Player's Score: ${playerScore} \nComputer's Score: ${cpuScore}`);
  document.getElementById('player-score').innerHTML = `${playerScore}`;
  document.getElementById('cpu-score').innerHTML = `${cpuScore}`;
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
  displayMoves(getEmoji(playerMove), getEmoji(computerMove));
  setTimeout(function() {
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
    toggleAnimation();
    setTimeout(function () {
      if(playerScore > 1 || cpuScore > 1) {
        if(playerScore > 1)
          gameWon(true);
        else
          gameWon(false);
      }
    }, 300);    
  }, 4000);
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
