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
  str = String(str);
  if ('addition' in options) {
    options.addition = String(options.addition);
  }
  if (!('separator' in options)) {
    options.separator = '+';
  }
  if (!('additionSeparator' in options)) {
    options.additionSeparator = '|';
  }
  if (!('additionRepeatTimes' in options)) {
    options.additionRepeatTimes = 1;
  }

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    if('addition' in options) {
      str += options.addition;
    }
    if (i !== options.additionRepeatTimes - 1) {
      str += options.additionSeparator;
    }
  }

  if ('repeatTimes' in options) {
    let word = str;
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      str += options.separator;
      str += word;
    }
  }
  return str;
}

module.exports = {
  repeater
};
