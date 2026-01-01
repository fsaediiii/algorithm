import RightRotationByOne from ".";

describe("RightRotationByOne Tests", () => {
  let rotator: RightRotationByOne;

  beforeEach(() => {
    rotator = new RightRotationByOne();
  });

  test("rotateUsingPopUnshift", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [5, 1, 2, 3, 4];
    expect(rotator.rotateUsingPopUnshift([...input])).toEqual(expected);
  });

  test("rotateUsingTemp", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [5, 1, 2, 3, 4];
    expect(rotator.rotateUsingTemp([...input])).toEqual(expected);
  });
});
