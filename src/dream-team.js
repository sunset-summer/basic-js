const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) !== true) {
    return false;
  }

  let upperLetters = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let nameArray = members[i].split("");
      for (let k = 0; k < nameArray.length; k++) {
        if (nameArray[k] !== " ") {
          upperLetters.push(nameArray[k].toUpperCase());
          break;
        }
      }
    }
  }
  let result = upperLetters.sort().join("");
  return result;
};
