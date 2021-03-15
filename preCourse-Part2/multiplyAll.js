// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Create a function multiplyAll that takes an unknown number of integer arguments, multiplies them all together, and returns the result.

// ======== FIRST SOLUTION ========
// ==================================

// function multiplyAll() {
//   const arrNum = Array.from(arguments);
//   // console.log(arrNum)
//   let product = 1; //  The result of a multiplication operation is called a product.
//   for (let element of arrNum) {
//     product *= element;
//   }
//   return product;
// }

// ======== SECOND SOLUTION ========
// ==================================

const multiplyAll = (...args) => {
	const arr = args;
	// console.log(arr)
	let product = 1; //  The result of a multiplication operation is called a product.
	for (let element of arr) {
		product *= element;
	}
	return product;
};

// Uncomment these to check your work!
console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)); // should log: 362880
console.log(multiplyAll(5, 5, 5, 3)); // should log: 375
