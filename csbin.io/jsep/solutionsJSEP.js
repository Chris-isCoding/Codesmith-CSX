// JS The Easier Parts - Variables, Data Types, and Control Flow

// ============================== CHALLENGE 1 ==============================
// ==========================================================================

/*

Replace the blank underscores inside the console logs with the data type (i.e. 'string') you think each value will be. (Leave the quotes)
Ex.

var myStr = "hello"
console.log(typeof myStr === "string") //=> true

*/

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === 'undefined')

// myVar = 'Chris' //add your name here
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished

// ============================== CHALLENGE 2  ==============================
// ==========================================================================

/*

Create a functon buildSentence that takes three words (strings) and adds them together and console.logs the whole sentence (string) complete with capitalization and punctuation.

*/

function buildSentence(word1, word2, word3) {
	const sentence = `${word1[0].toUpperCase()}${word1.slice(1)} ${word2} ${word3}.`;
	console.log(sentence);
}

// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."

// ============================== CHALLENGE 3  ==============================
// ==========================================================================

/*

Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []

*/

function lastLetter(word) {
	console.log(word[word.length - 1]);
}

//Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"

// ============================== CHALLENGE 4  ==============================
// ==========================================================================

/*

Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules:

If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!


*/

function buildGreeting(time, name) {
	if (time >= 0 && time <= 11) {
		console.log(`"Good Morning, ${name}!`);
	} else if (time >= 12 && time <= 16) {
		console.log(`Good Afternoon, ${name}!`);
	} else if (time >= 17 && time <= 23) {
		console.log(`Good Evening, ${name}!`);
	} else {
		console.log(`That's not a real time, ${name}. Maybe you need some sleep!`);
	}
}

// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"

// ============================== CHALLENGE 5  ==============================
// ==========================================================================

/*

indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
It searches through string1 from left to right checking each character to see if it can find string2.
If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.
Enter the index position you think indexOf will return for each below.

*/

// console.log( "CodeSmith".indexOf("o") === 1 );
// console.log( "hello".indexOf("ll") === 2 )
// console.log( "zebra".indexOf("z") === 0 )
// console.log( "banana".indexOf("B") === -1 )

// ============================== CHALLENGE 6  ==============================
// ==========================================================================

/*

Create a function letterExists that takes a word (string) and a character (string), and console.logs whether that letter can be found inside that word.


*/

function letterExists(word, letter) {
	console.log(word.indexOf(letter) !== -1);
}

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true

// ============================== CHALLENGE 7  ==============================
// ==========================================================================

/*

Create a function isPrime that console.logs a boolean indicating if `number` is prime or not.

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

function isPrime(number) {
	let result;
	if (number < 2) {
		result = false;
	}
	if (result === undefined) {
		if (number % 2 === 0) {
			result = number === 2;
		}
	}
	if (result === undefined) {
		for (let i = 3; i < Math.sqrt(number); i += 2) {
			if (number % i === 0) {
				result = false;
				break;
			}
		}
	}
	if (result === undefined) {
		result = true;
	}
	console.log(result);
}

// ============================== SOLUTION 2 ==============================
// ==========================================================================

// function isPrime(number) {
//   function isPrimeReturn(number) {
//     if (number < 2) {
//       return false;
//     }
//     if (number % 2 === 0) {
//       return (number === 2);
//     }
//     for (let i = 3; i <= Math.sqrt(number); i+=2 ) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(isPrimeReturn(number))
// }

// ============================== SOLUTION 3  ==============================
// ==========================================================================

// const isPrime = num => {
//   const isPrimeHelper = i => {
//     if (num < 2) return false
//     if (num % 2 === 0) return num === 2;
//     if (num % i === 0) return i === num;
//     return isPrimeHelper(i + 2)
//   }
//   console.log(isPrimeHelper(3));
// }

// isPrime(-7); // => false
// isPrime(2); // => true
// isPrime(7); // => true
// isPrime(15); // => false

// ============================== CHALLENGE 8  ==============================
// ==========================================================================

/*

Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

function range(start, end) {
	let ranger = '';
	for (let i = start; i <= end; i++) {
		if (i === end) {
			ranger += i;
		} else {
			ranger += `${i}, `;
		}
	}
	console.log(ranger);
}

// ============================== SOLUTION 2  ==============================
// ==========================================================================

function range(start, end) {
	const ranger = [];
	for (let i = start; i <= end; i++) {
		if (i === end) {
			ranger.push(i);
		} else {
			ranger.push(i + ',');
		}
	}
	console.log(...ranger);
}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>

// ============================== CHALLENGE 9  ==============================
// ==========================================================================

/*

Create a function myIndexOf that takes an array and an element and console.logs the index of the element in the array, or -1 if it doesn't exist.
Assume the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

*/

