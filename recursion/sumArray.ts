/**
 * Recursively calculates the sum of array elements.
 * @param arr - Array of numbers
 * @returns Sum of elements
 */

function sumArray(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1));
}

const array = [5, 2, 3, 9, 1];
console.log(sumArray(array)); // 20
