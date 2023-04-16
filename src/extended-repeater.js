const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let additArr = [];
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additArr.push(options.hasOwnProperty('addition') ? options.addition + '' : undefined);
  }
  const additStr = additArr.join(
    options.additionSeparator === undefined ? '|' : options.additionSeparator
  );
  let arr = [];
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    arr.push(str + additStr);
  }
  const result = arr.join(options.separator === undefined ? '+' : options.separator);
  return result;
}

module.exports = {
  repeater,
};
