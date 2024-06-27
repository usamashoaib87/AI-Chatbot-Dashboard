import React, { useState } from "react";
import "../../Settings.jsx";
import Rows from "./Rows.jsx";
import Popup from "./Popup.jsx";
const MyTeam = () => {
  const [showAddDataModal, setShowAddDataModal] = useState(false);

  const handleCloseModal = () => {
    setShowAddDataModal(false);
  };
  return (
    <div className="my-team">
      <div className="heading1">
        <p>Roles</p>
      </div>
      <div className="heading2">
        <p>
          Manage roles and permissions. You can use these roles when inviting
          members to your team
        </p>
        <button onClick={() => setShowAddDataModal(true)}>
          + Create new role
        </button>
      </div>
      <div className="heading3">
        <p>Team Members</p>
      </div>
      <div className="members">
        <div className="heading4">
          <p>
            Manage your team members and and provide access to new team members
          </p>
          <button>+ Add new member</button>
        </div>
        <div className="row1">
          <p>#</p>
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Status</p>
        </div>
        <Rows number="1." />
        <Rows number="2." />
        <Rows number="3." />
        <Rows number="4." />
      </div>
      {showAddDataModal && <Popup onClose={handleCloseModal} />}
    </div>
  );
};

export default MyTeam;
