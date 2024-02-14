import React from "react";
import { render } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage component", () => {
  test("renders error message correctly", () => {
    const errorMessage = "An error occurred.";
    const { getByText } = render(<ErrorMessage message={errorMessage} />);
    const errorElement = getByText(`Error: ${errorMessage}`);
    expect(errorElement).toBeInTheDocument();
  });
});
