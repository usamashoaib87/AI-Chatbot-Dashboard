import React from "react";
import "../../Settings.scss";
const AssisPrefPopup = ({ onClose }) => {
  return (
    <div className="del-popup">
      <div className="iner">
        <div>
        <h2>Delete Assistant</h2>
        <i
          class="fa-solid fa-x"
          style={{
            fontSize: "20px",
            color: "rgba(133, 144, 163, 1)",
            margin: "20px 0px 0px 560px",
            cursor: "pointer",
          }}
          onClick={onClose}
        ></i>
        </div>
        <div className="pcards">
          <p>Assistant 1</p>
          <button>Delete</button>
        </div>
        <div className="pcards1">
          <p>Assistant 1</p>
          <button>Delete</button>
        </div>
        <div className="pcards1">
          <p>Assistant 1</p>
          <button>Delete</button>
        </div>
        <div className="pcards1">
          <p>Assistant 1</p>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AssisPrefPopup;
