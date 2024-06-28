import React, { useState } from "react";
import { ChromePicker } from "react-color";

import "./AssistantCust.scss";
const Colors = (props) => {
  const [color, setColor] = useState("#0C0698");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleChange = (color) => {
    setColor(
      color.hex +
        Math.round(color.rgb.a * 255)
          .toString(16)
          .padStart(2, "0")
    ); // Update color in real-time with alpha
  };

  const handleChangeComplete = (color) => {
    setColor(
      color.hex +
        Math.round(color.rgb.a * 255)
          .toString(16)
          .padStart(2, "0")
    ); // Update color with alpha
  };

  const handleColorBoxClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };
  const handleClosePicker = () => {
    setDisplayColorPicker(false); // Hide the color picker
  };
  return (
    <div className="bot-theme">
      <div className="app-container">
        <h1 className="header">{props.header}</h1>
        <div className="picker-container">
          <div>
            {displayColorPicker && (
              <div>
                <div className="overlay" onClick={handleClosePicker} />
                <div className="picker">
                  <ChromePicker
                    color={color}
                    onChange={handleChange} // Update the color while dragging
                    onChangeComplete={handleChangeComplete} // Update color with alpha
                  />
                  {/* <button onClick={handleClosePicker}>Select Color</button> */}
                </div>
              </div>
            )}
          </div>
          <div className="display-container">
            <input
              type="text"
              value={color.toUpperCase()}
              readOnly
              className="color-input"
            />
            <div
              className="color-box"
              style={{ backgroundColor: color }}
              onClick={handleColorBoxClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
