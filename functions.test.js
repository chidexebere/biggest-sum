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
  describe("If all integers in the array are positive", () => {
    test("[0, 1, 2, 3, 4, 5] should return 27", () => {
      expect(biggestSum([0, 1, 2, 3, 4, 5])).toBe(27);
    });

    test("[1, 1] should return 2", () => {
      expect(biggestSum([1, 1])).toBe(2);
    });
    test("[0] should return 0", () => {
      expect(biggestSum([0])).toBe(0);
    });
  });

  describe("If all integers in the array are negative", () => {
    test("[-5, -3, -5, -4, -5] should return 42", () => {
      expect(biggestSum([-5, -3, -5, -4, -5])).toBe(42);
    });

    test("[-2, -3, -1, -4, -5] should return 25", () => {
      expect(biggestSum([-2, -3, -1, -4, -5])).toBe(25);
    });

    test("[-4] should return -4", () => {
      expect(biggestSum([-4])).toBe(-4);
    });
  });

  describe("Odd Array; odd no of negatives and contains no zeros", () => {
    test("[-1, 1, 2] should return 1", () => {
      expect(biggestSum([-1, 1, 2])).toBe(1);
    });

    test("[-2, 3, -3, -1, 1] should return 8", () => {
      expect(biggestSum([-2, 3, -3, -1, 1])).toBe(8);
    });

    test("[9, 9, 9, 2, -2] should return 97", () => {
      expect(biggestSum([9, 9, 9, 2, -2])).toBe(97);
    });
  });

  describe("Odd Array; odd no of negatives and contains even no of zeros", () => {
    test("[-1, 0, 0] should return 0", () => {
      expect(biggestSum([-1, 0, 0])).toBe(0);
    });
    test("[0, 0, 0, 0, -2] should return 0", () => {
      expect(biggestSum([0, 0, 0, 0, -2])).toBe(0);
    });
    test("[-1, 0, 10, 0, -1, 8, -5] should return 85", () => {
      expect(biggestSum([-1, 0, 10, 0, -1, 8, -5])).toBe(85);
    });
  });

  describe("Odd Array; odd no of negatives and contains odd no of zeros", () => {
    test("[-1, 0, 1] should return 1", () => {
      expect(biggestSum([-1, 0, 1])).toBe(1);
    });

    test("[-4, -3, -1, 100, 0] should return 112", () => {
      expect(biggestSum([-4, -3, -1, 100, 0])).toBe(112);
    });
  });

  describe("Odd Array; even no of negatives and contains no zeros", () => {
    test("[-1, -1, 2] should return 3", () => {
      expect(biggestSum([-1, -1, 2])).toBe(3);
    });
    test("[2, 3, 1, -2, -1] should return 9", () => {
      expect(biggestSum([2, 3, 1, -2, -1])).toBe(9);
    });
    test("[9, 9, 9, -2, -2] should return 94", () => {
      expect(biggestSum([9, 9, 9, -2, -2])).toBe(94);
    });
  });

  describe("Odd Array; even no of negatives and contains even no of zeros", () => {
    test("[-4, -3, 0, 0, 2] should return 14", () => {
      expect(biggestSum([-4, -3, 0, 0, 2])).toBe(14);
    });
    test("[-1, -2, 0, 0, 3, 6, 1] should return 21", () => {
      expect(biggestSum([-1, -2, 0, 0, 3, 6, 1])).toBe(21);
    });
  });

  describe("Odd Array; even no of negatives and contains odd no of zeros", () => {
    test("[-4, -5, 0, 17, 11] should return 207", () => {
      expect(biggestSum([-4, -5, 0, 17, 11])).toBe(207);
    });

    test("[-1, -1, 0, 0, 0, 5, 4] should return 21", () => {
      expect(biggestSum([-1, -1, 0, 0, 0, 5, 4])).toBe(21);
    });
  });

  describe("Even Array; odd no of negatives and contains no zeros", () => {
    test("[9, 9, 2, -2] should return 81", () => {
      expect(biggestSum([9, 9, 2, -2])).toBe(81);
    });

    test("[-3, -3, -3, 2, 2, 2] should return 12", () => {
      expect(biggestSum([-3, -3, -3, 2, 2, 2])).toBe(12);
    });
  });

  describe("Even Array; odd no of negatives and contains even no of zeros", () => {
    test("[0, -5, 0, 171] should return 171", () => {
      expect(biggestSum([0, -5, 0, 171])).toBe(171);
    });

    test("[-1, -2, -1, 0, 4, 0] should return 6", () => {
      expect(biggestSum([-1, -2, -1, 0, 4, 0])).toBe(6);
    });
  });

  describe("Even Array; odd no of negatives and contains odd no of zeros", () => {
    test("[2, 3, -1, 0] should return 5", () => {
      expect(biggestSum([2, 3, -1, 0])).toBe(5);
    });
    test("[-3, -3, -3, 2, 2, 0] should return 13", () => {
      expect(biggestSum([-3, -3, -3, 2, 2, 0])).toBe(13);
    });
  });

  describe("Even Array; even no of negatives and contains no zeros", () => {
    test("[9, 9, -2, -2] should return 77", () => {
      expect(biggestSum([9, 9, -2, -2])).toBe(77);
    });

    test("[4, -2, -1, 3, 6, 1] should return 30", () => {
      expect(biggestSum([4, -2, -1, 3, 6, 1])).toBe(30);
    });
  });

  describe("Even Array; even no of negatives and contains even no of zeros", () => {
    test("[-4, -3, 0, 0] should return 12", () => {
      expect(biggestSum([-4, -3, 0, 0])).toBe(12);
    });

    test("[-4, -1, 0, 0, 3, 2] should return 10", () => {
      expect(biggestSum([-4, -1, 0, 0, 3, 2])).toBe(10);
    });
  });

  describe("Even Array; even no of negatives and contains odd no of zeros", () => {
    test("[-40, -5, 0, 171] should return 371", () => {
      expect(biggestSum([-40, -5, 0, 171])).toBe(371);
    });

    test("[0, -2, -1, 3, 2, 3] should return 13", () => {
      expect(biggestSum([0, -2, -1, 3, 2, 3])).toBe(13);
    });
  });
});
