// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: For Loops - Updating Array Elements
Using a FOR loop, write a function addN which adds the argument n to each number in the array arr and returns the updated arr.

*/

// ========================== SOLUTION ======================================
// ================================================================================

function addN(arr, n) {
	for (const index in arr) {
		arr[index] += n;
	}
	return arr;
}

// Uncomment these to check your work!
console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]
