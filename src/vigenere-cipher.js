const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    if (isDirect === false) {
      this.isDirect = false;
    } else {
      this.isDirect = true;
    }
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const arr1 = str.split('').map((el) => el.toUpperCase().charCodeAt(0));
    const arr2 = key.split('').map((el) => el.toUpperCase().charCodeAt(0));
    const longArr2 = [];
    for (let i = 0; longArr2.length < arr1.length; i++) {
      if (i === arr2.length) {
        i = 0;
      }
      longArr2.push(arr2[i]);
    }
    const arrRes = [];
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > 64 && arr1[i] < 91) {
        arrRes.push(((arr1[i] + longArr2[j] - 130) % 26) + 65);
        j++;
      } else {
        arrRes.push(arr1[i]);
      }
    }
    const result = arrRes.map((el) => String.fromCharCode(el)).join('');
    if (this.isDirect) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const arr1 = str.split('').map((el) => el.toUpperCase().charCodeAt(0));
    const arr2 = key.split('').map((el) => el.toUpperCase().charCodeAt(0));
    const longArr2 = [];
    for (let i = 0; longArr2.length < arr1.length; i++) {
      if (i === arr2.length) {
        i = 0;
      }
      longArr2.push(arr2[i]);
    }
    const arrRes = [];
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > 64 && arr1[i] < 91) {
        let a = (arr1[i] - longArr2[j]) % 26;
        if (a < 0) a = a + 26;
        arrRes.push(a + 65);
        j++;
      } else {
        arrRes.push(arr1[i]);
      }
    }
    const result = arrRes.map((el) => String.fromCharCode(el)).join('');
    if (this.isDirect) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
