import React from "react";
import EmailInput from "./components/emailInput";
import SectionWrapper from "./components/layout/sectionWrapper";
import PasswordInput from "./components/passwordInput";
import RegisterFormWrapper from "./components/registerFormWrapper";

const App: React.FunctionComponent = () => {
  return (
    <SectionWrapper>
      <h1>Register</h1>
      <p>Create your personal account</p>
      <RegisterFormWrapper>
        <EmailInput />
        <PasswordInput />
      </RegisterFormWrapper>
    </SectionWrapper>
  );
};

export default App;
