
export class BinarySearch {
   search(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (array[mid] === target) return mid;
      else if (array[mid] < target) left = mid + 1;
      else right = mid - 1;
    }

    return -1;
  }

   searchRecursive(array: number[], target: number, left: number = 0, right: number = array.length - 1): number {
    if (left > right) return -1;

    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) return mid;
    else if (array[mid] > target) return this.searchRecursive(array, target, left, mid - 1);
    else return this.searchRecursive(array, target, mid + 1, right);
  }
}
