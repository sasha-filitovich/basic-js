const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  const first = Date.parse(date);

  if (!isNaN(Date.parse(date)) && Date.parse(date) !== Date.parse(new Date())) {
    const month = date.getMonth();
    if (month < 2 || month === 11) {
      return 'winter';
    } else if (month < 5) {
      return 'spring';
    } else if (month < 8) {
      return 'summer';
    } else if (month < 11) {
      return 'autumn';
    }
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
