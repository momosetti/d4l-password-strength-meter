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
        {children}
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
`;
