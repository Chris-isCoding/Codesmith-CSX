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
//     const key = callback(ele);
//     if (key in obj) {
//       obj[key].push(ele);
//     } else {
//       obj[key] = [ele]; // one element array
//     }
//   }
//   return obj;
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const groupBy = (array, callback) => {
//   const obj = {};
//   for (const ele of array) {
//     const key = callback(ele);
//     !(key in obj) ? obj[key] = [ele] : obj[key].push(ele)
//   }
//   return obj;
// }

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function groupBy(array,callback) {
//   const obj = {};
//   array.forEach(ele => {
//     const key = callback(ele);
//     key in obj ? obj[key].push(ele) : obj[key] = [ele];
//   })
//   return obj;
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

// function groupBy(array, callback) {
// 	const obj = {};
// 	array.map((ele) => {
//     const key = callback(ele)
// 		obj.hasOwnProperty(key) ? obj[callback(ele)].push(ele) : (obj[callback(ele)] = [ele]);
// 	});
// 	return obj;
// }

// ========================== SOLUTION 5 ======================================
// ================================================================================

function groupBy(array, callback) {
	return array.reduce((accObj, curEle) => {
		const key = callback(curEle);
		if (accObj[key] === undefined) {
			accObj[key] = [curEle];
		} else {
			accObj[key].push(curEle);
		}
		return accObj;
	}, {});
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
	return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
