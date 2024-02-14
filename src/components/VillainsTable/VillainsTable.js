import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import TableHead from "../TableHead/TableHead";
import { villainsTableColumns } from "../../constants/contants";
import TableBody from "../TableBody/TableBody";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
// import Dropdown from "../Dropdown";
// import { villainSortOptions } from "../../constants/contants";

const VillainsTable = ({ villains }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
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
  const filteredVillains =
    searchQuery && searchQuery.length >= 2
      ? villains.filter((villain) => {
          return villain?.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      : villains;
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <SearchInput onChange={handleSearchChange} searchValue={searchQuery} />
        {/* <Dropdown
          options={shortSortOptions}
          onSelectChange={handleSortChange}
          value={sortOption}
        /> */}
      </div>
      <table className="table-auto">
        <TableHead columns={villainsTableColumns} />
        <TableBody
          data={filteredVillains}
          columns={villainsTableColumns}
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

export default VillainsTable;
VillainsTable.propTypes = {
  villains: PropTypes.array.isRequired,
};
