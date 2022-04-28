const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let countTrue = 0;
  matrix.forEach((arr) => {
    countTrue += arr.filter((item) => item).length;
  })

  let rowLength = matrix.length;
  let columnLength = matrix[0].length;

  for (let i = 0; i < columnLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if(countTrue === 0) {
        matrix[j][i] = 0;
      } else {
        if(i === 0 && matrix[j][i] && typeof matrix[j][i] === "boolean") {
          matrix[j][i] = countTrue-1;
          matrix[j][i+1] = countTrue;
        } else if(matrix[j][i] && typeof matrix[j][i] === "boolean") {
          matrix[j][i] = countTrue-1;
          matrix[j][i-1] = countTrue;
        } else if(!matrix[j][i] && typeof matrix[j][i] === "boolean") {
          matrix[j][i] = countTrue-1;
        }
      }
    }
  }
  return matrix;
}


module.exports = {
  minesweeper
};
