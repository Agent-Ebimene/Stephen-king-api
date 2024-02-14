import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../Dropdown/Dropdown";
import { shortSortOptions, shortsTableColumns } from "../../constants/contants";
import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";

const ShortsTable = ({ shorts, onSortChange, sortOption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSortChange = (selectedValue) => {
    onSortChange(selectedValue);
    console.log("triggered!!");
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
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredShorts =
    searchQuery && searchQuery.length >= 2
      ? shorts.filter((book) => {
          return book?.title.toLowerCase().includes(searchQuery.toLowerCase());
        })
      : shorts;
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <SearchInput onChange={handleSearchChange} searchValue={searchQuery} />
        <Dropdown
          options={shortSortOptions}
          onSelectChange={handleSortChange}
          value={sortOption}
        />
      </div>

      <table className="table-auto">
        <TableHead columns={shortsTableColumns} />
        <TableBody
          data={filteredShorts}
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
  onSortChange: PropTypes.func,
  sortOption: PropTypes.string,
};
