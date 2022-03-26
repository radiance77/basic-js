const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arrN = `${n}`.split('');
  let arrNum = [];
  let num = 0;
  let resultMaxNum = 0;

  for(let i = 0; i < arrN.length; i++) {
    num = arrN.slice(0);
    num.splice(i, 1);
    num = +(num.join(''));
    arrNum.push(num);
  }

  resultMaxNum = Math.max(...arrNum)
  return resultMaxNum;
}

module.exports = {
  deleteDigit
};
