import React, { useState } from "react";
import Search from "./Search";
import CustomersList from "./CustomersList";
import image from "../../../assets/frame.png";
import AddDataModal from "./AddDataModal";
const Customers = () => {
  const [showAddDataModal, setShowAddDataModal] = useState(false);
  const handleAddData = () => {
    setShowAddDataModal(false);
  };

  const handleCloseModal = () => {
    setShowAddDataModal(false);
  };

  return (
    <div className="data">
      <div className="app">
        <Search />
        <div className="second">
          <img src={image} alt="pl" />
          <button onClick={() => setShowAddDataModal(true)}>
            Create Attribute
          </button>
        </div>
        {showAddDataModal && (
          <AddDataModal onAddData={handleAddData} onClose={handleCloseModal} />
        )}
        <CustomersList />
      </div>
    </div>
  );
};

export default Customers;
