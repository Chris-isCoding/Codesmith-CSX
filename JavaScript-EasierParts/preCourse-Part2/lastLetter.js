// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: lastLetter
Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'

*/

// ========================== SOLUTION ======================================
// ================================================================================

function lastLetter(word) {
	return word[word.length - 1];
}

// Uncomment the lines below to test your code
console.log(lastLetter('hello')); //=> "o"
console.log(lastLetter('goodbye!')); //=> "!"
console.log(lastLetter('ZeltoiD')); //=> "D"
console.log(lastLetter('I love Javascript')); //=> "t"
