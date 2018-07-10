
/*
 * play the game for as long as the user desires
 */
 function playGame() {
  let continueGame = true;
  while (continueGame) {
    compareMoves(getInput(), getRandomInt(0, 2));
    if (!confirm('Do you want to continue playing?')) {
      continueGame = false;
    }
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
function compareMoves(playerMove, random) {
  const computerMove = initialiseComputerMove(random);
  if (computerMove === 'rock') {
    if (playerMove === computerMove) {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('DRAW');
    } else if (playerMove === 'scissors') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('Computer Wins');
    } else if (playerMove === 'paper') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('You Win! Well played!');
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
    } else if (playerMove === 'paper') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('Computer Wins!');
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
    } else if (playerMove === 'scissors') {
      console.log(`Your move is ${playerMove} and the Computer move is ${computerMove}`);
      console.log('You Win! Well played!');
    } else {
      console.log('Please enter a valid move!');
    }
  }
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
