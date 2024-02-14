import React, { useState } from "react";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown/Dropdown";
import { bookSortOptions, booksTableColumns } from "../../constants/contants";
import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";
import { paginate } from "../../utils/paginate";
import { filter } from "../../utils/filter";

const BooksTable = ({ books, onSortChange, sortOption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
  const filteredBooks = filter(books, searchQuery, "Title");
  const { currentItems, totalPages } = paginate(filteredBooks, currentPage);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    console.log(item);
    setIsModalOpen(true);
  };
  const handleSortChange = (selectedValue) => {
    onSortChange(selectedValue);
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
          options={bookSortOptions}
          onSelectChange={handleSortChange}
          value={sortOption}
        />
      </div>

      <table className="table-auto">
        <TableHead columns={booksTableColumns} />
        <TableBody
          data={currentItems}
          columns={booksTableColumns}
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

export default BooksTable;
BooksTable.propTypes = {
  books: PropTypes.array.isRequired,
  onSortChange: PropTypes.func.isRequired,
  sortOption: PropTypes.string,
};
