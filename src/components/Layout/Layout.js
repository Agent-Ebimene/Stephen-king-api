import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
