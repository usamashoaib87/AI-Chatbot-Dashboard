import React from "react";
import "./ChatDetail.scss";
const Pop = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="box">
        <i
          class="fa-solid fa-x"
          style={{
            fontSize: "25px",
            color: "rgba(133, 144, 163, 1)",
            margin: "10px 10px 0px 770px",
          }}
          onClick={onClose}
        ></i>
        <p>Assign Chat</p>
        <p>Select the Agent</p>
        <select>
          <option name="agent1">Agent </option>
          <option value="agent2">Agent 2</option>
        </select>
      </div>
    </div>
  );
};

export default Pop;
