// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: cascade
Write a function cascade that takes a positive integer and prints a cascade of this integer. Hint - this very challenging problem can be solved with and without string manipulation!

cascade(12345) should print

12345
1234
123
12
1
12
123
1234
12345

*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

function cascade(number) {
  if (!Number.isInteger(number) || number < 0) return;
  const stringified = number.toString();
  const cascadeDecreasing = (i) => {
    if (i === 0) return;
    console.log(Number(stringified.slice(0, i)));
    cascadeDecreasing(i - 1);
  };
  const cascadeIncreasing = (i) => {
    if (i > stringified.length) return;
    console.log(Number(stringified.slice(0, i)));
    cascadeIncreasing(i + 1);
  };
  cascadeDecreasing(stringified.length);
  cascadeIncreasing(2);
}

// Uncomment to test your work!
cascade(12345);
