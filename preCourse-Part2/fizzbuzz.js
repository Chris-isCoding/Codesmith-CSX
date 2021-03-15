// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: fizzbuzz

Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

Log fb to the console to see the output.

Hint: Check out the remainder/modulo operator: %.

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

// const fb = [];
// for (let i = 1; i < 17; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     fb.push('fizzbuzz');
//   } else if (i % 5 === 0) {
//     fb.push('buzz');
//   } else if (i % 3 === 0) {
//     fb.push('fizz');
//   }
//   else {
// 		fb.push(i)
//   }
// }

// console.log(fb);

// ========================== SOLUTION 2 ======================================
// ================================================================================

// const fb = [];
// let i = 1;
// while (i < 17) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     fb.push('fizzbuzz');
//   } else if (i % 5 === 0) {
//     fb.push('buzz');
//   } else if (i % 3 === 0) {
//     fb.push('fizz');
//   }
//   else {
// 		fb.push(i)
//   }
// 	i++;
// }

// console.log(fb);

// ========================== SOLUTION 3 ======================================
// ================================================================================

// const fb = [];
// let i = 1;
// while (i < 17) {
// 	fb.push(
// 		i % 3 === 0 ? (i % 5 === 0 ? 'fizzbuzz' : 'fizz') : i % 5 === 0 ? 'buzz' : i
// 	);
// 	i++;
// }

// console.log(fb);

// ========================== SOLUTION 4 ======================================
// ================================================================================

const fb = [];
for (let i = 1; i < 17; i++) {
	fb.push((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
}

console.log(fb);

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
