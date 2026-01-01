/**
 * Checks if a string is a palindrome using recursion.
 * @param str - The string to check
 * @param pointer - The current index from the start (default 0)
 * @returns true if the string is a palindrome, false otherwise
 */

function isPalindrome(str: string, pointer: number = 0): boolean {
  if (pointer >= str.length / 2) return true;
  if (str[pointer] !== str[str.length - pointer - 1]) return false;
  return isPalindrome(str, pointer + 1);
}

const string1 = "madam";
const string2 = "level";
const string3 = "hello";
const string4 = "racecar";

console.log(isPalindrome(string1)); // true
console.log(isPalindrome(string2)); // true
console.log(isPalindrome(string3)); // false
console.log(isPalindrome(string4)); // true
