// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: runInOrder

Write a function called runInOrder that accepts as arguments in this order =>
  -an array of functions
  -an array of numbers representing times in milliseconds

runInOrder should execute the functions in order, with the corresponding numbers in milliseconds being the time to wait from the previous invocation. For example:

function sayHi() {
  console.log('hi');
}

function sayBye() {
  console.log('bye');
}

function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [300, 600, 200]);
/* should log: 'hi' (after 300 ms) 'bye' (600 ms after 'hi') 'howdy' (200 ms after 'bye') */

// ========================== SOLUTION 1 ======================================
// ================================================================================

const runInOrder = (funcArr, delayArr) => {
	let delay = 0;
	for (let i = 0; i < funcArr.length; i++) {
		// console.log(delay)
		delay += delayArr[i];
		setTimeout(funcArr[i], delay);
	}
};

// /* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
	console.log('hi');
}
function sayBye() {
	console.log('bye');
}
function sayHowdy() {
	console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
