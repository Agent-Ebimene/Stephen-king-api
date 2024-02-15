import React from "react";
import PropTypes from "prop-types";
import { formatDateCreated } from "../../utils/formatDateCreated";

const Modal = ({ isOpen, item, onClose, table }) => {
  const renderContent = () => {
    switch (table) {
      case "books":
        return (
          <>
            <h2 className="text-xl sm:text-2xl  mb-2">Title: {item?.Title}</h2>
            <p className="text-base sm:text-lg mb-4">Year: {item?.Year}</p>
            <p className="text-base sm:text-lg mb-4">ISBN: {item?.ISBN}</p>
            <p className="text-base sm:text-lg mb-4">Pages: {item?.Pages}</p>
            <p className="text-base sm:text-lg mb-4">
              Publisher: {item?.Publisher}
            </p>

            {/* Render additional book-specific properties */}
          </>
        );
      case "villains":
        return (
          <>
            {" "}
            <h2 className="text-xl sm:text-2xl  mb-2">Title: {item?.name}</h2>
            <p className="text-base sm:text-lg mb-4">
              No of Featured Books: {item?.books.length}
            </p>
            <p className="text-base sm:text-lg mb-4">
              {" "}
              No of Featured Shorts: {item?.shorts.length}
            </p>
            <p className="text-base sm:text-lg mb-4">Status: {item?.status}</p>
            <p className="text-base sm:text-lg mb-4">Gender: {item?.gender}</p>
            <p className="text-base sm:text-lg mb-4">
              Date Created: {formatDateCreated(item?.created_at)}
            </p>
          </>
        );
      case "shorts":
        return (
          <>
            {" "}
            <h2 className="text-xl sm:text-2xl  mb-2">Title: {item?.title}</h2>
            <p className="text-base sm:text-lg mb-4">Year: {item?.year}</p>
            <p className="text-base sm:text-lg mb-4">
              Date Created: {formatDateCreated(item?.created_at)}
            </p>
            <p className="text-base sm:text-lg mb-4">
              {" "}
              Originally Published: {item?.originallyPublishedIn}
            </p>
            <p className="text-base sm:text-lg mb-4">Type: {item?.type}</p>
            {/* <p className="text-base sm:text-lg mb-4">Gender: {item?.gender}</p> */}
          </>
        );
      default:
        return;
    }
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="z-20 bg-white rounded-lg p-4 mx-4 my-8 sm:max-w-3xl w-full h-screen">
          {renderContent()}
          <div className="flex justify-center mt-16">
            <button
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  table: PropTypes.string,
};

export default Modal;
