// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: personFromConstructor

Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

function PersonConstructor() {
	this.greet = function () {
		console.log('hello');
	};
}

function personFromConstructor(name, age) {
	const person = new PersonConstructor();
	// console.log(person)
	person.name = name;
	person.age = age;
	// console.log(person)
	return person;
}

const mike = personFromConstructor('Mike', 30);
PersonConstructor.prototype.test = () => console.log('test');

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

mike.test();
console.log(mike.__proto__);
