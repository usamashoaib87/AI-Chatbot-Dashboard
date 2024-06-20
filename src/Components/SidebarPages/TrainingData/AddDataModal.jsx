import React from 'react';

const AddDataModal = ({ onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="add-data-modal popup">
      <div className="modal-content">
        <h2 style={{ color: "white" }}>Add New Data</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" style={{ color: "white", fontSize: "20px" }}>
            File Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            style={{ height: "30px", marginLeft: "" }}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="size" style={{ color: "white", fontSize: "20px" }}>
            Size:
          </label>
          <input
            type="text"
            id="size"
            name="size"
            style={{ height: "30px", marginLeft: "53px" }}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="date" style={{ color: "white", fontSize: "20px" }}>
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            style={{ height: "30px", marginLeft: "50px" }}
            required
          />
          <br></br>
          <br></br>
          <label htmlFor="storage" style={{ color: "white", fontSize: "20px" }}>
            Storage:
          </label>
          <input
            type="text"
            id="storage"
            name="storage"
            style={{ height: "30px", marginLeft: "23px" }}
            required
          />
          <br></br>
          <br></br>
          <div className="modal-actions" style={{ marginTop: "20px" }}>
            <button
              type="submit"
              style={{ color: "black", fontSize: "20px", marginRight: "10px" }}
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{ color: "black", fontSize: "20px" }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDataModal;
