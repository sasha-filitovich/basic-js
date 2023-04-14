const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const array = arr.slice();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '--discard-prev' && i !== 0) {
      array.splice(i - 1, 1);
    }
    if (array[i] === '--discard-next' && i + 1 !== array.length) {
      array.splice(i + 1, 1);
    }
    if (array[i] === '--double-prev' && i !== 0) {
      array.splice(i - 1, 0, i - 1);
    }
    if (array[i] === '--double-next' && i + 1 !== array.length) {
      array.splice(i + 1, 0, i + 1);
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === '--discard-prev' ||
      array[i] === '--discard-next' ||
      array[i] === '--double-prev' ||
      array[i] === '--double-next'
    ) {
      array.splice(i, 1);
    }
  }
  return array;
}

module.exports = {
  transform,
};
