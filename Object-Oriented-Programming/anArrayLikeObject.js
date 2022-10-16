// ============================== INSTRUCTIONS ==============================
// ============================================================================

/*

Challenge: anArrayLikeObject

Create a function that returns an empty object that has methods push, pop, unshift, shift that act like built in array methods.

*/

// ========================== SOLUTION 1 =====================================
// =============================================================================

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
    return undefined;
  }
  this.length--;
  const lastElement = this[this.length];
  delete this[this.length];
  return lastElement;
};

ArrayCreator.prototype.shift = function () {
  if (this.length === 0) {
    return undefined;
  }
  this.length--;
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

// ========================== SOLUTION 2 ======================================
// =============================================================================

const arrayStore = {};

arrayStore.push = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
    this.length++;
  }
  return this.length;
};

arrayStore.pop = function () {
  if (this.length === 0) {
    return undefined;
  }
  this.length--;
  const lastElement = this[this.length];
  delete this[this.length];
  return lastElement;
};

arrayStore.shift = function () {
  if (this.length === 0) {
    return undefined;
  }
  this.length--;
  const firstElement = this[0];
  delete this[0];
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  delete this[this.length];
  return firstElement;
};

arrayStore.unshift = function (...args) {
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

// const array2 = arrayFromArrayStore();
// console.log(array2); //

// console.log(array2.push('e'));
// console.log(array2.unshift('a', 'b', 'c', 'd'));
// console.log(array2);

// ========================== SOLUTION 3 ======================================
// =============================================================================
// not recommended solution using deprecated __proto__ to set properties directly

function CreateArray() {
  this.length = 0;
  this.__proto__.push = (...args) => {
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
      this.length++;
    }
    return this.length;
  };

  this.__proto__.pop = () => {
    if (this.length === 0) {
      return undefined;
    }
    this.length--;
    const lastElement = this[this.length];
    delete this[this.length];
    return lastElement;
  };

  this.__proto__.shift = () => {
    if (this.length === 0) {
      return undefined;
    }
    this.length--;
    const firstElement = this[0];
    delete this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length];
    return firstElement;
  };

  this.__proto__.unshift = (...args) => {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + args.length] = this[i];
    }
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
    this.length += args.length;
    return this.length;
  };
  // return arrObj;
}

// const array1 = new CreateArray();
// console.log(array1);
// console.log(array1.push('e'));
// console.log(array1.unshift('a', 'b', 'c', 'd'));
// console.log(array1.pop());
// console.log(array1.push());
// console.log(array1.length);
// console.log(array1);

// ========================== SOLUTION 4 ====================================
// ===========================================================================

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
      return undefined;
    }
    this.length--;
    const lastElement = this[this.length];
    delete this[this.length];
    return lastElement;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    this.length--;
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

// const array4 = new ArrayClass();
// console.log(array4);
// console.log(array4.push('e'));
// console.log(array4.unshift('a', 'b', 'c', 'd'));
// console.log(array4.pop());
// console.log(array4.length);
// console.log(array4);

// ========================== SOLUTION 5 ======================================
// =============================================================================

function arrayProperties() {}
arrayProperties.prototype = {
  length: 0,
};

function ArrayCreate() {}

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
    return undefined;
  }
  this.length--;
  const lastElement = this[this.length];
  delete this[this.length];
  return lastElement;
};

arrayMethods.shift = function () {
  if (this.length === 0) {
    return undefined;
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

ArrayCreate.prototype = arrayMethods;

// const array5 = new ArrayCreator();
// console.log(array5.length);
// console.log(array5);
// console.log(array5.push('e'));
// console.log(array5.unshift('a', 'b', 'c', 'd'));
// console.log(array5);
// console.log(array5.pop());
// console.log(array5.length);
// console.log(array5);

// ========================== SOLUTION 6 ======================================
// =============================================================================

function arrayCreator() {
  class ArrayClass {
    #len = 0;

    get length() {
      return this.#len;
    }

    push(...args) {
      for (let i = 0; i < args.length; i++) {
        this[this.#len] = args[i];
        this.#len++;
      }
      return this.#len;
    }

    pop() {
      if (this.#len === 0) {
        return;
      }
      this.#len--;
      const lastElement = this[this.#len];
      delete this[this.#len];
      return lastElement;
    }

    shift() {
      if (this.#len === 0) {
        return;
      }
      this.#len--;
      const firstElement = this[0];
      delete this[0];
      for (let i = 0; i < this.#len; i++) {
        this[i] = this[i + 1];
      }
      delete this[this.#len];
      return firstElement;
    }

    unshift(...args) {
      for (let i = this.#len - 1; i >= 0; i--) {
        this[i + args.length] = this[i];
      }
      for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
      }
      this.#len += args.length;
      return this.#len;
    }
  }
  return new ArrayClass();
}

const array6 = new ArrayCreator();
console.log(array6.length);
console.log(array6);
console.log(array6.push('e'));
console.log(array6.unshift('a', 'b', 'c', 'd'));
console.log(array6);
console.log(array6.pop());
console.log(array6.length);
console.log(array6);
