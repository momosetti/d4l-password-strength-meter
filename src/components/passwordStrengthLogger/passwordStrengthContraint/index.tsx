import React from "react";
import styled from "styled-components";
import { PasswordStrengthConstraintType } from "./types";

export default function PasswordStrengthConstraint({
  status = false,
  innerContent,
}: PasswordStrengthConstraintType): JSX.Element {
  const icon = `ri-${status ? "check-double" : "error-warning"}-fill`;
  return (
    <PasswordStrengthConstraintLi status={status} aria-hidden={status}>
      <i title="icon" className={icon}></i>
      <p dangerouslySetInnerHTML={{ __html: innerContent }} />
    </PasswordStrengthConstraintLi>
  );
}

const PasswordStrengthConstraintLi = styled.li<{ status: boolean }>`
  color: ${(props) => (props.status ? "var(--green-ok)" : "var(--danger-red)")};
  i {
    vertical-align: middle;
    margin-right: 0.3em;
  }
  p {
    display: inline;
  }
`;
