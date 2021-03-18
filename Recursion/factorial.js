// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: Factorial

Write a function that returns the factorial of a number.

EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

Input: {Number} num - number whose factorial is sought
Output: {Number}

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function factorial(num, fact = 1) {
//   if (num === 0) return fact;
//   return factorial(num - 1, fact * num)
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

const factorial = (num, fact = 1) =>
	num ? factorial(num - 1, fact * num) : fact;

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
