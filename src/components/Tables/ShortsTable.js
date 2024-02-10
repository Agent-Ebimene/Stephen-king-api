import React from "react";
import PropTypes from "prop-types";

const ShortsTable = ({ shorts }) => {
  return (
    <div className="flex justify-center">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Originally Publshed In</th>
            <th className="px-4 py-2">Year</th>
            <th className="px-4 py-2">Date Created</th>
            <th className="px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {shorts.map(
            ({ id, title, originallyPublishedIn, type, year, created_at }) => (
              <tr key={id}>
                <td className="border px-4 py-2 text-center">{title}</td>
                <td className="border px-4 py-2 text-center">
                  {originallyPublishedIn}
                </td>
                <td className="border px-4 py-2 text-center">{type}</td>
                <td className="border px-4 py-2 text-center">{year}</td>
                <td className="border px-4 py-2 text-center">{created_at}</td>
                <td className="border px-4 py-2 text-center">{year}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShortsTable;
ShortsTable.propTypes = {
  shorts: PropTypes.array,
};
