// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: personFromPersonStore

Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

const personStore = {
	greet: function () {
		console.log('hello');
	},
};

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
	person.name = name;
	person.age = age;
	return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); // -> Logs 26
// sandra.greet(); // -> Logs 'hello'
console.log(sandra);
