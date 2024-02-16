import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TabItem from "./TabItem";

describe("TabItem component", () => {
  test("renders tab item correctly with given props", () => {
    const tab = "Books";
    const activeTab = "Books";
    const onClick = jest.fn();
    const { getByText } = render(
      <TabItem tab={tab} activeTab={activeTab} onClick={onClick}>
        {tab}
      </TabItem>,
    );

    const buttonElement = getByText(tab);

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("bg-gray-600");

    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledWith(tab);
  });
});
