import BubbleSort from "../../../sorting/bubble/bubble";

describe("BubbleSort", () => {
  let sorter: BubbleSort;

  beforeEach(() => {
    sorter = new BubbleSort();
  });

  describe("iterative sort()", () => {
    test("sorts an array of numbers in ascending order", () => {
      const input = [4, 5, 2, 1, 6, 3, 7];
      const expected = [1, 2, 3, 4, 5, 6, 7];
      expect(sorter.sort(input)).toEqual(expected);
    });

    test("works with repeated numbers", () => {
      const input = [3, 1, 2, 3, 1];
      const expected = [1, 1, 2, 3, 3];
      expect(sorter.sort(input)).toEqual(expected);
    });

    test("returns an empty array when input is empty", () => {
      expect(sorter.sort([])).toEqual([]);
    });

    test("returns a single element array as is", () => {
      expect(sorter.sort([42])).toEqual([42]);
    });

    test("does not mutate the original array", () => {
      const input = [3, 2, 1];
      const copy = [...input];
      sorter.sort(input);
      expect(input).toEqual(copy);
    });
  });

  describe("recursive recursionSort()", () => {
    test("sorts an array of numbers in ascending order", () => {
      const input = [4, 5, 2, 1, 6, 3, 7];
      const expected = [1, 2, 3, 4, 5, 6, 7];
      expect(sorter.recursionSort([...input])).toEqual(expected);
    });

    test("works with repeated numbers", () => {
      const input = [3, 1, 2, 3, 1];
      const expected = [1, 1, 2, 3, 3];
      expect(sorter.recursionSort([...input])).toEqual(expected);
    });

    test("returns an empty array when input is empty", () => {
      expect(sorter.recursionSort([])).toEqual([]);
    });

    test("returns a single element array as is", () => {
      expect(sorter.recursionSort([42])).toEqual([42]);
    });
  });
});
