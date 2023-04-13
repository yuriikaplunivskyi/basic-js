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
  // Convert the number to a string so we can iterate over its digits
  const numStr = n.toString();
  
  let maxNum = 0;
  
  // Iterate over each digit
  for (let i = 0; i < numStr.length; i++) {
    // Remove the current digit and convert the resulting string back to a number
    const currNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1));
    
    // If this new number is greater than the previous maximum, update the maximum
    if (currNum > maxNum) {
      maxNum = currNum;
    }
  }
  
  return maxNum;
}


module.exports = {
  deleteDigit
};
