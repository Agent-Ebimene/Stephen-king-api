import React from "react";
import PropTypes from "prop-types";

const BooksTable = ({ books }) => {
  return (
    <div className="flex justify-center">
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
