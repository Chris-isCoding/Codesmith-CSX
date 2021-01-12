// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: Objects - Iterating with for... in
You are provided with an empty array called objToArray. Using a for... in loop, fill the array with all of the numbers from the checkObj object if they are greater than or equal to 2.

*/

// ========================== SOLUTION ======================================
// ================================================================================

const checkObj = {
	oddNum: 1,
	evenNum: 2,
	foundNum: 5,
	randomNum: 18,
};

const objToArray = [];
// ADD CODE HERE

for (let key in checkObj) {
	if (checkObj[key] >= 2) {
		objToArray.push(checkObj[key]);
	}
}

console.log(objToArray);
