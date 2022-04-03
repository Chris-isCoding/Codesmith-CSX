/* eslint-disable func-names */
// console.log(`Hello World!`);

// ============================== CHALLENGE 1  ==============================
// ==========================================================================

/*

Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function createFunction() {
// 	return function () {
// 		console.log(`hello`);
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const createFunction = () => () => console.log(`hello`);

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
// function1(); // => should console.log('hello');

// ============================== CHALLENGE 2  ==============================
// ==========================================================================

/*

Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function createFunctionPrinter(input) {
// 	return function () {
// 		console.log(input);
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const createFunctionPrinter = (input) => () => console.log(input);

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// ============================== CHALLENGE 3  ==============================
// ==========================================================================

/*

Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
Uncomment those lines of code. Try to deduce the output before executing. Now we are going to create a function addByX that returns a function that will add an input by x.

*/

function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
// willCounter(); // 1
// willCounter(); // 2
// willCounter(); // 3

// jasCounter(); // 1
// willCounter(); // 4

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function addByX(x) {
//   return function(num) {
//     return num + x;
//   };
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const addByX = (x) => (num) => num + x;

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// console.log(addByTwo(2)); // => should return 4
// console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
// console.log(addByThree(1)); // => should return 4
// console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
// console.log(addByFour(4)); // => should return 8
// console.log(addByFour(5)); // => should return 9

// ============================== CHALLENGE 4  ==============================
// ==========================================================================

/*

Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function once(func) {
//   const already = {};
//   return function(...args) {
//     return ('called' in already) ? already.called : already.called = func(...args);
//   };
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const once = (func) => {
  const firstTime = {};
  return (...args) =>
    'called' in firstTime
      ? firstTime.called
      : (firstTime.called = func(...args));
};

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4)); // => should log 6
// console.log(onceFunc(10)); // => should log 6
// console.log(onceFunc(9001)); // => should log 6

// ============================== CHALLENGE 5  ==============================
// ==========================================================================

/*

Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function after(count, func) {
// 	return function (...args) {
// 		if (count <= 1) {
// 			return func(...args);
// 		}
// 		count--;
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const after =
  (count, func) =>
  (...args) =>
    count <= 1 ? func(...args) : (count--, undefined);

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log('hello');
};
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// ============================== CHALLENGE 6  ==============================
// ==========================================================================

/*

Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function delay(func, wait) {
// 	return function (...args) {
// 		setTimeout(func, wait, ...args);
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const delay =
  (func, wait) =>
  (...args) =>
    setTimeout(func, wait, ...args);

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
// console.log(count); // should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// ============================== CHALLENGE 7  ==============================
// ==========================================================================

/*

Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function rollCall(names) {
//   let count = 0;
//   return function() {
//     if (count >= names.length) {
//       console.log(`Everyone accounted for`)
//     } else {
//       console.log(names[count++]);
//     }
//   };
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const rollCall = (names) => {
  let count = 0;
  return () => {
    count >= names.length
      ? console.log(`Everyone accounted for`)
      : console.log(names[count++]);
  };
};

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth']);
// rollCaller(); // => should log 'Victoria'
// rollCaller(); // => should log 'Juan'
// rollCaller(); // => should log 'Ruth'
// rollCaller(); // => should log 'Everyone accounted for'

// ============================== CHALLENGE 8 ==============================
// ==========================================================================

/*

Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function saveOutput(func, magicWord) {
// 	const cache = {};
// 	return function (arg) {
// 		if (arg === magicWord) {
// 			return cache;
// 		}
// 		return (cache[arg] = func(arg));
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const saveOutput = (func, magicWord) => {
  const cache = {};
  return (arg) => (arg === magicWord ? cache : (cache[arg] = func(arg)));
};

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// ============================== CHALLENGE 9 ==============================
// ==========================================================================

/*

Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function cycleIterator(array) {
// 	let counter = 0;
// 	return function () {
// 		return array[counter++ % array.length];
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const cycleIterator = (array) => {
  let counter = 0;
  return () => array[counter++ % array.length];
};

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// ============================== CHALLENGE 10  ==============================
// ==========================================================================

/*

Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function defineFirstArg(func, arg) {
// 	return function (...args) {
// 		return func(arg, ...args);
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const defineFirstArg =
  (func, arg) =>
  (...args) =>
    func(arg, ...args);

// /*** Uncomment these to check your work! ***/
const subtract = function (big, small) {
  return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// ============================== CHALLENGE 11  ==============================
// ==========================================================================

/*

Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function dateStamp(func) {
// 	return function (...args) {
// 		return { date: new Date().toDateString(), output: func(...args) };
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const dateStamp =
  (func) =>
  (...args) => ({ date: new Date().toDateString(), output: func(...args) });

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp((n) => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// ============================== CHALLENGE 12  ==============================
// ==========================================================================

/*

Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function censor() {
// 	const pairs = {};
// 	return function (str1, str2) {
// 		if (str2 === undefined) {
// 			for (const [string1, string2] of Object.entries(pairs)) {
// 				str1 = str1.replaceA(string1, string2); // replaceAll
// 			}
// 			return str1;
// 		}
// 		pairs[str1] = str2;
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const censor = () => {
  const pairs = {};
  return (...strings) => {
    if (strings.length === 1) {
      return Object.keys(pairs).reduce(
        (string, word) => string.replace(word, pairs[word]),
        strings[0]
      ); // replaceAll
    }
    pairs[strings[0]] = strings[1];
  };
};

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// ============================== CHALLENGE 13  ==============================
// ==========================================================================

/*

There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function createSecretHolder(secret) {
  const secretHolder = {};
  secretHolder.getSecret = function () {
    return secret;
  };
  secretHolder.setSecret = function (value) {
    secret = value;
  };
  return secretHolder;
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5);
// console.log(obj.getSecret()); // => returns 5
obj.setSecret(2);
// console.log(obj.getSecret()); // => returns 2

// ============================== CHALLENGE 14  ==============================
// ==========================================================================

/*

Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function callTimes() {
// 	let counter = 0;
// 	return function () {
// 		return ++counter;
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const callTimes = () => {
  let counter = 0;
  return () => ++counter;
};

// /*** Uncomment these to check your work! ***/

const myNewFunc1 = callTimes();
const myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2

// ============================== CHALLENGE 15  ==============================
// ==========================================================================

/*

Create a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'click' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'bang'. On every invocation after that, the returned function returns the string 'reload to play again'.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function russianRoulette(num) {
// 	return function () {
// 		--num;
// 		if (num > 0) return 'click';
// 		if (num === 0) return 'bang';
// 		if (num < 0) return 'reload to play again';
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================
// randomize num :]

const russianRoulette = () => {
  let num = Math.floor(Math.random() * 5 + 1);
  return () =>
    --num > 0 ? 'click' : num === 0 ? 'bang' : 'reload to play again';
};

// /*** Uncomment these to check your work! ***/
const play = russianRoulette();
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'

// ============================== CHALLENGE 16  ==============================
// ==========================================================================

/*

Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). When the returned function is invoked with a number, the output should be average of all the numbers have ever been passed into that function (duplicate numbers count just like any other number). When the returned function is invoked with no arguments, the current average is outputted. If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function average() {
  let sum = 0;
  let times = 0;
  return function (num) {
    if (arguments.length !== 0) {
      times++;
      sum += num;
    }
    return times && sum / times;
  };
}

// ============================== SOLUTION 2 ==============================
// ==========================================================================

// const average = () => {
//   const cache = { sum: 0, times: 0 };
//   return (num) => {
//     if (num !== undefined) {
//       cache.times++;
//       cache.sum += num;
//     }
//     return cache.times && cache.sum / cache.times;
//   };
// };

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// ============================== CHALLENGE 17  ==============================
// ==========================================================================

/*

Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function makeFuncTester(arrOfTests) {
  return function (cb) {
    return (
      arrOfTests.filter((pair) => cb(pair[0]) === pair[1]).length ===
      arrOfTests.length
    );
  };
}

// ============================== SOLUTION 2 ==============================
// ==========================================================================

// const makeFuncTester = wordsPairs => cb => !wordsPairs.some(pair => cb(pair[0]) !== pair[1]);

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = (str) => str.toUpperCase();
const capLastAttempt2 = (str) => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true

// ============================== CHALLENGE 18  ==============================
// ==========================================================================

/*

Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

// function makeHistory(limit) {
// 	const stringStore = [];
// 	return function (string) {
// 		if (string === 'undo') {
// 			if (stringStore.length === 0) {
// 				return `nothing to undo`;
// 			}
// 			return `${stringStore.shift()} undone`;
// 		}
// 		if (stringStore.unshift(string) > limit) {
// 			stringStore.length = limit;
// 		}
// 		return `${string} done`;
// 	};
// }

// ============================== SOLUTION 2 ==============================
// ==========================================================================

const makeHistory = (limit) => {
  const strings = [];
  return (str) =>
    str === `undo`
      ? !(0 in strings)
        ? `nothing to undo`
        : `${strings.shift()} undone`
      : strings.unshift(str) > limit
      ? ((strings.length = limit), `${str} done`)
      : `${str} done`;
};

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'

// ============================== CHALLENGE 19  ==============================
// ==========================================================================

/*

Inspect the commented out test cases carefully if you need help to understand these instructions.
Create a function blackjack that accepts an array (which will contain numbers ranging from 1 through 11), and returns a DEALER function. The DEALER function will take two arguments (both numbers), and then return yet ANOTHER function, which we will call the PLAYER function.

On the FIRST invocation of the PLAYER function, it will return the sum of the two numbers passed into the DEALER function.

On the SECOND invocation of the PLAYER function, it will return either:

  => the first number in the array that was passed into blackjack PLUS the sum of the two numbers passed in as arguments into the DEALER function, IF that sum is 21 or below, OR
  => the string 'bust' if that sum is over 21.


If it is 'bust', then every invocation of the PLAYER function AFTER THAT will return the string 'you are done!' (but unlike 'bust', the 'you are done!' output will NOT use a number in the array). If it is NOT 'bust', then the next invocation of the PLAYER function will return either:

  => the most recent sum plus the next number in the array (a new sum) if that new sum is 21 or less, OR
  => the string 'bust' if the new sum is over 21.


And again, if it is 'bust', then every subsequent invocation of the PLAYER function will return the string 'you are done!'. Otherwise, it can continue on to give the next sum with the next number in the array, and so forth.

You may assume that the given array is long enough to give a 'bust' before running out of numbers.

BONUS: Implement blackjack so the DEALER function can return more PLAYER functions that will each continue to take the next number in the array after the previous PLAYER function left off. You will just need to make sure the array has enough numbers for all the PLAYER functions.

*/

// ============================== SOLUTION 1 ==============================
// ==========================================================================

function blackjack(array) {
  let draft = 0;
  let counter = 0;
  const players = {};
  return function (num1, num2) {
    const id = ++counter;
    let score = num1 + num2;
    let started = false;
    players[id] = 0;
    return function () {
      if (players[id]) return `you are done!`;
      if (started === false) {
        started = true;
        return score > 21 ? ((players[id] = 1), `bust`) : score;
      }
      return (score += array[draft++]) > 21
        ? ((players[id] = 1), `bust`)
        : score;
    };
  };
}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([
//   2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
// ]);

// /*** PLAYER 1 ***/
// const player1 = deal(4, 5);
console.log(player1()); // => should log 9
console.log(player1()); // => should log 11
console.log(player1()); // => should log 17
console.log(player1()); // => should log 18
console.log(player1()); // => should log 'bust'
console.log(player1()); // => should log 'you are done!'
console.log(player1()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const player2 = deal(2, 2);
console.log(player2()); // => should log 4
console.log(player2()); // => should log 15
console.log(player2()); // => should log 19
console.log(player2()); // => should log 'bust'
console.log(player2()); // => should log 'you are done!
console.log(player2()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const player3 = deal(3, 7);
console.log(player3()); // => should log 10
console.log(player3()); // => should log 13
console.log(player3()); // => should log 'bust'
console.log(player3()); // => should log 'you are done!
console.log(player3()); // => should log 'you are done!

// BONUS VERSION
/*
const blackjack = (arr) => {
  const deck = Array(4).fill(arr).flat(); // deck holds 4 times each value of provided cards
  const shuffle = () => {
    // define simple function expression to shuffle deck
    deck.forEach((card, i) => {
      const random = Math.floor(Math.random() * deck.length);
      [deck[i], deck[random]] = [deck[random], deck[i]];
    });
  };
  shuffle(); // shuffling deck
  const stack = [...deck];
  const add = () => {
    // function expression to add shuffled deck to current stack of cards
    shuffle();
    stack.push(...deck);
  };
  let draft = 0; // keeps track how many cards were drafted
  let counter = 0; // keeps track of how many players joined the game
  const players = {};
  return () => {
    let id = 'player' + ++counter; // gives new id to every player
    players[id] = { fresh: 1 };
    if (draft === stack.length - 3) add();
    let score = stack[draft++] + stack[draft++]; // new player joins and drafts 2 cards
    return () => {
      if (players[id].status) return `you are done!`;
      if (players[id].fresh) {
        players[id].fresh = 0;
        return score === 21
          ? ((players[id].status = 1), `You won!`)
          : score > 21
          ? ((players[id].status = 1), `bust`)
          : score;
      }
      if (draft === stack.length - 2) add();
      return (score += stack[draft++]) === 21
        ? ((players[id].status = 1), `You won!`)
        : score > 21
        ? ((players[id].status = 1), `bust`)
        : score;
    };
  };
};
*/
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const deal = blackjack(cards);

const player1 = deal();
const player2 = deal();
const player3 = deal();
console.log(player1());
console.log(player1());
console.log(player1());
console.log(player1());
console.log(player2());
console.log(player2());
console.log(player2());
console.log(player2());
console.log(player3());
console.log(player3());
console.log(player3());
console.log(player3());
