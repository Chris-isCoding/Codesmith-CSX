// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: Objects - Iterating with a for loop
This time, use the Object.values() method to return an array of checkObj's values, and assign this array to a constant called objToArray. Next, use a for loop to iterate through objToArray and determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.

*/

// ========================== SOLUTION ======================================
// ================================================================================

const checkObj = {
	oddNum: 1,
	evenNum: 2,
	foundNum: 5,
	randomNum: 18,
};

let divBy6 = false;
// ADD CODE HERE
const objToArray = Object.values(checkObj);
console.log(objToArray);

// ======== First Solution ========

for (let i = 0; i < objToArray.length; i++) {
	if (objToArray[i] % 6 === 0) divBy6 = true;
}

// ======== Second Solution ========

// for (let i = 0; i < objToArray.length; i++) {
//   objToArray[i] % 6 ? '' : divBy6 = !(objToArray[i] % 6)
// }
