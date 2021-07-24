import React from "react";
import EmailInput from "./components/emailInput";
import SectionWrapper from "./components/layout/sectionWrapper";

const App: React.FunctionComponent = () => {
  return (
    <SectionWrapper>
      <h1>Register</h1>
      <p>Create your personal account</p>
      <EmailInput />
    </SectionWrapper>
  );
};

export default App;
