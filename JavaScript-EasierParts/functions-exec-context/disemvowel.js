// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

*/

// ========================== SOLUTION ======================================
// ================================================================================

// function disemvowel(string) {
// 	const result = [];
// 	for (let l of string) {
// 		//for every letter of the string
// 		let check =
// 			l.toLowerCase() === 'a' ||
// 			l.toLowerCase() === 'e' ||
// 			l.toLowerCase() === 'i' ||
// 			l.toLowerCase() === 'o' ||
// 			l.toLowerCase() === 'u'; // equal true if the letter is a vowel
// 		if (!check) {
// 			// if letter is NOT a vowel
// 			result.push(l); // add it to result
// 		}
// 	}
// 	return result.join(''); //joins array together returning a string
// }

// // Uncomment these to check your work!
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

// ========================== SOLUTION 2 ======================================
// ================================================================================

// function disemvowel(string) {
// 	const result = [];
// 	const upS = string.toUpperCase();
// 	for (let i = 0; i < upS.length; i++) {
// 		//for every letter of the string
// 		let check =
// 			upS[i] === 'A' ||
// 			upS[i] === 'E' ||
// 			upS[i] === 'I' ||
// 			upS[i] === 'O' ||
// 			upS[i] === 'U'; // equal true if the letter is a vowel
// 		if (!check) {
// 			// if letter is NOT a vowel
// 			result.push(string[i]); // add it to the result array
// 		}
// 	}
// 	return result.join('');
// }

// // Uncomment these to check your work!
// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

// ========================== SOLUTION 3 ======================================
// ================================================================================

const disemvowel = (string) => {
	const vowels = {
		A: 'A',
		E: 'E',
		I: 'I',
		O: 'O',
		U: 'U',
	};

	let result = '';

	for (let i = 0; i < string.length; i++) {
		let letter = string[i].toUpperCase();
		if (!vowels[letter]) {
			result += string[i];
		}
	}

	return result;
};

// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'
