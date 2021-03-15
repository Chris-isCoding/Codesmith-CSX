// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: getLength

Get the length of an array using recursion without accessing its length property.

Input: {Array} array - array whose length is sought
Output: {Number}

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function getLength(array, i = 0) {
//   if (!array[i]) return i;
//   return getLength(array, i + 1)
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

const getLength = (array, i = 0) => (array[i] ? getLength(array, i + 1) : i);

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
