// ============================== INSTRUCTIONS ==============================
// ================================================================================

// Challenge: While Loops - Counters
// Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n.When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!' When the counter is finished, print 'That was kind of a let down'.

// ========================== FIRST SOLUTION ==========================
// ====================================================================

// function imAboutToExplodeWithExcitement(n) {
//   let countdown = n;
//   while (countdown > 0) {
//     if (countdown === 5) {
//       console.log(`Oh wow, I can't handle the anticipation!`);
//     } else if (countdown === 3) {
//       console.log(`I'm about to explode with excitement!`);
//     } else {
//       console.log(countdown);
//     }
//     countdown--;
//   }
//   console.log(`That was kind of a let down`)
// }

// ========================== SECOND SOLUTION ==========================
// ====================================================================

function imAboutToExplodeWithExcitement(n) {
	let countdown = n;
	while (countdown > 0) {
		countdown === 5
			? console.log(`Oh wow, I can't handle the anticipation!`)
			: console.log(countdown);
		countdown === 3 ? console.log(`I'm about to explode with excitement!`) : '';
		countdown--;
	}
	console.log(`That was kind of a let down`);
}

// Uncomment the line below to check your work!
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'
