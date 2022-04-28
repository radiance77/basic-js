const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  if (names.length === 0) {
    return [];
  }
  let result = [];
  let char = '';

  for (let i = 0; i < names.length; i++) {
    if (names[i].split('').includes('(')) {
      if (result.includes(names[i])) { 
        result.push(`${names[i]}(${result.filter(elem => elem === names[i]).length})`);
      } else {
        result.push(names[i]);
      }
    } else if (result.includes(names[i])) {
      char = `${names[i]}(${result.filter(elem => elem === names[i]).length})`;
      if(result.includes(char)) {
        result.push(`${names[i]}(${result.filter(elem => elem === names[i]).length+1})`)
      }else {
        result.push(`${names[i]}(${result.filter(elem => elem === names[i]).length})`)
      }
    } else {
      result.push(names[i]);
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
