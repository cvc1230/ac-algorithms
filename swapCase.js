/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
	var array = str.split("");
	var word = "";
	for (var i = 0; i < array.length; i++) {
	
	   if (array[i] === array[i].toLowerCase()) { 
		  word = word + array[i].toUpperCase();
		 
		} else { 
		
	   word = word + array[i].toLowerCase();
		}
	
   } 
		 return word;       
  
	  
  }
  
  console.log(swapCase("HeLp"));
  console.log(swapCase("chriStina"));
  console.log(swapCase("MIChELE"));
  console.log(swapCase("VeAsEy"));