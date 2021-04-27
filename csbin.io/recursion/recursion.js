// console.log('Hello, world!');

// ============================== CHALLENGE 1  ==============================
// ==========================================================================

/*

Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function countdown(n) {
	// n is positive integer
	if (n === 0) return;
	console.log(n);
	return countdown(n - 1);
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);

// ============================== CHALLENGE 2  ==============================
// ==========================================================================

/*

Write a recursive function sum that calculates the sum of an array of integers.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function sum(array) {
// 	function sumHelper(i, sum) {
// 		if (!(i in array)) return sum;
// 		return sumHelper(i + 1, (sum += array[i]));
// 	}
// 	return sumHelper(0, 0);
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const sum = array => {
	const sumHelper = i => (array[i] === undefined ? 0 : array[i] + sumHelper(i + 1));
	return sumHelper(0);
};

// uncomment these to check your work
// console.log(sum([1, 1, 1])); // -> returns 3
// console.log(sum([1, 2, 3, 4, 5, 6])); // -> returns 21

// ============================== CHALLENGE 3  ==============================
// ==========================================================================

/*

Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function palindrome(string) {
// 	const palindromeHelper = str => {
// 		if (!str.length) return true;
// 		if (str[0] !== str[str.length - 1]) return false;
// 		return palindromeHelper(str.slice(1, -1));
// 	};
// 	return palindromeHelper(string.replaceAll(/[\p{P}\p{S}\s]/gu, '').toLowerCase());
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const palindrome = string => {
	const stripped = string.replace(/[\p{P}\p{S}\s]/gu, '').toLowerCase();
	const paliHelper = i => {
		if (i === stripped.length) return true;
		if (stripped[i] !== stripped[stripped.length - i - 1]) return false;
		return paliHelper(i + 1);
	};
	return paliHelper(0);
};

// console.log(palindrome('Anne, I vote more cars race Rome-to-Vienna')); //-> true
// console.log(palindrome('llama mall')); //-> true
// console.log(palindrome('jmoney')); //-> false

// ============================== CHALLENGE 4  ==============================
// ==========================================================================

/*

Write a recursive function isPrime that determines if a number is prime and returns true if it is.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function isPrime(num) {
	if (num < 2) return false;
	if (num % 2 === 0) return num === 2;
	const isPrimeHelper = i => {
		if (num % i) return num === i;
		if (num / i < i) return true;
		return isPrimeHelper(i + 2);
	};
	return isPrimeHelper(3);
}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false

// ============================== CHALLENGE 5  ==============================
// ==========================================================================

/*

Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.

const obj = {first:{second:{third:"finish"}}, second:{third:"wrong"}};
const arr = ["first","second","third"];
pathFinder(obj,arr);   //-> "finish"


*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function pathFinder(obj, arr) {
// 	if (!arr.length) return obj;
// 	if (!(arr[0] in obj)) return undefined;
// 	return pathFinder(obj[arr[0]], arr.slice(1));
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const pathFinder = (obj, arr) => {
	const pathFinderHelper = (obj, i) => (i === arr.length || obj === undefined ? obj : pathFinderHelper(obj[arr[i]], i + 1));
	return pathFinderHelper(obj, 0);
};

const obj = { first: { second: { third: 'finish' } }, second: { third: 'wrong' } };
const arr = ['first', 'second', 'third'];

// console.log(pathFinder(obj, arr)); //-> "finish"
// console.log(pathFinder(obj, [])); //-> obj
// console.log(pathFinder(obj, ['first', '2nd', 'third'])); // -> undefined

// ============================== CHALLENGE 6  ==============================
// ==========================================================================

/*

Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function flattenRecursively(arr) {
	const flatHelper = i => {
		if (i === arr.length) return arr;
		return Array.isArray(arr[i]) ? (arr.splice(i, 1, ...arr[i]), flatHelper(i)) : flatHelper(i + 1);
	};
	return flatHelper(0);
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]

// ============================== CHALLENGE 7  ==============================
// ==========================================================================

/*

Write a recursive function findInOrderedSet that determines if a number is in an ordered array. Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function findInOrderedSet(arr, target) {
	if (arr.length === 0) return `empty array`;
	const findHelper = i => {
		if (arr[i] > target) return false;
		if (arr[i] === target) return true;
		return findHelper(i + 1);
	};
	return findHelper(0);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4)); //-> true
console.log(findInOrderedSet(nums, 2)); //-> false

// ============================== CHALLENGE 8 ==============================
// ==========================================================================

/*

There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See test cases for examples.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function countWaysToReachNthStair(n) {}

// console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
// console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))

// ============================== CHALLENGE 9  ==============================
// ==========================================================================

/*

Given a collection of distinct integers, write a function getPermutations to return all possible permutations.

Input:[1, 2, 3]
Output:[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function getPermutations(arr) {}

// console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
// console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// ============================== CHALLENGE 10 ==============================
// ==========================================================================

/*

Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function getRangeBetween(x, y) {}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
