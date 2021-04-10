// console.log('Hello, world!');

// ============================== CHALLENGE 1  ==============================
// ==========================================================================

/*

Create a function addTwo that accepts one input and adds 2 to it.

*/

function addTwo(num) {
	return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3)); // => 5
// console.log(addTwo(10)); // => 12

// ============================== CHALLENGE 2  ==============================
// ==========================================================================

/*

Create a function addS that accepts one input and adds an "s" to it.

*/

function addS(word) {
	return word + 's';
}

// uncomment these to check your work
// console.log(addS('pizza')); // => pizzas
// console.log(addS('bagel')); // => bagels

// ============================== CHALLENGE 3  ==============================
// ==========================================================================

/*

Create a function called map that takes two inputs:

  1. an array of numbers (a list of numbers)
  2. a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')

Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

  map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
  multiplyByTwo(1); //-> 2
  multiplyByTwo(2); //-> 4

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

// function map(array, callback) {
// 	const newArr = [];
// 	for (const num of array) {
// 		newArr.push(callback(num));
// 	}
// 	return newArr;
// }

// ============================== SOLUTION 2  ==============================
// ==========================================================================

const map = (arr, cb) => arr.map(num => cb(num));

// uncomment these to check your work
// console.log(map([1, 2, 3], addTwo)); // => [3, 4, 5]

// ============================== CHALLENGE 4  ==============================
// ==========================================================================

/*

The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.

  let alphabet = '';
  const letters = ['a', 'b', 'c', 'd'];
  forEach(letters, function(char) {
    alphabet += char;
  });
  console.log(alphabet);   //prints 'abcd'

*/

function forEach(array, callback) {
	for (const ele of array) {
		callback(ele);
	}
}

// test cases // => expected output

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
	alphabet += char;
});
// console.log(alphabet); //prints 'abcd'

// ============================== CHALLENGE 5  ==============================
// ==========================================================================

/*

In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

*/

function mapWith(array, callback) {
	const newArr = [];
	forEach(array, ele => newArr.push(callback(ele)));
	return newArr;
}

// uncomment these to check your work
// console.log(mapWith([1, 2, 3], addTwo)); // => [3, 4, 5]

// ============================== CHALLENGE 6  ==============================
// ==========================================================================

/*

The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
reduce(nums, add, 0);   //-> 8

Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned.

*/

function reduce(array, callback, initialValue) {
	let accumulatorValue = initialValue;
	for (const ele of array) {
		accumulatorValue = callback(accumulatorValue, ele);
	}
	return accumulatorValue;
}

// uncomment these to check your work
const nums = [4, 1, 3];
const add = function (a, b) {
	return a + b;
};
console.log(reduce(nums, add, 0)); //-> 8

// ============================== CHALLENGE 7  ==============================
// ==========================================================================

/*

Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

function intersection(...arrays) {
	return arrays[0].reduce((acc, cur) => {
		if (acc.indexOf(cur) === -1 && arrays.every(array => array.indexOf(cur) !== -1)) {
			acc.push(cur);
		}
		return acc;
	}, []);
}

// ============================== SOLUTION 2  ==============================
// ==========================================================================

// const intersection = (...arrays) => {
// 	const newArr = [];
// 	arrays.forEach(array => {
// 		for (const ele of array) {
// 			if (newArr.indexOf(ele) === -1 && arrays.every(array => array.indexOf(ele) !== -1)) {
// 				newArr.push(ele);
// 			}
// 		}
// 	});
// 	return newArr;
// };

// const arrays = [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]
// console.log(arrays.every(array => array.indexOf(4) !== -1))
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
