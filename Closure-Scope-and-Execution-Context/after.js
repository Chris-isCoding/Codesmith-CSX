// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: after

Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

function after(num, callback) {
	const counter = [];
	return function (...args) {
		counter.push('ready?');
		if (counter.length >= num) {
			return callback(...args);
		}
	};
}

const called = function (string) {
	return 'hello ' + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
