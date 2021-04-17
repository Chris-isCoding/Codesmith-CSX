// console.log('Hello, world!');

// ============================== CHALLENGE 1  ==============================
// ==========================================================================

/*

Create a function addTwo that accepts one input and adds 2 to it.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

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

// ============================== SOLUTION 1 ==============================
// ==========================================================================

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

// ============================== SOLUTION 1 ==============================
// ==========================================================================

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

// ============================== SOLUTION 1 ==============================
// ==========================================================================

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

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function reduce(...args) {
	if (args.length <= 1) {
		console.log(`Missing argument`);
		return;
	}
	if (args.length > 1) {
		if (Array.isArray(args[0]) === false) {
			console.log(`Expected an array, got ${args[0]}`);
			return;
		}
		if (typeof args[1] !== 'function') {
			console.log(`${args[1]} is not a function`);
			return;
		}
	}
	if (args[0].length === 0 && args.length < 3) {
		console.log(`Reduce of empty array with no initial value`);
		return;
	}
	if (args[0].length === 0 && args.length >= 3) {
		return args[2];
	}
	let i = 0;
	let accumulator;
	if (args.length > 2) {
		accumulator = args[2];
	} else {
		while (!(i in args[0]) && i < args[0].length) {
			if (i === args[0].length - 1) {
				console.log(`Reduce of empty array with no initial value`);
				return;
			}
			i++;
		}
		if (i in args[0]) {
			accumulator = args[0][i];
			i++;
		}
	}
	while (i < args[0].length) {
		if (i in args[0]) {
			accumulator = args[1](accumulator, args[0][i]);
		}
		i++;
	}
	return accumulator;
}

// ============================== SOLUTION 2 ==============================
// ==========================================================================

function reduce(array, callback, initialValue) {
	if (Array.isArray(array)) {
		let i = 0;
		let accumulatorValue;
		if (arguments.length < 3) {
			accumulatorValue = array[0];
			i++;
		} else {
			accumulatorValue = initialValue;
		}
		// console.log(i);
		for (; i < array.length; i++) {
			accumulatorValue = callback(accumulatorValue, array[i]);
		}
		return accumulatorValue;
	}
}

// uncomment these to check your work
const nums = [4, 1, 3];
const add = function (a, b) {
	return a + b;
};

// console.log(reduce(nums, add, 0)); //-> 8

// ============================== CHALLENGE 7  ==============================
// ==========================================================================

/*

Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

// function intersection(...arrays) {
// 	return arrays[0].reduce((acc, cur) => {
// 		if (acc.indexOf(cur) === -1 && arrays.every(array => array.indexOf(cur) !== -1)) {
// 			acc.push(cur);
// 		}
// 		return acc;
// 	}, []);
// }

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

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
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

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
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

// console.log(
// 	objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) {
// 		return str.toUpperCase();
// 	})
// );

// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// ============================== CHALLENGE 10  ==============================
// ==========================================================================

/*

Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

// function multiMap(arrVals, arrCallbacks) {
//   const obj = {};
//   for (const ele of arrVals) {
//     for (const func of arrCallbacks) {
//       if (obj.hasOwnProperty(ele)) {
//         obj[ele].push(func(ele))
//       } else {
//         obj[ele] = [func[ele]]
//       }
//     }
//   }
//   return obj;
// }

// ============================== SOLUTION 2  ==============================
// ==========================================================================

const multiMap = (arrVal, arrCb) => arrVal.reduce((acc, cur) => ((acc[cur] = arrCb.map(cb => cb(cur))), acc), {});

// console.log(
// 	multiMap(
// 		['catfood', 'glue', 'beer'],
// 		[
// 			function (str) {
// 				return str.toUpperCase();
// 			},
// 			function (str) {
// 				return str[0].toUpperCase() + str.slice(1).toLowerCase();
// 			},
// 			function (str) {
// 				return str + str;
// 			},
// 		]
// 	)
// );

// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// ============================== CHALLENGE 11  ==============================
// ==========================================================================

/*

Construct a function objectFilter that accepts an object as the first parameter and a callback function as the second parameter. objectFilter will return a new object. The new object will contain only the properties from the input object such that the property's value is equal to the property's key passed into the callback.

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

// function objectFilter(obj, callback) {
// 	const newObj = {};
// 	for (const key in obj) {
// 		if (obj[key] === callback(key)) {
// 			newObj[key] = obj[key];
// 		}
// 	}
// 	return newObj;
// }

// ============================== SOLUTION 2  ==============================
// ==========================================================================

const objectFilter = (obj, cb) => Object.keys(obj).reduce((acc, cur) => (cb(cur) === obj[cur] ? ((acc[cur] = obj[cur]), acc) : acc), {});

const cities = {
	London: 'LONDON',
	LA: 'Los Angeles',
	Paris: 'PARIS',
};

// console.log(objectFilter(cities, city => city.toUpperCase())); // Should log { London: 'LONDON', Paris: 'PARIS'}

// ============================== CHALLENGE 12  ==============================
// ==========================================================================

/*

Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

const majority = (arr, cb) => arr.filter(ele => cb(ele)).length > arr.length / 2;

// /*** Uncomment these to check your work! ***/