function myIndexOf(array, ele) {
	for (let i = 0; i <= array.length; i++) {
		if (i === array.length) {
			console.log(-1);
		}
		if (array[i] === ele) {
			console.log(i);
			break;
		}
	}
}

// myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
// myIndexOf(["a", "b", "c"], "a") //=> 0
// myIndexOf(["a", "b", "c"], "d") //=> -1

// ============================== CHALLENGE 10  ==============================
// ==========================================================================

/*

Create a function unique that console.logs an array where all the duplicates of the input array have been removed; in other words, every element remaining is unique.

*/

function unique(array) {
	console.log([...new Set(array)]);
}

// unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) // => ["a", "c", "aa", "b"]

// ============================== CHALLENGE 11  ==============================
// ==========================================================================

/*

Create a function longestWord that that retuns the longest word of a sentence.
If there are ties, the function should return the later word.

*/

function longestWord(sentence) {
	const longest = { word: '' };
	const removed = sentence.replace(/[^A-Za-z\s]/g, ' ');
	const words = removed.split(' ');
	for (const ele of words) {
		if (ele.length >= longest.word.length) {
			longest.word = ele;
		}
	}
	return longest.word;
}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''

// ============================== CHALLENGE 12  ==============================
// ==========================================================================

/*

Create a function disemvowel that takes in a string and returns a string with all vowels removed.

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

// function disemvowel(string) {
//   const result = [];
//   const upS = string.toUpperCase();
//   for (let i = 0; i < upS.length; i++) { //for every letter of the string
//    const check = upS[i] === 'A' ||  upS[i] === 'E' || upS[i] === 'I' || upS[i] === 'O' || upS[i] === 'U'; // check if letter is a vowel
//     if (!check) { // if letter is NOT a vowel
//       result.push(string[i]) // add it to the result array
//     }
//   }
//   return result.join('');
// }

// ============================== SOLUTION 2  ==============================
// ==========================================================================

// function disemvowel(string) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let noVowels = '';
//     for (const char of string) {
//       if (!vowels.includes(char.toLowerCase())) {
//         noVowels += char;
//       }
//     }
//   return noVowels;
// }

//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

// ============================== CHALLENGE 13  ==============================
// ==========================================================================

/*

Create a function divisibleByFivePairSum that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

*/

function divisibleByFivePairSum(array) {
	const pairs = [];
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if ((array[i] + array[j]) % 5 === 0) pairs.push([i, j]);
		}
	}
	return pairs;
}

//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]

// ============================== CHALLENGE 14  ==============================
// ==========================================================================

/*

Create a function highestScore that takes in an array of student objects as a parameter.

It should return a string that corresponds to the student with the highest score.

The string should contain that student's initials concatenated with their id.

Assume the array contains at least 1 student object and the student with the highest score is unique (there are no ties).

*/

function highestScore(students) {
	let best = students[0];
	for (const student of students) {
		if (student.score > best.score) {
			best = students[students.indexOf(student)];
		}
	}
	const name = best.name.split(' ');
	const initials = name[0].slice(0, 1) + name[1].slice(0, 1);
	return initials + best.id;
}

//Uncomment the lines below to test your function:

var students = [
	{ name: 'Will Sentance', id: 128, score: -42 },
	{ name: 'Jamie Bradshaw', id: 32, score: 57 },
	{ name: 'Lisa Simpson', id: 2, score: 99 },
	{ name: 'Luke Skywalker', id: 256, score: 94 },
];

// console.log(highestScore(students)); //=> 'LS2'

// ============================== CHALLENGE 15  ==============================
// ==========================================================================

