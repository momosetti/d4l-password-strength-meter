import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { isValidPasswordType } from "../../types/utilsTypes";
import PasswordStrengthConstraint from "./passwordStrengthContraint";

type PasswordStrengthLoggerProps = {
  passwordStrengthStatus: isValidPasswordType;
};
const PasswordStrengthLogger: FunctionComponent<PasswordStrengthLoggerProps> =
  ({ passwordStrengthStatus }: PasswordStrengthLoggerProps) => {
    const { hasLong, capitalLetter, hasLowercase, containNumber, specialChar } =
      passwordStrengthStatus;
    console.log(passwordStrengthStatus);
    return (
      <PasswordStrengthWrapper>
        <p>Make sure your password contains at least</p>
        <ul>
          <PasswordStrengthConstraint
            status={capitalLetter}
            innerContent="a capital letter,"
          />
          <PasswordStrengthConstraint
            status={hasLowercase}
            innerContent="a lowercase letter,"
          />
          <PasswordStrengthConstraint
            status={specialChar}
            innerContent="a special character, <span>and</span>"
          />
          <PasswordStrengthConstraint
            status={containNumber}
            innerContent="contain a number"
          />
          <PasswordStrengthConstraint
            status={hasLong}
            innerContent="<span>and it </span> must be at least 8 characters long."
          />
        </ul>
      </PasswordStrengthWrapper>
    );
  };
export default PasswordStrengthLogger;

const PasswordStrengthWrapper = styled.div`
  display: block;
  margin: 0.7em 0;
  ul {
    list-style: none;
  }
  li {
    span {
      color: #000;
    }
  }
`;
