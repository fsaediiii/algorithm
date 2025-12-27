import Comparator from "../../utils/comparator.util";

export class SelectionSort {
  private compare: Comparator<number>;

  constructor(compareCallback?: (a: number, b: number) => number) {
    this.compare = new Comparator(compareCallback);
  }

  private swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  sort(array: number[]): number[] {
    const result = [...array];

    for (let i = 0; i < result.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < result.length; j++) {
        if (this.compare.lessThan(result[j], result[minIndex])) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        this.swap(result, i, minIndex);
      }
    }

    return result;
  }

  recursionSort(
    ary: number[],
    pointer: number = 0,
    scanIndex: number = pointer + 1,
    minIndex: number = pointer,
  ): number[] {
    if (pointer >= array.length - 1) return array;

    if (scanIndex >= array.length) {
      if (minIndex !== pointer) {
        this.swap(ary, pointer, minIndex);
      }
      return this.recursionSort(ary, pointer + 1, pointer + 2, pointer + 1);
    }

    if (ary[scanIndex] < ary[minIndex]) {
      minIndex = scanIndex;
    }

    return this.recursionSort(ary, pointer, scanIndex + 1, minIndex);
  }
}
