// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: dateStamp

Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================


// function dateStamp(func) {
//   const res = {};
//   return function(...args) {
//     res.date = new Date().toString().slice(0,15)
//     res.output = func(...args)
//     return res;
//   }
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

const dateStamp = func => {
  const obj = {};
  return (...args) => {
    obj.date = new Date().toString().slice(0,15);
    obj.output = func(...args);
    return obj;
  }
}

// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
