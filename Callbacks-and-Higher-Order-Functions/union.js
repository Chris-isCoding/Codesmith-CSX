// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: union

Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function union(arrOfArrays) {
// 	const oneArray = arrOfArrays.reduce(function (accumulatorArr, currentArray) {
// 		return accumulatorArr.concat(currentArray);
// 	}, []);
// 	// console.log(oneArray);
// 	const removedDuplicatesArray = oneArray.reduce(function (accumulatorArr, currentElement) {
// 		if (accumulatorArr.indexOf(currentElement) === -1) {
// 			// if element does not repeat
// 			accumulatorArr.push(currentElement); // push it to accumulatorArr
// 		}
// 		return accumulatorArr;
// 	}, []); // empty arr as a initialValue
// 	return removedDuplicatesArray;
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const union = function(arrays) {
//   const flattened = arrays.reduce(function (acc, currVal) {
//     return acc.concat(currVal);
//   });
//   const filtered = flattened.filter(function (cur, index) {
//     return flattened.indexOf(cur) === index;
//   });
//   return filtered;
// };

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function union(arrOfArrays) {
// 	const result = arrOfArrays
// 		.reduce(function (accumulatorArr, currentArray) {
// 			return accumulatorArr.concat(currentArray);
// 		})
// 		.reduce(function (accumulatorArr, currentElement) {
// 			if (accumulatorArr.indexOf(currentElement) === -1) {
// 				// if element does not repeat
// 				accumulatorArr.push(currentElement); // push it to accumulatorArr
// 			}
// 			return accumulatorArr;
// 		}, arrOfArrays[0]); // first arr as a initialValue
// 	return result;
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

// const union = arrays => arrays.reduce((acc, cur) => acc.concat(cur)).reduce((arr, ele) => {
//     if (arr.indexOf(ele) === -1) {
//       arr.push(ele);
//     }
//     return arr
//   }, arrays[0]); // first array in arrays

// ========================== SOLUTION 5 ======================================
// ================================================================================

// const union = arrays => [...new Set(arrays.flat())];

// ========================== SOLUTION 6 ======================================
// ================================================================================

function union(arrays) {
	return arrays.reduce(function (accum, cur) {
		// console.log(cur)
		cur.forEach(function (el) {
			if (accum.includes(el) === false) {
				accum.push(el);
				// console.log(accum)
			}
		});
		return accum;
	});
}

// ========================== SOLUTION 7 ======================================
// ================================================================================

const union = (arrays) =>
	arrays.reduce((acc, cur) => {
		cur.forEach((el) => {
			if (!acc.includes(el)) {
				acc.push(el);
			}
		});
		return acc;
	});

// // Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
