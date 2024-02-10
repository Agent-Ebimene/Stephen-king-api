import React from "react";
import PropTypes from "prop-types";

const TabItem = ({ tab, activeTab, onClick, children }) => {
  return (
    <button
      className={`text-md w-32 px-4 py-2 focus:outline-none ${
        activeTab === tab ? "bg-gray-600" : "bg-gray-800"
      }`}
      onClick={() => onClick(tab)}
    >
      {children}
    </button>
  );
};

export default TabItem;

TabItem.propTypes = {
  tab: PropTypes.string,
  activeTab: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
