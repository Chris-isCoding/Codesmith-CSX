// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: cycleIterator

Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function cycleIterator(arr) {
//   let index = -1;
//   return function() {
//     return arr[++index % arr.length]
//   }
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

const cycleIterator = (arr) => {
	let i = 0;
	return () => arr[i++ % arr.length];
};

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function cycleIterator(arr) {
//   let counter = 0;
//   return function() {
//     if (counter >= arr.length) {
//       counter = 0;
//     }
//     counter++;
//     return arr[counter - 1]
//   }
// }

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
