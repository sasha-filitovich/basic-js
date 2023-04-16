const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  arr1 = s1.split('');
  arr2 = s2.split('');
  let count = 0;
  for (let j = 0; j < arr1.length; j++) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[j] === arr2[i]) {
        count++;
        arr2.splice(i, 1);
        break;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
