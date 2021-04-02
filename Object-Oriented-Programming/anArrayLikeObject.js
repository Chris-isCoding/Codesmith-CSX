// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: anArrayLikeObject

Create a function that returns an empty object that has methods push, pop, unshift, shift that act like built in array methods.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

function createArray() {
	const arrObj = {};
	let length = 0;
	arrObj.__proto__.push = (...args) => {
		for (let i = 0; i < args.length; i++) {
			arrObj[length] = args[i];
			length++;
		}
		return length;
	};

	arrObj.__proto__.pop = () => {
		if (length === 0) {
			return;
		}
		length--;
		const lastElement = arrObj[length];
		delete arrObj[length];
		return lastElement;
	};

	arrObj.__proto__.shift = () => {
		if (length === 0) {
			return;
		}
		length--;
		const firstElement = arrObj[0];
		delete arrObj[0];
		for (let i = 0; i < length; i++) {
			arrObj[i] = arrObj[i + 1];
		}
		delete arrObj[length];
		return firstElement;
	};

	arrObj.__proto__.unshift = (...args) => {
		for (let i = length - 1; i >= 0; i--) {
			arrObj[i + args.length] = arrObj[i];
		}
		for (let i = 0; i < args.length; i++) {
			arrObj[i] = args[i];
		}
		length += args.length;
		return length;
	};
	return arrObj;
}

// const array1 = createArray();
// console.log(array1);
// console.log(array1.push('e'));
// console.log(array1.unshift('a', 'b', 'c', 'd'));
// console.log(array1.pop());
// console.log(array1.push());
// console.log(array1.length)
// console.log(array1);

// ========================== SOLUTION 2 ======================================
// ================================================================================

const arrayStore = {};

arrayStore.push = function (...args) {
	// console.log(this)
	for (let i = 0; i < args.length; i++) {
		this[this.length] = args[i];
		this.length++;
	}
	return this.length;
};

arrayStore.pop = function () {
	if (this.length === 0) {
		return;
	}
	this.length--;
	const lastElement = this[this.length];
	delete this[this.length];
	return lastElement;
};

arrayStore.shift = function () {
	if (this.length === 0) {
		return;
	}
	this.length--;
	const firstElement = this[0];
	delete this[0];
	for (let i = 0; i < length; i++) {
		this[i] = this[i + 1];
	}
	delete this[this.length];
	return firstElement;
};

arrayStore.unshift = function (...args) {
	// console.log(this)
	for (let i = this.length - 1; i >= 0; i--) {
		this[i + args.length] = this[i];
	}
	for (let i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	this.length += args.length;
	return this.length;
};

function arrayFromArrayStore() {
	const arrayObject = Object.create(arrayStore);
	arrayObject.length = 0;
	return arrayObject;
}

const array2 = arrayFromArrayStore();
// console.log(array2); //

// console.log(array2.push('e'));
// console.log(array2.unshift('a','b', 'c', 'd'));
// console.log(array2);

// ========================== SOLUTION 3 ======================================
// ================================================================================

function ArrayCreator() {
	this.length = 0;
}

ArrayCreator.prototype.push = function (...args) {
	for (let i = 0; i < args.length; i++) {
		this[this.length] = args[i];
		this.length++;
	}
	return this.length;
};

ArrayCreator.prototype.pop = function () {
	if (this.length === 0) {
		return;
	}
	this.length--;
	const lastElement = this[this.length];
	delete this[this.length];
	return lastElement;
};

ArrayCreator.prototype.shift = function () {
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
};

ArrayCreator.prototype.unshift = function (...args) {
	for (let i = this.length - 1; i >= 0; i--) {
		this[i + args.length] = this[i];
	}
	for (let i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	this.length += args.length;
	return this.length;
};

// const array3 = new ArrayCreator();

// console.log(array3);
// console.log(array3.push('e'));
// console.log(array3.unshift('a','b', 'c', 'd'));
// console.log(array3.pop());
// console.log(array3.length)
// console.log(array3);

// ========================== SOLUTION 4 ======================================
// ================================================================================

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

const array4 = new ArrayClass();
// console.log(array4);
// console.log(array4.push('e'));
// console.log(array4.unshift('a','b', 'c', 'd'));
// console.log(array4.pop());
// console.log(array4.length)
// console.log(array4);

// ========================== SOLUTION 5 ======================================
// ================================================================================

function arrayProperties() {}
arrayProperties.prototype = {
	length: 0,
};

function arrayCreator() {}

const arrayMethods = Object.create(arrayProperties.prototype);

arrayMethods.push = function (...args) {
	for (let i = 0; i < args.length; i++) {
		this[this.length] = args[i];
		this.length++;
	}
	return this.length;
};

arrayMethods.pop = function () {
	if (this.length === 0) {
		return;
	}
	this.length--;
	const lastElement = this[this.length];
	delete this[this.length];
	return lastElement;
};

arrayMethods.shift = function () {
	if (this.length === 0) {
		return;
	}
	this.length--;
	const firstElement = this[0];
	delete this[0];
	for (let i = 0; i < length; i++) {
		this[i] = this[i + 1];
	}
	delete this[this.length];
	return firstElement;
};

arrayMethods.unshift = function (...args) {
	for (let i = this.length - 1; i >= 0; i--) {
		this[i + args.length] = this[i];
	}
	for (let i = 0; i < args.length; i++) {
		this[i] = args[i];
	}
	this.length += args.length;
	return this.length;
};

arrayCreator.prototype = arrayMethods;
const array5 = new arrayCreator();
console.log(array5.length);
console.log(array5);
console.log(array5.push('e'));
console.log(array5.unshift('a', 'b', 'c', 'd'));
console.log(array5);
console.log(array5.pop());
console.log(array5.length);
console.log(array5);
