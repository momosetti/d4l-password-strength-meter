import isValidPassword from "./passwordValidator";

describe("test isValidPassword function", () => {
  test("return false when input is blank", () => {
    const { isValid } = isValidPassword("");
    expect(isValid).toStrictEqual(false);
  });

  test("check existance of lowercase", () => {
    const { hasLowercase } = isValidPassword("abc");
    expect(hasLowercase).toStrictEqual(true);

    const { hasLowercase: lowerCase } = isValidPassword("ABC");
    expect(lowerCase).toStrictEqual(false);
  });

  test("check the length of a password", () => {
    const { hasLong } = isValidPassword("abcdefgh");
    expect(hasLong).toStrictEqual(true);

    const { hasLong: isEightLong } = isValidPassword("abc");
    expect(isEightLong).toStrictEqual(false);
  });

  test("check existance of capital letter", () => {
    const { capitalLetter } = isValidPassword("abc");
    expect(capitalLetter).toStrictEqual(false);

    const { capitalLetter: hasAcapitalLetter } = isValidPassword("ABC");
    expect(hasAcapitalLetter).toStrictEqual(true);
  });

  test("check existance of number", () => {
    const { containNumber } = isValidPassword("ab2c");
    expect(containNumber).toStrictEqual(true);

    const { containNumber: hasAnumber } = isValidPassword("abc");
    expect(hasAnumber).toStrictEqual(false);
  });

  test("check existance of special character", () => {
    const { specialChar } = isValidPassword("ab2@c");
    expect(specialChar).toStrictEqual(true);

    const { specialChar: hasAspecialCharacter } = isValidPassword("ab2c");
    expect(hasAspecialCharacter).toStrictEqual(false);
  });

  test("check if the password is valid", () => {
    const { isValid } = isValidPassword("Abcd123!");
    expect(isValid).toStrictEqual(true);
  });
});
