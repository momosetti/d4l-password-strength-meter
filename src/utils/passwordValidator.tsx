import { isValidPasswordType } from "../types/utilsTypes";

export default function isValidPassword(value: string): isValidPasswordType {
  const hasAtLeast8Characters = new RegExp(/^.{8,}/);
  const hasAtLeastCapitalLetter = new RegExp(/\w*[A-Z]\w*/);
  const hasAtLeastLowerCase = new RegExp(/\w*[a-z]\w*/);
  const hasAtLeastOneNumber = new RegExp(/\w*[0-9]\w*/);
  const hasAtLeastSpecialChar = new RegExp(/[^A-Za-z0-9]/);
  return {
    hasLong: hasAtLeast8Characters.test(value),
    capitalLetter: hasAtLeastCapitalLetter.test(value),
    hasLowercase: hasAtLeastLowerCase.test(value),
    containNumber: hasAtLeastOneNumber.test(value),
    specialChar: hasAtLeastSpecialChar.test(value),
  };
}
