const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let actions = [
    '--discard-next',
    '--double-next',
    '--discard-prev',
    '--double-prev',
  ];
  
  let numbers = arr.slice().filter((item) => !actions.includes(item));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === actions[0] && i != arr.length - 1) {
      numbers.splice(i, 1);
    } else if (arr[i] === actions[1] && i != arr.length - 1) {
      if (numbers.includes(arr[i + 1])) {
        numbers.splice(i, 0, arr[i + 1]);
      }
    } else if (arr[i] === actions[2] && i != 0) {
      if (numbers.includes(arr[i - 1])) {
        numbers.splice(i - 1, 1);
      }
    } else if (arr[i] === actions[3] && i != 0) {
      if (numbers.includes(arr[i - 1])) {
        numbers.splice(i, 0, arr[i - 1]);
      }
    }
  }

  return numbers;
}


module.exports = {
  transform
};
