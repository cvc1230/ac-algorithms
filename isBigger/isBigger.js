/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

declare a function
	takes two inputs such as parameters/arguments
	if/else conditionals
		is a bigger than b?
		is a smaller than b?
		is a equal to b?

Output : "true", "false", 0

call the function, pass in 2 arguments

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/



function isBigger(a, b) {
  
	if (a > b) {
    console.log("true");
  } else if (a < b) {
    console.log("false");
  } else {
    console.log("0 otherwise")
  } 
	
}

isBigger(2,3);
isBigger(5,5);
isBigger(4,3);
