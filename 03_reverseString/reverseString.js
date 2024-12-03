const reverseString = function(str) {
    // Split the string into an array of characters
    const chars = str.split('');

    // Reverse the array
    chars.reverse();

    // Join the array back into a string
    return chars.join('');
}
// Do not edit below this line
module.exports = reverseString;
