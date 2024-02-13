import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import TableHead from "../TableHead";
import { villainsTableColumns } from "../../constants/contants";
import TableBody from "../TableBody";
import Modal from "../Modal";
// import Dropdown from "../Dropdown";
// import { villainSortOptions } from "../../constants/contants";

const VillainsTable = ({ villains }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    console.log(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  return (
    <div className="flex flex-col items-center">
      {/* <Dropdown options={villainSortOptions} /> */}
      <table className="table-auto">
        <TableHead columns={villainsTableColumns} />
        <TableBody
          data={villains}
          columns={villainsTableColumns}
          onRowClick={handleOpenModal}
        />
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        item={selectedItem}
      />
    </div>
  );
};

export default VillainsTable;
VillainsTable.propTypes = {
  villains: PropTypes.array.isRequired,
};
