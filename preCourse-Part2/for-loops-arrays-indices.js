// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: For Loops and Array Indices
You are given 3 different arrays, one of first names, last names and places. Imagine that each array element at a certain index corresponds to one user.

For example, my friends are Mary Snow, Kris Bowles, and Janelle Wong. I have two arrays, one of first names and one of last names. In order to get the full name of my friend, I need to access both arrays

const firstNames = ["Mary", "Kris", "Janelle"];
const lastNames = ["Snow", "Bowles", "Wong"];

console.log(firstNames[1]) // returns Kris
console.log(lastNames[1]) // returns Bowles
For this challenge, loop through the arrays and push a string with the format "My name is [firstName] [lastName] and I am from [place]" into the array holding the respective bios.

*/

// ========================== SOLUTION ======================================
// ================================================================================

const firstNames = ['Jon', 'Arya', 'Jamie'];
const lastNames = ['Snow', 'Stark', 'Lannister'];
const places = ['The Wall', 'Winterfell', 'Kings Landing'];

const bios = [];

// Loop through your arrays and store the following strings in the bios array:
// 'My name is Jon Snow and I am from The Wall'
// 'My name is Arya Stark and I am from Winterfell'
// 'My name is Jamie Lannister and I am from Kings Landing'

// ADD CODE HERE
for (let i = 0; i < firstNames.length; i++) {
	bios.push(
		`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`
	);
}

console.log(bios);
