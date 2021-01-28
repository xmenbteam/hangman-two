const { compArr } = require("./testfuncs");

describe("create sorted array", () => {
  it("Returns usedLetters array sorted alphabetically", () => {
    const usedLetters = ["S", "L", "E", "P", "Y"];
    const expectedOutput = ["E", "L", "P", "S", "Y"];
    const actualOutput = compArr(usedLetters);
    expect(actualOutput).toBe(expectedOutput);
  });
});
