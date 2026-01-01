/**
 * Recursively reverses an array in place.
 * @param ary - The array to reverse
 * @param pointer - The current index to swap from the start
 * @returns The reversed array
 */

function reverseArray(ary: number[], pointer: number = 0): number[] {
  if (pointer >= ary.length / 2) return ary;

  [ary[pointer], ary[ary.length - pointer - 1]] = [ary[ary.length - pointer - 1], ary[pointer]];

  return reverseArray(ary, pointer + 1);
}

const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(ary)); // Output: [9, 8, 7, 6, 5, 4, 3, 2, 1]
