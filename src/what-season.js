const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    // Check if the date argument was not passed
    if (!date) {
      return 'Unable to determine the time of year!';
    }
  
    // Check if the date argument is invalid
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error('Invalid date!');
    }
  
    // Get the month of the date
    const month = date.getMonth();
  
    // Determine the season based on the month
    if (month === 11 || month <= 1) {
      return 'winter';
    } else if (month >= 2 && month <= 4) {
      return 'spring';
    } else if (month >= 5 && month <= 7) {
      return 'summer';
    } else {
      return 'autumn';
    }
  }

module.exports = {
  getSeason
};
