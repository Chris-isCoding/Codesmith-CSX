// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: countBy
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

*/

// ========================== SOLUTION ======================================
// ================================================================================

// const countBy = (arr, callback) => {
// 	// const obj = {};
// 	const resultArr = [];
// 	for (const ele of arr) {
// 		resultArr.push(callback(ele));
// 	}
// 	const obj = resultArr.reduce((acc, ele) => {
// 		acc[ele] = acc[ele] ? acc[ele] + 1 : 1;
// 		return acc;
// 	}, {});
// 	return obj;
// };

// // Uncomment these to check your work!
// function evenOdd(n) {
// 	if (n % 2 === 0) return 'even';
// 	else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const countBy = (arr, callback) =>
// 	arr
// 		.map((ele) => callback(ele))
// 		.reduce((acc, ele) => {
// 			acc[ele] = acc[ele] ? acc[ele] + 1 : 1;
// 			return acc;
// 		}, {});

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function countBy(array, callback) {
//   const result = {};
//   array.forEach((num) => {
//     result[callback(num)] = result[callback(num)]
//       ? result[callback(num)] + 1
//       : 1;
//   });
//   return result;
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

// function countBy(array, callback) {
//   const obj = {};
//   for (const ele of array) {
//     obj[callback(ele)] = obj[callback(ele)] ? obj[callback(ele)] + 1 : 1;
//   }
//   return obj;
// }

// ========================== SOLUTION 5 ======================================
// ================================================================================

// function countBy(array, callback) {
//   const obj = {};
//   for (const ele of array) {
//     const key = callback(ele);
//     obj[key] = obj[key] ? obj[key] + 1 : 1;
//   }
//   return obj;
// }

// ========================== SOLUTION 6 ======================================
// ================================================================================

// function countBy(array, callback) {
//   const obj = {};
//   array.forEach(ele => {
//     const key = callback(ele);
//     obj[key] = obj[key] ? obj[key] + 1 : 1;
//   });
//   return obj;
// }

// ========================== SOLUTION 7 ======================================
// ================================================================================

// function countBy(array, callback) {
//   const obj = {};
//   array.map(ele => callback(ele)).forEach(key => (obj[key] = 1 + (obj[key] || 0)))
//   return obj;
// }

// ========================== SOLUTION 8 ======================================
// ================================================================================

const countBy = (arr, callback) =>
	arr.reduce((acc, ele) => {
		const key = callback(ele);
		if (acc[key] === undefined) {
			acc[key] = 1;
		} else {
			acc[key]++;
		}
		// acc[key] = acc[key] ? acc[key] + 1 : 1;
		return acc;
	}, {});

// Uncomment these to check your work!
function evenOdd(n) {
	console.log(n);
	if (n % 2 === 0) return 'even';
	else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

// Uncomment these to check your work!
function evenOdd(n) {
	if (n % 2 === 0) return 'even';
	else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
