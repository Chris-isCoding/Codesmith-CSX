// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: Passing Arguments
Examine the code given to you. Determine what arguments must be passed into isX1 and isX2 respectively to obtain an output of true for both, and pass in the arguments accordingly.

*/

// ========================== SOLUTION ======================================
// ================================================================================

const x = 3;

function isX1(num) {
	const x = 5;
	return num === x;
}

function isX2(num) {
	return num === x;
}

const one = isX1(5);
const two = isX2(3);

// Uncomment these to check your work!
console.log(one); // should log: true
console.log(two); // should log: true
