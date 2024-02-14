import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import TableHead from "../TableHead/TableHead";
import { villainsTableColumns } from "../../constants/contants";
import TableBody from "../TableBody/TableBody";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
import Dropdown from "../Dropdown/Dropdown";
import { villainSortOptions } from "../../constants/contants";
import Button from "../Button/Button";
import { paginate } from "../../utils/paginate";
import { filter } from "../../utils/filter";

const VillainsTable = ({ villains, onSortChange, sortOption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredVillains = filter(villains, searchQuery, "name");
  const { currentItems, totalPages } = paginate(filteredVillains, currentPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
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

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <SearchInput onChange={handleSearchChange} searchValue={searchQuery} />
        <Dropdown
          options={villainSortOptions}
          onSelectChange={onSortChange}
          value={sortOption}
        />
      </div>
      <table className="table-auto">
        <TableHead columns={villainsTableColumns} />
        <TableBody
          data={currentItems}
          columns={villainsTableColumns}
          onRowClick={handleOpenModal}
        />
      </table>
      <div className="flex justify-center my-4">
        <Button disabled={currentPage === 1} onClick={handlePrevPage}>
          Prev{" "}
        </Button>
        <span className="px-4">
          {" "}
          {currentPage} of {totalPages}
        </span>
        <Button disabled={currentPage === totalPages} onClick={handleNextPage}>
          Next
        </Button>
      </div>
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
  onSortChange: PropTypes.func,
  sortOption: PropTypes.string,
};
