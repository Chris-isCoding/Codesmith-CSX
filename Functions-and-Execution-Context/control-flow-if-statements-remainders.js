// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: Control Flow - if statements & remainders
Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even or 'I am too normal for odd numbers' if the argument is odd.

*/

// ========================== SOLUTION ======================================
// ================================================================================

//======== FIRST SOLUTION ========
//================================

// function iLoveEvenNumbers(num) {
//   if (num % 2 === 0) {
//     return 'Oh Yeah Evens!'
//   } else {
//     return 'I am too normal for odd numbers'
//   }
// }

//======== TERNARY OPERATOR ======
//================================

//======== SECOND SOLUTION ========
//================================
// const iLoveEvenNumbers = num => num % 2 === 0 ? 'Oh Yeah Evens!' : 'I am too normal for odd numbers';

//======== THIRD SOLUTION ========
//================================

const iLoveEvenNumbers = (num) =>
	num % 2 ? 'I am too normal for odd numbers' : 'Oh Yeah Evens!'; // 0 is falsy

// Uncomment these to check your work!
console.log(iLoveEvenNumbers(42)); // expected log 'Oh Yeah Evens!'
console.log(iLoveEvenNumbers(17)); // expected log 'I am too normal for odd numbers'
