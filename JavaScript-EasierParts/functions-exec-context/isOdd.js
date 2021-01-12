// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: isOdd
Create a function isOdd that accepts a number argument. isOdd will return true if the number is odd and false if the number is even.

*/

// ========================== SOLUTION ======================================
// ================================================================================

//======== FIRST SOLUTION ========
//================================

// function isOdd(num) {
//   if (num % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

//======== SECOND SOLUTION ========
//=================================

// function isOdd(num) {
//   return num % 2 !== 0;
// }

//======== TERNARY OPERATOR ========
//==================================

function isOdd(num) {
	return num % 2 ? true : false;
}

// Uncomment these to check your work!
console.log(isOdd(5)); // should log: true
console.log(isOdd(2008)); // should log: false
