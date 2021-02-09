// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: majority
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

*/

// ========================== SOLUTION ======================================
// ================================================================================

const majority = (arr, callback) => {
	let numOfTrue = 0; // counter to count true result of callback invocation
	for (const ele of arr) {
		if (callback(ele)) {
			numOfTrue++;
		}
	}
	return arr.length / 2 < numOfTrue; // return check if majority is true
};

// Uncomment these to check your work!
const isOdd = function (num) {
	return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const majority = (arr, callback) => {};
