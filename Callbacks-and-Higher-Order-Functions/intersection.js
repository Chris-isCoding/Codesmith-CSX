// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

*/

// ========================== SOLUTION ======================================
// ================================================================================

function intersection(arrayOfArrays) {
	const result = arrayOfArrays
		.shift()
		.reduce(function (accumulatorArray, currentArrayElement) {
			if (
				accumulatorArray.indexOf(currentArrayElement) === -1 &&
				arrayOfArrays.every(function (nextArray) {
					return nextArray.indexOf(currentArrayElement) !== -1;
				})
			)
				accumulatorArray.push(currentArrayElement);
			return accumulatorArray;
		}, []);
	return result;
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
