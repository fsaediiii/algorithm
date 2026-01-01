/**
 * Counts the number of elements in an array using recursion.
 * @param ary - Array of elements
 * @returns Number of elements in the array
 */
function countArrayElements(ary: number[]): number {
  if (ary.length === 0) {
    return 0;
  }

  return 1 + countArrayElements(ary.slice(1));
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(countArrayElements(numbers));
