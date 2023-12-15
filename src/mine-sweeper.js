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
  let resultArr = [];
  for (let i = 0; i < matrix.length; i++) {
    resultArr.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const arr = [
        [i - 1, j - 1],
        [i - 1, j],
        [i - 1, j + 1],
        [i, j - 1],
        [i, j + 1],
        [i + 1, j - 1],
        [i + 1, j],
        [i + 1, j + 1],
      ];
      let x = 0;
      for (let k = 0; k < arr.length; k++) {
        if (
          arr[k][0] >= 0 &&
          arr[k][1] >= 0 &&
          arr[k][0] < matrix.length &&
          arr[k][1] < matrix[i].length
        ) {
          if (matrix[arr[k][0]][arr[k][1]] === true) {
            x += 1;
          }
        }
        resultArr[i][j] = x;
      }
    }
  }
  return resultArr;
}

module.exports = {
  minesweeper,
};
