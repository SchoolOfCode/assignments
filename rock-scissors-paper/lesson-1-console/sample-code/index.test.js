/*
 * test file using jest.js unit tests and parameterised tests
 * unit test docs: https://jestjs.io/docs/en/using-matchers
 * parameterised tests docs: https://jestjs.io/docs/en/api.html#testeachtable-name-fn
 */

 const index = require('./index.js');

 /*
  * defining constants to be used in testing
  */
 const ROCK = 'rock';
 const SCISSORS = 'scissors';
 const PAPER = 'paper';

 const PLAYER = 'player';
 const CPU = 'computer';
 const DRAW = 'draw';

/*
 * ================== TYPICAL UNIT TEST EXAMPLE ================================
 *
 * SYNTAX:
 * test(testName, testingFunctionality, timeout)
 *
 * {string} testName
 *   brief sentence to describe what test is doing
 *   i.e.
 *     'one plus one is two' would be an informative testName
 *
 * {function} testingFunctionality
 *   function that contains the expectations of the tests
 *   i.e.
 *     expect(1+1).toBe(2) is an expectation that can be used in a function
 *
 * {number} timeout
 *   OPTIONAL time(in milliseconds) to wait before a test case aborts and fails
 *   DEFAULT timeout is set to 5000 milliseconds
 *
 * READ MORE HERE: https://jestjs.io/docs/en/api.html#testname-fn-timeout
 *
 * REAL CODE EXAMPLE:
 *
 * test('two plus two is four', () => {
 *  expect(2 + 2).toBe(4);
 * });
 * ===================== END OF TYPICAL UNIT TESTING EXAMPLE ===================
 */

test('getRandomInt will only return an integer between min and max', () => {
  const minBound = 0;
  const maxBound = 2;
  const testLimit = 10;

  for(let i = 0; i < testLimit; i++) {
    expect(index.getRandomInt(minBound, maxBound)).toBeGreaterThanOrEqual(minBound);
    expect(index.getRandomInt(minBound, maxBound)).toBeLessThanOrEqual(maxBound);
  }
});

/*
 * ================== TYPICAL PARAMETERISED TEST EXAMPLE ======================
 *
 * SYNTAX:
 * test.each(tableOfTestingValues)(testName, testingFunctionality)
 *
 * {array} tableOfTestingValues
 *   an array of arrays that holds arguments to passed into the fn to be tested
 *   i.e.
 *     [[1,1,2], [1,3,4], [2,5,7]] would be a valid 'table' of data
 *     the values in each inner array can be passed into the fn with expectations
 *
 * {string} testName
 *   brief sentence to describe what test is doing
 *   we may pass arguments from the tableOfTestingValues into the string
 *   this can be done by injecting values by specifying their data type
 *   i.e.
 *     '%i plus %i is %i' would be an informative testName
 *     %i references an integer from the argument list in chronological order
 *     the first %i in the string will reference the first int from the arguments
 *     the second %i in the string will reference the second int from the arguments
 *     the third %i in the string will reference the third int from the arguments
 *
 *     other data types may be referenced:
 *       %p - pretty-format.
 *       %s- String.
 *       %d- Number.
 *       %i - Integer.
 *       %f - Floating point value.
 *       %j - JSON.
 *       %o - Object.
 *       %% - single percent sign ('%'). This does not consume an argument.
 *
 * READ MORE HERE: https://jestjs.io/docs/en/api.html#testeachtable-name-fn
 *
 * REAL CODE EXAMPLE:
 *
 * test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
 *   '%i plus %i will return %i',
 *   (firstNum, secondNum, expected) => {
 *     expect(firstNum + secondNum).toBe(expected);
 *   },
 * );
 * =================== END OF TYPICAL PARAMETERISED TESTING EXAMPLE ====================
 */

/*
 * will test to see if two equivalent moves results in a draw
 */
test.each([[ROCK, ROCK], [SCISSORS, SCISSORS], [PAPER, PAPER]])(
  '%s versus %s results in a DRAW',
  (playerMove, computerMove) => {
    expect(index.compareMoves(playerMove, computerMove)).toBe(DRAW);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);

/*
 * will test to see if a winning player move results in a player win
 */
test.each([[ROCK, SCISSORS], [SCISSORS, PAPER], [PAPER, ROCK]])(
  `%s versus %s results in a ${PLAYER} win`,
  (playerMove, computerMove) => {
    expect(index.compareMoves(playerMove, computerMove)).toBe(PLAYER);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);

/*
 * will test to see if a losing player move results in a computer win
 */
test.each([[ROCK, PAPER], [SCISSORS, ROCK], [PAPER, SCISSORS]])(
  `%s versus %s results in a ${CPU} win`,
  (playerMove, computerMove) => {
    expect(index.compareMoves(playerMove, computerMove)).toBe(CPU);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);

/*
 * will test to see if the same moves result in a draw
 */
test.each([[ROCK, ROCK], [SCISSORS, SCISSORS], [PAPER, PAPER]])(
  `"%s" versus "%s" results in a ${DRAW}`,
  (playerMove, computerMove) => {
    expect(index.compareMoves(playerMove, computerMove)).toBe(DRAW);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);

/*
 * will test to see if invalid inputs return false
 */
test.each([['rockk', 'paePer'], ['rock', 'fire'], ['lizard', 'spock'], [1, 1], [false, true]])(
  `"%s" versus "%s" returns false from the compareMoves function`,
  (playerMove, computerMove) => {
    expect(index.compareMoves(playerMove, computerMove)).toBe(false);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);

/*
 * will test to see if computer moves are assigned to random number correctly
 */
test.each([[0, ROCK], [1, SCISSORS], [2, PAPER]])(
  'random number "%s" maps to the computer move "%s"',
  (randomNum, assignedMove) => {
    expect(index.getComputerMove(randomNum)).toBe(assignedMove);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);

/*
 * will test to see if getComputerMove fn returns false after invalid input
 */
test.each([[3], ['roar'], [1.8]])(
  'the invalid input "%s" returns false from the function',
  (randomNum) => {
    expect(index.getComputerMove(randomNum)).toBe(false);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);

/*
 * will test to see if getRandomInt returns ints between a min and max
 */
test.each([[3], ['roar'], [1.8]])(
  'the invalid input "%s" returns false from the function',
  (randomNum) => {
    expect(index.getComputerMove(randomNum)).toBe(false);
  }, // <-- DO NOT REMOVE COMMA AT THE END OF ANON FUNCTION
);
