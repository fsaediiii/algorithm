import { JumpSearch } from "../../../searching/jump";

describe("JumpSearch – edge case tests", () => {
  describe("when target value appears multiple times", () => {
    test("should return the first occurrence index", () => {
      const arr = [5, 6, 6, 6, 6, 10, 15, 32, 53];
      const target = 6;
      const search = new JumpSearch(arr);

      expect(search.search(target)).toEqual(1);
    });
  });

  describe("when target does not exist in array", () => {
    test("should return -1", () => {
      const arr = [5, 6, 10, 15, 32, 53];
      const target = 90;
      const search = new JumpSearch(arr);

      expect(search.search(target)).toEqual(-1);
    });
  });

  describe("when target is greater than the last element", () => {
    test("should return -1", () => {
      const arr = [5, 6, 10, 15, 32, 53];
      const target = 80;
      const search = new JumpSearch(arr);

      expect(search.search(target)).toEqual(-1);
    });
  });

  describe("when array is empty", () => {
    test("should return -1", () => {
      const arr: number[] = [];
      const target = 2;
      const search = new JumpSearch(arr);

      expect(search.search(target)).toEqual(-1);
    });
  });

  describe("when target is smaller than the first element", () => {
    test("should return -1", () => {
      const arr = [5, 6, 10, 15, 32, 53];
      const target = 2;
      const search = new JumpSearch(arr);

      expect(search.search(target)).toEqual(-1);
    });
  });

  describe("when array has only one element", () => {
    test("should return index 0 if target exists", () => {
      const arr = [2];
      const target = 2;
      const search = new JumpSearch(arr);

      expect(search.search(target)).toEqual(0);
    });

    test("should return -1 if target does not exist", () => {
      const arr = [8];
      const target = 2;
      const search = new JumpSearch(arr);

      expect(search.search(target)).toEqual(-1);
    });
  });
});
