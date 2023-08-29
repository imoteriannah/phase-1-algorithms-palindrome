function isPalindrome(word) {
  // Write your algorithm here
  let substring = word.split("");
  let reversedSubstring = substring.reverse();
  const reversedString = reversedSubstring.join("");

  return word == reversedString ? true : false;
}

/* 
  Add your pseudocode here
  take input
  split the string to substring
  reverse the string
  join the string back
  compare original and final string
*/

/*
  Add written explanation of your solution here
  Solution is approached using splitting of the input string into substring
  and carrry out a reverse operation to swap the positions of the characters
  after which it is joined back to obtain a reversed string. carry out a 
  comparison with original string to check if the two are eqaul.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
