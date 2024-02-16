import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <div>
      <div className="container mx-auto mt-4 ">
        <div className="flex justify-center items-center h-screen w-full">
          <p className="text-red-500  sm:text-xl text-center">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
ErrorMessage.propTypes = {
  message: PropTypes.string,
};
