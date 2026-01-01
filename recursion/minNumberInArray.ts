/**
 * Finds the minimum number in an array using recursion.
 * @param ary - Array of numbers
 * @param minSoFar - Current minimum value
 * @returns The minimum number in the array
 */
function minNumberInArray(ary: number[], minSoFar: number): number {
  if (ary.length === 0) {
    return minSoFar;
  }

  const currentMin = ary[0] < minSoFar ? ary[0] : minSoFar;
  return minNumberInArray(ary.slice(1), currentMin);
}

const minNumbers = [582, 5896, 200, 10, 2, 8859666, 445, 226, 3333];
console.log(minNumberInArray(minNumbers, minNumbers[0])); //2
