// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: Repeater

Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

Input: {String} char
Output: {String}

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// const stringOf = {};

// function repeater(char) {
//   if (!stringOf[char]) {
//     stringOf[char] = char;
//   }
//   if (stringOf[char].length === 5) {
//     return stringOf[char];
//   }
//   stringOf[char] += char;
//   return repeater(char);
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

const string = [];

function repeater(char) {
	if (string.length === 5 && string.every((ele) => ele === char)) {
		return string.join('');
	}
	if (string.length >= 5 || string.every((ele) => ele !== char)) {
		string.length = 0;
	}
	string.push(char);
	return repeater(char);
}

// ========================== SOLUTION 3 ======================================
// ================================================================================

// let repeated = '';
// const repeater = char => {
//   if (repeated.length === 5 && repeated[0] === char) return repeated;
//   if (repeated.length >= 5 || repeated[0] !== char) repeated = '';
//   repeated += char;
//   return repeater(char)
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

const repeater = (char, output = char) => {
	if (output.length === 5) return output;
	return repeater(char, output + char);
};

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
