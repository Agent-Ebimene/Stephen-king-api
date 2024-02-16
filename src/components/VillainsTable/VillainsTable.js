import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
import { sortByOption } from "../../utils/sortByOptions";
import { Tab } from "../../constants/contants";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const VillainsTable = ({ villains }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortedVillains, setSortedVillains] = useState(villains);

  useEffect(() => {
    sortData(sortBy);
  }, [sortBy]);
  const sortData = (option) => {
    const sortedVillains =
      option === ""
        ? villains
        : sortByOption(filteredVillains, option, Tab.VILLAINS);
    setSortedVillains(sortedVillains);
  };

  const filteredVillains = filter(sortedVillains, searchQuery, "name");
  const { currentItems, totalPages } = paginate(filteredVillains, currentPage);
  const handleSortChange = (event) => {
    let selectedValue = event.target.value;
    setSortBy(selectedValue);
  };

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
    const { value } = e.target;
    setSearchQuery(value);
    const filtered = value === "" ? villains : filter(villains, value, "name");
    setSortedVillains(filtered);

    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <SearchInput onChange={handleSearchChange} searchValue={searchQuery} />
        <Dropdown
          options={villainSortOptions}
          onSelectChange={handleSortChange}
          value={sortBy}
        />
      </div>

      {sortedVillains.length === 0 ? (
        <ErrorMessage message="No such entry found!" />
      ) : (
        <>
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
            <Button
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </div>
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
        table="villains"
      />
    </div>
  );
};

export default VillainsTable;
VillainsTable.propTypes = {
  villains: PropTypes.array.isRequired,
};
