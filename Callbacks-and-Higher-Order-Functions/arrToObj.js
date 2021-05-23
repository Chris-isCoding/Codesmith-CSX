// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: arrToObj
Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

*/

// ========================== SOLUTION ======================================
// ================================================================================

function arrToObj(array, callback) {
  const obj = {};
  for (const ele of array) {
    obj[ele] = callback(ele);
  }
  return obj;
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = (str) => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
