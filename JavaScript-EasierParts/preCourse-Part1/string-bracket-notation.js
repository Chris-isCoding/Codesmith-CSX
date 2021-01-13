// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: Bracket Notation for Strings
// Bracket notation is a way to access a specific character in a string. We can do so by simply adding brackets ([]) to the end of our string and placing the index of the character we want to access inbetween those brackets.

// What's an index though? The index is the position within the string of the character we want to access. The catch though is that JavaScript, like most modern programming languages, uses a zero-based system for indexing. This means that we start our count at 0 instead of 1. So to access the first character of a string, we would use the index of 0. Take a look at this example:

// let favFood = "tacos"
// console.log(favFood[0]) // => "t"
// console.log(favFood[2]) // => "c"
// One thing to keep in mind though is that even though we can access a specific character of a string using the bracket notation, it doesn't mean we can change it. Remember that strings are a primitive data type in JavaScript. One key thing to know about primitive data types is that they are immutable which means they can't be altered. For instance:

// let word = "brand";

// console.log(word[3]) // => "n";
// word[3] = "i";

// console.log(word[3]) // => "n";
// console.log(word) // => "brand"
// Did you think word would change from "brand" to "braid"? Because strings are immutable, if we want to make that change, we would have to reassign the entire value like this:

// let word = "brand";

// word = "braid"
// console.log(word) // => "braid"
// Challenge
// 1. Declare a variable firstLetter and assign it a value of the first letter of songTitle using bracket notation.

// 2. Declare a variable seventhLetter and assign it a value of the seventh letter of songTitle using bracket notation.

// 3. Declare a variable lastLetter and assign it a value of the last letter of lyrics using bracket notation and the .length property we learned in the last challenge.

// Hint: Don't forget about that zero-based indexing.

// ========================== SOLUTION ======================================
// ================================================================================

const songTitle = 'Space Oddity';
const lyrics =
	'This is Ground Control to Major Tom / You’ve really made the grade';

// ADD CODE BELOW
let firstLetter = songTitle[0];
let seventhLetter = songTitle[6];
let lastLetter = lyrics[lyrics.length - 1];

// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);
