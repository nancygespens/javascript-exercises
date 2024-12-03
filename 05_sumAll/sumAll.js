const sumAll = function (min, max) {
    // Iterate over the range and calculate the sum
    let sum = 0;
    
    for (let i = min; i <= max; i++) {
        sum += i;
      }
      return sum;
}

// Do not edit below this line
module.exports = sumAll;
