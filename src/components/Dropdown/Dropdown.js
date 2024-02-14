import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, onSelectChange, value }) => {
  return (
    <div className="my-4">
      <label htmlFor="sortBy">Sort By:</label>
      <select
        value={value}
        id="sortBy"
        onChange={onSelectChange}
        className="px-2 py-1 rounded border-gray-300 focus:outline-none focus:border-indigo-500"
      >
        <option value="">Select Option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelectChange: PropTypes.func,
  value: PropTypes.string,
};
