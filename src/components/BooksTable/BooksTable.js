import React, { useState, useEffect } from "react";
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
import { sortByOption } from "../../utils/sortByOptions";
import { Tab } from "../../constants/contants";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const BooksTable = ({ books }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortedBooks, setSortedBooks] = useState(books);

  const handleSortChange = (event) => {
    let selectedValue = event.target.value;
    setSortBy(selectedValue);
    setCurrentPage(1);
    console.log("selected value", selectedValue);
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
  useEffect(() => {
    sortData(sortBy);
  }, [sortBy]);

  const filteredBooks = filter(sortedBooks, searchQuery, "Title");
  const { currentItems, totalPages } = paginate(filteredBooks, currentPage);
  const sortData = (option) => {
    const sortedBooks =
      option === "" ? books : sortByOption(filteredBooks, option, Tab.BOOKS);
    setSortedBooks(sortedBooks);
  };
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    const filtered = value === "" ? books : filter(books, value, "Title");
    setSortedBooks(filtered);

    setCurrentPage(1);
  };

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
      {sortedBooks.length === 0 ? (
        <ErrorMessage message="No such entry found!" />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="table-auto">
              <TableHead columns={booksTableColumns} />
              <TableBody
                data={currentItems}
                columns={booksTableColumns}
                onRowClick={handleOpenModal}
              />
            </table>
          </div>
          <div className="flex justify-center my-4">
            <Button
              disabled={currentPage === 1}
              onClick={handlePrevPage}
              currentPage={currentPage}
            >
              Prev{" "}
            </Button>
            <span className="px-4">
              {" "}
              {currentPage} of {totalPages}
            </span>
            <Button
              disabled={currentPage === totalPages}
              onClick={handleNextPage}
              // className={"cursor-not-allowed opacity-50"}
              currentPage={currentItems}
              totalPages={totalPages}
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
        table="books"
      />
    </div>
  );
};

export default BooksTable;
BooksTable.propTypes = {
  books: PropTypes.array.isRequired,
};
