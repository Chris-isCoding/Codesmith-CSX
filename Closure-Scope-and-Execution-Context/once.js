// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: once

Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// function once(callback) {
// 	const counter = [];
// 	function returnedFunc(...arg) {
// 		if (counter.length === 0) {
// 			// console.log(callback(...arg))
// 			counter.push(callback(...arg));
// 		}
// 		return counter[0];
// 	}
// 	return returnedFunc;
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

const once = (cb) => {
  let calledOnce = false;
  let result;
  return (...args) => {
    if (!calledOnce) {
      result = cb(...args);
      calledOnce = true;
    }
    return result;
  };
};

// UNCOMMENT THESE TO TEST YOUR WORK!

const addByTwoOnce = once((num) => num + 2);

console.log(addByTwoOnce(5)); // should log 7
console.log(addByTwoOnce(10)); // should log 7
console.log(addByTwoOnce(9001)); // should log 7
