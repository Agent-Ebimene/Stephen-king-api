import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput component", () => {
  test("calls onChange handler with input value", () => {
    const mockOnChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput searchQuery="" onChange={mockOnChange} />,
    );
    const inputElement = getByPlaceholderText("Search by name or title");
    const inputValue = "Example Search Query";
    fireEvent.change(inputElement, { target: { value: inputValue } });
    expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
