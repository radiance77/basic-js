const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  if (str.length === 0) return '';

  let result = [];
  let arrSymbols = str.split('');
  let tmpArr = [];

  for (let i = 0; i < arrSymbols.length; i++) {
    if (arrSymbols[i] !== arrSymbols[i + 1]) {
      tmpArr.push(arrSymbols[i]);
      if (i !== arrSymbols.length - 1) {
        tmpArr.push('-');
      }
    } else {
      tmpArr.push(arrSymbols[i]);
    }
  }

  tmpArr = tmpArr.join('').split('-');
  tmpArr.forEach((elem) => {
    if (elem.length > 1) {
      result.push(`${elem.length}${elem[0]}`);
    } else {
      result.push(`${elem[0]}`);
    }
  });

  return result.join('');
}

module.exports = {
  encodeLine
};
