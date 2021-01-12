// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: typeof Operator
// Quite often in programming, we need to be able to look up what the specific data type of a given operand is. In JavaScript, the typeof operator returns the data type of its operand in the form of a string. Operand can be any object, function or variable.

// typeof("testing")   // => "string"
// typeof(22)         // => "number"
// typeof(false)      // => "boolean"
// Keep in mind that the typeof an array is an object.

// Challenge
// 1. Declare a variable favMovieType. Then, using the typeof operator, assign it the value of favMovie's data type.

// 2. Declare a variable timesSeenType. Then, using the typeof operator, assign it the value of timesSeen's data type.

// 3. Declare a variable seeAgainType. Then, using the typeof operator, assign it the value of goingToWatchItAgain's data type.

// ========================== SOLUTION ======================================
// ================================================================================

const favMovie = 'Star Wars: Episod IV';
const timesSeen = 732;
const goingToWatchItAgain = true;

// ADD CODE BELOW HERE

let favMovieType = typeof favMovie;
console.log(favMovieType);

let timesSeenType = typeof timesSeen;
console.log(timesSeenType);

let seeAgainType = typeof goingToWatchItAgain;
console.log(seeAgainType);
