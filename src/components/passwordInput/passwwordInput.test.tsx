import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PasswordInput from "./index";

describe("test Pass", () => {
  test("render PasswordInput", () => {
    render(<PasswordInput />);
    const inputEl = screen.getByLabelText("password input");
    const btnEl = screen.getByLabelText("show or hide password");

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "password");
    expect(btnEl).toBeInTheDocument();
  });

  test("test password toggle button", () => {
    render(<PasswordInput />);
    const inputEl = screen.getByLabelText("password input");
    const btnEl = screen.getByLabelText("show or hide password");

    fireEvent.click(btnEl);

    expect(inputEl).toHaveAttribute("type", "text");
  });

  test("get error when password is invalid", () => {
    render(<PasswordInput />);
    const inputEl = screen.getByLabelText("password input");

    fireEvent.change(inputEl, { target: { value: "abcd!" } });

    expect(inputEl).toHaveAttribute("aria-invalid", "false");
  });
});
