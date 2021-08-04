import React from "react";
import styled from "styled-components";
import { RegisterFormWrapperProps } from "./types";

const RegisterFormWrapper: React.FunctionComponent<RegisterFormWrapperProps> =
  ({ children }: RegisterFormWrapperProps) => {
    const handleSubmit = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      e.preventDefault();
    };
    return (
      <form id="register-form">
        <RegiserFormChildrenWrapper>{children}</RegiserFormChildrenWrapper>
        <label htmlFor="term of service">
          <input type="checkbox" name="term of service" id="term of service" />{" "}
          I agree to the term of service
        </label>
        <SubmitButtom onClick={handleSubmit} type="submit">
          register now
        </SubmitButtom>
      </form>
    );
  };
export default RegisterFormWrapper;

const SubmitButtom = styled.button`
  display: block;
  color: #000;
  background-color: var(--primary);
  border: none;
  padding: 1em;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin: 0.7em 0;
`;
const RegiserFormChildrenWrapper = styled.div`
  margin-bottom: 3em;
`;
