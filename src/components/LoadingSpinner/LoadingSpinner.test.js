import React from "react";
import { render } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner component", () => {
  test("renders loading spinner when loading is true", () => {
    const { getByTestId } = render(<LoadingSpinner loading={true} />);
    const loadingSpinner = getByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  test("does not render loading spinner when loading is false", () => {
    const { queryByTestId } = render(<LoadingSpinner loading={false} />);
    const loadingSpinner = queryByTestId("loading-spinner");
    expect(loadingSpinner).not.toBeInTheDocument();
  });
});
