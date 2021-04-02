// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: PersonConstructor

Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string "hello".

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

function PersonConstructor() {
	this.greet = () => console.log('hello');
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'
console.log(simon);
