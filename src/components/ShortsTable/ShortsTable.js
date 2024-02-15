import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown/Dropdown";
import { shortSortOptions, shortsTableColumns } from "../../constants/contants";
import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";
import { paginate } from "../../utils/paginate";
import { filter } from "../../utils/filter";
import { sortByOption } from "../../utils/sortByOptions";
import { Tab } from "../../constants/contants";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";

const ShortsTable = ({ shorts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortedShorts, setSortedShorts] = useState(shorts);
  // const [sortError] = useState(false);

  const filteredShorts = filter(sortedShorts, searchQuery, "title");
  const { currentItems, totalPages } = paginate(filteredShorts, currentPage);

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

  const handleSortChange = (event) => {
    let selectedValue = event.target.value;
    setSortBy(selectedValue);
    console.log("Yess", selectedValue);
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
    setCurrentPage(1);
  };
  useEffect(() => {
    sortData(sortBy);
  }, [sortBy, sortedShorts]);
  const sortData = (option) => {
    const sortedShorts = sortByOption(filteredShorts, option, Tab.SHORTS);
    setSortedShorts(sortedShorts);

    // setSortError(true);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <SearchInput onChange={handleSearchChange} searchValue={searchQuery} />
        <Dropdown
          options={shortSortOptions}
          onSelectChange={handleSortChange}
          value={sortBy}
        />
      </div>
      {/* {sortError ? (
        <ErrorMessage message={"There is no such entry"} />
      ) : (
        <> */}
      <table className="table-auto">
        <TableHead columns={shortsTableColumns} />
        <TableBody
          data={currentItems}
          columns={shortsTableColumns}
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
        table="shorts"
      />
    </div>
  );
};

export default ShortsTable;
ShortsTable.propTypes = {
  shorts: PropTypes.array.isRequired,
};
