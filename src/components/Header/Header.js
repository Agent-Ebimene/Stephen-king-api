import React from "react";
import { useState, useEffect } from "react";

import TabItem from "../Tabs/TabItem";
import { Tab } from "../../constants/contants";
import BooksTable from "../BooksTable/BooksTable";
import ShortsTable from "../ShortsTable/ShortsTable";
import VillainsTable from "../VillainsTable/VillainsTable";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Header = () => {
  const [activeTab, setActiveTab] = useState(Tab.BOOKS);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [villains, setVillains] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { label: "books", endpoint: "api/books", setData: setBooks },
    { label: "shorts", endpoint: "api/shorts", setData: setShorts },
    { label: "villains", endpoint: "api/villains", setData: setVillains },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async (tabLabel) => {
      const { endpoint, setData } = tabs.find((tab) => tab.label === tabLabel);
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        const result = await response.json();
        setData(result.data);

        setLoading(false);
        setError(null);
      } catch (error) {
        setError("Error Fetching table data, check your network");
        setLoading(false);
      }
    };
    fetchData(activeTab);
  }, [activeTab]);

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
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <div className="container mx-auto mt-4">
            {activeTab === Tab.BOOKS && <BooksTable books={books} />}
            {activeTab === Tab.SHORTS && <ShortsTable shorts={shorts} />}
            {activeTab === Tab.VILLAINS && (
              <VillainsTable villains={villains} />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
