import React from "react";
import PropTypes from "prop-types";

const SearchInput = ({ searchQuery, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name or title"
      value={searchQuery}
      onChange={onChange}
      className="px-3 py-1 border rounded-md mr-2"
    />
  );
};

export default SearchInput;
SearchInput.propTypes = {
  searchQuery: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
