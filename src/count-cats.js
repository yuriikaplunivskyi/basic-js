const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
    // Initialize a variable to keep track of the number of cats found
    let count = 0;
  
    // Loop through each row of the backyard
    for (let i = 0; i < backyard.length; i++) {
      // Loop through each column of the row
      for (let j = 0; j < backyard[i].length; j++) {
        // If a cat ear is found, increment the count
        if (backyard[i][j] === '^^') {
          count++;
        }
      
    }
  
    // Return the total number of cats found
    return count;
  }
  
}

module.exports = {
  countCats
};