const isOdd = function (num) {
	return num % 2 === 1;
};

// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// ============================== CHALLENGE 13  ==============================
// ==========================================================================

/*

Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function prioritize(array, callback) {
// 	const trueArr = [];
// 	const falseArr = [];
// 	for (const ele of array) {
// 		if (callback(ele)) {
// 			trueArr.push(ele);
// 		} else {
// 			falseArr.push(ele);
// 		}
// 	}
// 	return trueArr.concat(falseArr);
// }

// ============================== SOLUTION 2  ==============================
// ==========================================================================

const prioritize = (arr, cb) => {
	let trueCounter = 0;
	return arr.reduce((acc, cur) => (cb(cur) ? (acc.splice(trueCounter++, 0, cur), acc) : (acc.push(cur), acc)), []);
};

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
	return str[0] === 's' || str[0] === 'S';
};

// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends'];

// ============================== CHALLENGE 14  ==============================
// ==========================================================================

/*

Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

const countBy = (arr, cb) =>
	arr.reduce((acc, cur) => {
		const key = cb(cur);
		return key in acc ? (acc[key]++, acc) : ((acc[key] = 1), acc);
	}, {});

// /*** Uncomment these to check your work! ***/

// console.log(
// 	countBy([1, 2, 3, 4, 5], function (num) {
// 		if (num % 2 === 0) return 'even';
// 		else return 'odd';
// 	})
// ); // should log: { odd: 3, even: 2 }

// ============================== CHALLENGE 15  ==============================
// ==========================================================================

/*

Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

*/

