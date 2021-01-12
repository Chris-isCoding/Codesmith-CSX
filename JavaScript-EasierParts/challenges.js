/* ========== *
 * Challenge 1 *
 * =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "_______")
// console.log(typeof 22 === "_______")
// console.log(typeof true === "_______")

var myVar;
// console.log(typeof myVar === "_______")

//myVar = //add your name here
// console.log(typeof myVar === "_______")

//Comment them back out with two forward slashes at the beginning once you have finished

/* ========== *
 * Challenge 2 *
 * =========== */

function buildSentence(word1, word2, word3) {
	//your code goes here...
}

//buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
//buildSentence("we're", "number", "1") //=> "We're number 1."

/* ========== *
 * Challenge 3 *
 * =========== */

function lastLetter(word) {
	//your code goes here...
}

//Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"

/* ========== *
 * Challenge 4 *
 * =========== */

function buildGreeting(time, name) {
	//your code goes here...
}

//buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
//buildGreeting(12, "John") //=> "Good Afternoon, John!"
//buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
//buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"

/* ========== *
 * Challenge 5 *
 * =========== */

// console.log( "CodeSmith".indexOf("o") === __ )
// console.log( "hello".indexOf("ll") === __ )
// console.log( "zebra".indexOf("z") === __ )
// console.log( "banana".indexOf("B") === __ )

/* ========== *
 * Challenge 6 *
 * =========== */

function letterExists(word, letter) {
	//your code goes here...
}

// letterExists("superman", "e") //=> true
// letterExists("starship", "S") //=> false
// letterExists("th1s", "1") //=> true
// letterExists("he!lo", "!") //=> true

/* =========== *
 * Challenge 7 *
 * ============ */

function isPrime(number) {
	// your code here...
}

// isPrime(-7): // => false
// isPrime(2); // => true
// isPrime(11); // => true
// isPrime(15); // => false

/* ========== *
 * Challenge 8 *
 * =========== */

function range(start, end) {
	//your code goes here...
}

//Uncomment the lines below to test your code
// range(1,4) //=> 1, 2, 3, 4
// range(4,2) //=>

/* =========== *
 * Challenge 9 *
 * ============ */

function myIndexOf(array, ele) {
	// your code here...
}

//myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
//myIndexOf(["a", "b", "c"], "a") //=> 0
//myIndexOf(["a", "b", "c"], "d") //=> -1

/* =========== *
 * Challenge 10 *
 * ============ */

function unique(array) {
	//your code goes here...
}

// unique([1, 1, 2, 3, 3]) => [1, 2, 3]
// unique(["a", "a", "c", "aa", "b", "b"]) => ["a", "c", "aa", "b"]

/* =========== *
 * Challenge 11 *
 * ============ */

function longestWord(sentence) {
	// your code here...
}

//Uncomment the lines below to test your function:

// console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
// console.log(longestWord('hate having hungry hippos')); // => 'hippos'
// console.log(longestWord('JavaScript')); // => 'JavaScript'
// console.log(longestWord('')); // => ''

/* =========== *
 * Challenge 12 *
 * ============ */

function disemvowel(string) {
	// your code here...
}

//Uncomment the lines below to test your function:

// console.log(disemvowel('CodeSmith')); // => 'CdSmth'
// console.log(disemvowel('BANANA')); // => 'BNN'
// console.log(disemvowel('hello world')); // => 'hll wrld'

/* =========== *
 * Challenge 13 *
 * ============ */

function divisibleByFivePairSum(array) {
	// your code here...
}

//Uncomment the lines below to test your function:

// console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
// console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]

/* =========== *
 * Challenge 14 *
 * ============ */

function highestScore(students) {
	// your code here...
}

//Uncomment the lines below to test your function:

// var students = [
// {name: 'Will Sentance', id: 128, score: -42},
// {name: 'Jamie Bradshaw', id: 32, score: 57},
// {name: 'Lisa Simpson', id: 2, score: 99},
// {name: 'Luke Skywalker', id: 256, score: 94}
// ];

// console.log(highestScore(students)); //=> 'LS2'

/* =========== *
 * Challenge 15 *
 * ============ */

function leastCommonMultiple(num1, num2) {
	// your code here...
}

//Uncomment the lines below to test your function:

// console.log(leastCommonMultiple(2, 3)); //=> 6
// console.log(leastCommonMultiple(6, 10)); //=> 30
// console.log(leastCommonMultiple(24, 26)); //=> 312

/* ========== *
 * Extension 1 *
 * =========== */

function arrayBuilder(count) {
	// your code here...
}

//Uncomment the lines below to test your function:

// console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
// console.log(arrayBuilder({})); //=> []

/* ========== *
 * Extension 2 *
 * =========== */

function objectBuilder(count) {
	// your code here...
}

//Uncomment the lines below to test your function:

// console.log(objectBuilder(4)); //=> {
// 0: 0,
// 1: 5,
// 2: 10,
// 3: 15,
// 4: 20,
// }
// console.log(objectBuilder(0)); //=> { 0: 0 }

/* ========== *
 * Extension 3 *
 * =========== */

function secretCipher(sentence, cipher) {
	// your code here...
}

//Uncomment the lines below to test your function:

// console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
// console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
// console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"

/* ========== *
 * Extension 4 *
 * =========== */

function passingStudents(students) {
	// your code here...
}

//Uncomment the lines below to test your function:

// var students = [
//   {
//     "name": "Marco",
//     "id": 12345,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
//   },
//   {
//     "name": "Donna",
//     "id": 55555,
//     "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
//   },
//   {
//     "name": "Jukay",
//     "id": 94110,
//     "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
//   }
// ];

// console.log(passingStudents(students)); // => [ 'Marco', 'Donna' ]
