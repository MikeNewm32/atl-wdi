// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // denominations of coins
  var coinDenominations = arguments[2] || [25, 10, 5, 1];
  // find out what the change is
  var changeOwed = Math.floor(100*payment - 100*price);
  // give back smallest amount of change possible
  // if no change owed give 0
  if (changeOwed < 0) {
    return [0, 0, 0, 0]}
  var changeGiven = [], howMany;
  coinDenominations.forEach(function(val) {
  howMany = Math.floor(changeOwed/val);
    change
    changeOwed -= howMany * val;
    changeGiven.push(howMany);  
  });
  return changeGiven;
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
