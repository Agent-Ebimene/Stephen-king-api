import React from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import { villainSortOptions } from "../../constants/contants";

const VillainsTable = ({ villains }) => {
  return (
    <div className="flex flex-col items-center">
      <Dropdown options={villainSortOptions} />
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">No of Featured Books</th>
            <th className="px-4 py-2">No of Featured Shorts</th>
            <th className="px-4 py-2">Date Created</th>
          </tr>
        </thead>
        <tbody>
          {villains.map(
            ({ id, name, gender, shorts, status, notes, created_at }) => (
              <tr key={id}>
                <td className="border px-4 py-2 text-center">{name}</td>
                <td className="border px-4 py-2 text-center">{gender}</td>
                <td className="border px-4 py-2 text-center">{status}</td>
                <td className="border px-4 py-2 text-center">
                  {notes?.length}
                </td>
                <td className="border px-4 py-2 text-center">
                  {shorts?.length}
                </td>
                <td className="border px-4 py-2 text-center">{created_at}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VillainsTable;
VillainsTable.propTypes = {
  villains: PropTypes.array,
};
