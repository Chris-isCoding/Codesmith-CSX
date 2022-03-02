// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: shuffleCards

You are creating a card game application with your friend.

She already wrote a function that divides the deck of cards into top and bottom halves, but needs help writing a function that shuffles the two halves together again.

Challenge
Write a function that takes two arrays as inputs, representing the top and bottom halves of a deck of cards, and shuffles them together. The function will return a single array containing the elements from both input arrays interleaved, like so:

the first element should be the first element of the first input array,

the second element should be the first element of the second input array,

the third element should be the second element of the first input array,

the fourth element should be the second element of the second array,

and so on.

The arrays may be of different lengths. After interleaving the elements of the input arrays, any remaining elements should be appended to the end of the array.

This problem can be solved in many ways, but try to solve it with recursion!

Input1: {Array} topHalf - cards in the top half of the deck
Input2: {Array} bottomHalf - cards in the bottom half of the deck
Output: {Array} - the top and bottom halves of the deck interleaved together, with any remaining cards appended to the end.


*/

// ========================== SOLUTION 1 ======================================
// ================================================================================

function shuffleCards(topHalf, bottomHalf) {
  const shuffled = [];
  const shuffleHelper = (i) => {
    if (i >= topHalf.length) return shuffled.concat(bottomHalf.slice(i));
    if (i >= bottomHalf.length) return shuffled.concat(topHalf.slice(i));
    shuffled.push(topHalf[i], bottomHalf[i]);
    return shuffleHelper(i + 1);
  };
  return shuffleHelper(0);
}

// UNCOMMENT TO TEST YOUR WORK
const topHalf = [
  'Queen of Diamonds',
  'Five of Hearts',
  'Ace of Spades',
  'Eight of Clubs',
];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
/* -> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
*/
