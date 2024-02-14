import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="bg-gray-600 text-white w-20 rounded h-8"
    >
      {children}
    </button>
  );
};

export default Button;
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
