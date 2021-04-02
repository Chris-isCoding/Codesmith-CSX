// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: forEach
Recreate the built in array method, forEach - Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.

Create a variable named delays and assign to it an array with the numbers 200, 500, 0, and 350 (in that order).

Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).

Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.


*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

const forEach = (arr, cb) => {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i], i);
	}
};

const delays = [200, 500, 0, 350];

function delayLog(delayTime, i) {
	setTimeout(() => console.log(`printing element ${i}`), delayTime);
}

forEach(delays, delayLog); // invoking forEach function declared before
