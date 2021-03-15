// ============================== INSTRUCTIONS ==============================
// ================================================================================

/*
Challenge: makePlans
Create a function makePlans that accepts a string. This string should be a name. The function makePlans should call the function callFriend and return the result. callFriend accepts a boolean value and a string. Pass in the friendsAvailable variable and name to callFriend.

Create a function callFriend that accepts a boolean value and a string. If the boolean value is true, callFriend should return the string 'Plans made with NAME this weekend'. Otherwise it should return 'Everyone is busy this weekend'.

*/

// ========================== SOLUTION ======================================
// ================================================================================

let friendsAvailable = true;

function makePlans(name) {
	return callFriend(friendsAvailable, name);
}

// ======== TERNARY OPERATOR ========
// ===================================

// function callFriend(bool, name) {
//   return bool ? `Plans made with ${name} this weekend` : 'Everyone is busy this weekend' ;
// }

// ======== FUNCTION DECLARATION ========
// =======================================

function callFriend(boo, name) {
	if (bool === true) {
		return `Plans made with ${name} this weekend`;
	} else {
		//default condition
		return 'Everyone is busy this weekend';
	}
}

// Uncomment these to check your work!
console.log(makePlans('Mary')); // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans('James')); //should return: "Everyone is busy this weekend."
