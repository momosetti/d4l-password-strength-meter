import { isValidPasswordType } from "../types/utilsTypes";

export default function isValidPassword(value: string): isValidPasswordType {
  const hasAtLeast8Characters = new RegExp(/^.{8,}/).test(value);
  const hasAtLeastCapitalLetter = new RegExp(/\w*[A-Z]\w*/).test(value);
  const hasAtLeastLowerCase = new RegExp(/\w*[a-z]\w*/).test(value);
  const hasAtLeastOneNumber = new RegExp(/\w*[0-9]\w*/).test(value);
  const hasAtLeastSpecialChar = new RegExp(/[^A-Za-z0-9]/).test(value);
  return {
    isValid:
      hasAtLeast8Characters &&
      hasAtLeastCapitalLetter &&
      hasAtLeastLowerCase &&
      hasAtLeastOneNumber &&
      hasAtLeastSpecialChar,
    hasLong: hasAtLeast8Characters,
    capitalLetter: hasAtLeastCapitalLetter,
    hasLowercase: hasAtLeastLowerCase,
    containNumber: hasAtLeastOneNumber,
    specialChar: hasAtLeastSpecialChar,
  };
}
