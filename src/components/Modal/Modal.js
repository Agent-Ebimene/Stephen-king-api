import React from "react";
import PropTypes from "prop-types";
import { formatDateCreated } from "../../utils/formatDateCreated";
import Button from "../Button/Button";

const Modal = ({ isOpen, item, onClose, table }) => {
  const renderContent = () => {
    switch (table) {
      case "books":
        return (
          <>
            <p className="text-base sm:text-lg mb-4">
              Title:
              <span className="text-purple-500">{item?.Title}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Year:
              <span className="text-purple-500">Year: {item?.Year}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              ISBN:
              <span className="text-purple-500">{item?.ISBN}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Pages:
              <span className="text-purple-500">{item?.Pages}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Publisher:
              <span className="text-purple-500">{item?.Publisher}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Handle:
              <span className="text-purple-500">{item?.handle}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Date Created:
              <span className="text-purple-500">
                {formatDateCreated(item?.created_at)}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Notes:
              <span className="text-purple-500">
                {item?.Notes.length === 0 ||
                (item?.Notes.length === 1 && item?.Notes[0] === "")
                  ? "No notes"
                  : item?.Notes.join(", ")}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Villains:
              <span className="text-purple-500">
                {item?.villains.map((villain) => villain.name).join(", ") ||
                  "No villains"}
              </span>
            </p>
          </>
        );
      case "villains":
        return (
          <>
            {" "}
            <p className="text-base sm:text-lg mb-4">
              Name:
              <span className="text-purple-500">{item?.name}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Featured Books:
              <span className="text-purple-500">
                {item?.books.length === 0 ||
                (item?.books.length === 1 && item?.books[0] === "")
                  ? "No Books"
                  : item?.books.map((book, index) => (
                      <React.Fragment key={index}>
                        {index > 0 && ", "}
                        <span>{book.title}</span>
                      </React.Fragment>
                    ))}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Featured Shorts:
              <span className="text-purple-500">
                {item?.shorts.length === 0 ||
                (item?.shorts.length === 1 && item?.shorts[0] === "")
                  ? "No Shorts"
                  : item?.shorts.map((short) => short.title)}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Status:
              <span className="text-purple-500">{item?.status}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Gender:
              <span className="text-purple-500">{item?.gender}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Notes:
              <span className="text-purple-500">
                {item?.notes.length === 0 ||
                (item?.notes.length === 1 && item?.notes[0] === "")
                  ? "No notes"
                  : item?.notes.join(", ")}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Date Created:
              <span className="text-purple-500">
                {formatDateCreated(item?.created_at)}
              </span>
            </p>
          </>
        );
      case "shorts":
        return (
          <>
            {" "}
            <p className="text-base sm:text-lg mb-4">
              Title:
              <span className="text-purple-500">{item?.title}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              {" "}
              Type:
              <span className="text-purple-500">{item?.type} </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              {" "}
              Year:
              <span className="text-purple-500">{item?.year}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              {" "}
              Handle:
              <span className="text-purple-500">{item?.handle}</span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Originally Published In:
              <span className="text-purple-500">
                {item?.originallyPublishedIn}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Notes:
              <span className="text-purple-500">
                {item?.notes.length === 0 ||
                (item?.notes.length === 1 && item?.notes[0] === "")
                  ? "No notes"
                  : item?.notes.join(", ")}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Villains:
              <span className="text-purple-500">
                {item?.villains.map((villain) => villain.name).join(", ") ||
                  "No villains"}
              </span>
            </p>
            <p className="text-base sm:text-lg mb-4">
              Date Created:
              <span className="text-purple-500">
                {formatDateCreated(item?.created_at)}
              </span>
            </p>
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
          <div className="">{renderContent()}</div>
          <div className="flex justify-center ">
            <Button
              className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded h-10"
              onClick={onClose}
            >
              Close
            </Button>
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
