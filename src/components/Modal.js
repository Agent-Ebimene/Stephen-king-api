import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, item, onClose }) => {
  const getProperty = (obj, path) => {
    return path.split(".").reduce((acc, curr) => {
      return acc && acc[curr] !== undefined ? acc[curr] : null;
    }, obj);
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
          <h2 className="text-xl sm:text-2xl  mb-2">
            Title :{getProperty(item, "title")}
          </h2>
          <p className="text-base sm:text-lg mb-4">
            Year :{getProperty(item, "Year")}
          </p>
          <div className="flex justify-center mt-80">
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
};

export default Modal;
