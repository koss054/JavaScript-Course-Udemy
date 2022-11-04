// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// ********************
// Coding Challenge #1
// ********************
function printForecast(arr) {
  let displayText = "... ";

  for (let i = 0; i < arr.length; i++) {
    displayText += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  return displayText;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
