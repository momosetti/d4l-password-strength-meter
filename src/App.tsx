import React from "react";
import styled from "styled-components";
import EmailInput from "./components/emailInput";
import SectionWrapper from "./components/layout/sectionWrapper";
import PasswordInput from "./components/passwordInput";
import RegisterFormWrapper from "./components/layout/registerFormWrapper";

const App: React.FunctionComponent = () => {
  return (
    <CenterHorizontally>
      <SectionWrapper>
        <h1>Register</h1>
        <p>Create your personal account</p>
        <RegisterFormWrapper>
          <EmailInput />
          <PasswordInput />
        </RegisterFormWrapper>
      </SectionWrapper>
    </CenterHorizontally>
  );
};

export default App;

const CenterHorizontally = styled.div`
  display: flex;
  justify-content: center;
`;
