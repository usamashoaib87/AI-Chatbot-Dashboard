import React, { useState } from "react";
import image from '../../../assets/uploadIcon.png';
import image1 from '../../../assets/uploadBlue.png';
const AddDataModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");

  const onFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="add-data-modal popup">
      <div className="modal-content">
        <i
          class="fa-solid fa-x"
          style={{
            fontSize: "25px",
            color: "rgba(133, 144, 163, 1)",
            margin: "15px 15px 0px 1065px",
            cursor: "pointer",
          }}
          onClick={onClose}
        ></i>
        <h2>Add Data</h2>
        <div className="file-upload">
          <img src={image} alt="fds" />
          <p>Drag n Drop resource(s) here <br /> 
               Paste link to Grabber </p>
          <br />
          
          <input type="file" onChange={onFileChange} />
          <br />
          <button><img src={image1} alt="gfd" /> Choose file</button>
          {selectedFile && <p>Selected file: {fileName}</p>}
        </div>
      </div>
    </div>
  );
};

export default AddDataModal;
