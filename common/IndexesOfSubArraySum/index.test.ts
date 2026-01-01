// common/IndexesOfSubArraySum/index.test.ts
import IndexesOfSubArraySum from "./index";

describe("IndexesOfSubArraySum", () => {
  const solver = new IndexesOfSubArraySum();

  test("works with single element equal to target", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    expect(solver.subarraySum(arr, target)).toEqual([3, 3]);
  });

  test("works with subarray at the beginning", () => {
    const arr = [1, 2, 3, 4, 5];
    const target = 3;
    expect(solver.subarraySum(arr, target)).toEqual([3, 3]);
  });

  test("works with no matching subarray", () => {
    const arr = [1, 2, 4, 5];
    const target = 10;
    expect(solver.subarraySum(arr, target)).toEqual([-1]);
  });
});
