import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown";
import { shortSortOptions, shortsTableColumns } from "../../constants/contants";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import Modal from "../Modal";

const ShortsTable = ({ shorts, onSortChange }) => {
  const [sortBy, setSortBy] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSortBy(selectedValue);
    onSortChange(selectedValue); // Notify parent component about the sort change
  };
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    console.log(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  return (
    <div className="flex flex-col items-center">
      <Dropdown
        options={shortSortOptions}
        onSelectChange={handleSortChange}
        value={sortBy}
      />

      <table className="table-auto">
        <TableHead columns={shortsTableColumns} />
        <TableBody
          data={shorts}
          columns={shortsTableColumns}
          onRowClick={handleOpenModal}
        />
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default ShortsTable;
ShortsTable.propTypes = {
  shorts: PropTypes.array.isRequired,
  onSortChange: PropTypes.func.isRequired,
};
