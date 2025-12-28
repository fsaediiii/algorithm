export class LinearSearch {
  search(array: number[], target: number): number {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
    return -1;
  }

  searchRecursive(array: number[], target: number, index: number = 0): number {
    if (index >= array.length) return -1;
    if (array[index] === target) return index;
    return this.searchRecursive(array, target, index + 1);
  }
}
