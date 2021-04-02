// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*

Challenge: ajaxSimulate
In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar.

The function ajaxSimulate takes an id and a callback function as input. Modify the function so that after the database array, it will set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?

Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.

*/

// ========================== SOLUTION ======================================
// ================================================================================

let dataReceived;

function ajaxSimulate(id, callback) {
	const database = ['Aaron', 'Barbara', 'Chris'];
	setTimeout(callback, 0, database[id]); //26
}

const storeData = data => {
	dataReceived = data;
	console.log(dataReceived);
};

ajaxSimulate(1, storeData);
// console.log(dataReceived);
