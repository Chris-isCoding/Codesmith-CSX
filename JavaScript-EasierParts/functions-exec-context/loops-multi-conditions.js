// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

*/

// ========================== SOLUTION ======================================
// ================================================================================

function addingAllTheWeirdStuff(array1, array2) {
	let sumOdd = 0;
	let sumEven = 0;
	const weirdArr = [];
	for (let element of array2) {
		if (element > 20) {
			for (let i = 0; i < array1.length; i++) {
				array1[i] += 1;
			}
		}
	}

	for (let element of array2) {
		if (element % 2 !== 0) {
			sumOdd += element;
		} else {
			sumEven += element;
		}
	}

	for (let element of array1) {
		if (element < 10) {
			weirdArr.push(element + sumOdd);
		}
		if (element > 10) {
			weirdArr.push(element + sumEven);
		}
	}
	return weirdArr;
}

// Uncomment these to check your work!
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
