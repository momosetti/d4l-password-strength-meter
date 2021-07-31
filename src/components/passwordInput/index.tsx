import React, { useState } from "react";
import styled from "styled-components";
import useDebounce from "../../hooks/useDebounce";
import isValidPassword from "../../utils/passwordValidator";
import PasswordStrengthLogger from "../passwordStrengthLogger";

const PasswordInput: React.FunctionComponent = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const debouncedPassword = useDebounce<string>(passwordValue, 500);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const togglePasswordVisbility = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setPasswordVisibility(!passwordVisibility);
  };
  return (
    <>
      <div className="passwordInput-warper">
        <FormControlWrapper>
          <label htmlFor="password">Password</label>
          <Input
            type={passwordVisibility ? "text" : "password"}
            id="password"
            aria-label="password input"
            value={passwordValue}
            onChange={handlePasswordChange}
          />
          <PasswordVisiblityToggle
            aria-label="show or hide password"
            onClick={togglePasswordVisbility}
          >
            {passwordVisibility ? (
              <i className="ri-eye-line"></i>
            ) : (
              <i className="ri-eye-close-line"></i>
            )}
          </PasswordVisiblityToggle>
        </FormControlWrapper>
      </div>
      <PasswordStrengthLogger
        passwordStrengthStatus={isValidPassword(debouncedPassword)}
      />
    </>
  );
};
export default PasswordInput;

const FormControlWrapper = styled.div`
  display: inline-block;
  margin: 0.7em 0;
  label {
    display: block;
  }
`;

const Input = styled.input`
  border: 1px solid var(--white-grey);
  padding: 0.7em 1em;
  border-radius: 10px;
`;

const PasswordVisiblityToggle = styled.button`
  font-size: 1em;
  padding: 0.3em;
  border: none;
  background-color: transparent;
  margin: 0 0.7em;
  cursor: pointer;
`;
