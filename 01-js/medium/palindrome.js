/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, '');
  const strArray = str.toLowerCase().split('');
  let start = 0;
  let end = strArray.length - 1;
  while (start < end) {
    if (strArray[start] !== strArray[end]) return false;
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
