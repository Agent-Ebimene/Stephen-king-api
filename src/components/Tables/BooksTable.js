import React, { useState } from "react";
import PropTypes from "prop-types";

import Dropdown from "../Dropdown";
import { bookSortOptions, booksTableColumns } from "../../constants/contants";
import TableHead from "../TableHead";
import TableBody from "../TableBody";
import Modal from "../Modal";
import SearchInput from "../SearchInput";

const BooksTable = ({ currentBooks, onSortChange }) => {
  const [sortBy, setSortBy] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // const handleSortChange = (e) => {
  //   const selectedValue = e.target.value;
  //   setSortBy(selectedValue);
  //   sortByOption(currentBooks, selectedValue);
  // };
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
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };
  const filteredBooks =
    searchQuery && searchQuery.length >= 2
      ? currentBooks.filter((book) => {
          return book?.Title.toLowerCase().includes(searchQuery.toLowerCase());
        })
      : currentBooks;
  console.log(filteredBooks);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <SearchInput onChange={handleSearchChange} searchValue={searchQuery} />
        <Dropdown
          options={bookSortOptions}
          onSelectChange={handleSortChange}
          value={sortBy}
        />
      </div>

      <table className="table-auto">
        <TableHead columns={booksTableColumns} />
        <TableBody
          data={currentBooks}
          columns={booksTableColumns}
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

export default BooksTable;
BooksTable.propTypes = {
  currentBooks: PropTypes.array.isRequired,
  onSortChange: PropTypes.func.isRequired,
};
