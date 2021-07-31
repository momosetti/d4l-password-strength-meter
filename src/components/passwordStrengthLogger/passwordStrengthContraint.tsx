import React from "react";
import styled from "styled-components";
type PasswordStrengthConstraintType = {
  status: boolean;
  innerContent: string;
};
export default function PasswordStrengthConstraint({
  status = false,
  innerContent,
}: PasswordStrengthConstraintType): JSX.Element {
  const icon = `ri-${status ? "check-double" : "error-warning"}-fill`;
  return (
    <PasswordStrengthConstraintLi status={status}>
      <i className={icon}></i>{" "}
      <p dangerouslySetInnerHTML={{ __html: innerContent }} />
    </PasswordStrengthConstraintLi>
  );
}

const PasswordStrengthConstraintLi = styled.li<{ status: boolean }>`
  color: ${(props) => (props.status ? "var(--green-ok)" : "var(--danger-red)")};
  i {
    vertical-align: middle;
  }
  p {
    display: inline;
  }
`;
