const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    let x = 0;
    for (let j = 0; j < i; j++) {
      if (names[i] === names[j]) {
        x += 1;
      }
    }
    let y;
    if (x === 0) {
      y = names[i];
    } else {
      y = `${names[i]}(${x})`;
    }
    arr.push(y);
    for (let k = 0; k < arr.length - 1; k++) {
      if (y === arr[k]) {
        arr.pop();
        arr.push(`${y}(1)`);
      }
    }
  }
  return arr;
}

module.exports = {
  renameFiles,
};
