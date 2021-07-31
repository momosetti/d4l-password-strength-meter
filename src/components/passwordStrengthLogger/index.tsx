import React from "react";
import styled from "styled-components";

const PasswordStrengthWrapper = styled.div`
  display: block;
  margin: 0.7em 0;
  li {
    display: flex;
    i {
      align-self: center;
      margin-right: 0.2em;
    }
  }
`;
const PasswordStrengthLogger: React.FunctionComponent = () => {
  return (
    <PasswordStrengthWrapper>
      <p>Make sure your password contains at least</p>
      <ul>
        <li>
          <i className="ri-error-warning-fill"></i> a capital letter,
        </li>
        <li>
          <i className="ri-check-double-fill"></i> a lowercase letter,
        </li>
        <li>
          <i className="ri-check-double-fill"></i>a special character{" "}
          <span>and</span>
        </li>
        <li>
          <i className="ri-check-double-fill"></i> contain a number
        </li>
        <li>
          <i className="ri-check-double-fill"></i> <span>and it</span> must be
          at least 8 characters long.
        </li>
      </ul>
    </PasswordStrengthWrapper>
  );
};
export default PasswordStrengthLogger;
