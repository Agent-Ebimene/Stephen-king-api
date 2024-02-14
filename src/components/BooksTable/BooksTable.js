import React, { useState } from "react";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown/Dropdown";
import { bookSortOptions, booksTableColumns } from "../../constants/contants";
import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";
import Modal from "../Modal/Modal";
import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";

const BooksTable = ({ currentBooks, onSortChange, sortOption }) => {
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
  const filteredBooks =
    searchQuery && searchQuery.length >= 2
      ? currentBooks.filter((book) => {
          return book?.Title.toLowerCase().includes(searchQuery.toLowerCase());
        })
      : currentBooks;
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(currentBooks.length / itemsPerPage);

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
  currentBooks: PropTypes.array.isRequired,
  onSortChange: PropTypes.func.isRequired,
  sortOption: PropTypes.string,
};
