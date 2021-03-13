// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: goodKeys
Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// const goodKeys = (obj, callback) => {
//   const arr = [];
//   for (const key in obj) {
//     callback(obj[key])? arr.push(key): '';
//   }
//   return arr;
// }

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const goodKeys = (obj, callback) => {
//   const arr = [];
//   for (const key in obj) {
//     if (callback(obj[key])) {
//       arr.push(key)
//     }
//   }
//   return arr;
// }

// ========================== SOLUTION 3 ======================================
// ================================================================================

// function goodKeys(obj, callback) {
//   const arr = [];
//   for (const ele of Object.entries(obj)) {
//     if (callback(ele[1])) {
//       arr.push(ele[0])
//     }
//   }
//   return arr;
// }

// ========================== SOLUTION 4 ======================================
// ================================================================================

const goodKeys = (obj, callback) =>
	Object.keys(obj).filter((key) => callback(obj[key]));

// Uncomment these to check your work!
const sunny = {
	mac: 'priest',
	dennis: 'calculator',
	charlie: 'birdlaw',
	dee: 'bird',
	frank: 'warthog',
};
function startsWithBird(str) {
	return str.slice(0, 4).toLowerCase() === 'bird';
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
