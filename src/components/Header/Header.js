import React from "react";
import { useState, useEffect } from "react";

import TabItem from "../Tabs/TabItem";
import { Tab } from "../../constants/contants";
import BooksTable from "../Tables/BooksTable";
import ShortsTable from "../Tables/ShortsTable";
import VillainsTable from "../Tables/VillainsTable";
import LoadingSpinner from "../LoadingSpinner";
// import { sortByOption } from "../../utils/sortByOptions";

const Header = () => {
  const [activeTab, setActiveTab] = useState(Tab.BOOKS);
  const [data, setData] = useState([]);
  const [itemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  useEffect(() => {
    fetchData();
    console.log(data);
  }, [activeTab, totalPages, sortBy]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`api/${activeTab}`);
      const result = await response.json();
      // let sortedData = [...result.data];
      // if (sortBy) {
      //   sortedData = sortByOption(sortedData, sortBy);
      // }
      setData(result.data);
      setCurrentPage(1);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error); // handle this in the UI
    }
  };
  const handleSortChange = (selectedValue) => {
    setSortBy(selectedValue);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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

  return (
    <>
      <header className="bg-gray-800 text-white py-2">
        <div className="container mx-auto flex justify-center items-center">
          <div className="flex space-x-4">
            <TabItem
              tab={Tab.BOOKS}
              activeTab={activeTab}
              onClick={handleTabClick}
            >
              Books
            </TabItem>
            <TabItem
              tab={Tab.SHORTS}
              activeTab={activeTab}
              onClick={handleTabClick}
            >
              Shorts
            </TabItem>
            <TabItem
              tab={Tab.VILLAINS}
              activeTab={activeTab}
              onClick={handleTabClick}
            >
              Villains
            </TabItem>
          </div>
        </div>
      </header>
      <div>
        {loading ? (
          <LoadingSpinner loading={loading} />
        ) : (
          <div className="container mx-auto mt-4">
            {activeTab === Tab.BOOKS && (
              <BooksTable
                currentBooks={currentItems}
                onSortChange={handleSortChange}
              />
            )}
            {activeTab === Tab.SHORTS && <ShortsTable shorts={currentItems} />}
            {activeTab === Tab.VILLAINS && (
              <VillainsTable villains={currentItems} />
            )}
            <div className="flex justify-center my-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="bg-gray-600 text-white w-20 rounded h-8"
              >
                Previous
              </button>
              <span className="px-4">
                {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-600 text-white w-20 h-8 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
