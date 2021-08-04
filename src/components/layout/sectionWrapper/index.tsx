import React from "react";
import styled from "styled-components";
import { SectionWrapperProps } from "./types";

const SectionWrapper: React.FunctionComponent<SectionWrapperProps> = ({
  children,
}: SectionWrapperProps) => {
  return <Section>{children}</Section>;
};
export default SectionWrapper;

const Section = styled.main`
  width: 50%;
  padding: 2em;
  margin: 1em;
  border: 1px solid var(--white-grey);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  & > h1 {
    font-size: 2em;
  }
  & > p {
    color: var(--dark-grey);
    font-size: 1.1em;
    font-weight: 600;
  }
`;
