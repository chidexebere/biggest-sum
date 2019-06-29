const biggestSum = require("./functions");

describe("Checking Errors", () => {
  test("Throw Error if input list is not an array", () => {
    expect(() => {
      biggestSum((1, 1));
    }).toThrow();
  });

  test("Throw Error if input array contains a non-integer", () => {
    expect(() => {
      biggestSum([4, 3, 2, 1, 0.5]);
    }).toThrow();
  });

  test("Throw Error if input array contains a non-integer", () => {
    expect(() => {
      biggestSum(["banana", 0.5, NAN, 100, 12]);
    }).toThrow();
  });
});

describe("Biggest Possible Sum Test Cases", () => {
  test("[0, 1, 2, 3, 4, 5] should return 27", () => {
    expect(biggestSum([0, 1, 2, 3, 4, 5])).toBe(27);
  });
  test("[-1, 0, 1] should return 1", () => {
    expect(biggestSum([-1, 0, 1])).toBe(1);
  });
  test("[1, 1] should return 2", () => {
    expect(biggestSum([1, 1])).toBe(2);
  });

  test("[-2, -3, -1, -4, -5] should return 25", () => {
    expect(biggestSum([-2, -3, -1, -4, -5])).toBe(25);
  });

  test("[-4, -3, 0, 0, 2] should return 14", () => {
    expect(biggestSum([-4, -3, 0, 0, 2])).toBe(14);
  });

  test("[-4, -3, -1, 100, 0] should return 112", () => {
    expect(biggestSum([-4, -3, -1, 100, 0])).toBe(112);
  });

  test("[-40, -5, 0, 171] should return 371", () => {
    expect(biggestSum([-40, -5, 0, 171])).toBe(371);
  });

  test("[-4, -3, 0, 0] should return 12", () => {
    expect(biggestSum([-4, -3, 0, 0])).toBe(12);
  });

  test("[-5, -3, -5, -4, -5] should return 42", () => {
    expect(biggestSum([-5, -3, -5, -4, -5])).toBe(42);
  });

  test("[-4] should return -4", () => {
    expect(biggestSum([-4])).toBe(-4);
  });

  test("[0] should return 0", () => {
    expect(biggestSum([0])).toBe(0);
  });
});
