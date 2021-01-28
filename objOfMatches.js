// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: objOfMatches

Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

*/

// ========================== SOLUTION ======================================
// ================================================================================

function objOfMatches(arr1, arr2, callback) {
	const obj = {};
	for (let ele in arr1) {
		// console.log(callback(arr1[ele]))
		if (callback(arr1[ele]) === arr2[ele]) {
			obj[arr1[ele]] = arr2[ele];
		}
	}
	return obj;
}

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) {
	return str.toUpperCase();
}
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }
