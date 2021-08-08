import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { axe, toHaveNoViolations } from "jest-axe";

describe("test the main App", () => {
  test("renders App component correctly", () => {
    render(<App />);
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("should not have any accessiblity violations", async () => {
    expect.extend(toHaveNoViolations);

    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
