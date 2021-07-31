import React from "react";
import styled from "styled-components";

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
const EmailInput: React.FunctionComponent = () => {
  return (
    <FormControlWrapper>
      <label htmlFor="email">Email address</label>
      <Input aria-label="email input" type="email" id="email" name="email" />
    </FormControlWrapper>
  );
};
export default EmailInput;
