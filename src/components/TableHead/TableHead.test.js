import React from "react";
import { render } from "@testing-library/react";
import TableHead from "./TableHead";

describe("TableHead component", () => {
  test("renders table head correctly with given columns", () => {
    const columns = [
      { label: "Name" },
      { label: "Age" },
      { label: "Location" },
    ];

    const { getAllByRole } = render(
      <table>
        <TableHead columns={columns} />
      </table>,
    );
    const thElements = getAllByRole("columnheader");

    expect(thElements).toHaveLength(columns.length);

    columns.forEach((column, index) => {
      expect(thElements[index]).toHaveTextContent(column.label);
    });
  });
});
