// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

The function reduce takes an array and reduces the elements to a single value.

The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0); //-> 8

Here's how it works:
The function has an "accumulator value". Its job is to keep track of the accumulated output of each loop. It starts out equal to the initialValue.
The array is iterated over, passing the accumulator and the next array element as arguments to the callback.
The callback's return value becomes the new accumulator value.
The next loop executes with this new accumulator value.
In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) makes it 5. Finally add(5, 3) brings it to 8, which is returned.

Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function reduce(array, callback, initialValue) {
// 	let accumulatorValue = initialValue;
// 	for (let i = 0; i < array.length; i++) {
// 		accumulatorValue = callback(accumulatorValue, array[i]);
// 	}
// 	return accumulatorValue;
// }

// // Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function (a, b) {
// 	return a + b;
// };
// console.log(reduce(nums, add, 0)); // should log 8

// ========================== SOLUTION 2 ======================================
// ================================================================================

// function reduce(array, callback, initialValue) {
// 	if (Array.isArray(array)) {
// 		let accumulatorValue;
// 		if (initialValue === 'undefined') {
// 			accumulatorValue = arrray[0];
// 			for (let i = 1; i < array.length; i++) {
// 				accumulatorValue = callback(accumulatorValue, array[i]);
// 				return accumulatorValue;
// 			}
// 		}
// 		accumulatorValue = initialValue;
// 		for (let i = 0; i < array.length; i++) {
// 			accumulatorValue = callback(accumulatorValue, array[i]);
// 		}
// 		return accumulatorValue;
// 	}
// 	return 'Please pass an array as the first argument';
// }

// // Uncomment these to check your work!
// const nums = [4, 1, 3];
// const add = function (a, b) {
// 	return a + b;
// };

// console.log(reduce(nums, add, 0)); // should log 8

// ========================== SOLUTION 3 ======================================
// ================================================================================

function reduce(array, callback, initialValue) {
	if (Array.isArray(array)) {
		let accumulatorValue;
		let i;
		if (initialValue === 'undefined') {
			accumulatorValue = arrray[0];
			i = 1;
		} else {
			//often we can skip else but in the case like this is mandatory for our code to execute correctly
			i = 0;
			accumulatorValue = initialValue;
		}
		for (; i < array.length; i++) {
			accumulatorValue = callback(accumulatorValue, array[i]);
		}
		return accumulatorValue;
	}
	return 'Please pass an array as the first argument';
}

// Uncomment these to check your work!
const nums = [4, 1, 3];
const add = function (a, b) {
	return a + b;
};

console.log(reduce(nums, add, 0)); // should log 8
