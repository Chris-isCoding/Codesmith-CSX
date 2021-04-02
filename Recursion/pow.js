// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: POW

Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

Input 1: {Number} base - base number raised to the exponent
Input 2: {Number} exponent - exponent the base is raised to
Output: {Number} - expected value of base raised to exponent


*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function pow(base, exponent) {
//   if (exponent === 0) return 1;
//   if (exponent < 0) return (1 / (base * pow(base, -exponent - 1)))
//   return base * pow(base, exponent - 1)
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const pow = (base, exponent) =>
// 	exponent === 0 ? 1
// 		: exponent > 0 ? base * pow(base, exponent - 1)
// 		: 1 / (base * pow(base, -exponent - 1));

// ========================== SOLUTION 3 ======================================
// ================================================================================

function pow(base, exponent, res = 1) {
	if (exponent === 0) return res;
	if (exponent < 0) return pow(1 / base, -exponent - 1, 1 / base);
	return pow(base, exponent - 1, res * base);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
