// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Loops - Summing Two Arrays
// Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.

// ========================== First Solution ==========================
// ====================================================================

function mergingElements(array1, array2) {
	const result = [];
	const value = Math.min(array1.length, array2.length);
	// if one of the arrays is shorter than the other, the sum of 2 elements will be NaN
	for (let i = 0; i < value; i++) {
		result.push(array1[i] + array2[i]);
	}
	return result;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8, 5])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]