/*

Create a function leastCommonMultiple that takes two numbers (integers) as input and returns the lowest number which is a multiple of both inputs.

*/

function leastCommonMultiple(num1, num2) {
	let least = num1 * num2;
	const low = Math.min(num1, num2);
	const high = Math.max(num1, num2);
	for (let i = least; i >= high; i -= high) {
		if (i % low === 0) {
			least = i;
		}
	}
	return least;
}

//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312

// ============================== EXTENSION 1  ==============================
// ==========================================================================

/*

Create a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

*/

// function arrayBuilder(count) {
//   const arr = [];
//   for (const [key, value] of Object.entries(count)) {
//     const startPoint = arr.length;
//     arr.length += value;
//     arr.fill(key, startPoint);
//   }
//   return arr;
// }

//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []

// ============================== EXTENSION 2  ==============================
// ==========================================================================

/*

Create a function objectBuilder that takes in a number and returns an object whose keys are 0 up to number and the values are that same number multipled by 5.

*/

function objectBuilder(count) {
	const obj = {};
	for (let i = 0; i <= count; i++) {
		obj[i] = i * 5;
	}
	return obj;
}

//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> { 0: 0, 1: 5, 2: 10, 3: 15, 4: 20 }
// console.log(objectBuilder(0)); //=> { 0: 0 }

// ============================== EXTENSION 3  ==============================
// ==========================================================================

/*

Create a function secretCipher that takes in an string(sentence) and an object(cipher). Return a string where every character is replaced with its cooresponding value in the cipher. If the character doesn't exist in the cipher, use the original character.

*/

function secretCipher(sentence, cipher) {
	let replaced = sentence;
	for (const [key, value] of Object.entries(cipher)) {
		replaced = replaced.replaceAll(key, value);
	}
	return replaced;
}

//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"

// ============================== EXTENSION 4  ==============================
// ==========================================================================

/*

Create a function passingStudents that accepts an array of student objects.
It should iterate through the list of students and return an array of the names of all the students who have an average grade of at least 70.

*/

// ============================== SOLUTION 1  ==============================
// ==========================================================================

// function passingStudents(students) {
//   const above70 = [];
//   for (const student of students) {
//     const grades = []
//     for (const list in student.grades) {
//       grades.push(student.grades[list].score)
//     }
//     if (grades.reduce((acc, cur) => acc + cur)/grades.length >= 70) {
//       above70.push(student.name)
//     }
//   }
//   return above70;
// }

// ============================== SOLUTION 2  ==============================
// ==========================================================================

function passingStudents(students) {
	const above70 = [];
	for (const student of students) {
		let sumOfGrades = 0;
		let numOfGrades = 0;
		for (const list in student.grades) {
			sumOfGrades += student.grades[list].score;
			numOfGrades++;
		}
		if (sumOfGrades / numOfGrades >= 70) {
			above70.push(student.name);
		}
	}
	return above70;
}

// ============================== SOLUTION 3  ==============================
// ==========================================================================

function passingStudents(students) {
	const above70 = [];
	for (const student of students) {
		let sumOfGrades = 0;
		for (const list in student.grades) {
			sumOfGrades += student.grades[list].score;
		}
		if (sumOfGrades / student.grades.length >= 70) {
			above70.push(student.name);
		}
	}
	return above70;
}

// ============================== SOLUTION 3  ==============================
// ==========================================================================

const passingStudents = arr =>
	arr.filter(student => student.grades.reduce((acc, obj) => (acc += obj.score), 0) / student.grades.length > 70).map(student => student.name);

//Uncomment the lines below to test your function:

var students = [
	{
		name: 'Marco',
		id: 12345,
		grades: [
			{ id: 0, score: 65 },
			{ id: 1, score: 75 },
			{ id: 2, score: 85 },
		],
	},
	{
		name: 'Donna',
		id: 55555,
		grades: [
			{ id: 0, score: 100 },
			{ id: 1, score: 100 },
			{ id: 2, score: 100 },
		],
	},
	{
		name: 'Jukay',
		id: 94110,
		grades: [
			{ id: 0, score: 65 },
			{ id: 1, score: 60 },
			{ id: 2, score: 65 },
		],
	},
];

console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]
