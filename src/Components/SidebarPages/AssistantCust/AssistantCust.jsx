import React, { useState } from "react";
import "./AssistantCust.scss";
import image from "../../../assets/botpic.png";
import image1 from "../../../assets/labelgroup.png";
import reco from "../../../assets/reco.png";
const AssistantCust = () => {
  const [botTheme, setBotTheme] = useState("#0C0698");
  const [botMessageColor, setBotMessageColor] = useState("#0C0698");
  const [userMessageColor, setUserMessageColor] = useState("#0C0698");
  const [accentsColor, setAccentsColor] = useState("#0C0698");
  const [backgroundColor, setBackgroundColor] = useState("#0C0698");
  const [sidebarColor, setSidebarColor] = useState("#0C0698");
  const [botFirstMessage, setBotFirstMessage] = useState(
    "Hey! How can I help you today?"
  );

  return (
    <div className="data">
      <div className="header1">
        <h1>Assistant customization</h1>
        <i class="fas fa-search"></i>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className="assistant-customization">
        <label htmlFor="bot-profile-picture">Bot Profile Picture</label>
        <div className="bot-profile-picture">
          <img src={image} alt="" />
          <p>Allowed file types: png, jpg, jpeg.</p>
        </div>
        <div className="bot-theme">
          <label htmlFor="bot-theme">Choose Bot theme</label>
          <input
            type="color"
            id="bot-theme"
            value={botTheme}
            onChange={(e) => setBotTheme(e.target.value)}
          />
        </div>
        <div className="bot-message-color">
          <label htmlFor="bot-message-color">Bot Message Color</label>
          <input
            type="color"
            id="bot-message-color"
            value={botMessageColor}
            onChange={(e) => setBotMessageColor(e.target.value)}
          />
        </div>
        <div className="user-message-color">
          <label htmlFor="user-message-color">User Message Color</label>
          <input
            type="color"
            id="user-message-color"
            value={userMessageColor}
            onChange={(e) => setUserMessageColor(e.target.value)}
          />
        </div>
        <div className="accents-color">
          <label htmlFor="accents-color">Accents Color</label>

          <input
            type="color"
            id="accents-color"
            value={accentsColor}
            onChange={(e) => setAccentsColor(e.target.value)}
          />
        </div>
        <div className="background-color">
          <label htmlFor="background-color">Background Color</label>

          <input
            type="color"
            id="background-color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
        <div className="sidebar-color">
          <label htmlFor="sidebar-color">Side Bar Color</label>
          <input
            type="color"
            id="sidebar-color"
            value={sidebarColor}
            onChange={(e) => setSidebarColor(e.target.value)}
          />
        </div>
        <div className="bot-first-message">
          <label htmlFor="bot-first-message">Bot First Message</label>
          <br />
          <input
            id="bot-first-message"
            value={botFirstMessage}
            onChange={(e) => setBotFirstMessage(e.target.value)}
          />
        </div>
        <button>Save the changes</button>
      </div>
      <div className="smallbox">
        <div className="header2">
          <img src={image1} alt="" />
        </div>
        <div className="content">
          <p>Hey!How can I help you today?</p>
        </div>
        <div className="foot">
          <input type="text" placeholder="   Ask me anything" />
          <img className="reco" src={reco} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AssistantCust;
