// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: DeveloperClass

Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string "Hello World, my name is [name]"

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

class PersonClass {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log('hello');
	}
}

class ArrayClass {
	constructor() {
		this.length = 0;
	}

	push(...args) {
		for (let i = 0; i < args.length; i++) {
			this[this.length] = args[i];
			this.length++;
		}
		return this.length;
	}
	pop() {
		if (this.length === 0) {
			return;
		}
		this.length--;
		const lastElement = this[this.length];
		delete this[this.length];
		return lastElement;
	}

	shift() {
		if (this.length === 0) {
			return;
		}
		length--;
		const firstElement = this[0];
		delete this[0];
		for (let i = 0; i < this.length; i++) {
			this[i] = this[i + 1];
		}
		delete this[this.length];
		return firstElement;
	}

	unshift(...args) {
		for (let i = this.length - 1; i >= 0; i--) {
			this[i + args.length] = this[i];
		}
		for (let i = 0; i < args.length; i++) {
			this[i] = args[i];
		}
		this.length += args.length;
		return this.length;
	}
}

// const arrFromConstructor = () => new ArrayConstructor();

const array = new ArrayClass();

console.log(array);
console.log(array.push('e'));
console.log(array.unshift('a', 'b', 'c', 'd'));
console.log(array.pop());
console.log(array.length);
console.log(array);

// add code here
class DeveloperClass extends PersonClass {
	introduce() {
		console.log(`Hello World, my name is ${this.name}`);
	}
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); // -> Logs 'Hello World, my name is Thai'
// console.log(thai)
