/**
 * Recursively reverses a string.
 * @param str - Input string
 * @returns Reversed string
 */

function reverseStringRecursive(str: string): string {
  if (str.length === 0) {
    return "";
  }

  return reverseStringRecursive(str.slice(1)) + str[0];
}

const input = "live";
const result = reverseStringRecursive(input);

console.log(result); // evil
