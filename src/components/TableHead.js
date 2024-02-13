import React from "react";
import PropTypes from "prop-types";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index} className="px-4 py-2 border border-2">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
TableHead.propTypes = {
  columns: PropTypes.array.isRequired,
};