function groupBy(array, callback) {
	return array.reduce((acc, cur) => {
		const key = callback(cur);
		return key in acc ? (acc[key].push(cur), acc) : ((acc[key] = [cur]), acc);
	}, {});
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// ============================== CHALLENGE 16  ==============================
// ==========================================================================

/*

Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function goodKeys(obj, callback) {
// 	const outputArr = [];
// 	for (const [key, value] of Object.entries(obj)) {
// 		if (callback(value)) {
// 			outputArr.push(key);
// 		}
// 	}
// 	return outputArr;
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const goodKeys = (obj, cb) => Object.keys(obj).reduce((arr, key) => (cb(obj[key]) ? (arr.push(key), arr) : arr), []);

// /*** Uncomment these to check your work! ***/
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function (str) {
	return str.slice(0, 4).toLowerCase() === 'bird';
};

// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// ============================== CHALLENGE 17  ==============================
// ==========================================================================

/*

Create a function commutative that accepts two callbacks and a value. commutative will return a boolean indicating if the passing the value into the first function, and then passing the resulting output into the second function, yields the same output as the same operation with the order of the functions reversed (passing the value into the second function, and then passing the output into the first function).

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function commutative(func1, func2, value) {
	return func2(func1(value)) === func1(func2(value));
}

// /*** Uncomment these to check your work! ***/
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// ============================== CHALLENGE 18 =============================
// ==========================================================================

/*

Create a function objFilter that accepts an object and a callback. objFilter should make a new object, and then iterate through the passed-in object, using each key as input for the callback. If the output from the callback is equal to the corresponding value, then that key-value pair is copied into the new object. objFilter will return this new object.

*/

// function objFilter(obj, callback) {
// 	const newObj = {};
// 	for (const [key, value] of Object.entries(obj)) {
// 		if (callback(key) === value) {
// 			newObj[key] = value;
// 		}
// 	}
// 	return newObj;
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const objFilter = (obj, cb) => Object.keys(obj).reduce((newObj, key) => (cb(key) === obj[key] ? ((newObj[key] = obj[key]), newObj) : newObj), {});

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;

// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// ============================== CHALLENGE 19 ============================
// ==========================================================================

/*

Create a function rating that accepts an array (of functions) and a value. All the functions in the array will return true or false. rating should return the percentage of functions from the array that return true when the value is used as input.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function rating(arrOfFuncs, value) {
// 	return (arrOfFuncs.filter(func => func(value)).length / arrOfFuncs.length) * 100;
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const rating = (funcs, value) => (funcs.filter(func => func(value)).length / funcs.length) * 100;

// /*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];

// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// ============================== CHALLENGE 20  ==============================
// ==========================================================================

/*

Create a function pipe that accepts an array (of functions) and a value. pipe should input the value into the first function in the array, and then use the output from that function as input for the second function, and then use the output from that function as input for the third function, and so forth, until we have an output from the last function in the array. pipe should return the final output.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function pipe(arrOfFuncs, value) {
//   return arrOfFuncs.reduce((output, func) => func(output), arrOfFuncs[0](value));
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const pipe = (funcs, value) => funcs.reduce((output, func) => func(output), funcs[0](value));

// /*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];

// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// ============================== CHALLENGE 21  ==============================
// ==========================================================================

/*

Create a function highestFunc that accepts an object (which will contain functions) and a subject (which is any value). highestFunc should return the key of the object whose associated value (which will be a function) returns the largest number, when the subject is given as input.

*/

// function highestFunc(objOfFuncs, subject) {
// 	const temp = [-1 / 0];
// 	for (const [key, func] of Object.entries(objOfFuncs)) {
// 		const output = func(subject);
// 		if (output > temp[0]) {
// 			temp.length = 0;
// 			temp.push(output, key);
// 		}
// 	}
// 	return temp[1];
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const highestFunc = (objFuncs, subject) =>
	Object.keys(objFuncs).reduce(
		(acc, key) => {
			const output = objFuncs[key](subject);
			return output > acc.highest ? ((acc.highest = output), (acc.func = key), acc) : acc;
		},
		{ highest: -1 / 0 }
	).func;

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;

console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// ============================== CHALLENGE 22  ==============================
// ==========================================================================

/*

Create a function, combineOperations, that takes two parameters: a starting value and an array of functions. combineOperations should pass the starting value into the first function in the array. combineOperations should pass the value returned by the first function into the second function, and so on until every function in the array has been called. combineOperations should return the final value returned by the last function in the array.

*/

function combineOperations(startVal, arrOfFuncs) {}

function add100(num) {
	return num + 100;
}

function divByFive(num) {
	return num / 5;
}

function multiplyByThree(num) {
	return num * 3;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10

// ============================== CHALLENGE 23  ==============================
// ==========================================================================

/*

Define a function myFunc that takes an array and a callback. myFunc should pass each element from the array (in order) into the callback. If the callback returns true, myFunc should return the index of the current element. If the callback never returns true, myFunc should return -1;

*/
function myFunc(array, callback) {}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

// function isOdd(num) {
// 	return num % 2 !== 0;
// }

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1

// ============================== CHALLENGE 24  ==============================
// ==========================================================================

/*

Write a function myForEach that accepts an array and a callback function. Your function should pass each element of the array (in order) into the callback function. The behavior of this function should mirror the functionality of the native .forEach() JavaScript array method as closely as possible.

*/

function myForEach(array, callback) {}

let sum = 0;

function addToSum(num) {
	sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log(sum); // Should output 6
