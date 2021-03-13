// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: For Loops - Calculating Array Elements
You are given an array of five numbers called increaseByTwo. Use a for loop to iterate through the array and increase each number by two.

*/

// ========================== SOLUTION ======================================
// ================================================================================

const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for (let i = 0; i < increaseByTwo.length; i++) {
	increaseByTwo[i] += 2;
}

// Uncomment the line below to check your work!
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7];
