import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import { bookSortOptions } from "../../constants/contants";
import { sortByOption } from "../utils/sortByOptions";

const BooksTable = ({ books }) => {
  const [sortBy, setSortBy] = useState("");

  const handleSortChange = (selectedOption) => {
    setSortBy(selectedOption);
    // Perform sorting based on selected option
    sortByOption(sortBy);
  };

  return (
    <div className="flex flex-col items-center">
      <Dropdown options={bookSortOptions} onSelectChange={handleSortChange} />
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Publisher</th>
            <th className="px-4 py-2">ISBN</th>
            <th className="px-4 py-2">Pages</th>
            <th className="px-4 py-2">Date Created</th>
            <th className="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {books.map(
            ({ id, Title, ISBN, Pages, created_at, Year, Publisher }) => (
              <tr key={id}>
                <td className="border px-4 py-2 text-center">{Title}</td>
                <td className="border px-4 py-2 text-center">{Publisher}</td>
                <td className="border px-4 py-2 text-center">{ISBN}</td>
                <td className="border px-4 py-2 text-center">{Pages}</td>
                <td className="border px-4 py-2 text-center">{created_at}</td>
                <td className="border px-4 py-2 text-center">{Year}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
BooksTable.propTypes = {
  books: PropTypes.array,
};
