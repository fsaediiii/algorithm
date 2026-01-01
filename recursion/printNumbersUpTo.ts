/**
 * Recursively prints numbers from 1 up to the given number.
 * @param n - The number up to which to print
 */
function printNumbersUpTo(n: number): void {
  if (n === 0) return;
  printNumbersUpTo(n - 1);
  console.log(n);
}

const N = 7;
printNumbersUpTo(N);
