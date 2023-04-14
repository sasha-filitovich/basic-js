const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) {
    return false;
  }
  const arr = members
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim())
    .map((item) => item.toUpperCase())
    .sort();
  console.log(arr);
  let res = '';
  for (let el of arr) {
    res = res + el[0];
  }
  if (res === '') {
    return false;
  } else {
    return res;
  }
}

module.exports = {
  createDreamTeam,
};
