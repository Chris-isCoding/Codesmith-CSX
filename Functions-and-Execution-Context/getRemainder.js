// ============================== INSTRUCTIONS ==============================
// =============================================================================

/*
Challenge: getRemainder
Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.

Hint- You have no guarantee which number will be the bigger number, how can you determine which is which?

*/

// ========================== SOLUTION 1 ======================================
// =============================================================================

// function getRemainder(num1, num2) {
//   if (num1 > num2) {
//     return num1 % num2;
//   }
//   return num2 % num1;
// }

// ========================== SOLUTION 2 ======================================
// =============================================================================

// ======== TERNARY OPERATOR && ARROW FUNCTION && BUILD IN MATH METHODS =======
// =============================================================================
const getRemainder = (num1, num2) =>
  Math.max(num1, num2) % Math.min(num1, num2);

// Uncomment the lines below to test your code
console.log(getRemainder(17, 5)); // => 2
console.log(getRemainder(20, 5)); // => 0
console.log(getRemainder(8, 22)); // => 6
console.log(getRemainder(7, 42)); // => 0
