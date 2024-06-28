import React from "react";
import "./AssistantCust.scss";
import image from "../../../assets/botpic.png";
import image1 from "../../../assets/labelgroup.png";
import reco from "../../../assets/reco.png";
import Colors from "./Colors";

const AssistantCust = () => {
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
          <img src={image} alt="gfd" />
          <p>Allowed file types: png, jpg, jpeg.</p>
        </div>
        <div className="components">
          <div className="inner-div">
            <Colors header="Choose Bot theme " />
            <Colors header="User Message Color " />
            <Colors header="Background Color " />
          </div>
          <div className="inner-div">
            <Colors header="Bot Message Color " />
            <Colors header="Accents Color " />
            <Colors header="Side Bar Color " />
          </div>
        </div>
        <div className="bot-first-message">
          <p>Bot First Message</p>
          <input
            id="bot-first-message"
            placeholder="Hey! How can I help you today?"
          />
        </div>
        <button>Save the changes</button>
      </div>
      <div className="smallbox">
        <div className="header2">
          <img src={image1} alt="iyui" />
        </div>
        <div className="content">
          <p>Hey!How can I help you today?</p>
        </div>
        <div className="foot">
          <input type="text" placeholder="   Ask me anything" />
          <img className="reco" src={reco} alt="hj" />
        </div>
      </div>
    </div>
  );
};

export default AssistantCust;
