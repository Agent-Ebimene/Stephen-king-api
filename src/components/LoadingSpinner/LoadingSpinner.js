import React from "react";
import PropTypes from "prop-types";
import FadeLoader from "react-spinners/FadeLoader";

const LoadingSpinner = ({ loading }) => {
  return (
    <>
      {loading && (
        <div
          className="flex justify-center items-center h-screen"
          data-testid="loading-spinner"
        >
          <FadeLoader color="grey" loading={loading} />
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;

LoadingSpinner.propTypes = {
  loading: PropTypes.bool,
};
