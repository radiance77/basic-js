const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let membersSort = members
    .filter(
      (item) => typeof item === "string" && item.length != 0 && !Number(item[0])
    )
    .map((item) => item.trim().toUpperCase())
    .sort();

  let membersName = membersSort.map((item) => item[0]).join("");
  return membersName;
}


module.exports = {
  createDreamTeam
};
