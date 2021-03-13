// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

*/

// ========================== SOLUTION ======================================
// ================================================================================

// function pluralize(array) {
// 	const addS = [];
// 	for (let i = 0; i < array.length; i++) {
// 		addS.push(array[i] + 's');
// 	}
// 	return addS;
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

const pluralize = (arr) => arr.map((ele) => ele + 's');

// ========================== SOLUTION 3 ======================================
// ================================================================================

// const pluralize = arr => {
//   const addS = [];
//   for (let ele of arr) {
//     addS.push(ele + 's');
//   }
//   return addS;
// }

// Uncomment these to check your work!
const animals = ['dog', 'cat', 'tree frog'];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]
