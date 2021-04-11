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

// ============================== SOLUTION 3  ==============================
// ==========================================================================

const intersection = (...arrays) => arrays.reduce((acc, cur) => acc.filter(ele => cur.includes(ele)), [...new Set(arrays[0])]);

// const arrays = [[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]
// console.log(arrays.every(array => array.indexOf(4) !== -1))

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

// ============================== CHALLENGE 8  ==============================
// ==========================================================================

/*

Construct a function union that compares input arrays and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS: Use reduce!

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

function union(...arrays) {
	return arrays
		.reduce((accArr, curArr) => accArr.concat(curArr))
		.reduce((acc, curEle) => {
			if (!acc.includes(curEle)) {
				acc.push(curEle);
			}
			return acc;
		}, []);
}

// ============================== SOLUTION 2  ==============================
// ==========================================================================

// const union = (...arrays) => arrays
//   .reduce((acc, cur) => acc.concat(cur))
//   .reduce((result, ele) => !result.includes(ele) ? (result.push(ele), result) : result, []);

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// ============================== CHALLENGE 9  ==============================
// ==========================================================================

/*

Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

// function objOfMatches(array1, array2, callback) {
//   const obj = {};
//   for (const i in array1) {
//     if (callback(array1[i]) === array2[i]) {
//       obj[array1[i]] = array2[i]
//     }
//   }
//   return obj;
// }

// ============================== SOLUTION 2  ==============================
// ==========================================================================

const objOfMatches = (arr1, arr2, cb) => arr1.reduce((acc, cur, i) => (cb(cur) === arr2[i] ? ((acc[cur] = arr2[i]), acc) : acc), {});

console.log(
	objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) {
		return str.toUpperCase();
	})
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
