//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

//input is a string
//output is a number
//will use str.split()
//will use str.lremgth()





function findLongestWord(str) {
  var strSplit = str.split(" ");
  var count = 0;
 
 
  for (var i = 0; i < strSplit.length; i++) { 
    
    var howMany = strSplit[i].length;
   
    if (howMany > count ) {
      count = howMany;
    }
  
 
   
  } return count;
}

console.log(findLongestWord("the quick brown fox jumped over the fence"));

console.log(findLongestWord("hit the ground running like a halfback"));