const removeFromArray = function(arr, elementToRemove) {

    const index = arr.indexOf(elementToRemove); 
  
    if (index > -1) {
  
      arr.splice(index, 1); // Removes one element at the found index
    }
    return arr; 
  }

// Do not edit below this line
module.exports = removeFromArray;
