import React, { useState } from "react";
import "../../Settings.scss";
import AssisPrefPopup from "./AssisPrefPopup";
import Cards from "./Cards";

const AssistantPreferences = () => {
  const [showAddDataModal, setShowAddDataModal] = useState(false);

  const handleCloseModal = () => {
    setShowAddDataModal(false);
  };

  return (
    <div>
      <h3 className="tab-heading">AI assistant status</h3>
      <div className="app">
        <Cards />
        <div className="delete-assistant">
          <h3>Delete Assistant</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="button6" onClick={() => setShowAddDataModal(true)}>Delete</button>
        </div>
      </div>
      {showAddDataModal && <AssisPrefPopup onClose={handleCloseModal} />}
    </div>
  );
};

export default AssistantPreferences;
