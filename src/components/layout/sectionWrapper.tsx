import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 1em;
  margin: 1em;
  border: 1px solid var(--white-grey);
  h1 {
    font-size: 2em;
  }
  p {
    color: var(--dark-grey);
    font-size: 1.1em;
    font-weight: 600;
  }
`;

const SectionWrapper: React.FunctionComponent = ({ children }) => {
  return <Section>{children}</Section>;
};
export default SectionWrapper;
