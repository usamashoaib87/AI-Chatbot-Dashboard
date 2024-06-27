import React, { useState } from "react";
import "../../Settings.scss";

const Popup = ({ onClose }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="pop-box">
      <div className="inner">
        <i
          class="fa-solid fa-x"
          style={{
            fontSize: "25px",
            color: "rgba(133, 144, 163, 1)",
            margin: "15px 15px 0px 965px",
            cursor: "pointer",
          }}
          onClick={onClose}
        ></i>
        <p>Create new role</p>
        <label>Role name</label> <br />
        <input type="text" placeholder="Placeholder"></input>
        <p>Permissions</p>
        <div className="first-row">
          <p>Pages</p>
          <p>View access</p>
          <p>Edit access</p>
        </div>
        <div className="second-row">
          <p>Inbox</p>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
        </div>
        <div className="second-row">
          <p>Inbox</p>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
        </div>
        <div className="second-row">
          <p>Inbox</p>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
        </div>
        <div className="second-row">
          <p>Inbox</p>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
          <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
           <div className="toggle-knob"></div>
          </div>
        </div>
        <button>Create role</button>
      </div>
    </div>
  );
};

export default Popup;
