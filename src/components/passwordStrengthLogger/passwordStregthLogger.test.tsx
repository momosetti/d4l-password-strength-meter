import React from "react";
import { screen, render } from "@testing-library/react";
import PasswordStrengthLogger from "./index";
import isValidPassword from "../../utils/passwordValidator";

describe("test PasswordStrengthLogger", () => {
  test("PasswordStrengthLogger render properly", () => {
    render(
      <PasswordStrengthLogger passwordStrengthStatus={isValidPassword("")} />
    );

    expect(
      screen.getByText("Make sure your password contains at least")
    ).toBeInTheDocument();
  });

  test("should have a role='alert' attribute and it's focusable (tabindex=0) when the password is invalid", () => {
    const { container } = render(
      <PasswordStrengthLogger passwordStrengthStatus={isValidPassword("")} />
    );

    expect(container.firstChild).toHaveAttribute("role", "alert");
    expect(container.firstChild).toHaveAttribute("tabindex", "0");
  });

  test("it should not be focusable and not readable for screen readers (aria-hidden=true),when the password is valid ", () => {
    const { container } = render(
      <PasswordStrengthLogger
        passwordStrengthStatus={isValidPassword("Abcde25!e")}
      />
    );

    expect(container.firstChild).not.toHaveAttribute("tabindex");
    expect(container.firstChild).not.toHaveAttribute("role");
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
