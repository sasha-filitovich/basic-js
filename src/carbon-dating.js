const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  if (Number(sampleActivity) > 0 && Number(sampleActivity) < 16) {
    const a0_a = Math.log(MODERN_ACTIVITY / Number(sampleActivity));
    const t = 0.693 / HALF_LIFE_PERIOD;
    if (Math.ceil(a0_a / t) > 0) {
      return Math.ceil(a0_a / t);
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  dateSample,
};
