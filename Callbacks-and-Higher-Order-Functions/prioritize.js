// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: prioritize
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// const prioritize = (arr, callback) => {
//   const trueArr = [];
//   const falseArr = [];
//   arr.forEach(ele => callback(ele) === true ? trueArr.push(ele) : falseArr.push(ele))
//   return trueArr.concat(falseArr);
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const prioritize = (arr, callback) => arr.filter(ele => callback(ele)).concat(arr.filter(ele => callback(ele) === false))

// ========================== SOLUTION 3 ======================================
// ================================================================================

// const prioritize = (array, callback) => {
//   const resultArray = [];
//   const trueArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i]) === true) {
//       trueArray.push(array[i])
//     } else {
//       resultArray.push(array[i])
//     }
//   }
//   resultArray.unshift(...trueArray)
//   return resultArray
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

// function prioritize(array, callback) {
//   const result = array.reduce((acc, item) => {
//     if (callback(item) === true) {
//       acc.true.push(item);
//     } else if (callback(item) === false) {
//       acc.false.push(item)
//     }
//     return acc;
//   }, { true: [], false: []} );
//   return [...result[true], ...result[false]];
// }

// ========================== SOLUTION 5 ======================================
// ================================================================================

// function prioritize(array, callback) {
//   const result = array.reduce((acc, item) => {
//     if (callback(item) === true) {
//       acc[0].push(item);
//     } else if (callback(item) === false) {
//       acc[1].push(item)
//     }
//     return acc;
//   }, [[], []] );
//   return result.flat();
// }

// ========================== SOLUTION 6 ======================================
// ================================================================================

// function prioritize(array, callback) {
//   let trueCounter = 0;
//   return array.reduce((acc, item) => {
//     if (callback(item) === true) {
//       acc.splice(trueCounter++, 0, item);
//     } else if (callback(item) === false) {
//       acc.push(item)
//     }
//     return acc;
//   }, []);
//   return result;
// }

// ========================== SOLUTION 7 ======================================
// ================================================================================

// const prioritize = (array, callback) => {
//   const prioritizeHelper = (trueCounter) => array.reduce((acc, item) => {
//     if (callback(item) === true) {
//       acc.splice(trueCounter++, 0, item);
//     } else if (callback(item) === false) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
//   return prioritizeHelper(0);
// }

// ========================== SOLUTION 8 ======================================
// ================================================================================

const prioritize = (array, callback) => {
	const prioritized = [];
	let trueCounter = 0;
	array.forEach(ele => {
		if (callback(ele) === true) {
			prioritized.splice(trueCounter++, 0, ele);
		} else if (callback(ele) === false) {
			prioritized.push(ele);
		}
	});
	return prioritized;
};

// Uncomment these to check your work!
function startsWithS(str) {
	return str[0].toLowerCase() === 's';
}
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'];
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

const isOdd = num => num % 2 === 0;
const numbers = [7, 6, 5, 8, 4];

console.log(prioritize(numbers, isOdd));
