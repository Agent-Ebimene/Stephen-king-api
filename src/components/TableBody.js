import React from "react";
import PropTypes from "prop-types";
import { formatDateCreated } from "../utils/formatDateCreated";

const TableBody = ({ data, columns, onRowClick }) => {
  const renderCell = (row, column) => {
    if (column.label === "No of Featured Books") {
      return row.books?.length;
    } else if (column.label === "No of Featured Shorts") {
      return row.shorts?.length;
    } else if (column.label === "Date Created") {
      return formatDateCreated(row.created_at);
    } else {
      return row[column.dataKey];
    }
  };

  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="cursor-pointer">
          {columns.map((column, colIndex) => (
            <td
              key={colIndex}
              className="border border-2 px-4 py-2 text-center"
              onClick={() => onRowClick(row)}
            >
              {renderCell(row, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  onRowClick: PropTypes.func.isRequired,
};

export default TableBody;
