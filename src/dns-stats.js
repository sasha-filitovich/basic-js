const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  for (let el of domains) {
    arr.push(el.split('.'));
  }
  const arr1 = arr.flat().reverse();
  const uniq = Array.from(new Set(arr1));
  const obj = {};
  let str = '';
  let check = [];
  for (let el of uniq) {
    let i = 0;
    for (let item of arr1) {
      if (el === item) {
        i++;
      }
    }
    check.push(el);
    if (i === domains.length) {
      str = str + '.' + el;
      obj[str] = i;
    } else {
      if (domains.indexOf(check.reverse().join('.')) !== -1) {
        str = str + '.' + el;
        obj[str] = i;
      } else {
        const strArr = str.split('.');
        strArr.splice(-1, 1, el);
        str = strArr.join('.');
        obj[str] = i;
      }
    }
  }

  return obj;
}

module.exports = {
  getDNSStats,
};
