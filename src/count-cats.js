const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (const arr of matrix) {
    for (const cat of arr) {
      if (cat === '^^') {
        count++
      }
    }
  }
  return count;
};
