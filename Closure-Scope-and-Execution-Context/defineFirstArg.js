// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: defineFirstArg

Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function defineFirstArg(func, firstArg) {
//   return function(...args) {
//     return func(firstArg,...args)
//   }
// }

// ========================== SOLUTION 1 ======================================
// ================================================================================

const defineFirstArg = (func, firstArg) => (...args) => func(firstArg, ...args);

// Uncomment these to check your work!
const subtract = function (big, small) {
	return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15
