// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: groupBy
Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function groupBy(array, callback) {
//   const obj = {};
//   for (const ele of array) {
//     if (obj[callback(ele)]) {
//       obj[callback(ele)].push(ele)
//     } else {
//       obj[callback(ele)] = [ele]
//     }
//   }
//   return obj;
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const groupBy = (array, callback) => {
//   const obj = {};
//   for (const ele of array) {
//     !obj[callback(ele)]? obj[callback(ele)] = [ele] : obj[callback(ele)].push(ele)
//   }
//   return obj;
// }

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function groupBy(array, callback) {
// 	const obj = {};
// 	array.forEach((ele) => {
// 		obj[callback(ele)]
// 			? obj[callback(ele)].push(ele)
// 			: (obj[callback(ele)] = [ele]);
// 	});
// 	return obj;
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

function groupBy(array, callback) {
	const obj = {};
	array.map((ele) => {
		obj[callback(ele)]
			? obj[callback(ele)].push(ele)
			: (obj[callback(ele)] = [ele]);
	});
	return obj;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
	return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
