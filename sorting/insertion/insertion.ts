import Comparator from "../../utils/comparator.util";

export default class InsertionSort {
  private compare: Comparator<number>;

  constructor() {
    this.compare = new Comparator();
  }

  sort(array: number[]): number[] {
    const result = [...array];
    for (let currentIndex = 1; currentIndex < result.length; currentIndex++) {
      const currentValue = result[currentIndex];
      let sortedIndex = currentIndex - 1;

      while (sortedIndex >= 0 && this.compare.greaterThan(result[sortedIndex], currentValue)) {
        result[sortedIndex + 1] = result[sortedIndex];
        sortedIndex--;
      }

      result[sortedIndex + 1] = currentValue;
    }
    return result;
  }

  recursiveSort(array: number[], pointer: number = 1): number[] {
    const result = [...array];
    if (pointer >= result.length) return result;

    const currentValue = result[pointer];
    let sortedIndex = pointer - 1;

    while (sortedIndex >= 0 && this.compare.greaterThan(result[sortedIndex], currentValue)) {
      result[sortedIndex + 1] = result[sortedIndex];
      sortedIndex--;
    }

    result[sortedIndex + 1] = currentValue;

    return this.recursiveSort(result, pointer + 1);
  }
}
