// ============================== INSTRUCTIONS ==============================
// ===============================================================================

/*

Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

*/

// ========================== SOLUTION 1 ======================================
// ===============================================================================

// function intersection(arrayOfArrays) {
//   const result = arrayOfArrays[0].reduce(function(accumulatorArray, currentArrayElement) {
//     if (accumulatorArray.indexOf(currentArrayElement) === -1 && arrayOfArrays.every(function(nextArray) {
// 			//if element is not present in the accumulator array and for every array check if element is present
//       // console.log(nextArray.indexOf(currentArrayElement) !== -1)
//       return nextArray.indexOf(currentArrayElement) !== -1;
//     })) accumulatorArray.push(currentArrayElement);
//     return accumulatorArray;
//   }, []); //empty array as initial value
//   return result;
// }

// ========================== SOLUTION 2 ======================================
// ===============================================================================

const intersection = arrays =>
	arrays[0].reduce((acc, cur) => {
		if (acc.indexOf(cur) === -1 && arrays.every(arr => arr.indexOf(cur) !== -1)) {
			acc.push(cur);
		}
		return acc;
	}, []);

// ========================== SOLUTION 3 ======================================
// ===============================================================================

const intersection = arrays => {
	const result = arrays[0].reduce((acc, curEl) => {
		if (!acc.includes(curEl) && arrays.every(array => array.includes(curEl))) {
			acc.push(curEl);
		}
		return acc;
	}, []);
	return result;
};

// ========================== SOLUTION 4 ======================================
// ===============================================================================

// VERY BAD solution, modifying inout arrays - not recommended

function intersection(arrays) {
	let acc = arrays.pop();
	while (arrays.length) {
		const current = arrays.pop();
		const newArr = [];
		current.forEach(ele => {
			if (acc.includes(ele) && !newArr.includes(ele)) newArr.push(ele);
		});
		acc = newArr;
	}
	return acc;
}

// ========================== SOLUTION 5 ======================================
// ===============================================================================

function intersection(arrays) {
	let acc = arrays[0];
	for (let i = 1; i < arrays.length; i++) {
		const tempArr = [];
		arrays[i].forEach(ele => {
			if (acc.indexOf(ele) !== -1 && tempArr.indexOf(ele) === -1) {
				tempArr.push(ele);
			}
		});
		acc = tempArr;
	}
	return acc;
}

// ========================== SOLUTION 5A ======================================
// ===============================================================================

function intersection(arrays) {
	let acc = arrays[0];
	let i = 0;
	while (i < arrays.length) {
		const tempArr = [];
		arrays[i].forEach(ele => {
			if (acc.includes(ele) && !tempArr.includes(ele)) {
				tempArr.push(ele);
			}
		});
		acc = tempArr;
		i++;
	}
	return acc;
}

// ========================== SOLUTION 6 ======================================
// ===============================================================================
// only works if elements in the arrays don't repeat

const intersection = arrays => {
	const freqCounter = {};
	const flattened = arrays.flat();
	for (const ele of flattened) {
		freqCounter[ele] = freqCounter[ele] ? freqCounter[ele] + 1 : 1;
	}
	const newArr = [];
	for (const [key, value] of Object.entries(freqCounter)) {
		if (value === arrays.length) newArr.push(key * 1);
	}
	return newArr;
};

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
// console.log(arr3)
