import Comparator from "../../utils/comparator.util";

export class QuickSort {
  private compare: Comparator<number>;

  constructor() {
    this.compare = new Comparator();
  }

  sort(arr: number[]): number[] {
    if (!arr || arr.length <= 1) return arr;

    let stack: number[][] = [[...arr]];
    let sorted: number[] = [];

    while (stack.length > 0) {
      let currentArr = stack.pop()!;

      if (currentArr.length <= 1) {
        sorted.push(...currentArr);
        continue;
      }

      let pivot = currentArr[currentArr.length - 1];
      let arrLeft: number[] = [];
      let arrRight: number[] = [];

      for (let i = 0; i < currentArr.length - 1; i++) {
        if (this.compare.lessThan(currentArr[i], pivot)) {
          arrLeft.push(currentArr[i]);
        } else {
          arrRight.push(currentArr[i]);
        }
      }

      let newPivot = [pivot];

      if (arrRight.length > 0) stack.push(arrRight);
      stack.push(newPivot);
      if (arrLeft.length > 0) stack.push(arrLeft);
    }

    return sorted;
  }

  sortRecursive(arr: number[]): number[] {
    if (!arr || arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const arrLeft: number[] = [];
    const arrRight: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (this.compare.lessThan(arr[i], pivot)) {
        arrLeft.push(arr[i]);
      } else {
        arrRight.push(arr[i]);
      }
    }

    return [...this.sortRecursive(arrLeft), pivot, ...this.sortRecursive(arrRight)];
  }
}
