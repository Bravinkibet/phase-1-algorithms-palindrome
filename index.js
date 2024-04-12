function isPalindrome(word) {
  // Remove whitespace and convert to lowercase for case insensitivity
  word = word.toLowerCase().replace(/\s/g, '');

  // Initialize pointers for start and end of the word
  let start = 0;
  let end = word.length - 1;

  // Iterate until start pointer is less than end pointer
  while (start < end) {
    // If characters at start and end pointers don't match, return false
    if (word[start] !== word[end]) {
      return false;
    }
    // Move pointers towards each other
    start++;
    end--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

// Pseudocode:
/*
  1. Remove whitespace from the word and convert it to lowercase to make it case insensitive.
  2. Initialize two pointers, one pointing to the start of the word and the other to the end.
  3. Iterate over the word while the start pointer is less than the end pointer.
  4. Within the loop, check if the characters at the start and end pointers match. If they don't, return false, indicating the word is not a palindrome.
  5. If the characters at the pointers match, move the pointers towards each other.
  6. If the loop completes without returning false, the word is a palindrome, so return true.
*/

// Written explanation:
/*
  The function first removes any whitespace from the word and converts it to lowercase to make it case insensitive. 
  Then, it uses two pointers, one starting from the beginning of the word and the other from the end. 
  It iterates over the word, comparing characters at these pointers. 
  If at any point the characters don't match, it returns false, indicating that the word is not a palindrome. 
  If the loop completes without returning false, it means all characters matched, and the word is a palindrome, so it returns true.
*/

// Custom tests
console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));
console.log("=>", isPalindrome("racecar"));
console.log("=>", isPalindrome("a"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));
console.log("=>", isPalindrome("ab"));

module.exports = isPalindrome;
