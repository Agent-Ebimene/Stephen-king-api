import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders button with provided children", () => {
    const buttonText = "Click me";
    const { getByText } = render(<Button>{buttonText}</Button>);
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>,
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables button when disabled prop is true", () => {
    const { getByRole } = render(<Button disabled={true}>Click me</Button>);
    expect(getByRole("button")).toBeDisabled();
  });

  it("does not disable button when disabled prop is false", () => {
    const { getByRole } = render(<Button disabled={false}>Click me</Button>);
    expect(getByRole("button")).not.toBeDisabled();
  });
});
