/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  str2 = str2
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  return str1 === str2;
}

isAnagram('Debit Card', 'Bad Credit');

module.exports = isAnagram;
