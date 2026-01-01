/**
 * Finds the maximum number in an array using recursion.
 * @param ary - Array of numbers to search
 * @param maxSoFar - Current maximum value
 * @returns The maximum number in the array
 */

function maxNumberInArray(ary: number[], maxSoFar: number): number {
  if (ary.length === 0) {
    return maxSoFar;
  }

  const currentMax = ary[0] > maxSoFar ? ary[0] : maxSoFar;
  return maxNumberInArray(ary.slice(1), currentMax);
}

const maxNumbers = [582, 5896, 200, 10, 2, 8859666, 445, 226, 3333];
console.log(maxNumberInArray(maxNumbers, 0)); //8859666
