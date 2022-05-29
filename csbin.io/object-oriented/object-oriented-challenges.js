// ============================== CHALLENGE 1  ==============================
// ==========================================================================

/*

Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. This function will:

    1. Create an empty object
    2. Add a name property to the newly created object with its value being the 'name' argument passed into the function
    3. Add an age property to the newly created object with its value being the 'age' argument passed into the function
    4. Return the object

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function makePerson(name, age) {
//   const person = {};
//   person.name = name;
//   person.age = age;

//   return person;
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const makePerson = (name, age) => ({ name, age });

const vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

// ============================== CHALLENGE 2  ==============================
// ==========================================================================

/*

Inside personStore object, create a property greet where the value is a function that logs "hello".

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

const personStore = {
  greet() {
    console.log('hello');
  },
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

// ============================== CHALLENGE 3  ==============================
// ==========================================================================

/*

Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function personFromPersonStore(name, age) {
  const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'

// ============================== CHALLENGE 4  ==============================
// ==========================================================================

/*

Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

*/
