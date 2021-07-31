import React from "react";
import styled from "styled-components";

const SubmitButtom = styled.button`
  display: block;
  color: #fff;
  background-color: var(--primary);
  border: none;
  padding: 1em;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;
type RegisterFormWrapperProps = {
  children: React.ReactNode;
};
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
