import React from "react";
import "./Integrations.scss";
const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="inner">
        <i
          class="fa-solid fa-x"
          style={{
            fontSize: "25px",
            color: "rgba(133, 144, 163, 1)",
            margin: "10px 10px 0px 665px",
          }}
          onClick={onClose}
        ></i>
        <h3>Unlock the Full Power of NAIAD!</h3>
        <div className="heading">
          <p>
            Upgrade to Premium now for exclusive features, advanced tools, and
            premium support to supercharge your NAIAD experience! Maximize your
            potential today!
          </p>
          <span>Upgrade Now</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
