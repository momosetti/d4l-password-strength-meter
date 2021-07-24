import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 1em;
  margin: 1em;
  border: 1px solid var(--white-grey);
`;

const SectionWrapper: React.FunctionComponent = ({ children }) => {
  return <Section>{children}</Section>;
};
export default SectionWrapper;
