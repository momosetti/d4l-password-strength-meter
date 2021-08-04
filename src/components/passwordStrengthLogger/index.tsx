import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PasswordStrengthConstraint from "./passwordStrengthContraint";
import { PasswordStrengthLoggerProps } from "./types";

const PasswordStrengthLogger: FunctionComponent<PasswordStrengthLoggerProps> =
  ({ passwordStrengthStatus }: PasswordStrengthLoggerProps) => {
    const {
      hasLong,
      capitalLetter,
      hasLowercase,
      containNumber,
      specialChar,
      isValid,
    } = passwordStrengthStatus;
    return (
      <PasswordStrengthWrapper
        tabIndex={!isValid ? 0 : undefined}
        role={!isValid ? "alert" : ""}
        aria-hidden={isValid}
      >
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

const PasswordStrengthWrapper = styled.div<{ tabIndex: number | undefined }>`
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
