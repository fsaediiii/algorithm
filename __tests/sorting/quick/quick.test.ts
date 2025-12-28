import { QuickSort } from "../../../sorting/quick/quick";

describe("QuickSort", () => {
  let sorter: QuickSort;

  beforeEach(() => {
    sorter = new QuickSort();
  });

  describe("Iterative sort", () => {
    test("Iterative: sort normal array", () => {
      const input = [8, 3, 1, 7, 0, 10, 2];
      const expected = [0, 1, 2, 3, 7, 8, 10];
      expect(sorter.sort([...input])).toEqual(expected);
    });

    test("Iterative: sort empty array", () => {
      const input: number[] = [];
      const expected: number[] = [];
      expect(sorter.sort([...input])).toEqual(expected);
    });

    test("Iterative: sort single element array", () => {
      const input = [5];
      const expected = [5];
      expect(sorter.sort([...input])).toEqual(expected);
    });

    test("Iterative: sort array with duplicates", () => {
      const input = [2, 2, 1, 1];
      const expected = [1, 1, 2, 2];
      expect(sorter.sort([...input])).toEqual(expected);
    });

    test("Iterative: sort array with negative numbers", () => {
      const input = [9, -1, 0, 5, 3];
      const expected = [-1, 0, 3, 5, 9];
      expect(sorter.sort([...input])).toEqual(expected);
    });
  });

  describe("Recursive sort", () => {
    test("Recursive: sort normal array", () => {
      const input = [8, 3, 1, 7, 0, 10, 2];
      const expected = [0, 1, 2, 3, 7, 8, 10];
      expect(sorter.sortRecursive([...input])).toEqual(expected);
    });

    test("Recursive: sort empty array", () => {
      const input: number[] = [];
      const expected: number[] = [];
      expect(sorter.sortRecursive([...input])).toEqual(expected);
    });

    test("Recursive: sort single element array", () => {
      const input = [5];
      const expected = [5];
      expect(sorter.sortRecursive([...input])).toEqual(expected);
    });

    test("Recursive: sort array with duplicates", () => {
      const input = [2, 2, 1, 1];
      const expected = [1, 1, 2, 2];
      expect(sorter.sortRecursive([...input])).toEqual(expected);
    });

    test("Recursive: sort array with negative numbers", () => {
      const input = [9, -1, 0, 5, 3];
      const expected = [-1, 0, 3, 5, 9];
      expect(sorter.sortRecursive([...input])).toEqual(expected);
    });
  });
});
