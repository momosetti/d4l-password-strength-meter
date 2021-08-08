import React from "react";
import { screen, render } from "@testing-library/react";
import "jest-styled-components";
import PasswordStrengthConstraint from "./index";

describe("test <PasswordStrenghtConstraint/>", () => {
  test("render <PasswordStrenghtConstraint/> correctly", () => {
    const { container } = render(
      <PasswordStrengthConstraint status={true} innerContent="hello world" />
    );

    expect(screen.getByText("hello world")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  test("get an error indication when the status is false", () => {
    const { container } = render(
      <PasswordStrengthConstraint
        status={false}
        innerContent="capital letter"
      />
    );
    const iconEl = screen.getByTitle("icon");

    expect(iconEl).toHaveClass("ri-error-warning-fill");
    expect(container.firstChild).toHaveStyleRule("color", "var(--danger-red)");
  });

  test("get a valid indication when the status is true", () => {
    const { container } = render(
      <PasswordStrengthConstraint status={true} innerContent="capital letter" />
    );
    const iconEl = screen.getByTitle("icon");

    expect(iconEl).toHaveClass("ri-check-double-fill");
    expect(container.firstChild).toHaveStyleRule("color", "var(--green-ok)");
  });
});
